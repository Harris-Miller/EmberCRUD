
window.App = Ember.Application.create();

;//App.ApplicationAdapter = DS.FixtureAdapter.extend();
App.ApplicationAdapter = DS.LSAdapter.extend();;Ember.Handlebars.helper('formatDate', function(date) {
	return moment(date).fromNow();
});;App.PopupView = Ember.View.extend({
	layout: Ember.Handlebars.compile('<div class="popup">{{yeild}}</div>'),
	classNames: ['popup'],
	didInsertElement: function() {
		console.log(this.controller);
		console.log(this.element);
		// this.$().popup({
		// 	position: 'right'
		// });
	}
});;
App.User = DS.Model.extend({
	firstName: DS.attr(),
	lastName: DS.attr(),
	email: DS.attr(),
	bio: DS.attr(),
	avatarUrl: DS.attr(),
	creationDate: DS.attr('date'),

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
		creationDate: new Date(2013, 7, 26, 20, 23, 43, 0)// 'Mon, 26 Aug 2013 20:23:43 GMT'
	},
	{
		id: 2,
		firstName: 'John',
		lastName: 'David',
		email: 'john@david.com',
		bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
		avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/jk.jpg',
		creationDate: new Date(2013, 7, 7, 10, 10, 10, 0)// 'Fri, 07 Aug 2013 10:10:10 GMT'
	}
];;App.UserController = Ember.ObjectController.extend({
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
		return this.get('model.length');
	}.property('@each')
});;App.UsersCreateController = Ember.ObjectController.extend({
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
});;
App.Router.map(function() {
	this.resource('users', function() {
		this.resource('user', { path: '/:user_id'}, function() {
			this.route('edit');
		});

		this.route('create');
	});
});;App.IndexRoute = Ember.Route.extend({
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
	renderTemplate: function() {
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