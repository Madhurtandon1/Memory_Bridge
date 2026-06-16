import { Search, X } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search..."
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-2.5
        bg-white
        rounded-xl
        border
        border-caramel/20
        px-4
        w-full
        transition-all
        duration-200
        focus-within:border-caramel
        focus-within:ring-2
        focus-within:ring-caramel/10
        hover:border-caramel/40"
    >
      {/* Search Icon */}
      <Search
        size={16}
        className="
          text-caramel/70
          flex-shrink-0
          transition-colors"
      />

      {/* Interactive Input Node Element */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          flex-1
          py-3
          text-sm
          sm:text-base
          text-brownie
          placeholder:text-brownie/40
          outline-none
          bg-transparent
          min-w-0"
      />

      {/* High-Contrast Reset Action Button Trigger */}
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="
            p-1.5
            -mr-1
            rounded-lg
            text-brownie/50
            hover:text-brownie
            hover:bg-caramel/5
            transition-all
            flex-shrink-0"
          aria-label="Clear Search Input"
        >
          <X size={15} />
        </button>
      )}
    </div>
  );
}