use('E04-SchemaRev2');

// Inserimento Polizza
db.currentPolicies.insertOne(
  {
     policyId: 1,
     customerName: "Tony",   
     dateSet: new Date(),
     address: {
      street: "via vivaldi",
      nr: "12",
      cap: "20100"
    },
     revision: 1,
     schemaType: "PolVita",
     schemaVer: 2
  }
)


// Inserimento Polizza
db.currentPolicies.insertOne(
  {
     policyId: 1,
     customerName: "Tony",   
     dateSet: new Date(),
     address: {
      street: "via vivaldi",
      nr: "12",
      cap: "20100"
    },
    contact : {
      fax: "009392",
      phone: "1231231212"
    },
     revision: 1,
     schemaType: "PolVita",
     schemaVer: 3
  }
)

