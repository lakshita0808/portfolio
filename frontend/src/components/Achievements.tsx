import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  date: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    title: 'GATE Qualified - Computer Science & Information Technology',
    description: 'Qualified in GATE 2025 with AIR 11017',
    date: '2025'
  },
  {
    title: 'AdobeGenSolve Hackathon Powered by GeeksforGeeks',
    description: 'Ranked in the top 5 percentile for developing the CurveTopia project',
    date: '2024',
    link: 'https://www.linkedin.com/posts/lakshita-jawandhiya-944ab526b_adobe-geeksforgeeks-adobegensolve-activity-7229558789929136129-sWMM'
  },
  {
    title: 'Google Cloud Study Jams',
    description: 'Certified in Google Cloud tools and technologies',
    date: '2024',
    link: 'https://www.linkedin.com/posts/lakshita-jawandhiya-944ab526b_googlecloud-cloudcomputing-activity-7288293777180397568-MUmO'
  },
  {
    title: 'Salesforce Futureforce Women in Tech Summit',
    description: 'Selected among top 120 girls nationwide for the summit',
    date: '2024',
    link: 'https://www.linkedin.com/posts/lakshita-jawandhiya-944ab526b_womenintech-salesforce-futureforce-activity-7207661309000167424-Id7A'
  },
  {
    title: 'JEE Mains & Advanced Qualified',
    description: 'Secured AIR 6557 in JEE Mains and AIR 10631 in JEE Advanced',
    date: '2022'
  },
  {
    title: 'MHTCET Qualified',
    description: 'Achieved 99.7 percentile in the Maharashtra CET exam',
    date: '2022'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-4">Achievements & Awards</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
            >
              {/* Icon & Badge */}
              <div className="flex items-start justify-between mb-4">
                <Award size={32} className="text-accent" />
                <div className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full font-semibold">
                  {achievement.date}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2 text-accent group-hover:text-accent-light transition-colors">
                {achievement.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 flex-grow">
                {achievement.description}
              </p>

              {/* Link */}
              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm font-semibold mt-4"
                >
                  <span>Learn More</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 p-6 glass rounded-xl border-2 border-accent/30"
        >
          <p className="text-sm text-gray-400 mb-3">
            <Award size={16} className="inline mr-2" />
            <strong>Admin Note:</strong> To customize achievements, edit the <code className="text-accent">achievements</code> array in <code className="text-accent">Achievements.tsx</code>
          </p>
          <p className="text-xs text-gray-500">
            Each achievement supports: title, description, date, link, and custom emoji icon
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}
