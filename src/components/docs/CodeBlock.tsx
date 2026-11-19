import { CopyButton } from "./CopyButton";

export function CodeBlock({ code, className = "" }: { code: string; className?: string }) {
  return (
    <div className={`relative rounded-[14px] bg-[#0b1426] text-[#e6e9ef] ${className}`}>
      <CopyButton value={code} className="absolute top-2 right-2 text-white/70 hover:text-white" />
      <pre className="overflow-x-auto p-4 pr-12 font-mono text-[12.5px] leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
