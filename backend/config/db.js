import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log('connected')
    console.log(con.connection.host)
  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}

export default connectDB
