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
using ConsoleMongo01.Entities.Test01;

namespace ConsoleMongo01.Test
{
    public static class Test01
    {

        static string CONN_STRING = "mongodb://root:Corso2024@localhost:27017/?tls=false&retryWrites=false";

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

        public static void FindDocSync()
        {

            Console.WriteLine("START => FindDocSync");

            var dbName = "sample_restaurants";
            var collName = "restaurants";

            var client = new MongoClient(CONN_STRING);

            var db = client.GetDatabase(dbName);

            var collection = db.GetCollection<Restaurant>(collName);

            var filter = Builders<Restaurant>
                .Filter
                .Eq(r=> r.Name , "Brunos On The Boulevard");
                            

            var document = collection
                .Find(filter)
                .FirstOrDefault();

            Console.WriteLine(document);

            document = collection
                .AsQueryable()
                .Where(rec => rec.Name == "Regina Caterers")
                .FirstOrDefault();

            Console.WriteLine(document);


            Console.WriteLine("END => FirstConn");

        }

        public static async void FindDocAsync()
        {

            Console.WriteLine("START => FindDocSync");

            var dbName = "sample_restaurants";
            var collName = "restaurants";

            var client = new MongoClient(CONN_STRING);

            var db = client.GetDatabase(dbName);

            var collection = db.GetCollection<Restaurant>(collName);

            var filter = Builders<Restaurant>
                .Filter
                .Eq(r => r.Name, "Brunos On The Boulevard");


            var document = await collection
                .Find(filter)
                .FirstOrDefaultAsync();

            Console.WriteLine(document);

            document = await collection
                .AsQueryable()
                .Where(rec => rec.Name == "Regina Caterers")
                .FirstOrDefaultAsync();

            Console.WriteLine(document);


            Console.WriteLine("END => FirstConn");

        }

        static async Task Studio3T_Test()
        {
            // richiamo del metodo:  Test01.Studio3T_Test().Wait();

            IMongoClient client = new MongoClient(CONN_STRING);
            IMongoDatabase database = client.GetDatabase("sample_restaurants");
            IMongoCollection<BsonDocument> collection = database.GetCollection<BsonDocument>("restaurants");

            // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

            BsonDocument filter = new BsonDocument();
            
            using (var cursor = await collection.FindAsync(filter))
            {
                while (await cursor.MoveNextAsync())
                {
                    var batch = cursor.Current;
                    foreach (BsonDocument document in batch)
                    {
                        Console.WriteLine(document.ToJson());
                    }
                }
            }
        }

        public static async Task TestAggregation01()
        {

            var client = new MongoClient(CONN_STRING);
            var database = client.GetDatabase("sample_restaurants");
            IMongoCollection<BsonDocument> collection = database.GetCollection<BsonDocument>("restaurants");

            // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

            var options = new AggregateOptions()
            {
                AllowDiskUse = false
            };

            PipelineDefinition<BsonDocument, BsonDocument> pipeline = new BsonDocument[]
            {
                new BsonDocument(
                        "$group", 
                        new BsonDocument()
                        .Add("_id", "$cuisine")
                        .Add(
                            "count", 
                            
                            new BsonDocument()
                            .Add("$sum", 1)
                        ))
            };

            var cursor = await collection.AggregateAsync<BsonDocument>(pipeline, options);
            while (await cursor.MoveNextAsync())
            {
                var batch = cursor.Current;
                foreach (BsonDocument document in batch)
                {
                    Console.WriteLine(document.ToJson());
                }
            }
        }

        public static async Task TestAggregation02()
        {

            var client = new MongoClient(CONN_STRING);
            var database = client.GetDatabase("sample_restaurants");
            var collection = database.GetCollection<Restaurant>("restaurants");

            // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

            var options = new AggregateOptions()
            {
                AllowDiskUse = false
            };

            PipelineDefinition<Restaurant, CuisineCounter> pipeline = new BsonDocument[]
            {
                new BsonDocument(
                        "$group",
                        new BsonDocument()
                        .Add("_id", "$cuisine")
                        .Add(
                            "count",

                            new BsonDocument()
                            .Add("$sum", 1)
                        ))
            };

            var cursor = await collection.AggregateAsync(pipeline, options);
            while (await cursor.MoveNextAsync())
            {
                var batch = cursor.Current;
                foreach (CuisineCounter document in batch)
                {
                    Console.WriteLine(document.ToJson());
                }
            }
        }

        public static async Task TestAggregation03()
        {

            var client = new MongoClient(CONN_STRING);
            var database = client.GetDatabase("sample_restaurants");
            var collection = database.GetCollection<Restaurant>("restaurants");

            // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

            var options = new AggregateOptions()
            {
                AllowDiskUse = false
            };

            PipelineDefinition<Restaurant, CuisineCounter> pipeline = new BsonDocument[]
            {
                new BsonDocument(
                        "$match", 

                        new BsonDocument()
                        .Add("borough", "Brooklyn"))
                ,
                new BsonDocument(
                        "$group",
                        new BsonDocument()
                        .Add("_id", "$cuisine")
                        .Add(
                            "count",

                            new BsonDocument()
                            .Add("$sum", 1)
                        ))
            };

            var cursor = await collection.AggregateAsync(pipeline, options);
            while (await cursor.MoveNextAsync())
            {
                var batch = cursor.Current;
                foreach (CuisineCounter document in batch)
                {
                    Console.WriteLine(document.ToJson());
                }
            }
        }

        public static void TestTrans01()
        {

            var connString = "mongodb://docenteRootAdmin:Corso2024@localhost:27118,localhost:27117,localhost:27119/?tls=false";

            Console.WriteLine("START => TestTrans01");

            var dbName = "provadb01";
            var collNameBooks = "books";
            var collNameFilms = "films";

            var client = new MongoClient(connString);

            var db = client.GetDatabase(dbName);

            var collectionBooks = db.GetCollection<Book>(collNameBooks);
            var collectionFilms = db.GetCollection<Film>(collNameFilms);


            using (var session = client.StartSession()) {

                session.StartTransaction();

                try
                {

                    var book = new Book
                    {
                        Title = "Libero pensiero su mongodb",
                        Author = "Tony",
                        InStock = true
                    };

                    var film = new Film
                    {
                        Title = "Il Signore di mongodb",
                        Director = "Tony Minels",
                        InStock = true
                    };

                    collectionBooks.InsertOne(session, book);
                    // throw new Exception("Daniele Exception");
                    collectionFilms.InsertOne(session, film);

                    session.CommitTransaction();
                    
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Errore: " + ex.Message);
                    session.AbortTransaction();
                    return;
                }

            }



           Console.WriteLine("END => TestTrans01");

        }
    }

}
