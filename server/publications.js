Meteor.publish('frameworks', function() {
  return Frameworks.find();
});
