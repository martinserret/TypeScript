// In modern Javascript, you can use fetch to make HTTP requests. In this project, we will use Axios to make a request to the Google Maps API.
// Axios got built-in Typescript support, which makes it easier to work with in a TypeScript project. (index.d.ts file in the node_modules folder)

import axios from 'axios';


const form = document.querySelector<HTMLFormElement>('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

// declare var google: any; // Declare the google variable to avoid TypeScript errors

type GoogleGeocodingResponse = {
  results: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }[],
  status: 'OK' | 'ZERO_RESULTS' | 'OVER_DAILY_LIMIT' | 'OVER_QUERY_LIMIT' | 'REQUEST_DENIED' | 'INVALID_REQUEST' | 'UNKNOWN_ERROR';
}

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // Send to Google Maps API
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_MAPS_API_KEY}`; // encoreURI is used to encode the address to be used in a URL

  axios
    .get<GoogleGeocodingResponse>(url)
    .then(response => {
      if (response.data.status !== 'OK') {
        throw new Error('Could not fetch location - please try again later!');
      }
      const coordinates = response.data.results[0].geometry.location;

      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: coordinates,
        zoom: 16
      });

      new google.maps.Marker({
        map: map,
        position: coordinates,
      });

    })
    .catch(error => {
      alert(error.message);
      console.error(error);
    });
}

form.addEventListener('submit', searchAddressHandler);