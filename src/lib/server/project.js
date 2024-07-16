import {connectToDatabase} from '$lib/server/db'

export async function getProjects(){
    try {
        const connection= await connectToDatabase()
        console.log('hey')
        const [projects]= await connection.query('SELECT * from projects')
        return projects;
    }catch(error){
        throw new Error('Error to download projects')
    }
}