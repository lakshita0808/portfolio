import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  field: string;
  duration: string;
  location: string;
  cgpa?: string;
}

const education: EducationItem[] = [
  {
    degree: 'Bachelor of Technology',
    institution: 'National Institute of Technology, Surat',
    field: 'Computer Science and Engineering',
    duration: '2022 - 2026',
    location: 'Surat, Gujarat, India',
    cgpa: '8.82/10.00'
}
  
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-4">Education</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-accent"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Icon & GPA */}
                <div className="flex flex-col items-center justify-center md:border-r md:border-white/10 md:pr-6">
                  <GraduationCap size={48} className="text-accent mb-4" />
                  {edu.cgpa && (
                    <div className="text-center">
                      <p className="text-sm text-gray-400 mb-1">CGPA</p>
                      <p className="text-2xl font-bold text-accent">{edu.cgpa}</p>
                    </div>
                  )}
                </div>

                {/* Main Content */}
                <div className="md:col-span-3">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-accent-light font-semibold text-lg mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-300 mb-4">{edu.field}</p>

                    {/* Duration & Location */}
                    <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  {/* Highlights section removed - not in data structure */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Course Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-accent">Relevant Coursework</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Data Structures & Algorithms',
              'Database Management Systems',
              'Web Development',
              'Artificial Intelligence',
              'Operating Systems',
              'Computer Networks',
              'Machine Learning',
              'Cloud Computing',
              'System Software',
              'Information Security',
              'Data Science',
              'Big Data Analytics',
              'Cryptography',
              'Blockchain Technology',
              'Distributed Systems',
              'Social Network Analysis'
            ].map((course, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-3 bg-accent/10 border border-accent/30 rounded-lg text-center text-sm font-semibold text-accent hover:bg-accent/20 transition-colors"
              >
                {course}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 p-6 glass rounded-xl border-2 border-accent/30"
        >
          <p className="text-sm text-gray-400 mb-3">
            <GraduationCap size={16} className="inline mr-2" />
            <strong>Admin Note:</strong> To customize education, edit the <code className="text-accent">education</code> array in <code className="text-accent">Education.tsx</code>
          </p>
          <p className="text-xs text-gray-500 mb-2">
            Each education item supports: degree, institution, field, duration, location, GPA, highlights, and custom emoji icon
          </p>
          <p className="text-xs text-gray-500">
            Also update relevant coursework in the grid below the education items
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}
