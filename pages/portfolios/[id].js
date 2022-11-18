import axios from 'axios';

const fetchPortfoliosById = (id) => {
  const query = `
    query Portfolio {
      portfolio(id: "${id}") {
        _id,
        title,
        company,
        companyWebsite
        location
        jobTitle
        description
        days
        startDate
        endDate
      }
    }`;
  return axios.post('http://localhost:3000/graphql', { query })
    .then(({data: graph}) => graph.data)
    .then(data => data.portfolio)
}

const PortfoliosDetail = ({portfolio}) => {

  return (
    <div className="portfolio-detail">
      <div className="container">

        <div className="jumbotron">
          <h1 className="display-3">{portfolio.title}</h1>
          <p className="lead">{portfolio.jobTitle}</p>
          <p>
            <a className="btn btn-lg btn-success" href={portfolio.companyWebsite} role="button">
              {portfolio.company}
            </a>
          </p>
        </div>

        <div className="row marketing">
          <div className="col-lg-6">
            <h4 className="title">Location</h4>
            <p className="text">{portfolio.location}</p>

            <h4 className="title">Start Date</h4>
            <p className="text">{portfolio.startDate}</p>
          </div>

          <div className="col-lg-6">
            <h4 className="title">Days</h4>
            <p className="text">{portfolio.days}</p>

            <h4 className="title">End Date</h4>
            <p className="text">{portfolio.endDate}e</p>
          </div>
          <div className="col-md-12">
            <hr />
            <h4 className="title">Description</h4>
              <p>{portfolio.description}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

PortfoliosDetail.getInitialProps = async ({query}) => {
  const portfolio = await fetchPortfoliosById(query.id);
  return {portfolio};
}

export default PortfoliosDetail;
