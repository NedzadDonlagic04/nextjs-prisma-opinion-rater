import { Inter } from "next/font/google";
import "@styles/globals.css";

import FaviconSetup from '@components/FaviconSetup';
import Box from "@mui/material/Box";

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
        <html lang="en">
            <FaviconSetup />
            <body className={`${inter.className}`}>
                <main className="app">
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="100vh">
                        <Box 
                            display='flex'
                            alignItems="center"
                            flexDirection='column'
                            sx={{ width: 1, maxWidth: '720px', boxShadow: 3, px: 6, py: 4, borderRadius: 2, gap: 3 }}>
                            {children}
                        </Box>
                    </Box>
                </main>
            </body>
        </html>
    );
}