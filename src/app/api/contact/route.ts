
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
    const body = await req.json()
    console.log(body)
    /*Save info in supabase*/
    const { data, error } = await supabase
        .from('contact')
        .insert([body])

    console.log(data)
    if (error) {
        console.log(error)
        return NextResponse.json({ success: false, error }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
}
