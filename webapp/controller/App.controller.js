sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function (Controller,Formatter) {
	"use strict";

	return Controller.extend("app.SmartControls.controller.App", {
		formatter: Formatter,
		onInit: function () {
			// this.getView().byId("smartForm").bindElement("/Products(1)"); //binding in controller
		}
	});
});