const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Frontend Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Frontend Development'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Frontend Development'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Frontend Development'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Backend Development', 'Databases'],
  },
  {
    title: 'SQLite',
    competency: 5,
    category: ['Frontend Development', 'Databases', 'Mobile App Development'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Machine Learning'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 1,
    category: ['Tools', 'Machine Learning'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'Numba',
    competency: 4,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 1,
    category: ['Python'],
  },
  {
    title: 'PyTorch',
    competency: 1,
    category: ['Python'],
  },
  {
    title: 'Bootsrap',
    competency: 1,
    category: ['Frontend Development', 'Framework'],
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
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'Machine Learning'],
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
    title: 'Jetpack Compose',
    competency: 3,
    category: ['Framework', 'Mobile App Development'],
  },
  {
    title: 'Material Design',
    competency: 5,
    category: ['Library', 'Frontend Development', 'Mobile App Development'],
  },
  {
    title: 'Firebase',
    competency: 4,
    category: ['Frontend Development', 'Mobile App Development', 'Databases'],
  },
  {
    title: 'Room',
    competency: 4,
    category: ['Databases', 'Mobile App Development'],
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
    title: 'Flutter',
    competency: 3,
    category: ['Framework', 'Mobile App Development'],
  },
  {
    title: 'Django',
    competency: 3,
    category: ['Framework', 'Backend Development'],
  },
  {
    title: 'Laravel',
    competency: 3,
    category: ['Framework', 'Backend Development'],
  },
  {
    title: 'MySQL',
    competency: 3,
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
    title: 'Android Studio',
    competency: 5,
    category: ['Mobile App Development', 'IDE'],
  },
  {
    title: 'VS Code',
    competency: 5,
    category: ['Mobile App Development', 'Frontend Development', 'IDE'],
  },
  {
    title: 'Py Charm',
    competency: 5,
    category: ['Backend Development', 'IDE', 'Machine Learning'],
  },
  {
    title: 'PHP',
    competency: 5,
    category: ['Backend Development', 'Languages'],
  },
  {
    title: 'Phpstorm',
    competency: 5,
    category: ['Backend Development', 'IDE'],
  },
  {
    title: 'Payment Integration',
    competency: 3,
    category: ['Backend Development'],
  },
  {
    title: 'MATLAB',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 1,
    category: ['Machine Learning'],
  },
  {
    title: 'Pandas',
    competency: 1,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 1,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Machine Learning'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
