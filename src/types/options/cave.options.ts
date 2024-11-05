export const caveShapes = [
  'Abrigo',
  'Cueva',
  'Diaclasa',
  'Dolina',
  'Grieta',
  'Manantial',
  'Mina',
  'Sima',
  'Sumidero',
] as const

export type CaveShape = (typeof caveShapes)[number]
