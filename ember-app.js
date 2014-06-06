
window.App = Ember.Application.create();

;App.ApplicationAdapter = DS.FixtureAdapter.extend();;
App.Router.map(function() {
	this.resource('users', function() {
		this.resource('user', { path: '/:user_id'}, function() {
			this.route('edit');
		});

		this.route('create');
	});
});;App.UserController = Ember.ObjectController.extend({
	deleteMode: false,

	actions: {
		edit: function() {
			this.transitionToRoute('user.edit', this.get('model'));
		},
		delete: function() {
			this.toggleProperty('deleteMode');
		},
		cancelDelete: function() {
			this.set('deleteMode', false);
		},
		confirmDelete: function() {
			this.get('model').deleteRecord();
			this.get('model').save();
			this.transitionToRoute('users');
			this.set('deleteMode', false);
		}
	}
});;App.UserEditController = Ember.ObjectController.extend({
	actions: {
		save: function() {
			var user = this.get('model');
			user.save();
			this.transitionToRoute('user', user);
		}
	}
});;
App.UsersController = Ember.ArrayController.extend({
	sortProperties: ['name'],
	sortAscending: true,
	usersCount: function() {
		return this.get('model.length')
	}.property('@each')
});;App.UsersCreateController = Ember.ObjectController.extend({
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
});;
App.User = DS.Model.extend({
	firstName: DS.attr(),
	lastName: DS.attr(),
	email: DS.attr(),
	bio: DS.attr(),
	avatarUrl: DS.attr(),
	creationDate: DS.attr(),

	fullName: function() {
		return this.get('firstName') + ' ' + this.get('lastName');
	}.property('firstName', 'lastName')
});



App.User.FIXTURES = [
	{
		id: 1,
		firstName: 'Sponge',
		lastName: 'Bob',
		email: 'bob@sponge.com',
		bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
		avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/sb.jpg',
		creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
	},
	{
		id: 2,
		firstName: 'John',
		lastName: 'David',
		email: 'john@david.com',
		bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
		avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/jk.jpg',
		creationDate: 'Fri, 07 Aug 2013 10:10:10 GMT'
	}
];;App.IndexRoute = Ember.Route.extend({
	redirect: function() {
		this.transitionTo('users');
	}
});;App.UserEditRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('user');
	}
});;App.UserRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('user', params.user_id);
	}
});;App.UsersCreateRoute = Ember.Route.extend({
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
});;
App.UsersRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('user');
	}
});