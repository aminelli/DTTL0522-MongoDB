
use('E01-Bucket');

db.trades2
  .find( { "_id": /^123_/ } )
  .sort( { _id: 1 } )
  .limit(1);
