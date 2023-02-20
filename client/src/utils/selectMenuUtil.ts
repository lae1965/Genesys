export const selectItems = [
  { value: 'not-selected', content: 'Не выбрано' },
  { value: 'leads', content: 'Сделка' },
  { value: 'contacts', content: 'Контакт' },
  { value: 'companies', content: 'Компания' },
];

export const getContentByValue = (value: string): string | undefined =>
  selectItems.find((item) => item.value === value)?.content;
