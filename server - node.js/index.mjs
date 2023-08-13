import http from 'http';

const host = 'localhost';
const port = 8000;


const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        // When json is uploaded, we receive it as buffer. So we need to add it to the variable we called "body"
        let body = ''

        req.on('data', chunk => {
            body += chunk
        })

        req.on('close', () => {
            console.log(body)
        })

        // Respond is a must
        res.writeHead(201) // 201 is a success status code. 200 - successful GET, 201 - successful POST 
        res.end('ok')
    } else {
        res.writeHead(200)
        res.end('hi')
    }
})

server.listen(port, host, () => {
    console.log(`Server on ${host}:${port}`)
})