import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { saveAs } from 'file-saver';
import { useSelector } from 'react-redux';
import {
  Document,
  Packer,
  Paragraph,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from 'docx';

// Utility function to create a table from cost data
const createCostTable = (title, data) => {
  return [
    new Paragraph({
      text: title,
      heading: HeadingLevel.HEADING_2,
    }),
    new Table({
      rows: [
        new TableRow({
          children: [
            new TableCell({ children: [new Paragraph("Item")], width: { size: 50, type: WidthType.PERCENTAGE } }),
            new TableCell({ children: [new Paragraph("Cost")], width: { size: 50, type: WidthType.PERCENTAGE } }),
          ],
        }),
        ...data.map(item =>
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph(item.name)] }),
              new TableCell({ children: [new Paragraph(`₹${item.cost.toLocaleString()}`)] }),
            ],
          })
        ),
      ],
      width: { size: 100, type: WidthType.PERCENTAGE },
    }),
  ];
};

const downloadDocument = async () => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: "Total vs Optimized Cost Comparison",
            heading: HeadingLevel.TITLE,
          }),
          ...createCostTable("Traditional Estimation", totalCostData),
          new Paragraph({
            text: `Total: ₹${totalCost.toLocaleString()}`,
            bold: true,
          }),
          ...createCostTable("AI-Optimized Estimation", optimizedCostData),
          new Paragraph({
            text: `Optimized Total: ₹${optimizedCost.toLocaleString()}`,
            bold: true,
          }),
          new Paragraph({
            text: `You save over ₹${(totalCost - optimizedCost).toLocaleString()} by using AI-optimized construction methods.`,
            spacing: { before: 300, after: 300 },
          }),
          new Paragraph({
            text: `This document provides a side-by-side view of traditional vs optimized construction costs, including eco-friendly and cost-efficient material alternatives.`,
          }),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, "Cost_Comparison_Report.docx");
};

const totalCostData = [
    { name: 'Cement', cost: 25000 },
    { name: 'Steel', cost: 40000 },
    { name: 'Bricks', cost: 15000 },
    { name: 'Labor', cost: 30000 },
    { name: 'Plumbing', cost: 10000 },
    { name: 'Electrification', cost: 8000 },
];


const optimizedCostData = [
    { name: 'Cement (PPC)', cost: 20000 },
    { name: 'Steel (Recycled)', cost: 35000 },
    { name: 'Fly Ash Bricks', cost: 12000 },
    { name: 'Labor (Optimized)', cost: 25000 },
    { name: 'Plumbing Kit', cost: 8000 },
    { name: 'Smart Wiring', cost: 6000 },
];


const comparisonData = totalCostData.map((item, index) => ({
    name: item.name,
    traditional: item.cost,
    optimized: optimizedCostData[index]?.cost || 0,
}));


const totalCost = totalCostData.reduce((acc, item) => acc + item.cost, 0);
const optimizedCost = optimizedCostData.reduce((acc, item) => acc + item.cost, 0);


const CompareCostPage = () => {
  

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-10">
            <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Total vs Optimized Cost Comparison</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Traditional Estimation</h2>
                        <ul className="space-y-2">
                            {totalCostData.map((item, i) => (
                                <li key={i} className="flex justify-between border-b pb-1">
                                    <span>{item.name}</span>
                                    <span>₹{item.cost.toLocaleString()}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 font-bold text-lg text-blue-600">Total: ₹{totalCost.toLocaleString()}</p>
                    </CardContent>
                </Card>


                <Card className="border-green-500">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">AI-Optimized Estimation</h2>
                        <ul className="space-y-2">
                            {optimizedCostData.map((item, i) => (
                                <li key={i} className="flex justify-between border-b pb-1">
                                    <span>{item.name}</span>
                                    <span>₹{item.cost.toLocaleString()}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 font-bold text-lg text-green-600">Optimized Total: ₹{optimizedCost.toLocaleString()}</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Visual Cost Comparison</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={comparisonData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="traditional" name="Traditional" fill="#3B82F6" />
                            <Bar dataKey="optimized" name="Optimized" fill="#10B981" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardContent className="p-6 space-y-2">
                        <h2 className="text-xl font-bold text-blue-700">Traditional Approach</h2>
                        <ul className="list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li>Proven methods</li>
                            <li>Familiar materials</li>
                            <li>Longer build time</li>
                            <li>Higher labor and material cost</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6 space-y-2">
                        <h2 className="text-xl font-bold text-green-700">Optimized Approach</h2>
                        <ul className="list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li>Lower cost using alternatives</li>
                            <li>Eco-friendly material choices</li>
                            <li>Better scheduling reduces delays</li>
                            <li>Modern solutions with same durability</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>


            <Card className="bg-gray-50 dark:bg-gray-800 border-dashed border-2 border-blue-200 dark:border-gray-700">
                <CardContent className="p-6 text-gray-800 dark:text-gray-200 space-y-4">
                    <h2 className="text-2xl font-bold">Final Recommendation</h2>
                    <p>
                        Our optimized cost estimation uses advanced AI to analyze material types, labor efficiency, and smart construction principles. You save over <strong>₹{(totalCost - optimizedCost).toLocaleString()}</strong> by choosing alternatives without compromising quality.
                    </p>
                    <p>
                        This approach ensures sustainability, faster completion, and more budget-friendly planning. It's perfect for residential and commercial projects with strict timelines and cost caps.
                    </p>
                </CardContent>
            </Card>
            <button
                  onClick={downloadDocument}
                className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition"
            >
                Download as Document
            </button>
        </div>
    );
};

export default CompareCostPage;