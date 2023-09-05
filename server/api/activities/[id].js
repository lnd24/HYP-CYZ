import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('socials').select("id, alias, title, type, picture, description, schedule: schedules(id, date, startT, endT, location)").eq('alias', id).limit(1).single()
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})