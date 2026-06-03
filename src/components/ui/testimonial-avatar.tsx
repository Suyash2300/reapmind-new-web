import Image from 'next/image';

interface TestimonialAvatarProps {
  image: string | null;
  initials?: string;
  name: string;
  size: 'lg' | 'sm';
}

export function TestimonialAvatar({ image, initials, name, size }: TestimonialAvatarProps) {
  const dim    = size === 'lg' ? 'w-20 h-20' : 'w-10 h-10';
  const text   = size === 'lg' ? 'text-xl'   : 'text-sm';
  const radius = size === 'lg' ? 'rounded-2xl' : 'rounded-xl';
  const label  = initials ?? name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  if (image) {
    return (
      <div className={`relative ${dim} ${radius} overflow-hidden shrink-0`}>
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`${dim} ${radius} flex items-center justify-center font-bold ${text} shrink-0 select-none`}
      style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }}
      aria-label={name}
    >
      {label}
    </div>
  );
}
