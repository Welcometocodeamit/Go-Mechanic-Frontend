
import React, { useState, useEffect } from 'react';
import AdminGarageComponent from './AdminGarageComponent';

export default function AdminLogin() {
    const [garages, setGarages] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    function adminVerification(){
        const username="Amit"
        const password="Amit@123"
         
        let inputEmail=document.getElementById('email').value
        let inputPassword=document.getElementById('password').value

        if(username===inputEmail && password===inputPassword){
            setIsAdmin(true)
        }else{
            alert("Username or password wrong")
        }
    }

    async function getGarages(event) {
        event.preventDefault();
        adminVerification()
        try {
            let url = "https://gomechanicbackend.onrender.com/api/services";
            let data = await fetch(url).catch((err) => { console.log(err) });
            let parsedData = await data.json();
            console.log("init")
            setGarages(parsedData.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        console.log("Updated garages:", garages);
    }, [garages]);

    return (
        <>
            {!isAdmin &&
                <div id='loginpagemaindiv'>
                    <div id='logindiv'>
                        <h3><b>Admin Log in</b></h3>
                        <form>
                            <input className='input' type='text' placeholder='Username or Email' id='email' />
                            <input className='input' type='password' placeholder='Password' id='password' />
                            <input id='loginsubmit' type='submit' onClick={getGarages} />
                        </form>
                    </div>
                </div>
            }

            {isAdmin && (<>
            <center><h4 id='adminheading'>Admin panal</h4></center>
            <center><span><button id='addgaragebtn'>Add garage</button></span></center>
            <table border={"1px solid black"}>
                <thead>
                <tr>
                    <th>Garage Name</th>
                    <th>City</th>
                    <th>Garage Service</th>
                    <th>Cost</th>
                    <th>Update Garage</th>
                    <th>Delete Garage</th>
                </tr>
                </thead>
                <tbody>
                {garages.map((element) => (
                    <AdminGarageComponent
                    key={element.id}
                    orgname={element.organizationName}
                    city={element.city}
                    services={element.serviceName}
                    price={element.serviceCost}
                    />
                ))}
                </tbody>
            </table>
            </>
            )}

        </>
    );
}

