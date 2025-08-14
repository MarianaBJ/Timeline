import React, { useState } from 'react';
import { styles } from '../styles/timelineStyles.js';

export default function TimelineControls({
    zoomLevel,
    onZoomChange,
    minZoom = 0.5,
    maxZoom = 3,
    zoomStep = 0.25
}) {
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleZoomOut = () => {
        const newZoom = Math.max(minZoom, zoomLevel - zoomStep);
        onZoomChange(newZoom);
    };

    const handleZoomIn = () => {
        const newZoom = Math.min(maxZoom, zoomLevel + zoomStep);
        onZoomChange(newZoom);
    };

    const canZoomOut = zoomLevel > minZoom;
    const canZoomIn = zoomLevel < maxZoom;

    return (
        <div style={styles.controls}>
            <button
                onClick={handleZoomOut}
                disabled={!canZoomOut}
                onMouseEnter={() => setHoveredButton('zoomOut')}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                    ...styles.button,
                    ...(hoveredButton === 'zoomOut' && canZoomOut ? styles.buttonHover : {}),
                    opacity: canZoomOut ? 1 : 0.5,
                    cursor: canZoomOut ? 'pointer' : 'not-allowed'
                }}
                title={`Zoom Out (${Math.round(zoomLevel * 100)}%)`}
            >
                🔍-
            </button>

            <div
                style={{
                    ...styles.button,
                    cursor: 'default',
                    backgroundColor: '#E5E7EB',
                    color: '#374151',
                    fontWeight: '600'
                }}
                title={`Current zoom level: ${Math.round(zoomLevel * 100)}%`}
            >
                {Math.round(zoomLevel * 100)}%
            </div>

            <button
                onClick={handleZoomIn}
                disabled={!canZoomIn}
                onMouseEnter={() => setHoveredButton('zoomIn')}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                    ...styles.button,
                    ...(hoveredButton === 'zoomIn' && canZoomIn ? styles.buttonHover : {}),
                    opacity: canZoomIn ? 1 : 0.5,
                    cursor: canZoomIn ? 'pointer' : 'not-allowed'
                }}
                title={`Zoom In (${Math.round(zoomLevel * 100)}%)`}
            >
                🔍+
            </button>
        </div>
    );
}