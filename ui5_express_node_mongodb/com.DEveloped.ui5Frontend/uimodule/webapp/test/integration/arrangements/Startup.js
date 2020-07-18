sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("com.DEveloped.ui5Frontend.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "com.DEveloped.ui5Frontend",
          async: true,
          manifest: true
        }
      });
    }

  });
});
