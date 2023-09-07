'use client'
import Image from 'next/image';
import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });


function About(props) {
  //def is the name of the content, so that the css can be properly applied
  //for different pages and content types
  return (
      <div class="flex flex-col items-center">
          <p class="mt-20">This is me. Ross Snyder, 24 years old.</p>
          <Image class="object-scale-down h-40 w-50" width="200" height="310" src={'/me.jpg'} alt={props.potraitalt}></Image>
          <p>I graduated from Oregon State in 2021 with a degree in Computer Science.</p>
            <h1 class="mt-40">Check out this sweet trick.</h1>
            <ReactPlayer light={true} url='https://www.youtube.com/watch?v=8d1Ba01ba3w' pip={true} muted={true}/>
    </div>
  );
} 

export default About;