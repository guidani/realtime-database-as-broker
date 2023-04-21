import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";
const containerStyle = {
  width: "100%",
  height: "400px",
};

const position = {
  lat: -5.088823,
  lng: -42.810685,
};

const position2 = {
  lat: -5.088997,
  lng: -42.810577,
};

const Mapa = () => {
  const [markers, setMarkers] = useState([]);

  const handleMapDoubleClick = (event) => {
    // event.preventDefault()
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      id: Math.random().toString(36).substring(2, 9) // generate a unique ID for each marker

    };
    setMarkers([...markers, newMarker]);
  };

  const handleRemoveMarkerClick = (markerId) => {
    setMarkers(markers.filter(marker => marker.id !== markerId));
  }

  const handleMarkerDragEnd = (markerId, event) => {
    const updatedMarkers = markers.map(marker => {
      if (marker.id === markerId) {
        return {
          ...marker,
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        };
      }
      return marker;
    });
    setMarkers(updatedMarkers);
  }

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: `${import.meta.env.VITE_MAPS_API_KEY}`,
  });

  if (loadError) {
    return <div>Erro ao carregar o mapa</div>;
  }

  return (
    <>
      {!isLoaded && <div>Carregando...</div>}
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={position}
          zoom={20}
          onDblClick={handleMapDoubleClick}
          options={{disableDoubleClickZoom: true}}
        >
          {/* <Marker position={position} icon={""} draggable/> */}
          {/* <Marker position={position2} icon={""} draggable/> */}
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              draggable
              onClick={() => handleRemoveMarkerClick(marker.id)}
              onDragEnd={(event) => handleMarkerDragEnd(marker.id, event)}

            />
          ))}
        </GoogleMap>
        
      )}
      <div>
        <h2>Positions on maps</h2>
        {markers.map((marker, index) => (
          <div key={index}>
            <p>Latitude: {marker.lat}</p>
            <p>Longitude: {marker.lng}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mapa;
