import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Hế Lô Anh em',

}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
