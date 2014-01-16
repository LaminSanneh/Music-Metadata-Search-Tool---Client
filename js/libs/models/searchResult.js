App.SearchResult = DS.Model.extend({
	type: DS.belongsTo('searchType'),
	search: DS.belongsTo('search'),
	results: DS.attr('array')
});