import React from "react";
import CredlyBadge from "../elements/CredlyBadge";
import Resume from "../../resume.json";

function buildBadges(certificates){
    let credlyBadges = []
    let columnSize = 12 / certificates.length;
    let columnClass = "column has-text-centered is-" + columnSize;
    certificates.forEach((cert) => {
        credlyBadges.push(
            <div class={columnClass}>
                <CredlyBadge
                    width="186"
                    height="186"
                    imageId={cert.x_imageId}
                    imageName={cert.x_imageName}
                    badgeId={cert.x_badgeId}
                    badgeName={cert.name + " by " + cert.issuer}
                />
            </div>
        )
    });
    return credlyBadges
}

function Badges(props) {
    return (
        <section class="section" id="badges">
            <div class="container">
                <div class="columns is-centered">
                    {buildBadges(Resume.certificates)}
                </div>
            </div>
        </section>
    )
}

export default Badges;