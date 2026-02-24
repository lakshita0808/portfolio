import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Interview Buddy',
    description: 'RAG-Powered SDE Interview Assistant',
    tech: ['Streamlit', 'Selenium', 'LangChain', 'Gemini API', 'FAISS', 'JSON'],
    github: 'https://github.com/Jigar634859/Interview_scraper_gfg'
  },
   {
    title: 'AI Portfolio Website',
    description: 'An intelligent portfolio with AI chat functionality to answer questions about me.',
    tech: ['React', 'TypeScript', 'Python', 'OpenRouter API'],
    github: '#'
  },
  {
  title: 'Adobe Gensolve Hackathon',
  description: 'A shape recognition model that identifies and classifies geometric shapes in images.',
  tech: ['Python', 'Machine Learning', 'Generative AI', 'Data Processing'],
  github: 'https://github.com/lakshita0808/AdobeGensolve_Hackathon'
},
  {
  title: 'Myntra Hackathon Project',
  description: 'Fashion Recommendation & Personalization Platform based on Skin Tone and Swipe Features.',
  tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'AI/ML Integration'],
  github: 'https://github.com/Lavanya5904/MYNTRA'
},
  {
  title: 'Factory Events Backend',
  description: 'RESTful Backend for Real-Time Factory Event Management System',
  tech: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Authentication'],
  github: 'https://github.com/lakshita0808/factory-events-backend'
}
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-12">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              </div> */}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
