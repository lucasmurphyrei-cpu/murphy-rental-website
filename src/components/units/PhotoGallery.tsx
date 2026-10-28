"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";

export interface Photo {
  src: string;
  thumb: string;
  alt: string;
  width: number;
  height: number;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

const SWIPE_MIN_DISTANCE = 50;

const FOCUSABLE = "button:not([disabled]), [href], [tabindex]:not([tabindex='-1'])";

const tileClass =
  "group relative block h-full w-full overflow-hidden bg-navy/5 " +
  "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-amber focus-visible:z-10";

const imageClass =
  "object-cover transition-transform duration-500 group-hover:scale-[1.03] group-active:scale-[1.01] motion-reduce:transition-none";

const controlClass =
  "flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm " +
  "transition-transform duration-200 hover:scale-105 hover:bg-white/20 active:scale-95 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber motion-reduce:transition-none";

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [shown, setShown] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const count = photos.length;
  const isOpen = openIndex !== null && openIndex < count;

  const open = useCallback((index: number, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setOpenIndex(index);
  }, []);

  const close = useCallback(() => {
    setOpenIndex(null);
    setShown(false);
  }, []);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((i) => (i === null ? i : (i + delta + count) % count));
    },
    [count],
  );

  // Fade in after mount (opacity only), lock body scroll, move focus in / back out.
  useEffect(() => {
    if (!isOpen) return;
    const raf = requestAnimationFrame(() => setShown(true));
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const trigger = triggerRef.current;
    dialogRef.current?.querySelector<HTMLElement>("[data-close]")?.focus();
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [isOpen]);

  // Keyboard: arrows, Escape, and a Tab trap inside the dialog.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowLeft") {
        step(-1);
      } else if (e.key === "ArrowRight") {
        step(1);
      } else if (e.key === "Tab" && dialogRef.current) {
        const items = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
        ).filter((el) => el.offsetParent !== null); // skip breakpoint-hidden controls
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        const active = document.activeElement;
        if (!dialogRef.current.contains(active)) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close, step]);

  if (count === 0) return null;

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || count < 2) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    // Horizontal intent only, so vertical scrolls and taps never flip photos.
    if (Math.abs(dx) >= SWIPE_MIN_DISTANCE && Math.abs(dx) > Math.abs(dy) * 1.5) {
      step(dx < 0 ? 1 : -1);
    }
  };

  const visible = photos.slice(0, 3);
  const current = isOpen ? photos[openIndex] : null;

  // Desktop layout depends on how many photos exist, so there are never empty cells.
  const gridClass =
    count === 1
      ? "md:grid-cols-1"
      : count === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-[2fr_1fr] md:grid-rows-2";

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl shadow-[0_1px_2px_rgba(27,42,74,0.06),0_8px_24px_-4px_rgba(27,42,74,0.12)]">
        <div
          className={`grid grid-cols-1 gap-1.5 aspect-[4/3] md:aspect-auto md:h-[28rem] ${gridClass}`}
        >
          {visible.map((photo, i) => {
            const isHero = i === 0;
            const className =
              (isHero && count >= 3 ? "md:row-span-2 " : "") +
              (isHero ? "" : "hidden md:block ");
            return (
              <div key={photo.src} className={className}>
                <button
                  type="button"
                  onClick={(e) => open(i, e.currentTarget)}
                  className={tileClass}
                  aria-label={`Open photo ${i + 1} of ${count}: ${photo.alt}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    priority={isHero}
                    sizes={
                      isHero
                        ? "(min-width: 768px) 66vw, 100vw"
                        : "(min-width: 768px) 33vw, 100vw"
                    }
                    className={imageClass}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {count > 1 && (
          <button
            type="button"
            onClick={(e) => open(0, e.currentTarget)}
            className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-[0_1px_2px_rgba(27,42,74,0.1),0_6px_16px_-2px_rgba(27,42,74,0.25)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            <Images className="h-4 w-4" aria-hidden="true" />
            View all {count} photos
          </button>
        )}
      </div>

      {current && openIndex !== null && isOpen && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className={`fixed inset-0 z-[100] flex flex-col bg-navy-dark/95 transition-opacity duration-200 motion-reduce:transition-none ${
            shown ? "opacity-100" : "opacity-0"
          }`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <p
              className="text-sm font-medium tabular-nums text-white/90"
              aria-live="polite"
            >
              {openIndex + 1} / {count}
            </p>
            <button
              type="button"
              data-close
              onClick={close}
              className={controlClass}
              aria-label="Close photo viewer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 md:px-20">
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              priority
              sizes="100vw"
              className={`max-h-full w-auto max-w-full select-none object-contain transition-transform duration-300 ease-[cubic-bezier(0.34,1.3,0.64,1)] motion-reduce:transition-none ${
                shown ? "scale-100" : "scale-[0.98]"
              }`}
              draggable={false}
            />

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className={`${controlClass} absolute left-3 top-1/2 -translate-y-1/2 max-md:hidden`}
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className={`${controlClass} absolute right-3 top-1/2 -translate-y-1/2 max-md:hidden`}
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-6 w-6" aria-hidden="true" />
                </button>
              </>
            )}
          </div>

          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <p className="min-w-0 truncate text-sm text-white/80">{current.alt}</p>
            {count > 1 && (
              <div className="flex gap-2 md:hidden">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className={controlClass}
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className={controlClass}
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
