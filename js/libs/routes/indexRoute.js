App.IndexRoute = Ember.Route.extend({
//	model: function(){
//            console.log('Host' + this.store.get('adapter.host'));
//            return $.ajax({
//                url: 'http://localhost:8000/api/v1/videos/popularVideos',
//                dataType: 'jsonp',
//                crossDomain: true,
//                accepts: "json"
//            }).done(function(data){
//                    return data.map(function(video){
//                        return App.Video.create(video);
//                    });
//                });
//        return this.store.find('video',{
//            type: 'popular'
//        });
//    },
    setupController: function(controller, model){
        controller.set('videoResults', this.store.find('video',{
            type: 'popular'
        }));
//	    controller.set('popularVideos', (function(){
//            return $.getJSON('/videos/popularVideos').then(function(data){
//                return data.videos.map(function(video){
//                    return App.Video.create(video);
//                });
//            });
//        })());
	}
//    findPopularVideos: function(){
//        return $.getJSON('/videos/popularVideos').then(function(data){
//            return data.videos.map(function(video){
//                return App.Video.create(video);
//            });
//        });
//    }
//	redirect: function(){
//		this.transitionTo('search');
//	},
	// beforeModel: function() {
	//     this.transitionTo('search');
	// }
});