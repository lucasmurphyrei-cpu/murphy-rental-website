"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Photo } from "./PhotoGallery";

/**
 * A floor plan is not a photo: it must always be shown whole, never cropped, and it is
 * unreadable at aside width. So it keeps its natural aspect in the card and opens
 * full-screen on tap, rather than going through PhotoGallery's cover-cropped tiles.
 */
export function FloorPlanViewer({ plan }: { plan: Photo }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      // Only two focusable things exist while open, so keep focus on the close button.
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [isOpen, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Enlarge the floor plan"
        className="block w-full cursor-zoom-in rounded-lg transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy motion-reduce:transition-none"
      >
        <Image
          src={plan.src}
          alt={plan.alt}
          width={plan.width}
          height={plan.height}
          sizes="(min-width: 1024px) 380px, 100vw"
          className="h-auto w-full rounded-lg"
        />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Floor plan"
          onClick={close}
          className="fixed inset-0 z-50 flex flex-col bg-navy/95 p-4 backdrop-blur-sm"
        >
          <div className="flex justify-end">
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close the floor plan"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition-transform duration-200 hover:scale-105 hover:bg-white/20 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber motion-reduce:transition-none"
            >
              &times;
            </button>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center">
            <Image
              src={plan.src}
              alt={plan.alt}
              width={plan.width}
              height={plan.height}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full w-auto max-w-full cursor-default object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
