
export default function Textarea({
  label,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col mb-2">
      {label && (
        <label className="text-sm text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <textarea
        {...props}
        className={`w-full p-2 rounded-[6px] outline-none text-sm border 
          border-gray-300 dark:border-gray-600
          focus:border-blue-500 dark:focus:border-blue-400
          bg-white dark:bg-gray-800
          resize-none
          ${className}`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
