App.Search = DS.Model.extend({
	name: DS.attr(),
	type: DS.belongsTo('searchType'),
	searchResult: DS.belongsTo('searchResult'),
	searchString: DS.attr()
});