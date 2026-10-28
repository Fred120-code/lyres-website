"use client"
import { Suspense } from "react";
import Analytics from "../Analytics/Analytics";

const SuspenseComp = () => {
  return (
    <Suspense fallback={null}>
      <Analytics />
    </Suspense>
  );
};

export default SuspenseComp;
