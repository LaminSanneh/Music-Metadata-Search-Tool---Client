window.App = Ember.Application.create({
    ready: function(){
        $(".main-content__details-titles .detail-title").on("click", function(e){
            console.log("clicked");
            e.preventDefault();
            var $this = $(this),
                index = $this.index(),
                detailElememntIndex = $(".main-content__details .main-content__detail:eq("+index+")");

            detailElememntIndex.fadeIn(300).siblings().fadeOut(250);


        });
    }
});

//App.ApplicationAdapter = DS.FixtureAdapter;
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
//   host: 'http://localhost:8000/api/v1'
   host: 'http://95.85.57.6/api/v1'
//    ajax: function(url, method, hash) {
//        hash.crossDomain = true;
//        return this._super(url, method, hash);
//    }
});

//$(function(){
//
//});



