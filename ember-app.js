
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
];;App.UserEditRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('user');
	}
});;App.UserRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('user', params.user_id);
	}
});;
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

Ember.TEMPLATES["user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n	<div class=\"confirm-box\">\r\n		<h4>Really?</h4>\r\n		<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirmDelete", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Yes</button>\r\n		<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelDelete", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">No</button>\r\n	</div>\r\n");
  return buffer;
  }

  data.buffer.push("<div class=\"user-profile\">\r\n	<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("avatarUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"User's avatar\">\r\n	<h2>");
  stack1 = helpers._triageMustache.call(depth0, "fullName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\r\n	<span>");
  stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n	<p>");
  stack1 = helpers._triageMustache.call(depth0, "bio", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n	<span>Created: ");
  stack1 = helpers._triageMustache.call(depth0, "creationDate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n	<br>\r\n	<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Edit</button>\r\n	<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Delete</button>\r\n</div>\r\n\r\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n");
  stack1 = helpers['if'].call(depth0, "deleteMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["user/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"user-edit\">\r\n	<label>\r\n		Avatar Url: \r\n		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("avatarUrl")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n	</label>\r\n	<label>\r\n		First Name:\r\n		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("firstName")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n	</label>\r\n	<label>\r\n		Last Name: \r\n		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("lastName")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n	</label>\r\n	<label>\r\n		Email: \r\n		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("email")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n	</label>\r\n	<label>\r\n		Bio:\r\n		");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("bio")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\r\n	</label>\r\n	<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["users"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n		<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "user", options) : helperMissing.call(depth0, "link-to", "user", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n	");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "user.fullName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\r\n		<li>no users... :-(</li>\r\n	");
  }

  data.buffer.push("<div>Users: ");
  stack1 = helpers._triageMustache.call(depth0, "usersCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n<ul class=\"users-listing\">\r\n	");
  stack1 = helpers.each.call(depth0, "user", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</ul>\r\n\r\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});