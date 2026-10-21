import { ArrowRight, Sparkles } from "lucide-react";
import hero from "../../public/hero.png";

export default function Hero() {
  return (
    <section className="w-full">
      <div
        className="relative flex min-h-[calc(100svh-96px)] w-full items-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(45, 18, 31, 0.82) 0%, rgba(45, 18, 31, 0.60) 42%, rgba(45, 18, 31, 0.12) 100%), url(${hero})`,
        }}
      >
        <div className="w-full px-5 py-16 text-white sm:px-10 sm:py-20 lg:px-16 xl:px-24">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-base backdrop-blur-md sm:text-lg">
            <Sparkles size={24} />
            <span>Your Beauty, Your Glow</span>
          </div>

          <h1 className="max-w-5xl font-display text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[8rem]">
            Discover Your
            <span className="mt-2 block text-pink-200">
              Natural Glow
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/95 sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
            Explore your beauty essentials, skincare favorites,
            makeup must-haves and fragrances for your everyday
            self-care routine.
          </p>

          <a
            href="#shop"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-beautyPink px-10 py-5 text-lg font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-deepRose sm:px-12 sm:py-6 sm:text-xl"
          >
            Shop Beauty Products
            <ArrowRight size={26} />
          </a>

          <p className="mt-8 text-sm font-medium tracking-[0.25em] text-white/85 sm:text-base">
            BEAUTY <span className="mx-2">•</span> CARE
            <span className="mx-2">•</span> CONFIDENCE
          </p>
        </div>
      </div>
    </section>
  );
}