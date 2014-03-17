App.AlbumRoute = Ember.Route.extend({
    model: function(params){
        return this.store.find('album', params.album_id);
    },
    setupController: function(controller, model){
        controller.set('model', model);
        model.reload();
        this.controllerFor('application').set('searchOverlayVisible',false);
    }
});