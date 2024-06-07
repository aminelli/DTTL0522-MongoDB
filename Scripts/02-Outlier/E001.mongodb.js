use('E02-Outlier');

db.sales.insertOne(
  {
     "_id": 1,
     "title": "Invisible Cities",
     "year": 1972,
     "author": "Italo Calvino",
     "customers_purchased": [ "user00", "user01", "user02" ]
  }
)
