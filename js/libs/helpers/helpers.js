Ember.Handlebars.helper('formatDate', function(date){
  return moment(date).fromNow();
});

Ember.Handlebars.helper('outputPicture', function(picture){
    var url = Ember.isEmpty(picture) ? (window.location.protocol + "//" + window.location.host + "/images/album-generic.jpg") : picture;

    return url;
});