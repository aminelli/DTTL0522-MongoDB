use('E02-Outlier');

db.sales.insertOne(
  {
     "_id": 2,
     "title": "The Wooden Amulet",
     "year": 2023,
     "author": "Lesley Moreno",
     "has_extras": true
  }
)

db.sales_extra.insertOne(
  {
     "book_id": 2,
     "customers_purchased_extra": [ "user50", "user51", "user52", "user999" ]
  }
)
