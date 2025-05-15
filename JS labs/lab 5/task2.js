function parseCities(tableRows) {
  const cities = [];

  for (const row of tableRows) {
    const [city, latitude, longitude] = row
      .split("|")
      .map((item) => item.trim());
    const formattedLatitude = parseFloat(latitude).toFixed(2);
    const formattedLongitude = parseFloat(longitude).toFixed(2);

    const cityObject = {
      city: city,
      latitude: parseFloat(formattedLatitude), // Преобразуем в число (важно!)
      longitude: parseFloat(formattedLongitude), // Преобразуем в число (важно!)
    };

    cities.push(cityObject);
  }

  return cities;
}

const tableData = [
  "Moscow | 55.7522 | 37.6156",
  "Beijing | 39.913818 | 116.363625",
];

const cityObjects = parseCities(tableData);
console.log(JSON.stringify(cityObjects, null, 2));
