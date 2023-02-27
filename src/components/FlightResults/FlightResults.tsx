import Button from '../Button/Button'
import './FlightResults.css'
import ChevronIcon from '../Icon/Chevron'

interface FlightResultsProps {
  isSortedAscending: boolean
  handleSort: () => void
  isLoading: boolean
  children: React.ReactNode
}

function FlightResults({
  isSortedAscending,
  handleSort,
  isLoading,
  children,
}: FlightResultsProps) {
  return (
    <div className="flightResults">
      {isLoading && <div>Loading....</div>}

      <div className="flightResults__sort-button">
        <Button handleClick={handleSort}>
          Sort by time{' '}
          <ChevronIcon
            width={10}
            height={10}
            className={
              isSortedAscending
                ? 'flightResults__sort-button--ascending'
                : 'flightResults__sort-button--descending'
            }
          />
        </Button>
      </div>

      <div className="flightResults__wrapper">{children}</div>
    </div>
  )
}

export default FlightResults
