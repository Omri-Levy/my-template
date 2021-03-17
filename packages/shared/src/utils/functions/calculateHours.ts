import calculateMinutes from './calculateMinutes';

const calculateHours = (hours: number): number => calculateMinutes(60) * hours;

export default calculateHours;
