import React from 'react';
import {
    LineChart, Line, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';


export default function ABarChart({data}) {

        return (
            <div style={{display:"flex"}}>
            <div style={{ width:"50%",
                height:'500px'
            }}>
            <ResponsiveContainer>
            <LineChart
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='pe'/>
                <YAxis dataKey='pe' />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ire" stroke="#8884d8" />
                <Line type="monotone" dataKey="ipe" stroke="#82ca9d" />
            </LineChart>
            </ResponsiveContainer>
            </div>
    <div style={{ width:"50%",
        height:'500px'
    }}>
        <ResponsiveContainer>
            <LineChart
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='pe'/>
                <YAxis dataKey='pe' />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="vre" stroke="#8884d8" />
                <Line type="monotone" dataKey="vpe" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    </div>
                <div style={{ width:"50%",
                    height:'500px'
                }}>
                    <ResponsiveContainer>
                        <LineChart
                            data={data}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey='dif'/>
                            <YAxis dataKey='r' />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="dif" stroke="#8884d8" />
                            <Line type="monotone" dataKey="r" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
}
