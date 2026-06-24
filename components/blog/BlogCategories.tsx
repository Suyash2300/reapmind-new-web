'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useCallback, useRef, useState, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

interface BlogCategoriesProps {
  categories: string[];
}

function MagneticButton({
  children,
  onClick,
  isActive,
}: {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.2); // Pull factor
    y.set((clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-300 ${
        isActive ? 'text-white' : 'text-white/50 hover:text-white'
      }`}
    >
      <AnimatePresence>
        {!isActive && isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="absolute inset-0 rounded-full bg-white/5"
          />
        )}
      </AnimatePresence>
      
      {isActive && (
        <motion.div
          layoutId="activeCategoryPill"
          className="absolute inset-0 rounded-full bg-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

export function BlogCategories({ categories }: BlogCategoriesProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentCategory = searchParams.get('category') || 'All';

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value && value !== 'All') {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      params.delete('page'); // Reset to page 1 on category change
      return params.toString();
    },
    [searchParams]
  );

  const handleCategoryClick = (category: string) => {
    router.push(`${pathname}?${createQueryString('category', category)}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap gap-2 lg:gap-3">
      <MagneticButton
        isActive={currentCategory === 'All'}
        onClick={() => handleCategoryClick('All')}
      >
        All Insights
      </MagneticButton>
      {categories.map((category) => (
        <MagneticButton
          key={category}
          isActive={currentCategory === category}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </MagneticButton>
      ))}
    </div>
  );
}
