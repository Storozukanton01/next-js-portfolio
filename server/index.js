const express = require('express')
const next = require('next')
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const data = {
  portfolios: [
    {
      _id: '24525',
      title: 'Job in USA',
      content: 'contentt',
      jobTitle: 'Chef',
      daysOfExperience: 100,
      isCurrentlyEmployed: false,
    },
    {
      _id: '24526',
      title: 'Job in Barcelona',
      content: 'contentt',
      jobTitle: 'Chef',
      daysOfExperience: 100,
      isCurrentlyEmployed: false,
    },
    {
      _id: '24527',
      title: 'Job in UA',
      content: 'contentt',
      jobTitle: 'Chef',
      daysOfExperience: 100,
      isCurrentlyEmployed: false,
    },
  ]
}

app.prepare().then(() => {
  const server = express()
  const schema = buildSchema(`
    type Portfolio {
      _id: ID
      title: String!
      content: String
      jobTitle: String
      daysOfExperience: Int
      isCurrentlyEmployed: Boolean
    }

    type Query {
      hello: String
      portfolio: Portfolio
      portfolios: [Portfolio]
    }
  `)

  const root = {
    hello: () => {
      return 'Hello world!'
    },
    portfolio: () => {
      return data.portfolios[0]
    },
    portfolios: () => {
      return data.portfolios
    }
  }

  server.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  }));

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
