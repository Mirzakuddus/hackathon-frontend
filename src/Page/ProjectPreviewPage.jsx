import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ProjectPreviewPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100 dark:from-stone-900 dark:to-neutral-800 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-stone-800 dark:text-white"
        >
          Project Summary Preview
        </motion.h1>

        {/* Section: Project Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6 space-y-2">
              <h2 className="text-xl font-semibold text-stone-700 dark:text-stone-200">🏗 Project Information</h2>
              <p><strong>Name:</strong> ProjectName</p>
              <p><strong>Location:</strong> ProjectLocation</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Dimensions */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-6 space-y-2">
              <h2 className="text-xl font-semibold text-stone-700 dark:text-stone-200">📐 Dimensions</h2>
              <p><strong>Length:</strong>Length m</p>
              <p><strong>Width:</strong>Width m</p>
              <p><strong>Height:</strong> Height m</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Material */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardContent className="p-6 space-y-2">
              <h2 className="text-xl font-semibold text-stone-700 dark:text-stone-200">🧱 Material</h2>
              <p><strong>Type:</strong>Meterial</p>
              <p><strong>Quantity:</strong> MeterialQty</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Labor */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardContent className="p-6 space-y-2">
              <h2 className="text-xl font-semibold text-stone-700 dark:text-stone-200">👷 Labor Info</h2>
              <p><strong>Workers:</strong> Worker</p>
              <p><strong>Hours/Day:</strong> HourPerday</p>
              <p><strong>Rate/Hour:</strong> ₹RateperHour</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Overheads */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardContent className="p-6 space-y-2">
              <h2 className="text-xl font-semibold text-stone-700 dark:text-stone-200">⚙ Overhead</h2>
              <p><strong>Overhead (₹ or %):</strong> Overhead</p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="flex justify-between pt-6">
          <Button variant="outline" >
            ⬅ Back
          </Button>
          <Button >
            ✅ Confirm & Estimate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreviewPage;

