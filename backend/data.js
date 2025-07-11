const education = [
    { id: 1, period: '2023 - Sekarang', institution: 'Universitas AMIKOM Yogyakarta', major: 'S1 - Informatika', achievements: ['IPK 3.91/4.0'] },
    { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 9 Yogyakarta', major: 'Jurusan MIPA', achievements: [] },
    { id: 3, period: '2017 - 2020', institution: 'SMP Negeri 6 Yogyakarta', achievements: ['Juara 2 Robot Sumo 3kg'] }
];
const skills = [
  { name: 'Python', description: 'A versatile programming language that is the industry standard for AI, Machine Learning, and data analysis, known for its simple syntax and rich ecosystem of libraries.' },
  { name: 'Scikit-learn', description: 'A fundamental Machine Learning library for Python that provides a wide range of algorithms for classification, regression, clustering, and tools for model evaluation.' },
  { name: 'Matplotlib', description: 'A powerful data visualization library in Python used to create a wide variety of static, animated, and interactive plots and graphs.' },
  { name: 'Numpy', description: 'The core library for numerical computing in Python, providing support for efficient multi-dimensional arrays and matrices for mathematical operations.' },
  { name: 'Seaborn', description: 'A data visualization library based on Matplotlib that provides a high-level interface for drawing attractive and informative statistical graphics.' },
  { name: 'Pandas', description: 'An essential library for data manipulation and analysis, providing powerful data structures like the DataFrame to clean, transform, and analyze structured data.' },
  { name: 'Tailwind CSS', description: 'A modern, utility-first CSS framework that enables rapid development of custom user interfaces directly within your HTML markup.' },
];
const projects = [
    { id: 1, title: 'E-Commerce Platform', description: 'Platform marketplace lengkap dengan fitur shopping cart, payment gateway, dan admin dashboard.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop', technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe'], status: 'Selesai', demoLink: '#', codeLink: '#' },
    { id: 2, title: 'Task Management App', description: 'Aplikasi manajemen tugas dengan fitur real-time collaboration dan progress tracking.', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop', technologies: ['React', 'Firebase', 'Material-UI'], status: 'In Progress', demoLink: '#', codeLink: '#' },
    { id: 3, title: 'Weather Forecast App', description: 'Aplikasi ramalan cuaca dengan visualisasi data yang menarik dan responsive design.', image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop', technologies: ['JavaScript', 'Chart.js', 'OpenWeather API'], status: 'Selesai', demoLink: '#', codeLink: '#' }
];
module.exports = { education, skills, projects };