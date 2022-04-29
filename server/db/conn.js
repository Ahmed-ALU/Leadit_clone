const mongoose=require('mongoose')
const username = "mucious";
const password = "128mucious";
const cluster = "assignmentcluster.xelxi";
const dbname = "seenit";

mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      //useFindAndModify: false,
      useUnifiedTopology: true
    }
  );
const db=mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',()=>console.log('Connected to Database'))

module.exports=db