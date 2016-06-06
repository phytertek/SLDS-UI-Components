({
	doInit : function (component, event, helper) {
		helper.exampleStages(component);
	},
	saveStage : function (component, event, helper) {
		let selected = event.getParam("value");
		component.set("v.currentStage", selected);
	}
})