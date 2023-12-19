import './globals.css';
import type {Metadata} from 'next';
import {Inter as interKludge} from 'next/font/google';
import Theme from './pages/Theme';
import NavBar from './NavBar';

const inter = interKludge({subsets: ['latin']});

const NavigationDefault: Array<[string, string]> = [['/Home', 'Home'], ['/Resume', 'Resume'], ['/Projects', 'Projects'], ['/pages/About', 'About']];

export const metadata: Metadata = {
	title: 'rosscodes.net',
	description: 'Ross`s super cool and professional website.',
	icons: {
		icon: '/icon.ico',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className="h-screen w-auto overflow-x-hidden bg-[url('../public/background.jpg')] bg-no-repeat bg-cover bg-black">
					<Theme>{children}</Theme>
				</div>
			</body>
		</html>
	);
}
