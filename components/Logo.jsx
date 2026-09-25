import Image from "next/image";

export default function Logo({ className = "" }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <Image src="/logo-mark.png" alt="" width={28} height={28} className="h-7 w-7" />
      <span className="font-display text-lg font-bold uppercase tracking-wide text-ink-100">
        Fit<span className="text-accent">Log</span>
      </span>
    </span>
  );
}
