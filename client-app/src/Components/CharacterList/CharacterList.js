import React from "react";
import { connect } from "react-redux";
import { CharacterLoaded } from "../../Actions/CharacterActions";

// ChatacterItem component
import CharacterItem from "./CharacterItem/CharacterItem";
import { getAllCharacters } from "../../Services/api-service";
import { useEffect } from "react";

const CharacterList = ({ List, loading, CharacterLoaded }) => {
    console.log("List = ", List);
    useEffect(() => {
        getAllCharacters().then(allCharacters => {
            CharacterLoaded(allCharacters.data);
        })
    }, []);



    return (
        <div className="container">
            <div className="row">
                <CharacterItem />
            </div>
        </div>
    )
}
const mapStateToProps = ({ CharacterReducer }) => {
    console.log("mapStateToProps ", CharacterReducer);
    const { List, loading } = CharacterReducer;
    return { List, loading }
}
const mapDispachToProps = {
    CharacterLoaded
}
export default connect(mapStateToProps, mapDispachToProps)(CharacterList);