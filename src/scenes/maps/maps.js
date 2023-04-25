// import React, { useState, useEffect, useRef } from 'react';

// const GoogleMap = () => {
//   const [map, setMap] = useState(null);
//   const [autocomplete, setAutocomplete] = useState(null);
//   const [location, setLocation] = useState(null);
//   const mapRef = useRef(null);
//   const searchInputRef = useRef(null);

//   useEffect(() => {
//     // Get the user's current location
//     navigator.geolocation.getCurrentPosition(position => {
//       const { latitude, longitude } = position.coords;

//       // Create a new map centered on the user's location
//       const newMap = new window.google.maps.Map(mapRef.current, {
//         center: { lat: latitude, lng: longitude },
//         zoom: 14
//       });

//       // Create a new Autocomplete object and attach it to the search input
//       const newAutocomplete = new window.google.maps.places.Autocomplete(searchInputRef.current, { types: ['geocode'] });
//       newAutocomplete.bindTo('bounds', newMap);

//       // When the user selects a location from the autocomplete results, center the map on that location
//       newAutocomplete.addListener('place_changed', () => {
//         const selectedPlace = newAutocomplete.getPlace();
//         if (selectedPlace.geometry) {
//           newMap.panTo(selectedPlace.geometry.location);
//           newMap.setZoom(14);
//           setLocation(selectedPlace.geometry.location);
//         }
//       });

//       setMap(newMap);
//       setAutocomplete(newAutocomplete);
//       setLocation({ lat: latitude, lng: longitude });
//     });
//   }, []);

//   return (
//     <div style={{ width: '100%', height: '100%' }}>
//       <input
//         type="text"
//         ref={searchInputRef}
//         style={{ position: 'absolute', top: '10px', left: '10px', width: '200px' }}
//       />
//       <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
//     </div>
//   );
// };

// export default GoogleMap;
