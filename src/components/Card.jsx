export default function Card({ children, className = '', featured = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-lg border bg-white transition-all duration-300 hover:-translate-y-1
        ${featured
          ? 'border-gold-500/40 shadow-md hover:shadow-xl'
          : 'border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-lg'
        }
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
