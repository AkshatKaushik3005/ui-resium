import { Viewer } from "resium";
import React from "react";
import SearchBar from "./searchbar";
import { fullname } from "react-lorem-ipsum";
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
    navigationHelpButton={false}
    timeline={false}
    animation={false}
    creditContainer={document.createElement("div")}
    style={
      {
        "width":'100%'
      }
    }
   
    //ref={viewer}
    >
      <div  className="cesium-viewer-toolbar" >
      {/* <button type="button" class="cesium-toolbar-button "></button>  */}
        {/* <AiOutlineSearch /> */}
       <SearchBar /> 
      </div>
      
      </Viewer>
}
