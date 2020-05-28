import React from "react";

interface Props {}

const AnimatedLoader: React.FC<Props> = () => {
  return (
    <div className="animated-loader-wrap">
      <div className="loader"></div>
    </div>
  );
};

export default AnimatedLoader;
