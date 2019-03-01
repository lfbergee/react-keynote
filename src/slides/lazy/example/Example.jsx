import React, { Suspense, lazy, useState } from "react";
import { GridRow, GridCol, PrimaryButton } from "../../../baseComponents";
import { Spinner } from "../../../components";

const SomeComp = lazy(() => import("./SomeComp"));

const Example = () => {
  const [showComponent, toggleComponent] = useState(false);

  return (
    <GridRow justify="center">
      <GridCol>
        <PrimaryButton onClick={() => toggleComponent(!showComponent)}>
          Toggle SomeComp
        </PrimaryButton>
        <Suspense fallback={<Spinner />}>
          {showComponent && <SomeComp />}
        </Suspense>
      </GridCol>
    </GridRow>
  );
};

export default Example;
