import React from "react";
import "./Portfolio.css";
import IMG1 from "../../Assets/Dzilla.PNG";
import IMG2 from "../../Assets/Ecommerce.PNG";
import IMG3 from "../../Assets/Calculator.PNG";
import IMG4 from "../../Assets/Todo2.PNG";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio website",
    github: "https://github.com/DavisKiprotich/Portfolio-Website-ReactJS-",
    demo: 'https://d-zilla-creatives-vvi5.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: "E-commerce website",
    github: "https://github.com/DavisKiprotich/Ever-Trendy-website",
    demo: 'https://ever-trendy-website-q8ynmj7gu-daviskiprotich.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: "React Calculator",
    github: "https://github.com/DavisKiprotich/React-calculator",
    demo: 'https://react-calculator-five-inky.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: "Todo List",
    github: "https://github.com/DavisKiprotich/Todo-list-simplified",
    demo: 'https://todo-list-simplified.vercel.app/'
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        {data.map(({ id, image, title, github,demo }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-tag">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={demo} className="btn" target="_blank" rel="noreferrer">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
