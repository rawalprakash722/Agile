const mongoose= require('mongoose');
const connectDB = 'mongodb+srv://ujjwal:btcROmtkt3U4eYvj@cluster0.fupik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

beforeAll(async() => {
    mongoose.connect(connectDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then((db) => {
        console.log('Connected ...');
    }).catch((err) => {
        console.error(err);
        process.exit(1);
    })
})
//Tear down
afterAll(async() => {
    console.log('Disconnecting ...');
    // await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
})