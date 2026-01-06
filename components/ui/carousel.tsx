"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type Item = {
  title: string;
  desc: string;
  badge?: string;
  image?: string;
};

export function Carousel({ items }: { items: Item[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white/60 p-4 shadow-sm">
      <div className="flex items-center justify-between gap-2 pb-3">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          className="rounded-2xl border border-neutral-300 px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 disabled:hover:bg-transparent"
        >
          ←
        </button>
        <div className="text-xs text-neutral-500">drag / swipe</div>
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          className="rounded-2xl border border-neutral-300 px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 disabled:hover:bg-transparent"
        >
          →
        </button>
      </div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="min-w-[78%] sm:min-w-[45%] md:min-w-[32%]"
            >
              <div className="h-full rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="text-xs text-neutral-500">{it.badge}</div>
                <div className="mt-2 text-base font-semibold text-neutral-900">{it.title}</div>
                <div className="mt-2 text-sm text-neutral-700">{it.desc}</div>
                <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100">
                  {it.image ? (
                    <Image
                      src={it.image}
                      alt={it.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 78vw, (max-width: 768px) 45vw, 32vw"
                    />
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
