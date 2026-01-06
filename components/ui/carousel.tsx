"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type Item = {
  title: string;
  desc: string;
  badge?: string;
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
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between gap-2 pb-3">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          className="rounded-2xl border border-white/15 px-3 py-2 text-sm text-white/80 disabled:opacity-40"
        >
          ←
        </button>
        <div className="text-xs text-white/60">drag / swipe</div>
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          className="rounded-2xl border border-white/15 px-3 py-2 text-sm text-white/80 disabled:opacity-40"
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
              <div className="h-full rounded-3xl border border-white/10 bg-black/30 p-5">
                <div className="text-xs text-white/60">{it.badge}</div>
                <div className="mt-2 text-base font-semibold">{it.title}</div>
                <div className="mt-2 text-sm text-white/75">{it.desc}</div>
                <div className="mt-4 aspect-[4/3] w-full rounded-2xl bg-white/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
