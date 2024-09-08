import React, { useState } from 'react';

const SearchInput = ({ placeholder, setCoordinates }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // Funktion, um Vorschläge zu laden
    const handleInputChange = async (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);
        if (inputValue.length > 2) {
            const response = await fetch(`https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf6248be68296ed7a44df88c320eba4f9ecff0&text=${inputValue}`);
            const data = await response.json();
            setSuggestions(data.features);
        } else {
            setSuggestions([]);
        }
    };

    // Funktion, um eine Vorschlag auszuwählen
    const handleSelectSuggestion = (suggestion) => {
        const coordinates = suggestion.geometry.coordinates;
        setCoordinates(coordinates); // Koordinaten setzen
        setQuery(suggestion.properties.label); // Label im Input-Feld anzeigen
        setSuggestions([]); // Vorschläge ausblenden
    };

    // Funktion, um die Koordinaten für die manuelle Eingabe zu ermitteln
    const handleManualInput = async () => {
        if (query.length > 2) {
            const response = await fetch(`https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf6248be68296ed7a44df88c320eba4f9ecff0&text=${query}`);
            const data = await response.json();
            if (data.features.length > 0) {
                const coordinates = data.features[0].geometry.coordinates;
                setCoordinates(coordinates);
            }
        }
    };

    return (
        <div className="search-input">
            <input
                type="text"
                id={placeholder === "Startpunkt" ? "start-input" : "end-input"}
                value={query}
                placeholder={placeholder}
                onChange={handleInputChange}
                onBlur={handleManualInput}
            />
            {suggestions.length > 0 && (
                <ul className="autocomplete-list">
                    {suggestions.map((suggestion) => (
                        <li key={suggestion.properties.id} onClick={() => handleSelectSuggestion(suggestion)}>
                            {suggestion.properties.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchInput;
