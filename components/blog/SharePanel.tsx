'use client';

import { useState, useEffect } from 'react';
import { LinkIcon, CheckIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// SVG paths for brand icons since lucide-react removed them
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.04H5.078z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export function SharePanel({ title, slug }: { title: string, slug: string }) {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 200, damping: 20 } }
  } as const;

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="sticky top-32 flex flex-col items-center gap-4 py-8"
    >
      <motion.p 
        variants={itemVariants}
        className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40" 
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        Share Article
      </motion.p>
      <motion.div variants={itemVariants} className="h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent my-2" />
      
      {[
        { 
          href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, 
          icon: <TwitterIcon className="h-4 w-4 relative z-10" />,
          color: "hover:shadow-[0_0_15px_rgba(29,161,242,0.5)]"
        },
        { 
          href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`, 
          icon: <LinkedinIcon className="h-4 w-4 relative z-10" />,
          color: "hover:shadow-[0_0_15px_rgba(0,119,181,0.5)]"
        },
        { 
          href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, 
          icon: <FacebookIcon className="h-4 w-4 relative z-10" />,
          color: "hover:shadow-[0_0_15px_rgba(66,103,178,0.5)]"
        }
      ].map((social, i) => (
        <motion.a 
          key={i}
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/50 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white ${social.color}`}
        >
          {social.icon}
        </motion.a>
      ))}
      
      <motion.button 
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={copyLink}
        className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/50 transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key="check"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <CheckIcon className="h-4 w-4 text-green-400 relative z-10" />
            </motion.div>
          ) : (
            <motion.div
              key="link"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <LinkIcon className="h-4 w-4 relative z-10" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}
