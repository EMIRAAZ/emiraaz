"use client";

import { useEffect } from "react";
import PillLink, { PillButton } from "@/components/ui/PillLink";
import StatusMessage from "@/components/ui/StatusMessage";

// Renders inside the (site) layout, so the header and footer stay visible.
export default function SiteError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col">
      <StatusMessage
        code="Oops"
        eyebrow="Something Went Wrong"
        title="We couldn’t load this page"
        description="An unexpected error occurred. Please try again, or head back to the home page."
      >
        <PillButton onClick={retry}>Try Again</PillButton>
        <PillLink href="/" variant="outline">
          Back to Home
        </PillLink>
      </StatusMessage>
    </div>
  );
}
