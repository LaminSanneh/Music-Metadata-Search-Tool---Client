App.Artist = DS.Model.extend({
	name: DS.attr(),
    picture: DS.attr(),
    real_name: DS.attr(),
    profile: DS.attr(),
    albums: DS.hasMany('album')
});