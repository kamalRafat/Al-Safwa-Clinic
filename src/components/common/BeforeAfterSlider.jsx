import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { content as t } from "../../constants/content";

const BeforeAfterSlider = ({ beforeImage, afterImage, label }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();

    let debounceTimer;
    const handleResize = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(updateWidth, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(debounceTimer);
    };
  }, []);

  const handleMove = useCallback((event) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX =
      event.type === "touchmove" || event.type === "touchstart"
        ? event.touches[0].clientX
        : event.clientX;

    const position =
      ((clientX - containerRect.left) / containerRect.width) * 100;

    setSliderPosition(Math.min(Math.max(position, 0), 100));
  }, []);

  const onTouchMove = useCallback(
    (e) => {
      if (e.cancelable) {
        e.preventDefault();
      }
      handleMove(e);
    },
    [handleMove],
  );

  const handleMouseDown = useCallback(
    (e) => {
      setIsDragging(true);
      handleMove(e);
    },
    [handleMove],
  );

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMove, onTouchMove, handleMouseUp]);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        setSliderPosition((prev) => Math.max(0, prev - 5));
        break;
      case "ArrowRight":
        setSliderPosition((prev) => Math.min(100, prev + 5));
        break;
      case "Home":
        setSliderPosition(0);
        break;
      case "End":
        setSliderPosition(100);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center group/slider">
      <div
        ref={containerRef}
        className="relative w-full max-w-lg aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl cursor-col-resize select-none border-8 border-white transition-transform duration-500 group-hover/slider:scale-[1.02] focus:ring-4 focus:ring-primary/20 outline-none touch-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onClick={handleMove}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-label={`Before and after comparison for ${label}`}
        aria-valuenow={sliderPosition}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <img
          src={afterImage}
          alt={`After: ${label}`}
          loading="lazy"
          decoding="async"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div
          className="absolute top-0 left-0 h-full overflow-hidden border-r-4 border-white shadow-[10px_0_15px_rgba(0,0,0,0.1)]"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={`Before: ${label}`}
            loading="lazy"
            decoding="async"
            className="absolute top-0 left-0 max-w-none h-full object-cover"
            style={{ width: `${containerWidth}px` }}
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-transparent cursor-col-resize flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-12 h-12 -ml-6 bg-white rounded-2xl shadow-2xl flex items-center justify-center text-primary border-4 border-primary/10 transition-transform duration-300 group-hover/slider:scale-110">
            <div className="flex gap-1" aria-hidden="true">
              <ChevronLeft size={16} strokeWidth={4} />
              <ChevronRight size={16} strokeWidth={4} />
            </div>
          </div>
        </div>

        {/* Labels Overlay */}
        <div
          className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between"
          aria-hidden="true"
        >
          <div className="flex justify-between items-start">
            <div className="bg-white/80 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
              {t.common.before}
            </div>
            <div className="bg-primary/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
              {t.common.after}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-2xl font-black text-gray-900 mb-2">{label}</h3>
        <div className="flex items-center justify-center gap-2 text-primary font-bold text-sm uppercase tracking-tighter">
          <Sparkles size={16} />
          {t.common.guaranteed}
        </div>
      </div>
    </div>
  );
};

export default memo(BeforeAfterSlider);
