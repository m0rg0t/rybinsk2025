import { MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EventCard } from './EventCard';
import { Location, EventWithStatus } from '@/types';

interface LocationCardProps {
  location: Location;
  events: EventWithStatus[];
}

export function LocationCard({ location, events }: LocationCardProps) {
  const currentEvents = events.filter(e => e.status === 'current').length;
  const futureEvents = events.filter(e => e.status === 'future').length;

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            {location.name}
          </CardTitle>
          <div className="flex gap-2">
            {currentEvents > 0 && (
              <Badge variant="destructive">{currentEvents} сейчас</Badge>
            )}
            {futureEvents > 0 && (
              <Badge variant="outline">{futureEvents} скоро</Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {events.length === 0 ? (
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Мероприятий не найдено
          </p>
        ) : (
          <div className="space-y-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}