//library file
//write fxns
function awesomeFxn(text){
    console.log('Hey! '+text+' This is an Awesome fxn.');
}

//exporting fxn
module.exports = {
    //all fxns to be imported
    awesomeFxn
}