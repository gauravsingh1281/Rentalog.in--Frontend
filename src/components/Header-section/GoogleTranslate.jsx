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

    if (window.google && window.google.translate) {
      window.googleTranslateInit();
    }

    return () => {
      // Cleanup logic if necessary
    };
  }, []);

  return (
    <div
      id="google_element"
      className="google-translate-container navbar3 hidden md:flex flex-row justify-center items-center gap-2 font-bold rounded-lg text-md px-4 py-2 text-center mr-3 md:mr-0 transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
      title="Select language to translate"
    >
      <style jsx>{`
        .goog-te-combo {
          background-color: #eef2f7; /* Light pastel */
          border: 2px solid #2c3e50; /* Neutral dark */
          border-radius: 0.75rem; /* Rounded corners */
          padding: 0.5rem 1.5rem; /* Padding for comfort */
          font-size: 1rem; /* Readable font */
          transition: all 0.4s ease; /* Smooth transition for hover */
          color: #2c3e50; /* Neutral text */
          font-weight: 600;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
          cursor: pointer;
        }

        .goog-te-combo:hover {
          background-color: #d1fae5; /* Pastel green */
          border-color: #38bdf8; /* Light blue border */
          color: #0f766e; /* Darker text on hover */
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Enhanced shadow */
        }

        .goog-logo-link {
          display: none !important; /* Hide Google branding */
        }

        .goog-te-gadget {
          color: transparent !important;
        }

        .goog-te-gadget > span > a {
          display: none !important; /* Hide unwanted branding */
        }

        #google_translate_element .goog-te-gadget-simple .goog-te-menu-value span:first-child {
          display: none;
        }

        #google_translate_element .goog-te-gadget-simple .goog-te-menu-value:before {
          content: 'Translate'; /* Show text before the dropdown */
          color: #38bdf8; /* Accent color */
          font-weight: bold;
        }

        .goog-te-banner-frame {
          display: none !important; /* Hide the banner */
        }

        .goog-te-menu-frame {
          max-height: 400px !important;
          overflow-y: auto !important;
          background-color: #ffffff; /* Clean white dropdown */
          border: 1px solid #38bdf8; /* Light blue border */
          border-radius: 0.5rem; /* Rounded dropdown */
        }

        .skiptranslate > iframe {
          height: 0 !important;
          border-style: none;
          box-shadow: none;
        }

        body {
          position: relative !important;
          top: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default GoogleTranslate;
