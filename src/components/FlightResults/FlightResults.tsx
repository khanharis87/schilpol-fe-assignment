import { Flight } from '../../types/Flights'
import Button from '../Button/Button'
import './FlightResults.css'

interface FlightResultsProps {
  results: Flight[]
  isSortedAscending: boolean
  handleSort: () => void
  isLoading: boolean
}

function FlightResults({
  results,
  isSortedAscending,
  handleSort,
  isLoading,
}: FlightResultsProps) {
  return (
    <div className="flightResults">
      {isLoading && <div>Loading....</div>}

      <div className="flightResults__sort-button">
        <Button handleClick={handleSort}>
          Sort by time
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width={10}
            height={10}
            className={
              isSortedAscending
                ? 'flightResults__sort-button--ascending'
                : 'flightResults__sort-button--descending'
            }
          >
            <path
              fillRule="evenodd"
              d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>

      <div className="flightResults__wrapper">
        <table>
          <thead>
            <tr>
              <th>Destination</th>
              <th>Flight Number</th>
              <th>Expected Time</th>
            </tr>
          </thead>
          <tbody>
            {results.map((flight) => (
              <tr key={flight.flightIdentifier}>
                <td>{flight.airport} </td>
                <td>{flight.flightNumber} </td>
                <td>{flight.expectedTime} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FlightResults
