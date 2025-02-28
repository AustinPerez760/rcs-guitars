import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	title: 'RCS Guitars and Gear',
	description:
		'RCS Guitars and Gear - Your one-stop shop for all things musical.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' className='dark'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--text-primary)]`}>
				<Navbar />
				<main className="pt-16">
					{children}
				</main>
			</body>
		</html>
	);
}
