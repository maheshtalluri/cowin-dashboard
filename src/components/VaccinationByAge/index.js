// Write your code here

import './index.css'
import {PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByeAge = props => {
  const {age} = props
  return (
    <div className="vaccine-gender">
      <h1 className="vaccination-coverage">Vaccination by age</h1>
      <PieChart width={1000} height={300}>
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
    </div>
  )
}

export default VaccinationByeAge
