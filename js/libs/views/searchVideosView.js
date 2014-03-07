App.SearchVideos = Ember.View.extend({
   templateName: 'layouts/search-videos',
    didInsertElement: function(){
        this.$().magnificPopup({
            delegate: '.results__result-item', // child items selector, by clicking on it popup will open
            type: 'iframe'
            // other options
        });
    }
});