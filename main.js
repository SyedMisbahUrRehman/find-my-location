// use the geolocation API to get the user's current location
if ("geolocation" in navigator) {
  console.log("geolocation is available");
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude, position.coords.longitude);
  });
}
else {
  console.log("geolocation is not available");
};

//function to get the user's current location
function getLocation(){
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const locationDisplay = document.getElementById("locationDisplay");
    locationDisplay.innerHTML = `Latitude: ${lat} <br> Longitude: ${lon}`
  });
  }
  //usage of openstreetmap API to get the user's current address
  function getAddress(){
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
    fetch(apiUrl)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.address);
      const addressDisplay = document.getElementById("addressDisplay");
      addressDisplay.innerHTML = `Address: ${data.address.neighbourhood},${data.address.town}, ${data.address.city}, ${data.address.state}, ${data.address.country}`;
    });
  });
  }
