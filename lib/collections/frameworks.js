Frameworks = new Mongo.Collection('frameworks');

Meteor.methods({
	editFramework: function(framework) {
    Frameworks.update(framework.id, {$set: {
      name: framework.name,
      type: framework.type,
      description: framework.description

    }});
    console.log(framework);
  },
	addFramework: function(framework) {
    check(framework.name, String);
    check(framework.type, String);
    check(framework.description,String);

    _.extend(framework);
    Frameworks.insert(framework);
    console.log(framework);
  },
  deleteFramework: function(framework) {
    Frameworks.remove(framework);
    console.log(framework);
  }
});