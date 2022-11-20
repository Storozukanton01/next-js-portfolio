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
      companyWebsite: 'https://www.google.com',
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

exports.portfolioQueries = {
  hello: () => {
    return 'Hello world!'
  },
  portfolio: (root, {id}) => {
    const portfolio = data.portfolios.find(p => p._id === id)
    return portfolio;
  },
  portfolios: () => {
    return data.portfolios
  }
}

exports.portfolioMutations = {
  createPortfolio: (root, {input}) => {
    const _id = require('crypto').randomBytes(10).toString('hex');
    const newPortfolio = {...input};
    newPortfolio._id = _id;
    data.portfolios.push(newPortfolio);
    return newPortfolio;
  }
}
