const database = require("mongoose");
const is_heroku = process.env.IS_HEROKU || false;
const databaseName = "lab_example"
const herokuURI ="mongodb+srv://theMongoAdmin:accidentalLoginSteps@cluster0.ybemo.mongodb.net/"+databaseName+"?retryWrites=true&w=majority"
const localURI ="mongodb+srv://theMongoAdmin:accidentalLoginSteps@cluster0.ybemo.mongodb.net/lab_example?retryWrites=true&w=majority"
if (is_heroku) {
database.connect(herokuURI, {useNewUrlParser: true, useUnifiedTopology: true});
}
else {
database.connect(localURI, {useNewUrlParser: true, useUnifiedTopology: true});
}