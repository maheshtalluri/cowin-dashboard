// Write your code here
import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {gender} = props
  return (
    <div className="vaccine-gender">
      <h1 className="vaccination-coverage">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={gender}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell dataKey="Others" name="Others" fill="#2cc6c6" />
            <Cell dataKey="Female" name="Female" fill="#5a8dee" />
            <Cell dataKey="Male" name="Male" fill="#f54394" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
