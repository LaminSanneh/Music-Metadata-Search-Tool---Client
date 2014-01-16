App.Router.map(function(){
	// this.resource('index',{path: '/'});
	this.resource('search',{path:'search'}, function(){
		this.resource('searchResult',{path:'/:searchTypeId/:searchString'});
		
	});

	this.resource('songs', {path: 'songs'}, function(){
		this.resource('song', {path: 'song/:song_id'});
	});

	this.resource('artists', {path: 'artists'}, function(){
		this.resource('artist', {path: 'artist/:artist_id'});
	});

	this.resource('albums', {path: 'albums'}, function(){
		this.resource('album', {path: 'album/:album_id'});
	});

	this.resource('users', function(){

		this.resource('user', {path: '/:user_id'}, function(){
			this.route('edit');
		});

		this.route('create');
	});
});