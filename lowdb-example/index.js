const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const shortid = require('shortid')
const uuidv4 = require('uuid/v4');
//uuidv4(); // ⇨ '416ac246-e7ac-49ff-93b4-f7e94d997e6b'

// Set some defaults
db.defaults({ posts: [], user: {}, count: 0 })
  .write()

let id = uuidv4();

// Add a post
db.get('posts')
  .push({ id: id, title: `record for id: ${id}`})
  .write()

// Set a user using Lodash shorthand syntax
db.set('user.name', 'dabblelab')
  .write()

// Increment count
db.update('count', n => n + 1)
  .write()
