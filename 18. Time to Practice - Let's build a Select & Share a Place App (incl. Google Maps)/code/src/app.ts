const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const form = document.querySelector<HTMLFormElement>('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  console.log(enteredAddress);

  // Send to Google Maps API
  const url = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY";
}

form.addEvenListener('submit', searchAddressHandler);