import React from "react";
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Tyler Meyer Dev',
  description: 'Tyler Meyer\'s Developer Portfolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
