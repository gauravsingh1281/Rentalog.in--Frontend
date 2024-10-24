import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update progress bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.pageYOffset;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Glowing Progress Bar */}
      <div
        className="h-2 rounded-full neon-glow"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      
      <style>{`
        /* ProgressBar.css */
        .neon-glow {
            background: linear-gradient(90deg, #2ec4b6, #f72585); /* Teal to neon pink gradient */
            box-shadow: 
                0 0 15px #2ec4b6, /* Teal glow */
                0 0 25px #f72585, /* Neon pink glow */
                0 0 35px rgba(255, 0, 255, 0.8); /* Strong magenta glow */
            animation: neonGlow 1.5s ease-in-out infinite alternate;
        }
        
        @keyframes neonGlow {
            0% {
                box-shadow: 
                    0 0 5px #2ec4b6, /* Teal shadow */
                    0 0 10px #f72585, /* Neon pink shadow */
                    0 0 15px rgba(255, 0, 255, 0.5); /* Fainter magenta glow */
            }
            100% {
                box-shadow: 
                    0 0 15px #2ec4b6, /* Teal shadow */
                    0 0 25px #f72585, /* Neon pink shadow */
                    0 0 35px rgba(255, 0, 255, 0.8); /* Stronger magenta glow */
            }
        }
        
        
      `}</style>
    </div>
  );
};

export default ProgressBar;
