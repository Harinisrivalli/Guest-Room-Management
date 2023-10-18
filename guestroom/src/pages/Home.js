{/*import React, { useEffect, useState } from "react";
import {getDocs, collection,deleteDoc,doc} from "firebase/firestore";
import { auth,db } from "../firebase-config";
function Home({isAuth}){
    const [roomBookLists,setRoomBookedList]=useState([]);
    const bookingCollectionRef=collection(db,"rooms");
       useEffect(()=>{
            const getrooms=async()=>{
                const data=await getDocs(bookingCollectionRef);
                setRoomBookedList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            };
             getrooms();
    },[]);
    const deleteroom= async (id)=>{
        const roomDoc=doc (db,"rooms",id);
        await deleteDoc(roomDoc);
    };
    return (
      <div className="homePage">
        {roomBookLists.map((room)=>{
        return (
        <div className="room">
            <div className="roomheader">
                <div className="title">
                    <h1>{room.Owner}</h1>
                </div>
                <div className="deleteroom">
                    {isAuth && room.author.id === auth.currentUser.uid && (
                    <button
                        onClick={() => {
                           deleteroom(room.id);
                        }}
                        >
                        &#128465;
                        </button>
            )}
                </div>
            </div>
            <div className="roomcontainer">
                <h3>Room No of the Owner:{room.RoomNo}</h3>
                <h3>Duration Of Booking :{room.NoOfDays}</h3>
                <h3>Name of the  Booked Customer :{room.author.name}</h3>
            </div>
        </div>
        );
    })}
    </div>
    );
}
export default Home;*/}