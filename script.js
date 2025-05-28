var map = L.map("map").setView([56.9496, 24.1052], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      map.setView([lat, lng], 13);

      L.marker([lat, lng])
        .addTo(map)
        .bindPopup("Šeit Tu atrodies!")
        .openPopup();
    },
    function (error) {
      console.error("Nevar noteikt lokāciju: ", error);
    }
  );
} else {
  alert("Tava pārlūkprogramma neatbalsta ģeolokāciju.");
}

map.on("click", function (e) {
  const lat = e.latlng.lat.toFixed(5);
  const lng = e.latlng.lng.toFixed(5);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`Marķieris: ${lat}, ${lng}`)
    .openPopup();
});
