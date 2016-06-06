({
	selectStage : function(component, event, helper) {
		let newSelected = component.get("v.stageName");
		component.getEvent('selectStage').fire({domEvent: event, value: newSelected });
	}
})