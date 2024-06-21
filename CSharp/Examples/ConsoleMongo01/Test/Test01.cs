using MongoDB.Driver;
using MongoDB.Driver.Linq;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleMongo01.Test
{
    public static class Test01
    {

        static string CONN_STRING = "mongodb://root:Corso2024@localhost:27017/?tls=false";

        public static void FirstConn() {

            Console.WriteLine("START => FirstConn");

            var dbName   = "sample_mflix";
            var collName = "movies";

            var client = new MongoClient(CONN_STRING);

            var db = client.GetDatabase(dbName);

            var collection = db.GetCollection<BsonDocument>(collName);

            var filter = Builders<BsonDocument>
                .Filter
                .Eq("title", "The Saphead");

            var document = collection
                .Find(filter)
                .First();

            Console.WriteLine(document);


            Console.WriteLine("END => FirstConn");

        }

    }

}
