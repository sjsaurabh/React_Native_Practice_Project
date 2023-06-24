import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DownSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={4}
    fill="none"
    {...props}
  >
    <Path
      fill="#1A1A1A"
      fillRule="evenodd"
      d="M4.013 2.796 7.038.156a.634.634 0 0 1 .795.012c.218.19.223.498.012.694L4.422 3.855a.632.632 0 0 1-.789.014L.183.865A.46.46 0 0 1 .017.376a.54.54 0 0 1 .411-.36.628.628 0 0 1 .56.142l3.024 2.638Z"
      clipRule="evenodd"
    />
  </Svg>
)


export default DownSvg