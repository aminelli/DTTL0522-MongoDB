
use('E01-Bucket');


db.trades2.updateOne(
  { 
    "_id": /^123_/,
    "history.type": "sell" 
  },
  {
    "$set" : {
      "history.$.qty": 150
    }
  }
)
