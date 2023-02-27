import { useState, lazy, Suspense } from 'react'
import SearchInput from '../../components/SearchInput/SearchInput'
import useFlight from '../../hooks/useFlight'
import './FlightSearch.css'

const FlightResults = lazy(
  () => import('../../components/FlightResults/FlightResults')
)

export default function FlightSearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const {
    filteredFlights,
    isSortedAscending,
    filterFlights,
    sortFlights,
    isLoading,
  } = useFlight()

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target
    setSearchTerm(value)
    filterFlights(value)
  }

  const displayResults = () =>
    searchTerm.length > 2 && filteredFlights.length > 0

  const noResultsFound = () =>
    searchTerm.length > 2 && filteredFlights.length < 1

  const handleSort = () => sortFlights(filteredFlights)

  return (
    <div className="flightSearch">
      <div className="flightSearch__input-wrapper">
        <h3>Find your flight</h3>
        <SearchInput
          handleInputChange={handleSearchInputChange}
          searchTerm={searchTerm}
        />
      </div>

      {noResultsFound() && (
        <h4 className="text-center">Can&apos;t find destination</h4>
      )}

      {displayResults() && (
        <Suspense fallback={<div>Loading Flight Results...</div>}>
          <FlightResults
            results={filteredFlights}
            isSortedAscending={isSortedAscending}
            handleSort={handleSort}
            isLoading={isLoading}
          />
        </Suspense>
      )}
    </div>
  )
}
