// Importing mongoose library along with Connection type from it
import mongoose, {Connection} from 'mongoose'

const conectionURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}Mgo$@subterradb.c0hrufd.mongodb.net/?retryWrites=true&w=majority`

// Declaring a variable to store the cached database connection
let cachedConnection: Connection | null = null

// Function to establish a connection to MongoDB
export async function connectToMongoDB(): Promise<Connection> {
  // If a cached connection exists
  if (cachedConnection) {
    // If the cached connection's name matches the instance, return it
    console.log('Using cached db connection')
    return cachedConnection
  }
  try {
    // Establish a new connection to MongoDB
    const cnx = await mongoose.connect(conectionURI!, {dbName: `subterra`})
    // Cache the connection for future use
    cachedConnection = cnx.connection
    // Log message indicating a new MongoDB connection is established
    console.log('<Mongoose> DB conectada')
    // Return the newly established connection
    return cachedConnection
  } catch (error) {
    // If an error occurs during connection, log the error and throw it
    console.log(error)
    throw error
  }
}
