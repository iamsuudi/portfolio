"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { Clipboard, Check } from "lucide-react";

export default function CallToAction() {
    const [copied, setCopied] = useState(false);

    return (
        <section id="call-to-action" className="w-full max-w-xl p-8 mx-auto sm:px-0 sm:py-16">
            <div className="max-w-5xl px-6 mx-auto">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold text-balance lg:text-5xl">
                        Contact me
                    </h2>
                    <p className="mt-4">Want to work together?</p>

                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        <Button asChild size="lg">
                            <Link href="mailto:suudiabdulfetah@gmail.com">
                                <span>Email me</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="hover:cursor-pointer"
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    "suudiabdulfetah@gmail.com"
                                );
                                setCopied(true);
                                setTimeout(() => setCopied(false), 3000);
                            }}
                        >
                            <div className="flex items-center gap-1">
                                <span>Copy email</span>
                                {copied ? <Check className="text-green-500 stroke-3" /> : <Clipboard />}
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
