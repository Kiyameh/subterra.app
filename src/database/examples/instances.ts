import Instance from '@/types/instance.types'

export const naparzulo: Instance = {
  name: 'naparzulo',
  generalData: {
    datatype: 'instance',
    fullname: 'Base de datos Naparzulo',
    acronym: 'Naparzulo',
    description: 'Todas las cavidades de Navarra',
    admin: undefined,
    owner: undefined,
    main_image: undefined,
    map_image: undefined,
    public_edition: false,
    public_visibility: true,
    territory: 'Navarra',
    link: '/naparzulo',
  },
}

export const test: Instance = {
  name: 'test',
  generalData: {
    datatype: 'instance',
    fullname: 'Base de datos de prueba',
    acronym: 'Test',
    description:
      'Base de datos para pruebas y desarrollo. Permisos públicos. Todas las cavidades reiniciadas periodicamente',
    admin: undefined,
    owner: undefined,
    main_image: undefined,
    map_image: undefined,
    public_edition: true,
    public_visibility: true,
    territory: 'Planeta tierra',
    link: '/test',
  },
}
