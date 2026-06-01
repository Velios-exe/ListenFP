import './SearchBar.css';

interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({
  value = '',
  onChange,
  placeholder = 'Поиск по песням, исполнителям...',
}: SearchBarProps) => {
  return (
    <div className="search-bar">
      <div className="search-bar__input-wrap">
        {/* Search icon */}
        <svg className="search-bar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>

        <input
          id="search-input"
          className="search-bar__input"
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange?.(e.target.value)}
          autoComplete="off"
          aria-label="Поиск"
        />

        {value && (
          <button
            className="search-bar__clear"
            onClick={() => onChange?.('')}
            aria-label="Очистить поиск"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        )}

        {!value && (
          <div className="search-bar__shortcut" aria-hidden>
            <kbd>⌘</kbd><kbd>K</kbd>
          </div>
        )}
      </div>
    </div>
  );
};
