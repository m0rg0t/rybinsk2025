import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface AfinaPageProps {
  onBack: () => void;
}

export function AfinaPage({ onBack }: AfinaPageProps) {
  const afinaImages = [
    { id: 1, src: '/afisha/1.jpg', alt: 'Афиша 1' },
    { id: 2, src: '/afisha/2.jpg', alt: 'Афиша 2' },
    { id: 3, src: '/afisha/3.jpg', alt: 'Афиша 3' },
    { id: 4, src: '/afisha/4.jpg', alt: 'Афиша 4' },
    { id: 5, src: '/afisha/5.jpg', alt: 'Афиша 5' },
    { id: 6, src: '/afisha/6.jpg', alt: 'Афиша 6' },
    { id: 7, src: '/afisha/7.jpg', alt: 'Афиша 7' },
  ];

  const handleImageClick = (imageSrc: string) => {
    window.open(imageSrc, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={onBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Назад
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Афиши
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {afinaImages.map((image) => (
              <Card 
                key={image.id} 
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
                onClick={() => handleImageClick(image.src)}
              >
                <div className="relative group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}