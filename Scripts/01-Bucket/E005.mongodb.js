
use('E01-Bucket');


db.trades2.updateOne(
  { 
    "_id": /^143_/,
     "count": { $lt: 10 } 
  },
  {
     "$push": {
        "history": {
          "type": "buy",
          "ticker": "MSFT",
          "qty": 42,
          "date": ISODate("2023-11-02T11:43:10")
        }
   },
   "$inc": { "count": 1 },
   "$setOnInsert": { "_id": "143_1698939791", "customerId": 143 }
  },
  { upsert: true }
)
