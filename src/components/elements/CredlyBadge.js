import React from "react";

function CredlyBadge(props) {
  let imgSrc =
    "https://images.credly.com/size/" + props.width + "x" + props.height;
  imgSrc += "/images/" + props.imageId + "/" + props.imageName;
  let imgLink =
    "https://www.credly.com/badges/" + props.badgeId + "/public_url";
  return (
    <figure className="is-inline-block image">
      <a href={imgLink} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={props.badgeName} />
      </a>
    </figure>
  );
}

export default CredlyBadge;
