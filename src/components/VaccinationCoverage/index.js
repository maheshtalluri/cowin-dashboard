// Write your code here
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Legend,
  Tooltip,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {seven} = props
  return (
    <div className="vaccine">
      <h1 className="vaccination-coverage">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart margin={{top: 5}} data={seven}>
          <XAxis
            dataKey="vaccineDate"
            tick={{stroke: 'gray', strokeWidth: 1}}
          />
          <YAxis
            domain={[0, 400]}
            //   interval="preserveStartEnd"
            tick={{stroke: 'gray', strokeWidth: 1}}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Tooltip />
          <Bar dataKey="dose1" name="dose1" fill="#5a8dee" barSize="20%" />
          <Bar dataKey="dose2" name="dose2" fill="#f54394" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
