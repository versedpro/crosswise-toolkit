import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      {/* <g fill="none" fillRule="evenodd" opacity=".6">
        <g>
          <g>
            <path d="M0 0H24V24H0z" transform="translate(-341.000000, -400.000000) translate(341.000000, 400.000000)"/> */}
      {/* fill="#140129" */}
      <path
        opacity=".6"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4.979 6.545c-.073-.614-.817-.479-1.23-.34-2.128.809-4.234 1.678-6.332 2.563-1.219.54-2.524 1.077-3.693 1.721-.57.417.399.693 1.06.966.736.227 1.595.573 2.332.168 1.443-.83 2.778-1.83 4.147-2.773.249-.16 1.004-.68.749-.062-.948 1.036-2.008 1.873-3.008 2.858-.35.285-.714.858-.322 1.257 1.198.838 2.422 1.65 3.635 2.47.505.404 1.295.077 1.406-.553.322-1.892.653-3.783.939-5.681.112-.863.277-1.726.317-2.594z"
        transform="translate(-341.000000, -400.000000) translate(341.000000, 400.000000)"
      />
      {/* </g>
        </g>
      </g> */}
    </Svg>
  );
};

export default Icon;
