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
    <div id="google_element" className="google-translate-container navbar3 hidden md:flex flex-row justify-center items-center gap-2 font-bold rounded-xl text-md text-[#262626] px-4 py-2 text-center mr-3 md:mr-0  transition-transform duration-300 hover:scale-[1.1] hover:text-green">
      <style jsx>{`
        .goog-te-combo {
          background-color: white; /* White background for better contrast */
          border: 2px solid black; /* Teal border */
          border-radius: 0.5rem; /* Slightly more rounded */
          padding: 0.5rem 1rem; /* Tailwind: p-2 */
          font-size: 0.875rem; /* Tailwind: text-sm */
          transition: all 0.3s ease; /* Smooth transition */
          outline: none;
          color: black; /* Teal text */
          font-weight: 500; /* Tailwind: font-medium */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Slight shadow */
        }

        .goog-te-combo:hover {
          background-color: #e0f2ff; /* Lighter blue on hover */
          border-color: #20bc9c; /* Teal border on hover */
          color: #20bc9c; /* Teal text on hover */
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.25); /* Stronger shadow on hover */
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
          color: black !important; /* Teal text */
        }
          .goog-te-gadget .goog-te-combo:hover {
          color: #20bc9c !important; /* Teal text */
        }

        #google_translate_element .goog-te-gadget-simple .goog-te-menu-value span:first-child {
          display: none;
        }

        #google_translate_element .goog-te-gadget-simple .goog-te-menu-value:before {
          content: 'Translate'; /* Change the default text */
          color: #20bc9c; /* Teal text */
        }

        .goog-te-banner-frame {
          display: none !important; /* Hide the banner frame */
        }

        .goog-te-menu-frame {
          max-height: 400px !important;
          overflow-y: auto !important;
          background-color: white; /* White background for dropdown */
          border: 1px solid #20bc9c; /* Teal border */
          border-radius: 0.5rem; /* Slightly more rounded */
        }

        /* Hide the banner frame */
        .goog-te-banner-frame {
          display: none !important;
        }

        /* Customize the iframe */
        .skiptranslate > iframe {
          height: 0 !important;
          border-style: none;
          box-shadow: none;
        }
        body{
          position: relative !important;
          top : 0 !important;
          }
      `}
      </style>
    </div>
  );
};

export default GoogleTranslate;
