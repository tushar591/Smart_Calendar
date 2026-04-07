export interface CalendarEvent {
  title: string;
  type: 'work' | 'personal' | 'holiday';
}

export interface MonthTheme {
  name: string;
  year: number;
  image: string;
  primary: string; 
  light: string;
  events: Record<number, CalendarEvent>;
}

export const CALENDAR_DATA: MonthTheme[] = [
  {
    name: "January",
    year: 2026,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    primary: "#0284c7",
    light: "#f0f9ff",
    events: {
      1: { title: "New Year's Day", type: 'holiday' },
      15: { title: "Project Kickoff", type: 'work' },
    }
  },
  {
    name: "February",
    year: 2026,
    image: "https://images.unsplash.com/photo-1516475429286-465d815a0df7",
    primary: "#059669",
    light: "#ecfdf5",
    events: {
      14: { title: "Valentine's Day", type: 'personal' },
      24: { title: "Sprint Review", type: 'work' },
    }
  },
  {
    name: "March",
    year: 2026,
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    primary: "#d97706",
    light: "#fffbeb",
    events: {
      10: { title: "Spring Break Begins", type: 'personal' },
      21: { title: "Quarterly Audit", type: 'work' },
    }
  }
];