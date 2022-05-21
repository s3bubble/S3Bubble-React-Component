# S3Bubble DRM Video Player

![S3Bubble Video Player](https://s3b-assets-bucket.s3.amazonaws.com/screenshot_2022_02_16_at_18.43.50.png)

# S3Bubble DRM Audio Waveform Player

![S3Bubble Audio Player](https://s3b-assets-bucket.s3.amazonaws.com/audio-player.png)

[View Docs Here For More Information](https://www.npmjs.com/package/@s3bubble/player)

```
npm install @s3bubble/s3player-react-component
```
## DRM Example
```js
import './App.css';
import S3Player from "@s3bubble/s3player-react-component";

function App() {
    return (<>
        <S3Player setup={
            {
                type: '<video | audio>',
                drm: {
                    authenticationXml: '<authenticationXml>',
                    widevine: {
                        code: '<widevine code>',
                        keysystem: 'com.widevine.alpha',
                        license: 'https://wv-keyos.licensekeyserver.com/'
                    },
                    playready: {
                        code: '<playready code>',
                        keysystem: 'com.microsoft.playready',
                        license: 'https://pr-keyos.licensekeyserver.com/core/rightsmanager.asmx'
                    },
                    fairplay: {
                        code: '<fairplay code>',
                        keysystem: 'com.apple.fps.1_0',
                        license: 'https://fp-keyos.licensekeyserver.com/getkey',
                        certificate: 'https://00000000000.cloudfront.net/fairplay.cer'
                    },
                }
            }
        } />
    </>
    );
}

export default App;
```

## Video Tutorial
[open demo](https://www.youtube.com/watch?v=9F_SbFPCz_0)