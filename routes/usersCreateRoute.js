App.UsersCreateRoute = Ember.Route.extend({
	model: function() {
		console.log('object.create');
		return Ember.Object.create({});
	},

	renderTemplate: function() {
		console.log('renderTemplate');
		this.render('user.edit', {
			controller: 'usersCreate'
		});
	}
});