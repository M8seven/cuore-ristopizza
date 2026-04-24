export type MenuBadge = 'heart' | 'spicy' | 'new';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  ingredients: string;
  badge?: MenuBadge;
  note?: string;
}

export interface SfizioGroup {
  id: string;
  title: string;
  description?: string;
  items: string[];
}

export const pizzeClassiche: MenuItem[] = [
  { id: 'margherita', name: 'Margherita', price: 5.0, ingredients: 'Pomodoro, fiordilatte.' },
  { id: 'marinara', name: 'Marinara', price: 4.0, ingredients: 'Pomodoro, aglio, origano.' },
  { id: '4-formaggi', name: '4 Formaggi', price: 7.0, ingredients: 'Fiordilatte e formaggi misti della casa.' },
  {
    id: '4-stagioni',
    name: '4 Stagioni',
    price: 7.0,
    ingredients: 'Pomodoro, fiordilatte, prosciutto cotto puro suino, funghi champignon, olive, carciofi.',
  },
  {
    id: 'americana',
    name: 'Americana',
    price: 7.0,
    ingredients: 'Pomodoro, fiordilatte, würstel, patate fritte.',
  },
  {
    id: 'brianzola',
    name: 'Brianzola',
    price: 7.0,
    ingredients:
      'Fiordilatte, salsiccia fresca, grana DOP in scaglie, cipolla rossa di Tropea, pepe macinato fresco.',
  },
  {
    id: 'diavola',
    name: 'Diavola',
    price: 7.0,
    ingredients: 'Pomodoro, fiordilatte, spianata calabrese.',
    badge: 'spicy',
  },
  {
    id: 'napoletana',
    name: 'Napoletana',
    price: 7.0,
    ingredients: 'Pomodoro, fiordilatte, olive, acciughe, capperi.',
  },
  {
    id: 'tirolese',
    name: 'Tirolese',
    price: 7.0,
    ingredients: 'Pomodoro, fiordilatte, speck delicato, brie DOP.',
  },
  {
    id: 'tropeana',
    name: 'Tropeana',
    price: 7.0,
    ingredients: 'Pomodoro, fiordilatte, tonno, cipolla rossa di Tropea.',
  },
  {
    id: 'vegetariana',
    name: 'Vegetariana',
    price: 7.0,
    ingredients: 'Pomodoro, fiordilatte, verdure arrostite (melanzane, peperoni, zucchine).',
  },
];

export const pizzeSpeciali: MenuItem[] = [
  {
    id: 'brigante',
    name: 'Brigante',
    price: 8.0,
    ingredients: "Pomodoro, fiordilatte, gorgonzola DOP, 'nduja di Spilinga, cipolla rossa di Tropea.",
    badge: 'spicy',
  },
  {
    id: 'cacciatore',
    name: 'Cacciatore',
    price: 8.0,
    ingredients: 'Pomodoro, fiordilatte, salame di coscia di puro suino, ricotta vaccina.',
  },
  {
    id: 'calabrisella',
    name: 'Calabrisella',
    price: 8.0,
    ingredients: 'Pomodoro, fiordilatte, cacio silano DOP, spianata calabra.',
    badge: 'spicy',
  },
  {
    id: 'caribe',
    name: 'Caribe',
    price: 8.0,
    ingredients: 'Fiordilatte, panna, zucchine, gamberetti.',
  },
  {
    id: 'cascina',
    name: 'Cascina',
    price: 8.0,
    ingredients:
      'Fiordilatte, patate grattugiate, pancetta cotta La Collinetta, peperoni, gorgonzola DOP.',
  },
  {
    id: 'cuore',
    name: 'Cuore',
    price: 8.0,
    ingredients: "Pomodoro, stracciatella, prosciutto crudo d'Oggiono, rucola.",
    badge: 'heart',
    note: 'Servita a forma di cuore.',
  },
  {
    id: 'dany',
    name: 'Dany',
    price: 8.0,
    ingredients: 'Fiordilatte, gorgonzola DOP, panna, noci, noce moscata.',
  },
  {
    id: 'dalia',
    name: 'Dalia',
    price: 8.0,
    ingredients: 'Fiordilatte, patate grattugiate, speck delicato, scamorza affumicata.',
  },
  {
    id: 'maialina',
    name: 'Maialina',
    price: 8.0,
    ingredients: 'Fiordilatte, crema di zucca, guanciale al pepe stagionato.',
  },
];

export const sfizi: SfizioGroup[] = [
  {
    id: 'hamburger',
    title: 'Hamburger del Mercoledì',
    description: 'Panini artigianali disponibili il mercoledì, Hamburger Day.',
    items: [
      'Panino WCS',
      'Panino Hazzard',
      'Panino Italiano (con capocollo di Martina Franca)',
    ],
  },
  {
    id: 'friggitoria',
    title: 'Friggitoria',
    items: [
      'Bombette pugliesi',
      'Arancini',
      'Polpette di melanzane',
      'Polpette di zucchine e ricotta',
    ],
  },
  {
    id: 'dolci',
    title: 'Dolci',
    items: [
      'Pasticciotti leccesi (crema, o ricotta e gocce di cioccolato)',
      'Zeppole di San Giuseppe',
    ],
  },
];

export const extras = {
  impasti: ['9 cereali', 'integrale', 'farro'],
  formati: ['Mezzo Metro'],
};
