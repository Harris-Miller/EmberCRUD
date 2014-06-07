App.UsersCreateController = Ember.ObjectController.extend({
	actions: {
		save: function() {
			var data = this.getProperties('avatarUrl', 'firstName', 'lastName', 'email', 'bio');
			var newUser = this.store.createRecord('user', data);
			newUser.set('creationDate', new Date());
			newUser.save();

			this.transitionToRoute('user', newUser);
		},
		cancel: function() {
			this.transitionToRoute('users');
		}
	}
});