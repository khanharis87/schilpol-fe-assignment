import { Flight } from '../../../types/Flights'
import './FlightsTable.css'

interface FlightsTableProps {
  results: Flight[]
}

export default function FlightsTable({ results }: FlightsTableProps) {
  return (
    <table className="flightsTable">
      <thead className="flightsTable__head">
        <tr className="flightsTable__head-row">
          <th className="flightsTable__head-row-item">Destination</th>
          <th className="flightsTable__head-row-item">Flight Number</th>
          <th className="flightsTable__head-row-item">Expected Time</th>
        </tr>
      </thead>
      <tbody>
        {results.map((flight) => (
          <tr className="flightsTable__body-row" key={flight.flightIdentifier}>
            <td className="flightsTable__body-row-data">{flight.airport} </td>
            <td className="flightsTable__body-row-data">
              {flight.flightNumber}
            </td>
            <td className="flightsTable__body-row-data">
              {flight.expectedTime}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
