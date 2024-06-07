
use('E01-Bucket');


db.trades2.updateOne(
  { 
    "_id": /^143_/,
     "count": { $lt: 10 } 
  },
  {
    "$set" : {
      "history": [
          {
            "type": "buy",
            "ticker": "MSFT",
            "qty": 50,
            "date": ISODate("2023-11-02T11:43:10")
          }
      ]
    }
  }
)
