import React, { useState } from "react";
import MenuItem from "./MenuItem";

// Componente individual para cada sección de categoría
function CategoryAccordion({ category, dishes, isEnglish, defaultOpen = true }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="category-accordion">
      {/* Cabecera desplegable con título y flecha */}
      <button 
        className="category-header-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h2 className="category-title">{category}</h2>
        <span className={`accordion-arrow ${isOpen ? "open" : ""}`}>
          ▼
        </span>
      </button>

      {/* Lista de platos que se muestra u oculta */}
      {isOpen && (
        <ul className="menu-list">
          {dishes.map((item) => (
            <MenuItem
              key={item.id}
              name={!isEnglish ? item.name_es : item.name_en}
              description={!isEnglish ? item.description_es : item.description_en}
              price={item.price}
              image={item.image_url || item.image}
              alergenos={item.allergens}
              isSpicy={item.spicy}
              isVegetarian={item.vegetarian}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

function MenuList({ dishes, isEnglish }) {
  if (!dishes || dishes.length === 0) return null;

  // Agrupamos los platos por categoría
  const dishesByCategory = dishes.reduce((acc, dish) => {
    const categoryName = !isEnglish
      ? dish.category_es || dish.category || "Otros"
      : dish.category_en || dish.category || "Others";

    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(dish);
    return acc;
  }, {});

  return (
    <div className="menu-container">
      {Object.entries(dishesByCategory).map(([category, categoryDishes]) => (
        <CategoryAccordion
          key={category}
          category={category}
          dishes={categoryDishes}
          isEnglish={isEnglish}
        />
      ))}
    </div>
  );
}

export default MenuList;