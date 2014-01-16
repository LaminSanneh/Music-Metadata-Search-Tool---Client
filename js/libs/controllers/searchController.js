App.SearchController = Ember.ObjectController.extend({
	dropDownSearchItems: function(){
		var searchValue = this.get('searchValue');
		if(!searchValue) return;

		var matchBotherUpperAndLower = new RegExp(searchValue, 'i');
		return this.get('searchResults').filter(function(value){
			return value.get('name').match(matchBotherUpperAndLower);
			// return true;
		});
		// return this.get('searchResults');
	}.property('searchResults','searchValue'),

	// currentSearch: null,

	currentSearch: function(){

		return this.store.createRecord('search',{
			name: '',
			type: this.get('searchType'),
			searchResult: this.store.createRecord('searchResult',{type: this.get('searchType')}),
			searchString: this.get('searchValue')
		});

	}.property('searchValue','searchType'),

	searchResults: [],

	searchType: null,

	searchTypes: function(){
		return this.store.find('searchType');
	}.property(),

	isSelectedSearchType: function(){
		return; 
	}.property('currentSearch'),

	searchValue: null,

	searchBoxHasFocus: false,

	setNewSearch: function(searchType){
		var newSearchResult = this.store.createRecord('searchResult',{
			type: searchType,
			results: this.store.find(searchType.get('typeName'))
		});

		var newSearch = this.store.createRecord('search',{
			type: searchType,
			searchString: this.get('searchValue'),
			searchResult: newSearchResult
		});

		this.set('currentSearch', newSearch);
	},

	makeQuery: function(searchValue, searchType){
		// console.log(searchValue);
		// console.log(searchType.get('typeName'));
		var controller = this;
		this.store.find(searchType.get('typeName'), {name: searchValue}).then(function(searchResults){
			searchResults = searchResults.toArray();
			// console.log("searchResults:");
			// console.log(searchResults.get('length'));
			// console.log(searchResults);
			// console.log((searchResults[0]).get('name'));
			controller.set('searchResults',searchResults);

			// searchResults.forEach(function(){
			// 	console.log("In this foreach loop");
			// });
		});

		// this.set('searchResults', ['Opposites']);
		// this.set('searchResults', newSearchResult.get(''));
	},

	actions:{
		changeSearchType: function(searchType){
			this.set('searchType', searchType);
		},
		searchItemClicked: function(searchValue){
			this.set('searchBoxHasFocus',false);
			this.set('searchValue', searchValue.get('name'));
			// console.log(this.get('currentSearch'));
			this.transitionToRoute("searchResult", this.get('currentSearch'));
			// return;
			// this.setNewSearch(this.get('searchType'));
		}
	}
});