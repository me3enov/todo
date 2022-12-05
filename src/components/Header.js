function Header({ color, title }) {
  return (
    <>
      <h2 className={`rubric__title ${color}`}>
        {title}
      </h2>
      <div className="rubric__line"></div>
    </>
  );
}

export default Header;