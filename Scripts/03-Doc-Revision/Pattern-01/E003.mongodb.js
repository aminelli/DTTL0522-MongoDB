use('E03-Versioning');

// Aggiornamento Polizza: rev 2

// Recupero polizza rev 2
const doc = db.currentPolicies.findOne({ policyId: 1 });

doc._id = new ObjectId()
// Salvo l'ultima rev nello storico
db.policyRevisions.insertOne(doc)

// Aggiorno l'ultima rev ufficiale con i nuovi dati incrementando la rev
db.currentPolicies.updateOne(
  { policyId: 1 },
  {
     $push: {
        itemsInsured: "bike"
     },
     $inc: {
        revision: 1
     },
     $currentDate: {
        dateSet: true
     }
  }
)
