export const metadata = {
  title: 'Bookly App Download',
  description: 'Download the Bookly User App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}