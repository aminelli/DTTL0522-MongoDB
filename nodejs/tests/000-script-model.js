const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://root:Corso2024@52.178.220.25:27017/?tls=false";

const client = new MongoClient(uri);

async function run() {
  try {
    const db = client.db('test_log');
   
   
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);