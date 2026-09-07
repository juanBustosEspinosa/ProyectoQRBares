import { supabase } from "../lib/supabase";

export async function getRestaurants() {
  const { data, error } = await supabase
    .from("restaurants")
    .select("*");

  if (error) {
    console.error("Error:", error);
    return [];
  }

  return data;
}

export async function getRestaurantById(id) {

    const { data, error } = await supabase
        .from("restaurants")
        .select("*")
        .eq("id", id)
        .maybeSingle();

    return data;
}

export async function getDishes(restaurant_id) {
  const { data, error } = await supabase
    .from("dishes")
    .select("*")
    .eq("restaurant_id", restaurant_id)
    .eq("available", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Error:", error);
    return [];
  }

  return data;
}

export async function getCategories(restaurant_id) {
  if (!restaurant_id) return [];

  const { data, error } = await supabase
    .from("dishes")
    .select("category_es, category_en")
    .eq("restaurant_id", restaurant_id)
    .eq("available", true);

  if (error) {
    console.error("Error al obtener categorías:", error);
    return [];
  }

  if (data) {
    // Filtramos para conservar solo la primera aparición de cada categoría
    const categoriasUnicas = data.filter((item, index, self) =>
      index === self.findIndex((t) => (
        t.category_es === item.category_es && t.category_en === item.category_en
      ))
    );

    return categoriasUnicas; // ✅ Retornamos dentro del bloque donde existe la variable
  }

  return [];
}