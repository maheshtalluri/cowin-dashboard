// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByeAge from '../VaccinationByAge'

import './index.css'

const displayStatus = {
  pending: 'PENDiNG',
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class CowinDashboard extends Component {
  state = {
    sevenDaysVaccination: [],
    vaccineGender: [],
    vaccineAge: [],
    status: displayStatus.initial,
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    this.setState({status: displayStatus.pending})
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const lastSevenDaysVaccination = data.last_7_days_vaccination.map(
        eachDay => ({
          dose1: eachDay.dose_1,
          dose2: eachDay.dose_2,
          vaccineDate: eachDay.vaccine_date,
        }),
      )
      const vaccinationByGender = data.vaccination_by_gender.map(gender => ({
        count: gender.count,
        gender: gender.gender,
      }))

      const vaccinationByAge = data.vaccination_by_age.map(age => ({
        age: age.age,
        count: age.count,
      }))

      this.setState({
        sevenDaysVaccination: lastSevenDaysVaccination,
        vaccineGender: vaccinationByGender,
        vaccineAge: vaccinationByAge,
        status: displayStatus.success,
      })
    } else {
      this.setState({status: displayStatus.failure})
    }
  }

  renderPycharts = () => {
    const {sevenDaysVaccination, vaccineGender, vaccineAge} = this.state
    console.log(sevenDaysVaccination)
    console.log(vaccineGender)
    return (
      <div>
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo-size"
          />
          <p className="cowin">Co-Win</p>
        </div>
        <h1 className="para">CoWIN Vaccination in India</h1>
        <VaccinationCoverage seven={sevenDaysVaccination} />
        <VaccinationByGender gender={vaccineGender} />
        <VaccinationByeAge age={vaccineAge} />
      </div>
    )
  }

  renderLoading = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <p>Something went wrong</p>
    </div>
  )

  renderData = () => {
    const {status} = this.state
    switch (status) {
      case displayStatus.pending:
        return this.renderLoading()
      case displayStatus.success:
        return this.renderPycharts()
      case displayStatus.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return <div className="bg-container">{this.renderData()}</div>
  }
}

export default CowinDashboard
