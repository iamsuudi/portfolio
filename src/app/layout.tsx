import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    metadataBase: new URL("https://suudi.abdulfetah.com"),
    description: siteConfig.description,
    keywords: ["Software", "Engineer", "Full-Stack", "Developer"],
    authors: [
        {
            name: "Abdulfetah Suudi",
            url: "https://suudi.abdulfetah.com",
        },
    ],
    creator: "Abdulfetah",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://suudi.abdulfetah.com",
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: "https://suudi.abdulfetah.com/og.png",
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: ["https://suudi.abdulfetah.com/og.png"],
        creator: "@iamsuudi",
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`font-sans antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    forcedTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
