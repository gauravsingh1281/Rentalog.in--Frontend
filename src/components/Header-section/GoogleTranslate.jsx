import { useEffect, useState } from 'react';

const GoogleTranslate = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    const loadGoogleTranslateScript = () => {
      if (!document.querySelector("script#google-translate")) {
        const script = document.createElement("script");
        script.id = "google-translate";
        script.src = "//translate.google.com/translate_a/element.js?cb=initializeGoogleTranslate";
        document.head.appendChild(script);
      }
    };

    const initializeGoogleTranslate = () => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,hi,ja,zh-CN",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      } else {
        setTimeout(initializeGoogleTranslate, 500);
      }
    };

    loadGoogleTranslateScript();
    setTimeout(initializeGoogleTranslate, 1000);

    return () => {
      const script = document.getElementById("google-translate");
      if (script) {
        script.remove();
      }
    };
  }, []);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);

    const languageCodes = {
      English: "en",
      Spanish: "es",
      French: "fr",
      German: "de",
      Hindi: "hi",
      Japanese: "ja",
      Chinese: "zh-CN",
    };

    const code = languageCodes[lang];
    if (code) {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = code;
        select.dispatchEvent(new Event("change"));
      }
    }

    // Immediately update the button's displayed language
    document.querySelector(".custom-language-dropdown").innerHTML = lang;

    // Hide the dropdown and button immediately after selecting a language
    setIsButtonVisible(false);
  };

  return (
    <>
      {isButtonVisible && (
        <div
          className="custom-language-dropdown"
          style={{
            position: "fixed",
            top: "10px",
            right: "350px",
            zIndex: "10000",
            backgroundColor: "rgb(144, 238, 144)",
            padding: "10px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        >
          {selectedLanguage}
          {isDropdownVisible && (
            <div
              className="language-list"
              style={{
                position: "absolute",
                top: "100%",
                right: "0",
                backgroundColor: "rgb(144, 238, 144)",
                border: "1px solid #ddd",
                borderRadius: "4px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                zIndex: "10001",
                maxHeight: "150px",
                overflowY: "auto",
              }}
            >
              {["English", "Spanish", "French", "German", "Hindi", "Japanese", "Chinese"].map(
                (lang) => (
                  <div
                    key={lang}
                    style={{ padding: "8px", cursor: "pointer" }}
                    onClick={() => handleLanguageSelect(lang)}
                  >
                    {lang}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}
      <div id="google_translate_element" style={{ display: "none" }}/>
    </>
  );
};

export default GoogleTranslate;
