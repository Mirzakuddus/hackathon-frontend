import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import gsap from 'gsap';
import AISuggestionsPage from './AISuggestionsPage';
import { useLocation, useNavigate } from 'react-router-dom';


const CostEstimationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // State to store project data
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    if (location.state) {
      console.log('Received Project Data:', location.state); // Log the received data
      setProjectData(location.state); // Set the received data into state
    }
  }, [location.state]);

  const handleOptimizeClick = () => {
    gsap.to(optimizedRef.current, {
      height: 'auto',
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    });
  };

  const optimizedRef = useRef(null);

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
        Project Cost Estimation Summary
      </h1>

      {projectData ? (
        <Card>
          <CardContent className="p-6 overflow-x-auto">
            <h2 className="text-2xl font-semibold mb-4">Detailed Cost Breakdown</h2>
            <table className="min-w-full text-left border">
              <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                <tr>
                  <th className="px-4 py-2 border">Cost Type</th>
                  <th className="px-4 py-2 border">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(projectData)
                  .filter(([key, value]) => key.endsWith('Cost') && typeof value === 'number')
                  .map(([key, value], i) => (
                    <tr key={i} className="border-t">
                      <td className="px-4 py-2 capitalize">
                        {key.replace(/Cost$/, '').replace(/([A-Z])/g, ' $1')}
                      </td>
                      <td className="px-4 py-2">₹{value?.toLocaleString()}</td>
                    </tr>
                  ))}
                <tr className="bg-green-50 dark:bg-green-900 font-semibold">
                  <td className="px-4 py-2">Total Cost</td>
                  <td className="px-4 py-2">₹{projectData?.totalcost?.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      ) : (
        <p className="text-center text-gray-500">No project data available.</p>
      )}

      {projectData && (
  <>
    <h2 className="text-2xl font-semibold mt-10 mb-4">Cost Breakdown Chart</h2>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={Object.entries(projectData)
          .filter(([key, value]) => key.endsWith('Cost') && typeof value === 'number')
          .map(([key, value]) => ({
            name: key
              .replace(/Cost$/, '')
              .replace(/([A-Z])/g, ' $1')
              .trim(),
            value: value,
          }))}
        margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
      >
        <XAxis dataKey="name" angle={-20} textAnchor="end" interval={0} />
        <YAxis />
        <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
        <Legend />
        <Bar dataKey="value" name="Cost (₹)" fill="#34D399" />
      </BarChart>
    </ResponsiveContainer>
  </>
)}
      <div className="text-center flex flex-row gap-4">
        <Button
          onClick={handleOptimizeClick}
          className="text-white bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600"
        >
          Get Optimized Cost
        </Button>
        <Button
          onClick={() => {
            navigate('/compare-cost');
          }}
          className="text-white bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600"
        >
          Compare Costs
        </Button>
      </div>
      <div
        ref={optimizedRef}
        className="overflow-hidden h-0 opacity-0 transition-all duration-700"
      >
        <AISuggestionsPage />
      </div>
    </div>
  );
};

export default CostEstimationPage;