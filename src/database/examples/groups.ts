import Group from '@/types/group.types'

export const exampleGroup1: Group = {
  name: 'Grupo Navarro de exploración',
  generalData: {
    datatype: 'group',
    acronym: 'GNE',
    alt_names: undefined,
    description:
      'Grupo de exploraciones subterraneas afincado en Pamplona, Navarra. En activo desde 1488.',
    email: 'gne@gruponavarroexploracion.es',
    webpage: 'http://www.gruponavarroexploracion.es',
    phone: {
      phone_number: 646345566,
      prefix: 34,
    },
    group_categories: ['Asociación mixta', 'Club deportivo'],
    address: {
      street: 'Calle de la exploración',
      number: '5',
      postal_code: 31145,
      city: 'Pamplona',
      province: 'Navarra',
      country: 'Spain',
    },
  },
}

export const exampleGroup2: Group = {
  name: 'Exploradores del Sur',
  generalData: {
    datatype: 'group',
    acronym: 'EDS',
    alt_names: ['Southern Explorers'],
    description:
      'Grupo de exploración y aventura con base en Sevilla, Andalucía. Fundado en 1495.',
    email: 'info@exploradoresdelsur.es',
    webpage: 'http://www.exploradoresdelsur.es',
    phone: {
      phone_number: 654789123,
      prefix: 34,
    },
    group_categories: ['Club deportivo'],
    address: {
      street: 'Avenida de la Aventura',
      number: '10',
      postal_code: 41012,
      city: 'Sevilla',
      province: 'Sevilla',
      country: 'Spain',
    },
  },
}

export const exampleGroup3: Group = {
  name: 'Aventureros del Norte',
  generalData: {
    datatype: 'group',
    acronym: 'ADN',
    alt_names: ['Northern Adventurers'],
    description:
      'Grupo de exploración y actividades al aire libre con sede en Bilbao, País Vasco. Fundado en 1502.',
    email: 'contacto@aventurerosdelnorte.es',
    webpage: 'http://www.aventurerosdelnorte.es',
    phone: {
      phone_number: 678901234,
      prefix: 34,
    },
    group_categories: ['Asociación mixta', 'Club de montaña'],
    address: {
      street: 'Calle de la Aventura',
      number: '15',
      postal_code: 48001,
      city: 'Bilbao',
      province: 'Vizcaya',
      country: 'Spain',
    },
  },
}

export const exampleGroup4: Group = {
  name: 'Exploradores del Este',
  generalData: {
    datatype: 'group',
    acronym: 'EDE',
    alt_names: ['Eastern Explorers'],
    description:
      'Grupo de exploración y actividades al aire libre con sede en Valencia, Comunidad Valenciana. Fundado en 1110.',
    email: 'contacto@exploradoresdeleste.es',
    webpage: 'http://www.exploradoresdeleste.es',
    phone: {
      phone_number: 612345678,
      prefix: 34,
    },
    group_categories: ['Asociación mixta', 'Club de montaña'],
    address: {
      street: 'Calle de los murcielagos',
      number: '20',
      floor: '2',
      door: 'D',
      postal_code: 46001,
      city: 'Valencia',
      province: 'Valencia',
      country: 'Spain',
    },
  },
}

export const exampleGroup5: Group = {
  name: 'Asociación de ciencias del Oeste',
  generalData: {
    datatype: 'group',
    acronym: 'ACO',
    alt_names: ['Western Science'],
    description:
      'Asociación de ciencias con sede en Santiago de Compostela, Galicia. Fundado en 1520.',
    email: 'info@acoscience.es',
    webpage: 'http://www.acoscience.es',
    phone: {
      phone_number: 623456789,
      prefix: 34,
    },
    group_categories: ['Asociación mixta', 'Entidad cientifica'],
    address: {
      street: 'Calle del Camino',
      number: '25',
      postal_code: 15701,
      city: 'Santiago de Compostela',
      province: 'La Coruña',
      country: 'Spain',
    },
  },
}
