const skills = [
  {
    title: 'C',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Languages', 'Mobile App Development'],
  },
  {
    title: 'PHP',
    competency: 5,
    category: ['Languages', 'Backend Development'],
  },
  {
    title: 'Javascript',
    competency: 5,
    category: ['Languages', 'Frontend Development'],
  },
  {
    title: 'Kotlin',
    competency: 3,
    category: ['Languages', 'Mobile App Development'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Machine Learning', 'Backend Development'],
  },
  {
    title: 'MATLAB',
    competency: 4,
    category: ['Languages', 'Machine Learning'],
  },
  {
    title: 'MySQL',
    competency: 5,
    category: ['Databases', 'Backend Development'],
  },
  {
    title: 'Redis',
    competency: 5,
    category: ['Databases', 'Backend Development'],
  },
  {
    title: 'Oracle',
    competency: 5,
    category: ['Databases', 'Backend Development'],
  },
  {
    title: 'SQL Server',
    competency: 5,
    category: ['Databases', 'Backend Development'],
  },
  {
    title: 'PostgreSQL',
    competency: 5,
    category: ['Databases', 'Backend Development'],
  },
  {
    title: 'SQLite',
    competency: 5,
    category: ['Databases', 'Frontend Development', 'Mobile App Development'],
  },
  {
    title: 'Firebase',
    competency: 4,
    category: ['Databases', 'Mobile App Development'],
  },
  {
    title: 'Room',
    competency: 3,
    category: ['Databases', 'Mobile App Development'],
  },
  {
    title: 'Vector DB',
    competency: 4,
    category: ['Databases', 'Backend Development', 'Machine Learning'],
  },
  {
    title: 'Laravel',
    competency: 5,
    category: ['Framework', 'Backend Development'],
  },
  {
    title: 'Django',
    competency: 5,
    category: ['Framework', 'Backend Development'],
  },
  {
    title: 'Hapi.js',
    competency: 5,
    category: ['Framework', 'Backend Development'],
  },
  {
    title: 'FastApi',
    competency: 4,
    category: ['Framework', 'Backend Development'],
  },
  {
    title: 'REST',
    competency: 5,
    category: ['Backend Development'],
  },
  {
    title: 'gRPC',
    competency: 3,
    category: ['Backend Development'],
  },
  {
    title: 'GraphQL',
    competency: 3,
    category: ['Backend Development'],
  },
  {
    title: 'Oauth2',
    competency: 5,
    category: ['Backend Development'],
  },
  {
    title: 'JWT',
    competency: 5,
    category: ['Backend Development'],
  },
  {
    title: 'RBAC',
    competency: 5,
    category: ['Backend Development'],
  },
  {
    title: 'Prisma ',
    competency: 5,
    category: ['Backend Development'],
  },
  {
    title: 'Sequilize',
    competency: 5,
    category: ['Backend Development'],
  },
  {
    title: 'Express.js',
    competency: 1,
    category: ['Framework', 'Backend Development'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Framework', 'Frontend Development'],
  },
  {
    title: 'Tailwind',
    competency: 5,
    category: ['Framework', 'Frontend Development'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 5,
    category: ['Frontend Development'],
  },
  {
    title: 'XML',
    competency: 5,
    category: ['Mobile App Development'],
  },
  {
    title: 'Material Design',
    competency: 5,
    category: ['Library', 'Frontend Development', 'Mobile App Development'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Library', 'Frontend Development'],
  },
  {
    title: 'Angular',
    competency: 3,
    category: ['Framework', 'Frontend Development'],
  },
  {
    title: 'Jasper',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'MP Android Chart',
    competency: 4,
    category: ['Library', 'Mobile App Development'],
  },
  {
    title: 'Data Binding',
    competency: 5,
    category: ['Mobile App Development', 'Frontend Development'],
  },
  {
    title: 'View Binding',
    competency: 5,
    category: ['Mobile App Development', 'Frontend Development'],
  },
  {
    title: 'Dagger Hilt',
    competency: 5,
    category: ['Library', 'Mobile App Development'],
  },
  {
    title: 'Volley',
    competency: 5,
    category: ['Library', 'Mobile App Development'],
  },
  {
    title: 'Retrofit2',
    competency: 5,
    category: ['Library', 'Mobile App Development'],
  },
  {
    title: 'Glide',
    competency: 5,
    category: ['Library', 'Mobile App Development'],
  },
  {
    title: 'Picasso',
    competency: 5,
    category: ['Library', 'Mobile App Development'],
  },
  {
    title: 'Android Studio',
    competency: 5,
    category: ['IDE'],
  },
  {
    title: 'VS Code',
    competency: 5,
    category: ['IDE'],
  },
  {
    title: 'Pycharm',
    competency: 5,
    category: ['IDE'],
  },
  {
    title: 'Phpstorm',
    competency: 5,
    category: ['IDE'],
  },
  {
    title: 'Cursor',
    competency: 5,
    category: ['IDE'],
  },
  {
    title: 'pgAdmin4',
    competency: 5,
    category: ['IDE'],
  },
  {
    title: 'Toad',
    competency: 5,
    category: ['IDE'],
  },
  {
    title: 'Payment Integration',
    competency: 5,
    category: ['Frontend Development', 'Mobile App Development'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Library', 'Machine Learning'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 5,
    category: ['Machine Learning'],
  },
  {
    title: 'PyTorch',
    competency: 5,
    category: ['Machine Learning'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Library', 'Machine Learning'],
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: ['Library', 'Machine Learning'],
  },
  {
    title: 'Seaborn',
    competency: 5,
    category: ['Library', 'Machine Learning'],
  },
  {
    title: 'SciPy',
    competency: 3,
    category: ['Library', 'Machine Learning'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Machine Learning'],
  },
  {
    title: 'LLM',
    competency: 4,
    category: ['Machine Learning'],
  },
  {
    title: 'RAG',
    competency: 4,
    category: ['Machine Learning', 'Backend Development'],
  },
  {
    title: 'TypeScript',
    competency: 4,
    category: ['Frontend Development'],
  },
  {
    title: 'Github',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'GitLab',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Postman',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Swagger ',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Selenium ',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Cypress ',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Figma',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Latex',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Linux',
    competency: 5,
    category: ['DevOps'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['DevOps'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['DevOps'],
  },
  {
    title: 'AWS/Azure',
    competency: 3,
    category: ['DevOps'],
  },
  {
    title: 'CI/CD Pipeling',
    competency: 5,
    category: ['DevOps'],
  },
  {
    title: 'Github Actions',
    competency: 5,
    category: ['DevOps'],
  },
  {
    title: 'Apache',
    competency: 5,
    category: ['DevOps'],
  },
  {
    title: 'Nginx',
    competency: 5,
    category: ['DevOps'],
  },
  {
    title: 'Gitlab CI',
    competency: 5,
    category: ['DevOps'],
  },
  {
    title: 'Jenkins',
    competency: 3,
    category: ['DevOps'],
  },
  {
    title: 'Bash',
    competency: 5,
    category: ['DevOps'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#5c6bc0',
  '#29b6f6',
  '#37474f',
  '#3f51b5',
  '#e57373',
  '#f06292',
  '#42a5f5',
  '#e53935',
  '#ef5350',
  '#536dfe',
  '#66bb6a',
];
// const colors = [
//   '#6968b3',
//   '#37b1f5',
//   '#40494e',
//   '#515dd4',
//   '#e47272',
//   '#cc7b94',
//   '#3896e2',
//   '#c3423f',
//   '#d75858',
//   '#747fff',
//   '#64cb7b',
// ];
const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
