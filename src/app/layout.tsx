import type { Metadata } from 'next';
import '@fontsource/fredoka/400.css';
import '@fontsource/fredoka/600.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kids Learn & Draw',
  description: 'Interactive kids learning app with alphabets and animals.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col font-['Fredoka']">
        <main className="flex-1 flex flex-col w-full max-w-md mx-auto bg-white shadow-xl min-h-screen relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
