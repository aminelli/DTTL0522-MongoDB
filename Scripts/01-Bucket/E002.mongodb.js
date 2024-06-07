
use('E01-Bucket');

const coll = db.getCollection('trades2');

coll.insertMany(
  [
    {
      "_id": "123_1698349623",
      "customerId": 123,
      "count": 2,
      "history": [
        {
          "type": "buy",
          "ticker": "MDB",
          "qty": 419,
          "date": ISODate("2023-10-26T15:47:03.434Z")
        },
        {
          "type": "sell",
          "ticker": "MDB",
          "qty": 29,
          "date": ISODate("2023-10-30T09:32:57.765Z")
        }
      ]
    },
    {
      "_id": "456_1698765362",
      "customerId": 456,
      "count": 1,
      "history": [
        {
          "type" : "buy",
          "ticker" : "GOOG",
          "quantity" : 50,
          "date" : ISODate("2023-10-31T11:16:02.120Z")
        }
      ]
    },
  ]
)