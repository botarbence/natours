export const displayMap = (locations) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYm90YXJiZW5jZSIsImEiOiJja29zYzhldm8wMDNjMnZvYWpsNm9uc3lxIn0.NR6TncOpEUOcVNBxCxhiuQ";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/botarbence/ckoscdti89i5a18pfh8807vx0",
    scrollZoom: false,
    // center:[],
    // zoom: 6,
    // interactive:false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement("div");
    el.className = "marker";

    new mapboxgl.Marker({
      element: el,
      anchor: "bottom",
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};

// var map = L.map('map', { zoomControl: false });

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// const points = [];
// locations.forEach((loc) => {
//   points.push([loc.coordinates[1], loc.coordinates[0]]);
//   L.marker([loc.coordinates[1], loc.coordinates[0]])
//     .addTo(map)
//     .bindPopup(`<p>Day ${loc.day}: ${loc.description}</p>`, { autoClose: false })
//     .openPopup();
// });

// const bounds = L.latLngBounds(points).pad(0.5);
// map.fitBounds(bounds);

// map.scrollWheelZoom.disable();
