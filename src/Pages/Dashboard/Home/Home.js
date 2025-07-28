import { Tooltip } from 'react-leaflet'
import { Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import Charts from '../../../Component/Charts/Charts'
import DashboardHomeCard from '../../../Component/DashboardHomeCard/DashboardHomeCard'
import './Home.css'
function Home(){

  const data = [
    { name: 'male', value: 4 },
    { name: 'female', value: 5 },
  ];
  const parentData = [
    { name: 'male', value: 1000 },
    { name: 'female', value: 509 },
  ];
  const incomeData = [
    { month: '1', value: 1000 },
    { month: '2', value: 509 },
    { month: '3', value: 1150 },
    { month: '4', value: 669 },
    { month: '5', value: 409 },
    { month: '6', value: 589 },
    { month: '7', value: 899 }
  ];
  
  const COLORS = ['#0088FE', '#FFBB28'];
  return (
    <div className='dashboardHome-container '>
      <div className='cards'>
        <DashboardHomeCard header='patient number' number='1509' percent='25'>
          <PieChart width={150} height={120}>
            <Pie
              data={parentData}
              cx='50%'
              cy='50%'
              innerRadius={10}
              outerRadius={45}
              fill='#88K84d8'
              // fill='red'
              // paddingAngle={5}
              dataKey='value'
              // label
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            {/* <Tooltip /> */}
            <Legend />
          </PieChart>
        </DashboardHomeCard>
        <DashboardHomeCard header='Appointments today' number='9' percent='25'>
          <PieChart width={150} height={120}>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              innerRadius={10}
              outerRadius={45}
              fill='#8884d8'
              // paddingAngle={5}
              dataKey='value'
              // label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            {/* <Tooltip /> */}
            <Legend />
          </PieChart>
        </DashboardHomeCard>
        {/* <DashboardHomeCard header='Records' number='85' percent='25' /> */}
        <DashboardHomeCard header='income'  percent='25'>
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={incomeData}>
            <XAxis dataKey='month' />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={1.5} dot={{ r: 0}} />
          </LineChart>
        </ResponsiveContainer>
        </DashboardHomeCard>
      </div>
      <div className='charts'>
        <Charts />
      </div>
    </div>
  );
}
export default Home