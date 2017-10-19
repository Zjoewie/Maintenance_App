jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/soa/test/integration/NavigationJourneyPhone",
		"com/soa/test/integration/NotFoundJourneyPhone",
		"com/soa/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});