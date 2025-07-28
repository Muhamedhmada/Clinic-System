import "./Charts.css";
import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
} from "recharts";

function Charts() {
  const data = [
    { name: "يناير", value: 400, value2: 80 },   // 80 إلغاء
    { name: "فبراير", value: 300, value2: 50 },
    { name: "مارس", value: 700, value2: 90 },
    { name: "أبريل", value: 178, value2: 20 },
    { name: "مايو", value: 278, value2: 60 },
    { name: "يونيو", value: 578, value2: 150 },
    { name: "يوليو", value: 378, value2: 40 },
    { name: "أغسطس", value: 678, value2: 30 },
  ];

  return (
    <div className='charts-container'>
      <div className='charts-content'>
        <div>
          <ComposedChart width={500} height={300} data={data}>
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip content={<Area/>}/>
            <Legend legendType="none"/>
            <Area
              type='monotone'
              dataKey='value'
              fill='#8884d8'
              stroke='#8884d8'
              legendType="none"
            />
            <Area
              type='monotone'
              dataKey='value2'
              fill='yellow'
              stroke='#8884d8'
              legendType="none"
            />
            <Line type='monotone' dataKey='value' stroke='#ff7300' legendType="none" />
            <Line type='monotone' dataKey='value2' stroke='black' legendType="none"/>
            <Bar dataKey='value' barSize={20} fill='#413ea0' name={"apointments"} />
            <Bar dataKey='value2' barSize={10} fill='red' name={"canceled apointments"}/>
          </ComposedChart>
        </div>
        <div>
          <ComposedChart width={500} height={300} data={data}>
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip content={<Area/>}/>
            <Legend legendType="none"/>
            <Area
              type='monotone'
              dataKey='value'
              fill='#8884d8'
              stroke='#8884d8'
              legendType="none"
            />
            <Area
              type='monotone'
              dataKey='value2'
              fill='yellow'
              stroke='#8884d8'
              legendType="none"
            />
            <Line type='monotone' dataKey='value' stroke='#ff7300' legendType="none" />
            <Line type='monotone' dataKey='value2' stroke='black' legendType="none"/>
            <Bar dataKey='value' barSize={20} fill='#413ea0' name={"apointments"} />
            <Bar dataKey='value2' barSize={10} fill='red' name={"canceled apointments"}/>
          </ComposedChart>
        </div>
      </div>
    </div>
  );
}
export default Charts;
