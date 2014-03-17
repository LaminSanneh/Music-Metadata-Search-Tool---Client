App.Router.map(function(){
	// this.resource('index',{path: '/'});
	this.resource('search',{path:'search'}, function(){
		this.resource('searchResult',{path:'/:searchTypeId/:searchString'});
		
	});

	this.resource('songs', {path: 'songs'}, function(){
	});
    this.resource('song', {path: 'songs/:song_id'});

	this.resource('artists', {path: 'artists'}, function(){

	});
    this.resource('artist', {path: 'artists/:artist_id'});

	this.resource('albums', {path: 'albums'}, function(){
	});
    this.resource('album', {path: 'albums/:album_id'});

    this.resource('videos', {path: 'videos'}, function(){

    });
    this.resource('videos', {path: 'videos/:video_id/:title'}, function(){

    });

});