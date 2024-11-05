import Cave from '@/types/cave.types'

export const exampleCave1: Cave = {
  name: 'Cueva del poniente',
  instance: {_id: '671a866b6f5ae4dfe86ca7f9'},
  generalData: {
    datatype: 'cave',
    catalog: 'ID.001',
    alt_names: ['Cueva de Somovilla'],
    description:
      'Cueva de gran desarrollo, situada entre el pico de la montaña y el salto del agua. Entrada de grandes dimensiones que da acceso a una sala de grandes dimensiones. Abundante vegetación en la entrada.',
    cave_shapes: ['Cueva', 'Sumidero'],
    initials: undefined,
    system: {_id: '671a86c56f5ae4dfe86ca7fb'},
    regulations: false,
    regulation_description: undefined,
    depth: 110,
    length: 5300,
    main_image: undefined,
  },
  locationData: {
    coordinates: {
      coord_format: 'UTM',
      coord_proyec: 'ETRS89',
      hemisphere: 'N',
      utm_zone: 30,
      x_coord: 123456,
      y_coord: 1234568,
      z_coord: 1330,
    },
    locality: 'Somovilla',
    municipality: 'Somovilla',
    massif: 'Cuatro vientos',
    location_description:
      'Cueva situada al oeste de la sierra de los cuatro vientos.',
  },
}

export const exampleCave2: Cave = {
  name: 'Torca tramuntana',
  instance: {_id: '671a866b6f5ae4dfe86ca7f9'},
  generalData: {
    datatype: 'cave',
    catalog: 'ID.002',
    alt_names: ['Cueva de Villapueblo'],
    description:
      'Gireta vertical con abundantes pozos encadenados que da acceso a una galería de grandes dimensiones. La entrada se encuentra en una zona de bosque de encinas. Entrada superior del sistema de los cuatro vientos.',
    cave_shapes: ['Sima'],
    initials: undefined,
    system: {_id: '671a86c56f5ae4dfe86ca7fb'},
    regulations: false,
    regulation_description: undefined,
    depth: 234,
    length: 112,
    main_image: undefined,
  },
  locationData: {
    coordinates: {
      coord_format: 'UTM',
      coord_proyec: 'ETRS89',
      hemisphere: 'N',
      utm_zone: 30,
      x_coord: 123456,
      y_coord: 1234568,
      z_coord: 1520,
    },
    locality: 'Villapueblo de los aires',
    municipality: 'Valle de los aires',
    massif: 'Cuatro vientos',
    location_description:
      'Sima situada en lo alto del macizo de los cuatro vientos.',
  },
}

export const exampleCave3: Cave = {
  name: 'Cueva racheada',
  instance: {_id: '671a866b6f5ae4dfe86ca7f9'},
  generalData: {
    datatype: 'cave',
    catalog: 'ID.003',
    alt_names: ['Cueva triangular'],
    description:
      'Cueva de gran desarrollo, situada en la ladera sur de la montaña. Entrada con forma de triangulo con una gran rampa de acceso. Sala de grandes dimensiones con estalactitas y estalagmitas. Fuerte corriente de aire en la entrada.',
    cave_shapes: ['Cueva'],
    initials: undefined,
    system: {_id: '671a86c56f5ae4dfe86ca7fb'},
    regulations: true,
    regulation_description: 'Cueva protegida según el real decreto 123/1299',
    depth: 65,
    length: 2500,
    main_image: undefined,
  },
  locationData: {
    coordinates: {
      coord_format: 'UTM',
      coord_proyec: 'ETRS89',
      hemisphere: 'N',
      utm_zone: 30,
      x_coord: 123456,
      y_coord: 1234568,
      z_coord: 1330,
    },
    locality: 'Somovilla',
    municipality: 'Somovilla',
    massif: 'Cuatro vientos',
    location_description:
      'Cueva situada al este de la sierra de los cuatro vientos.',
  },
}

export const exampleCave4: Cave = {
  name: 'Sima de la montaña',
  instance: {_id: '671a866b6f5ae4dfe86ca7f9'},
  generalData: {
    datatype: 'cave',
    catalog: 'ID.004',
    alt_names: undefined,
    description:
      'Sima vertical de gran profundidad que se desarrolla en la ladera de la montaña. Entrada de pequeñas dimensiones que da acceso a una galería de meandriforme de 200 metros de desarrollo. Posteriormente batería de pozos hasta llegar a la base, colapsada de piedras.',
    cave_shapes: ['Sima', 'Grieta'],
    initials: undefined,
    system: undefined,
    regulations: true,
    regulation_description:
      'Acceso regulado según el PRUG del parque natural de los olmos',
    depth: 150,
    length: 1256,
    main_image: undefined,
  },
  locationData: {
    coordinates: {
      coord_format: 'UTM',
      coord_proyec: 'ETRS89',
      hemisphere: 'N',
      utm_zone: 30,
      x_coord: 123456,
      y_coord: 1234568,
      z_coord: 930,
    },
    locality: 'Villavieja de los monjes',
    municipality: 'Villavieja de los monjes',
    massif: 'Sierra de los olmos',
    location_description:
      'En la ladera del monte de los olmos, sobre el camino forestal al corral de Perico',
  },
}

export const exampleCave5: Cave = {
  name: 'Cueva mapache',
  instance: {_id: '671a866b6f5ae4dfe86ca7f9'},
  generalData: {
    datatype: 'cave',
    catalog: 'ID.005',
    alt_names: ['Kiribilzulo'],
    description:
      'Cueva de reducidas dimensiones pero de gran belleza. Presenta tres salas separadas tapizadas de decoraciones. Primera sala con patrones en las paredes de color verdoso y suelo de losas irregulares. Segunda sala, la de menor tamaño, con un sumidero de aguas en un lateral que ocupa practicamente todo el suelo. Tercera y ultima sala de especial belleza y misticismo. Segun leyenda local se realizabán rituales paganos en la misma',
    cave_shapes: ['Grieta', 'Abrigo'],
    initials: undefined,
    system: undefined,
    regulations: true,
    regulation_description:
      'Cavidad cerrada para visita. Unicamente bajo permiso expreso de responsable de su gestión',
    depth: 12,
    length: 225,
    main_image: undefined,
  },
  locationData: {
    coordinates: {
      coord_format: 'UTM',
      coord_proyec: 'ETRS89',
      hemisphere: 'N',
      utm_zone: 30,
      x_coord: 123456,
      y_coord: 1234568,
      z_coord: 930,
    },
    locality: 'Villargenta',
    municipality: 'Valle del Kas',
    massif: 'Montes de Íbar',
    location_description:
      'Se accede por encima de un puente roca al que se llega ascendiendo una empinada ladera llena de ortigas.',
  },
  scienceData: {
    paleontolog:
      'Localizados a lo largo de toda la cavidad restos de mastín de las cavernas',
  },
}

export const exampleCave6: Cave = {
  name: 'Torca del capitán',
  instance: {_id: '671a866b6f5ae4dfe86ca7f9'},
  generalData: {
    datatype: 'cave',
    catalog: 'ID.006',
    alt_names: undefined,
    description:
      'Sima de gran desarrollo situada en la ladera sur de la montaña. Entrada de grandes dimensiones que da acceso a una galería de 300 metros de desarrollo. La cavidad se divide en dos galerías principales, una de ellas con fuerte corriente de aire. La otra galería con una rampa de acceso a una sala de grandes dimensiones.',
    cave_shapes: ['Sima'],
    initials: ['PI-01'],
    system: {_id: '671a866b6f5ae4dfe86ca7f9'},
    regulations: false,
    regulation_description: undefined,
    depth: 254,
    length: 1147,
    main_image: undefined,
  },
  locationData: {
    coordinates: {
      coord_format: 'UTM',
      coord_proyec: 'ETRS89',
      hemisphere: 'N',
      utm_zone: 30,
      x_coord: 123456,
      y_coord: 1234568,
      z_coord: 1520,
    },
    locality: undefined,
    municipality: undefined,
    massif: 'Macizo del mar',
    location_description:
      'Sima situada en lo alto de la cresta de las olas, junto a la cueva del pirata.',
  },
}

export const exampleCave7: Cave = {
  name: 'Cueva del pirata',
  instance: {_id: '671a866b6f5ae4dfe86ca7f9'},
  generalData: {
    datatype: 'cave',
    catalog: 'ID.007',
    alt_names: undefined,
    description:
      'Cuava de reducidas dimensiones, siendo la salida original de aguas del sistema de los mares. Actualmente colmatada en su sala inicial. ',
    cave_shapes: ['Cueva'],
    initials: ['PI-01'],
    system: {_id: '671a866b6f5ae4dfe86ca7f9'},
    regulations: false,
    regulation_description: undefined,
    depth: 20,
    length: 214,
    main_image: undefined,
  },
  locationData: {
    coordinates: {
      coord_format: 'UTM',
      coord_proyec: 'ETRS89',
      hemisphere: 'N',
      utm_zone: 30,
      x_coord: 123456,
      y_coord: 1234568,
      z_coord: 1520,
    },
    locality: undefined,
    municipality: undefined,
    massif: 'Macizo del mar',
    location_description:
      'Cueva situada en la ladera sur de la montaña, junto a la sima del capitán.',
  },
}
