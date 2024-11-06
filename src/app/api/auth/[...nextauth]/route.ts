import NextAuth from 'next-auth'

const handler = NextAuth({
  providers: [
    // TODO: Añadir proveedores
  ],
})

export {handler as GET, handler as POST}
