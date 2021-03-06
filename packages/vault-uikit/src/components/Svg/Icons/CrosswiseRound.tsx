import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <path d="M0 0H32V32H0z" transform="translate(-261.000000, -407.000000) translate(261.000000, 407.000000)" />
            <g>
              <path
                fill="#8751F4"
                fillRule="nonzero"
                d="M26.667 13.333c0 7.366-5.968 13.334-13.334 13.334C5.968 26.667 0 20.699 0 13.333 0 5.968 5.968 0 13.333 0 20.7 0 26.667 5.968 26.667 13.333z"
                transform="translate(-261.000000, -407.000000) translate(261.000000, 407.000000) translate(2.666667, 2.666667)"
              />
              <path
                stroke="#FFF"
                strokeWidth="2.4"
                d="M17.695 11.293l.886.886c.829.829.829 2.17 0 2.999l-3.56 3.563c-.828.83-2.17.83-2.998 0l-3.564-3.563c-.829-.829-.829-2.17 0-3l5.807-5.806"
                transform="translate(-261.000000, -407.000000) translate(261.000000, 407.000000) translate(2.666667, 2.666667)"
              />
            </g>
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
