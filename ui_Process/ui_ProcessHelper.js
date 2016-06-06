({
	stageState : function (component, event, helper) {
		let list = component.get("v.allStages");
		let current = component.get("v.currentStage");
		list.forEach(function (item, index) {
			if (item.label === current) {
				component.set("v.currentIndex", index);
			}
		});
	}
})