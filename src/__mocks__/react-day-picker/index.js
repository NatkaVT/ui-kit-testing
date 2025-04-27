import React from 'react';

export const DayPicker = ({ onDayClick, selected }) => (
  <div data-testid="mock-day-picker" onClick={() => onDayClick(new Date())}>
    <div className="day" data-testid="day" />
    {selected && <span>{selected.toLocaleDateString()}</span>}
  </div>
);
