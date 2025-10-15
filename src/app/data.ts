export type ProjectSchema = {
  id: number;
  name: string;
  achievements: string[];
  description: string;
  thumbnail: string[];
  links: {
    link: string;
    source: 'Github' | 'Website' | 'Devpost' | 'Report Link';
  }[];
  technologies: string[];
};
export const Projects: ProjectSchema[] = [
  {
    id: 4,
    name: '3D Rendering Program',
    thumbnail: [
      '/ProjectAssets/Kraig.jpeg',
    ],
    description: 'A platform for event ticketing and attendee matchmaking powered by AI',
    achievements: [
      'Built a custom 3D rendering engine in C with TIGR, implementing matrix and vector operations to render Wavefront (.obj) models; earned 2nd place at Codebrew Hackathon.',
      'Implemented core linear algebra operations (matrix multiplication, vector transformations) to perform 3D object translation, rotation, and scaling to develop perspective projection algorithms to convert 3D coordinates into accurate 2D screen space',
    ],
    technologies: ['C'],
    links: [
      {
        link: 'https://devpost.com/software/kraig',
        source: 'Devpost',
      },
    ],
  },
  {
    id: 1,
    name: 'Medical Pantry - Image Recognizer and Inventory Manager',
    description:
      'A mobile webapp and dashboard to manage medical supplies and recognize products using image' + ' recognition',
    achievements: [
      'Applied AGILE methodology with Jira to manage projects, issues, and tasks',
      'Deployed a responsive and modern interface with Next.js, React, and TailwindCSS',
      'Integrated Artificial Intelligence for image recognition, achieving 80% accuracy in categorizing' +
        ' medical products',
      'Streamlined onboarding and medical items recognition processes for a medium-sized non-for-profit' +
        ' organisation',
    ],
    thumbnail: ['/ProjectAssets/MedicalPantry.png'],
    links: [
      {
        link: 'https://github.com/buianhduc/medicalPantry',
        source: 'Github',
      },
    ],
    technologies: ['TailwindCSS', 'NextJS', 'Firebase', 'Typescript', 'React'],
  },
  
  {
    id: 2,
    name: 'Books Store Collaborative Recommender System',
    description: 'A recommendation system using Collaborative Filtering with Matrix Factorization',
    achievements: [
      'Applied collaborative filtering and content-based models to create a recommendation system, achieving a 80% accuracy rate',
      'Built an end-to-end system using matrix factorization, feature extraction, and text preprocessing',
    ],
    thumbnail: ['https://booknet.com.au/wp-content/uploads/2020/05/5-Advantages-of-an-Online-Bookshop.jpg'],
    links: [
      {
        link: 'https://github.com/buianhduc/medicalPantry',
        source: 'Github',
      },
    ],
    technologies: ['Scikit-learn', 'Surprise', 'Pandas', 'NTLK', 'Matplotlib', 'Python'],
  },
  {
    id: 3,
    name: 'Meetix – A Friend-Making Website Through Events',
    thumbnail: [
      '/ProjectAssets/MeetixLandingPage.jpg',
      '/ProjectAssets/Meetix_Event.png',
      '/ProjectAssets/Meetix_EventDashboard.jpg',
      '/ProjectAssets/Meetix_UserProfile.jpg',
    ],
    description: 'A platform for event ticketing and attendee matchmaking powered by AI',
    achievements: [
      'Built a platform for event ticketing and attendee matchmaking using Firebase Firestore for real-time data' +
        ' management',
      'Implemented a matchmaking algorithm and integrated real-time messaging to connect users with similar' +
        ' interests',
      'Developed a responsive, user-friendly interface with Next.js, React, and TailwindCSS for a seamless user experience',
    ],
    technologies: ['NextJS', 'React', 'Firebase'],
    links: [
      {
        link: 'https://github.com/edwnl/founders-hack-2024',
        source: 'Github',
      },
      {
        link: 'https://founders-hack-2024.vercel.app/',
        source: 'Website',
      },
      {
        link: 'https://devpost.com/software/meetix',
        source: 'Devpost',
      },
    ],
  },
  
  {
    id: 5,
    name: 'German Traffic Signs Recogniser',
    thumbnail: [
      'https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_790x520_0x520_german-road-signs-header.jpg'
    ],
    description: 'A platform for event ticketing and attendee matchmaking powered by AI',
    achievements: [
      'Integrated Convolutional Neural Network for image recognition, achieving 98% accuracy in categorizing traffic signs',
      'Implemented Support Vector Machine, Random Forest, and Multi-layered Perceptrons models to assess and evaluate the CNN models',
      'Extracted features from CNN to train other models, improved models’ accuracy by 17 percent on average',
    ],
    technologies: ['Python', 'Keras', 'Scikit-learn', 'Tensorflow'],
    links: [
      {
        link: '/ProjectAssets/GTSRB Report.pdf',
        source: 'Report Link',
      }
    ],
  },
];
