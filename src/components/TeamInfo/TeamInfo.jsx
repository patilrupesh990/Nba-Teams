import React from 'react'
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

function TeamInfo(props) {
const isOpenTeamInfoDrawer=props.isOpenTeamInfoDrawer
const setIsOpenTeamInfoDrawer=props.setIsOpenTeamInfoDrawer
const teamInfo= props.teamInfo;
const toggle=()=>setIsOpenTeamInfoDrawer(false)

const getFormatedDate=(date)=>{
    const newDate = new Date(date);
    return newDate.getFullYear()+" - "+(newDate.getMonth()<10?"0"+newDate.getMonth():newDate.getMonth())+" - "+newDate.getDate();
}

  return (
    <>
        <Drawer
            anchor="right"
            open={isOpenTeamInfoDrawer}
          >
            {teamInfo?(
                 <div className='team_info_container'>
                 <div className='team_info_header'>
                     <div>
                         <p className='name_heading'>{teamInfo?.home_team?.name}</p>
                     </div>
                     <div>
                         <CloseIcon onClick={toggle} className='close_team_info_icon'/>
                     </div>
                 </div>
                 <div className='team_info_field team_info_top'>
                    <div className='team_info_field_lable'>
                        <p>Team Full Name</p>
                    </div>
                    <div>
                        <p>{teamInfo?.home_team?.full_name}</p>
                    </div>
                 </div>

                 <div className='team_info_field team_info_summary'>
                    <div className='team_info_field_lable'>
                        <p>Random Game Details:</p>
                    </div>
                    <div>
                        
                    </div>
                 </div>

                 <div className='team_info_field team_info_summary'>
                    <div className='team_info_field_lable'>
                        <p>Date</p>
                    </div>
                    <div>
                         <p>{getFormatedDate(teamInfo?.date)}</p>
                    </div>
                 </div>

                 <div className='team_info_field team_info_summary'>
                    <div className='team_info_field_lable'>
                        <p>Home Team</p>
                    </div>
                    <div>
                    <p>{teamInfo?.home_team?.name}</p>
                    </div>
                 </div>

                 <div className='team_info_field team_info_summary'>
                    <div className='team_info_field_lable'>
                        <p>Home Team Score</p>
                    </div>
                    <div>
                        <p>{teamInfo?.home_team_score}</p>
                    </div>
                 </div>

                 <div className='team_info_field team_info_summary'>
                    <div className='team_info_field_lable'>
                        <p>Visitor Team</p>
                    </div>
                    <div>
                        <p>{teamInfo?.visitor_team?.name}</p>
                    </div>
                 </div>

                 <div className='team_info_field team_info_summary'>
                    <div className='team_info_field_lable'>
                        <p>Visitor Team Score</p>
                    </div>
                    <div>
                        <p>{teamInfo?.visitor_team_score}</p>
                    </div>
                 </div>

               



             </div>
            ):(
                <div>
                    <p>No Data Found</p>
                </div>
            )}
           
          </Drawer>
    </>
  )
}

export default TeamInfo