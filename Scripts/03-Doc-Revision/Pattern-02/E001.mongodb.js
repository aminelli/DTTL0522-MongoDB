use('E03-Versioning2');

// Inserimento Polizza
db.currentPolicies.insertOne(
  {
     policyId: 1,
     customerName: "Michelle",
     revision: 1,
     itemsInsured: ["golf clubs", "car"],
     dateSet: new Date()
  }
)


db.currentPolicies.aggregate( [
  {
     $match: { policyId: 1 }
  },
  {
     $set: { _id: new ObjectId() }
  },
  {
     $merge: {
        into: { db: "E03-Versioning2_history", coll: "policyRevisions" },
        on: "_id",
        whenNotMatched: "insert"
     }
  }
] )
