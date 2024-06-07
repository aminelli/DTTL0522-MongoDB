
use('E01-Bucket');

db.trades2
  .find( { "_id": /^123_/ } )
  .sort( { _id: 1 } )
  .limit(1);

  
  db.trades2
    .find( { "_id": /^123_/ } )
    .sort( { _id: 1 } )
    .skip(9)
    .limit(1)
  
