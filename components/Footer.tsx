export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-dark-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-gray-500 leading-relaxed">
          Designed in <span className="text-pink-light">Figma</span> and coded in{' '}
          <span className="text-pink-light">Visual Studio Code</span>.
          <br className="hidden sm:block" />
          Built with <span className="text-pink-light">Next.js</span> and{' '}
          <span className="text-pink-light">Tailwind CSS</span>.
          <br className="hidden sm:block" />
          All text is set in the <span className="text-pink-light">JetBrains Mono</span> typeface.
        </p>
        <p className="text-xs text-gray-600 mt-4">
          © {new Date().getFullYear()} Mathilda Dellanova. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
