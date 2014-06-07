
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
];