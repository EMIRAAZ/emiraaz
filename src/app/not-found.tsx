import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PillLink from "@/components/ui/PillLink";
import StatusMessage from "@/components/ui/StatusMessage";

export const metadata: Metadata = {
  title: "Page Not Found",
};

// Unmatched URLs render here, outside the (site) group, so the header and footer are added directly.
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <StatusMessage
          code="404"
          eyebrow="Page Not Found"
          title="This page doesn’t exist"
          description="The page you’re looking for may have been moved, renamed, or is no longer available."
        >
          <PillLink href="/">Back to Home</PillLink>
          <PillLink href="/contact" variant="outline">
            Contact Us
          </PillLink>
        </StatusMessage>
      </main>
      <Footer />
    </>
  );
}
