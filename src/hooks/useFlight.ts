import { useEffect, useState } from 'react'
import { Flight } from '../types/Flights'
import getTimeInMinutes from '../utils/timeInMinutes'

const useFlight = () => {
  const [flights, setFlights] = useState<Flight[]>([])
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>([])
  const [isSortedAscending, setIsSortedAscending] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const sortFlights = (items: Flight[]) => {
    const sorted = [...items].sort((a, b) => {
      const timeA = getTimeInMinutes(a.expectedTime)
      const timeB = getTimeInMinutes(b.expectedTime)
      return isSortedAscending ? timeB - timeA : timeA - timeB
    })
    setFilteredFlights(sorted)
    setIsSortedAscending(!isSortedAscending)
  }

  useEffect(() => {
    const fetchFlights = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('flights.json')
        if (!response.ok) {
          throw new Error('Failed to fetch flights')
        }
        const flightsData = await response.json()
        setFlights(flightsData.flights)
        setFilteredFlights(flightsData.flights)
      } catch (err) {
        setError(err)
      }
      setIsLoading(false)
    }

    fetchFlights()
  }, [])

  const filterFlights = (searchTerm: string) => {
    const filtered = flights
      .filter((flight) =>
        flight.airport.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5)
    setFilteredFlights(filtered)
    setIsSortedAscending(true)
  }

  return {
    flights,
    filteredFlights,
    isSortedAscending,
    isLoading,
    error,
    filterFlights,
    sortFlights,
  }
}

export default useFlight
