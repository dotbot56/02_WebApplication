import React from 'react';

const RouteSummary = ({ summary, steps }) => {
    return (
        <div className="route-summary">
            <h2>Zusammenfassung</h2>
            <p><strong>Distanz:</strong> {(summary.distance / 1000).toFixed(2)} km</p>
            <p><strong>Dauer:</strong> {(summary.duration / 60).toFixed(2)} Minuten</p>

            <h3>Wegbeschreibung</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>
                        {step.instruction} ({(step.distance / 1000).toFixed(2)} km, {(step.duration / 60).toFixed(2)} Minuten)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RouteSummary;