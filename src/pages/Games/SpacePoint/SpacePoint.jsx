import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const SpacePoint = () => {
  // const { unityProvider } = useUnityContext({
  //   loaderUrl: "/assets/Build/tes.loader.js",
  //   dataUrl: "/assets/Build/tes.data",
  //   frameworkUrl: "/assets/Build/tes.framework.js",
  //   codeUrl: "/assets/Build/tes.wasm"
  // });

  const unityContext = useUnityContext({
    loaderUrl: "/assets/Build/tes.loader.js",
    dataUrl: "/assets/Build/tes.data",
    frameworkUrl: "/assets/Build/tes.framework.js",
    codeUrl: "/assets/Build/tes.wasm"
  });

  return (
    <Unity 
      style={{width: "100%", height: "100%"}}
      unityProvider={unityContext}
    />
  )
}

export default SpacePoint;
