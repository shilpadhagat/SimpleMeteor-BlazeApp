ModalHelper = {};

ModalHelper.openModalFor = function(frameworkId) {
  Session.set('selectedFrameworkId', frameworkId);
  Modal.show('frameworksModal');
}