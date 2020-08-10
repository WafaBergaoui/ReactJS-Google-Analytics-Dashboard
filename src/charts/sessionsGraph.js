import React , {useState, useEffect } from 'react';
import {Line, Bar} from 'react-chartjs-2';
import {formatDate} from './utils';
import {addDays} from 'date-fns';
import {queryReport} from './queryReport';

const LineGraph = (props) => {

    const initialState = {
        labels :[],
        values: []
    };
    const[reportData,setReportData] = useState(initialState);
    const [startDate, setStartDate] = useState(addDays(new Date(), -10));
    const [endDate, setEndDate] = useState(new Date());

    const displayResults = (response) => {
        const queryResult = response.result.reports[0].data.rows;

        let labels= [];
        let values= [];
        queryResult.forEach((row) => {
            labels.push(formatDate(row.dimensions[0]));
            values.push(row.metrics[0].values[0]);
        });
        setReportData({
            ...reportData,
            labels,
            values,
        });
    };


    const data = {
            labels: reportData.labels,
            datasets: [
              {
                label: `${props.title} per day`,
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: reportData.values,
        }]
    }

    useEffect(() => {
        const request = {
          viewID: props.viewID,
          startDate :"2020-01-01",
          endDate : "2020-07-25",
          metrics: props.metric,
          dimensions: ["ga:date"],
        };
        queryReport(request)
          .then((resp) => displayResults(resp))
          .catch((error) => console.error(error));
      }, [startDate, endDate]);
    
    return (
        <div
            style ={{
                width: '600px',
                height:'600px',
                margin : '50px auto'
            }}
        >   
             {reportData && (
              <Line data={data} />
            )} 
            {reportData && (
                <Bar data={data} />
            )}

        </div>
    )
}

export default LineGraph