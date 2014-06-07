App.UsersCreateController = Ember.ObjectController.extend({
	actions: {
		save: function() {
			var newUser = this.store.createRecord('user', {
				avatarUrl: this.get('avatarUrl'),
				firstName: this.get('firstName'),
				lastName: this.get('lastName'),
				email: this.get('email'),
				bio: this.get('bio'),
				creationDate: new Date()
			});
			newUser.save();

			this.transitionToRoute('user', newUser);
		},
		cancel: function() {
			this.transitionToRoute('users');
		}
	}
});