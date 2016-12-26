Template.framework.events({
	'click #edit': function(e) {
    e.preventDefault();

    framework = $(e.target).closest('.framework')
    frameworkId = framework.attr('data-id')
    ModalHelper.openModalFor(frameworkId);
  },
  'click #delete': function(e) {
  	e.preventDefault();

  	Meteor.call('deleteFramework',this,function(error,result) {
  		if (error) {
  			alert(error);
  		}
  	});
  }
});