import React from 'react'
import Table from '../../utils/table/Table'
function TeamsList(props) {
  const {teamsList,handleTeamInfoDrawer,assendingOrder,setAssendingOrder,handleSortCities}=props;
  
  return (
    <>
      <div className='team_list_conatiner'>
        <Table teamsList={teamsList} handleTeamInfoDrawer={handleTeamInfoDrawer} assendingOrder={assendingOrder} setAssendingOrder={setAssendingOrder} handleSortCities={handleSortCities}/>
      </div>
    </>
  )
}

export default TeamsList