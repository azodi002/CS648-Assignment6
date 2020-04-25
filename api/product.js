const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');


async function get(_, {id}) {
  const db = getDb();
  const product = await db.collection('products').findOne({ id });
  return product;
}

async function list() {
  const db = getDb();
  const product = await db.collection('products').find({}).toArray();
  return product;
}

async function update(_, { id, changes }) {
  const db = getDb();
  if (changes.category || changes.product_name || changes.price || changes.image_path) {
    const product = await db.collection('products').findOne({ id });
    Object.assign(product, changes);
  }
  await db.collection('products').updateOne({ id }, { $set: changes });
  const savedProduct = await db.collection('products').findOne({ id });
  return savedProduct;
}

async function add(_, { product }) {
  const db = getDb();

  const newProduct = Object.assign({}, product);
  newProduct.created = new Date();
  newProduct.id = await getNextSequence('products');

  const result = await db.collection('products').insertOne(newProduct);
  const savedProduct = await db.collection('products')
    .findOne({ _id: result.insertedId });
  return savedProduct;
}

async function remove(_, { id }) {
  const db = getDb();
  const product = await db.collection('products').findOne({ id });
  if (!product) return false;

  result = await db.collection('products').removeOne({ id });
  return true;
}


module.exports = { list, add, get, update, remove, };