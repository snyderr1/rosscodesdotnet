import Image from 'next/image';
import React from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });


function About(props) {
  //def is the name of the content, so that the css can be properly applied
  //for different pages and content types
  return (
    <div className="About Me">
        <Image class="object-scale-down h-40" src={props.portrait} alt={props.potraitalt}></Image>
        <div className="page-window">
            <div className="cool-video">
                <h1 className="cool-video-blurb">Check out this sweet trick.</h1>
                <ReactPlayer light={true} url='https://www.youtube.com/watch?v=8d1Ba01ba3w' pip={true} muted={true}/>
            </div>
        </div>
    </div>
  );
} 

export default About;