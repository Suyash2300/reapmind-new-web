/** Unique AI-style hero form visuals for Media / Social industry pages */

export type MediaSocialFormVisual = {
  id: string;
  route: string;
  formImage: string;
  formImageAlt: string;
  /** CSS radial-gradient for animated spotlight overlay */
  spotlight: string;
};

export const mediaSocialFormVisuals = {
  audioNetworking: {
    id: "audio-networking",
    route: "/audio-networking-platform",
    formImage: "/audio-networking/an-form-visual.svg",
    formImageAlt: "AI visualization of audio networking waves and connected listeners",
    spotlight: "radial-gradient(circle at 70% 40%, rgba(26,105,253,0.28), transparent 55%)",
  },
  imageVideoSharing: {
    id: "image-video-sharing",
    route: "/image-video-sharing-app",
    formImage: "/image-video-sharing/ivs-form-visual.svg",
    formImageAlt: "AI visualization of image and video sharing feeds and media galleries",
    spotlight: "radial-gradient(circle at 30% 60%, rgba(244,63,94,0.24), transparent 50%)",
  },
  professionalNetworking: {
    id: "professional-networking",
    route: "/professional-networking-platform",
    formImage: "/professional-networking/pnp-form-visual.svg",
    formImageAlt: "AI visualization of professional business network connections",
    spotlight: "radial-gradient(circle at 60% 35%, rgba(16,185,129,0.26), transparent 55%)",
  },
  shortVideoApp: {
    id: "short-video-app",
    route: "/short-video-app-development-platform",
    formImage: "/short-video-app/svad-form-visual.svg",
    formImageAlt: "AI visualization of short-form vertical video creation platform",
    spotlight: "radial-gradient(circle at 60% 35%, rgba(249,115,22,0.26), transparent 55%)",
  },
  socialNetworking: {
    id: "social-networking",
    route: "/social-networking-platform",
    formImage: "/social-networking/sn-form-visual.svg",
    formImageAlt: "AI visualization of global social network connections",
    spotlight: "radial-gradient(circle at 40% 30%, rgba(168,85,247,0.28), transparent 55%)",
  },
  datingApp: {
    id: "dating-app",
    route: "/dating-app-development",
    formImage: "/dating-app/dad-form-visual.svg",
    formImageAlt: "AI visualization of dating app matches and romantic connections",
    spotlight: "radial-gradient(circle at 55% 40%, rgba(244,63,94,0.26), transparent 55%)",
  },
} as const satisfies Record<string, MediaSocialFormVisual>;
