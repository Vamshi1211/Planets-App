import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="app-container">
      <h1 className="heading">PLANETS</h1>
      <div className="planets-container" data-testid="planets">
        <Slider {...settings} className="slide-container">
          {planetsList.map(eachItem => (
            <PlanetItem key={eachItem.id} eachItemValue={eachItem} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
