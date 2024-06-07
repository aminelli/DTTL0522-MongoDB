use('E03-Versioning');

// Aggiornamento Polizza: rev 1

// Recupero polizza
const doc = db.currentPolicies.findOne({ policyId: 1 });

// Salvo l'ultima rev nello storico
db.policyRevisions.insertOne(doc)

// Aggiorno l'ultima rev ufficiale con i nuovi dati incrementando la rev
db.currentPolicies.updateOne(
  { policyId: 1 },
  {
     $push: {
        itemsInsured: "casco"
     },
     $inc: {
        revision: 1
     },
     $currentDate: {
        dateSet: true
     }
  }
)
