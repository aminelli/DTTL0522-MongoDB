use('E03-Versioning');

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
