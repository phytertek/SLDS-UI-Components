({
	init : function(component, event, helper) {
	},
	toggleCalendar : function (component) {
		let element = component.find("calendar-element");
		$A.util.toggleClass(element, "slds-hidden");
	}
})