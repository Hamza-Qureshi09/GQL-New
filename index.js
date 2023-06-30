

const express = require('express')
const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const typeDefs = require('./schema/type_defs')
const resolvers = require('./schema/resolvers')
const app = express()
const Port = process.env.PORT || 5001;

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// middlewares
// app.disable('x-powered-by')
// // app.set('Cache-Control', '');
// app.use((req, res, next) => {
//     res.set('Access-Control-Expose-Headers', '*')
//     res.set('X-XSS-Protection', '1; mode=block')
//     res.set('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept,Authorization');
//     res.set('cross-origin-resource-policy', 'http://localhost:5173,https://gs10-frontend-hq.vercel.app');
//     next()
// })

app.listen(async () => {
    const { url } =await startStandaloneServer(server, {
        listen: { port: 4001 }
    })
    console.log(`express server is running on port ${Port}\nApollo Server is running on this url ${url}`);
})
