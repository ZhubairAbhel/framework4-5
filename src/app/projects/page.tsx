const projects = [
  {
    title: 'Portofolio',
    description: 'Website portofolio pribadi dengan Next.js dan Tailwind.',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://github.com/username/portofolio',
  },
  {
    title: 'Todo App',
    description: 'Aplikasi Todo sederhana dengan React dan Zustand.',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://github.com/username/todo-app',
  },
  {
    title: 'Weather App',
    description: 'Menampilkan cuaca dari OpenWeather API dengan Next.js.',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://github.com/username/weather-app',
  },
];

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Proyek Saya</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-gray-200 hover:shadow-lg transition p-4"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
