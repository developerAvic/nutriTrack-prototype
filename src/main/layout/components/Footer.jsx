// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white shadow-inner py-3 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} NutriTrack. All rights reserved.
    </footer>
  );
}
