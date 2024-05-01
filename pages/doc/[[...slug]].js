import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import ModuleDesc from "../../components/content/index";
import DocLayout from "../../components/doc-layout/index";
import { DocWrapper } from "../../context/state";
import Instructor from "../../components/pageInstructor/index";

const Doc = () => {
  return (
    <div className="flex  justify-center items-stretch ">
      <div className=" mx-auto relative  flex max-w-screen-2xl justify-center sm:px-2 lg:px-8 xl:px-10 px-2">
        <DocWrapper>
          <div className="flex-col md:flex-row  flex">
            <div className=" sm:ml-0  max-w-lg lg:pr-5 lg:ml-5  lg:relative lg:max-w-none   lg:flex-none ">
              <div className="hidden lg:block absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:bg-slate-900">
                <div className=" absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block "></div>
              </div>
              <DocLayout />
            </div>
            <div className=" -mt-10 md:-mt-0 pb-16 xl:pl-4 pl-4   lg:mt-8 lg:pt-8 min-w-0 md:w-[672px] flex-auto px-4 lg:py-16  lg:pr-0 lg:pl-8 xl:px-16 sm:justify-center sm:px-0">
              <ModuleDesc />
            </div>
            <div className="pl-0 hidden lg:block md:pl-10 md:pt-5 sm:pl-0 sm:pt-0">
              <Instructor />
            </div>
          </div>
        </DocWrapper>
      </div>
    </div>
  );
};
export default Doc;
