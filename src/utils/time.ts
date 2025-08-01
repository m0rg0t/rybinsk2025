import { format, parse, isAfter, isBefore, isWithinInterval } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Event, EventWithStatus, EventStatus } from '@/types';

export function parseEventTime(timeString: string, eventDate: string): { start: Date; end: Date } {
  const baseDate = new Date(eventDate);
  
  if (timeString.includes('-')) {
    const [startTime, endTime] = timeString.split('-');
    const start = parseTime(startTime.trim(), baseDate);
    const end = parseTime(endTime.trim(), baseDate);
    return { start, end };
  } else {
    const start = parseTime(timeString.trim(), baseDate);
    const end = new Date(start.getTime() + 30 * 60 * 1000);
    return { start, end };
  }
}

function parseTime(timeString: string, baseDate: Date): Date {
  try {
    const time = parse(timeString, 'HH:mm', baseDate);
    return time;
  } catch {
    return baseDate;
  }
}

export function getEventStatus(event: Event, currentTime: Date, eventDate: string): EventStatus {
  const { start, end } = parseEventTime(event.time, eventDate);
  
  if (isBefore(currentTime, start)) {
    return 'future';
  } else if (isWithinInterval(currentTime, { start, end })) {
    return 'current';
  } else {
    return 'past';
  }
}

export function addStatusToEvent(event: Event, currentTime: Date, eventDate: string): EventWithStatus {
  const { start, end } = parseEventTime(event.time, eventDate);
  const status = getEventStatus(event, currentTime, eventDate);
  
  return {
    ...event,
    status,
    startTime: start,
    endTime: end,
  };
}

export function formatTime(date: Date): string {
  return format(date, 'HH:mm', { locale: ru });
}

export function formatTimeRange(start: Date, end: Date): string {
  return `${formatTime(start)} - ${formatTime(end)}`;
}