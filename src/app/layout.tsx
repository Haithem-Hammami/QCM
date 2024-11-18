import './globals.css';

export const metadata = {
  title: 'Accessible Accordion',
  description: 'Un accordéon accessible avec Next.js et Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans">
        <div className="container mx-auto p-6">{children}</div>
      </body>
    </html>
  );
}
