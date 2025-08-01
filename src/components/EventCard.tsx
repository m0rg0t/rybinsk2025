import { Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EventWithStatus } from '@/types';
import { cn } from '@/lib/utils';
import { getCategoryLabel } from '@/utils/categories';

interface EventCardProps {
  event: EventWithStatus;
  locationName?: string;
}

const categoryColors = {
  festival: 'bg-purple-100 text-purple-800',
  concert: 'bg-blue-100 text-blue-800',
  theater: 'bg-green-100 text-green-800',
  circus: 'bg-red-100 text-red-800',
  food: 'bg-orange-100 text-orange-800',
  exhibition: 'bg-indigo-100 text-indigo-800',
  sports: 'bg-emerald-100 text-emerald-800',
  children: 'bg-pink-100 text-pink-800',
  show: 'bg-yellow-100 text-yellow-800',
  gala: 'bg-violet-100 text-violet-800',
  fireworks: 'bg-rose-100 text-rose-800',
  default: 'bg-gray-100 text-gray-800'
};

const statusColors = {
  current: 'border-l-4 border-l-green-500 bg-green-50',
  future: 'border-l-4 border-l-blue-500 bg-blue-50',
  past: 'border-l-4 border-l-gray-300 bg-gray-50 opacity-60'
};

export function EventCard({ event, locationName }: EventCardProps) {
  const categoryColor = categoryColors[event.category as keyof typeof categoryColors] || categoryColors.default;
  const statusColor = statusColors[event.status];

  return (
    <Card className={cn('transition-all hover:shadow-md', statusColor)}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
          {event.status === 'current' && (
            <Badge variant="destructive" className="shrink-0">
              СЕЙЧАС
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {event.description}
        </p>
        
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{event.time}</span>
          </div>
          {locationName && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{locationName}</span>
            </div>
          )}
        </div>
        
        <div className="flex gap-2">
          <Badge variant="outline" className={cn('text-xs', categoryColor)}>
            {getCategoryLabel(event.category)}
          </Badge>
          {event.status === 'future' && (
            <Badge variant="outline" className="text-xs">
              Скоро
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}