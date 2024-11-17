// TODO Add a couple lines about each project
const projects = [
  {
    title: '4 Sale & Buy',
    subtitle: 'Buy and Sell Anything with Ease, Your Marketplace for Everything',
    category: ['Mobile App Development'],
    technology: ['XML', 'Java', 'Retrofit2', 'Material UI', 'Glide', ' Shared Preferences', 'Firebase Chat',
      'Paypal', 'Analytics', 'StoryBoard', 'Gallery Picker', 'Google Maps', 'Language Mode'],
    link: 'https://www.easy2manage.co.uk/',
    image: '/images/projects/4sale_buy.png',
    date: '2023-11-20',
    desc:
      '4Sale & Buy is an online marketplace where users can buy and sell a wide variety of products, including vehicles, properties, pets, services, and more. The platform offers an easy-to-use interface for posting and browsing ads, making it easy to connect buyers with sellers in a local community.',
  },
  {
    title: 'Easy2Manage',
    subtitle: 'Effortless Property Management, Your Trusted Partner in Landlord Services',
    category: ['Mobile App Development'],
    technology: ['XML', 'Java', 'Volley', 'Material Calendar', 'Glide', 'Stripe'],
    link: 'https://drive.google.com/file/d/1wXVzBdai7oFbiFLePf10oeq4MwS1kHnj/view',
    image: '/images/projects/harvest.jpg',
    date: '2022-09-22',
    desc:
      'Easy2Manage (E2M) is a professional property management service based in the UK, offering comprehensive solutions for landlords and property owners. Their services include tenant sourcing, property maintenance, and full management, ensuring efficient and hassle-free property operation.',
  },
  {
    title: 'Yemeni Dokkan',
    subtitle: 'Based on selling products over the ecommerce app',
    category: ['Mobile App Development'],
    technology: ['XML', 'Java', 'Volley', ' SQLite', 'Shimmer Effect', 'Image Slider', 'Animation'],
    link: 'http://www.spacepotato.org',
    image: '/images/projects/spacepotato.jpg',
    date: '2022-06-28',
    desc:
      '',
  },
  {
    title: 'VPC House Keeping',
    subtitle: 'Based on hotel staff task completion over the housekeeping app',
    category: ['Mobile App Development'],
    technology: ['XML', 'Java', 'Volley', 'Material Calendar', 'Gallery Picker', 'Picasso', 'SQLite'],
    link: 'https://www.easy2manage.co.uk/',
    image: '/images/projects/spacepotato.jpg',
    date: '2022-07-15',
    desc:
      '',
  },
].map((project) => ({ ...project, category: project.category.sort() }));

const categories = [...new Set(projects.flatMap(({ category }) => category))]
  .sort()
  .map((category) => ({
    name: category,
  }));

export { categories, projects };
