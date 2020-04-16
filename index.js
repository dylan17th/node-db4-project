const server = require('./API/server.js');
const port = process.env.PORT || 5020;

server.listen(port , ()=> {
    console.log(`API is running on port ${port}`)
})