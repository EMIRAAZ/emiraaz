import Image from "next/image";
import Container from "@/components/layout/Container";
import { products, type Product } from "@/data/products";

function ProductCard({ product }: { product: Product }) {
  const external = product.href.startsWith("http");

  return (
    <a
      href={product.href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="group flex flex-col items-center text-center"
    >
      <Image
        src={product.icon}
        alt={`${product.name} logo`}
        width={200}
        height={200}
        className="size-[104px] transition-transform duration-300 group-hover:-translate-y-1 md:size-[160px] lg:size-[198px]"
      />

      <h3 className="mt-4 text-lg font-semibold tracking-[-0.01em] text-black md:mt-8 md:text-[26px] lg:mt-10">
        {product.name}
      </h3>

      <p className="mt-1 text-[15px] font-light leading-[1.15] text-black md:mt-5 md:leading-[1.2] md:text-[21px] lg:text-2xl">
        {product.tagline[0]}
        <br />
        {product.tagline[1]}
      </p>

      <span
        aria-hidden
        className="mt-3 inline-flex size-8 md:mt-4 md:size-10 lg:size-12 items-center justify-center rounded-full border-[1.5px] border-black text-black transition-colors group-hover:bg-black group-hover:text-white"
      >
        <svg width="16" height="16" className="lg:size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
