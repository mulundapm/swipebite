import React, { useState } from 'react'
import Auth from '../Components/Auth'
import { db } from '../config/firebase'
import {  collection, addDoc} from 'firebase/firestore'
import AppLayout from '../Components/AppLayout'
// import firebase from 'firebase/compat/app'
import { serverTimestamp } from 'firebase/firestore'


function LoginPage() {

    // const [foodList, setFoodList] =useState([])
    // const menuItemCollectionRef = collection(db, "menu-items")
    // useEffect(()=>{
    //     const getfoodList = async () =>{
    //         try {
    //             const data =await getDocs(menuItemCollectionRef);
    //             const filteredData = data.docs.map((doc)=>({...doc.data(), id:doc.id}))
    //             setFoodList(filteredData)
    //         } catch (err){
    //             console.error(err)
    //         }

    //     }
    //     getfoodList()  
    // }, [])

    //Mail list upload
    const[newName, setNewName] = useState("");
    const[newEmail, setEmail] = useState("");

    const mailListRef = collection(db, "mail-list")

    const onSubmitInfo = async (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (newName.trim() === "" || newEmail.trim() === "" || !emailPattern.test(newEmail)) {
            alert("Invalid input.");
            return;
          }
        try{
            await addDoc(mailListRef, {
                name: newName, 
                email: newEmail, 
                createdAt: serverTimestamp()
            });
            alert("Information submitted successfully!");
        }catch(err){
            alert("Error in submitting")
            console.error(err)
        }
    }

  return (
    <div>
        <AppLayout>
            <Auth/>
            <div className='container mail-list'>
                <h2>Follow for more</h2>
                <p>If you want to follow along the development of this app, drop down your name and email and I will email you when there is any interesting updates.</p>
                <form className='container'>
                    <div className="row">
                        <label htmlFor='name'>Name: </label>
                        <input type="text" placeholder='Name' required onChange={(e) => setNewName(e.target.value)}/>
                    </div>
                    <div className="row">
                        <label htmlFor="email"> Email: </label>
                        <input type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <button onClick={onSubmitInfo} className='primary-button'>Submit</button>
                </form>
            </div>
            {/* <div>
                {foodList.map((food) => (
                    <div>
                        <h1>{food.name}</h1>
                        <h2>{food.course}</h2>
                    </div>
                ))}
            </div> */}
            <div className="contact-info">
                @mulundapm
            </div>
        </AppLayout>
    </div>
  )
}

export default LoginPage