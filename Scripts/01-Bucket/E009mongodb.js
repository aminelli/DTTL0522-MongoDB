
use('E01-Bucket');


db.inventory.insertMany([
        { _id: 1, item: "product A", tags: [ "electronics", "camera" ] },
        { _id: 2, item: "product B", tags: [ "electronics", "pc" ] },
        { _id: 3, item: "product C", tags: [ "electronics", "mouse" ] }
    ]
)

db.inventory.updateOne(
    { _id: 1 },
    { $addToSet: { tags: "camera" } }
)

db.inventory.updateOne(
    { _id: 1 },
    { $addToSet: { tags: "accessories" } }
)

db.inventory.updateOne(
    { _id: 2 },
    { $addToSet: { tags: { $each: [ "camera", "electronics", "accessories","canon","other" ] } } }
)