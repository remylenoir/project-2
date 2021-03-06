const addAthletic = () => {
  const id = "athletic-facilities";
  const data = "./javascripts/mapbox/layers/nyc-athletic.geojson";

  map.addLayer({
    id,
    type: "fill",
    source: {
      type: "geojson",
      data
    },
    layout: {
      visibility: "none"
    }
  });

  map.setPaintProperty(id, "fill-opacity", [
    "interpolate",
    ["exponential", 0.5],
    ["zoom"],
    9.9,
    0,
    10,
    0.6,
    14,
    0.9
  ]);

  map.setPaintProperty(id, "fill-color", ["interpolate", ["exponential", 0.5], ["zoom"], 0, "#efb430"]);
};
