Meteor.publish('frameworks', function() {
  return Frameworks.find();
});

Meteor.publish( 'frameworks', function( search ) {
  check( search, Match.OneOf( String, null, undefined ) );

  let query      = {},
      projection = { limit: 10, sort: { name: 1 } };

  if ( search ) {
    let regex = new RegExp( search, 'i' );

    query = {
      $or: [
        { name: regex },
        { type: regex },
        { description: regex }
      ]
    };

    projection.limit = 100;
  }

  return Frameworks.find( query, projection );
});