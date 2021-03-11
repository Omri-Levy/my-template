const calculateMinutes = (minutes: number): number => 1000 * 60 * minutes;
const calculateHours = (hours: number): number => calculateMinutes(60) * hours;
const secondsToHours = (hours: number): number => hours * 60 * 60;

export { calculateMinutes, calculateHours, secondsToHours };
