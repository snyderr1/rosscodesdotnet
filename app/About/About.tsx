'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });





type AboutState = {
    videoScale: number;
}

function About(props: AboutState) {
//def is the name of the content, so that the css can be properly applied
//for different pages and content type


    return (
        <div className="flex flex-col items-center">
            <p className="mt-20">This is me. Ross Snyder, 24 years old.</p>
            <Image class="object-scale-down h-40 w-50" width="200" height="310" src={'/me.jpg'} alt={props.potraitalt}></Image>
            <p>I graduated from Oregon State in 2021 with a degree in Computer Science.</p>
            <p>In my free time I like to write code, hike, play video games, and ski.</p>
            <h1 className="mt-40">(Check out this sweet trick.)</h1>
            <div className="w-[320px] h-[180px] transition-all duration-500 ease-in-out hover:h-[360px] hover:w-[640px]">
                <ReactPlayer width='100%' height='100%' light={true} url='https://www.youtube.com/watch?v=8d1Ba01ba3w' pip={true} muted={true} />
            </div>
        </div>
  );
} 
//
export default About;