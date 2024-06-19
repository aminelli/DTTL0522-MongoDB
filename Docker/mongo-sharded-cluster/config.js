/*
rs.initiate({ _id: "rep-sh01", members: [ 
    { _id: 0, host: "mongo-sh01-01:28017" }, 
    { _id: 1, host: "mongo-sh01-02:28018" }, 
    { _id: 2, host: "mongo-sh01-03:28019" } ]});

rs.initiate({ _id: "rep-sh02", members: [ 
    { _id: 0, host: "mongo-sh02-01:28117" }, 
    { _id: 1, host: "mongo-sh02-02:28118" }, 
    { _id: 2, host: "mongo-sh02-03:28119" } ]});
*/
rs.initiate({ _id: "rep-sh01", members: [{ _id: 0, host: "mongo-sh01-01:28017" }, { _id: 1, host: "mongo-sh01-02:28018" }, { _id: 2, host: "mongo-sh01-03:28019" } ]});

rs.initiate({ _id: "rep-sh02", members: [{ _id: 0, host: "mongo-sh02-01:28117" }, { _id: 1, host: "mongo-sh02-02:28118" }, { _id: 2, host: "mongo-sh02-03:28119" } ]});




rs.initiate({ _id: "repMongoCorso", members: [ { _id: 0, host: "mongo1:27117" }, { _id: 1, host: "mongo2:27118" }, { _id: 2, host: "mongo3:27119" } ]});

rs.initiate({ 
    _id: "repMongoCorso", 
    members: [{ 
        _id: 0, 
        host: "mongo1:27117",
        priority: 1 
    }, { 
        _id: 1, 
        host: "mongo2:27118",
        priority: 1
    }, { 
        _id: 2, 
        host: "mongo3:27119",
        priority: 0,
        hidden : true,
        // arbiterOnly : true,
    }]});

    rs.add({ _id: 3,  host: "mongo4:27120", priority: 0})

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