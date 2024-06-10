const { MongoClient } = require("mongodb");
var NumberInt = require("mongodb").Int32;
var Double = require("mongodb").Double;

// Replace the uri string with your connection string.
const uri = "mongodb://root:Corso2024@52.178.220.25:27017/?tls=false";

const client = new MongoClient(uri);

async function run() {
  try {
    const db = client.db('db-schema-val');

    await db.createCollection("users", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["username", "password"],
          properties: {
            username: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            password: {
              bsonType: "string",
              minLength: 8,
              description: "must be a string at least 8 characters long, and is required"
            }
          }
        }
      }
    })

    const coll = await db.collection("users");
    await coll.insertOne(
      {
        "username" : "pluto",
        "password": "01234567"
      }
    )
   

    db.command({
      collMod: "users",
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["username", "password"],
          properties: {
            username: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            password: {
              bsonType: "string",
              minLength: 12,
              description: "must be a string of at least 12 characters, and is required"
            }
          }
        }
      }
    })


    await coll.insertOne(
      {
        "username" : "aminelli",
        "password": "012345678901"
      }
    )

    db.command({
      collMod: "users",
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["username", "password"],
          properties: {
            username: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            password: {
              bsonType: "string",
              minLength: 6,
              maxLength: 10,
              description: "must be a string of at least 12 characters, and is required"
            }
          }
        }
      }
    })

    await coll.insertOne(
      {
        "username" : "pippo2",
        "password": "01234567"
      }
    )

  } catch (error) {
    console.log(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);