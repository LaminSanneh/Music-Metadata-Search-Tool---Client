App.SearchResultRoute = Ember.Route.extend({
	model: function(params){
		var $this = this;
		var searchType = this.store.find('searchType', params.searchTypeId).then(function(searchType){
			$this.controllerFor('search').set('searchType', searchType);
			$this.controllerFor('search').get('currentSearch').set('searchString', params.searchString);
			return $this.controllerFor('search').get('currentSearch');
		});
		return searchType;
	},
	setupController: function(controller, model){
		controller.set('model', model);
		console.log(model.get('searchString'));
		// controller.set('result', model.get('searchString'));
		// controller.set('currentSearchItem', this.store.find(model.get('type.typeName'), {name: model.get('searchString')}).then(function(searchItems){
		// 	return searchItems.get('firstObject');
		// }));
		controller.setSearchResults();
		// controller.getResults(model);
		// controller.set('resultHeader', model.get('type.typeName'));
	},
	serialize: function(model){
		return { typeName: model.get('type.typeName'), searchString: model.get('searchString'), 
				searchTypeId: model.get('type.id') };
	}
});