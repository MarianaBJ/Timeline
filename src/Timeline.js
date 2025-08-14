import React, { useState, useRef } from 'react';
import { styles } from './styles/timelineStyles.js';
import {
    assignLanes,
    getDaysBetween,
    getTimelineRange,
    getDatePosition
} from './utils/timelineUtils.js';
import timelineItems from './data/timelineItems.js';
import TimelineHeader from './components/TimelineHeader.js';
import TimelineLane from './components/TimelineLane.js';
import TimelineControls from './components/TimelineControls.js';


export default function Timeline() {

    const [zoomLevel, setZoomLevel] = useState(1);
    const [items, setItems] = useState(timelineItems);
    const [draggedItem, setDraggedItem] = useState(null);


    const timelineRef = useRef(null);

    const { minDate, maxDate } = getTimelineRange(items);
    const totalDays = getDaysBetween(
        minDate.toISOString().split('T')[0],
        maxDate.toISOString().split('T')[0]
    );
    const dayWidth = 30 * zoomLevel;
    const lanes = assignLanes(items);



    const handleZoomChange = (newZoomLevel) => {
        setZoomLevel(newZoomLevel);
    };


    const handleUpdateItem = (itemId, updates) => {
        setItems(items.map(item =>
            item.id === itemId ? { ...item, ...updates } : item
        ));
    };

    const handleDragStart = (e, item) => {
        setDraggedItem(item);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (!draggedItem || !timelineRef.current) return;

        const rect = timelineRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const dayIndex = Math.floor(x / dayWidth);

        const newStartDate = new Date(minDate);
        newStartDate.setDate(minDate.getDate() + dayIndex);

        const itemDuration = getDaysBetween(draggedItem.start, draggedItem.end) - 1;
        const newEndDate = new Date(newStartDate);
        newEndDate.setDate(newStartDate.getDate() + itemDuration);

        handleUpdateItem(draggedItem.id, {
            start: newStartDate.toISOString().split('T')[0],
            end: newEndDate.toISOString().split('T')[0]
        });

        setDraggedItem(null);
    };


    return (
        <div style={styles.container}>
            <div style={styles.wrapper}>
                <div style={styles.card}>


                    <div style={styles.header}>
                        <h1 style={styles.title}>
                            Project Timeline - Compact Gantt Style
                        </h1>
                        <TimelineControls
                            zoomLevel={zoomLevel}
                            onZoomChange={handleZoomChange}
                        />
                    </div>


                    <div style={styles.timeline}>
                        <TimelineHeader
                            minDate={minDate}
                            totalDays={totalDays}
                            dayWidth={dayWidth}
                            itemCount={items.length}
                        />

                        <div>
                            {lanes.map((lane, laneIndex) => (
                                <TimelineLane
                                    key={laneIndex}
                                    lane={lane}
                                    laneIndex={laneIndex}
                                    minDate={minDate}
                                    dayWidth={dayWidth}
                                    totalDays={totalDays}
                                    onDragStart={handleDragStart}
                                    onDragOver={handleDragOver}
                                    onDrop={handleDrop}
                                    onUpdateItem={handleUpdateItem}
                                />
                            ))}
                        </div>
                    </div>


                    <div style={styles.info}>
                        <span style={styles.infoTitle}>💡 Features:</span> Drag items to reschedule • Click edit icon to rename • Zoom in/out • Compact lane assignment
                    </div>
                </div>
            </div>
        </div>
    );
}