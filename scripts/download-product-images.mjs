import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const constantsPath = path.join(root, 'src', 'constants.ts');
const outputDir = path.join(root, 'src', 'assets', 'product-images');

const searchOverrides = {
  'screw-driver': 'Screwdriver cocktail',
  'long-island-ice-tea': 'Long Island Iced Tea cocktail',
  'adios-motherfucker': 'Adios Motherfucker cocktail',
  'chapman-alcoholic': 'Chapman drink cocktail Nigeria',
  'special-cocktails': 'cocktail glass mixed drink',
  'blue-hawaiian-cocktail': 'Blue Hawaiian cocktail',
  'classic-daiquiri': 'Daiquiri cocktail',
  'frozen-virgin-colada': 'Virgin pina colada cocktail',
  'blue-lagoon-cream': 'Blue Lagoon mocktail',
  'mango-bull': 'mango mocktail drink',
  'alice-mocktails': 'mocktail fruit drink',
  'tropical-island': 'tropical mocktail',
  'strawberry-coconut': 'strawberry coconut mocktail',
  'chapman-mocktail': 'Chapman drink Nigeria',
  'blue-hawaiian-mocktail': 'Blue Hawaiian mocktail',
  'strawberry-daiquiri-mock': 'strawberry daiquiri mocktail',
  'milk-shakes-smoothies': 'milkshake smoothie drinks',
  'fresh-juices': 'fresh fruit juices',
  'hennessy-vsop': 'Hennessy VSOP bottle',
  'hennessy-vs': 'Hennessy VS bottle',
  'martell-vsop': 'Martell VSOP bottle',
  'martell-vs': 'Martell VS bottle',
  'jack-daniels': 'Jack Daniel whiskey bottle',
  'red-label': 'Johnnie Walker Red Label bottle',
  'william-lawson': "William Lawson's whisky bottle",
  'glenfiddich': 'Glenfiddich bottle',
  'jameson-green': 'Jameson Irish Whiskey bottle',
  'jameson-black-barrel': 'Jameson Black Barrel bottle',
  'dusse': "D'usse cognac bottle",
  'don-julio': 'Don Julio tequila bottle',
  'casamigos': 'Casamigos tequila bottle',
  'patron': 'Patron tequila bottle',
  'olmeca': 'Olmeca tequila bottle',
  'sierra': 'Sierra tequila bottle',
  'azul-plata': 'Clase Azul Plata bottle',
  'azul-clase': 'Clase Azul Reposado bottle',
  'carlo-rossi': 'Carlo Rossi wine bottle',
  '4-cousins': 'Four Cousins wine bottle',
  'moet-rose': 'Moet Rose champagne bottle',
  'belaire': 'Luc Belaire bottle',
  'veuve-clicquot-rich': 'Veuve Clicquot Rich bottle',
  'martini-rose': 'Martini Rose bottle',
  'coke': 'Coca Cola bottle',
  'fayrouz': 'Fayrouz drink bottle',
  'water': 'bottled water',
  'chivita-active': 'Chivita Active juice bottle',
  'hollandia-yoghurt': 'Hollandia yoghurt drink',
  'cranberry': 'cranberry juice bottle',
  'power-horse': 'Power Horse energy drink',
  'red-bull': 'Red Bull can',
};

const fallbackByCategory = {
  cocktails: 'cocktail glass mixed drink',
  mocktails: 'mocktail fruit drink',
  'cognacs-whiskeys': 'whiskey bottle',
  tequila: 'tequila bottle',
  'red-wine-champagne': 'champagne bottle',
  'beer-soft-drinks-water': 'soft drink bottle',
  'energy-drinks': 'energy drink can',
};

const userAgent = 'BackroomLoungeImageUpdater/1.0 (local app asset update)';

function parseItems(content) {
  const menuItemsStart = content.indexOf('export const MENU_ITEMS');
  const itemContent = menuItemsStart === -1 ? content : content.slice(menuItemsStart);
  const itemRegex = /\{\s*id:\s*'([^']+)',\s*name:\s*(['"])(.*?)\2,\s*description:\s*(['"])(.*?)\4,\s*price:\s*([^,]+),\s*category:\s*'([^']+)',\s*image:\s*[^}]+?\}/gs;
  return [...itemContent.matchAll(itemRegex)].map((match) => ({
    id: match[1],
    name: match[3],
    category: match[7],
  }));
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function commonsSearch(query) {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: `filetype:bitmap ${query}`,
    gsrnamespace: '6',
    gsrlimit: '10',
    prop: 'imageinfo',
    iiprop: 'url|mime',
    iiurlwidth: '900',
    format: 'json',
    origin: '*',
  });

  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, {
    headers: { 'User-Agent': userAgent },
  });

  if (!response.ok) {
    throw new Error(`Commons search failed for ${query}: ${response.status}`);
  }

  const json = await response.json();
  const pages = Object.values(json.query?.pages ?? {});
  return pages
    .map((page) => page.imageinfo?.[0])
    .filter((info) => info?.thumburl && info?.mime?.startsWith('image/'));
}

async function duckDuckGoSearch(query) {
  const htmlResponse = await fetch(`https://duckduckgo.com/?q=${encodeURIComponent(query)}&iax=images&ia=images`, {
    headers: { 'User-Agent': userAgent },
  });

  if (!htmlResponse.ok) {
    throw new Error(`Image search page failed for ${query}: ${htmlResponse.status}`);
  }

  const html = await htmlResponse.text();
  const vqd = html.match(/vqd=['"]?([^'"&]+)['"]?/)?.[1];
  if (!vqd) {
    throw new Error(`No image search token for "${query}"`);
  }

  const params = new URLSearchParams({
    l: 'us-en',
    o: 'json',
    q: query,
    vqd,
    f: ',,,',
    p: '1',
  });
  const imageResponse = await fetch(`https://duckduckgo.com/i.js?${params}`, {
    headers: {
      'User-Agent': userAgent,
      Referer: 'https://duckduckgo.com/',
    },
  });

  if (!imageResponse.ok) {
    throw new Error(`Image search failed for ${query}: ${imageResponse.status}`);
  }

  const json = await imageResponse.json();
  return (json.results ?? [])
    .map((result) => result.image)
    .filter((url) => typeof url === 'string' && /^https?:\/\//.test(url));
}

async function download(url, target) {
  const response = await fetch(url, {
    headers: { 'User-Agent': userAgent },
  });

  if (!response.ok) {
    throw new Error(`Download failed ${url}: ${response.status}`);
  }

  const contentType = response.headers.get('content-type') ?? '';
  if (!contentType.startsWith('image/')) {
    throw new Error(`Not an image: ${url}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 2048) {
    throw new Error(`Image too small: ${url}`);
  }
  await fs.writeFile(target, bytes);
}

function productImageUrl(id) {
  return `new URL('./assets/product-images/${id}.jpg', import.meta.url).href`;
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  const content = await fs.readFile(constantsPath, 'utf8');
  const items = parseItems(content);
  const failures = [];

  for (const [index, item] of items.entries()) {
    const target = path.join(outputDir, `${item.id}.jpg`);
    const query = searchOverrides[item.id] ?? `${item.name} ${fallbackByCategory[item.category] ?? 'product'}`;

    try {
      const stats = await fs.stat(target).catch(() => null);
      if (!stats || stats.size < 2048) {
        let downloaded = false;
        try {
          const results = await commonsSearch(query);
          for (const result of results) {
            try {
              await download(result.thumburl, target);
              downloaded = true;
              break;
            } catch {}
          }
        } catch {}

        if (!downloaded) {
          const imageUrls = await duckDuckGoSearch(query);
          for (const imageUrl of imageUrls.slice(0, 8)) {
            try {
              await download(imageUrl, target);
              downloaded = true;
              break;
            } catch {}
          }
        }

        if (!downloaded) {
          throw new Error(`No downloadable image for "${query}"`);
        }
        await sleep(1200);
      }
      console.log(`${index + 1}/${items.length} ${item.id}`);
    } catch (error) {
      failures.push(`${item.id}: ${error.message}`);
      console.warn(`Skipped ${item.id}: ${error.message}`);
    }
  }

  let updated = content.replace(
    /\{\s*id:\s*'([^']+)',\s*name:\s*(['"])(.*?)\2,\s*description:\s*(['"])(.*?)\4,\s*price:\s*([^,]+),\s*category:\s*'([^']+)',\s*image:\s*(?:placeholderImg|new URL\('\.\/assets\/product-images\/[^']+\.jpg',\s*import\.meta\.url\)\.href)\s*\}/gs,
    (match, id, nameQuote, name, descriptionQuote, description, price, category) =>
      `{ id: '${id}', name: ${nameQuote}${name}${nameQuote}, description: ${descriptionQuote}${description}${descriptionQuote}, price: ${price.trim()}, category: '${category}', image: ${productImageUrl(id)} }`,
  );

  if (!updated.includes('placeholderImg')) {
    updated = updated.replace("import placeholderImg from './assets/images/Backroom-logo-landscape-02.png';\n", '');
  }

  await fs.writeFile(constantsPath, updated);

  if (failures.length) {
    console.warn(`\n${failures.length} item(s) need manual review:\n${failures.join('\n')}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
