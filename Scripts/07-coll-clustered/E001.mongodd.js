use('dbprova');

// Creazione di una clustered collection
db.runCommand( {
  create: "products",
  clusteredIndex: { "key": { _id: 1 }, "unique": true, "name": "products clustered key" }
})


// Creazione di una clustered collection
db.createCollection(
  "stocks",
  { clusteredIndex: { "key": { _id: 1 }, "unique": true, "name": "stocks clustered key" } }
)



// Creazione di una clustered collection
db.createCollection(
  "orders",
  { clusteredIndex: { "key": { _id: 1 }, "unique": true, "name": "orders clustered key" } }
)


db.orders.insertMany( [
  { _id: ISODate( "2022-03-18T12:45:20Z" ), "quantity": 50, "totalOrderPrice": 500 },
  { _id: ISODate( "2022-03-18T12:47:00Z" ), "quantity": 5, "totalOrderPrice": 50 },
  { _id: ISODate( "2022-03-18T12:50:00Z" ), "quantity": 1, "totalOrderPrice": 10 },
])


db.orders.find( { _id: { $gt: ISODate( "2022-03-18T12:47:00.000Z" ) } } )

db.runCommand( { listCollections: 1 } )

sh.status()

// sh.enableSharding()
// sh.shardCollection()

// Shard collection con strategia hash
sh.shardCollection("dbprova.testshard", { _id : "hashed" } )

//
sh.shardCollection("dbprova.testshard", { _id : "hashed" } )

db.testshard.insertMany( [
  { _id: ISODate( "2022-03-18T12:45:20Z" ), "quantity": 50, "totalOrderPrice": 500 },
  { _id: ISODate( "2022-03-18T12:47:00Z" ), "quantity": 5, "totalOrderPrice": 50 },
  { _id: ISODate( "2022-03-18T12:50:00Z" ), "quantity": 1, "totalOrderPrice": 10 },
])

sh.enableSharding("dbprova")
sh.shardCollection("dbprova.testshard2", { _id : 1 } )
sh.splitAt("dbprova.testshard2", { _id : ISODate( "2022-01-01T00:00:00Z" ) } )
sh.splitAt("dbprova.testshard2", { _id : ISODate( "2023-01-01T00:00:00Z" ) } )
sh.splitAt("dbprova.testshard2", { _id : ISODate( "2024-01-01T00:00:00Z" ) } )
db.testshard2.insertMany( [
  { _id: ISODate( "2022-03-18T12:45:20Z" ), "quantity": 50, "totalOrderPrice": 500 },
  { _id: ISODate( "2023-03-18T12:47:00Z" ), "quantity": 5, "totalOrderPrice": 50 },
  { _id: ISODate( "2024-03-18T12:50:00Z" ), "quantity": 1, "totalOrderPrice": 10 },
])
db.testshard2.configureQueryAnalyzer({ mode: "full", samplesPerSecond: 10 })

db.testshard2.analyzeShardKey({ _id : 1 })

/*
[minKey, maxKey]

[minKey, "2022-01-01T00:00:00Z"] , ["2022-01-01T00:00:00Z", maxKey]

minKey, "2022-01-01T00:00:00Z"] , ["2022-01-01T00:00:00Z", "2023-03-18T12:47:00Z"], ["2023-03-18T12:47:00Z", maxKey]
*/

sh.enableSharding("dbprova2")
sh.shardCollection("dbprova2.airbnb", { "address.country_code" : 1 } )
sh.status()