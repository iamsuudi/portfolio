"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Link from "next/link";
import { Rocket, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <main className="overflow-hidden">
            <section className="relative">
                <div className="relative py-24 lg:py-28">
                    <div className="max-w-2xl px-6 mx-auto md:px-12">
                        <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                            <p className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3">
                                <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                                    @iamsuudi
                                </span>
                                <span className="text-sm">
                                    Software Engineer
                                </span>
                                <span className="bg-(--color-border) block h-4 w-px"></span>

                                <ShieldCheck className="size-4" />
                            </p>

                            <h1 className="mt-8 text-4xl font-semibold xl:[line-height:1.125]">
                                Hi, I am Suudi <br /> A Full Stack Developer.
                            </h1>
                            <p className="max-w-lg mx-auto mt-8 text-lg text-wrap">
                                Freelancing and open-source contributions have led me work in
                                many teams and creative environments.
                            </p>

                            <div className="mt-8">
                                <Button size="lg" asChild>
                                    <Link href="#call-to-action">
                                        <Rocket className="relative size-4" />
                                        <span className="text-nowrap">
                                            Let&apos;s Start Building
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="relative max-w-xl mx-auto mt-8 sm:mt-12">
                            <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)] dark:opacity-10"></div>
                            <div className="absolute inset-x-0 top-12 -z-[1] mx-auto h-1/3 w-2/3 rounded-full bg-blue-300 blur-3xl dark:bg-white/20"></div>

                            <Swiper
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                loop
                                autoplay={{ delay: 2500 }}
                                modules={[Autoplay, EffectCoverflow]}
                                className="flex items-center justify-end"
                            >
                                <SwiperSlide className="">
                                    <div className="bg-background rounded-(--radius) h-44 max-w-lg mx-auto border p-9">
                                        <div className="flex items-center justify-center gap-5">
                                            <img
                                                src="/postgres.png"
                                                className="w-20 scale-90 h-fit"
                                            />
                                            <img
                                                src="/go.png"
                                                className="w-20 scale-200 h-fit ml-5 mr-6"
                                            />
                                            <img
                                                src="/nestjs.png"
                                                className="w-20 scale-95 h-fit mr-5"
                                            />
                                        </div>
                                        <p className="mt-3 text-lg font-medium text-center">
                                            Backend Development
                                        </p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="">
                                    <div className="bg-background rounded-(--radius) h-44 max-w-lg mx-auto border p-9">
                                        <div className="flex items-center justify-center gap-5">
                                            <img
                                                src="/docker.png"
                                                className="w-20 scale-125 h-fit"
                                            />
                                            <img
                                                src="/kubernetes.png"
                                                className="w-20 h-fit"
                                            />
                                            <img
                                                src="/bash.png"
                                                className="w-20 scale-150 h-fit ml-5"
                                            />
                                        </div>
                                        <p className="mt-3 text-lg font-medium text-center">
                                            Linux & DevOps
                                        </p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="">
                                    <div className="bg-background rounded-(--radius) h-44 max-w-lg mx-auto border p-9">
                                        <div className="flex items-center justify-center gap-5">
                                            <img
                                                src="/nextjs.png"
                                                className="w-32 h-fit"
                                            />
                                            <img
                                                src="/tailwindcss.png"
                                                className="w-20 scale-90 h-fit"
                                            />
                                        </div>
                                        <p className="mt-3 text-lg font-medium text-center">
                                            Web Development
                                        </p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="">
                                    <div className="bg-background rounded-(--radius) h-44 max-w-lg mx-auto border p-9">
                                        <div className="flex items-center justify-center gap-5">
                                            <img
                                                src="/expo.png"
                                                className="w-32 h-fit"
                                            />
                                            <img
                                                src="/kotlin.png"
                                                className="w-20 h-fit"
                                            />
                                        </div>
                                        <p className="mt-3 text-lg font-medium text-center">
                                            Mobile App Development
                                        </p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
