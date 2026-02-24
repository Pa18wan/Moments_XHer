import './globals.css';

export const metadata = {
  title: 'For Her ❤️ | 15.09.2025',
  description: 'From the red chair moment to now — a heartfelt confession, a growing feeling, and a simple question from the heart.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
