const mongoose = require('mongoose');
const dbConnect = () => {
    const url = 'mongodb+srv://dsubhasis934:Dsubho2020@cluster0.vyye0go.mongodb.net/register?retryWrites=true&w=majority'
    mongoose.connect(url)
        .then(resp => { console.log("connected") })
        .catch(cat => console.log(cat.message));
}
module.exports = dbConnect
