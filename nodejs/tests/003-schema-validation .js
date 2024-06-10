const { MongoClient } = require("mongodb");
var NumberInt = require("mongodb").Int32;
var Double = require("mongodb").Double;

// Replace the uri string with your connection string.
const uri = "mongodb://root:Corso2024@52.178.220.25:27017/?tls=false";

const client = new MongoClient(uri);

async function run() {
  try {
    const db = client.db('db-schema-val');

    db.createCollection("sales", {
      validator: {
        $and: [
          // Validation with query operators
          {
            $expr: {
              $lt: ["$lineItems.discountedPrice", "$lineItems.price"]
            }
          },
          // Validation with JSON Schema
          {
            $jsonSchema: {
              properties: {
                items: { "bsonType": "array" }
              }
            }
          }
        ]
      }
    }
    )


    db.createCollection("shipping", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          title: "Shipping Country Validation",
          properties: {
            country: {
              enum: ["France", "United Kingdom", "United States"],
              description: "Must be either France, United Kingdom, or United States"
            }
          }
        }
      }
    })


    db.createCollection("store",
      {
        validator:
        {
          $jsonSchema: {
            "properties": {
              "storeLocation": { "bsonType": ["null", "string"] }
            }
          }
        }
      }
    )

    // totalWithVAT = total * (1 + VAT)
    db.createCollection( "orders",
      {
         validator: {
            $expr:
               {
                  $eq: [
                     "$totalWithVAT",
                     { $multiply: [ "$total", { $sum:[ 1, "$VAT" ] } ] }
                  ]
               }
         }
      }
   )

   /*
   {
   total: NumberDecimal("141"),
   VAT: NumberDecimal("0.20"),
   totalWithVAT: NumberDecimal("169")
} 
   */

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);