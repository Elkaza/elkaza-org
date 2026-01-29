"use client";

import React, { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

interface TerminalBlock {
    prompt?: string;
    cmd: string;
    output?: string;
}

interface TerminalCardProps {
    title: string;
    blocks: TerminalBlock[];
    showCopy?: boolean;
    className?: string;
}

export default function TerminalCard({ title, blocks, showCopy = true, className = "" }: TerminalCardProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const textToCopy = blocks.map(b => `${b.prompt || "$"} ${b.cmd}\n${b.output || ""}`).join("\n");
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl ${className}`}>
            {/* Header */}
            <div className="bg-slate-900/50 px-4 py-3 flex items-center justify-between border-b border-slate-800/50">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="ml-3 flex items-center gap-2 text-xs font-mono text-slate-400">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>{title}</span>
                    </div>
                </div>
                {showCopy && (
                    <button
                        onClick={handleCopy}
                        className="text-slate-400 hover:text-slate-100 transition-colors p-1 rounded-md"
                        aria-label="Copy to clipboard"
                    >
                        {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                )}
            </div>

            {/* Body */}
            <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto text-slate-300">
                {blocks.map((block, i) => (
                    <div key={i} className="mb-4 last:mb-0">
                        <div className="flex items-start gap-2 text-slate-100">
                            <span className="text-slate-400 select-none shrink-0">{block.prompt || "<USER>@<HOST>:~$"}</span>
                            <code className="flex-1 whitespace-pre-wrap break-all text-slate-300">
                                {block.cmd}
                            </code>
                        </div>
                        {block.output && (
                            <div className="mt-1 text-slate-400 whitespace-pre-wrap pl-2 border-l-2 border-slate-800 ml-1">
                                {block.output}
                            </div>
                        )}
                    </div>
                ))}

                {/* Cursor animation */}
                <div className="mt-2 flex items-center gap-2">
                    <span className="text-slate-400 select-none">{"<USER>@<HOST>:~$"}</span>
                    <span className="w-2 h-4 bg-slate-500 animate-pulse" />
                </div>
            </div>
        </div>
    );
}
