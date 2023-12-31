import type { Metadata } from 'next';
import 'src/app/globals.css';

export const metadata: Metadata = {
  title: "Dalyn's Portfolio",
  description: "Dalyn Boyd's web development portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-black'>{children}</body>
    </html>
  );
}
