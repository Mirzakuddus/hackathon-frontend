import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const ProjectInputPage = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState({})
  const [formData, setFormData] = useState({
    projectName: '',
    location: '',
    projectType: '',
    area: '',
    floors: '',
    wallHeight: '',
    wallThickness: '',
    slabThickness: '',
    bricks: '',
    cement: '',
    flooring: '',
    roofing: '',
    paint: '',
    laborRegion: '',
    contractorType: '',
    skilledLabor: false,
    waterTank: false,
    rainHarvest: false,
    electrical: false,
    plumbing: false,
    kitchen: false,
    notes: '',
  });



  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  useState(()=>{
   console.log('first')
  },[])

  const handleSubmit = async () => {
    try {
       await axios.post('https://hackathon-backend-5.onrender.com/project/add-project', formData,{
        headers:  { Authorization: `Bearer ${localStorage.getItem('token')}` },
       }).then((res)=>{
        console.log('Saved:', res.data);
      setProject(res.data.project)
        if(res){
          navigate('/cost-optimisation',{
            state:res.data.project
          });
        }
      }).catch((err)=>{
        console.log(err);
      })

    } catch (err) {
      console.error('Error saving project:', err);
      alert('Error saving project. Please try again.');
    }
  };



  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 bg-gray-200">
      <h1 className="text-3xl font-bold text-center text-green-700">Project Input Form</h1>

      <Card className="border-2 border-gray-400">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div>
            <Label className="mb-2">Project Name</Label>
            <Input placeholder="e.g. 2BHK House" onChange={e => handleChange('projectName', e.target.value)} />
          </div>
          <div>
            <Label className="mb-2">Location</Label>
            <Input placeholder="City, State" onChange={e => handleChange('location', e.target.value)} />
          </div>
          <div>
            <Label className="mb-2">Project Type</Label>
            <Select onValueChange={value => handleChange('projectType', value)}>
              <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2">Built-up Area (sq.ft)</Label>
            <Input type="number" placeholder="e.g. 1200" onChange={e => handleChange('area', e.target.value)} />
          </div>
          <div>
            <Label className="mb-2">No. of Floors</Label>
            <Input type="number" placeholder="e.g. 2" onChange={e => handleChange('floors', e.target.value)} />
          </div>
          <div>
            <Label className="mb-2">Wall Height (ft)</Label>
            <Input type="number" placeholder="e.g. 10" onChange={e => handleChange('wallHeight', e.target.value)} />
          </div>
          <div>
            <Label className="mb-2">Wall Thickness (inch)</Label>
            <Input type="number" placeholder="e.g. 9" onChange={e => handleChange('wallThickness', e.target.value)} />
          </div>
          <div>
            <Label className="mb-2">Slab Thickness (inch)</Label>
            <Input type="number" placeholder="e.g. 6" onChange={e => handleChange('slabThickness', e.target.value)} />
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-gray-400">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <h2 className="text-xl font-semibold col-span-full">Material Preferences</h2>
          <div>
            <Label className="mb-2">Bricks</Label>
            <Select onValueChange={value => handleChange('bricks', value)}>
              <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="flyash">Fly Ash</SelectItem>
                <SelectItem value="red">Red Bricks</SelectItem>
                <SelectItem value="aac">AAC Blocks</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2">Cement</Label>
            <Select onValueChange={value => handleChange('cement', value)}>
              <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="opc">OPC 53</SelectItem>
                <SelectItem value="ppc">PPC</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2">Flooring</Label>
            <Select onValueChange={value => handleChange('flooring', value)}>
              <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="tiles">Vitrified Tiles</SelectItem>
                <SelectItem value="marble">Marble</SelectItem>
                <SelectItem value="wood">Wooden</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2">Roofing</Label>
            <Select onValueChange={value => handleChange('roofing', value)}>
              <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="rcc">RCC</SelectItem>
                <SelectItem value="metal">Metal Sheet</SelectItem>
                <SelectItem value="precast">Precast</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2">Paint</Label>
            <Select onValueChange={value => handleChange('paint', value)}>
              <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="distemper">Distemper</SelectItem>
                <SelectItem value="emulsion">Emulsion</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-gray-400">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <h2 className="text-xl font-semibold col-span-full">Labor & Add-ons</h2>
          <div>
            <Label className="mb-2">Labor Region</Label>
            <Select onValueChange={value => handleChange('laborRegion', value)}>
              <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="north">North India</SelectItem>
                <SelectItem value="south">South India</SelectItem>
                <SelectItem value="west">West India</SelectItem>
                <SelectItem value="east">East India</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2">Contractor Type</Label>
            <Select onValueChange={value => handleChange('contractorType', value)}>
              <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="own">Own Labor</SelectItem>
                <SelectItem value="outsourced">Outsourced</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Switch checked={formData.skilledLabor} onCheckedChange={value => handleChange('skilledLabor', value)} />
            <Label className="mb-2">Skilled Labor Required</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch checked={formData.waterTank} onCheckedChange={value => handleChange('waterTank', value)} />
            <Label className="mb-2">Underground Water Tank</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch checked={formData.rainHarvest} onCheckedChange={value => handleChange('rainHarvest', value)} />
            <Label className="mb-2"l>Rainwater Harvesting</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch checked={formData.electrical} onCheckedChange={value => handleChange('electrical', value)} />
            <Label className="mb-2">Electrical Wiring</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch checked={formData.plumbing} onCheckedChange={value => handleChange('plumbing', value)} />
            <Label className="mb-2">Plumbing</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch checked={formData.kitchen} onCheckedChange={value => handleChange('kitchen', value)} />
            <Label className="mb-2">Modular Kitchen</Label>
          </div>
          <div className="col-span-full">
            <Label className="mb-2">Additional Notes</Label>
            <Textarea placeholder="Add any project-specific notes..." onChange={e => handleChange('notes', e.target.value)} />
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
       
        <Button className="px-10 py-3 text-lg" onClick={handleSubmit}>
          Submit Project Details
        </Button>

      </div>
    </div>
  )
}

export default ProjectInputPage