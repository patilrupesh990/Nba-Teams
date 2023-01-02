import React from 'react'
import Table from '../../utils/table/Table'
function TeamsList(props) {
  const {teamsList,handleTeamInfoDrawer}=props;
  
  return (
    <>
      <div className='team_list_conatiner'>
        <Table teamsList={teamsList} handleTeamInfoDrawer={handleTeamInfoDrawer}/>
      </div>
    </>
  )
}

export default TeamsList