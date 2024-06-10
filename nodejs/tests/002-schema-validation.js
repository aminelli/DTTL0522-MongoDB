const { MongoClient } = require("mongodb");
var NumberInt = require("mongodb").Int32;
var Double = require("mongodb").Double;

// Replace the uri string with your connection string.
const uri = "mongodb://root:Corso2024@52.178.220.25:27017/?tls=false";

const client = new MongoClient(uri);

async function run() {
  try {
    const db = client.db('db-schema-val');
 

    let exist = false;

    var collInfo = await db.listCollections({ name: 'students' }).next();
    console.log(collInfo);

    /*
    await db.listCollections(
      {
        name: "students"
      }) // filtro
      .next(function(err, collinfo) { // callback su next, trattasi di promise
          if (collinfo) {
            exist = true;
          }
      }
    );
    */

    const collections = await db.listCollections().toArray();
    console.log('Collections:');
    collections.forEach(collection => {
      console.log(collection.name);
      if (collection.name === "students") {
        exist = true;
      }
    });
    
    if (!collInfo) {
      db.createCollection("students", {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            title: "Student Object Validation",
            required: ["address", "major", "name", "year"],
            properties: {
              name: {
                bsonType: "string",
                description: "'name' must be a string and is required"
              },
              year: {
                bsonType: "int",
                minimum: 2017,
                maximum: 3017,
                description: "'year' must be an integer in [ 2017, 3017 ] and is required"
              },
              gpa: {
                bsonType: ["double"],
                description: "'gpa' must be a double if the field exists"
              }
            }
          }
        }
      })
    }

    const collStudents = db.collection("students");

    // Inserimentp di un documento non valido
    try {
      await collStudents.insertOne({
        name: "Alice",
        year: new NumberInt(2019),
        major: "History",
        gpa: new NumberInt(3),
        address: {
          city: "NYC",
          street: "33rd Street"
        }
      })
    } catch (error) {
      console.log(error)
    }

    // Inserimento di un documento valido
    try {
      await collStudents.insertOne({
        name: "Alice",
        year: new NumberInt(2019),
        major: "History",
        gpa: new Double(3.0),
        address: {
          city: "NYC",
          street: "33rd Street"
        }
      })
    } catch (error) {
      console.log(error)
    }

    // ???
    try {
      await collStudents.insertOne({
        name: "Alice",
        year: new NumberInt(2019),
        major: "History",
        gpa: new Double(3.0),
        address: {
          city: "NYC",
          street: "33rd Street",
          nr: "12A"
        }
      })
    } catch (error) {
      console.log(error)
    }


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);