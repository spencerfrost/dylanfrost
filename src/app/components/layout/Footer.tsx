export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-6 border-t border-border bg-background mt-8">
      <span className="text-sm text-foreground">
        &copy; {new Date().getFullYear()} Dylan Frost. All rights reserved.
      </span>
      <span className="text-xs mt-1 text-muted-foreground">
        Site by Dylan & family. Built with Next.js & Tailwind CSS.
      </span>
    </footer>
  );
}
