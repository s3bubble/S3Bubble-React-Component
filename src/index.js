import React, { useEffect } from 'react';
const S3Player = (props) => {

    const uniqueId = Date.now();

    useEffect(() => {

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

        if (props.setup.drm) {
            // eslint-disable-next-line no-undef
            s3bubble(`s3media-${uniqueId}`).drm(props.setup);
        } else {
            // eslint-disable-next-line no-undef
            s3bubble(`s3media-${uniqueId}`).media(props.setup);
        }

    }, [props.setup, uniqueId]);

    return (<div id={`s3media-${uniqueId}`} className='s3media'></div>);
}
export default S3Player;