import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

export default function App(){

    const [availWebsite, setAvailWebsite]=useState(true);
    const [availApp, setAvailApp]=useState(true);
    const [name, setName]=useState("");
    const [webUser,setWebUser]=useState({
        name: "",
        time: ""
    });
    const [appUser,setAppUser]=useState({
        name: "",
        time: ""
    });

    function handleApp(){
        if(availApp && name.length){
            const d=new Date();
            let hr=d.getHours().toString();
            let mi=d.getMinutes().toString();
            let t=hr+" : "+mi;
            setAvailApp(false);
            setAppUser({
                name: name,
                time: t
            });
            setName("");
        }
        else{
            setAvailApp(true);
            setAppUser({
                name: "",
                time: ""
            });
        }
    }
    function handleWeb(){
        if(availWebsite  && name.length){
            const d=new Date();
            let hr=d.getHours().toString();
            let mi=d.getMinutes().toString();
            let t=hr+" : "+mi;
            setAvailWebsite(false);
            setWebUser({
                name: name,
                time: t
            });
            setName("");
        }
        else{
            setAvailWebsite(true);
            setWebUser({
                name: "",
                time: ""
            });
        }
    }
    function handleChange(e){
        setName(e.target.value);
    }

    function Button(){
        return(
            <>
                {availApp && <button type="button" className="btn btn-light mt-5" onClick={handleApp}>App start</button>}
                {availWebsite && <button type="button" className="btn btn-light mt-5" onClick={handleWeb}>Website start</button>}
                {!availApp && <button type="button" className="btn btn-light mt-5 btn-c" onClick={handleApp}>App close</button>}
                {!availWebsite && <button type="button" className="btn btn-light mt-5 btn-c" onClick={handleWeb}>Website close</button>}
            </>
        );
    }
    function Availability(){
        if(availApp && availWebsite){
            return(
                <>
                <h3 className="heading  head2">No one is watching, happy study{" :)"} </h3>
                </>
            );
        }
        else if(availApp){
            return(
                <>
                <h3 className="heading  head2"> use mobile App</h3>
                <h3 className="heading">{webUser.name} is using website</h3>
                <h3 className="heading">since {webUser.time}</h3>
                </>
            );
        }
        else if(availWebsite){
            return(
                <>
                <h3 className="heading  head2"> use website</h3>
                <h3 className="heading">{appUser.name} is using App</h3>
                <h3 className="heading">since {appUser.time}</h3>
                </>
            );
        }
        else{
            return(
            <>
                <h3 className="heading  head2"> can't log in now, come back later {" :("} </h3>
                <h3 className="heading">{appUser.name} is using App</h3>
                <h3 className="heading">since {appUser.time}</h3>
                <h3 className="heading">{webUser.name} is using Website</h3>
                <h3 className="heading">since {webUser.time}</h3>
                </>
            );
        }
    }

    return(
        <>
        <h1 className="heading">welcome!</h1>

        <div className="container">
                <div class="mb-3">
                    <label for="name" class="form-label">Enter below</label>
                    <input type="text" class="form-control" id="name" placeholder="first name"
                    onChange={handleChange}
                    value={name}
                    />
                    <Button />
                </div>
            </div>
        <Availability />
        </>
    );
}