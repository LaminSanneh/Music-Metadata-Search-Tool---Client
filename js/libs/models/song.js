App.Song = DS.Model.extend({
	name: DS.attr(),
    album: DS.belongsTo('album')
});