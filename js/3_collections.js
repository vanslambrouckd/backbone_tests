var Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	}
});

var TodosCollection = Backbone.Collection.extend({
	model: Todo
});

var myTodo = new Todo({title: 'learn backbone', id: 2});
var todos = new TodosCollection([myTodo]);

console.log(todos.length);

var todo2 = new Todo({title: 'play basketball' });
todos.add(todo2);
todos.remove(myTodo);
console.log(todos);

var items = new Backbone.Collection;
items.add({id: 1, name: "David", age: 3});
console.log(JSON.stringify(items.toJSON()));


var myTodo = new Todo({title: 'read whole book', id: 2});
var todos = new TodosCollection([myTodo]);

var todo2 = todos.get(2); //get by id
console.log(todo2.get('title'));
var todoCid = todos.get(todo2.cid);
console.log(todoCid);

//listening for events
var TodosCollection = new Backbone.Collection();
TodosCollection.on('add', function(todo) {

});