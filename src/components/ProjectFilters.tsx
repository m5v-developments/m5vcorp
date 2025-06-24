import React, { useState, useRef, useEffect } from 'react';

// Placeholder MultiSelect – swap in your own dropdown component
interface MultiSelectProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (values: string[]) => void;
}

function MultiSelect({ label, options, selected, onChange }: MultiSelectProps) {
  return (
    <div className="flex flex-col">
      <label className="text-xs font-medium mb-1">{label}</label>
      <select
        multiple
        value={selected}
        onChange={e =>
          onChange(Array.from(e.target.selectedOptions, o => o.value))
        }
        className="border rounded px-3 py-2 text-sm"
      >
        {options.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

interface DropdownMultiSelectProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (values: string[]) => void;
}

function DropdownMultiSelect({ label, options, selected, onChange }: DropdownMultiSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative min-w-[160px]" ref={ref}>
      <button
        type="button"
        className="flex items-center justify-between w-full border rounded px-3 py-2 text-sm bg-white"
        onClick={() => setOpen((v) => !v)}
      >
        <span>
          {label}
          {selected.length > 0 && (
            <span className="ml-2 text-xs text-gray-500">({selected.length})</span>
          )}
        </span>
        <svg
          className={`ml-2 w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-20 mt-2 w-full bg-white border rounded shadow-lg max-h-56 overflow-auto">
          {options.map((opt) => (
            <label
              key={opt}
              className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => {
                  if (selected.includes(opt)) {
                    onChange(selected.filter((v) => v !== opt));
                  } else {
                    onChange([...selected, opt]);
                  }
                }}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

interface FiltersProps {
  count: number;
  locations: string[];
  statuses: string[];
  cityOptions: string[];
  onChange: (filters: {
    search?: string;
    locations?: string[];
    statuses?: string[];
    clearAll?: boolean;
  }) => void;
}

const STATUS_OPTIONS = ['Completed', 'Construction', 'Sales', 'Planning'];

export default function ProjectFilters({
  count,
  locations,
  statuses,
  cityOptions,
  onChange,
}: FiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 py-6">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search projects…"
        className="flex-1 border rounded px-4 py-2"
        onChange={e => onChange({ search: e.target.value })}
      />

      {/* Location dropdown multi-select */}
      <DropdownMultiSelect
        label="Location"
        options={cityOptions}
        selected={locations}
        onChange={vals => onChange({ locations: vals })}
      />

      {/* Status dropdown multi-select */}
      <DropdownMultiSelect
        label="Status"
        options={STATUS_OPTIONS}
        selected={statuses}
        onChange={vals => onChange({ statuses: vals })}
      />

      {/* Clear filters */}
      <button
        onClick={() => onChange({ clearAll: true })}
        className="text-sm text-gray-500 hover:underline"
      >
        Clear filters
      </button>

      {/* Result count */}
      <div className="ml-auto text-sm text-gray-700">
        Showing <strong>{count}</strong> projects
      </div>
    </div>
  );
} 