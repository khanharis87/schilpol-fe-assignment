import './SearchInput.css'

interface SearchInputProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  searchTerm: string
}

function SearchInput({ handleInputChange, searchTerm }: SearchInputProps) {
  return (
    <input
      className="searchInput"
      type="text"
      placeholder="E.g. London"
      onChange={handleInputChange}
      value={searchTerm}
    />
  )
}

export default SearchInput
