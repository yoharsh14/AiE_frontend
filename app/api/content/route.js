import { NextResponse } from "next/server";
import { db } from "@/app/utils/firebaseConfig";
import { collection, addDoc, getDocs } from "@firebase/firestore";


export async function GET(request) {
  try {
    const snapshot = await getDocs(collection(db, "content"));

    // Extract documents with their IDs
    const page = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(
      {
        status: "success",
        message: "Data fetched successfully",
        data: page,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching documents: ", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to fetch documents",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// To handle a POST request to /api
export async function POST(request) {
  try {
    const body = await new Response(request.body).json();
    console.log(body);
    body.content.body = remove_linebreaks(body.content.body);
    const docRef = await addDoc(collection(db, "content"), {
      body,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

function remove_linebreaks(str) {
  return str.replace(/[\r\n]+/gm, " ");
}
