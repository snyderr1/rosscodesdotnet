'use client'
import Image from 'next/image';
import React, { useState, useEffect, useRef, useLayoutEffect, Fragment} from "react";

type Home = {

}
function Home(props: Home) {
    //def is the name of the content, so that the css can be properly applied
    //for different pages and content types
    const [animate, setAnimate] = useState<boolean>(true);
    useEffect(() => {
        if (window.sessionStorage.getItem("firstLoadDone") === null) {
            setAnimate(true);
            window.sessionStorage.setItem("firstLoadDone", "1");
        } else {
            setAnimate(false);
        }
    }, [])

    return (
        <div className="h-auto w-auto flex flex-col items-center">
            <div className="mt-40 animate-fadefirst  text-white">Hey. This is my website. React and Node.js.</div>
            <p className="animate-fadesecond  text-white">Check me out/Contact me:</p>
            <div className="flex flex-row mt-20 ">
                <ImgLink className="animate-fadethird" name="git" src={"/git.png"} link="https://github.com/snyderr1/" linkText="https://github.com/snyderr1" alt="" />
                <ImgLink className="animate-fadethird" name="email" src={"/email.png"} link="rossesny@gmail.com" linkText="rossesny@gmail.com" alt="" />
            </div>
        </div>
    );
}

type ImgLink = {

    src: string,
    alt: string,
    name: string,
    link: string,
    linkText: string,
    className: string,


}


function ImgLink(props: ImgLink) {
    return (
        <div className={"flex flex-row mx-5"  + " " + props.className}>
            <Image className={"w-10 h-10 mr-3" + " " + props.className}  width="120" height="120" src={props.src} alt={props.alt}></Image>
            <a className={props.className + " mt-2 text-white"} href={props.link}>{props.linkText}</a>
        </div>
    );
}


export default Home;