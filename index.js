// start your server here
const server = require('./api/server');

const port = 5000;

server.listen(port, () => {
    console.log(`\n *** server listening on port ${port} *** \n`);
});