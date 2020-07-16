import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

/*
registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/app"],
});

registerApplication({
  name: "@medwing/client",
  app: () => System.import("@medwing/client"),
  activeWhen: "/client",
});

registerApplication({
  name: "@medwing/calendar",
  app: () => System.import("@medwing/calendar"),
  activeWhen: "/calendar",
});

start({
  urlRerouteOnly: true,
});
*/
const data = {
  props: {
    permanent: "permanent",
    jobs: "jobs",
  },
};

const routes = constructRoutes(
  document.querySelector("#single-spa-layout"),
  data
);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });
applications.forEach(registerApplication);
start();
