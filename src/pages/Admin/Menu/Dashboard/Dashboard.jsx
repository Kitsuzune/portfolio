import React from 'react';
import DefaultLayout from '../../AdminLayout';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Col, Container, Row } from 'react-bootstrap';

const Dashboard = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 20, 50, 40, 70, 60],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };


  return (
    <>
      <DefaultLayout>
        <Container fluid>
          <Row className="mt-5 mx-3">
            <Col md={4}>
              <Row className="chart-container mx-2 bg-white rounded p-5">
                <Bar data={data} options={options} className='w-full h-full' />
              </Row>
            </Col>
            <Col md={4}>
              <Row className="chart-container mx-2 bg-white rounded p-5">
                <Bar data={data} options={options} className='w-full h-full' />
              </Row>
            </Col>
            <Col md={4}>
              <Row className="chart-container mx-2 bg-white rounded p-5">
                <Bar data={data} options={options} className='w-full h-full' />
              </Row>
            </Col>
          </Row>
        </Container>
      </DefaultLayout>
    </>
  );
};

export default Dashboard;
