App.UsersCreateRoute = Ember.Route.extend({
	renderTemplate: function() {
		console.log('renderTemplate');
		this.render('user.edit', {
			controller: 'usersCreate'
		});
	}
});