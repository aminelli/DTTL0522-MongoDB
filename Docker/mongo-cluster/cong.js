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