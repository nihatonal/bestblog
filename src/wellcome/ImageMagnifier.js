import React, { useEffect, useRef, useState } from "react";

const ImageMagnifier = ({
  src,
  width,
  height,
  magnifierHeight = 100,
  magnifieWidth = 100,
  zoomLevel = 1,
  x,
  y,
  transform,
  className,
}) => {
  // const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([275, 275]);
  const [showMagnifier, setShowMagnifier] = useState(true);

  const enterHandler = (e) => {
    // update image size and turn-on magnifier
    // const elem = e.currentTarget;
    const elem = document.getElementById("image-welcome");

    const { width, height } = elem.getBoundingClientRect();
    setSize([width, height]);
    // setShowMagnifier(true);
  };
  
  return (
    <div
      style={
        {
          // position: "relative",
          // height: height,
          // width: width,
        }
      }
      className={className}
    >
      <img
        id="image-welcome"
        src={src}
        // style={{ height: height, width: width, opacity: "0.5" }}
        // onMouseEnter={enterHandler}
        onMouseMove={(e) => {
          // update cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // calculate cursor position on the image
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          // setXY([x, y]);
        }}
        onMouseLeave={() => {
          // close magnifier
          // setShowMagnifier(true);
        }}
        alt={"img"}
      />

      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",
          transform: transform,

          // prevent magnifier blocks the mousemove event of img
          pointerEvents: "none",
          // set size of magnifier
          height: `275px`,
          width: `275px`,
          // move element center to cursor pos
          top: `${y}px`,
          left: `${x}px`,
          opacity: "1", // reduce opacity so you can verify position
          // backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",

          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight *
            zoomLevel}px`,

          //calculate position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      ></div>
    </div>
  );
};

export default ImageMagnifier;
