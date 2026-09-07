function Footer({ restaurantName }) {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {restaurantName}</p>
    </footer>
  );
}

export default Footer;