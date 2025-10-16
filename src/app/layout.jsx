import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// app/layout.js
export const metadata = {
  metadataBase: new URL("https://www.itechsystem.in"),
  title: {
    default: "I-Tech System | Best IT Training Institute in India",
    template: "%s | I-Tech System"
  },
  description:
    "I-Tech System is India’s leading IT training institute offering industry-focused courses in Full Stack Development, Data Science, Python, Java, Cloud Computing, Cybersecurity, SAP, and Salesforce with expert mentorship and placement support.",
  keywords: [
    "IT training institute in India",
    "software training center",
    "web development training",
    "data science training",
    "python programming course",
    "java full stack training",
    "cloud computing training",
    "SAP training",
    "Salesforce certification",
    "cybersecurity training"
  ],
  openGraph: {
    type: "website",
    url: "https://www.itechsystem.in",
    title: "I-Tech System | India’s Top IT Training Institute",
    description:
      "Master the most in-demand IT skills with I-Tech System — expert-led training in programming, cloud, data, and enterprise technologies trusted by learners across India.",
    siteName: "I-Tech System",
    images: [
      {
        url: "https://www.itechsystem.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "I-Tech System IT Training Institute India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "I-Tech System | Learn Top IT Skills in India",
    description:
      "Build your tech career with professional IT training in Python, Java, Data Science, Cloud Computing, SAP, and Salesforce at I-Tech System.",
    images: ["https://www.itechsystem.in/og-image.jpg"]
  },
  icons: {
    icon: "/favicon.ico"
  },
  alternates: {
    canonical: "https://www.itechsystem.in"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        className="overflow-x-hidden"
      >
        {children}
      </body>
    </html>

  );
}
