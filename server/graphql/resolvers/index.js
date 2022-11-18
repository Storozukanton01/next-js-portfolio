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

exports.portfolioResolvers = {
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
