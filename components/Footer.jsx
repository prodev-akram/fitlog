import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-base-border bg-base-bg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <Logo />
        <p className="text-center text-xs text-ink-500 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
