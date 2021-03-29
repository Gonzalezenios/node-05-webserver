const http = require('http');

http.createServer((req, res) => {


    console.log(req);

    //res.writeHead(200, {'Content-Type': 'application/json'});

    /*const user = {
        id: 123,
        name: 'Enio'
    }
    res.write(JSON.stringify(user));*/

    res.setHeader('Conten-Disposition', 'attachment; filename=usuarios.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});
    res.write('id,name\n123,Enio\n456, Luisa');



    res.end();


}).listen(4000);
