
const education = [
    { id: 1, period: '2023 - Sekarang', institution: 'Universitas AMIKOM Yogyakarta', major: 'S1 - Informatika', achievements: ['IPK 3.93/4.0', 'Juara 2 Hackathon AMICTA 2025'] },
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
  {
    id: 'ai-1',
    title: 'Air Quality Predicted',
    category: 'Machine Learning Model',
    imageName: 'Screenshot 2025-07-02 070203.png', // Hanya nama file
    link: 'https://airqualitypredicted.streamlit.app',
    isAi: true // Penanda untuk memisahkan kategori
  },
  {
    id: 'other-1',
    title: 'Topupin',
    category: 'Website',
    imageName: 'Topupinn.png', // Hanya nama file
    link: null, // Atau link jika ada
    isAi: false
  },
  {
    id: 'other-2',
    title: 'Sinergia',
    category: 'Website',
    imageName: 'sinergia.png', // Hanya nama file
    link: null,
    isAi: false
  },
  {
    id: 'ai-2',
    title: 'Flight Delay Prediction',
    category: 'Machine Learning Model',
    imageName: 'image.png', // Hanya nama file
    link: 'https://colab.research.google.com/drive/1qs4nf3cY_Gl8FPl6YjKQ7ygIye_MVM8R?usp=sharing',
    isAi: true // Penanda untuk memisahkan kategori
  },
  {
    id: 'ai-3',
    title: 'Batik Classifier',
    category: 'Machine Learning Model',
    imageName: 'Screenshot 2026-02-01 054636.png', // Hanya nama file
    link: 'https://colab.research.google.com/drive/1FBy8Jy-Wp2OwmzfbghdSZzN106Kcqfns?usp=sharing',
    isAi: true // Penanda untuk memisahkan kategori
  },
  {
    id: 'ai-4',
    title: 'Predict Engagement Level Gaming',
    category: 'Machine Learning Model',
    imageName: 'Screenshot 2026-02-01 054928.png', // Hanya nama file
    link: 'https://colab.research.google.com/drive/17WEjs7MaqLZQzhqjLRHX3WLzVZSANRxA?usp=sharing',
    isAi: true // Penanda untuk memisahkan kategori
  },
  // Tambahkan proyek baru Anda di sini
];
// --------------------



module.exports = { education, skills, projects };