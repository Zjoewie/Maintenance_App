jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 EquipmentSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/soa/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/soa/test/integration/pages/App",
	"com/soa/test/integration/pages/Browser",
	"com/soa/test/integration/pages/Master",
	"com/soa/test/integration/pages/Detail",
	"com/soa/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.soa.view."
	});

	sap.ui.require([
		"com/soa/test/integration/MasterJourney",
		"com/soa/test/integration/NavigationJourney",
		"com/soa/test/integration/NotFoundJourney",
		"com/soa/test/integration/BusyJourney",
		"com/soa/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});