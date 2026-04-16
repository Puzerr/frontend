function AsideNav({items}) {
  return (
    <nav>
      <ul className="pl-6 h" id="ul-sidebar">
        {items.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
    </nav>
  );
}

export default AsideNav;
