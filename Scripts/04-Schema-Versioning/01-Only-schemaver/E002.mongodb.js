use('E04-SchemaRev');

// Inserimento Polizza
db.currentPolicies.insertOne(
  {
     policyId: 1,
     customerName: "Antonio",   
     itemsInsured: ["golf clubs", "car"],
     dateSet: new Date(),
     address: {
        street: "via vivaldi",
        nr: "12",
        cap: "20100"
     },
     revision: 1,
     schemaVer: 2
  }
)
