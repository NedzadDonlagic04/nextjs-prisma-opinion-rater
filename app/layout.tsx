import { Inter } from "next/font/google";

import FaviconSetup from '@components/FaviconSetup';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Opinion Rater',
    description: 'Create and rate people\'s opinions'
};

export default function RootLayout({ 
    children 
} : {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <FaviconSetup />
            <body className={`${inter.className}`}>
                <main className='app'>
                    {children}
                </main>
            </body>
        </html>
    );
}