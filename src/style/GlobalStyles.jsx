import { createGlobalStyle } from 'styled-components';

// import '../public/fonts/398e3e8c-3bf0-4af1-9791-f426a7992711.woff2';
// import '../public/fonts/4ba8e512-e6fb-494f-afd3-a7b68b2e5efb.woff';
// import '../public/fonts/90744ee6-df8b-4daf-924d-e84a33fa139c.eot';
// import '../public/fonts/d988fb64-309d-4c7f-9ded-4e9663aa6061.ttf';

import DINExtlightEOT from '../public/fonts/c36d4fee-ad19-437a-ba7f-85eacfad975b.eot';
import DINExtlightTTF from '../public/fonts/71b25abe-e633-4b0b-b0cf-0875d2ea4c90.ttf';
import DINExtlightWoff from '../public/fonts/8804ad73-51dd-4dd7-a618-eb80cd20a726.woff';
import DINExtlightWoff2 from '../public/fonts/1ab7e009-f493-44fc-8a99-afebf8e24b20.woff2';
import DINLightEOT from '../public/fonts/25df6f92-ec41-4f60-91af-bddc19a3adc2.eot';
import DINLightTTF from '../public/fonts/9be9615e-18d6-4bf7-bb05-068341c85df3.ttf';
import DINLightWoff from '../public/fonts/83ff78fa-6d76-4fb5-8bff-8af8eec8e368.woff';
import DINLightWoff2 from '../public/fonts/e39ef3e7-91b2-45d0-8c2f-cfdcd0c0ab94.woff2';
import DINRefularWoff2 from '../public/fonts/6ceed230-b2b3-4422-b048-4aa11687430a.woff2';
import DINRegularEOT from '../public/fonts/9b63158c-0e74-4751-966c-d749c5d31cce.eot';
import DINRegularTtf from '../public/fonts/247437df-66d2-4605-ac03-1be0e07c31a7.ttf';
import DINRegularWoff from '../public/fonts/80b0143f-6f0d-4dce-aafd-f3c81b85d177.woff';

const GlobalStyle = createGlobalStyle`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');

  @font-face{
    font-family:"DIN Extlight";
    src:url("${DINExtlightEOT}?#iefix");
    src:
      url("${DINExtlightEOT}?#iefix") format("eot"),
      url("${DINExtlightWoff2}") format("woff2"),
      url("${DINExtlightWoff}") format("woff"),
      url("${DINExtlightTTF}") format("truetype");
  }

  @font-face{
    font-family:"DIN Light";
    src:url("${DINLightEOT}?#iefix");
    src:
      url("${DINLightEOT}?#iefix") format("eot"),
      url("${DINLightWoff2}") format("woff2"),
      url("${DINLightWoff}") format("woff"),
      url("${DINLightTTF}") format("truetype");
  }

  @font-face{
    font-family:"DIN Regular";
    src:url("${DINRegularEOT}?#iefix");
    src:
      url("${DINRegularEOT}?#iefix") format("eot"),
      url("${DINRefularWoff2}") format("woff2"),
      url("${DINRegularWoff}") format("woff"),
      url("${DINRegularTtf}") format("truetype");
  }
/*   
  @font-face{
    font-family:"DIN Medium";
    src:url("./90744ee6-df8b-4daf-924d-e84a33fa139c.eot?#iefix");
    src:
      url("./90744ee6-df8b-4daf-924d-e84a33fa139c.eot?#iefix") format("eot")
      url("./398e3e8c-3bf0-4af1-9791-f426a7992711.woff2") format("woff2")
      url("./4ba8e512-e6fb-494f-afd3-a7b68b2e5efb.woff") format("woff")
      url("./d988fb64-309d-4c7f-9ded-4e9663aa6061.ttf") format("truetype");
  } */

  html {
    font-size: 12pt;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: #fcfcfc;
    font-family: 'DIN Light', sans-serif;
  }
`;

export default GlobalStyle;
