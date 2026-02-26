import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const FRAUD_DATA = [
  { name: 'Account Takeover', value: 35, color: '#EF4444' }, // Red
  { name: 'Card Not Present', value: 25, color: '#EAB308' }, // Yellow
  { name: 'Social Engineering', value: 20, color: '#3B82F6' }, // Blue
  { name: 'Synthetic Identity', value: 20, color: '#F97316' }, // Orange
];

const FraudCard = () => {
  return (
    <div className="bg-[#0f172a] text-white p-6 rounded-3xl w-[320px] shadow-xl border border-slate-800">
      <div className="mb-2">
        <h3 className="text-lg font-bold">Fraud Risk Distribution</h3>
        <p className="text-slate-400 text-xs">Real-time threat vector analysis</p>
      </div>

      {/* Chart Section */}
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={FRAUD_DATA}
              innerRadius={55}
              outerRadius={75}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {FRAUD_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend Section */}
      <div className="space-y-2 mt-2">
        {FRAUD_DATA.map((item) => (
          <div key={item.name} className="flex items-center text-xs">
            <span className="w-3 h-3 rounded-sm mr-2" style={{ backgroundColor: item.color }}></span>
            <span className="text-slate-300">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Footer Metrics */}
      <div className="flex justify-between mt-6 pt-4 border-t border-slate-800">
        <div>
          <p className="text-[10px] text-slate-500 uppercase font-bold">AI Alert</p>
          <p className="text-red-500 font-bold text-sm">Critical</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-slate-500 uppercase font-bold">Latency</p>
          <p className="text-emerald-400 font-bold text-sm">142ms</p>
        </div>
      </div>
    </div>
  );
};

export default FraudCard;