export default function LanguageToggle({ isEnglish, setIsEnglish }) {
  return (
    <button
      onClick={() => setIsEnglish((prev) => !prev)}
      className="lang-toggle-btn"
      aria-label="Cambiar idioma"
      title={isEnglish ? "Switch to English" : "Cambiar a Español"}
    >
    <img
        src={
          isEnglish
            ? "https://flagcdn.com/w40/gb.png" // Muestra España cuando está en inglés
            : "https://flagcdn.com/w40/es.png"  // Muestra Reino Unido cuando está en español
        }
        alt={isEnglish ?  "UK Flag" : "Bandera de España"}
        className="flag-img"
      />
      <span className="lang-label">
        {isEnglish ? "EN" : "ES" }
      </span>
    </button>
  );
}