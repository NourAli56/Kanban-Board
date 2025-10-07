import { useRef, useCallback, useEffect } from "react";


export default function useAutoScroll(containerRef, options = {}) {
    const { edge = 120, maxSpeed = 30 } = options;
    const draggingRef = useRef(false);
    const rafRef = useRef(null);
    const lastEventRef = useRef(null);


    const pointerMoveHandler = useCallback(
        (event) => {
            if (!draggingRef.current) return;
            lastEventRef.current = event;
            if (rafRef.current) return;


            rafRef.current = requestAnimationFrame(() => {
                const e = lastEventRef.current;
                rafRef.current = null;
                const container = containerRef.current;
                if (!e || !container) return;


                const clientX = e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX;
                const rect = container.getBoundingClientRect();
                const left = rect.left;
                const right = rect.right;


                if (clientX > right - edge) {
                    const factor = (clientX - (right - edge)) / edge; // 0..1
                    const speed = Math.min(maxSpeed, Math.ceil(factor * maxSpeed));
                    container.scrollLeft += speed;
                } else if (clientX < left + edge) {
                    const factor = ((left + edge) - clientX) / edge;
                    const speed = Math.min(maxSpeed, Math.ceil(factor * maxSpeed));
                    container.scrollLeft -= speed;
                }
            });
        },
        [containerRef, edge, maxSpeed]
    );


    const startAutoScroll = useCallback(() => {
        if (draggingRef.current) return;
        draggingRef.current = true;
        window.addEventListener("pointermove", pointerMoveHandler, { passive: true });
        window.addEventListener("touchmove", pointerMoveHandler, { passive: true });
        window.addEventListener("mousemove", pointerMoveHandler);
    }, [pointerMoveHandler]);


    const stopAutoScroll = useCallback(() => {
        draggingRef.current = false;
        window.removeEventListener("pointermove", pointerMoveHandler);
        window.removeEventListener("touchmove", pointerMoveHandler);
        window.removeEventListener("mousemove", pointerMoveHandler);
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
        lastEventRef.current = null;
    }, [pointerMoveHandler]);


    useEffect(() => {
        return () => {
            stopAutoScroll();
        };
    }, [stopAutoScroll]);


    return { startAutoScroll, stopAutoScroll };
}