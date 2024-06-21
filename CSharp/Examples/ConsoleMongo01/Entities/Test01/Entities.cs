﻿using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Bson.Serialization.Attributes;
 
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace ConsoleMongo01.Entities.Test01
{

    public class Restaurant {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("restaurant_id")]
        public string RestaurantId { get; set; }


        [BsonElement("cuisine")]
        [BsonRepresentation(BsonType.String)]
        public string Cuisine { get; set; }

        [BsonElement("borough")]
        public string Borough { get; set; }

        [BsonElement("grades")]
        public List<GradeEntity> Grades { get; set; }

        [BsonElement("address")]
        public Address Address { get; set; }

        public override string ToString()
        {
            //return "Restaurant: " + Name;
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }
    }


    public class Address
    {
        [BsonElement("building")]
        public string Building { get; set; }

        [BsonElement("coord")]
        public double[] Coordinates { get; set; }

        [BsonElement("street")]
        public string Street { get; set; }

        [BsonElement("zipcode")]
        public string Zipcode { get; set; }
    }


    public class GradeEntity
    {
        [BsonElement("date")]
        public DateTime Date { get; set; }

        [BsonElement("grade")]
        public string Grade { get; set; }

        [BsonElement("score")]
        public float? Score { get; set; }
    }

    public class CuisineCounter
    {
        [BsonId]
        [BsonRepresentation(BsonType.String)]
        public string Id { get; set; }

        [BsonElement("count")]
        public int? Count { get; set; }


    }


    public class Book {
        public string Title { get; set; }
        public string Author { get; set; }
        public bool InStock { get; set; }
    }

    public class Film
    {
        public string Title { get; set; }
        public string Director { get; set; }
        public bool InStock { get; set; }
    }

}