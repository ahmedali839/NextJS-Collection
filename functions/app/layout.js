import { metadata } from "./metadata.js";
import "./globals.css"; // If you have global styles

// export const metadata = {
//   title: {
//     default: "Title inside Parent",
//     template: "%s | I'm Parent",
//   },
// };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Next.js will automatically inject the metadata here, don't provide again here */}
        <title>{metadata.openGraph.title}</title>
        <meta name="description" content={metadata.openGraph.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        {metadata.openGraph.images.map((image, index) => (
          <meta
            key={index}
            property="og:image"
            content={image.url}
            width={image.width}
            height={image.height}
          />
        ))}
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
      </head>
      <body>{children}</body>
    </html>
  );
}
