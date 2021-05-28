const fs = require ('fs')

fs.writeFile(__dirname+'/mytext.txt',"this is data " ,function(err){
    if(err) throw err

    console.log("THE FILE IS WRITTEN");
})
