use('E02-Outlier');

db.sales.insertOne(
  {
     "_id": 4,
     "title": "Cristo si è fermato ad Eboli",
     "year": 2019,
     "author": "Tony",
     "has_extras": true
  }
)

db.sales_extra.insertMany(
  [
    {
      "book_id": 4,       
      "customers_purchased_extra": [ "user50", "user51", "user52", "user999" ],
      "info_extra" : "ciao mondo"
    }
  ]
)


