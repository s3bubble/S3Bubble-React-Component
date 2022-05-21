import React, { Component } from 'react';
import Helmet from "react-helmet";
export default class S3Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
        this.handleScriptInject = this.handleScriptInject.bind(this);
    }

    componentDidMount() {
        this.setState({
            id: "id" + Math.random().toString(16).slice(2)
        });
        const existingScript = document.getElementById('s3playerCss');
        if (!existingScript) {
            const link = document.createElement("link");
            link.href = "https://unpkg.com/@s3bubble/player@latest/dist/css/s3bubble.min.css";
            link.type = "text/css";
            link.rel = "stylesheet";
            link.id = "s3playerCss";
            link.media = "screen,print";
            document.head.appendChild(link);
        }

    }

    handleScriptInject({ scriptTags }) {
        if (scriptTags) {
            const scriptTag = scriptTags[0];
            scriptTag.onload = () => {
                this.setState({
                    myExternalLib: window.myExternalLib
                });
                if (this.props.setup.drm) {
                    // eslint-disable-next-line no-undef
                    s3bubble(`s3media-${this.state.id}`).drm(this.props.setup);
                } else {
                    // eslint-disable-next-line no-undef
                    s3bubble(`s3media-${this.state.id}`).media(this.props.setup);
                }
            };
        }
    }

    render() {
        return (<div>
            <Helmet
                script={[{ src: "https://unpkg.com/@s3bubble/player@latest/dist/js/s3bubble.min.js" }]}
                onChangeClientState={(newState, addedTags) => this.handleScriptInject(addedTags)}
            />
            <div>
                {this.state.myExternalLib !== null
                    ? <div id={`s3media-${this.state.id}`} className='s3media'></div>
                    : "loading..."}
            </div>
        </div>);
    }
}