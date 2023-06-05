import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamMatches from '../TeamMatches'

import './index.css'

class TeamCard extends Component {
  state = {TeamCardData: [], isLoading: true}

  getTeamCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      url: eachItem.team_image_url,
    }))
    this.setState({TeamCardData: updatedData, isLoading: false})
  }

  compoundDidMount() {
    this.getTeamCard()
  }

  renderLoading = () => {
    ;<div>
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  }

  render() {
    const {isLoading, TeamCardData} = this.state

    return isLoading ? (
      this.renderLoading
    ) : (
      <div className="TeamCard-container">
        <h1 className="heading">IPL DashBoard</h1>
        <ul>
          {TeamCardData.map(eachTeam => (
            <TeamMatches key={eachTeam.id} teamMatchDetails={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamCard
