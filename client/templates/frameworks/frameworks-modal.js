Template.frameworksModal.helpers({
  framework: function() {
    var frameworkId = Session.get('selectedFrameworkId');
    
    if (typeof frameworkId !== "undefined") {
      var framework = Frameworks.findOne(frameworkId);
      return framework;
    } else {
      return {name:'', type:'', description:''}
    }
  }
});

Template.frameworksModal.events({
  'click #save': function(e) {
    e.preventDefault();
    
    var frameworkId = Session.get('selectedFrameworkId');
    var framework = {
      name: $('#frameworkName').val(),
      type: $('#frameworkType').val(),
      description: $('#frameworkDescription').val(),

    }

    if (!frameworkId) {
      Meteor.call('addFramework', framework, function(error, result) {
        if (error) {
          alert(error);
        }
      });
    } else {
      _.extend(framework, {id: frameworkId});
      Meteor.call('editFramework', framework, function(error, result) {
        if (error) {
          alert(error);
        }
      });
    }

    Modal.hide('frameworksModal');
  }
});