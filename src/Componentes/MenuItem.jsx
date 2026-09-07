import React from "react";

// Importación de las imágenes de alérgenos
import altramuzImg from "../alergenos/alergeno_altramuz.png";
import apioImg from "../alergenos/alergeno_apio.png";
import cacahuetesImg from "../alergenos/alergeno_cacahuetes.png";
import cerealesImg from "../alergenos/alergeno_cereales.png";
import crustaceoImg from "../alergenos/alergeno_crustaceo.png";
import frutosSecosImg from "../alergenos/alergeno_frutos_secos.png";
import huevosImg from "../alergenos/alergeno_huevos.png";
import lacteosImg from "../alergenos/alergeno_lacteos.png";
import moluscosImg from "../alergenos/alergeno_moluscos.png";
import mostazaImg from "../alergenos/alergeno_mostaza.png";
import sesamoImg from "../alergenos/alergeno_sesamo.png";
import sojaImg from "../alergenos/alergeno_soja.png";
import sulfitosImg from "../alergenos/alergeno_sulfitos.png";
import pescadoImg from "../alergenos/pescado_alergenos.png";
import { SpicyIcon, VegIcon } from "./DietaryIcons";
// Diccionario asignando las imágenes importadas
const ALERGENOS_MAP = {
  altramuces: { id: "altramuces", nombre: "Altramuces", img: altramuzImg },
  apio: { id: "apio", nombre: "Apio", img: apioImg },
  cacahuetes: { id: "cacahuetes", nombre: "Cacahuetes", img: cacahuetesImg },
  gluten: { id: "gluten", nombre: "Cereales con gluten", img: cerealesImg },
  crustaceos: { id: "crustaceos", nombre: "Crustáceos", img: crustaceoImg },
  frutos_secos: { id: "frutos_secos", nombre: "Frutos de cáscara", img: frutosSecosImg },
  huevos: { id: "huevos", nombre: "Huevos", img: huevosImg },
  lacteos: { id: "lacteos", nombre: "Lácteos", img: lacteosImg },
  moluscos: { id: "moluscos", nombre: "Moluscos", img: moluscosImg },
  mostaza: { id: "mostaza", nombre: "Mostaza", img: mostazaImg },
  sesamo: { id: "sesamo", nombre: "Sésamo", img: sesamoImg },
  soja: { id: "soja", nombre: "Soja", img: sojaImg },
  sulfitos: { id: "sulfitos", nombre: "Sulfitos", img: sulfitosImg },
  pescado: { id: "pescado", nombre: "Pescado", img: pescadoImg }
};

function MenuItem({ name, description, price, image, alergenos, isSpicy, isVegetarian }) {
  const listaAlergenos = alergenos
    ? alergenos.split(",").map((item) => item.trim().toLowerCase())
    : [];

  return (
    <li className="menu-item">
      {image && <img src={image} alt={name} className="menu-item-img" />}

      <div className="menu-item-info">
        <div className="menu-item-header">
          <h3>{name}</h3>

          <div className="dietary-flags">
            {isSpicy && <SpicyIcon/>}
            {isVegetarian && <VegIcon/>}
          </div>
        </div>

        {description && <p>{description}</p>}

        {listaAlergenos.length > 0 && (
          <div className="menu-item-allergens">
            {listaAlergenos.map((clave) => {
              const item = ALERGENOS_MAP[clave];
              if (!item) return null;

              return (
                <img
                  key={item.id}
                  src={item.img}
                  alt={item.nombre}
                  title={item.nombre}
                  className="allergen-thumb"
                />
              );
            })}
          </div>
        )}

        <span>{price ? Number(price).toFixed(2) : "0.00"} €</span>
      </div>
    </li>
  );
}

export default MenuItem;