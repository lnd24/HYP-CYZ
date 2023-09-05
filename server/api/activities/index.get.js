import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('socials').select("id, alias, title, type, picture, description, schedule: schedules(id, date, startT, endT, location)")
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    return data
})