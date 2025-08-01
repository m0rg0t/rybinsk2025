export const categoryTranslations: Record<string, string> = {
  festival: 'Фестиваль',
  concert: 'Концерт',
  theater: 'Театр',
  circus: 'Цирк',
  food: 'Еда',
  exhibition: 'Выставка',
  sports: 'Спорт',
  children: 'Детская зона',
  show: 'Шоу',
  gala: 'Гала-концерт',
  fireworks: 'Фейерверк',
  decoration: 'Оформление',
  interactive: 'Интерактивная зона',
  opening: 'Открытие',
  historical: 'История',
  poetry: 'Поэзия',
  zoo: 'Зоопарк',
  equestrian: 'Конный спорт',
  games: 'Игры',
  charity: 'Благотворительность',
  intellectual: 'Интеллектуальные игры'
};

export function getCategoryLabel(category: string): string {
  return categoryTranslations[category] || category;
}