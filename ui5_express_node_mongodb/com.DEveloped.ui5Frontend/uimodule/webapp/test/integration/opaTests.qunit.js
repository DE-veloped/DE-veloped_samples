/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require([
    "com/DEveloped/ui5Frontend/test/integration/AllJourneys"
  ], function() {
    QUnit.start();
  });
});
