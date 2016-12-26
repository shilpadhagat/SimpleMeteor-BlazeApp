Template.frameworks.helpers({
  frameworks: function() {
    return Frameworks.find({}, { sort: {name: 1}});
  }
});

Template.frameworks.events({
  'click #add': function(e) {
    e.preventDefault();

    ModalHelper.openModalFor(null);
    }
});