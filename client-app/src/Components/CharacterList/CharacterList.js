import React from "react";
import { connect } from "react-redux";

// ChatacterItem component
import CharacterItem from "./CharacterItem/CharacterItem";

const CharacterList = ({ List, loading }) => {
    console.log("List = ", List);
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
export default connect(mapStateToProps)(CharacterList);