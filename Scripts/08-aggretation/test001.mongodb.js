use('dbprova');

db = db.getSiblingDB("sample_restaurants");
db.getCollection("restaurants").aggregate(
    [
        {
            "$group" : {
                "_id" : "$cuisine",
                "count" : {
                    "$sum" : NumberInt(1)
                }
            }
        }
    ], 
    {
        "allowDiskUse" : false
    }
);
