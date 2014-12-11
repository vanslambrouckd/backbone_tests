/*
backbone fundamentals.pdf (addy osmani)
https://github.com/addyosmani/backbone-fundamentals
 */
var Todo = Backbone.Model.extend({
	initialize: function() {
		console.log('model has been initialized');
		this.on('change', function() {
			console.log(' - values for the model Todo have changed');
		});

		this.on('change:title', function() {
			'Title value for the model Todo has changed';
		});
	},
	defaults: {
		title: '',
		completed: false
	}
});


var todo1 = new Todo();
console.log(JSON.stringify(todo1));

var todo2 = new Todo({
	title:'learn backbone',
	completed: false
});
console.log(todo2);

console.log(todo2.get('title'));
todo2.set('title', 'david');

var Person = new Backbone.Model();
Person.validate = function(attrs) {
	if (!attrs.name) {
		return 'I need your name';
	}
};
Person.on("change:name", function() {
	console.log('the name has been changed');
});

Person.set({ name: 'david'});
Person.set({ name: 'david'}, { silent: true });
console.log(Person.hasChanged('name'));

console.log(Person.unset('name', { validate: true })); //false

var Message = Backbone.Model.extend({
	defaults: {
		completed: false
	},
	validate: function(attributes) {
		if (attributes.title === undefined) {
			return 'Remember to set a title for your message';
		}
	},
	initialize: function() {
		console.log('Message has been initialized');
		this.on('invalid', function(model, error) {
			console.log(error);
		});
	}
});

var msg = new Message();
msg.set('completed', true, { validate: true }); //logs remember to set a title for your message

console.log('completed:' + msg.get('completed')); //false