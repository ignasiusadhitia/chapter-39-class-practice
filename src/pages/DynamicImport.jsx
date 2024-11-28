import React, { lazy, Suspense, useState } from "react";
// import Heavycomponent from "../components/Heavycomponent";
const LazyComponent = lazy(() => import("../components/Heavycomponent"));

const DynamicImport = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <h1>DynamicImport</h1>;
      <button onClick={() => setIsVisible(!isVisible)}>click</button>
      {isVisible && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </>
  );
};

export default DynamicImport;
