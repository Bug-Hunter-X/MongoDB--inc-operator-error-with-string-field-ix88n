# MongoDB $inc Operator Error with String Field

This repository demonstrates a common error encountered when using the MongoDB `$inc` operator with a string field. The `$inc` operator is used to increment a numeric field by a specified value. Attempting to use it with a string field results in an error.

## Bug
The bug lies in the incorrect usage of the `$inc` operator in the following MongoDB query:

```javascript
db.collection.updateOne({name: "John"}, {$inc: {"age": "1"}});
```

Here, the `age` field is treated as a string, causing the error.

## Solution
The solution involves ensuring that the field being incremented is of numeric type (int or double).  If the field is initially a string, it must be converted to a number before applying the `$inc` operation.

## How to reproduce
1. Create a MongoDB collection.
2. Insert a document with a string `age` field:
   ```javascript
   db.collection.insertOne({name: "John", age: "25"});
   ```
3. Run the buggy query from the bug section.  An error will be thrown.
4.  Modify the collection to correctly type the `age` field. Then use the updated query.
