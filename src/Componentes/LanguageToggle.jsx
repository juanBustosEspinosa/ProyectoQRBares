export default function LanguageToggle({ isEnglish, setIsEnglish }) {
  return (
    <button
      onClick={() => setIsEnglish((prev) => !prev)}
      className="lang-toggle-btn"
      aria-label="Cambiar idioma"
      title={isEnglish ? "Cambiar a Español" : "Switch to English"}
    >
    <img
        src={
          isEnglish
            ? "https://flagcdn.com/w40/es.png" // Muestra España cuando está en inglés
            : "https://flagcdn.com/w40/gb.png" // Muestra Reino Unido cuando está en español
        }
        alt={isEnglish ? "Bandera de España" : "UK Flag"}
        className="flag-img"
      />
      <span className="lang-label">
        {isEnglish ? "ES" : "EN"}
      </span>
    </button>
  );
}