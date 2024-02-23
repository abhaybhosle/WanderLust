
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map", // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: listing1.geometry.coordinates, // starting position [lng, lat]
    zoom: 6, // starting zoom
    attributionControl: false,
});

const marker1 = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing1.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h4>${listing1.location}</h4><p>Exact location will be provided after booking</p>`
        )
    )
    .addTo(map);
