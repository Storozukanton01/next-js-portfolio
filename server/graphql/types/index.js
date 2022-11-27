const portfolioFields = `
  title: String
  company: String
  companyWebsite: String
  location: String
  jobTitle: String
  description: String
  days: String
  startDate: String
  endDate: String
`

exports.portfolioTypes = `
  type Portfolio {
    _id: String!
    ${portfolioFields}
  }

  input PortfolioInput {
    ${portfolioFields}
  }
`
