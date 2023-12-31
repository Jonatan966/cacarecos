"use client";

import { ReactNode, useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ContentCarouselProps {
  listWidth?: number;
  items: {
    imageUrl: string;
    description?: string;
    action?: ReactNode;
  }[];
  isPlaying?: boolean;
  velocityInMs?: number;
  className?: string;
}

const FIVE_SECONDS = 5000;

export function ContentCarousel({
  listWidth = 64,
  items,
  isPlaying,
  velocityInMs = FIVE_SECONDS,
  className,
}: ContentCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedItemKey, setSelectedItemKey] = useState(0);

  const selectedItem = items[selectedItemKey];

  const autoPlayingTimerRef = useRef<number>(-1);

  useEffect(() => {
    clearTimeout(autoPlayingTimerRef.current);

    if (!isPlaying || isPaused) {
      return;
    }

    autoPlayingTimerRef.current = Number(
      setInterval(
        () =>
          setSelectedItemKey((oldItemKey) =>
            oldItemKey === items.length - 1 ? 0 : oldItemKey + 1
          ),
        velocityInMs
      )
    );

    return () => clearTimeout(autoPlayingTimerRef.current);
  }, [isPlaying, isPaused, items, velocityInMs]);

  return (
    <section className={cn("flex gap-2", className)}>
      <div className="flex-1 border p-2 flex flex-col justify-end">
        <div className="relative flex-1">
          <Image
            fill
            src={selectedItem.imageUrl}
            alt="bla"
            className="object-contain"
          />
        </div>
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {selectedItem?.description && <p>{selectedItem.description}</p>}
          {selectedItem?.action}
        </div>
      </div>
      {items.length > 1 && (
        <div
          className={"flex flex-col gap-2"}
          style={{ width: `${listWidth / 4}rem` }}
        >
          {items.map((item, itemIndex) => (
            <Button
              variant={selectedItemKey === itemIndex ? "secondary" : "outline"}
              className="flex-1 relative"
              key={`carousel-${itemIndex}`}
              onClick={() => setSelectedItemKey(itemIndex)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <Image
                fill
                src={item.imageUrl}
                alt={item.description || "carousel image"}
                className="object-contain"
              />
            </Button>
          ))}
        </div>
      )}
    </section>
  );
}
