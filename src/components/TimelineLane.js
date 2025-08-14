import React, { useState } from 'react';
import { styles } from '../styles/timelineStyles.js';
import TimelineItem from './TimelineItem.js';

/**
 * TimelineLane component renders a lane containing timeline items
 */
export default function TimelineLane({
    lane,
    laneIndex,
    minDate,
    dayWidth,
    totalDays,
    onDragStart,
    onDragOver,
    onDrop,
    onUpdateItem
}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div
            style={{
                ...styles.laneRow,
                ...(isHovered ? styles.laneRowHover : {})
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Lane Information */}
            <div style={styles.laneInfo}>
                <div style={styles.laneTitle}>
                    Lane {laneIndex + 1}
                </div>
                <div style={styles.laneCount}>
                    {lane.length} task{lane.length !== 1 ? 's' : ''}
                </div>
            </div>

            {/* Lane Content */}
            <div
                style={{
                    ...styles.laneContent,
                    minWidth: totalDays * dayWidth
                }}
                onDragOver={onDragOver}
                onDrop={onDrop}
            >
                {lane.map((item) => (
                    <TimelineItem
                        key={item.id}
                        item={item}
                        minDate={minDate}
                        dayWidth={dayWidth}
                        onDragStart={onDragStart}
                        onUpdateItem={onUpdateItem}
                    />
                ))}
            </div>
        </div>
    );
}