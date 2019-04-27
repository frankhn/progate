if(process.env.NODE.env = "production") {
    module.exports =require('./prod');
}
module.exports =require('./dev');