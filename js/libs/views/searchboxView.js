App.SearchboxView = Ember.TextField.extend({
	tagName: 'input',
	attributeBindings: ['placeholder'],
	placeholder: "Type to search",
	focusIn: function(){
		this.get('targetObject').set('searchBoxHasFocus', true);
	},
	keyUp: function(){
		var controller = this.get('targetObject');
		controller.makeQuery(this.get('value'), controller.get('searchType'));
	}
	// ,
	// focusOut: function(){
	// 	this.get('targetObject').set('searchBoxHasFocus', false);
	// }
});