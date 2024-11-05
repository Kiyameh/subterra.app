import System from '@/types/system.types'

export const exampleSystem1: System = {
  name: 'Sistema de los cuatro vientos',
  instance: {_id: '671a866b6f5ae4dfe86ca7f9'},
  generalData: {
    datatype: 'system',
    alt_names: ['Sistema de los vientos'],
    catalog: 'IDS.001',
    caves: undefined,
    description:
      'Complejo karstico del macizo de los cuatro vientos, con 4 cavidades conocidas y que ocupe la mayor parte de la meseta de las praderas. Principal acuifero de la provincia.',
    regulations: undefined,
    regulation_description: undefined,
    initials: undefined,
    massif: 'Macizo de los cuatro vientos',
    depth: 445,
    length: 15204,
  },
}

export const exampleSystem2: System = {
  name: 'Sistema de los mares',
  instance: {_id: '671a866b6f5ae4dfe86ca7f9'},
  generalData: {
    datatype: 'system',
    alt_names: ['Sistema de las olas'],
    catalog: 'IDS.002',
    caves: undefined,
    description:
      'Complejo karstico ubicado en la cresta de las olas en los montes marinos, conocido por sus formaciones rocosas y su biodiversidad única.',
    regulations: undefined,
    regulation_description: undefined,
    initials: undefined,
    massif: 'Cresta de las olas',
    depth: 320,
    length: 10450,
  },
}
