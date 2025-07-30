import { useState } from 'react'
import './App.css'

const App = () => {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ])

  const FighterCard = (props) =>{
    return(
      <>
      <li className="fighter-card">
        <img src={props.img} alt={props.name} />
        <div className="fighter-name">{props.name}</div>
        <div className="fighter-price">£{props.price}</div>
        <div className="fighter-strength">Strength: {props.strength}</div>
        <div className="fighter-agility">Agility: {props.agility}</div>
        <button onClick={() => handleAddFighter(props)}>+Add</button>
      </li>
      </>
    )
  }

  const totalStrength = team.reduce((sum, {strength}) => sum + strength, 0)
  const totalAgility = team.reduce((sum, {agility}) => sum + agility, 0)

  const TeammateCard = (props) =>{
    return(
      <>
      <li className="fighter-card">
        <img src={props.img} alt={props.name} />
        <div className="fighter-name">{props.name}</div>
        <div className="fighter-price">£{props.price}</div>
        <div className="fighter-strength">Strength: {props.strength}</div>
        <div className="fighter-agility">Agility: {props.agility}</div>
        <button onClick={() => handleRemoveFighter(props)}>-Remove</button>
      </li>
      </>
    )
  }

  const handleAddFighter = (fighter) =>{
    if (money-fighter.price >= 0){
      setTeam([...team, fighter])
      setZombieFighters(prev => prev.filter(f => f.id !== fighter.id))
      setMoney(money-fighter.price)
    }else{console.log("Not enough money")}
  }

  const handleRemoveFighter = (fighter) =>{
    setTeam(prev => prev.filter(f => f.id !== fighter.id))

    setZombieFighters([...zombieFighters, fighter])

    setMoney(money+fighter.price)
    
  }


  return (
    <>
      <h1>Zombie fighters</h1>
      <h2>Money: £{money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Team:</h2>
      <ul>
        {team.length <= 0 
        ? <p>Pick some heroes!</p> 
        : team.map((fighter, index) => (
          <TeammateCard key={index} {...fighter}/>
        ))}
        
      </ul>
      <h2>Fighters:</h2>
      <ul>
        {zombieFighters.map((fighter, index) =>(
          <FighterCard key={index} {...fighter}/>
        ))}
      </ul>
    </>
    
  );
}

export default App

