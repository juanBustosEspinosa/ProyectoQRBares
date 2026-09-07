import Header from "./Header";
import Footer from "./Footer";
import RestaurantInfo from "./RestaurantInfo";
import CategoryList from "./CategoryList";
import MenuList from "./MenuList";
import { useEffect, useState } from 'react';
import { getRestaurantById, getDishes, getCategories } from './FuncionesDatabase';
import LanguageToggle from './LanguageToggle'

function Menu({idRestaurante}) {

    const [restaurant, setRestaurant] = useState(null);
    const [dishes, setdishes] = useState([]);
    const [categories, seCategories] = useState([]);
    const [isEnglish, setIsEnglish] = useState(false);   


    
    useEffect(() => {
        const cargarRestaurante = async () => {
            const resultado = await getRestaurantById(idRestaurante);
            setRestaurant(resultado);
            const resultadoDishes = await getDishes(idRestaurante);
            setdishes(resultadoDishes);
            const resultadoCategories = await getCategories(idRestaurante);
            seCategories(resultadoCategories);
        };

        cargarRestaurante();
    }, []);

    console.log(restaurant)

  // null significa que mostramos todos los productos
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filtereddishes = selectedCategory
      ? dishes.filter((dish) => dish.category_es === selectedCategory)
      : dishes;

  return (
    <>
      <Header restaurantName={isEnglish == false ? restaurant?.name_es : restaurant?.name_en} />
      <LanguageToggle isEnglish={isEnglish} setIsEnglish={setIsEnglish} />      <main>
        <RestaurantInfo
          name={isEnglish == false ? restaurant?.name_es : restaurant?.name_en}
          description={isEnglish == false ? restaurant?.description_es : restaurant?.description_en}
          address={restaurant?.address}
        />

        <CategoryList
          categories={categories}
          isEnglish = {isEnglish}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <MenuList dishes={filtereddishes} isEnglish = {isEnglish}/>
      </main>

      <Footer restaurantName={isEnglish == false ? restaurant?.name_es : restaurant?.name_en} />
    </>
  );
}

export default Menu;
