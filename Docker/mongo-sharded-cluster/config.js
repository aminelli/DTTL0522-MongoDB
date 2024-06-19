/*
rs.initiate({ _id: "rep-sh01", members: [ 
    { _id: 0, host: "mongo-sh01-01:28017" }, 
    { _id: 1, host: "mongo-sh01-02:28018" }, 
    { _id: 2, host: "mongo-sh01-03:28019" } ]});

rs.initiate({ _id: "rep-sh02", members: [ 
    { _id: 0, host: "mongo-sh02-01:28117" }, 
    { _id: 1, host: "mongo-sh02-02:28118" }, 
    { _id: 2, host: "mongo-sh02-03:28119" } ]});

rs.initiate({ _id: "rep-cs", members: [ 
    { _id: 0, host: "mongo-cs-01:28007" }, 
    { _id: 1, host: "mongo-cs-02:28008" }, 
    { _id: 2, host: "mongo-cs-03:28009" } ]});
*/

// INIZIALIZAZIONE REPLICA SET rep-sh01
rs.initiate({ _id: "rep-sh01", members: [{ _id: 0, host: "mongo-sh01-01:28017" }, { _id: 1, host: "mongo-sh01-02:28018" }, { _id: 2, host: "mongo-sh01-03:28019" } ]});

// INIZIALIZAZIONE REPLICA SET rep-sh02
rs.initiate({ _id: "rep-sh02", members: [{ _id: 0, host: "mongo-sh02-01:28117" }, { _id: 1, host: "mongo-sh02-02:28118" }, { _id: 2, host: "mongo-sh02-03:28119" } ]});

// INIZIALIZAZIONE REPLICA SET rep-cs
rs.initiate({ _id: "rep-cs", members: [ { _id: 0, host: "mongo-cs-01:28007" }, { _id: 1, host: "mongo-cs-02:28008" }, { _id: 2, host: "mongo-cs-03:28009" } ]});








use admin

// usr: docente
// pwd: Corso2024
db.createUser({user: "docenteAdmin",pwd: "Corso2024",roles: [{ role: "userAdminAnyDatabase", db: "admin" }]});
db.createUser({user: "docenteRootAdmin", pwd: "Corso2024", roles: [{ role: "root", db: "admin" }]});

db.createUser({
    user: "docenteAdmin",
    pwd: "Corso2024",
    roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
});

db.createUser({
    user: "docenteRootAdmin",
    pwd: "Corso2024",
    roles: [{ role: "root", db: "admin" }]
});