import { db } from "@/config/db";
import { destinations } from "@/config/schema";
import { NextResponse } from "next/server";

export async function POST(req) {
    try{
        const formData = await req.formData()

        const newDestination = {
            name: formData.get("name"),
            country: formData.get("country"),
            city: formData.get("city"),
            description: formData.get("description"),
            highlights: formData.get("highlights"),
            bestSeason: formData.get("bestSeason"),
            activities: formData.get("activities"),
            price: parseFloat(formData.get("price")),
            duration: formData.get("duration"),
            image: formData.get("image") || null,
        }
        console.log("Incoming destination:", newDestination);

        const result = await db.insert(destinations).values(newDestination).returning(destinations)

        console.log("Insert result:", result);

        return NextResponse.json({success:true, data:result})
    }catch (error){
        console.error("Error adding destination:", error);
        return NextResponse.json({success:false, error:error.message}, {status:500});
    }
}