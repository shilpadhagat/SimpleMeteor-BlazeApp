// Fixture data
if (Frameworks.find().count() === 0) {
  Frameworks.insert({
      name: "Meteor",
      type: "Full-stack",
      description: "Open source platform for web, mobile, and desktop."
  });
  Frameworks.insert({
      name: "React",
      type: "Front-end",
      description: 'JavaScript library for data rendered as HTML.'
  });
  Frameworks.insert({
      name: "Angular",
      type: "Front-end",
      description: "development platform for building mobile and desktop web applications."
  });
}