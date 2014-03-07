App.ApplicationController = Ember.ObjectController.extend({
	sidebarOpen: true,
	sidebarPermanent: false,
    searchOverlayVisible: false,
    searchTerm: null,
    albumResults: null,
    artistResults: null,
    songResults: null,
    videoResults: null,
    searchTermChanged: function(){
        Ember.run.debounce(this, this.doSearch, 1000);
    }.observes('searchTerm'),
    doSearch: function(){
        console.log('search Term changed to '+this.get('searchTerm'));
        var searchTerm = this.get('searchTerm');
        this.set('albumResults', this.store.find('album',{name:searchTerm}));
        this.set('artistResults', this.store.find('artist',{name:searchTerm}));
        this.set('songResults', this.store.find('song',{name:searchTerm}));
        this.set('videoResults', this.store.find('video',{name:searchTerm}));
    },
	actions: {
	    toggleSidebar:function(){
	    	this.toggleProperty('sidebarOpen');
	    },
        toggleSearchOverlay: function(){
            this.toggleProperty('searchOverlayVisible');
        },
        closeSearchOverlay: function(){
            this.set('searchOverlayVisible',false);
        }
	}
});