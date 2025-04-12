import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { UserRound, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const user = {
  name: 'Rahul Mehta',
  email: 'rahul.civilpro@gmail.com',
  profileImg: 'https://i.pravatar.cc/100?img=14',
};

const Dashboard = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  useEffect(()=>{
console.log(projects)
  },[projects])
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        await axios.get('https://hackathon-backend-5.onrender.com/project/get-projects', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }).then((res)=>{
          console.log('Fetched Projects:', res.data);
          setProjects(res.data); // ✅ Fix here
        });
        
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <motion.div
      className="min-h-screen p-6 md:p-10 bg-gradient-to-br from-gray-50 via-white to-blue-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="max-w-5xl mx-auto space-y-10"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Profile Info */}
        <Card className="shadow-md">
          <CardContent className="p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={user.profileImg}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                <UserRound className="w-5 h-5" />
                {user.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2 mt-2">
                <Mail className="w-4 h-4" />
                {user.email}
              </p>
            </div>
            <div className="mt-9 ml-90" onClick={() => navigate('/project-input')}>
              <Button>Add New Project</Button>
            </div>
          </CardContent>
        </Card>

        {/* Project History */}
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Previous Projects
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full table-auto text-sm text-left text-gray-700 dark:text-gray-200">
                <thead className="text-xs uppercase bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-gray-300">
                  <tr>
                    <th className="px-4 py-3">Project Name</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.length > 0 ? (
                    projects.map((proj) => (
                      <tr key={proj._id} className="border-b dark:border-gray-700">
                        <td className="px-4 py-3">{proj.projectName}</td>
                        <td className="px-4 py-3">{new Date(proj.date).toLocaleDateString()}</td>
                        <td className="px-4 py-3">₹{proj.totalCost?.toLocaleString()}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="px-4 py-3 text-center">
                        No projects found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;