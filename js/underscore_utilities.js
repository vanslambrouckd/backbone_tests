var todos = new Backbone.Collection();
todos.add([
	{ title: 'go to Belgium', completed: true, id: 2 },
	{ title: 'go to Chine', completed: false, id: 3 },
	{ title: 'go to Austria', completed: false, id: 4 }
]);

todos.forEach(function(todo) {
	console.log(todo.get('title'));
});

//sort Collection
var sortedByAlphabet = todos.sortBy(function(todo) {
	return todo.get('title').toLowerCase();
});

console.log('sorted:');
sortedByAlphabet.forEach(function(todo) {
	console.log(todo.get('title'));
});

//map:
var count = 1;
console.log(todos.map(function(model) {
	return count++ + ". " + model.get('title');
}));

var max = todos.max(function(model) {
	//console.log(model.id);
	return model.id;
}).id;
console.log('max', max);

var min = todos.min(function(todo) {
	return todo.id;
}).id;
console.log('min', min);

//pluck: extract specific attribute
var titles = todos.pluck('title');
console.log(titles);


//filter
var Todo = new Backbone.Model.extend({});
var Todos = Backbone.Collection.extend({
	model: Todo,
	filterById: function(ids) {
		return this.models.filter(
			/*
			filter: Looks through each value in the list, returning an array of all the values that pass a truth test (predicate). 
			 */
			function(c) {
				return _.contains(ids, c.id);
			}
		);
	}
});

//groupby
var todos = new Backbone.Collection();
todos.add([
	{ title: 'go to Belgium', completed: true, id: 2 },
	{ title: 'go to Chine', completed: false, id: 3 },
	{ title: 'go to Austria', completed: false, id: 4 }
]);

var byCompleted = todos.groupBy('completed');
console.log(byCompleted);
var completed = new Backbone.Collection(byCompleted[true]);
console.log(completed.pluck('title'));