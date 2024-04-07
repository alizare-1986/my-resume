import connectDb from "@/utils/connectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import User from "src/model/User";

export async function POST(req) {
    try {
      await connectDb();
  
      const {
        title,
       comment
      } = await req.json();
      const session = await getServerSession(req);
      if (!session) {
        return NextResponse.json(
          { error: "لطفا وارد حساب کاربری که ساخته اید وارد شوید" },
          { status: 401 }
        );
      }
      const user = await User.findOne({ email: session.user.email });
      if (!user) {
        return NextResponse.json(
          { error: "حساب کاربری یافت نشد" },
          { status: 404 }
        );
      }
      if (
        !title ||
        !comment
      ) {
        return NextResponse.json(
          { error: "اطلاعات را کامل وارد کنید" },
          { status: 400 }
        );
      }
      const newProfile = await Profile.create({
        title,
       comment,
       email:user.email,
        userId: new Types.ObjectId(user._id),
      });
  
      return NextResponse.json({ message: "نظر جدید ثبت شد" }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: "مشکلی سمت سرور است" }, { status: 500 });
    }
  }