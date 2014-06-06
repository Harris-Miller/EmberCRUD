App.UsersCreateController = Ember.ObjectController.extend({
	actions: {
		save: function() {
			console.log(this.get('model'));
			console.log('action.save');
			this.get('model').set('creationDate', new Date());
			console.log('createRecord');
			var newUser = this.store.createRecord('user', this.get('model'));
			newUser.save();

			this.transitionToRoute('user', newUser);
		},
	}
});