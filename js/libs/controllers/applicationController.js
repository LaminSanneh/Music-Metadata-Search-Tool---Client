App.ApplicationController = Ember.ObjectController.extend({
	sidebarOpen: true,
	sidebarPermanent: false,
	actions: {
	    toggleSidebar:function(){
	    	this.toggleProperty('sidebarOpen');
	    }
	}
});