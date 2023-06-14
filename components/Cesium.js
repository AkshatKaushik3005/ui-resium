import { Viewer } from "resium";
import React from "react";
import ReactSearchBox from "react-search-box";
import { AiOutlineSearch } from "react-icons/ai";
// import { Viewer as CesiumViewer } from "cesium";
// const viewer = new Cesium.Viewer("cesiumContainer");
// window.viewer = viewer;
// const toolbar = document.querySelector("div.cesium-viewer-toolbar");
// const modeButton = document.querySelector("span.cesium-sceneModePicker-wrapper");
// const myButton = document.createElement("button");
// myButton.classList.add("cesium-button", "cesium-toolbar-button");
// myButton.innerHTML = "X";
//toolbar.insertBefore(myButton, modeButton);

export default function Cesium() {
  
  const viewer = React.useRef(null);

  return <Viewer 
    sceneModePicker={false}
    geocoder={false}
    homeButton={false}
    baseLayerPicker={false}
    navigationHelpButton={false} ref={viewer}>
      <div  className="pt-4 px-4" class="cesium-viewer-toolbar">
        {/* <AiOutlineSearch /> */}
      <ReactSearchBox placeholder=" SEARCH HERE" />
      </div>
      </Viewer>
}
