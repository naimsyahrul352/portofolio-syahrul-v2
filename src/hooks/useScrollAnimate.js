import { useEffect, useRef, useState } from "react";

export function useScrollAnimate(threshold = 0.3) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
