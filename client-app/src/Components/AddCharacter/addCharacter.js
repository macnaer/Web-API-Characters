import React, {Fragment, useState} from "react";
// Include HOC 
import { WithApiService } from "../Hoc/with-api-service";

const AddCharacter = ({apiStoreService}) => {

    const[name, setName] = useState("Enter name");
    const[strength, setStrength] = useState("20 - 100");
    const[histPoints, setHistPoints] = useState("20 - 100");
    const[defense, setDefense] = useState("30 - 150");
    const[intelligence, setIntelligence] = useState("40 - 100");

    const getIntelligence = (e) => {
        let intelligence = e.target.value;
        setIntelligence(intelligence);
    }
    const getDefense = (e) => {
        let defense = e.target.value;
        setDefense(defense);
    }
    const getName = (e) => {
        let name = e.target.value;
        setName(name);
    }

    const getHitsPoints = (e) =>{
        let histPoints =  e.target.value;
        setHistPoints(histPoints);
    }

    const getStrength = (e) => {
        let strength = e.target.value;
        setStrength(strength);
    }

    const onSave = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}\nStrength: ${strength}\nHitsPoints: ${histPoints}\nDefense: ${defense}\nIntelligence: ${intelligence}`);
        const newCharacher = {
            "Name": name,
            "HitPoints": parseInt(histPoints),
            "Strength": parseInt(strength),
            "Defense": parseInt(defense),
            "Intelligence": parseInt(intelligence),
            "Class": 3
        }
        apiStoreService.addNewCharacter(newCharacher);
    }



    return(
        <Fragment>
             <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={onSave} method="POST">
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" placeholder={name} onChange={getName}  />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">Strength</label>
                                <div className="col-sm-10">
                                <input type="number" min="1" max="100" className="form-control-plaintext" onChange={getStrength} placeholder={strength}  />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">HistPoints</label>
                                <div className="col-sm-10">
                                <input type="number" min="1" max="100" className="form-control-plaintext" onChange={getHitsPoints} placeholder={histPoints}  />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">Defense</label>
                                <div className="col-sm-10">
                                <input type="number" min="1" max="100" className="form-control-plaintext" onChange={getDefense} placeholder={defense}  />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">Intelligence</label>
                                <div className="col-sm-10">
                                <input type="number" min="1" max="100" className="form-control-plaintext" onChange={getIntelligence} placeholder={intelligence}  />
                                </div>
                            </div>
                            <button className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WithApiService()(AddCharacter);