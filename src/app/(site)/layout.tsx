import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/** Shared chrome (header + footer) for every public page in the (site) group. */
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
