/* eslint-disable react-refresh/only-export-components --
   Intentionally colocating the provider and its hook in one small module. */
import { createContext, useContext, useEffect, useState } from 'react';

// A single source of truth for the current viewport size. Instead of measuring
// the window in App and threading `vSize` through every component as a prop,
// components that genuinely need pixel dimensions (for scroll-linked Framer
// Motion transforms) read it directly with `useViewport()`.
//
// The resize handler is throttled with requestAnimationFrame so it updates at
// most once per frame, and it skips the state update entirely when the
// dimensions haven't actually changed — so consumers don't re-render on
// no-op resize events.
const ViewportContext = createContext({ w: 0, h: 0 });

export function ViewportProvider({ children }) {
  const [vSize, setVSize] = useState(() => ({
    w: window.innerWidth,
    h: window.innerHeight,
  }));

  useEffect(() => {
    let frame = null;

    const handleResize = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        setVSize((prev) => {
          const w = window.innerWidth;
          const h = window.innerHeight;
          return prev.w === w && prev.h === h ? prev : { w, h };
        });
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ViewportContext.Provider value={vSize}>
      {children}
    </ViewportContext.Provider>
  );
}

export function useViewport() {
  return useContext(ViewportContext);
}
