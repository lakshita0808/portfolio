import { motion } from 'framer-motion';
import { Code, Database, Zap, Layers, Server } from 'lucide-react';

const skills = [
  {
    category: 'Languages',
    icon: Code,
    items: [
      'C/C++',
      'Python',
      'Java',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS'
    ]
  },
  {
    category: 'Frontend',
    icon: Layers,
    items: [
      'React.js',
      'Vite',
      'Tailwind CSS'
    ]
  },
  {
    category: 'Backend',
    icon: Server,
    items: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'EJS',
      'REST APIs'
    ]
  },
  {
    category: 'Databases & Cloud',
    icon: Database,
    items: [
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'Firebase'
    ]
  },
  {
    category: 'Tools & DevOps',
    icon: Zap,
    items: [
      'Git',
      'GitHub',
      'Docker',
      'CI/CD',
      'VS Code'
    ]
  }
];


export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-4 text-center">Technical Skills</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-accent" size={28} />
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
