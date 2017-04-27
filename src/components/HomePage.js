import React from 'react';
import {Link} from 'react-router';

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data = [
      {time: '7:00 AM', temp: 55},
      {time: '7:05 AM', temp: 56},
      {time: '7:10 AM', temp: 60},
      {time: '7:15 AM', temp: 62},
      {time: '7:20 AM', temp: 65},
      {time: '7:25 AM', temp: 70},
      {time: '7:30 AM', temp: 72}
];

const HomePage = () => {
  return (
    <div>
      <h1>Newo Brew</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>

      <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="time"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HomePage;
