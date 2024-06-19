use('dbprova');

// Creazione di una clustered collection
db.runCommand( {
  create: "products",
  clusteredIndex: { "key": { _id: 1 }, "unique": true, "name": "products clustered key" }
} )


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
  { _id: ISODate( "2022-03-18T12:50:00Z" ), "quantity": 1, "totalOrderPrice": 10 }
] )


db.orders.find( { _id: { $gt: ISODate( "2022-03-18T12:47:00.000Z" ) } } )

db.runCommand( { listCollections: 1 } )
