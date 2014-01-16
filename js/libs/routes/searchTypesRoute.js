App.SearchTypesRoute = Ember.Route.extend({
	setupController: function(){
		// this.store.createRecord('searchType',{
		// 	typeName: 'song'
		// });

		// this.store.createRecord('searchType',{
		// 	typeName: 'artist'
		// });

		// this.store.createRecord('searchType',{
		// 	typeName: 'album'
		// });
	},
	model: function(){
		return this.store.find('searchType');
	}
});