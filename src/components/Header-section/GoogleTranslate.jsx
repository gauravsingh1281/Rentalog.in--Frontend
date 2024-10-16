import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    window.googleTranslateInit = () => {
      if (!window.google?.translate?.TranslateElement) {
        setTimeout(window.googleTranslateInit, 100);
      } else {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,hi,pa,sa,mr,ur,bn,es,ja,ko,zh-CN,es,nl,fr,de,it,ta,te',
          layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          defaultLanguage: 'en',
          autoDisplay: false,
        }, 'google_element');
      }
      cleanUpGadgetText();
    };

    const loadGoogleTranslateScript = () => {
      if (!document.getElementById("google_translate_script")) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
        script.id = "google_translate_script";
        script.onerror = () => console.error('Error loading Google Translate script');
        document.body.appendChild(script);
      }
    };

    const cleanUpGadgetText = () => {
      const gadgetElement = document.querySelector('.goog-te-gadget');
      if (gadgetElement) {
        const textNodes = gadgetElement.childNodes;
        textNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = ''; // Clear text content
          }
        });
      }
    };
    
    loadGoogleTranslateScript();

    return () => {
      const scriptElement = document.getElementById("google_translate_script");
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []);

  return (
    <div id="google_element" className="google-translate-container navbar3 hidden md:flex flex-row justify-center items-center gap-3 font-bold rounded-xl text-md text-white px-4 py-2 text-center transition-transform duration-300 hover:scale-[1.1] hover:text-green shadow-lg">
      <style jsx>{`
        .google-translate-container {
          background: linear-gradient(90deg, #00c6ff, #0072ff); /* Cool gradient */
          border-radius: 1rem; /* More rounded corners */
          padding: 1rem; /* Consistent padding */
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
          transition: all 0.3s ease-in-out; /* Smooth transitions */
        }

        .google-translate-container:hover {
          background: linear-gradient(90deg, #0092cc, #005bb5); /* Darker gradient on hover */
          box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
        }

        .goog-te-combo {
          background-color: #ffffff; /* White background for contrast */
          border: 2px solid #0072ff; /* Blue border */
          border-radius: 0.75rem; /* Rounded corners */
          padding: 0.5rem 1.5rem; /* Comfortable padding */
          font-size: 1rem; /* Slightly larger font */
          color: #0072ff; /* Blue text */
          font-weight: 600; /* Slightly bolder text */
          transition: all 0.3s ease; /* Smooth transition */
          outline: none;
          box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1); /* Slight shadow for focus */
        }

        .goog-te-combo:hover {
          background-color: #e0f2ff; /* Lighter blue on hover */
          border-color: #0092cc; /* Darker blue on hover */
          color: #005bb5; /* Darker blue text on hover */
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
        }

        .goog-logo-link {
          display: none !important; /* Hide Google logo */
        }

        .goog-te-gadget {
          color: transparent !important;
        }

        .goog-te-gadget > span > a {
          display: none !important;
        }

        .goog-te-gadget .goog-te-combo {
          color: #0072ff !important;
        }

        .goog-te-gadget .goog-te-combo:hover {
          color: #005bb5 !important;
        }

        .goog-te-banner-frame {
          display: none !important; /* Hide the banner frame */
        }

        .skiptranslate > iframe {
          height: 0 !important;
          border-style: none;
          box-shadow: none;
        }

        .google-translate-container::before {
          content: '🌍'; /* Add translate icon */
          font-size: 1.5rem; /* Larger icon */
          margin-right: 0.5rem; /* Spacing between icon and text */
        }
      `}</style>
    </div>
  );
};

export default GoogleTranslate;
