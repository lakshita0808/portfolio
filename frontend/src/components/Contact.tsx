import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lakshitajawandhiya@gmail.com',
      link: 'mailto:lakshitajawandhiya@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8767584301',
      link: 'tel:+918767584301'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: 'https://github.com/lakshita0808' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/lakshita-jawandhiya-944ab526b/' },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-4 text-center">Get In Touch</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 mb-12">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <Icon className="mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" size={36} />
                <h3 className="text-lg font-bold mb-2">{item.label}</h3>
                <p className="text-gray-300 hover:text-accent transition-colors text-lg break-all">{item.value}</p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Don't hesitate to reach out!
          </p>

          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-accent/10 hover:bg-accent hover:text-primary text-accent rounded-full transition-all duration-300 transform hover:scale-110"
                  title={social.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          <a href="mailto:lakshitajawandhiya@gmail.com" className="btn-primary">
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
