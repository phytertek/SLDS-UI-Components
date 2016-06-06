({
	setup : function(component) {
        this.transformComponentsInBody(component);
        this.addOnClickListeners(component);
	},
    
    transformComponentsInBody: function(component) {
        var body = component.get('v.body');
        
        // Filter out the sections
        var filteredMenuItems = body.filter(function(c) {
            return (c.getName() == 'ldsc$menuItem' || c.getName() == 'c$ui_Menu_Item'
                    || c.getName() == 'ldsc$menuSeparator' || c.getName() == 'c$ui_Menu_Separator');
        });
        
        var menuItems = filteredMenuItems.reduceRight(function(acc, next) {
            if (next.getName() == 'ldsc$menuSeparator' || next.getName() == 'c$ui_Menu_Separator') {
                if (acc.length > 0) {
                	var previous = acc[0];
                	previous.set('v.class', 'slds-has-divider--top-space');
                    return acc;
                } else {
                	return acc;    
                }
            } else {
                return [next].concat(acc);
            }
        }, []);
        
        component.set('v.menuItems', menuItems);
    },
    
    addOnClickListeners: function(component) {
        var menuItems = component.get('v.menuItems');
        menuItems.forEach(function(item) {
           item.addHandler('onClick', component, 'c.onClick'); 
        });
    }
})