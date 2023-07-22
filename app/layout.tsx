import { Inter } from "next/font/google";
import "@styles/globals.css";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Opinion Rater',
    description: 'Create and rate people\'s opinions',
};

export default function RootLayout({ 
    children 
} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <main className="app">
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="100vh"
                        sx={{ px: 3 }}>
                        <Stack
                            alignItems="center" 
                            sx={{ width: 1, maxWidth: '720px', boxShadow: 3, px: 6, py: 4, borderRadius: 2, gap: 3 }}>
                            {children}
                        </Stack>
                    </Box>
                </main>
            </body>
        </html>
    );
}