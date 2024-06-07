use('E03-Versioning2');

// Aggiorno l'ultima rev ufficiale con i nuovi dati incrementando la rev
db.currentPolicies.updateOne(
  { policyId: 1 },
  {
     $push: {
        itemsInsured: "mouse"
     },
     $inc: {
        revision: 1
     },
     $currentDate: {
        dateSet: true
     }
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