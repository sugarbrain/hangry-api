const mclient = require('mongodb').MongoClient;
const dburl = 'mongodb://hangry:hangry123@ds145951.mlab.com:45951/hangry-test';

module.exports.connect = function connect(callback) {
    mclient.connect(dburl, { useNewUrlParser: true }, function(err, conn){
        callback(err);
    });
};