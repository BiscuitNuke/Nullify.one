import type { Metadata, Viewport } from "next";
import Nav from "./components/nav";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://nullify.one"),
    title: { default: "Nullify.one", template: "%s / Nullify.one" },
    description: "A research project on using machine learning to spot bad traffic on small networks. Not a company. No product yet.",
    icons: {
        icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico", sizes: "any" }],
        apple: "/apple-touch-icon.png",
    },
};

export const viewport: Viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <a className="skip" href="#main">Skip to content</a>
                <Nav />
                <main id="main">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
