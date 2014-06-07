App.UsersCreateRoute = Ember.Route.extend({
	renderTemplate: function() {
		this.render('user.edit', {
			controller: 'usersCreate'
		});
	}
});