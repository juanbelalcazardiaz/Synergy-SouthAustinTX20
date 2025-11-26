import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { APPLICATION_VELOCITY, PIPELINE_STATUS, ROLE_DISTRIBUTION, COLORS } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-zinc-200 shadow-lg rounded-lg text-sm">
        <p className="font-semibold text-zinc-800 mb-1">{label}</p>
        <p className="text-zinc-600">
          {payload[0].name}: <span className="font-medium text-blue-600">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export const VelocityChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={APPLICATION_VELOCITY} margin={{ top: 10, right: 30, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E4E4E7" />
        <XAxis 
          dataKey="date" 
          tick={{ fill: '#71717A', fontSize: 12 }} 
          axisLine={false} 
          tickLine={false}
          dy={10}
        />
        <YAxis 
          tick={{ fill: '#71717A', fontSize: 12 }} 
          axisLine={false} 
          tickLine={false} 
        />
        <Tooltip content={<CustomTooltip />} />
        <Line 
          type="monotone" 
          dataKey="count" 
          name="Applications"
          stroke={COLORS.primary} 
          strokeWidth={3} 
          dot={{ fill: 'white', stroke: COLORS.primary, strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, fill: COLORS.primary }}
          tension={0.4}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const PipelineBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart 
        layout="vertical" 
        data={PIPELINE_STATUS} 
        margin={{ top: 0, right: 30, left: 40, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E4E4E7" />
        <XAxis type="number" hide />
        <YAxis 
          dataKey="status" 
          type="category" 
          width={120}
          tick={{ fill: '#52525B', fontSize: 12, fontWeight: 500 }} 
          axisLine={false} 
          tickLine={false}
        />
        <Tooltip cursor={{ fill: '#F4F4F5' }} content={<CustomTooltip />} />
        <Bar 
          dataKey="count" 
          name="Candidates" 
          fill={COLORS.primary} 
          radius={[0, 4, 4, 0]} 
          barSize={24}
        >
          {PIPELINE_STATUS.map((entry, index) => (
             <Cell key={`cell-${index}`} fill={index % 2 === 0 ? COLORS.primary : COLORS.secondary} fillOpacity={0.8} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

const PIE_COLORS = [COLORS.primary, COLORS.accent];

export const RolePieChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie
          data={ROLE_DISTRIBUTION}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {ROLE_DISTRIBUTION.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend 
          verticalAlign="bottom" 
          height={36} 
          iconType="circle"
          formatter={(value) => <span className="text-zinc-600 text-sm ml-1">{value}</span>}
        />
        <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle">
          <tspan x="50%" dy="0" className="fill-zinc-400 text-xs">Primary Role</tspan>
          <tspan x="50%" dy="20" className="fill-zinc-900 text-2xl font-bold">78%</tspan>
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
};