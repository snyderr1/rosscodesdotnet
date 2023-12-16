'use client';

import React, {useState, useEffect, useRef, useLayoutEffect, Fragment} from 'react';

/* Import { unstable_concurrentAct } from 'react-dom/cjs/react-dom-test-utils.production.min'; */
// import './index.css';
import Me from '../public/me.jpg';
import NavBar from '../NavBar';

// Author: Ross Snyder
// 2022
const projectInfo = {'Test Project 1': 'Example Text', 'Test Project 2': 'Example Text', 'Test Project 3': 'Example Text', 'Test Project 4': 'Example Text'};
const NavigationDefault: Array<[string, string]> = [['/Home', 'Home'], ['/Resume', 'Resume'], ['/Projects', 'Projects'], ['/pages/About', 'About']];

// The full page
function Theme(props: any) {
	// Default is home, also setting the default page names and bar position to be passed to children
	// const now = useRef("Home");

	return (
		<div className='h-screen w-screen flex flex-col items-center'>
			<NavBar props={NavigationDefault}></NavBar>
			<div className='h-full w-full bg-neutral-500 bg-opacity-95 p-16'>{props.children}</div>
		</div>
	);
}

export default Theme;
