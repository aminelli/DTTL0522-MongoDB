using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using WebApiMongo01.Models;

namespace WebApiMongo01.Services
{
    public class MongoDBServices
    {

        private readonly IMongoCollection<Playlist> _collection;

        public MongoDBServices(IOptions<MongoDBSettings> mongoDBSettings) {

            var client = new MongoClient(mongoDBSettings.Value.ConnectionURI);
            var database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
            _collection = database.GetCollection<Playlist>(mongoDBSettings.Value.CollectionName);
        }


        public async Task<List<Playlist>> GetAsync() {
            return await _collection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task CreateAsync(Playlist rec) {
            await _collection.InsertOneAsync(rec);
            return;
        }

        public async Task DeleteAsync(string id) {
            var filter = Builders<Playlist>.Filter.Eq("Id", id);
            await _collection.DeleteOneAsync(filter);
        }

        public async Task<ReplaceOneResult> UpdateAsync(string id, Playlist rec)
        {
            var filter = Builders<Playlist>.Filter.Eq("Id", id);
            return await _collection.ReplaceOneAsync(s => s.Id == id, rec);
        }

        public async Task AddMovieToPlaylistAsync(string id, string movieId) {
            FilterDefinition<Playlist> filter = Builders<Playlist>
                .Filter
                .Eq("Id", id);

            UpdateDefinition<Playlist> update = Builders<Playlist>
                .Update
                .AddToSet("moviesIds", movieId);

            await _collection.UpdateOneAsync(filter, update);

        }



    }

}
