import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g fill="none" fillRule="evenodd" opacity=".6">
        <g>
          <g>
            <path
              fillRule="nonzero"
              d="M0 0H24V24H0z"
              transform="translate(-437.000000, -400.000000) translate(437.000000, 400.000000)"
            />
            <path
              fill="#140129"
              d="M8.28 20.126c7.544 0 11.672-6.256 11.672-11.672 0-.176 0-.352-.008-.528.8-.576 1.496-1.304 2.048-2.128-.736.328-1.528.544-2.36.648.848-.504 1.496-1.312 1.808-2.272-.792.472-1.672.808-2.608.992-.752-.8-1.816-1.296-2.992-1.296-2.264 0-4.104 1.84-4.104 4.104 0 .32.04.632.104.936-3.408-.168-6.432-1.808-8.456-4.288-.352.608-.552 1.312-.552 2.064 0 1.424.728 2.68 1.824 3.416-.672-.024-1.304-.208-1.856-.512v.056c0 1.984 1.416 3.648 3.288 4.024-.344.096-.704.144-1.08.144-.264 0-.52-.024-.768-.072.52 1.632 2.04 2.816 3.832 2.848-1.408 1.104-3.176 1.76-5.096 1.76-.328 0-.656-.016-.976-.056 1.808 1.152 3.968 1.832 6.28 1.832"
              transform="translate(-437.000000, -400.000000) translate(437.000000, 400.000000)"
            />
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
