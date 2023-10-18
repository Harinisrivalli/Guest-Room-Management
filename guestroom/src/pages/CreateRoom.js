{/*import React,{useState,useEffect} from "react";
import {addDoc, collection} from  "firebase/firestore";
import { db,auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreateRoom({isAuth}){
    const[Owner,SetOwner]=useState("");
    const[RoomNo,SetRoomNo]=useState("");
    const[NoOfDays,SetNoOfDays]=useState("");
    const bookingCollectionRef=collection(db,"rooms");
    let navigate=useNavigate()
    const CreateRoom=async()=>{
        await addDoc(bookingCollectionRef,{
            Owner,
            RoomNo,
            NoOfDays,
            author:{name:auth.currentUser.displayName,id:auth.currentUser.uid},
        });
        navigate("/");
    };
    useEffect(()=>{
        if(!isAuth){
            navigate("/Login");
        }
    },[]);
    return (
    <div className="createRoom">
        <div className="cpContainer">
            <h1>Room Booking</h1>
            <div className="inputGp">
                <label>Owner:</label>
                <select value={Owner} onChange={(event) => { SetOwner(event.target.value); }}>
                <option value="">Select the owner</option>
                <option value="Andrew">Andrew</option>
                <option value="John">John</option>
                </select>
            </div>

            <div className="inputGp">
                <label>Room No:</label>
                <select value={RoomNo} onChange={(event) => { SetRoomNo(event.target.value); }}>
                <option value="">Select the room number</option>
                {Owner === 'John' && (
                    <>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    </>
                )}
                {Owner === 'Andrew' && (
                    <>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </>
                )}
        </select>
      </div>
      <div className="inputGp">
        <label>No of Days:</label>
        <select value={NoOfDays} onChange={(event) => { SetNoOfDays(event.target.value); }}>
          <option value="">Select the number of days</option>
          {Owner === 'John' && (
            <>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
            </>
          )}
          {Owner === 'Andrew' && (
            <>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
            </>
          )}
        </select>
            </div>
            <button onClick={CreateRoom}> Submit Booking</button>
        </div>
    </div>
    );
}
export default CreateRoom;*/}