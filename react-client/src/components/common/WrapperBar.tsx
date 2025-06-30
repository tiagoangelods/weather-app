
type WrapperBarProps = {
  children: React.ReactNode;
  className?: string;
}
export default function WrapperBar(props: WrapperBarProps) {
  const { children, className } = props;
  return (
    <div className={`w-full shadow-lg bg-white/20 px-6 py-4 flex items-center justify-between text-white ${className}`}>
      {children}
    </div>
  )
}