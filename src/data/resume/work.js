/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Janata Bank PLC.',
    position: 'Senior Officer-IT (AP)',
    url: 'https://www.jb.com.bd/',
    startDate: '2024-02-01',
    summary: '',
    highlights: [
      'Managing application systems within the bank, ensuring their smooth operation, including deployment, updates, and troubleshooting.',
      'Providing technical support for software and applications used across the banking that affect daily banking operations.',
      'Collaborating with other IT teams to develop or integrate new systems or applications that improve banking services.',
      'Ensuring the security of applications, data, and systems, complying with industry regulations and internal policies.',
      'Leading or supporting IT projects, such as software upgrades, system migrations, or new software implementations.',
      'Working with external vendors for system or application support, ensuring contracts and service agreements are upheld.',
      'Identifying areas where processes can be automated or optimized using technology, enhancing efficiency.',
    ],
  },
  {
    name: 'CIS Tech. Ltd.',
    position: 'Software Engineer',
    url: 'https://cistechltd.com/',
    startDate: '2022-01-01',
    endDate: '2024-01-31',
    summary: '',
    highlights: [
      'Designing and developing the server-side logic of applications using Laravel, including database management, API creation, and ensuring smooth data flow between the front end and backend.',
      'A collaborating with frontend developers to integrate react app features with the backend, ensuring seamless functionality and user experience.',
      'Developing and maintaining RESTful APIs for Android applications, ensuring secure and efficient data exchange.',
      'Working with databases to store and retrieve information effectively, using SQL and other tools for query optimization.',
      'Ensuring code quality by performing rigorous testing and debugging both in the backend and within the Android apps.',
      'Writing clean, efficient, and maintainable code using Android development tools like Kotlin/Java, following best practices.',
      'Collaborating with backend developers (Laravel) to integrate APIs and services, ensuring seamless data exchange between the app and the server.',
      'Implementing user-friendly interfaces and ensuring a smooth user experience based on client requirements or design guidelines.',
      'Debugging and resolving issues, improving app performance, and ensuring app compatibility across various devices.',
      'Working closely with cross-functional teams, including designers and testers, to deliver robust Android applications on time.',
    ],
  },
];

export default work;
