export const groupCategories = [
  'Club deportivo',
  'Entidad cientifica',
  'Asociación mixta',
  'Organismo público',
  'Club de montaña',
] as const

export type GroupCategory = (typeof groupCategories)[number]
