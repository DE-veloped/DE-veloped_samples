sap.ui.define([
  "sap/ui/test/Opa5",
  "com/DEveloped/ui5Frontend/test/integration/arrangements/Startup",
  "com/DEveloped/ui5Frontend/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
