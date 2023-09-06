
import Image from 'next/image';
import React, { useState, useEffect, useRef, useLayoutEffect, Fragment} from "react";

type Home = {
    profile: string,
    alt: string
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
        <div class="h-auto w-auto flex flex-col items-center">
            <div class="mt-40 animate-fadefirst">Hey. This is my website. React and Node.js.</div>
            <p class="animate-fadesecond">Check me out/Contact me:</p>
            <div class="flex flex-row mt-20 ">
                <ImgLink class= "animate-fadethird" name="git" src='/../public/git.png' link="https://github.com/snyderr1/" linkText="https://github.com/snyderr1" />
                <ImgLink class= "animate-fadethird" name="email" src='/../public/email.png' link="rossesny@gmail.com" linkText="rossesny@gmail.com" />
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
    class: string,


}


function ImgLink(props: ImgLink) {
    return (
        <div class={"flex flex-row mx-5"  + " " + props.class}>
            <Image class={"w-10 h-10 mr-3" + " " + props.class}  width="120" height="120" src={props.src} alt={props.alt}></Image>
            <a class={props.class + " mt-2"} className={props.name} href={props.link}>{props.linkText}</a>
        </div>
    );
}


export default Home;