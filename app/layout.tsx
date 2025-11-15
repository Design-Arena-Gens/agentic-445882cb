import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Kumar Packers & Movers | Cinematic Ad',
  description:
    'Cinematic storyboard experience for Kumar Packers & Movers showcasing nationwide relocation services.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
