import { Calendar, MapPin, Clock } from 'lucide-react';
import { EventList } from '@/components/EventList';
import { Badge } from '@/components/ui/badge';
import eventData from '@/data/events.json';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

function App() {
  const eventDate = new Date(eventData.date);
  const formattedDate = format(eventDate, 'd MMMM yyyy', { locale: ru });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {eventData.title}
              </h1>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-lg font-medium">{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>г. Рыбинск</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="text-sm">
                {eventData.locations.length} локаций
              </Badge>
              <Badge variant="outline" className="text-sm">
                {eventData.locations.reduce((total, location) => total + location.events.length, 0)} мероприятий
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <EventList eventData={eventData} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 День города Рыбинск. Все мероприятия проводятся при поддержке администрации города.</p>
            <p className="mt-2">
              Время проведения мероприятий может изменяться. Следите за обновлениями.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;