import React from 'react';
import { createRoot } from 'react-dom/client';
import Pomodoro from './pomodoro';
import Calendar from './calendar';
import FocusMusic from './focusMusic';
import DailyStreak from './dailyStreak';
import GoogleSearch from './googleSearch';

const App = () => (
    <div>
        <h1>Task Management System</h1>
        <Pomodoro />
        <Calendar />
        <FocusMusic />
        <DailyStreak />
        <GoogleSearch />
    </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
