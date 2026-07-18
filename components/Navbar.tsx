export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <h1 className="text-xl font-bold text-blue-600">
          Pritika Parsai
        </h1>

        <div className="flex gap-8 text-gray-700 font-medium">
          <a href="#">About</a>
          <a href="#">Research</a>
          <a href="#">Projects</a>
          <a href="#">Resume</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}