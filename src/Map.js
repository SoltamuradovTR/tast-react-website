import React from "react";
import ScriptTag from "react-script-tag";

function Map() {
  return (
    <div className="map">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A995527a367e729d785bcb320b59fdd74b62a266444411f736b6f2d7ed6437753&amp;source=constructor"
        width="100%"
        height="400"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default Map;
