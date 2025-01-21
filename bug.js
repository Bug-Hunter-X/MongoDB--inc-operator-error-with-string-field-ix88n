```javascript
// Incorrect usage of $inc operator with a string field
db.collection.updateOne({name: "John"}, {$inc: {"age": "1"}});
```