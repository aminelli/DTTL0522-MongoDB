
use('E01-Bucket');

const coll = db.getCollection('trades');

coll.insertMany(
    [
      {
        "ticker" : "MDB",
        "customerId": 123,
        "type" : "buy",
        "quantity" : 419,
        "date" : ISODate("2023-10-26T15:47:03.434Z")
      },
      {
        "ticker" : "MDB",
        "customerId": 123,
        "type" : "sell",
        "quantity" : 29,
        "date" : ISODate("2023-10-30T09:32:57.765Z")
      },
      {
        "ticker" : "GOOG",
        "customerId": 456,
        "type" : "buy",
        "quantity" : 50,
        "date" : ISODate("2023-10-31T11:16:02.120Z")
      }
    ]
  )
