import './index.css'

const TeamMatches = props => {
  const {teamMatchDetails} = props
  const {name, url} = teamMatchDetails

  return (
    <li className="container">
      <div className="card-container">
        <img src={url} alt={`${name}`} className="pic" />
        <p className="para">{name}</p>
      </div>
    </li>
  )
}
export default TeamMatches
