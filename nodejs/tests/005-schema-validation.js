const { MongoClient } = require("mongodb");
var NumberInt = require("mongodb").Int32;
var Double = require("mongodb").Double;

// Replace the uri string with your connection string.
const uri = "mongodb://root:Corso2024@52.178.220.25:27017/?tls=false";

const client = new MongoClient(uri);

async function run() {
  try {
    const db = client.db('db-schema-val');

    db.createCollection("contacts", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["phone"],
          properties: {
            phone: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            email: {
              bsonType: "string",
              pattern: "@mongodb\\.com$",
              description: "must be a string and end with '@mongodb.com'"
            }
          }
        }
      },
      validationAction: "error"
    })


    db.createCollection("contacts2", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["phone"],
          properties: {
            phone: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            email: {
              bsonType: "string",
              pattern: "@mongodb\\.com$",
              description: "must be a string and end with '@mongodb.com'"
            }
          }
        }
      },
      validationAction: "warn"
    })


    db.runCommand({
      collMod: "contacts3",
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["phone", "name"],
          properties: {
            phone: {
              bsonType: "string",
              description: "phone must be a string and is required"
            },
            name: {
              bsonType: "string",
              description: "name must be a string and is required"
            }
          }
        }
      },
      validationLevel: "strict"
    })


    db.runCommand({
      collMod: "contacts5",
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["phone", "name"],
          properties: {
            phone: {
              bsonType: "string",
              description: "phone must be a string and is required"
            },
            name: {
              bsonType: "string",
              description: "name must be a string and is required"
            }
          }
        }
      },
      validationLevel: "moderate"
    })

  } catch (error) {
    console.log(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);