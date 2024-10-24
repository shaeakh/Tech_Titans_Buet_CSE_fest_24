"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { MapPin, Users, DollarSign, Car } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "./DatePickerWithRange"; // Import the new DatePicker component
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Page() {
  const [Source, setSource] = useState('');
  const [Destination, setDestination] = useState('');
  const [vehicle, setVehicle] = useState('');
  const cities = ['Dhaka', 'Sylhet', 'Cox-bazar', 'Khulna'];
  const vehicles = ['Bus', 'Train', 'Plane', 'Boat'];
  const [budgetType, setbudgetType] = useState("null");
  const [person, setPerson] = useState(1);
  const [dateRange, setDateRange] = useState<{ from: Date | null; to: Date | null }>({ from: null, to: null });

  const handle_submit = () => {
    const details = {
      source: Source,
      destination: Destination,
      vehicle: vehicle,
      date: dateRange,
      budgetType: budgetType,
      person: person,
    };

    console.log(details);

   
    fetch("http://192.168.117.112:8000/v0/itineraries/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(details)
    })
      .then(response => response.json())
      .then(data => console.log('Response:', data))
      .catch(error => console.error('Error:', error));

    

    // Reset form fields after submission
    setSource('');
    setDestination('');
    setDateRange({ from: null, to: null });
    setbudgetType('null');
    setPerson(1);
    setVehicle('');
  };



  return (
    <div
      className='h-screen w-screen flex justify-center items-center'
      style={{
        backgroundImage:
          'url("https://github.com/user-attachments/assets/88fe7adf-1f57-4163-b73b-8526a12324a0")',
      }}
    >
      <div>

      </div>
      <div className='h-5/6 w-1/2 border-2 border-white bg-white rounded-xl p-10 space-y-6 shadow-2xl animate-fadeIn'>
        <h1 className='text-center text-4xl font-extrabold text-black tracking-wider mb-4'>
          Plan Your Next Adventure
        </h1>

        {/* From City Input */}
        <div className='w-full space-y-2'>
          <label
            htmlFor="source"
            className="text-lg font-medium text-black flex items-center gap-2"
          >
            <MapPin /> Where are you traveling from?
          </label>
          <Input
            placeholder='Enter city name'
            className='border-2 border-input rounded-md text-lg focus:ring-4 focus:ring-purple-300'
            list="city-options"
            id="source"
            value={Source}
            onChange={(e) => setSource(e.target.value)}
          />
          <datalist id="city-options">
            {cities.map((city, index) => (
              <option key={index} value={city} />
            ))}
          </datalist>
        </div>

        {/* Destination City Input */}
        <div className='w-full space-y-2'>
          <label
            htmlFor="destination"
            className="text-lg font-medium text-black flex items-center gap-2"
          >
            <MapPin /> Choose your destination city:
          </label>
          <Input
            placeholder='Enter city name'
            className='border-2 border-input rounded-md text-lg focus:ring-4 focus:ring-blue-300'
            list="city-options"
            id="destination"
            value={Destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className='w-full flex flex-row justify-center items-center text-lg space-x-2'>
          {/* Date Picker */}
          <DatePickerWithRange
            setDateRange={(range) => setDateRange(range as { from: Date | null; to: Date | null })} // Pass the setter function
          />


          {/* Budget Type Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-lg text-black border-input transition-all"
              >
                <DollarSign className="mr-2" />{" "}
                {budgetType === "null" ? "Select your budget type" : budgetType}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="text-lg">Budget Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={budgetType} onValueChange={setbudgetType}>
                <DropdownMenuRadioItem className="text-lg" value="budget">
                  Budget
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="text-lg" value="mid-range">
                  Mid-range
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="text-lg" value="luxury">
                  Luxury
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>


        {/* Number of Persons and Vehicle Type Inputs */}
        <div className='w-full flex justify-between space-x-2'>
          <div className='w-1/2'>
            <label
              htmlFor="person"
              className="text-lg font-medium text-black flex items-center gap-2"
            >
              <Users /> Number of persons:
            </label>
            <Input
              type="number"
              value={person}
              onChange={(e) => setPerson(Number(e.target.value))}
              placeholder="Enter number of persons"
              className='border-2 border-input rounded-md text-lg focus:ring-4 focus:ring-green-300'
            />
          </div>

          <div className='w-1/2'>
            <label
              htmlFor="vehicle"
              className="text-lg font-medium text-black flex items-center gap-2"
            >
              <Car /> Choose your vehicle type:
            </label>
            <Input
              placeholder='Enter vehicle type'
              className='border-2 border-input rounded-md text-lg focus:ring-4 focus:ring-blue-300'
              list="vehicle-options"
              id="vehicle"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            />
            <datalist id="vehicle-options">
              {vehicles.map((v, index) => (
                <option key={index} value={v} />
              ))}
            </datalist>
          </div>
        </div>

        {/* Submit Button */}
        <div className='w-full flex justify-end'>
          <Button onClick={handle_submit} className='text-lg my-2'>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
