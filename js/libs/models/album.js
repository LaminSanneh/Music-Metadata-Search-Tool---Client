App.Album = DS.Model.extend({
	name: DS.attr(),
	genre: DS.attr(),
	notes: DS.attr(),
	picture: DS.attr(),
	releaseYear: DS.attr()
});

App.AlbumSerializer = DS.RESTSerializer.extend({
    normalizeHash: {
        release_year: function(hash) {
            hash.releaseYear = hash.release_year;
            delete hash.release_year;
            return hash;
        }
    }
});