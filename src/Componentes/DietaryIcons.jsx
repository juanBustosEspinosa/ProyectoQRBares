import React from "react";

// Icono de Picante (Chili)
export function SpicyIcon({ className = "diet-icon" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dc2626" /* Rojo gastronómico */
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a2 2 0 0 0-2 2c0 2 2 3 2 5 0 2-2 4-2 7 0 3.31 2.69 6 6 6s6-2.69 6-6c0-4-3-6-4-8" />
      <path d="M10 4c-4 0-7 3-7 7 0 4.5 3.5 8 8 8" />
    </svg>
  );
}

// Icono de Vegetariano (Hoja)
export function VegIcon({ className = "diet-icon" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#16a34a" /* Verde hoja */
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 6-4.5 11-10 11z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}