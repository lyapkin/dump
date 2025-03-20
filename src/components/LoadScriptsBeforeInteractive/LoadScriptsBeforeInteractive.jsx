import Script from "next/script";
import React from "react";
import LoadClientSideScriptsInHead from "./LoadClientSideScriptsInHead";

const LoadScriptsBeforeInteractive = ({ scripts }) => {
  const prefixedIdScripts = scripts.map((s) => ({
    id: process.env.BI_SCRIPT_PREFIX + s.id,
    src: s.src,
  }));
  const content = prefixedIdScripts.map((s) => (
    <Script key={s.id} src={s.src} id={s.id} strategy="beforeInteractive" />
  ));
  return (
    <>
      {content}
      <LoadClientSideScriptsInHead scripts={prefixedIdScripts} />
    </>
  );
};

export default LoadScriptsBeforeInteractive;
