function Header({ restaurantName, logo }) {
  return (
    <header>
      {logo && <img src={logo} alt={`${restaurantName} logo`} />}
      <h1>{restaurantName}</h1>
    </header>
  );
}

export default Header;