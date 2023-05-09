import React, { useEffect } from "react";
import "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";

function CredlyBadge(props) {
  useEffect(() => {
    // initialize lazysizes library after component is mounted
    window.lazySizes.init();
  }, []);

  let imgSrc =
    "https://images.credly.com/size/" + props.width + "x" + props.height;
  imgSrc += "/images/" + props.imageId + "/" + props.imageName;
  let imgLink =
    "https://www.credly.com/badges/" + props.badgeId + "/public_url";
  return (
    <figure className="is-inline-block image">
      <a href={imgLink} target="_blank" rel="noopener noreferrer">
        <img className="lazyload" data-src={imgSrc} alt={props.badgeName} />
      </a>
    </figure>
  );
}

export default CredlyBadge;
