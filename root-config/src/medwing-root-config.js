import { registerApplication, start } from "single-spa";

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