use('E04-SchemaRev');


db.createCollection( "log", 
  { 
    capped: true, 
    size: 100000 // byte dimension   0 < x < 1024^5 byte (1 PB); note: multipli di 256
  }
)

db.createCollection(
  "log2",
  {
     capped: true,
     size: 5242880, // max dim coll
     max: 5000      // max doc json in coll
  }
)

db.log.insertMany( [
  {
     message: "system start",
     type: "startup",
     time: 1711403508
  },
  {
     message: "user login attempt",
     type: "info",
     time: 1711403907
  },
  {
     message: "user login fail",
     type: "warning",
     time: 1711404209
  },
  {
     message: "user login success",
     type: "info",
     time: 1711404367
  },
  {
     message: "user logout",
     type: "info",
     time: 1711404555
  }
] )


db.log.isCapped()

db.log.find( { type: "info" } )

db.log.find().sort( { $natural: -1 } ).limit(3)


// Creazione di una collection non capped
db.createCollection("log3")



// conversione di una collection non capped in capped
db.runCommand(
  {
    convertToCapped: "log3",
    size: 1000000
  }
)

db.runCommand( {
  create: "products",
  clusteredIndex: { "key": { _id: 1 }, "unique": true, "name": "products clustered key" }
} )