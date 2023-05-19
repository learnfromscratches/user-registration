import Button from "@/components/button";
import Navbar from "@/components/navbar";
import Input from "@/components/search";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const UserRegistration = () =>{
  const [firstname,setFirstName] = useState("");
  const [surname,setSurname] = useState("");
  const [location,setLocation] = useState("");
  const [age,setuserAge] = useState("");
  const [user,updateUserArray] = useState([])
  const [newUser,setFilter] = useState(user);


  const addNewUser =()=>{
    updateUserArray([...user,{firstname : firstname, surname : surname, location : location, age : age}])
    setFilter([...user,{firstname : firstname, surname : surname, location : location, age : age}])
    setFirstName("")
    setSurname("")
    setLocation("")
    setuserAge("")
  }



  const onType = event => {

    if(event.target.value == "")
      setFilter(user)
      else{
    const filteredArray = user.filter(i=>i.firstname.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilter(filteredArray)}}

  return(
    <div>
      <Navbar onType = {onType}/>
      <div className={styles.pageContent}>
      <div className={styles.form}>
        <div className={styles.content}>
        <Input placeholder = "Enter firstname" value = {firstname} onChange ={i =>{setFirstName(i.target.value)}}/>
        <Input placeholder = "Enter surname"  value = {surname} onChange = {i =>{setSurname(i.target.value)}}/>
        <Input placeholder = "Enter Location" value = {location}onChange = {i =>{setLocation(i.target.value)}}/>
        <Input placeholder = "Enter user's age" value ={age} onChange = {i =>{setuserAge(i.target.value)}}/>
        <Button text = "Submit"  handleClick ={addNewUser} classname="button"/>
        </div>
      </div>
      <div className={styles.displaySection}>
      {newUser.map(i =>{
           return( <div className={styles.singleUser}>
                <span>Name :</span><span>{i.firstname}</span>
                <span>Surname :</span><span> {i.surname}</span>
                <span>Location :</span><span> {i.location}</span>
                <span>Age :</span><span> {i.age}</span>
            </div>)}
            )}
      </div>
      </div>
    </div>
  )
}
export default UserRegistration;