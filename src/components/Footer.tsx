export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-6 border-t border-gray-100 bg-white/80 mt-8">
      <span className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Dylan Frost. All rights reserved.
      </span>
      <span className="text-xs text-gray-400 mt-1">
        Site by Dylan & family. Built with Next.js & Tailwind CSS.
      </span>
    </footer>
  );
}
