import React from "react";
import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";


const Hero = () => {
  
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <span className="font-semibold text-2xl font-nikhil">DoSummary</span>
        <div>
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/rohitlodhiii/project_ai_summarizer-main", "_blank")
          }
          className='black_btn font-nikhil'
        >
          Github
        </button>
        
        </div>
      </nav>

      <h1 className='head_text font-rohit'>
        Summarize Article's with <br className='max-md:hidden' />
        <span className='orange_gradient font-nikhil '>DoSummary</span>
      </h1>
      <h2 className='desc font-rohit'>
        <span className="bg-green-200 text-black mr-1 px-2"> How to USE : </span>  Just go to any <span className="bg-green-200 px-2 text-black">English News Website</span> and copy and article url and paste it below ! That's it.
      </h2>
      <h2 className='desc font-rohit'>
        <span ><a href="https://www.bbc.com/news"> Click Here for<span className="underline underline-offset-4"> sample News Website &#9654; </span></a></span> 
        </h2>
        <h2 className='desc font-rohit'>
        <span className="font-rohit ">Random Article to Test :  </span> <span className="bg-zinc-500 text-white px-2 text-xs">https://www.bbc.com/news/world-63213567 </span>
        </h2>
    </header>
  );
};

export default Hero;
