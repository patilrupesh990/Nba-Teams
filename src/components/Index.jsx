import React, {useEffect,useState} from 'react'
import SearchBar from './searchbar/SearchBar'
import TeamList from './TeamList/Index'
import axios from 'axios'
import debounce from 'lodash.debounce'
import TeamInfo from './TeamInfo/TeamInfo'

function NbaTeams() {

  useEffect(() => {
    getTeamsList();
  }, []);

  const [teamsList,setTeamsList] = useState([]);
  const [isOpenTeamInfoDrawer,setIsOpenTeamInfoDrawer] = useState(false)
  const [teamInfo,setTeamInfo] = useState({});
  const [assendingOrder,setAssendingOrder] = useState(false);


  const handleTeamInfoDrawer = async (selctedTeam)=>{
    await getTeamInfo(selctedTeam).then((teamInfo)=>{
      setTeamInfo(teamInfo)
    })
    setIsOpenTeamInfoDrawer(true)
  }

  const handleSortCities=async ()=>{
    await setTeamsList(teamsList.sort(compareValues("city"),assendingOrder?'asc':'desc'))
    setAssendingOrder(!assendingOrder)
  }

  function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  const getTeamInfo = (team) =>{
    return new Promise((resolve,reject)=>{
      axios.get(process.env.GET_GAMES_INFO).then((response)=>{
        let gamesInfo = response.data.data;
        let data={}        
        gamesInfo.forEach((game)=>{
          if(game.home_team.name === team["Team Name"])
            data=game;
          })
          resolve(data)
      })
      .catch((err)=>{reject(err.response)})
    })
  }

  const handleSearchData=async(searchKey)=>{
    if(searchKey === "")
     getTeamsList();
    await setTeamsList(teamsList.filter(team=>team?.name.toLowerCase().includes(searchKey.toLowerCase())))
  }

  const debaunceSeach = debounce(async (fn,value)=>{
    fn(value)
  },600)
  const getTeamsList=()=>{
    axios.get(process.env.GET_TEAMS_DATA).then((response)=>setTeamsList(response.data.data))

  }

  return (
    <>
        <div className='main'>
            <p>NBA TEAMS</p>
            <div>
                <SearchBar debaunceSeach={debaunceSeach} handleSearchData={handleSearchData} />
                <TeamList teamsList={teamsList} handleTeamInfoDrawer={handleTeamInfoDrawer} assendingOrder={assendingOrder} setAssendingOrder={setAssendingOrder} handleSortCities={handleSortCities}/>
                <TeamInfo teamInfo={teamInfo} isOpenTeamInfoDrawer={isOpenTeamInfoDrawer} setIsOpenTeamInfoDrawer={setIsOpenTeamInfoDrawer}/>
            </div>
        </div>
    </>
    
  )
}
export default NbaTeams