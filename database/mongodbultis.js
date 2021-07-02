const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://petsUser:juanjofc@cluster0.bifo3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(uri, {useNewUrlparser: true, userUnifiedTopology: true});

let pets;

function connect(callback) {
    client.connect((err) => {
    console.log('Mongo succesfuly connected');
    pets = client.db(Pets).collection('pets');
    return callback(err);
    });
}

function disconnect(callback) {
    client.close();
    callback();
}

function getPetscollections() {
    return pets;
}

module.exports = {
    connect,
    disconnect,
    getPetscollections,
};