import React from 'react'
import PortfolioMainImage from "../../images/Portfolio_Main_Image.png";
import PortfolioContent1 from "../../images/Portfolio-Content1.png";
import PortfolioContent2 from "../../images/Portfolio-Content2.png";
import PortfolioContent3 from "../../images/Portfolio-Content3.png";
import PortfolioContent4 from "../../images/Portfolio-Content4.png";
import PortfolioContent5 from "../../images/Portfolio-Content5.png";
import PortfolioContent6 from "../../images/Portfolio-Content6.png";
import "./Portfolio.css";
import Greetings from '../../components/Greetings/Greetings';

const PortfolioContentImages = [
  {
    id: 1,
    image: PortfolioContent1,
    text: "Title",
  },
  {
    id: 2,
    image: PortfolioContent2,
    text: "Title",
  },
  {
    id: 3,
    image: PortfolioContent3,
    text: "Title",
  },
  {
    id: 4,
    image: PortfolioContent4,
    text: "Title",
  },
  {
    id: 5,
    image: PortfolioContent5,
    text: "Title",
  },
  {
    id: 6,
    image: PortfolioContent6,
    text: "Title",
  }
]

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio-main-image-container">
        <img className="main-portfolio-image" src={PortfolioMainImage} alt="Portfolio" />
        <h1 className="portfolio-image-head">Portfolio</h1>
      </div>

      <div>
        <div className="portfolio-content">
          <h1 className="portfolio-content-head">Overview</h1>
          <p className="portfolio-content-para">Lorem ipsum dolor sit amet consectetur. Proin pellentesque euismod ac morbi. Vulputate rhoncus leo mi et volutpat malesuada mauris. Risus vestibulum nunc ullamcorper orci senectus nisl nullam nunc. Lacinia nec nisl fringilla semper aliquam eros id. Commodo nisi auctor facilisi in. Suspendisse in turpis amet eleifend purus adipiscing sed. In urna iaculis interdum in tortor cras tincidunt. Pellentesque diam pellentesque pellentesque sagittis velit non eu. Ante aliquam eleifend egestas consequat.</p>
        </div>

        <div className="portfolio-content-container-images">
          {PortfolioContentImages.map(each => (
            <div key={each.id} className="portfolio-content-container">
              <img src={each.image} className="portfolio-content-image" alt="Portfolio" />
              <h1 className="portfolio-content-head1">{each.text}</h1>
            </div>
          ))}
        </div>

        <Greetings />

      </div>
    </div>
  )
}

export default Portfolio