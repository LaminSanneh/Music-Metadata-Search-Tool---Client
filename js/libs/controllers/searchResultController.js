App.SearchResultController = Ember.ObjectController.extend({
	needs: 'search',
	
	resultHeader: function(){
		return this.get('model.type.typeName');
	}.property('model.type'),

	result: null,

	results: function(){
		var searchValue = this.get('model.searchString');
		if(!searchValue) return;

		// Change this to match other less relevant results
		// var matchBotherUpperAndLower = new RegExp(searchValue, 'i');
		return this.get('searchResults').filter(function(value){
			return value.get('name') == searchValue;
			// return value.get('name').match(matchBotherUpperAndLower);
		});
	}.property('searchResults','searchValue'),

	currentSearchItem: function(){
		return this.store.find("song", 1).then(function(searchItems){
			// return searchItems.get('firstObject');
			return searchItems;
		});
	}.property('typeName','searchValue'),

	// otherResults: function(){
	// 	return this.get('model.dropDownSearchItems');
	// }.property(),

	otherResults: function(){
		var searchValue = this.get('model.searchString');
		if(!searchValue) return;

		// Change this to match other less relevant results
		// var matchBotherUpperAndLower = new RegExp(searchValue, 'i');
		return this.get('searchResults').filter(function(value){
			return value.get('name') !== searchValue;
			// return value.get('name').match(matchBotherUpperAndLower);
		});
		// return this.get('searchResults');
	}.property('searchResults','searchValue'),

	searchResults: [],

	typeName: function(){
		return this.get('model.type.typeName');
	}.property('model.type.typeName'),

	searchValue: function(){
		return this.get('model.searchString');
	}.property('model.searchString'),

	isSong: function(){
		return this.get('model.type.typeName') === 'song';
	}.property('model.type'),

	isAlbum: function(){
		return this.get('model.type.typeName') === 'album';
	}.property('model.type'),

	setSearchResults: function(){
		var controller = this;
		this.store.find(this.get('typeName')).then(function(searchResults){
			controller.set('searchResults', searchResults);
		});
	}
});