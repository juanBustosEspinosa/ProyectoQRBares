function CategoryList({
  categories = [],
  isEnglish,
  selectedCategory,
  onSelect,
}) {
  return (
    <nav className="category-list">
      {categories.map((category) => {
        // Usamos la cadena de texto de la categoría como identificador
        const categoryId = category.category_es;

        return (
          <button
            key={categoryId}
            onClick={() =>
              onSelect(
                selectedCategory === categoryId
                  ? null
                  : categoryId
              )
            }
            className={
              selectedCategory === categoryId
                ? "active"
                : ""
            }
          >
            {isEnglish == false ? category?.category_es : category?.category_en }
          </button>
        );
      })}
    </nav>
  );
}

export default CategoryList;