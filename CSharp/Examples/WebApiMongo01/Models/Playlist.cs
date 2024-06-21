﻿using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace WebApiMongo01.Models
{
    public class Playlist
    {

        [BsonId]
        [BsonRepresentation(BsonType.String)]
        public string? Id { get; set; }

        public string username { get; set; } = null!;

        [BsonElement("items")]
        [JsonPropertyName("items")]
        public List<string> moviesIds { get; set; } = null!;


    }
}
