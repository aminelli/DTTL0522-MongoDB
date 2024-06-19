rs.initiate({ _id: "repMongoCorso", members: [ { _id: 0, host: "mongo1:27117" }, { _id: 1, host: "mongo2:27118" }, { _id: 2, host: "mongo3:27119" } ]});


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