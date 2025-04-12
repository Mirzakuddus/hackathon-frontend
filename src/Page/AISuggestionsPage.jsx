
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';




const AISuggestionsPage = () => {
  const optimizedData = [
    { name: 'Cement (Use PPC)', cost: 20000 },
    { name: 'Steel (Recycled)', cost: 35000 },
    { name: 'Fly Ash Bricks', cost: 12000 },
    { name: 'Labor (Optimized)', cost: 25000 },
    { name: 'Basic Plumbing Kit', cost: 8000 },
    { name: 'Modular Electrification', cost: 6000 },
  ];

  const optimizedCost = optimizedData.reduce((sum, item) => sum + item.cost, 0);
  return (
   <>
   <Card className="bg-gradient-to-br from-white via-slate-100 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">AI-Optimized Suggestions</h2>

            <table className="min-w-full text-left border">
              <thead className="bg-green-100 dark:bg-green-800 text-green-900 dark:text-green-100">
                <tr>
                  <th className="px-4 py-2 border">Optimized Item</th>
                  <th className="px-4 py-2 border">Optimized Cost (₹)</th>
                </tr>
              </thead>
              <tbody>
                {optimizedData.map((item, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">₹{item.cost.toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="bg-green-200 dark:bg-green-700 font-semibold">
                  <td className="px-4 py-2">Total Optimized</td>
                  <td className="px-4 py-2">₹{optimizedCost.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>

            {/* Optimized Graph */}
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={optimizedData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="cost" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
   </>
  );
};

export default AISuggestionsPage;




// FaAddressCard