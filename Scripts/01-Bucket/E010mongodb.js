
use('E01-Bucket');


db.inventory2.insertMany([
        { _id: 1, item: "product A", tags: [ "electronics", "camera" ] },
        { _id: 2, item: "product B", tags: [ "electronics", "pc" ] },
        { _id: 3, item: "product C", tags: [ "electronics", "mouse" ] }
    ]
)

db.inventory2.updateOne(
    { _id: 1 },
    { $push: { tags: "camera" } }
)

db.inventory2.updateOne(
    { _id: 1 },
    { $push: { tags: "accessories" } }
)

db.inventory2.updateOne(
    { _id: 2 },
    { $push: { tags: { $each: [ "camera", "electronics", "accessories","canon","other" ] } } }
)