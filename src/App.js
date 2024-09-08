import React, { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import RouteDisplay from './components/RouteDisplay';
import RouteSummary from './components/RouteSummary';

const App = () => {
    const [startCoords, setStartCoords] = useState(null);
    const [endCoords, setEndCoords] = useState(null);
    const [route, setRoute] = useState(null);
    const [routeSummary, setRouteSummary] = useState(null);
    const [routeSteps, setRouteSteps] = useState([]);

    const handleCalculateRoute = async () => {
        if (startCoords && endCoords) {
            const response = await fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248be68296ed7a44df88c320eba4f9ecff0`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    coordinates: [startCoords, endCoords],
                }),
            });
            const data = await response.json();

            setRoute(data.routes[0].geometry);
            setRouteSummary(data.routes[0].summary);
            setRouteSteps(data.routes[0].segments[0].steps);
        } else {
            console.error("Start- und Zielkoordinaten müssen gesetzt sein");
        }
    };

    return (
        <div className="app-container">
            <h1>Routenplaner</h1>
            <div className="input-container">
                <SearchInput placeholder="Startpunkt" setCoordinates={setStartCoords} />
                <SearchInput placeholder="Zielpunkt" setCoordinates={setEndCoords} />
                <button onClick={handleCalculateRoute}>Route berechnen</button>
            </div>
            {route && <RouteDisplay route={route} />}
            {routeSummary && <RouteSummary summary={routeSummary} steps={routeSteps} />}
        </div>
    );
};

export default App;
