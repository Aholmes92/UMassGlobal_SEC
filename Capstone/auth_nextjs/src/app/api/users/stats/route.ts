import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";


connect()


export async function POST(request: NextRequest) {
   try {
       const { email } = await request.json();
       const updatedUser = await User.findOneAndUpdate(
       { email },
       {
           // Use $inc (increment) to ADD the current session stats to the existing database totals
           $inc: {
           gamesPlayed: 10,
           gamesWon: 8
           },
       },
       { new: true }
       );


       return NextResponse.json({
       message: 'Stats synced successfully',
       gamesPlayed: updatedUser.gamesPlayed,
       gamesWon: updatedUser.gamesWon,
       });


   } catch (err) {
       console.error('Error syncing stats:', err);
       return NextResponse.json({ message: 'Server error' }, { status: 500 });
   }
}
