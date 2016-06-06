({
	doInit : function (component, event, helper) {
		helper.stageState(component);
	},
	selectStage : function(component, event, helper) {
		let selected = event.getParam("value");
		let currentSelected = component.get("v.selected");
		if (selected === currentSelected) {
			component.set("v.selected", "");
		} else {
			component.set("v.selected", selected);
		}
	},
	toggleCoaching : function (component, event, helper) {
		let toggle = !component.get("v.coachingOpen");
		component.set("v.coachingOpen", toggle);
	},
	saveStage : function (component, event, helper) {
		let selected = component.get("v.selected");
		if (selected !== '') {
			component.getEvent('saveStage').fire({domEvent: event, value: selected });
		}
	}
})