interface ImagePlaceholderProps {
  label: string
  variant?: 'camera' | 'map'
  className?: string
}

export default function ImagePlaceholder({
  label,
  variant = 'camera',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center bg-qs-sand text-[#a09080] font-mono text-[11px] tracking-[.12em] uppercase gap-2.5 text-center p-4 transition-transform duration-[600ms] ease-[cubic-bezier(.25,.1,.25,1)] ${className}`}
    >
      {variant === 'map' ? (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ) : (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      )}
      {label}
    </div>
  )
}
