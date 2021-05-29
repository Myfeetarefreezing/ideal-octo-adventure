const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://talmeiso:yHN7e8mCSkOaHVCj@cluster0.311nj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url, { useUnifiedTopology: true });

async function getFAQlist() {
  try {
    await client.connect();
    const db = client.db("assignment");
    const collection = db.collection("questions");
    const result = await collection.find().project({ _id: 0 }).toArray();
    return result;
  } catch (err) {
    console.log(err.stack);
    return err
  }
}

exports.getFAQlist = getFAQlist;
