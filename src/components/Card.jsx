import React, {useEffect, useState} from "react"

const Card = () => {
    const [characters, setCharacter] = useState([])
    
    async function getCharacters(){
        try{
            const response = await fetch("https://rickandmortyapi.com/api/character")
            const data = await response.json()
            console.log(data)
            setCharacter(data.results)
            console.log("esto es data.results....", data.results)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() =>{
        getCharacters()
    },[])

    
    return(
        characters.map((character)=>{
            console.log("esto es character", character)
            return (
                <div className="container-fluid d-flex align-items-center justify-content-center mt-5">
                    <div className="card col-4">
                        <img src={character.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                            <p className="card-text">{character.specie}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li key={character.id} className="list-group-item">Gender: {character.gender}</li>
                            <li className="list-group-item">Specie: {character.species}</li>
                            <li className="list-group-item">Location_Name: {character.location.name}</li>
                        </ul>
                    </div>
                </div>
        )
    })
    )    
}

export default Card;

