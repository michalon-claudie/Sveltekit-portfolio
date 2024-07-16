import {createConnection} from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

export async function connectToDatabase (){
  try{
  const connection = await createConnection({
    host: process.env.SECRET_DB_HOST,
    user: process.env.SECRET_DB_USER,
    password: process.env.SECRET_DB_PASSWORD,
    database: process.env.SECRET_DB_NAME,
  });
  console.log('connexion à la db réussie')
  return connection
  } catch (error){
    console.log('Error connection to db')
    throw error
  }
}

