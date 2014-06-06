
window.App = Ember.Application.create();

;
App.Router.map(function() {
	this.resource('users', function() {
		this.resource('user', { path: '/:user_id'}, function() {
			this.route('edit');
		});

		this.route('create');
	});
});;
App.usersController = Ember.ArrayController.extend({
	sortProperties: ['name'],
	sortAscending: true
});;
App.User = DS.Model.extend({
	name: DS.attr(),
	email: DS.attr(),
	bio: DS.attr(),
	avatarUrl: DS.attr(),
	creationDate: DS.attr()
});



App.User.FIXTURES = [
	{
		id: 1,
		name: 'Sponge Bob',
		email: 'bob@sponge.com',
		bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
		avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/sb.jpg',
		createDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
	},
	{
		id: 2,
		name: 'John David',
		email: 'john@david.com',
		bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
		avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/jk.jpg',
		creationDate: 'Fri, 07 Aug 2013 10:10:10 GMT'
	}
];;
App.UsersRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('user');
	}
});;Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Show users");
  }

  data.buffer.push("<div class=\"main\">\r\n	<h1>Hello World</h1>\r\n	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users", options) : helperMissing.call(depth0, "link-to", "users", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["users"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n		<li>");
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n	");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n		<li>no users... :-(</li>\r\n	");
  }

  data.buffer.push("<div>Users: ");
  stack1 = helpers._triageMustache.call(depth0, "usersCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n<ul class=\"users-listing\">\r\n	");
  stack1 = helpers.each.call(depth0, "user", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</ul>");
  return buffer;
  
});