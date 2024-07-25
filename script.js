const http = require('http');
const url = require('url');

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    // Extract the numbers from the query parameters
    const num1 = parseFloat(query.a);
    const num2 = parseFloat(query.b);

    // Initialize the result
    let result;

    // Perform the operation based on the pathname
    switch (pathname) {
        case '/add':
            result = num1 + num2;
            break;
        case '/subtract':
            result = num1 - num2;
            break;
        case '/multiply':
            result = num1 * num2;
            break;
        case '/divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Error: Invalid operation';
            break;
    }

    // Send the result back to the client

    res.end(result.toString());
});

// Start the server on port 3000
server.listen(3002, () => {
    console.log('Server is running on http://localhost:3002');
});
