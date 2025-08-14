import React, { useState } from 'react';
import { styles } from '../styles/timelineStyles.js';
import { formatDate, getDatePosition, TIMELINE_COLORS } from '../utils/timelineUtils.js';

/**
 * TimelineItem component renders individual timeline items
 */
export default function TimelineItem({
    item,
    minDate,
    dayWidth,
    onDragStart,
    onUpdateItem
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(item.name);
    const [hoveredButton, setHoveredButton] = useState(null);

    // Calculate item position and dimensions
    const startPos = getDatePosition(item.start, minDate, dayWidth);
    const endPos = getDatePosition(item.end, minDate, dayWidth) + dayWidth;
    const width = Math.max(endPos - startPos, 80);
    const color = TIMELINE_COLORS[item.id % TIMELINE_COLORS.length];

    const handleEdit = () => {
        setIsEditing(true);
        setEditValue(item.name);
    };

    const handleSave = () => {
        if (editValue.trim()) {
            onUpdateItem(item.id, { name: editValue.trim() });
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditValue(item.name);
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        } else if (e.key === 'Escape') {
            handleCancel();
        }
    };

    const renderEditMode = () => (
        <div style={styles.editContainer}>
            <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onKeyDown={handleKeyDown}
                style={styles.editInput}
                autoFocus
                onBlur={handleSave}
            />
            <div style={styles.editControls}>
                <button
                    onClick={handleSave}
                    onMouseEnter={() => setHoveredButton('save')}
                    onMouseLeave={() => setHoveredButton(null)}
                    style={{
                        ...styles.editControlButton,
                        ...(hoveredButton === 'save' ? styles.editControlButtonHover : {})
                    }}
                    title="Save"
                >
                    ✓
                </button>
                <button
                    onClick={handleCancel}
                    onMouseEnter={() => setHoveredButton('cancel')}
                    onMouseLeave={() => setHoveredButton(null)}
                    style={{
                        ...styles.editControlButton,
                        ...(hoveredButton === 'cancel' ? styles.editControlButtonHover : {})
                    }}
                    title="Cancel"
                >
                    ✕
                </button>
            </div>
        </div>
    );

    const renderViewMode = () => (
        <>
            <span style={styles.taskName} title={item.name}>
                {item.name}
            </span>
            <button
                onClick={handleEdit}
                style={{
                    ...styles.editButton,
                    ...(isHovered ? styles.editButtonVisible : {})
                }}
                title="Edit task name"
            >
                ✏️
            </button>
        </>
    );

    return (
        <div
            draggable={!isEditing}
            onDragStart={(e) => !isEditing && onDragStart(e, item)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                ...styles.taskItem,
                ...(isHovered && !isEditing ? styles.taskItemHover : {}),
                left: startPos,
                width: width,
                backgroundColor: color,
                cursor: isEditing ? 'default' : 'move'
            }}
        >
            <div style={styles.taskContent}>
                {isEditing ? renderEditMode() : renderViewMode()}
            </div>

            {/* Date range indicator */}
            <div style={styles.dateRange}>
                {formatDate(item.start)} - {formatDate(item.end)}
            </div>
        </div>
    );
}