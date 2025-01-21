```javascript
// Correct usage of $inc operator with a numeric field
db.collection.updateOne({name: "John"}, {$inc: {age: 1}});

// Alternatively, if age is initially a string, convert it to a number before applying $inc
db.collection.updateMany({}, [{$set: {age: { $toInt: "$age"}}}, {$inc: {age: 1}}]);
```