App.SearchRoute = Ember.Route.extend({

	setupController: function(controller){
		if(!controller.get('searchType')){
			this.store.find('searchType',1).then(function(searchType){
				controller.set('searchType', searchType);
			});
		}
	},

	createNewSearch: function(){
		return this.store.createRecord('search',{
			name: '',
			searchString: '',
			type: this.store.find('searchType',1),
			searchResult: this.createNewSearchResult(searchType)
		});
	},

	createNewSearchResult: function(searchType){
		return this.store.createRecord('searchResult',{
			type: searchType,
			results: []
		});
	}
});