import { useState } from 'react';

export default function useSelectedAddressEvents() {
  const [selectedAddressEvents, setSelectedEvents] = useState([]);

  function handleAddressEventSelection(clickedEventId) {

    if (!selectedAddressEvents.includes(clickedEventId) && selectedAddressEvents.length < 2) {
      setSelectedEvents((prev) => [...prev, clickedEventId]);

      return;
    }

    if (selectedAddressEvents.includes(clickedEventId)) {
      setSelectedEvents((prev) => prev.filter((eventId) => eventId !== clickedEventId));
    }

  }

  return {
    selectedAddressEvents,
    handleAddressEventSelection
  };
}