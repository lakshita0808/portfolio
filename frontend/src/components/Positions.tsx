import { motion } from 'framer-motion';
import { Briefcase, Calendar, Users } from 'lucide-react';

interface Position {
  title: string;
  organization: string;
  duration: string;
  description: string;
  responsibilities: string[];
  image?: string;
}

const positions: Position[] = [
  {
    title: 'Community Head - ACM NIT Surat Student Chapter',
    organization: 'NIT Surat',
    duration: '2023 - 2025',
    description: 'Leading and growing the computing community through strategic initiatives, technical events, and member engagement.',
    responsibilities: [
      'Led planning and execution of 10+ technical workshops, coding contests, and hackathons.',
      'Coordinated with faculty, industry mentors, and student volunteers for smooth event delivery.',
      'Drove community growth through outreach, recruitment, and engagement initiatives',
      'Managed event logistics, communications, and flagship chapter collaborations with over 50+ institutes.'
    ],
    image: '/position.jpeg'
  }
];

export default function Positions() {
  return (
    <section id="positions" className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-4">Positions of Responsibilities</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            
          </p>
        </motion.div>

        <div className="space-y-8">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Image/Icon Side */}
                <div className="md:col-span-1 bg-gradient-to-br from-accent/20 to-accent-dark/20 flex items-center justify-center p-8 min-h-64 md:min-h-auto">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-8xl"
                  >
                    {position.image ? (
                      <img src={position.image} alt={position.title} className="w-40 h-40 object-cover rounded-lg" />
                    ) : (
                      <Briefcase size={64} className="text-accent" />
                    )}
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="md:col-span-2 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{position.title}</h3>
                      <p className="text-accent-light font-semibold">{position.organization}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        <Calendar size={16} />
                        {position.duration}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">
                    {position.description}
                  </p>

                  {/* Responsibilities */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-accent font-semibold">
                      <Users size={18} />
                      <span>Key Responsibilities</span>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {position.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Admin Note */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 p-6 glass rounded-xl border-2 border-accent/30"
        >
          <p className="text-sm text-gray-400 mb-3">
            <Briefcase size={16} className="inline mr-2" />
            <strong>Admin Note:</strong> To customize positions, edit the <code className="text-accent">positions</code> array in <code className="text-accent">Positions.tsx</code>
          </p>
          <p className="text-xs text-gray-500">
            Each position supports: image emoji, title, organization, duration, location, description, and responsibilities array
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}
