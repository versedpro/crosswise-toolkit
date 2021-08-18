import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="nonzero"
        d="M13.363 18.508c.25 0 .492-.102.703-.313l5.125-5.11c.196-.194.313-.468.313-.741 0-.274-.117-.555-.313-.742l-5.109-5.11c-.219-.219-.469-.32-.719-.32-.578 0-.984.414-.984.953 0 .297.125.531.305.719l1.773 1.781 1.977 1.813-1.758-.094H5.527c-.617 0-1.03.406-1.03 1s.413 1 1.03 1h9.149l1.758-.102-1.977 1.82-1.773 1.774c-.18.187-.305.422-.305.719 0 .547.406.953.984.953z"
        transform="translate(-773.000000, -400.000000) translate(773.000000, 400.000000)"
      />
    </Svg>
  );
};

export default Icon;
