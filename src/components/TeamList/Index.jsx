import React from 'react'
import Table from '../../utils/table/Table'
function TeamsList(props) {
  const {teamsList}=props;

  return (
    <>
      <div className='team_list_conatiner'>
        <Table teamsList={teamsList}/>
      </div>
    </>
  )
}

export default TeamsList