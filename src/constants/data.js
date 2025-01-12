import images from './images';

const starters = [
  {
    title: 'Rice Pancake With Pork/Beef/Shrimp/Mushrooms',
    price: '60.000đ',
    tags: 'AU | Bottle',
  },
  {
    title: 'Fried Springrolls With Pork/Shrimp/Mushrooms',
    price: '80.000đ',
    tags: 'AU | Bottle',
  },
  {
    title: 'Green Papaya / Green Mango / Banana Flower Salad',
    price: '80.000đ',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Fresh Springrolls With Shrimp/Pork/Mushrooms',
    price: '80.000đ',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Fresh Steamed Rice Rolls With Mushrooms/Pork',
    price: '60.000đ',
    tags: 'IE | 750 ml',
  },
];

const mainCourses = [
  {
    title: 'Caramelised Fish Cooked In Clay Pot',
    price: '120.000đ',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Sweet & Sour Sauteed Beef/Pork/Chicken",
    price: '120.000đ',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Sauteed Beef/Pork/Chicken With Lemongrass & Chili',
    price: '110.000đ',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Mixed Vegetables & Mushrooms Cooked In Clay Pot',
    price: '90.000đ',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Stuffed Tofu With Minced Pork, Mushrooms',
    price: '90.000đ',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { starters, mainCourses, awards };
