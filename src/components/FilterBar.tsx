import { Search, Filter, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { FilterType } from '@/types';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  statusFilter: FilterType;
  onStatusFilterChange: (filter: FilterType) => void;
  locations: Array<{ id: string; name: string; count: number }>;
  currentEventsCount: number;
  futureEventsCount: number;
}

export function FilterBar({
  searchQuery,
  onSearchChange,
  selectedLocation,
  onLocationChange,
  statusFilter,
  onStatusFilterChange,
  locations,
  currentEventsCount,
  futureEventsCount,
}: FilterBarProps) {
  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow-sm border">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Поиск мероприятий..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Status Filters */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Clock className="h-4 w-4" />
          Время проведения
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={statusFilter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onStatusFilterChange('all')}
            className="flex items-center gap-1"
          >
            <Filter className="h-3 w-3" />
            Все мероприятия
          </Button>
          <Button
            variant={statusFilter === 'current' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onStatusFilterChange('current')}
            className="flex items-center gap-1"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            Сейчас
            {currentEventsCount > 0 && (
              <Badge variant="secondary" className="ml-1 text-xs">
                {currentEventsCount}
              </Badge>
            )}
          </Button>
          <Button
            variant={statusFilter === 'future' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onStatusFilterChange('future')}
            className="flex items-center gap-1"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            Скоро
            {futureEventsCount > 0 && (
              <Badge variant="secondary" className="ml-1 text-xs">
                {futureEventsCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      {/* Location Filters */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm font-medium">
          <MapPin className="h-4 w-4" />
          Локации
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedLocation === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onLocationChange('all')}
          >
            Все локации
          </Button>
          {locations.map((location) => (
            <Button
              key={location.id}
              variant={selectedLocation === location.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => onLocationChange(location.id)}
              className="flex items-center gap-1"
            >
              {location.name}
              {location.count > 0 && (
                <Badge variant="secondary" className="ml-1 text-xs">
                  {location.count}
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}