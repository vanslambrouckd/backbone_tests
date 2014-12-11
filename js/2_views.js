var TodoView = Backbone.View.extend({
	tagName: 'li',
	todoTpl: _.template('An example template'),
	events: {
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close'
	},
	initialize: function(options) {
		this.options = options || {};
	},
	render: function() {
		this.$el.html(this.todoTpl(this.model.attributes));
		this.input = this.$('.edit');
	},
	edit: function() {

	},
	close: function() {

	},
	updateOnEnter: function() {

	}
});

var todoView = new TodoView();
console.log(todoView.el);

var TodosView = Backbone.View.extend({
	tagName: 'ul',
	className: 'container',
	id: 'todos'
});

var todosView = new TodosView();
console.log(todosView.el);

var todosView = new TodosView({el: $('#2_footer')});
console.log(todosView);

var button1 = $('<button></button>');
var button2 = $('<button></button>');

var View = Backbone.View.extend({
	events: {
		'click': function(e) {
			console.log(view.el === e.target);
		}
	}
});

var view = new View({el: button1});
button1.trigger('click');
view.setElement(button2);
button2.trigger('click');

var view = new Backbone.View;
view.setElement('<p><a><b>test</b></a></p>');
console.log(view.$('a b').html());