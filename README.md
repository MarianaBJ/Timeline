# Airtable timeline assignment

## ✨ What I like about my implementation
- The layout is simple and easy to understand, with a compact lane structure.
- The positioning logic is straightforward, based only on start/end dates.
- The zoom feature improves usability by allowing the user to view events at different granularities.
- The code is modularized (`assignLanes` separated from the main component), making it easier to maintain.

## 🔄 What I would change if I were to do it again
- Implement drag & drop to adjust event dates directly on the timeline.
- Add a fixed **date grid** at the top to provide better context.
- Improve the visual design (colors, borders, typography) to match tools like Trello, Notion, or Google Calendar.
- Add full responsiveness, adapting item density for mobile devices.

## 🧠 How I made my design decisions
- I chose a horizontal lane layout, inspired by **Google Calendar** and personal projects in “horizontal agenda” mode.
- The lane allocation logic follows the principle of placing non-overlapping events on the same vertical space, similar to **Asana’s timeline** feature.
- The zoom controls were inspired by the editing experience in tools like **Figma** and **Gantt charts** in ClickUp, where the user controls granularity.

## 🧪 How I would test this if I had more time
- **Unit tests** for the `assignLanes` function, ensuring events are placed in the correct lanes.
- **UI tests** with React Testing Library to verify that all events are rendered at the correct position.
- Zoom behavior tests, ensuring item widths adjust proportionally.
- Accessibility tests.


##Allow:

- Allow zooming in and out of the timeline
- Allow dragging and dropping to change the start and/or end date of an item
- Allow editing the name of items inline
- Any other polish or useful enhancements you can think of


## Starter code:

1. Navigate to this project directory
2. Run `npm install` to install dependencies
3. Run `npm start` to initialize and connect to a node server with your default browser
4. Develop in your own local environment
