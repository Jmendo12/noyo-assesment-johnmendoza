import { useState } from 'react';

export default function useSelectedAddressEvents() {
  const [selectedAddressEvents, setSelectedEvents] = useState([]);

  function handleAddressEventSelection(clickedEvent) {

    if (!eventIsAlreadySelected(selectedAddressEvents, clickedEvent) && selectedAddressEvents.length < 2) {
      setSelectedEvents(
        (prev) =>
          [
            ...prev,
            {
              id: clickedEvent.id,
              addressId: clickedEvent.payload.id,
              addressDate: getAddressDate(clickedEvent.url)
            }
          ]
      );

      return;
    }

    if (eventIsAlreadySelected(selectedAddressEvents, clickedEvent)) {
      setSelectedEvents((prev) => prev.filter((event) => event.id !== clickedEvent.id));
    }
  }

  return {
    selectedAddressEvents,
    handleAddressEventSelection
  };
}

function eventIsAlreadySelected(selectedEvents, clickedEvent) {
  return selectedEvents.findIndex(event => event.id === clickedEvent.id) !== -1;
}

function getAddressDate(url) {
  const dateIndex = url.indexOf("=") + 1;

  return url.substr(dateIndex);
}