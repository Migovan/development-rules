import React from "react";
import dynamic from "next/dynamic";

class Editor extends React.Component {
  shouldComponentUpdate() {
    return this.props.draft == null;
  }
  render() {
    const RedactorSSRSafe = dynamic(import("../components/SandboxEditor/SandboxEditor"), {
      ssr: false,
    });
    return <RedactorSSRSafe />;
  }
}

export default Editor;
