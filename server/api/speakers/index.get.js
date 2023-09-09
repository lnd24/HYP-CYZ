import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('speakers').select("id, alias, name, surname, photo, description, lectures: lectures(id, alias, title, description)")
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    return data
})