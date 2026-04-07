type IconProps = { size?: number; className?: string }
export default function Download({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="currentColor" className={className} aria-hidden="true">
      <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z" />
    </svg>
  )
}