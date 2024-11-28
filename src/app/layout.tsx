// app/layout.tsx
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './globals.css'; // Ensure Tailwind is imported here
import { AuthProvider } from '../context/AuthContext'; // Import AuthProvider

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white relative">
        {/* Wrap everything with AuthProvider */}
        <AuthProvider>
          {/* Navbar */}
          <div className="relative z-20">
            <Navbar />
          </div>

          {/* Main Content */}
          <main className="relative z-10">
            {children}
          </main>

          {/* Footer */}
          <div className="relative z-20">
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}