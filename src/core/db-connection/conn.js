const mongoose = require('mongoose');

async function main(){
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb://localhost:27017/music"
        );
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = main;
