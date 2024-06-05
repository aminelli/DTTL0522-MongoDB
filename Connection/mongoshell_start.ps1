$connRemote = "mongodb://root:Corso2024@52.178.220.25:27017/?tls=false"
#$connLocal = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.6"

$conn = $connRemote

mongosh $conn;
# echo "MDB_CONNECTION_STRING= $connRemote"
#[System.Environment]::SetEnvironmentVariable('MDB_CONNECTION_STRING;',$conn)