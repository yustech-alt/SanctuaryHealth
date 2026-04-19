import { Select, SelectItem, Textarea, Button, Divider, CardFooter, Card, CardHeader, CardBody } from "@heroui/react";
import { CalendarDays, Pill, ChevronRight, Heart, Activity, Thermometer, ShieldCheck, Droplet, MapPin } from "lucide-react"; // Using Lucide for the icon
import React from 'react'

function Dashboard() {
  return (
  <div className='flex flex-col gap-[32px] p-[24px]'>
    <DashProfile />
    <div className='grid grid-cols-12 gap-4'>

      <div className="col-span-8 self-stretch bg-Backgrounds-Primary">
        <div className='w-full bg-[#FEF7EB] p-8 rounded-[32px] flex flex-col gap-8 '> 
          <div className="self-stretch w-full flex justify-between items-center">
              <div className="justify-center text-zinc-900 text-lg font-bold font-['Inter'] leading-5">Kiosk Visit Summary</div>
              <div className="px-3 py-1 bg-white rounded-full inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-Primary-Normal text-xs font-bold font-['Manrope'] leading-4 text-[#5C97F8]">Last visit: 2 days ago</div>
              </div>
          </div>
          <HealthStats />
        </div>
        <MedManagementCard />
        <ConsultationForm />
        
      </div>

      <div className="col-span-4 self-stretch items-start bg-Backgrounds-Primary rounded-[32px] inline-flex flex-col justify-start items-start gap-8">
        <MedicationCard />
        <UpcomingAppointmentCard />
        <PrescriptionHistory />
      </div>
    </div>
  </div>
  )
}

function MedicationCard() {
  return (
    <div className="self-stretch p-6 bg-emerald-800/5 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-emerald-800/20 inline-flex flex-col justify-start items-start gap-4">
    <div className="self-stretch flex flex-col justify-start items-start">
        <div className="self-stretch justify-center text-emerald-800 text-sm font-bold font-['Manrope'] uppercase leading-5 tracking-wider">PENDING RX</div>
    </div>
    <div className="self-stretch p-4 bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-emerald-800/10 flex flex-col justify-start items-start gap-3">
        <div className="self-stretch inline-flex justify-start items-center gap-3">
            <div className="w-8 h-8 bg-emerald-800/10 rounded-lg flex justify-center items-center">
                <Pill className="w-4 h-4 text-emerald-800" />
            </div>
            <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center text-zinc-900 text-sm font-bold font-['Manrope'] leading-5">Metformin 500mg</div>
            </div>
        </div>
        <div className="self-stretch px-1 pb-1 flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-neutral-700 text-[10px] font-normal font-['Manrope'] leading-4">Prescribed by Dr. Amaka Okafor</div>
        </div>
        <Button className='bg-[#5C97F8] text-white w-full'>Start Medication</Button>
    </div>
</div>
  )
}

function DashProfile(){
  return (
    <>
      <div>
        <div className="justify-center text-zinc-900 text-4xl font-bold font-['Inter'] leading-10">Welcome Back, Chidi</div>
        <div className="justify-center text-neutral-700/80 text-xl font-normal font-['Inter'] leading-6">Your health journey is looking stable today.</div>
      </div>
    <div className="self-stretch inline-flex justify-start items-start gap-8">
    <div className="w-24 h-24 bg-white/0 rounded-2xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] shadow-xl shadow-[0px_0px_0px_4px_rgba(242,244,246,1.00)] inline-flex flex-col justify-center items-start overflow-hidden">
        <img className="self-stretch flex-1 relative" src="https://placehold.co/96x96" />
    </div>
    <div className="flex-1 flex justify-start items-start">
        <div className="flex-1 inline-flex flex-col justify-start items-start">
            <div className="w-96 flex flex-col justify-start items-start gap-1">
                <div className="self-stretch justify-center text-neutral-700 text-xs font-normal font-['Inter'] leading-4">32 Years • Male</div>
                <div className="self-stretch justify-center text-zinc-900 text-3xl font-bold font-['Inter'] leading-8">Chidi Adebayo</div>
            </div>
            <div className="inline-flex justify-center items-center gap-2">
                <ShieldCheck className="w-4 h-5 text-emerald-950" />
                <div className="justify-center text-emerald-950 text-sm font-normal font-['Inter'] leading-4">NIN VERIFIED</div>
            </div>
        </div>
        <div className="w-72 pt-6 flex justify-start items-start gap-4">
            <div className="flex-1 flex justify-start items-center gap-3">
                <div className="w-10 h-10 bg-rose-200/30 rounded-lg flex justify-center items-center">
                    <Droplet className="w-4 h-5 text-red-700" />
                </div>
                <div className="inline-flex flex-col justify-start items-start">
                    <div className="self-stretch opacity-60 flex flex-col justify-start items-start">
                        <div className="justify-center text-neutral-700 text-[10px] font-bold font-['Manrope'] uppercase leading-4">BLOOD GROUP</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="justify-center text-zinc-900 text-base font-bold font-['Manrope'] leading-6">O Positive</div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex justify-start items-center gap-3">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex justify-center items-center">
                    <MapPin className="w-4 h-5 text-blue-700" />
                </div>
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="self-stretch opacity-60 flex flex-col justify-start items-start">
                      <div className="justify-center text-neutral-700 text-[10px] font-bold font-['Manrope'] uppercase leading-4">LOCATION</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                      <div className="justify-center text-zinc-900 text-base font-bold font-['Manrope'] leading-6">Lagos, NG</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  </>
  )
}

function HealthStats() {

  const stats = [
    { label: 'Heart Rate', value: '72', unit: 'bpm', status: 'Normal', icon: Heart, iconColor: 'text-red-700' },
    { label: 'BP', value: '120/80', unit: '', status: 'Healthy', icon: Activity, iconColor: 'text-blue-700' },
    { label: 'Temp', value: '36.8', unit: '°C', status: 'Normal', icon: Thermometer, iconColor: 'text-yellow-800' },
  ];

  return (
    <div className="flex flex-wrap gap-4 w-full items-start">
      {stats.map((stat, index) => (
        <div key={index} className="flex-1 p-6 bg-white rounded-2xl shadow-sm border border-stone-200 flex flex-col gap-3">
          
          {/* Header */}
          <div className="flex items-center gap-2">
            <stat.icon className={`w-4 h-4 ${stat.iconColor}`} />
            <span className="text-neutral-700 text-xs font-normal font-['Inter']">{stat.label}</span>
          </div>

          {/* Reading */}
          <div className="flex items-baseline gap-1 pt-1">
            <span className="text-zinc-900 text-2xl font-bold font-['Inter']">{stat.value}</span>
            {stat.unit && <span className="text-neutral-700 text-sm font-medium font-['Manrope']">{stat.unit}</span>}
          </div>

          {/* Status */}
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-emerald-600 rounded-full" />
            <span className="text-emerald-600 text-lg font-normal font-['Inter']">{stat.status}</span>
          </div>
          
        </div>
      ))}
    </div>
  );
}

function MedManagementCard(){
  return (
    <div className="w-full mt-[24px] p-8 bg-white rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-stone-300/20 inline-flex flex-col justify-start items-start gap-8">
    <div className="self-stretch inline-flex justify-between items-center">
        <div className="inline-flex flex-col justify-start items-start">
            <div className="justify-center text-zinc-900 text-xl font-bold font-['Manrope'] leading-7">Medication Management</div>
        </div>
        <div className="opacity-60 inline-flex flex-col justify-start items-start">
            <div className="justify-center text-neutral-700 text-xs font-bold font-['Manrope'] leading-4">Active Treatment</div>
        </div>
    </div>
    <div className="self-stretch flex flex-col justify-start items-start gap-6">
        <div className="self-stretch bg-[#EBF3FE] p-6 bg-Primary-Disabled rounded-2xl outline outline-1 outline-offset-[-1px] outline-emerald-800/10 flex flex-col justify-start items-start gap-4">
            <div className="self-stretch inline-flex justify-between items-start">
                <div className="flex justify-start items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-800/10 rounded-xl flex justify-center items-center">
                        <Pill className="w-6 h-6 text-emerald-800" />
                    </div>
                    <div className="inline-flex flex-col justify-start items-start">
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-center text-zinc-900 text-base font-bold font-['Manrope'] leading-6">Amoxicillin 500mg</div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-center text-neutral-700 text-xs font-normal font-['Manrope'] leading-4">Twice daily after meals</div>
                        </div>
                    </div>
                </div>
                <div className="inline-flex flex-col justify-start items-start">
                    <div className="self-stretch flex flex-col justify-start items-end">
                        <div className="text-right justify-center text-emerald-800 text-[10px] font-bold font-['Manrope'] uppercase leading-4 tracking-wide">PROGRESS</div>
                    </div>
                    <div className="self-stretch h-7 flex items-end gap-1">
                        <div className="text-right justify-center text-zinc-900 text-lg font-extrabold font-['Manrope'] leading-7">Day 5 </div>
                        <div className="justify-center text-neutral-700 text-sm font-normal font-['Manrope'] leading-5">of 10</div>
                    </div>
                </div>
            </div>
            <div className="self-stretch h-2 relative bg-zinc-200 rounded-full overflow-hidden">
                <div className="w-80 h-2 left-0 top-0 absolute bg-Primary-Normal rounded-full" />
            </div>
        </div>
        <div className="self-stretch bg-[#EBF3FE] p-6 bg-Primary-Disabled rounded-2xl outline outline-1 outline-offset-[-1px] outline-blue-700/10 inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
                <div className="w-12 h-12 bg-blue-700/10 rounded-xl flex justify-center items-center">
                    <Pill className="w-6 h-6 text-blue-700" />
                </div>
                <div className="inline-flex flex-col justify-start items-start">
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="justify-center text-zinc-900 text-base font-bold font-['Manrope'] leading-5">Antacid Suspension</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="justify-center text-neutral-700 text-xs font-normal font-['Manrope'] leading-4">Course completed yesterday</div>
                    </div>
                </div>
            </div>
                <Button className="bg-[#5C97F8] text-white">Health Assessment</Button>
        </div>
    </div>
</div>
  )
}

function ConsultationForm() {
  return (
    <Card className="w-full mt-[24px] p-4 shadow-sm border-1 border-stone-200/50 rounded-[32px]">
      <CardHeader className="px-4 pt-4 pb-2">
        <h2 className="text-zinc-900 text-xl font-bold font-manrope">
          Quick Consultation
        </h2>
      </CardHeader>

      <CardBody className="flex flex-col gap-6">
        
        {/* Responsive Row: Stacks on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row gap-4">
          <Select
            label="Specialty/Dept"
            labelPlacement="outside"
            placeholder="Select specialty"
            variant="flat"
            className="font-manrope flex-1"
            defaultSelectedKeys={["general"]}
            classNames={{
              trigger: "bg-gray-200 hover:bg-gray-300 transition-colors rounded-xl h-12",
              label: "text-neutral-700 font-bold text-xs mb-1",
            }}
          >
            <SelectItem key="general">General Medicine</SelectItem>
            <SelectItem key="cardiology">Cardiology</SelectItem>
          </Select>

          <Select
            label="Duration of symptoms"
            labelPlacement="outside"
            placeholder="How long?"
            variant="flat"
            className="font-manrope flex-1"
            defaultSelectedKeys={["24h"]}
            classNames={{
              trigger: "bg-gray-200 hover:bg-gray-300 transition-colors rounded-xl h-12",
              label: "text-neutral-700 font-bold text-xs mb-1",
            }}
          >
            <SelectItem key="24h">Less than 24 hours</SelectItem>
            <SelectItem key="days">A few days</SelectItem>
          </Select>
        </div>

        {/* Symptoms Description - Stays full width */}
        <Textarea
          label="Describe Symptoms"
          labelPlacement="outside"
          placeholder="Explain how you feel..."
          variant="flat"
          minRows={4}
          classNames={{
            inputWrapper: "bg-gray-200 hover:bg-gray-300 transition-colors rounded-xl",
            label: "text-neutral-700 font-bold text-xs mb-1",
          }}
        />

        <Button 
          color="primary" 
          className="w-full bg-[#5C97F8] rounded-xl text-lg"
        >
          Request Consultation
        </Button>
      </CardBody>
    </Card>
  );
}


function UpcomingAppointmentCard({ 
  doctorName = "Dr. Amaka Okafor", 
  specialty = "General Practitioner", 
  time = "TOMORROW, 10:00 AM" 
}) {
  return (
    <div className="w-full p-6 bg-zinc-200/40 rounded-[32px] flex flex-col gap-4">
      {/* Header Section */}
      <div className="flex justify-between items-center px-1">
        <span className="text-zinc-900 text-sm font-bold font-manrope uppercase tracking-wider">
          UPCOMING
        </span>
        {/* Placeholder for the 4x5 icon from Figma */}
        <CalendarDays className="w-4 h-5 text-neutral-500" />
      </div>

      {/* Inner Appointment Card */}
      <Card className="p-4 bg-white shadow-sm border-1 border-stone-200/20 rounded-2xl">
        <CardBody className="p-0 flex flex-col items-start">
          {/* Appointment Meta */}
          <span className="text-blue-700 text-[10px] font-extrabold font-manrope leading-4">
            {time}
          </span>
          
          <h3 className="text-zinc-900 text-sm font-bold font-manrope leading-5 pt-1">
            {doctorName}
          </h3>
          
          <p className="text-neutral-700 text-xs font-normal font-manrope leading-4 pb-4">
            {specialty}
          </p>

          {/* Action Button */}
          <Button 
            color="primary" 
            className="w-full bg-[#5C97F8] rounded-xl shadow-md shadow-primary/20"
          >
            Join Call
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

function PrescriptionHistory({ prescriptions = [] }) {
  // Fallback data if none is provided
  const data = prescriptions.length > 0 ? prescriptions : [
    { name: "Paracetamol", date: "Sep 28, 2023" }
  ];

  return (
    <Card className="w-full p-2 bg-white shadow-sm border-1 border-stone-200/50 rounded-[32px]">
      <CardHeader className="px-4 pt-4 pb-2">
        <span className="text-zinc-900 text-sm font-bold font-manrope uppercase tracking-wider">
          Prescription History
        </span>
      </CardHeader>

      <CardBody className="flex flex-col gap-4">
        {data.map((item, index) => (
          <div key={index} className="group cursor-pointer flex justify-between items-center">
            <div className="flex items-center gap-4">
              {/* Icon Circle */}
              <div className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center group-hover:bg-gray-200 transition-colors">
                <Pill className="w-4 h-4 text-neutral-700" />
              </div>

              {/* Text Info */}
              <div className="flex flex-col">
                <span className="text-zinc-900 text-sm font-bold font-manrope leading-5">
                  {item.name}
                </span>
                <span className="text-neutral-700 text-[10px] font-normal font-manrope leading-4">
                  {item.date}
                </span>
              </div>
            </div>

            {/* Right Arrow Icon */}
            <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 transition-colors" />
          </div>
        ))}
      </CardBody>

      <Divider className="my-2" />

      <CardFooter className="justify-center pt-2 pb-4">
        <Button 
          variant="light" 
          color="primary" 
          size="sm"
          className="font-bold text-xs uppercase tracking-widest hover:bg-transparent"
        >
          View All Records
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Dashboard
