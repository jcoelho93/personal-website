function CredlyBadge(props) {
  return (
    <figure className="is-inline-block image is-128x128">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img src={props.badge} alt={props.badgeName} />
      </a>
    </figure>
  );
}

export default CredlyBadge;
