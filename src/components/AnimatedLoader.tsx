import React from "react";

interface Props {
  grad: number;
}
const AnimatedLoader: React.FC<Props> = ({ grad }) => {
  return (
    <div className="animated-loader-wrap">
      <div className="loader" style={{ transform: `rotate(${grad}deg)` }}></div>
    </div>
  );
};

export default AnimatedLoader;
