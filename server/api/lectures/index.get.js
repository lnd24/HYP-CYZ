import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('lectures').select("id, alias, title, picture, description, speakers: speakers (id, alias, name, surname), schedule: schedules(id, date, startT, endT, location)")
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    return data
})