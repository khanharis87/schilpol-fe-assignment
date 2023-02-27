import { Flight } from '../../types/Flights'
import Button from '../Button/Button'
import './FlightResults.css'
import ChevronIcon from '../icons/Chevron'

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
