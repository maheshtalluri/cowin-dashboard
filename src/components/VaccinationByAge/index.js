// Write your code here

import './index.css'
import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByeAge = props => {
  const {age} = props
  return (
    <div className="vaccine-gender">
      <h1 className="vaccination-coverage">Vaccination by age</h1>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            data={age}
            startAngle={0}
            endAngle={360}
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Above 60" dataKey="Above 60" fill=" #f54394" />
            <Cell name="45-60" dataKey="45-60" fill="#5a8dee" />
            <Cell name="18-44" dataKey="18-44" fill="#2cc6c6" />
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

export default VaccinationByeAge
