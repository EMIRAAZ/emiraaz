import Image from "next/image";
import Container from "@/components/layout/Container";
import { products, type Product } from "@/data/products";

// Literal class names so Tailwind generates them.
const desktopOrderClass: Record<Product["desktopOrder"], string> = {
  1: "lg:order-1",
  2: "lg:order-2",
  3: "lg:order-3",
  4: "lg:order-4",
};

function ProductCard({ product }: { product: Product }) {
  const external = product.href.startsWith("http");

  return (
    <a
      href={product.href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`group flex flex-col items-center text-center ${desktopOrderClass[product.desktopOrder]}`}
    >
      <Image
        src={product.icon}
        alt={`${product.name} logo`}
        width={160}
        height={160}
        className="size-[104px] transition-transform duration-300 group-hover:-translate-y-1 md:size-[128px] lg:size-[144px]"
      />

      <h3 className="mt-4 whitespace-nowrap text-[clamp(15px,4.6vw,18px)] font-semibold tracking-[-0.01em] text-black md:mt-6 md:text-[22px] lg:mt-7">
        {product.name}
      </h3>

      {/* One line on mobile ("Real Estate Platform"), two lines from md up as in the design. */}
      <p className="mt-1 whitespace-nowrap text-[clamp(12px,3.7vw,15px)] font-light leading-[1.15] text-black md:mt-3 md:whitespace-normal md:leading-[1.25] md:text-lg lg:text-xl">
        {product.tagline[0]}
        <br className="hidden md:block" /> {product.tagline[1]}
      </p>

      <span
        aria-hidden
        className="mt-3 inline-flex size-8 md:mt-4 md:size-10 items-center justify-center rounded-full border-[1.5px] border-black text-black transition-colors group-hover:bg-black group-hover:text-white"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </a>
  );
}

export default function Products() {
  return (
    <section id="platforms" aria-label="Our platforms" className="scroll-mt-4 pt-12 pb-12 md:pt-20 md:pb-20">
      <Container>
        <div className="mx-auto grid grid-cols-2 gap-x-6 gap-y-10 md:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
