import { ChevronUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>
              &copy; {currentYear} Lakshita Jawandhiya. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 bg-accent/10 hover:bg-accent text-accent hover:text-primary rounded-full transition-all duration-300 transform hover:scale-110"
            title="Back to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
