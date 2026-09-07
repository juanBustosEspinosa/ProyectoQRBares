function RestaurantInfo({ name, description, address }) {
  return (
    <section className="restaurant-info">
      {description && (
        <p>{description}</p>
      )}

      {address && (
        <p>{address}</p>
      )}
    </section>
  );
}

export default RestaurantInfo;