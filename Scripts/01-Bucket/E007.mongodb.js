
use('E01-Bucket');


db.trades2.updateOne(
  { 
    "_id": /^123_/ 
  },
  {
    "$set" : {
      "history.$[].qty": 50
    }
  }
)
