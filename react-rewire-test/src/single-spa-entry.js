// import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
// import App from "./App";
// import App from "./app-root";
// import "./index.css";

function Page1() {
  return <h2>Page 1</h2>;
}
function Permanent() {
  return <h2>Permanent</h2>;
}
function Jobs() {
  return <h2>Jobs</h2>;
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  // rootComponent: Page2,
  loadRootComponent(props) {
    return Promise.resolve().then(() => {
      if (props.permanent) {
        return Permanent;
      } else if (props.jobs) {
        return Jobs;
      } else {
        return Page1;
      }
    });
  },
  // loadRootComponent() {
  //   return <App />
  // },
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

// export const { bootstrap, mount, unmount } = lifecycles;
export const { bootstrap, unmount } = lifecycles;
export function mount(props) {
  console.log(props, "Props");
  return lifecycles.mount(props);
}
