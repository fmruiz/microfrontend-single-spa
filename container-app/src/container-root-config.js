import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@container/micro-one",
  app: () => System.import("@container/micro-one"),
  activeWhen: ["/one"],
  customProps: {
    domElement: document.getElementById('@container/micro-one')
  }
});

registerApplication({
  name: "@container/micro-two",
  app: () => System.import("@container/micro-two"),
  activeWhen: ["/two"],
  customProps: {
    domElement: document.getElementById('@container/micro-two')
  }
});

registerApplication({
  name: "@container/test",
  app: () => System.import("@container/test"),
  activeWhen: [(location) => location.pathname.startsWith('/')],
  customProps: {
    domElement: document.getElementById('@container/test')
  }
});

start({
  urlRerouteOnly: true,
});
