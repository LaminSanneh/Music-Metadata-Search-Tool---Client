App.ArtistRoute = Ember.Route.extend({
    model: function(params){
        return this.store.find('artist', params.artist_id);
    },
    setupController: function(controller, model){
        controller.set('model', model);
        controller.set('videoResults', this.store.find('video', {name: model.get('name')}));
        this.controllerFor('application').set('searchOverlayVisible',false);
    }
});