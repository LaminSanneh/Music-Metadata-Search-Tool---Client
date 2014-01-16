App.SearchType.FIXTURES = [
	{
		id:1,
		typeName: 'song'
	},
	{
		id:2,
		typeName: 'artist'
	},
	{
		id:3,
		typeName:'album'
	}
]

App.Song.FIXTURES = [
	{
		id: 1, 
		name: 'Power Trip'
	},
	{
		id: 2, 
		name: 'Mo Money'
	},
	{
		id: 3, 
		name: 'Runaway'
	},
	{
		id: 4, 
		name: 'She knows'
	},
	{
		id: 5, 
		name: 'Forbidden Fruit'
	},
	{
		id: 6, 
		name: 'Chaining Day'
	},
	{
		id: 7, 
		name: 'Crooked Smile'
	},
	{
		id: 8, 
		name: 'Born Sinner'
	},
	{
		id: 9, 
		name: 'Is she Gon Pop'
	},
	{ 
		id: 10,		
		name: 'Sparks Will Fly'
	}
]

App.Artist.FIXTURES = [
	{
		id: 1, 
		name: 'Kanye West'
	},
	{
		id: 2, 
		name: 'Dr. Dre'
	},
	{
		id: 3, 
		name: 'Jennifer Lopez'
	},
	{
		id: 4, 
		name: 'Avicii'
	},
	{
		id: 5, 
		name: 'Akon'
	},
	{
		id: 6, 
		name: 'Ace Hood'
	},
	{
		id: 7, 
		name: 'Beyonce'
	},
	{
		id: 8, 
		name: 'Jay Z'
	},
	{
		id: 9, 
		name: 'Biffy Clyro'
	},
	{ 
		id: 10,		
		name: 'Basshunter'
	}
]

App.Album.FIXTURES = [
	{
		id: 1, 
		name: 'The Blueprint 3'
	},
	{
		id: 2, 
		name: 'Chronic 2001'
	},
	{
		id: 3, 
		name: 'Trouble'
	},
	{
		id: 4, 
		name: 'True'
	},
	{
		id: 5, 
		name: 'Love'
	},
	{
		id: 6, 
		name: 'Opposites'
	},
	{
		id: 7, 
		name: 'Basshunter'
	},
	{
		id: 8, 
		name: 'Late Registration'
	},
	{
		id: 9, 
		name: 'Ruthless'
	},
	{ 
		id: 10,		
		name: 'I Am...Sasha Firece'
	}
]

DS.FixtureAdapter.reopen({
	queryFixtures: function(records, query, type){
		return records.filter(function(record){
			for(var key in query){
				if(!query.hasOwnProperty){ continue; }

				var value = query[key],
					matchBotherUpperAndLower = new RegExp(value, 'i');
				// if(record[key] !== value) { return false; }
				if(!(record[key]).match(matchBotherUpperAndLower)) { return false; }
			}
			return true;
		});
	}
});