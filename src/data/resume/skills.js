const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Machine Learning', 'Data Science'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Languages', 'Mobile App Development'],
  },
  {
    title: 'C',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Kotlin',
    competency: 4,
    category: ['Languages', 'Mobile App Development'],
  },
  {
    title: 'Dart',
    competency: 2,
    category: ['Languages', 'Mobile App Development'],
  },
  {
    title: 'PHP',
    competency: 5,
    category: ['Languages', 'Backend Development'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Languages', 'Frontend Development'],
  },
  {
    title: 'MATLAB',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'MySQL',
    competency: 5,
    category: ['Databases', 'Backend Development'],
  },
  {
    title: 'Oracle',
    competency: 3,
    category: ['Databases', 'Backend Development'],
  },
  {
    title: 'SQL Server',
    competency: 1,
    category: ['Databases', 'Backend Development'],
  },
  {
    title: 'MongoDB',
    competency: 4,
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
    category: ['Databases', 'Frontend Development', 'Mobile App Development'],
  },
  {
    title: 'Room',
    competency: 5,
    category: ['Databases', 'Mobile App Development'],
  },
  {
    title: 'Flutter',
    competency: 3,
    category: ['Framework', 'Mobile App Development'],
  },
  {
    title: 'Django',
    competency: 5,
    category: ['Framework', 'Backend Development'],
  },
  {
    title: 'Laravel',
    competency: 5,
    category: ['Framework', 'Backend Development'],
  },
  {
    title: 'Bootsrap',
    competency: 4,
    category: ['Framework', 'Frontend Development'],
  },
  {
    title: 'Tailwind',
    competency: 1,
    category: ['Framework', 'Frontend Development'],
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
    title: 'Jetpack Compose',
    competency: 3,
    category: ['Framework', 'Mobile App Development'],
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
    title: 'MP Android Chart',
    competency: 4,
    category: ['Library', 'Mobile App Development'],
  },
  {
    title: 'Data Binding',
    competency: 4,
    category: ['Mobile App Development'],
  },
  {
    title: 'View Binding',
    competency: 4,
    category: ['Mobile App Development'],
  },
  {
    title: 'Dagger Hilt',
    competency: 2,
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
    category: ['IDE', 'Mobile App Development'],
  },
  {
    title: 'VS Code',
    competency: 5,
    category: ['IDE', 'Mobile App Development', 'Frontend Development'],
  },
  {
    title: 'Pycharm',
    competency: 5,
    category: ['IDE', 'Backend Development', 'Machine Learning', 'Data Science'],
  },
  {
    title: 'Phpstorm',
    competency: 5,
    category: ['IDE', 'Backend Development'],
  },
  {
    title: 'Payment Integration',
    competency: 4,
    category: ['Frontend Development', 'Mobile App Development'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Library', 'Machine Learning', 'Data Science'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 1,
    category: ['Machine Learning', 'Data Science'],
  },
  {
    title: 'PyTorch',
    competency: 1,
    category: ['Machine Learning', 'Data Science'],
  },
  {
    title: 'Data Visualization',
    competency: 1,
    category: ['Machine Learning', 'Data Science'],
  },
  {
    title: 'Pandas',
    competency: 1,
    category: ['Library', 'Machine Learning', 'Data Science'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Library', 'Machine Learning', 'Data Science'],
  },
  {
    title: 'Seaborn',
    competency: 1,
    category: ['Library', 'Machine Learning', 'Data Science'],
  },
  {
    title: 'SciPy',
    competency: 1,
    category: ['Library', 'Machine Learning', 'Data Science'],
  },
  {
    title: 'Scikit-Learn',
    competency: 1,
    category: ['Machine Learning', 'Data Science'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Tools', 'Frontend Development'],
  },
  {
    title: 'Github',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Postman',
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
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 1,
    category: ['Tools'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools'],
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
