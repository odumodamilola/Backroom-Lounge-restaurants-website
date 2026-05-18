import { MenuItem, MenuCategory } from './types';
import { Star, Flame, Zap, Martini } from 'lucide-react';

// Import local images
import asunAndFries from './assets/images/asun and fries.png';
import afangSoup from './assets/images/afang-soup.png';
import basmatiRice from './assets/images/basmati-rice.png';
import beefSuya from './assets/images/beef-suya.png';
import bbqCroakerFish from './assets/images/bbq-croaker-fish.png';
import beefPepperSoup from './assets/images/beef-pepper-soup.png';
import bitterleafSoup from './assets/images/biterleaf-soup.png';
import chickenBreast from './assets/images/chicken-breast.png';
import chickenCreamy from './assets/images/chicken-creamy.png';
import chickenCurrySauce from './assets/images/chicken-curry-sauce.png';
import chickenPepper from './assets/images/chicken-pepper.png';
import chickenClubSandwich from './assets/images/chicken-club-sandwich.png';
import chapman from './assets/images/chapman.png';
import chickenSandwich from './assets/images/chicken-sandwitch.png';
import chineseRice from './assets/images/chinese-rice.png';
import coconutRice from './assets/images/coconut-rice.png';
import cowtailPepperSoup from './assets/images/cowtail-pepper soup.png';
import eaglesNest from './assets/images/eagles-nest.png';
import edikangSoup from './assets/images/edikang-soup.png';
import familyPlatter from './assets/images/family-platter.png';
import freshOrangeJuice from './assets/images/fresh-orange-juice.png';
import friedRice from './assets/images/fried-rice.png';
import plantain from './assets/images/plantain.png';
import frenchFries from './assets/images/french-fries.png';
import freshPineappleJuice from './assets/images/fresh-pineapple-juice.png';
import sweetPotatoes from './assets/images/sweet-potatoes.png';
import tuttiFrutti from './assets/images/tutti-frutti.png';
import yamFries from './assets/images/yam-fries.png';
import grilledChickenChips from './assets/images/grilled-chicken and chips.png';
import egusiSoup from './assets/images/egusi-soup.png';
import eforiro from './assets/images/eforiro.png';
import gizDodo from './assets/images/giz-dodo.png';
import grilledTurkeyChips from './assets/images/grilled-turkey and chips.png';
import goatMeatPepperSoup from './assets/images/goat meat pepper soup.png';
import italianClassicPasta from './assets/images/italian classic pasta.png';
import italianStirFry from './assets/images/italian-stir-fry.png';
import ogbonoSoup from './assets/images/ogbono-soup.png';
import okroSoup from './assets/images/okro-soup.png';
import isiEwu from './assets/images/isi-ewu.png';
import jambalayaPasta from './assets/images/jambalaya-pasta.png';
import jambalayaSpecialRice from './assets/images/jambalaya-special-rice.png';
import jollofRice from './assets/images/jollof-rice.png';
import jollofSpaghetti from './assets/images/jollof-spaghetti.png';
import seafoodPlatter from './assets/images/naija -seafood - platter.png';
import pepperedBeef from './assets/images/peppered-beef.png';
import pepperedChicken from './assets/images/peppered-chicken.png';
import pepperedGoat from './assets/images/peppered-goat.png';
import pepperedGizzard from './assets/images/pepperd-red-gizzard.png';
import pepperedTurkey from './assets/images/peppered-turkey.png';
import puffPuff from './assets/images/puff puff.png';
import pepperedSnail from './assets/images/peppered snail.png';
import seafoodOkro from './assets/images/seafood-okro.png';
import singaporianRice from './assets/images/singaporrian -rice.png';
import smallChops from './assets/images/small-chops.png';
import stirFryRice from './assets/images/stir-fry-rice.png';
import turkeyPepper from './assets/images/turkey-pepper.png';
import seafoodPepperSoup from './assets/images/seafood-pepper-soup.png';
import mixedPlatter from './assets/images/mixed-platter.png';
import nkwobi from './assets/images/nkwobi.png';
import nativeRice from './assets/images/traditional-native-rice.png';
import ofadaRice from './assets/images/traditional-ofada-rice.png';
import beansWithYam from './assets/images/beans-with-yam.png';
import burgerImg from './assets/images/burger.png';
import cakeParfait from './assets/images/cake-parfait.png';
import chilliChicken from './assets/images/chilli-chicken.png';
import chocolateCake from './assets/images/chocolate-cake.png';
import coleslawImg from './assets/images/coleslaw.png';
import custardMoimoi from './assets/images/custard-moimoi.png';
import ewaAgoyinPlantain from './assets/images/Ewa-Agoyin-with-plantain.png';
import friedYamSauce from './assets/images/Fried-yam-with-sauce.png';
import smokedCatfish from './assets/images/smoked-catfish.png';
import pancakeBurger from './assets/images/pancake-burger.png';
import parfait from './assets/images/parfait.png';
import prawnImg from './assets/images/prawn.png';
import seafoodPlatterImg from './assets/images/seafood-platter.png';
import springrollSalad from './assets/images/spingroll-salad.png';
import spongeCake from './assets/images/sponge-cake.png';
import toastedBreadVeg from './assets/images/toasted-bread-with-veg.png';
import toastedBread from './assets/images/toasted-bread.png';
import tomatoePizza from './assets/images/tomatoe-pizza.png';
import vanillaCake from './assets/images/vanilla-cake.png';
import waffleBerries from './assets/images/waffle-top-with-berries.png';
import whiteRicePepperMix from './assets/images/white-rice-with-pepper-mix.png';
import whiteRiceSauce from './assets/images/white-rice-with-sauce.png';
import yamAndEgg from './assets/images/yam-and-egg.png';
import pineAppleRice from './assets/images/pine-apple-rice.png';

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'african-dishes', name: 'Original Kitchen', label: 'Category 01', count: 13 },
  { id: 'rice-class', name: 'Golden Grains', label: 'Category 02', count: 16 },
  { id: 'starters-fingers', name: 'Soulful Starters', label: 'Category 03', count: 24 },
  { id: 'pepper-soups', name: 'Spice & Broth', label: 'Category 04', count: 11 },
  { id: 'platters', name: 'Grand Platters', label: 'Category 05', count: 5 },
  { id: 'pasta-noodles', name: 'Modern Pasta', label: 'Category 06', count: 8 },
  { id: 'sauces-sides', name: 'Sauces & Sides', label: 'Category 07', count: 18 },
  { id: 'drinks', name: 'Signature Sips', label: 'Category 08', count: 16 },
];

export const MENU_ITEMS: MenuItem[] = [
  // African Dishes
  {
    id: 'egusi',
    name: 'Egusi Soup',
    description: 'Nigerian Cuisine Prepared with Seeds of Certain Cucurbitaceae Plant Seeds, Well Stocked with Ponmo, Panla Fish, Smoked Catfish & Stock-Fish. Served with Pounded Yam, SEMO or EBA.',
    price: 13500,
    category: 'african-dishes',
    image: egusiSoup,
    badges: [{ icon: Star, text: 'CLASSIC' }],
  },
  {
    id: 'poundo-yam-egusi',
    name: 'Poundo Yam with Egusi',
    description: 'Poundo yam served with delicious egusi soup (Vegetable, Ponmo, Smoked Fish). Served with Chicken, Beef or Fish.',
    price: 10000,
    category: 'african-dishes',
    image: egusiSoup,
  },
  {
    id: 'ogbono',
    name: 'Ogbono Soup',
    description: 'Nigerian Delicacy Made with Ground Dry Irvinga Seeds (Wild Mango), Palm Oil, Bitter Leaf, Celosia, Fermented Locust Beans, Smoked Fish, Smoked Hake Fish, Ponmo and Crayfish. Served with Pounded Yam, SEMO or EBA.',
    price: 13500,
    category: 'african-dishes',
    image: ogbonoSoup,
  },
  {
    id: 'poundo-yam-ogbono',
    name: 'Poundo Yam with Ogbono',
    description: 'Poundo yam served with delicious ogbono soup. Served with Chicken, Beef or Fish.',
    price: 10000,
    category: 'african-dishes',
    image: ogbonoSoup,
  },
  {
    id: 'sea-food-okro',
    name: 'Sea Food Okro',
    description: 'Vibrant West-African Delicacy Featuring Tender Okra Pods Infused with Succulent Shrimp, Fresh Croakerfish, Prawns and Crab Claws Slow-Cooked with Bold Spices. Served with Pounded Yam, SEMO or EBA.',
    price: 20000,
    category: 'african-dishes',
    image: seafoodOkro,
    isFeatured: true,
    badges: [{ icon: Flame, text: 'LUXE' }],
  },
  {
    id: 'bitter-leaf-soup',
    name: 'Bitter Leaf Soup',
    description: 'Igbo Origin Cuisine Prepared with Bitter Leaf Well Stocked with Ponmo, Smoked Fish & Stock-Fish.',
    price: 4000,
    category: 'african-dishes',
    image: bitterleafSoup,
  },
  {
    id: 'edikang-ikong',
    name: 'Edikang Ikong',
    description: 'Originated among the Efik-Ibibio people of Akwa Ibom & Cross River State, very nutritious and well stocked with Ponmo, Panla, Smoked Catfish and Stock-fish. Served with Pounded Yam, SEMO or EBA.',
    price: 13500,
    category: 'african-dishes',
    image: edikangSoup,
  },
  {
    id: 'efo-riro',
    name: 'Efo Riro',
    description: 'Yoruba cuisine known as Eko special, with vegetables, stock-fish, ponmo, smoked catfish and panla fish. Served with Pounded Yam, SEMO or EBA.',
    price: 13500,
    category: 'african-dishes',
    image: eforiro,
  },
  {
    id: 'poundo-yam-eforiro',
    name: 'Poundo Yam with Eforiro',
    description: 'Poundo yam served with delicious eforiro. Served with Goatmeat, Fish or Chicken.',
    price: 11000,
    category: 'african-dishes',
    image: eforiro,
  },
  {
    id: 'poundo-yam-eforiro-turkey',
    name: 'Poundo Yam with Eforiro',
    description: 'Poundo yam served with delicious eforiro. Served with Turkey.',
    price: 13000,
    category: 'african-dishes',
    image: eforiro,
  },
  {
    id: 'porridge-eforiro',
    name: 'Porridge and Eforiro',
    description: 'Delicious porridge served with eforiro. Served with Chicken, Beef or Fish.',
    price: 10000,
    category: 'african-dishes',
    image: eforiro,
  },
  {
    id: 'okra-soup',
    name: 'Okra Soup',
    description: 'Very common and highly nutritious soup known as Obe Ila.',
    price: 4000,
    category: 'african-dishes',
    image: okroSoup,
  },
  {
    id: 'afang',
    name: 'Afang Soup',
    description: 'Vegetable soup originated from Ibibio people of Akwa Ibom, Made of Stock-fish, Ponmo, Panla fish, Crayfish, Smoked Catfish, Water-leaf, and Utazi leaf.',
    price: 4000,
    category: 'african-dishes',
    image: afangSoup,
  },

  // Rice Class
  {
    id: 'native-rice',
    name: 'Traditional Native Rice',
    description: 'Cooked with Local Herbs and Spice. Mixed with Shredded Meat.',
    price: 4000,
    category: 'rice-class',
    image: nativeRice,
  },
  {
    id: 'coconut-rice',
    name: 'Coconut Rice',
    description: 'Made by Cooking rice with Coconut Milk and seasonings.',
    price: 5000,
    category: 'rice-class',
    image: coconutRice,
  },
  {
    id: 'ofada-rice-sauce',
    name: 'Ofada Rice and Sauce',
    description: 'A traditional Nigerian dish made from a local rice variety. It\'s typically served with a spicy sauce made from palm oil, scotch bonnet peppers, onions, and assorted meats or fish.',
    price: 5000,
    category: 'rice-class',
    image: ofadaRice,
    badges: [{ icon: Zap, text: 'SPICY' }],
  },
  {
    id: 'jambalaya-special-rice',
    name: 'Jambalaya Special Rice',
    description: 'Iconic jambalaya special rice explodes with the trinity of onions, celery and bell peppers sauteed in spicy sausage and shrimps.',
    price: 17000,
    category: 'rice-class',
    image: jambalayaSpecialRice,
    isFeatured: true,
  },
  {
    id: 'chinese-rice',
    name: 'Chinese Rice',
    description: 'Stir-Fry Medley of Jasmine Rice to Perfection with Diced Carrots, Peas, Scrambled Eggs and Succulent Shrimp, Seasoned with Soy Sauce, Oyster Sauce and Sesame Oil.',
    price: 12000,
    category: 'rice-class',
    image: chineseRice,
  },
  {
    id: 'jambalaya-rice',
    name: 'Jambalaya Rice',
    description: 'Iconic jambalaya tradition rice explodes with the trinity of onions, celery and bell peppers sauteed in spicy sausage and shrimps.',
    price: 12000,
    category: 'rice-class',
    image: jambalayaSpecialRice,
  },
  {
    id: 'pineapple-rice',
    name: 'Pineapple Rice',
    description: 'Tropical Thai-Inspired Delight of Jasmine Rice into Sweet and Savory Bliss, Hollowed-Out Pineapple Halves Brim with Diced Pineapple Crunch and Tender Shrimps and Chicken.',
    price: 10000,
    category: 'rice-class',
    image: pineAppleRice,
  },
  {
    id: 'ofada-rice-sauce-luxe',
    name: 'Ofada Rice & Sauces',
    description: 'Cherished Locally Grown Rice with a Luxurious Palm-Oil Infused Hot Chilli Stew Brimming with Tender Assorted Meat, Diced Ponmo, Panla, Smoked Fish and Boiled Egg. (With choice of Protein)',
    price: 10000,
    category: 'rice-class',
    image: ofadaRice,
  },
  {
    id: 'jollof-rice',
    name: 'Smokey Jollof Rice with Chicken',
    description: 'Nigeria Beloved Jollof Rice, Tossed in a Bold, Smoky Tomato Sauce Crafted From Bell Peppers, Scotch Bonnet Chili, Onions and Garlic. Served with Coleslaw and Plantain.',
    price: 10000,
    category: 'rice-class',
    image: jollofRice,
  },
  {
    id: 'jollof-rice-turkey',
    name: 'Smokey Jollof Rice with Turkey',
    description: 'Nigeria Beloved Jollof Rice, Tossed in a Bold, Smoky Tomato Sauce Crafted From Bell Peppers, Scotch Bonnet Chili, Onions and Garlic. Served with Coleslaw and Plantain.',
    price: 12000,
    category: 'rice-class',
    image: jollofRice,
  },
  {
    id: 'fried-rice',
    name: 'Fried Rice with Chicken',
    description: 'Stir-Fry Rice with Flash-Tossed of Peas, Shredded Carrots, Spring Onions and Green Beans. Served with Coleslaw and Plantain.',
    price: 10000,
    category: 'rice-class',
    image: friedRice,
  },
  {
    id: 'fried-rice-turkey',
    name: 'Fried Rice with Turkey',
    description: 'Stir-Fry Rice with Flash-Tossed of Peas, Shredded Carrots, Spring Onions and Green Beans. Served with Coleslaw and Plantain.',
    price: 12000,
    category: 'rice-class',
    image: friedRice,
  },
  {
    id: 'coconut-rice',
    name: 'Coconut Rice',
    description: 'Made by Cooking rice with Coconut Milk and seasonings. Served with Plantain.',
    price: 10000,
    category: 'rice-class',
    image: coconutRice,
  },
  {
    id: 'native-rice',
    name: 'Traditional Native Rice',
    description: 'Cooked with Local Herbs and Spice. Mixed with Shredded Meat. Garnished with Smoked Fish and Ponmo. Served with Chicken or Beef.',
    price: 10000,
    category: 'rice-class',
    image: nativeRice,
  },
  {
    id: 'ofada-rice-sauce',
    name: 'Ofada Rice with Sauce',
    description: 'A traditional Nigerian dish made from a local rice variety served with a spicy sauce made from palm oil, scotch bonnet peppers, onions, and assorted meats. Served with Chicken, Beef or Fish.',
    price: 12000,
    category: 'rice-class',
    image: ofadaRice,
    badges: [{ icon: Zap, text: 'SPICY' }],
  },
  {
    id: 'chinese-rice',
    name: 'Chinese Fried Rice with Chicken',
    description: 'Stir-Fry Medley of Jasmine Rice to Perfection with Diced Carrots, Peas, Scrambled Eggs and Succulent Chicken, Seasoned with Soy Sauce, Oyster Sauce and Sesame Oil.',
    price: 17000,
    category: 'rice-class',
    image: chineseRice,
  },
  {
    id: 'chinese-rice-turkey',
    name: 'Chinese Fried Rice with Turkey',
    description: 'Stir-Fry Medley of Jasmine Rice to Perfection with Diced Carrots, Peas, Scrambled Eggs and Succulent Turkey, Seasoned with Soy Sauce, Oyster Sauce and Sesame Oil.',
    price: 17000,
    category: 'rice-class',
    image: chineseRice,
  },
  {
    id: 'chinese-egg-fried-rice',
    name: 'Chinese Chicken Egg Fried Rice',
    description: 'Stir-Fry Medley of Jasmine Rice to Perfection with Diced Carrots, Peas, Scrambled Eggs and Succulent Chicken. Served with Coleslaw.',
    price: 15000,
    category: 'rice-class',
    image: chineseRice,
  },
  {
    id: 'basmati-white-rice',
    name: 'Basmati White Rice',
    description: 'Premium Basmati White Rice served with Shredded Beef Sauce or Chicken Curry Soup.',
    price: 13500,
    category: 'rice-class',
    image: basmatiRice,
  },
  {
    id: 'tasty-fried-rice',
    name: 'Tasty Fried Rice with Spicy Grilled Turkey',
    description: 'Stir-Fry Rice with Flash-Tossed of Peas, Shredded Carrots, Spring Onions and Green Beans. Served with Tasty and Spicy Grilled Fried Turkey.',
    price: 10000,
    category: 'rice-class',
    image: friedRice,
  },
  {
    id: 'white-rice-pepper-mix-chicken',
    name: 'White Rice with Pepper Mix (Chicken/Beef)',
    description: 'White Rice with Fried and Delicious Pepper Mix Topped with Chicken or Beef.',
    price: 10000,
    category: 'rice-class',
    image: whiteRiceSauce,
  },
  {
    id: 'white-rice-pepper-mix-turkey',
    name: 'White Rice with Pepper Mix (Turkey)',
    description: 'White Rice with Fried and Delicious Pepper Mix Topped with Fried Turkey.',
    price: 12000,
    category: 'rice-class',
    image: whiteRiceSauce,
  },
  {
    id: 'white-rice-choplife-pepper-mix',
    name: 'White Rice with Choplife Spicy Pepper Mix',
    description: 'White Rice with Choplife Spicy Pepper Mix (Pepper Mix, Locust Beans, Smoked Fish, Ponmo).',
    price: 15000,
    category: 'rice-class',
    image: whiteRiceSauce,
  },
  {
    id: 'choplife-signature-meat',
    name: 'Choplife Signature Meat (Spicy Jollof Rice)',
    description: 'Signature Spicy Jollof Rice served with Premium Assorted Meat.',
    price: 15500,
    category: 'rice-class',
    image: jollofRice,
    badges: [{ icon: Star, text: 'SIGNATURE' }],
  },
  {
    id: 'ewa-agoyin-plantain',
    name: 'Ewa Agoyin with Plantain',
    description: 'Traditional Nigerian Beans cooked in spicy palm oil sauce, served with fried plantain.',
    price: 5000,
    category: 'rice-class',
    image: ewaAgoyinPlantain,
  },
  {
    id: 'ewa-agoyin-yam',
    name: 'Ewa Agoyin with Yam',
    description: 'Traditional Nigerian Beans cooked in spicy palm oil sauce, served with boiled yam.',
    price: 6500,
    category: 'rice-class',
    image: ewaAgoyinPlantain,
  },
  {
    id: 'stir-fry-rice',
    name: 'Stir Fry Rice',
    description: 'Stir-fry rice with flash-tossed of peas, shredded carrots, mushrooms and tender steak, coated in a glossy glaze of soy sauce.',
    price: 10000,
    category: 'rice-class',
    image: stirFryRice,
  },
  {
    id: 'fried-basmati-rice',
    name: 'Fried Basmatic Rice',
    description: 'Stir-Fry Basmatic Rice with Flash-Tossed of Peas, Shredded Carrots, Spring Onions and Green Beans.',
    price: 6000,
    category: 'rice-class',
    image: basmatiRice,
  },

  // Starters & Fingers
  {
    id: 'bbq-croaker-fish',
    name: 'BBQ Croaker Fish',
    description: 'Indulge in Our Crispy Marinated Croakerfish, Smothered in Our Signature BBQ Sauce and Spice.',
    price: 15000,
    category: 'starters-fingers',
    image: bbqCroakerFish,
    isFeatured: true,
  },
  {
    id: 'peppered-snail',
    name: 'Peppered Snail',
    description: 'Herb-Infused Peppered Snail, cooked with fresh herbs like thyme and rosemary.',
    price: 12000,
    category: 'starters-fingers',
    image: pepperedSnail,
  },
  {
    id: 'isi-ewu',
    name: 'Isi-Ewu',
    description: 'Traditional Homemade Cooked Goat Head in a Rich, Aromatic Spicy Delight And Sauce.',
    price: 15000,
    category: 'starters-fingers',
    image: isiEwu,
    isFeatured: true,
  },
  {
    id: 'peppered-goat-meat',
    name: 'Peppered Goat Meat',
    description: 'Savor the Flavor, Spicy Cooked Goat Meat Delight to Perfection in a Rich, Aromatic Pepper Sauce.',
    price: 7000,
    category: 'starters-fingers',
    image: pepperedGoat,
  },
  {
    id: 'nkwobi',
    name: 'Nkwobi',
    description: 'Spicy Homemade Tender Pieces of Cow Leg Cooked in a Rich, Aromatic Sauce.',
    price: 10000,
    category: 'starters-fingers',
    image: nkwobi,
  },
  {
    id: 'peppered-gizzard',
    name: 'Peppered Gizzard',
    description: 'Tender Gizzard Strips Cooked in a Rich, Aromatic Pepper Sauce.',
    price: 5000,
    category: 'starters-fingers',
    image: pepperedGizzard,
  },
  {
    id: 'peppered-turkey',
    name: 'Pepper Turkey',
    description: 'Diced Savory Turkey Cooked in a Rich, Aromatic Pepper Sauce.',
    price: 8000,
    category: 'starters-fingers',
    image: pepperedTurkey,
  },
  {
    id: 'peppered-chicken',
    name: 'Peppered Chicken',
    description: 'Tender Chicken Strips Cooked In A Rich, Aromatic Pepper Sauce.',
    price: 6000,
    category: 'starters-fingers',
    image: pepperedChicken,
  },
  {
    id: 'giz-dodo',
    name: 'Gizdodo',
    description: 'Crispy Fried Gizzards with A Taste Of Spicy Delight, Mixed With Plantain.',
    price: 8500,
    category: 'starters-fingers',
    image: gizDodo,
  },
  {
    id: 'peppered-beef',
    name: 'Peppered Beef',
    description: 'Tender Beef Strips Cooked in a Rich, Aromatic Pepper Sauce.',
    price: 6000,
    category: 'starters-fingers',
    image: pepperedBeef,
  },
  {
    id: 'puff-puff-samosa',
    name: 'Puff-Puff & Samosa',
    description: 'A classic combination of sweet dough balls and savory filled pastries.',
    price: 7000,
    category: 'starters-fingers',
    image: puffPuff,
  },
  {
    id: 'small-chops',
    name: 'Small Chops',
    description: 'A variety of bite-sized Nigerian appetizers.',
    price: 5000,
    category: 'starters-fingers',
    image: smallChops,
  },
  {
    id: 'chicken-sandwich',
    name: 'Chicken Sandwich',
    description: 'Fresh and savory chicken sandwich served with standard fixings.',
    price: 5000,
    category: 'starters-fingers',
    image: chickenSandwich,
  },
  {
    id: 'burger',
    name: 'Burger',
    description: 'Juicy burger made with premium beef and fresh toppings.',
    price: 8000,
    category: 'starters-fingers',
    image: burgerImg,
  },
  {
    id: 'springroll-salad',
    name: 'Springroll with Salad',
    description: 'Crispy vegetable springrolls served with fresh salad. Vegetable/Vegan option available.',
    price: 12000,
    category: 'starters-fingers',
    image: springrollSalad,
  },
  {
    id: 'garlic-butter-prawn',
    name: 'Garlic Butter Prawn',
    description: 'Prawns cooked in delicious garlic butter sauce.',
    price: 14000,
    category: 'starters-fingers',
    image: prawnImg,
  },

  // Pepper Soups
  {
    id: 'croaker-fish-pepper-soup',
    name: 'Catfish Pepper Soup with Plantain/Yam',
    description: 'Delightful Twist, Fresh Whole Catfish Cooked in a Spicy, Aromatic Broth Infused With Peppers, Spices and Herbs. Served with Plantain or Yam.',
    price: 12500,
    category: 'pepper-soups',
    image: seafoodPepperSoup,
  },
  {
    id: 'full-croaker-fish',
    name: 'Full Croaker Fish',
    description: 'Whole grilled croaker fish, perfectly seasoned and cooked to perfection.',
    price: 13000,
    category: 'pepper-soups',
    image: bbqCroakerFish,
  },
  {
    id: 'goat-meat-pepper-soup',
    name: 'Goat Meat Pepper Soup with Plantain/Yam',
    description: 'Spicy and Savory, Tender Goat Meat Pepper Soup, Infused with Aromatic Peppers, Spices and Herbs Served with Yam or Plantain.',
    price: 12500,
    category: 'pepper-soups',
    image: goatMeatPepperSoup,
  },
  {
    id: 'goat-meat-pepper-soup-simple',
    name: 'Goat Meat Pepper Soup',
    description: 'Spicy and Savory, Tender Goat Meat Pepper Soup, Infused with Aromatic Peppers, Spices and Herbs.',
    price: 8500,
    category: 'pepper-soups',
    image: goatMeatPepperSoup,
  },
  {
    id: 'assorted-pepper-soup',
    name: 'Assorted Pepper Soup',
    description: 'Delicious assorted meat pepper soup garnished with Yam or Potato.',
    price: 7000,
    category: 'pepper-soups',
    image: beefPepperSoup,
  },
  {
    id: 'cow-tail-pepper-soup',
    name: 'Cow Tail Pepper Soup',
    description: 'Spicy and Savory, Cowtail Pepper Soup, Infused with Aromatic Peppers, Spices and Herbs Served with Bread Roll, Perfect For Warming the Soul.',
    price: 7000,
    category: 'pepper-soups',
    image: cowtailPepperSoup,
  },
  {
    id: 'chicken-pepper-soup',
    name: 'Chicken Pepper Soup with Yam/Plantain',
    description: 'Tender Chicken Cooked in a Flavorful, Spicy and Broth Infused with Peppers and Herbs. Served with Yam or Plantain.',
    price: 12500,
    category: 'pepper-soups',
    image: chickenPepper,
  },
  {
    id: 'chicken-pepper-soup-potato',
    name: 'Chicken Pepper Soup',
    description: 'Tender Chicken Cooked in a Flavorful, Spicy and Broth Infused with Peppers and Herbs. Garnished with Potato/Yam.',
    price: 7000,
    category: 'pepper-soups',
    image: chickenPepper,
  },
  {
    id: 'seafood-pepper-soup',
    name: 'Seafood Platter',
    description: 'A Treasure Trove of Flavors, a Medley of Seafood Cooking in a Spicy, Aromatic Broth Infused with Peppers, Spices, Herbs, Calamari, Shrimps, Prawns, Crab Claws And Croakerfish.',
    price: 50000,
    category: 'pepper-soups',
    image: seafoodPlatter,
    isFeatured: true,
  },
  {
    id: 'turkey-pepper-soup',
    name: 'Turkey Pepper Soup',
    description: 'Diced Turkey Cooked in a Flavorful, Spicy and Broth Infused with Peppers and Herbs. Served with Yam or Plantain.',
    price: 9500,
    category: 'pepper-soups',
    image: turkeyPepper,
  },
  {
    id: 'gizzard-pepper-soup',
    name: 'Gizzard Pepper Soup',
    description: 'Tender Gizzard Cooked in a Flavorful, Spicy and Broth Infused with Peppers and Herbs. Served with Bread Roll.',
    price: 5000,
    category: 'pepper-soups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Assorted_meat_pepper_soup_at_Lagos_Island.jpg',
  },
  {
    id: 'beef-pepper-soup',
    name: 'Beef Pepper Soup with Plantain/Yam',
    description: 'Tender Beef Strips Simmered in a Spicy, Aromatic Broth Infused with Peppers, Spices and Herbs. Served with Plantain or Yam.',
    price: 12500,
    category: 'pepper-soups',
    image: beefPepperSoup,
  },

  // Platters
  {
    id: 'family-platter',
    name: 'Choplife Family Platter',
    description: '2 Chicken Laps, 2 Sweet Corn, 12 Puff-Puff, 4 Springs, 1 BBQ Fish, 5 Samosa, 5 Sausage Yam and Plantain.',
    price: 50000,
    category: 'platters',
    image: familyPlatter,
    isFeatured: true,
  },
  {
    id: 'seafood-platter',
    name: 'Seafood Platter',
    description: '1 Crab, 2 Corns, 4 Spring Rolls, Potato, 1 Fish, 1 Prawn, 2 Calamari Kebab.',
    price: 50000,
    category: 'platters',
    image: seafoodPlatter,
    isFeatured: true,
  },
  {
    id: 'mixed-platter',
    name: 'Mixed Platter',
    description: 'Giz Dodo, 1 Grill Prawns, Chicken, Pasta Jollof Special Rice.',
    price: 60000,
    category: 'platters',
    image: mixedPlatter,
  },
  {
    id: 'eagles-nest-platter',
    name: 'Eagles Nest Platter',
    description: 'Grilled Chicken, Grilled Turkey, Asun, Sausage, Corn, Plantain & Yam Blocks.',
    price: 56000,
    category: 'platters',
    image: eaglesNest,
  },
  {
    id: 'choplife-classic-roasted-chicken',
    name: 'Choplife Classic Roasted Chicken',
    description: 'Full Baked Chicken with Chips and Vegetables.',
    price: 37000,
    category: 'platters',
    image: grilledChickenChips,
    isFeatured: true,
  },

  // Pasta & Noodles
  {
    id: 'jambalaya-pasta',
    name: 'Jambalaya Pasta',
    description: 'Iconic Jambalaya Tradition Spaghetti Explodes with the Trinity of Onions, Celery and Bell Peppers Sautéed In In Spicy Sausage and Shrimps.',
    price: 10000,
    category: 'pasta-noodles',
    image: jambalayaPasta,
  },
  {
    id: 'jollof-spaghetti',
    name: 'Jollof Spaghetti',
    description: 'Nigeria Beloved Jollof Spaghetti Tossed In a Bold, Smoky Tomato Sauce Crafted from Bell Peppers, Scotch Bonnet Chili, Onions and Garlic.',
    price: 4000,
    category: 'pasta-noodles',
    image: jollofSpaghetti,
  },
  {
    id: 'chicken-creamy-pasta',
    name: 'Chicken Creamy Pasta',
    description: 'Tender Grilled Chicken Breast with al Dente Penne in Luscious, Velvety Sauce of Heavy Cream and Cheese. Tossed with Sun Dried Tomatoes, Spinach and Mushroom.',
    price: 10000,
    category: 'pasta-noodles',
    image: chickenCreamy,
  },
  {
    id: 'singaporian-noodles',
    name: 'Singapore Noodles',
    description: 'Stir-Fry Medley of Thin Rice Vermicelli Noodles Dance with Prawn, Garlic and Bell Peppers in a Wok Tossed with Sesame Oil.',
    price: 20000,
    category: 'pasta-noodles',
    image: singaporianRice,
  },
  {
    id: 'spaghetti-bolognese',
    name: 'Spaghetti Bolognese',
    description: 'Timeless Italian Classic Pasta, Low-Simmered Ground Beef in a Rich Velvety Sauce, Diced Carrot, Celery and Onions.',
    price: 15500,
    category: 'pasta-noodles',
    image: italianClassicPasta,
  },
  {
    id: 'stir-fry-pasta',
    name: 'Stir Fry Pasta',
    description: 'Italian Pasta with Flash-Tossed of Peas, Shredded Carrots, Mushrooms and Tender Chicken. Coated in a Glossy Glaze of Soy Sauce.',
    price: 10000,
    category: 'pasta-noodles',
    image: italianStirFry,
  },
  {
    id: 'jambalaya-special-spaghetti',
    name: 'Jambalaya Special Spaghetti',
    description: 'Iconic jambalaya special spaghetti explodes with the trinity of onions, celery and bell peppers sauteed in spicy sausage, chicken breast and shrimps.',
    price: 15000,
    category: 'pasta-noodles',
    image: jambalayaPasta,
  },
  {
    id: 'spaghetti-chicken',
    name: 'Spaghetti and Chicken',
    description: 'Delicious spaghetti served with savory chicken.',
    price: 8500,
    category: 'pasta-noodles',
    image: italianClassicPasta,
  },

  // Sauces & Sides
  {
    id: 'shredded-chill-chicken',
    name: 'Shredded Chili Chicken',
    description: 'Tender, Slow-Cooked Chicken Breast, Delicately Shredded and Simmered in a Savory Blend of Smoky Chipotle Served with Steamed Basmati Rice.',
    price: 10000,
    category: 'sauces-sides',
    image: chilliChicken,
  },
  {
    id: 'chicken-curry',
    name: 'Chicken Curry Soup',
    description: 'Tender chunks chicken thigh, slow-simmered in a fragrant coconut milk, curry infused with turmeric and a medley of warming spices. Served with fluffy Basmatic rice.',
    price: 5000,
    category: 'sauces-sides',
    image: chickenCurrySauce,
  },
  {
    id: 'coconut-curry-soup',
    name: 'Coconut Curry Soup',
    description: 'Delicious coconut curry soup with aromatic spices.',
    price: 5500,
    category: 'sauces-sides',
    image: chickenCurrySauce,
  },
  {
    id: 'shredded-beef-sauce',
    name: 'Shredded Beef Sauce',
    description: 'Delicious shredded beef sauce.',
    price: 5000,
    category: 'sauces-sides',
    image: beefSuya,
  },
  {
    id: 'yam-fries',
    name: 'Yam Fries',
    description: 'Crispy golden fried yam strips, a perfect side for any meal.',
    price: 2000,
    category: 'sauces-sides',
    image: friedYamSauce,
  },
  {
    id: 'yam-fries-only',
    name: 'Yam Fries Only',
    description: 'Crispy golden fried yam strips.',
    price: 2000,
    category: 'sauces-sides',
    image: yamFries,
  },
  {
    id: 'plantain',
    name: 'Plantain',
    description: 'Sweet, ripe fried plantain slices (Dodo).',
    price: 2000,
    category: 'sauces-sides',
    image: plantain,
  },
  {
    id: 'sweet-potato-fries',
    name: 'Sweet Potato Fries',
    description: 'Crispy fried sweet potato strips.',
    price: 2000,
    category: 'sauces-sides',
    image: sweetPotatoes,
  },
  {
    id: 'french-fries',
    name: 'French Fries',
    description: 'Classic golden crispy potato fries.',
    price: 3500,
    category: 'sauces-sides',
    image: frenchFries,
  },
  {
    id: 'fries-only',
    name: 'Fries Only',
    description: 'Classic golden crispy potato fries.',
    price: 2000,
    category: 'sauces-sides',
    image: frenchFries,
  },
  {
    id: 'coleslaw',
    name: 'Coleslaw',
    description: 'Fresh and crunchy coleslaw salad.',
    price: 1000,
    category: 'sauces-sides',
    image: coleslawImg,
  },
  {
    id: 'asun-fries',
    name: 'Asun & Fries',
    description: 'Spicy grilled goat meat paired with crispy fries.',
    price: 7000,
    category: 'sauces-sides',
    image: asunAndFries,
  },
  {
    id: 'beef-suya',
    name: 'Beef Suya',
    description: 'Traditional spiced grilled beef skewers.',
    price: 6000,
    category: 'sauces-sides',
    image: beefSuya,
  },
  {
    id: 'chicken-club-sandwich',
    name: 'Chicken Club Sandwich',
    description: 'Triple-decker sandwich with chicken, with a side of chips.',
    price: 12000,
    category: 'sauces-sides',
    image: chickenClubSandwich,
  },
  {
    id: 'grilled-chicken-chips',
    name: 'Grilled Chicken & Chips',
    description: 'Savory grilled chicken served with crispy golden chips.',
    price: 8500,
    category: 'sauces-sides',
    image: grilledChickenChips,
  },
  {
    id: 'grilled-turkey-chips',
    name: 'Grilled Turkey & Chips',
    description: 'Savory grilled turkey served with crispy golden chips.',
    price: 9500,
    category: 'sauces-sides',
    image: grilledTurkeyChips,
  },
  {
    id: 'chicken-wings-sweet-sauce',
    name: 'Chicken Wings in Sweet Sauce',
    description: 'Delicious chicken wings in sweet sauce.',
    price: 11000,
    category: 'sauces-sides',
    image: chickenPepper,
  },
  {
    id: 'fried-potato-pepper-goat',
    name: 'Fried Potato with Pepper Goat Meat Sauce',
    description: 'Fried potato served with spicy pepper goat meat sauce.',
    price: 8000,
    category: 'sauces-sides',
    image: friedYamSauce,
  },
  {
    id: 'yam-egg-sauce',
    name: 'Yam and Egg Sauce',
    description: 'Yam served with delicious egg sauce.',
    price: 5000,
    category: 'sauces-sides',
    image: yamAndEgg,
  },

  // Drinks
  {
    id: 'fresh-orange-juice',
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed orange juice.',
    price: 2000,
    category: 'drinks',
    image: freshOrangeJuice,
  },
  {
    id: 'fresh-pineapple-juice',
    name: 'Fresh Pineapple Juice',
    description: 'Freshly squeezed pineapple juice.',
    price: 2000,
    category: 'drinks',
    image: freshPineappleJuice,
  },
  {
    id: 'chapman',
    name: 'Chapman',
    description: 'Nigeria\'s beloved non-alcoholic cocktail with Fanta, Sprite, bitters and fresh citrus.',
    price: 5000,
    category: 'drinks',
    image: chapman,
    badges: [{ icon: Martini, text: 'POPULAR' }],
  },
  {
    id: 'tutti-frutti',
    name: 'Tutti Frutti',
    description: 'A refreshing mixed fruit drink.',
    price: 3000,
    category: 'drinks',
    image: tuttiFrutti,
  },

  // Desserts
  {
    id: 'chocolate-cake',
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake topped with whipped cream.',
    price: 14500,
    category: 'drinks',
    image: chocolateCake,
  },
  {
    id: 'sponge-cake',
    name: 'Sponge Cake',
    description: 'Light and fluffy sponge cake topped with melted chocolate.',
    price: 14500,
    category: 'drinks',
    image: spongeCake,
  },
  {
    id: 'waffles-berries',
    name: 'Waffles Topped with Berries',
    description: 'Crispy waffles topped with fresh berries.',
    price: 10000,
    category: 'drinks',
    image: waffleBerries,
  },
  {
    id: 'granola-parfait',
    name: 'Granola Parfait',
    description: 'Healthy and delicious granola parfait.',
    price: 5000,
    category: 'drinks',
    image: parfait,
  },
  {
    id: 'cake-parfait',
    name: 'Cake Parfait',
    description: 'Delicious cake parfait.',
    price: 5000,
    category: 'drinks',
    image: parfait,
  },

  // Protein Extras
  {
    id: 'smoked-dry-catfish',
    name: 'Smoked Dry Catfish',
    description: 'Premium smoked dry catfish.',
    price: 5000,
    category: 'starters-fingers',
    image: smokedCatfish,
  },
  {
    id: 'peppered-gizzard-extra',
    name: 'Peppered Gizzard',
    description: 'Tender peppered gizzard.',
    price: 5000,
    category: 'starters-fingers',
    image: pepperedGizzard,
  },
  {
    id: 'fried-turkey',
    name: 'Fried Turkey',
    description: 'Crispy fried turkey.',
    price: 8500,
    category: 'starters-fingers',
    image: pepperedTurkey,
  },
  {
    id: 'fried-chicken',
    name: 'Fried Chicken',
    description: 'Crispy fried chicken.',
    price: 6000,
    category: 'starters-fingers',
    image: pepperedChicken,
  },
  {
    id: 'fried-beef',
    name: 'Fried Beef',
    description: 'Crispy fried beef.',
    price: 6000,
    category: 'starters-fingers',
    image: pepperedBeef,
  },
  {
    id: 'grilled-turkey-extra',
    name: 'Grilled Turkey',
    description: 'Savory grilled turkey.',
    price: 9500,
    category: 'starters-fingers',
    image: grilledTurkeyChips,
  },
  {
    id: 'grilled-chicken-extra',
    name: 'Grilled Chicken',
    description: 'Savory grilled chicken.',
    price: 9500,
    category: 'starters-fingers',
    image: grilledChickenChips,
  },
  {
    id: 'peppered-turkey-extra',
    name: 'Peppered Turkey',
    description: 'Spicy peppered turkey.',
    price: 8000,
    category: 'starters-fingers',
    image: pepperedTurkey,
  },
  {
    id: 'peppered-chicken-extra',
    name: 'Peppered Chicken',
    description: 'Spicy peppered chicken.',
    price: 6000,
    category: 'starters-fingers',
    image: pepperedChicken,
  },
  {
    id: 'peppered-beef-extra',
    name: 'Peppered Beef',
    description: 'Spicy peppered beef.',
    price: 6000,
    category: 'starters-fingers',
    image: pepperedBeef,
  },

  // Bakes & Pizza
  {
    id: 'plain-vanilla-cake',
    name: 'Plain Vanilla Cake',
    description: 'Classic plain vanilla cake.',
    price: 6000,
    category: 'drinks',
    image: vanillaCake,
  },
  {
    id: 'chocolate-cake-bake',
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake.',
    price: 7500,
    category: 'drinks',
    image: chocolateCake,
  },
  {
    id: 'tomato-pizza-12',
    name: 'Tomato Pizza (Size 12)',
    description: 'Classic tomato pizza.',
    price: 14500,
    category: 'drinks',
    image: tomatoePizza,
  },
  {
    id: 'tomato-pizza-14',
    name: 'Tomato Pizza (Size 14)',
    description: 'Classic tomato pizza.',
    price: 16000,
    category: 'drinks',
    image: tomatoePizza,
  },
  {
    id: 'tomato-pizza-16',
    name: 'Tomato Pizza (Size 16)',
    description: 'Classic tomato pizza.',
    price: 18000,
    category: 'drinks',
    image: tomatoePizza,
  },
  {
    id: 'chicken-pizza-12',
    name: 'Chicken Pizza (Size 12)',
    description: 'Delicious chicken pizza.',
    price: 16000,
    category: 'drinks',
    image: tomatoePizza,
  },
  {
    id: 'chicken-pizza-14',
    name: 'Chicken Pizza (Size 14)',
    description: 'Delicious chicken pizza.',
    price: 16500,
    category: 'drinks',
    image: tomatoePizza,
  },
  {
    id: 'chicken-pizza-16',
    name: 'Chicken Pizza (Size 16)',
    description: 'Delicious chicken pizza.',
    price: 19500,
    category: 'drinks',
    image: tomatoePizza,
  },

  // Breakfast
  {
    id: 'yam-fish-sauce',
    name: 'Yam with Fish Sauce',
    description: 'Delicious yam served with fish sauce.',
    price: 8000,
    category: 'sauces-sides',
    image: yamAndEgg,
  },
  {
    id: 'plantain-scrambled-egg',
    name: 'Plantain with Scrambled Egg',
    description: 'Sweet plantain served with scrambled eggs.',
    price: 8000,
    category: 'sauces-sides',
    image: plantain,
  },
  {
    id: 'yam-scrambled-egg',
    name: 'Yam with Scrambled Egg',
    description: 'Yam served with scrambled eggs.',
    price: 8000,
    category: 'sauces-sides',
    image: yamAndEgg,
  },
  {
    id: 'custard-moimoi',
    name: 'Custard with Moimoi',
    description: 'Creamy custard served with moimoi.',
    price: 8000,
    category: 'sauces-sides',
    image: custardMoimoi,
  },
  {
    id: 'toasted-bread-omelette-vegetables',
    name: 'Toasted Bread with Omelette Topped with Vegetables',
    description: 'Toasted bread with omelette and fresh vegetables.',
    price: 10000,
    category: 'sauces-sides',
    image: toastedBreadVeg,
  },
  {
    id: 'toasted-bread-omelette',
    name: 'Toasted Bread with Omelette',
    description: 'Toasted bread with omelette.',
    price: 10000,
    category: 'sauces-sides',
    image: toastedBread,
  },
  {
    id: 'pancake-burger',
    name: 'Pancake Burger',
    description: 'Pancake with chicken, omelette, lettuce, and burger sauce.',
    price: 12000,
    category: 'sauces-sides',
    image: pancakeBurger,
  },
  {
    id: 'noodles-egg',
    name: 'Noodles and Egg',
    description: 'Delicious noodles served with egg.',
    price: 4000,
    category: 'pasta-noodles',
    image: singaporianRice,
  },
];
