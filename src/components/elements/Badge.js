function Badge(props) {
  const faIcon = "fas fa-1x " + props.faIcon;
  return (
    <div className="control">
      <div className="tags has-addons">
        <span className="tag is-dark">{props.text}</span>
        <span className="tag is-link">
          <i className={faIcon}></i>
        </span>
      </div>
    </div>
  );
}

export default Badge;
