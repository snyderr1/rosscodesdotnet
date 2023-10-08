import Link from 'next/link';

//navigation bar

function NavBar(props:any) {
    
    return (
        <div className="w-full h-8 m-2 flex flex-row">
            <Link href="https://rosscodes.net/" className="font-medium text-lg hover:underline  text-white">RossCodes.net</Link>
            <ul className="h-full w-[1620px] flex justify-center space-x-5  text-white">
                <li className= "hover:bg-black hover:bg-opacity-35" key="Projects">
                    <Link href="/Projects">{"Projects"}</Link>
                </li>
                <li className="hover:bg-black hover:bg-opacity-35" key="Resume">
                    <Link href="/Resume">{"Resume"}</Link>
                </li>
                <li className="hover:bg-black hover:bg-opacity-35" key="About">
                    <Link href="/About">{"About"}</Link>
                </li>
            </ul>
        </div>
    );
}
export default NavBar;