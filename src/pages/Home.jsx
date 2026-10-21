import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

import logo from "../../public/logo.png";
import about from ".././assets/about.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />

        <ProductList />

        <section
          id="about"
          className="w-full border-y border-beautyBorder bg-lightBlush"
        >
          {/* Navbar jaisa hi padding, koi max-w / mx-auto nahi */}
          <div className="grid w-full gap-10 px-5 py-20 sm:px-10 md:grid-cols-2 md:items-center lg:gap-16 lg:px-16 xl:px-24">
            <div>
              <p className="text-base font-semibold uppercase tracking-[0.3em] text-deepRose sm:text-lg">
                About Our Store
              </p>

              <h2 className="font-display mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
                A Little Love for Your Everyday Beauty
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-mutedText sm:text-lg sm:leading-9 lg:text-xl">
                Welcome to Hifza Beauty Products, your place to explore beauty
                essentials, skincare favorites and fragrances. Discover products
                for your personal care and everyday routine.
              </p>

              <Link
                to="/cart"
                className="mt-8 inline-flex items-center gap-2 text-lg font-semibold text-deepRose transition hover:text-beautyPink sm:text-xl"
              >
                Explore Your Cart
                <ArrowUpRight size={24} />
              </Link>
            </div>

            <div className="flex min-h-80 items-center justify-center rounded-3xl bg-white p-10">
              <div className="h-80 overflow-hidden rounded-3xl shadow-xl md:h-full md:min-h-80">
                <img
                  src={about}
                  alt="Hifza Beauty Products"
                  className="h-full w-full object-cover object-[80%_45%]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-beautyBorder bg-white">
        {/* Navbar jaisa hi padding */}
        <div className="flex w-full flex-col gap-6 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16 xl:px-24">
          <div>
            <img
              src={logo}
              alt="Hifza Beauty Products"
              className="h-16 w-auto max-w-[180px] object-contain object-left sm:h-20 sm:max-w-[220px] lg:h-24 lg:max-w-[260px]"
            />
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@example.com"
              aria-label="Email us"
              className="rounded-full border border-beautyBorder p-3.5 transition hover:bg-lightBlush"
            >
              <Mail size={22} />
            </a>
          </div>

          <p className="text-sm text-mutedText sm:text-base">
            © {new Date().getFullYear()} Hifza Beauty Products
          </p>
        </div>
      </footer>
    </div>
  );
}
