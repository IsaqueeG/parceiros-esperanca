import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// @ts-ignore
import Foto1 from "@/assets/images/gallery/foto1.avif";
// @ts-ignore
import Foto2 from "@/assets/images/gallery/foto2.avif";
// @ts-ignore
import Foto3 from "@/assets/images/gallery/foto3.avif";
// @ts-ignore
import Foto4 from "@/assets/images/gallery/foto4.avif";
// @ts-ignore
import Foto5 from "@/assets/images/gallery/foto5.avif";
// @ts-ignore
import Foto6 from "@/assets/images/gallery/foto6.avif";
// @ts-ignore
import Foto7 from "@/assets/images/gallery/foto7.avif";

const images = [Foto1, Foto2, Foto3, Foto4, Foto5, Foto6, Foto7];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  function next() {
    setCurrent((prev) => (prev + 1) % images.length);
  }

  function previous() {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-green-700 font-semibold">
            Nossa Galeria
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 text-slate-900">
            Momentos que Transformam Vidas
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-slate-600 text-lg">
            Cada fotografia representa uma história de esperança,
            aprendizado e carinho compartilhado entre voluntários,
            alunos e famílias.
          </p>

        </div>

        <div className="relative max-w-4xl mx-auto flex justify-center">

          <div className="overflow-hidden rounded-3xl">

            <AnimatePresence mode="wait">

              <motion.img
                key={current}
                src={images[current]}
                alt="Galeria"
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="mx-auto max-h-[420px] w-auto object-contain rounded-3xl shadow-xl"
              />

            </AnimatePresence>

          </div>

          <button
            onClick={previous}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur rounded-full w-12 h-12 shadow-lg hover:scale-110 transition"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur rounded-full w-12 h-12 shadow-lg hover:scale-110 transition"
          >
            →
          </button>

        </div>

        <div className="flex justify-center gap-3 mt-8">

          {images.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-10 bg-green-700"
                  : "w-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />

          ))}

        </div>

      </div>

    </section>
  );
}