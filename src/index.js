import React from 'react';
const S3Player = (props) => {
    // You can edit this component to suit your needs
    const link = document.createElement("link");
    link.href = "https://unpkg.com/@s3bubble/player@latest/dist/css/s3bubble.min.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.body.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/@s3bubble/player@latest/dist/js/s3bubble.min.js";
    script.async = true;
    document.body.appendChild(script);

    const attributes = {
        className: 's3bmedia',
    }
    for (const [key, value] of Object.entries(props.setup)) {
        attributes[`data-${key}`] = value;
    }

    return (<div {...attributes}></div>);
}
export default S3Player;