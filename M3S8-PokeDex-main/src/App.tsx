import { useState, useEffect } from "react";
import "./App.css";


interface PokemonFetch {
  name: string;
  weight: number;
  height: number;
  
}
nome: "Charmader";
function App() {
  const [data, setData] = useState<PokemonFetch>();
  const [pokemonName, setPokemonName] = useState("");

  const [data1, setData1] = useState<PokemonFetch>();
  const [pokemonName1, setPokemonName1] = useState("");

  const [data2, setData2] = useState<PokemonFetch>();
  const [pokemonName2, setPokemonName2] = useState("");

  const [data3, setData3] = useState<PokemonFetch>();
  const [pokemonName3, setPokemonName3] = useState("");

  const [data4, setData4] = useState<PokemonFetch>();
  const [pokemonName4, setPokemonName4] = useState("");



  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/charmander`
      );
      const data = await response.json();
      setData(data);
    }
    getPokemon();
  }, [pokemonName]);

  useEffect(() =>{
    async function getPokemon() {
      const response1 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/venusaur`
      );
      const data1 = await response1.json();
      setData1(data1);
    }
    getPokemon();
  }, [pokemonName1]);

  useEffect(() =>{
    async function getPokemon() {
      const response2 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/charizard`
      );
      const data2 = await response2.json();
      setData2(data2);
    }
    getPokemon();
  }, [pokemonName2]);

  useEffect(() =>{
    async function getPokemon() {
      const response3 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/butterfree`
      );
      const data3 = await response3.json();
      setData3(data3);
    }
    getPokemon();
  }, [pokemonName3]);

  useEffect(() =>{
    async function getPokemon() {
      const response4 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/beedrill`
      );
      const data4 = await response4.json();
      setData4(data4);
    }
    getPokemon();
  }, [pokemonName4]);
  
  

  return (
    <div className="App">
       <div className="App0">
      <h5>Nome do pokemon: {data?.name}</h5>
      <h5>Peso do pokemon: {data?.weight}kg</h5>
      <h5>Altura do pokemon: {data?.height}</h5>
      </div>
      <div className="App1">
      <h5>Nome do pokemon: {data1?.name}</h5>
      <h5>Peso do pokemon: {data1?.weight}kg</h5>
      <h5>Altura do pokemon: {data1?.height}</h5>
      </div>
      <div className="App2">
      <h5>Nome do pokemon: {data2?.name}</h5>
      <h5>Peso do pokemon: {data2?.weight}kg</h5>
      <h5>Altura do pokemon: {data2?.height}</h5>
      </div>
      <div className="App3">
      <h5>Nome do pokemon: {data3?.name}</h5>
      <h5>Peso do pokemon: {data3?.weight}kg</h5>
      <h5>Altura do pokemon: {data3?.height}</h5>
      </div>
      <div className="App4">
      <h5>Nome do pokemon: {data4?.name}</h5>
      <h5>Peso do pokemon: {data4?.weight}kg</h5>
      <h5>Altura do pokemon: {data4?.height}</h5>
      </div>
      </div>
    
  );
}

export default App;
