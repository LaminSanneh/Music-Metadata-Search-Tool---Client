App.SearchType = DS.Model.extend({
	typeName: DS.attr(),
	search: DS.hasMany('search'),
	searchResult: DS.hasMany('searchResult')
});