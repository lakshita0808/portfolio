import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "AMTS Intern",
    company: "Salesforce",
    period: "May 2025 - July 2025",
    achievements: [
      "Automated background operational processes in Salesforce Stage Management by integrating Agent Step Type using Agent API, Agentforce, and Apex, significantly reducing manual effort and turnaround time",
      "Implemented structured agent workflows: token generation → session initialization → utterance messaging → Screen Flow–driven agent response → conditional follow-up actions, ensuring efficient task orchestration",
      "Developed secure and scalable Agentforce integrations with REST APIs improving process accuracy and operational efficiency"
    ]
  },
];


export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-4 text-center">Work Experience</h2>
              <p className="text-center text-gray-300 mb-12">
              </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Briefcase className="text-accent" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-gray-400">
                    <span>{exp.company}</span>
                    <div className="flex items-center gap-2 text-accent-light">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 pl-4">
                {exp.achievements && exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
