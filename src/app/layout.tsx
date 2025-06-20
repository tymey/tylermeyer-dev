import type { Metadata } from "next";

import './globals.css';

export const metadata: Metadata = {
    title: 'Tyler Meyer Dev',
    description: 'The software engineering portfolio site for Tyler Meyer.',
    icons: {
        icon: '/favicon.ico'
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}