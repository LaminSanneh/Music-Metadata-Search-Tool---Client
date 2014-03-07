window.App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter;
// App.ApplicationAdapter = DS.LSAdapter;

DS.ArrayTransform = DS.Transform.extend({
  deserialize: function(serialized) {
    return (Ember.typeOf(serialized) == "array")
        ? serialized 
        : [];
  },

  serialize: function(deserialized) {
    var type = Ember.typeOf(deserialized);
    if (type == 'array') {
        return deserialized
    } else if (type == 'string') {
        return deserialized.split(',').map(function(item) {
            return jQuery.trim(item);
        });
    } else {
        return [];
    }
  }
});

App.register("transform:array", DS.ArrayTransform);

App.SongAdapter = DS.RESTAdapter.extend({});
App.AlbumAdapter = DS.RESTAdapter.extend({});
App.ArtistAdapter = DS.RESTAdapter.extend({});
App.VideoAdapter = DS.RESTAdapter.extend({});

DS.RESTAdapter.reopen({
   host: 'http://localhost:8000/api/v1',
    ajax: function(url, method, hash) {
        hash.crossDomain = true;
        return this._super(url, method, hash);
    }
});



