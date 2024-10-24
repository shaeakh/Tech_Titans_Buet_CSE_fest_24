"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function ThreeDCardDemo_Vehicle(props: any) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-min rounded-xl p-6 border  ">
        <div className="w-full flex flex-col space-x-2 items-start  whitespace-nowrap">
          <div>
            <div className="w-full flex justify-start"><CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white"
            >
              {props.name}
            </CardItem></div>

            <div className="w-full flex justify-start ">
              <CardItem
                translateZ="50"
                className="bg-[#F36C8D] px-2 rounded-lg text-md font-bold text-white dark:text-white"
              >
                {props.cost + " $"}
              </CardItem>
            </div>
            <div className="w-full flex justify-start"><CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {props.S_time} - {props.E_time}
            </CardItem></div>

          </div>
          <div><CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4"
          >
            <Image
              src={props.image}
              height="250"
              width="250"
              className="  w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem></div>
        </div>


        <div className="flex justify-end items-center mt-4">
          <a href={props.Bus_link}>
            <CardItem
              translateZ={20}
              translateX={40}
              as="button"
              className="px-4 py-2 rounded-xl bg-[#0AB06E] dark:bg-[#0AB06E] text-white text-xs font-bold"
            >
              Buy ticket
            </CardItem>
          </a>

        </div>
      </CardBody>
    </CardContainer>
  );
}
