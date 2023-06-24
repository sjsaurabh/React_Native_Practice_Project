import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"
const HomeSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <Rect width={50} height={50} fill="#F5F5F5" rx={4} />
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M10.375 27.813v13.5h29.25V20.5L25 8.125 10.375 19.938v7.875Z"
      />
      <Path
        fill="#000"
        d="M25 8.125 23.273 9.52 36.25 20.5v20.813h3.375V20.5L25 8.125Z"
        opacity={0.1}
      />
      <Path
        fill="#F78C8C"
        d="M21.625 26.125h6.75a2.25 2.25 0 0 1 2.25 2.25v13.5h-11.25v-13.5a2.25 2.25 0 0 1 2.25-2.25Z"
      />
      <Path
        fill="#000"
        d="M28.375 26.125H25a2.25 2.25 0 0 1 2.25 2.25v13.5h3.375v-13.5a2.25 2.25 0 0 0-2.25-2.25Z"
        opacity={0.1}
      />
      <Path
        fill="#fff"
        d="M23.875 35.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
      />
      <Path
        fill="#333"
        d="m42.594 20.758-5.782-4.815V12.06a1.125 1.125 0 0 0-2.25 0v2.003L27.16 7.899a3.375 3.375 0 0 0-4.32 0L7.404 20.758a1.126 1.126 0 1 0 1.44 1.732L24.28 9.626a1.125 1.125 0 0 1 1.44 0L38.5 20.274v19.35a1.125 1.125 0 0 1-1.125 1.125H31.75V28.374a3.375 3.375 0 0 0-3.374-3.375h-6.75a3.375 3.375 0 0 0-3.375 3.375v12.375h-5.626a1.125 1.125 0 0 1-1.125-1.125v-13.5a1.125 1.125 0 0 0-2.25 0v13.5a3.375 3.375 0 0 0 3.375 3.375h24.75a3.375 3.375 0 0 0 3.375-3.375V22.153l.405.337c.203.168.458.26.72.259a1.124 1.124 0 0 0 .72-1.991ZM20.5 40.748V28.375a1.125 1.125 0 0 1 1.126-1.125h6.75a1.125 1.125 0 0 1 1.125 1.125v12.375h-9Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M7 7h36v36H7z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default HomeSvg
