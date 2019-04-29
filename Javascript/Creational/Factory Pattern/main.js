// Factory Pattern usage

var Task = require('./task');
var repoFactory = require('./repositoryFactory');

var task1 = new Task(repoFactory.task.get(1));
var task2 = new Task(repoFactory.task.get(2));

var user = repoFactory.user.get(1);

task1.user = user;

//console.log(task1);
task1.save();
