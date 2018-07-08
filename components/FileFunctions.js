var csvFilePath = "./public/2018-vt-primary.csv";
var path = require('path');

console.log(path.resolve(__dirname));
console.log(path.resolve(csvFilePath));
var csv = require('csvtojson');

var Candidate = require('./db/CandidateSchema');

var uidGenerator = require('node-unique-id-generator');

function FileFunctions(){}

FileFunctions.prototype.csvToMongo = function(){
    csv()
        .fromFile(path.resolve(csvFilePath))
        .on('error',(err)=>{
            console.log(err)
        })
        .then((jsonObj) => {
            var candidateObj = {};

            for(var indx = 1; indx < jsonObj.length; indx++){
                candidateObj.contest = jsonObj[indx].field1;
                candidateObj.district = jsonObj[indx].field2;
                candidateObj.name = jsonObj[indx].field3;
                candidateObj.residence = jsonObj[indx].field4;
                candidateObj.party = jsonObj[indx].field5;
                candidateObj.address = jsonObj[indx].field6;
                candidateObj.city = jsonObj[indx].field7;
                candidateObj.state = jsonObj[indx].field8;
                candidateObj.zip = jsonObj[indx].field9;
                candidateObj.dayPhone = jsonObj[indx].field10;
                candidateObj.evePhone = jsonObj[indx].field11;
                candidateObj.email = jsonObj[indx].field12;
                candidateObj.website = jsonObj[indx].field13;
                candidateObj.financial = jsonObj[indx].field14;
                candidateObj["1040"] = jsonObj[indx].field15;

                console.log(candidateObj);
                var query = {"candidateId": uidGenerator.generateGUID()}
                Candidate.findOneAndUpdate(query, candidateObj, {upsert:true}, function(error){
                   if(error){
                       console.log("Problem with entry couldn't save to DB. Entry: ", candidateObj);
                   }
                });
            }
            console.log("DB populated.");

        });
        
};

module.exports = FileFunctions;