function MenuItem(props) {
  return (
    <a href={props.href} className="navbar-item is-unselectable is-hovered">
      {props.text}
    </a>
  );
}

export default MenuItem;
