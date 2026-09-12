"use client";

/**
 * One pointer listener for every element that wants to know where the pointer
 * is.
 *
 * `MagneticElement` used to add its own `pointermove` listener to the window,
 * and each one measured its element on every event. Twelve of them are mounted
 * on the home page — the wordmark, six navigation links, five contact
 * channels — so a single mouse movement ran twelve handlers and forced twelve
 * layout reads, on a page that already has a cursor loop and a scroll handler
 * competing for the same frame. A pointer device can also emit events faster
 * than the display refreshes, so some of that work was being done more than
 * once per painted frame and thrown away.
 *
 * This is one listener, coalesced to one animation frame. Subscribers run in
 * a single batch with the same coordinates, which is both cheaper and more
 * correct: two magnets can no longer act on positions a few milliseconds
 * apart.
 */

type Subscriber = (x: number, y: number) => void;

const subscribers = new Set<Subscriber>();
let listening = false;
let frame = 0;
let x = 0;
let y = 0;

function flush() {
  frame = 0;
  for (const fn of subscribers) fn(x, y);
}

function onMove(e: PointerEvent) {
  x = e.clientX;
  y = e.clientY;
  if (!frame) frame = requestAnimationFrame(flush);
}

/**
 * Returns an unsubscribe function. The window listener exists only while at
 * least one subscriber does, so a page with no magnets pays nothing.
 */
export function subscribePointer(fn: Subscriber): () => void {
  subscribers.add(fn);
  if (!listening) {
    window.addEventListener("pointermove", onMove, { passive: true });
    listening = true;
  }

  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0 && listening) {
      window.removeEventListener("pointermove", onMove);
      listening = false;
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    }
  };
}
