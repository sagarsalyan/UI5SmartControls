sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("app.SmartControls.controller.App", {
		onInit: function () {
			// this.getView().byId("smartForm").bindElement("/Products(1)"); //binding in controller
		}
	});
});