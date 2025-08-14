import React from 'react';
import { styles } from '../styles/timelineStyles.js';


export default function TimelineHeader({
    minDate,
    totalDays,
    dayWidth,
    itemCount
}) {
    const renderDateHeaders = () => {
        const headers = [];

        for (let i = 0; i < totalDays; i++) {
            const date = new Date(minDate);
            date.setDate(minDate.getDate() + i);
            const isMonthStart = date.getDate() === 1;

            headers.push(
                <div
                    key={i}
                    style={{
                        ...styles.dateCell,
                        ...(isMonthStart ? styles.monthStart : {}),
                        width: dayWidth,
                        minWidth: dayWidth
                    }}
                >
                    {isMonthStart
                        ? date.toLocaleDateString('en-US', { month: 'short' })
                        : date.getDate()
                    }
                </div>
            );
        }

        return headers;
    };

    return (
        <div style={styles.timelineHeader}>
            <div style={styles.headerRow}>
                <div style={styles.taskColumn}>
                    Tasks ({itemCount})
                </div>
                <div style={styles.dateHeader}>
                    {renderDateHeaders()}
                </div>
            </div>
        </div>
    );
}