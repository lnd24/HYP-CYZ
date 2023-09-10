import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('lectures').select("id, alias, title, description, speakers: speakers (id, alias, name, surname, lectures(id, alias, title)), date, startT, endT, location").eq('alias', id).limit(1).single()
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})