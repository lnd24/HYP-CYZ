import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('socials').select("id, alias, title, picture, description, date, startT, endT, location").order("title")
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})