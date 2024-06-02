import React, {useEffect, useState} from "react"
import Characters from "./Characters"

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
	
	return (
		characters.map((character)=> (
			<Characters
				numIndex={character.id}
				img={character.image}
				name={character.name}
				specie={character.specie}
				gender={character.gender}
				locationName={character.location.name}
			/>
		))
	)    
}

export default Card;

