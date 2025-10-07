export default function Input({
  label,
  error,
  iconLeft,
  iconRight,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col mb-2 w-full">
      {label && (
        <label className="text-sm text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <div className="relative w-full">
        {iconLeft && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {iconLeft}
          </div>
        )}

        <input
          {...props}
          className={`w-full p-2 pl-${iconLeft ? "10" : "2"} pr-${iconRight ? "10" : "2"} rounded-[6px] outline-none text-sm border 
            border-gray-300 dark:border-gray-600
            focus:border-[#00579F] dark:focus:border-blue-400
            bg-white dark:bg-gray-800
            text-gray-900 dark:text-white
            ${className}`}
        />

        {iconRight && (
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {iconRight}
          </button>
        )}
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
