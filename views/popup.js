App.PopupView = Ember.View.extend({
	layout: Ember.Handlebars.compile('<div class="popup">{{yeild}}</div>'),
	classNames: ['popup'],
	didInsertElement: function() {
		console.log(this.controller);
		console.log(this.element);
		// this.$().popup({
		// 	position: 'right'
		// });
	}
});