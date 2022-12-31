import React, {useEffect,useState} from 'react'
import SearchBar from './searchbar/SearchBar'
import TeamList from './TeamList/Index'
import axios from 'axios'

function NbaTeams() {

  useEffect(() => {
    getTeamsList();
  }, []);

  const [teamsList,setTeamsList] = useState([]);

  const getTeamsList=()=>{
    axios.get('https://www.balldontlie.io/api/v1/teams').then((response)=>setTeamsList(response.data.data))

  }

  return (
    <>
        <div className='main'>
            <p>NBA TEAMS</p>
            <div>
                <SearchBar />
                <TeamList teamsList={teamsList}/>
            </div>
        </div>
    </>
    
  )
}

export default NbaTeams