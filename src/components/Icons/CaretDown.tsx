type IconProps = { size?: number; className?: string }
export default function CaretDown({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="currentColor" className={className} aria-hidden="true">
      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
    </svg>
  )
}