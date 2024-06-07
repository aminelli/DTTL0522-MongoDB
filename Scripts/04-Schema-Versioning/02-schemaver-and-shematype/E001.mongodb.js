use('E04-SchemaRev2');

// Inserimento Polizza
db.currentPolicies.insertOne(
  {
     policyId: 1,
     customerName: "Tony",   
     dateSet: new Date(),
     revision: 1,
     schemaType: "PolVita",
     schemaVer: 1
  }
)

// Inserimento Polizza
db.currentPolicies.insertOne(
  {
     policyId: 2,
     firstName: "Michelle",
     lastName: "Non so" ,    
     dateSet: new Date(),
     revision: 1,
     schemaType: "PolAuto",
     schemaVer: 1
  }
)


