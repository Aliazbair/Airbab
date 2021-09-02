import { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

export default function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  //   Transform the search results object into
  // {latitude:466446,longitude:13,66556} object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  // console.log(coordinates);
  // the latitude and longitude of the center locations coordinates
  const center = getCenter(coordinates);
  console.log(center);
  // setup viewport for map
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });
  //   console.log(selectedLocation);
  return (
    <ReactMapGl
      mapStyle="mapbox://styles/aliapi/ckt2o7yf9264017o0zh9bksjn"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {/* display marker */}
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            latitude={result.lat}
            longitude={result.long}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              🚩{" "}
            </p>
          </Marker>
          {/* the popup that should show if we click on a marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              className="shadow-md "
            >
              <p className="p-2">{result.title}</p>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGl>
  );
}
