use('E04-SchemaRev');

// Inserimento Polizza
db.currentPolicies.insertOne(
  {
     policyId: 1,
     customerName: "Michelle",   
     itemsInsured: ["golf clubs", "car"],
     dateSet: new Date(),
     revision: 1,
     schemaVer: 1
  }
)
