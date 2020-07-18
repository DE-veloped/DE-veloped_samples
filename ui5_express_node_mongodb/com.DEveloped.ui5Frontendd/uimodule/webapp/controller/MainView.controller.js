sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("com.DEveloped.ui5Frontend.controller.MainView", {
    onInit: function () {
      var oModel = new sap.ui.model.json.JSONModel("http://localhost:3000/auftraege");
      this.getView().setModel(oModel);
    },
  });
});
