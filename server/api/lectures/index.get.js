import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('lectures').select("id, alias, title, description, speakers: speakers (id, alias, name, surname), date, startT, endT, location").order("title")

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})