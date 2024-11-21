// TODO Add a couple lines about each project
const projects = [
  {
    title: '4 Sale & Buy',
    subtitle: 'Buy and Sell Anything with Ease, Your Marketplace for Everything',
    category: ['Mobile App Development'],
    technology: ['XML', 'Java', 'Retrofit2', 'Material UI', 'Glide', ' Shared Preferences', 'Firebase Chat',
      'Paypal', 'Analytics', 'StoryBoard', 'Gallery Picker', 'Google Maps', 'Language Mode'],
    link: 'https://drive.google.com/file/d/1B8-Uo-uZSjkdJAAN7cMrMcZcyZAReVQY/view?usp=drive_link',
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
    image: '/images/projects/e2m.png',
    date: '2022-09-22',
    desc:
      'Easy2Manage (E2M) is a professional property management service based in the UK, offering comprehensive solutions for landlords and property owners. Their services include tenant sourcing, property maintenance, and full management, ensuring efficient and hassle-free property operation.',
  },
  {
    title: 'Yemeni Dokkan',
    subtitle: 'Based on selling products over the ecommerce app',
    category: ['Mobile App Development'],
    technology: ['XML', 'Java', 'Volley', ' SQLite', 'Shimmer Effect', 'Image Slider', 'Animation'],
    link: 'https://drive.google.com/file/d/1bAr4dh_FC583_Jdb2HBFDhDE1X4OfhH5/view',
    image: '/images/projects/yemennidokkan.png',
    date: '2022-06-28',
    desc:
      '',
  },
  {
    title: 'VPC House Keeping',
    subtitle: 'Based on hotel staff task completion over the housekeeping app',
    category: ['Mobile App Development'],
    technology: ['XML', 'Java', 'Volley', 'Material Calendar', 'Gallery Picker', 'Picasso', 'SQLite'],
    link: 'https://drive.google.com/file/d/17DS-ynqi9f9hK8uOLVzIcrAWaevdUxQP/view',
    image: '/images/projects/vpclondon.png',
    date: '2022-07-15',
    desc:
      'Based on hotel staff task completion over the housekeeping app',
  },
  {
    title: 'Golden Treasure Inc.',
    subtitle: 'Based on financial supporting app',
    category: ['Mobile App Development'],
    technology: ['XML', 'Java', 'Volley', 'SQLite', 'Material UI/UX', 'Android Chart', 'Stripe'],
    link: 'https://drive.google.com/file/d/1BLmTDRyYvCTo9QkbTFUd9peOINfVxWIw/view',
    image: '/images/projects/gti.png',
    date: '2023-12-25',
    desc:
      'Based on financial supporting app',
  },
  {
    title: 'Weekly Meal',
    subtitle: 'Based on weekly meal planner app',
    category: ['Mobile App Development'],
    technology: ['XML', 'Java', 'SQLite', 'Material UI/UX', 'MVVM', 'Shimmer'],
    link: 'https://github.com/sifatabdullah386/UtilityApp_WeeklyMeal',
    image: '/images/projects/weeklymeal.png',
    date: '2024-07-25',
    desc:
      'Based on weekly meal planner app',
  },
  {
    title: 'Home Automation',
    subtitle: 'Based on IOT Based device control app design',
    category: ['Mobile App Development'],
    technology: ['Jetpack compose', 'kotlin', 'Material UI/UX', 'Retrofit2', 'View Binding', 'SQLite', 'Data Binding', 'MVVM', 'Lifecycle', 'Coroutines'],
    link: 'https://github.com/sifatabdullah386/home-automation-jetpack',
    image: '/images/projects/homeautomation.png',
    date: '2024-01-31',
    desc:
      'Based on IOT Based device control app design',
  },
  {
    title: 'Hotel Management',
    subtitle: 'Based on hotel staff and customer management system including booking, restaurant & bar, guest, crm, rooms, ratings, purchase, accounts & finance, usermanagement, hrm, reports etc over this app',
    category: ['Backend Development'],
    technology: ['HTML', 'CSS', 'Bootstrap', 'JQuery', 'PHP', 'Laravel', 'Composer', 'MySQL', 'QR Scanner', 'Stripe', 'SQLite', ''],
    link: 'https://hotel.cisstaging.com/',
    image: '/images/projects/hotelmgt.png',
    date: '2023-07-30',
    desc:
      'Based on hotel staff and customer management system including booking, restaurant & bar, guest, crm, rooms, ratings, purchase, accounts & finance, usermanagement, hrm, reports etc over this app',
  },
  {
    title: 'EJMS (EJanata Management System)',
    subtitle: 'Based on banking transaction management system implemented features like usermanagement, reconsile, dispute, account management, transaction reports, role management, eft management, loan & credit management systems',
    category: ['Backend Development'],
    technology: ['HTML', 'CSS', 'Bootstrap', 'JQuery', 'Python', 'Django', 'Pip', 'Oracle', 'API Integration', 'MVT', 'SQLite3'],
    link: '',
    image: '/images/projects/ejms.png',
    date: '2024-10-30',
    desc:
      'Based on banking transaction management system implemented features like usermanagement, reconsile, dispute, account management, transaction reports, role management, eft management, loan & credit management systems',
  },
  {
    title: 'Rab',
    subtitle: 'Based on university website design',
    category: ['Frontend Development'],
    technology: ['HTML', 'CSS', 'Bootstrap', 'JQuery', 'PHP', 'MySQL'],
    link: 'https://rabindrauvweb.netlify.app/',
    image: '/images/projects/rab.png',
    date: '2022-03-31',
    desc:
      'Based on university website design',
  },
  {
    title: 'Yotta SME',
    subtitle: 'Based on financial small medium enterprise business module and controling app',
    category: ['Mobile App Development'],
    technology: ['XML', 'JAVA', 'Material UI/UX', 'Retrofit2', 'View Binding', 'SQLite', 'Data Binding', 'MVVM', 'Lifecycle', 'MP Android Chart', 'Shimmer'],
    link: '',
    image: '/images/projects/yottasme.png',
    date: '2022-09-20',
    desc:
      'Based on financial small medium enterprise business module and controling app',
  },
  {
    title: 'Safe Guard',
    subtitle: 'Based on geolocation tracking rescue app',
    category: ['Mobile App Development'],
    technology: ['XML', 'JAVA', 'Material UI/UX', 'Google Map', 'Google Places', 'Firebase database', 'Firebase Storage', 'SQLite', 'Google Services', 'Firebase Auth', 'OneSignal', 'OkHttp'],
    link: 'https://github.com/sifatabdullah386/safeguard-android',
    image: '/images/projects/safeguard.png',
    date: '2021-01-20',
    desc:
      'Based on geolocation tracking rescue app',
  },
].map((project) => ({ ...project, category: project.category.sort() }));

const categories = [...new Set(projects.flatMap(({ category }) => category))]
  .sort()
  .map((category) => ({
    name: category,
  }));

export { categories, projects };
