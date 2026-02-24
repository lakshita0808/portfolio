import { ArrowDown, Github, Linkedin, Download, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place resume.pdf in public folder
    link.download = 'Lakshita_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-dark/10 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Lakshita Jawandhiya</span>
          </h1>
          
          <p className="text-2xl text-accent-light font-semibold mb-4">
            Computer Science and Engineering Student
          </p>

          <p className="text-xl md:text-lg text-gray-300 mb-8 leading-relaxed">
            Hello, Welcome to my portfolio! 
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-4 mb-8 flex-wrap"
          >
            <a href="#chat" className="btn-primary">
              Chat with AI Assistant
            </a>
            <button 
              onClick={handleDownloadResume}
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </button>
          </motion.div>



          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-start"
          >
            <ArrowDown size={32} className="text-accent animate-bounce" />
          </motion.div>
        </motion.div>

        {/* Right - Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-72 h-72 mx-auto">
            {/* Animated Background Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark rounded-full opacity-50 blur-2xl"
            />
            
            {/* Profile Picture Container */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-accent/50 backdrop-blur-sm glass">
              <img 
                src="/profile.jpeg" 
                alt="Lakshita" 
                className="w-full h-full object-cover"
              />
             
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 border-2 border-dashed border-accent/30 rounded-full"
            />
          </div>

          {/* Social Links Below Picture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-4 gap-4 text-center"
          >
            <a href="https://github.com/lakshita0808" target="_blank" rel="noopener noreferrer" 
               className="p-3 glass rounded-lg hover:bg-accent/20 transition-colors"
               title="GitHub">
              <Github size={24} className="mx-auto text-accent" />
              <p className="text-xs mt-1 text-gray-300">GitHub</p>
            </a>
            <a href="https://www.linkedin.com/in/lakshita-jawandhiya-944ab526b/" target="_blank" rel="noopener noreferrer"
               className="p-3 glass rounded-lg hover:bg-accent/20 transition-colors"
               title="LinkedIn">
              <Linkedin size={24} className="mx-auto text-accent" />
              <p className="text-xs mt-1 text-gray-300">LinkedIn</p>
            </a>
            <a href="https://leetcode.com/lakshita_0808/" target="_blank" rel="noopener noreferrer"
               className="p-3 glass rounded-lg hover:bg-accent/20 transition-colors"
               title="LeetCode">
              <Code size={24} className="mx-auto text-accent" />
              <p className="text-xs mt-1 text-gray-300">LeetCode</p>
            </a>
            <a href="https://codeforces.com/profile/lakshita_0808" target="_blank" rel="noopener noreferrer"
               className="p-3 glass rounded-lg hover:bg-accent/20 transition-colors"
               title="CodeForces">
              <Code size={24} className="mx-auto text-accent" />
              <p className="text-xs mt-1 text-gray-300">CodeForces</p>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
