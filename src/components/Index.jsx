import React, {useEffect,useState} from 'react'
import SearchBar from './searchbar/SearchBar'
import TeamList from './TeamList/Index'
import axios from 'axios'
import debounce from 'lodash.debounce'

function NbaTeams() {

  useEffect(() => {
    getTeamsList();
  }, []);

  const [teamsList,setTeamsList] = useState([]);

  const handleSearchData=async(searchKey)=>{
    if(searchKey === "")
     getTeamsList();
    await setTeamsList(teamsList.filter(team=>team?.name.toLowerCase().includes(searchKey.toLowerCase())))
  }

  const debaunceSeach = debounce(async (fn,value)=>{
    fn(value)
  },600)
  const getTeamsList=()=>{
    axios.get('https://www.balldontlie.io/api/v1/teams').then((response)=>setTeamsList(response.data.data))

  }

  return (
    <>
        <div className='main'>
            <p>NBA TEAMS</p>
            <div>
                <SearchBar debaunceSeach={debaunceSeach} handleSearchData={handleSearchData} />
                <TeamList teamsList={teamsList}/>
            </div>
        </div>
    </>
    
  )
}

export default NbaTeams