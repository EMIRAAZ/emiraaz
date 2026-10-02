import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig, socialLinks } from "@/lib/site";
import "./globals.css";

// SF Pro Display: only Regular, Medium and Bold are bundled, so each file covers a weight range
// (light text uses Regular, semibold and heavier use Bold) instead of the browser faking weights.
const sfProDisplay = localFont({
  variable: "--font-sf-pro",
  display: "swap",
  src: [
    { path: "./fonts/SFProDisplay-Regular.woff2", weight: "100 400", style: "normal" },
    { path: "./fonts/SFProDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/SFProDisplay-Bold.woff2", weight: "600 900", style: "normal" },
  ],
});

const defaultTitle = `${siteConfig.name} | ${siteConfig.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    siteConfig.name,
    "Technology",
    "Real Estate",
    "Tourism",
    "PropertySeller",
    "PS Agent",
    "HolidayInDubai",
    "HID Partner",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: defaultTitle,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

// Organization structured data — only facts stated on the site.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon.png`,
  description: siteConfig.description,
  founder: { "@type": "Person", name: siteConfig.founder },
  sameAs: socialLinks.filter((s) => s.href.startsWith("http")).map((s) => s.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sfProDisplay.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
