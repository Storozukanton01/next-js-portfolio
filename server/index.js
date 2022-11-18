const express = require('express')
const next = require('next')
const graphqlHTTP = require('express-graphql');
const {buildSchema} = require('graphql');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const data = {
  portfolios: [
    {
      _id: '24525',
      title: 'Job in EPAM',
      company: 'EPAM',
      companyWebsite: 'www.google.com',
      location: 'Barcelona',
      jobTitle: 'Chef',
      description: 'doing smth',
      days: '45',
      startDate: '10/10/2010',
      endDate: '10/11/2010',
    },
    {
      _id: '24526',
      title: 'Job in USA',
      company: 'EPAM',
      companyWebsite: 'www.google.com',
      location: 'New York',
      jobTitle: 'Chef',
      description: 'doing smth',
      days: '45',
      startDate: '5/10/2010',
      endDate: '10/11/2010',
    },
    {
      _id: '24527',
      title: 'Job in UA',
      company: 'ProgramX',
      companyWebsite: 'www.google.com',
      location: 'Kyiv',
      jobTitle: 'Developer',
      description: 'doing smth',
      days: '45',
      startDate: '10/10/2010',
      endDate: '10/11/2017',
    },
  ]
}

app.prepare().then(() => {
  const server = express()
  const schema = buildSchema(`
    type Portfolio {
      _id: String!
      title: String
      company: String
      companyWebsite: String
      location: String
      jobTitle: String
      description: String
      days: String
      startDate: String
      endDate: String
    }

    type Query {
      hello: String
      portfolio(id: ID): Portfolio
      portfolios: [Portfolio]
    }
  `)

  const root = {
    hello: () => {
      return 'Hello world!'
    },
    portfolio: ({id}) => {
      const portfolio = data.portfolios.find(p => p._id === id)
      return portfolio;
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
