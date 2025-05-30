const form = document.querySelector<HTMLFormElement>('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // Send to Google Maps API

}

form.addEvenListener('submit', searchAddressHandler);