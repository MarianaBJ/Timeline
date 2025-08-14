
/**
 * Takes an array of items and assigns them to lanes based on start/end dates.
 * @param {Array} items - Array of timeline items with start/end dates
 * @returns {Array} Array of arrays containing items organized in lanes
 */

export function assignLanes(items) {
    const sortedItems = items.sort((a, b) => new Date(a.start) - new Date(b.start));
    const lanes = [];

    function assignItemToLane(item) {
        for (const lane of lanes) {
            if (new Date(lane[lane.length - 1].end) < new Date(item.start)) {
                lane.push(item);
                return;
            }
        }
        lanes.push([item]);
    }

    for (const item of sortedItems) {
        assignItemToLane(item);
    }
    return lanes;
}

/**
 * Format date string to readable format
 * @param {string} dateStr - Date string in YYYY-MM-DD format
 * @returns {string} Formatted date
 */
export function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

/**
 * Calculate days between two dates
 * @param {string} start - Start date string
 * @param {string} end - End date string
 * @returns {number} Number of days between dates (inclusive)
 */

export function getDaysBetween(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
}

/**
 * Get the min and max dates from timeline items
 * @param {Array} items - Array of timeline items
 * @returns {Object} Object with minDate and maxDate
 */

export function getTimelineRange(items) {
    const dates = items.flatMap(item => [item.start, item.end]);
    const minDate = new Date(Math.min(...dates.map(d => new Date(d))));
    const maxDate = new Date(Math.max(...dates.map(d => new Date(d))));
    return { minDate, maxDate };
}

/**
 * Calculate position of a date on the timeline
 * @param {string} dateStr //- Date string
 * @param {Date} minDate //- Minimum date on timeline
 * @param {number} dayWidth //- Width of each day in pixels
 * @returns {number} // Position in pixels
 */

export function getDatePosition(dateStr, minDate, dayWidth) {
    const date = new Date(dateStr);
    const daysDiff = Math.ceil((date - minDate) / (1000 * 60 * 60 * 24));
    return daysDiff * dayWidth;
}


// {Color palette for timeline items}

export const TIMELINE_COLORS = [
    '#3B82F6', '#10B981', '#8B5CF6', '#EC4899', '#6366F1',
    '#F59E0B', '#EF4444', '#14B8A6', '#F97316', '#06B6D4'
];