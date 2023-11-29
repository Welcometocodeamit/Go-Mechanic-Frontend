
import React, { useState, useEffect } from 'react';
import AdminGarageComponent from './AdminGarageComponent';

export default function AdminLogin() {
    const [garages, setGarages] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    function adminVerification(){
        const username="Amitkumbhar"
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
            let url = "https://go-mechanic-backend-production.up.railway.app/api/services";
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

            {isAdmin &&
                garages.map((element) => {
                    return <AdminGarageComponent key={element.id} orgname={element.organizationName} city={element.city}
                        services={element.serviceName} price={element.serviceCost}/>
                })
                
            }
        </>
    );
}

