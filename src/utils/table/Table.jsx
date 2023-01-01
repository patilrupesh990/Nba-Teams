import React, {useEffect,useState} from 'react'
import Tableheader from './TableHeader'
const initialState={
  teamsList:[]
}
function Table(props) {
const [teamsList,setTeamsList] =useState(initialState.teamsList);

useEffect(() => {
    let data = setFilterTeamList(props.teamsList);
    setTeamsList(data)
  }, [props.teamsList]);

  const setFilterTeamList = (teamList)=>{
    let teamData=[];
    teamList.map((team)=>{
      let teamObj = {}
      teamObj["Team Name"]=team.name
      teamObj["City"]=team.city
      teamObj["Abbrevation"]=team.abbreviation
      teamObj["Conference"]=team.conference
      teamObj["Division"]=team.division
      teamData.push(teamObj);
    })
    return teamData
  }

  return (
    <>
        <Tableheader className={"teams_table_header"} teamsList={teamsList}/>
    </>
  )
}

export default Table