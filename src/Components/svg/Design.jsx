import * as React from "react";
const Design = (props) => (
  <svg
    width={130}
    height={137}
    viewBox="0 0 130 137"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect y={0.935059} width={130} height={135.285} fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_502_176"
          transform="matrix(0.00813008 0 0 0.0078125 -0.0203252 0)"
        />
      </pattern>
      <image
        id="image0_502_176"
        width={128}
        height={128}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default Design;
