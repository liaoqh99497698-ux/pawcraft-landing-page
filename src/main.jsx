import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Camera,
  Check,
  ChevronDown,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import "./styles.css";

const collarImage = "/images/hero-generated-dog-collar.png";
const studioImage =
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1800&q=85";

const features = [
  {
    title: "Made to Stay With Them",
    text: "A measured fit that feels secure on quiet walks, busy mornings, and every day in between.",
  },
  {
    title: "Engraved for Peace of Mind",
    text: "A calm nameplate keeps the details that matter close, without the noise of a swinging tag.",
  },
  {
    title: "Leather That Softens With Time",
    text: "Premium grain, refined stitching, and a feel made for long companionship.",
  },
];

const testimonials = [
  {
    quote:
      "After evening walks, I stopped worrying about noisy tags or loose clips. The nameplate feels quiet, secure, and made for her.",
    name: "Emily R.",
    pet: "Milo, Cocker Spaniel",
  },
  {
    quote:
      "It does not feel like something we bought for a photo. It feels like something Milo can wear every day.",
    name: "Marcus L.",
    pet: "Juniper, Tabby Cat",
  },
  {
    quote:
      "The leather softened naturally after the first week, and the engraved plate still looks calm and clear.",
    name: "Ava C.",
    pet: "Nori, Shiba Inu",
  },
];

const faq = [
  {
    q: "How do I choose the right size?",
    a: "Measure where the collar naturally rests, then leave room for two fingers. A quiet fit should feel secure, never tight.",
  },
  {
    q: "What can I engrave?",
    a: "Most families choose a name and phone number. Keep it simple, clear, and easy to read at a glance.",
  },
  {
    q: "Are the collars comfortable for daily wear?",
    a: "Yes. The collar is shaped for everyday movement, with smooth edges and materials chosen to feel gentle over time.",
  },
  {
    q: "How long does customization take?",
    a: "Most personalized collars are prepared within 3 to 5 business days before shipping.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=85",
];

const purchaseHighlights = [
  "Personalized brass nameplate",
  "Premium pebbled leather",
  "Measured everyday fit",
];

const sizes = [
  { label: "S", range: "10-14 in", note: "Cats and small dogs" },
  { label: "M", range: "14-18 in", note: "Most everyday companions" },
  { label: "L", range: "18-23 in", note: "Larger breeds" },
];

const colors = [
  { name: "Cocoa", className: "bg-[#4a2f23]" },
  { name: "Black", className: "bg-[#171717]" },
  { name: "Chestnut", className: "bg-[#8a5435]" },
  { name: "Sage", className: "bg-[#7b846f]" },
];

const lifestyleMoments = [
  {
    title: "Morning walks",
    text: "A secure fit that stays quiet when the day begins.",
  },
  {
    title: "Travel days",
    text: "Readable details kept close without a dangling tag.",
  },
  {
    title: "Everyday rest",
    text: "Soft leather that feels natural at home, too.",
  },
];

function App() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-neutral-950">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/25 bg-white/70 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a className="text-lg font-bold tracking-[0.1em] text-neutral-950 sm:text-xl" href="#top">
            PAWCRAFT STUDIO
          </a>
          <div className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
            <a className="transition hover:text-neutral-950" href="#shop">
              Shop
            </a>
            <a className="transition hover:text-neutral-950" href="#features">
              Materials
            </a>
            <a className="transition hover:text-neutral-950" href="#fit">
              Fit
            </a>
            <a className="transition hover:text-neutral-950" href="#engraving">
              Engraving
            </a>
            <a className="transition hover:text-neutral-950" href="#reviews">
              Reviews
            </a>
            <a className="transition hover:text-neutral-950" href="#faq">
              FAQ
            </a>
          </div>
        </div>
      </nav>

      <section id="top" className="relative min-h-[92svh] overflow-hidden pt-16">
        <img
          className="absolute inset-0 h-full w-full object-cover brightness-[0.97] contrast-[1.14] saturate-[1.02]"
          src={collarImage}
          alt="A calm dog wearing a refined custom collar"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,247,245,0.62)_0%,rgba(247,247,245,0.34)_34%,rgba(247,247,245,0.04)_68%,rgba(247,247,245,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_30%,rgba(0,0,0,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(255,255,255,0)_0%,rgba(0,0,0,0.08)_78%,rgba(0,0,0,0.16)_100%)]" />
        <div className="relative mx-auto flex min-h-[calc(92svh-4rem)] max-w-7xl items-center px-5 py-16 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 max-w-2xl text-sm font-semibold tracking-[0.04em] text-[#8d4f49] sm:text-base">
              Personalized collars crafted for safety & style
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[1.02] text-neutral-950 sm:text-6xl lg:text-7xl">
              Never Lose Touch.
            </h1>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-base font-medium text-white transition hover:bg-neutral-800"
                href="#shop"
              >
                Personalize Yours <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white/60 px-6 py-3 text-base font-medium text-neutral-950 backdrop-blur transition hover:bg-white"
                href="#real-fits"
              >
                See Real Fits
              </a>
            </div>
            <p className="mt-5 text-sm font-medium text-neutral-600 sm:text-base">
              Engraved nameplate &middot; Premium leather &middot; Made to fit
            </p>
          </div>
        </div>
        <a
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-neutral-600 md:block"
          href="#features"
          aria-label="Scroll to product details"
        >
          <ChevronDown size={28} />
        </a>
      </section>

      <section id="shop" className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-lg bg-[#f0eee7]">
            <img
              className="aspect-[5/4] w-full object-cover object-center"
              src={collarImage}
              alt="Pawcraft Studio personalized leather collar on a dog"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8d4f49]">
              Personalized collar
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Made for the dog you always look back for.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              A quiet leather collar with the details that matter: their name, your number, and a
              fit that feels secure through everyday life.
            </p>
            <div className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
              {purchaseHighlights.map((item) => (
                <div className="flex items-center gap-3 py-4 text-neutral-800" key={item}>
                  <Check className="text-[#557060]" size={18} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-base font-medium text-white transition hover:bg-neutral-800"
                href="#fit"
              >
                Choose Fit <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-base font-medium text-neutral-950 transition hover:bg-neutral-50"
                href="#engraving"
              >
                Preview Engraving
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#557060]">
              Product Values
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Designed for a quieter kind of luxury.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-neutral-600 lg:justify-self-end">
            Every detail is reduced to what matters: a secure fit, a gentle feel, and a polished
            identity detail that replaces noisy tags.
          </p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article
              className="rounded-lg border border-neutral-200 bg-white p-7 shadow-[0_12px_36px_rgba(20,20,20,0.025)]"
              key={feature.title}
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
                <Check size={20} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="fit" className="bg-[#f0eee7] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#557060]">
                Fit and color
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Choose the size they can live in.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-neutral-600 lg:justify-self-end">
              Start with where the collar naturally rests. Then choose a leather tone that feels at
              home with their daily rhythm.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Size guide</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {sizes.map((size) => (
                  <article
                    className="rounded-lg border border-neutral-200 bg-white p-5 shadow-[0_12px_36px_rgba(20,20,20,0.025)]"
                    key={size.label}
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-2xl font-semibold">{size.label}</span>
                      <span className="text-sm text-neutral-500">{size.range}</span>
                    </div>
                    <p className="mt-5 leading-7 text-neutral-600">{size.note}</p>
                  </article>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-neutral-500">
                Leave room for two fingers. The collar should feel secure, never tight.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Leather colors</h3>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {colors.map((color) => (
                  <article
                    className="rounded-lg border border-neutral-200 bg-white p-4 shadow-[0_12px_36px_rgba(20,20,20,0.025)]"
                    key={color.name}
                  >
                    <span
                      className={`block aspect-square rounded-md ${color.className}`}
                      aria-hidden="true"
                    />
                    <p className="mt-4 font-medium text-neutral-800">{color.name}</p>
                  </article>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-neutral-500">
                Warm brass hardware is paired with every color for a calm, unified finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="engraving" className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-lg bg-neutral-100">
            <img
              className="aspect-[4/5] w-full object-cover"
              src={studioImage}
              alt="A dog sitting in a warm studio setting"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-lg border border-white/40 bg-white/82 p-5 shadow-2xl backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                Engraving Preview
              </p>
              <div className="mt-3 flex items-center justify-between gap-4 rounded-full bg-neutral-950 px-5 py-4 text-white">
                <span className="text-base font-semibold tracking-[0.16em]">LUNA</span>
                <span className="text-sm text-white/70">+1 415 010 2026</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8d4f49]">
              Personal, not precious
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Your pet's name, engraved with restraint.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              We tune spacing, placement, and contrast so the engraved plate feels integrated into
              the collar, not added as an afterthought.
            </p>
            <div className="mt-8 grid gap-3 text-neutral-700 sm:grid-cols-3">
              <div className="rounded-lg bg-[#f7f7f5] p-4">
                <Sparkles className="mb-3 text-[#8d4f49]" size={22} aria-hidden="true" />
                Fine lettering
              </div>
              <div className="rounded-lg bg-[#f7f7f5] p-4">
                <ShieldCheck className="mb-3 text-[#557060]" size={22} aria-hidden="true" />
                Tag-free safety
              </div>
              <div className="rounded-lg bg-[#f7f7f5] p-4">
                <HeartHandshake className="mb-3 text-neutral-800" size={22} aria-hidden="true" />
                Gift-ready finish
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="real-fits" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#557060]">
              Real fits
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Worn in the quiet parts of the day.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-neutral-600 lg:justify-self-end">
            A collar should look considered in a photograph, then disappear into daily life because
            it simply works.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {lifestyleMoments.map((moment, index) => (
            <article className="overflow-hidden rounded-lg bg-white" key={moment.title}>
              <img
                className="aspect-[4/5] w-full object-cover"
                src={gallery[index]}
                alt={`${moment.title} with a Pawcraft Studio collar`}
              />
              <div className="border-x border-b border-neutral-200 p-6">
                <h3 className="text-xl font-semibold">{moment.title}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{moment.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#557060]">
              Trusted by pet families
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Small details, deeply noticed.
            </h2>
          </div>
          <p className="text-lg text-neutral-600">Stories from everyday walks.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure className="rounded-lg bg-white p-7 shadow-[0_12px_36px_rgba(20,20,20,0.025)]" key={item.name}>
              <blockquote className="text-lg leading-8 text-neutral-800">"{item.quote}"</blockquote>
              <figcaption className="mt-8 border-t border-neutral-200 pt-5">
                <span className="block font-semibold">{item.name}</span>
                <span className="text-sm text-neutral-500">{item.pet}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="gallery" className="bg-neutral-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#d8aaa6]">
                <Camera size={17} aria-hidden="true" /> Studio Feed
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Worn in real light.
              </h2>
            </div>
            <a className="text-sm font-medium text-white/70 transition hover:text-white" href="#top">
              @pawcraft.studio
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
            {gallery.map((src, index) => (
              <img
                className="aspect-square w-full rounded-lg object-cover"
                src={src}
                alt={`Pawcraft Studio social gallery ${index + 1}`}
                key={src}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#8d4f49]">
          FAQ
        </p>
        <h2 className="mt-4 text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Before you customize.
        </h2>
        <div className="mt-12 divide-y divide-neutral-200 rounded-lg bg-white px-6 shadow-[0_12px_36px_rgba(20,20,20,0.025)]">
          {faq.map((item) => (
            <details className="group py-6" key={item.q}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                {item.q}
                <ChevronDown
                  className="shrink-0 transition group-open:rotate-180"
                  size={20}
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-4 max-w-2xl leading-7 text-neutral-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
          <span className="font-semibold tracking-[0.16em] text-neutral-950">PAWCRAFT STUDIO</span>
          <span>Custom collars, crafted with care.</span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
