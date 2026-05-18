const fs = require('fs');
const path = './src/constants.ts';
let content = fs.readFileSync(path, 'utf8');

const replacements = {
  'coconut-rice': 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Coconut_Rice.jpg',
  'chinese-rice': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Jellof_and_fried_rice_with_chicken002.jpg',
  'jambalaya-rice': 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Native_Jollof_Rice_%28cropped%29.jpg',
  'pineapple-rice': 'https://upload.wikimedia.org/wikipedia/commons/8/8a/African_Fried_Rice_with_Fried_Plantain_and_Beef.jpg',
  'jollof-rice': 'https://upload.wikimedia.org/wikipedia/commons/5/51/JOLLOF_RICE_%28cropped%29.JPG',
  'fried-rice': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Jellof_and_fried_rice_with_chicken002.jpg',
  'stir-fry-rice': 'https://upload.wikimedia.org/wikipedia/commons/8/8a/African_Fried_Rice_with_Fried_Plantain_and_Beef.jpg',
  'fried-basmati-rice': 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Igbimo_Jollof_Rice_%28Nigerian_Local_Rice%29.jpg',
  'jollof-spaghetti': 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Spaghetti_al_Pomodoro.JPG',
  'singaporian-noodles': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Bami_goreng.jpg',
  'spaghetti-bolognese': 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Spaghetti_bolognese_%28hozinja%29_%28cropped%29.jpg',
  'stir-fry-pasta': 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Spaghetti_and_meatballs_1.jpg',
  'shredded-chill-chicken': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Chicken_Tikka_Masala_Curry.png',
  'chicken-curry': 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Chicken_Curry_%281%29.jpg',
  'yam-fries': 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Sticky_yam_fries_%289735828601%29.jpg',
  'sweet-potato-fries': 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Sweet_potato_fries_and_mustard_dip.jpg',
  'french-fries': 'https://upload.wikimedia.org/wikipedia/commons/6/67/Fries_2.jpg',
  'chicken-club-sandwich': 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Club_sandwich.png',
  'grilled-chicken-chips': 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Pollo_a_la_brasa_con_papas_fritas.jpg',
  'chicken-sandwich': 'https://upload.wikimedia.org/wikipedia/commons/3/36/Chicken_Sandwich.jpg',
  'burger': 'https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg',
  'fresh-orange-juice': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Orangejuice.jpg',
  'fresh-pineapple-juice': 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pineapple_juice_with_a_pineapple_segment_%28cropped%29.jpg',
  'tutti-frutti': 'https://upload.wikimedia.org/wikipedia/commons/2/25/Fruit_punch.jpg'
};

for (const [id, url] of Object.entries(replacements)) {
  const regex = new RegExp(`id: '${id}',[\\s\\S]*?image: '(https:\\/\\/images\\.(unsplash|pexels)\\.com.*?)',`, 'g');
  content = content.replace(regex, match => {
    return match.replace(/image: '.*?'/, `image: '${url}'`);
  });
}

fs.writeFileSync(path, content);
console.log('Replaced images successfully.');
