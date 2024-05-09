import './index.css'

const PlanetItem = props => {
  const {eachItemValue} = props
  const {imageUrl, name, description} = eachItemValue

  return (
    <div className="item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-des">{description}</p>
    </div>
  )
}

export default PlanetItem
