export async function Post(req) {
    try{
        const data = await req.json()
        const {travelers, checkInDate, checkOutDate, firstName, lastName, email, phone} = data
    }catch(error){

    }
}