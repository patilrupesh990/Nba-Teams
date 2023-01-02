import React, {useEffect,useState} from 'react'
import Tableheader from './TableHeader'
import Container from 'react-bootstrap/Container';
import TableContent from './TableContent';
import Pagination from './Pagination';

const initialState={
  teamsList:[]
}
function Table(props) {
const columns = ["Team Name", "City", "Abbrevation", "Conference", "Division"]
const [teamsList,setTeamsList] =useState(initialState.teamsList);
const [pageNumber, setPageNumber] = useState(1);
const [dataPerPage, setDataPerPage] = useState(7);
const handleTeamInfoDrawer=props.handleTeamInfoDrawer;

useEffect(() => {
    let data = setFilterTeamList(props.teamsList);
    setTeamsList(data)
  }, [props.teamsList]);

  const setFilterTeamList = (teamList)=>{
    let teamData=[];
    teamList.forEach((team)=>{
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

  const getPageData = (pageNumber) => {
    const start = pageNumber === 1 ? 0 : (pageNumber - 1) * (dataPerPage)
    const end = pageNumber === 1 ? 6 : (pageNumber * dataPerPage) - 1;
    let pageData = [];
    for (let count = start; count <= end; count++)
        teamsList[count] && pageData.push(teamsList[count])

    return pageData ? pageData : []
}


  return (
    <>
        <Container className="teams_table_container"  style={{ marginLeft: '0px' }}>
            <Tableheader  teamsList={teamsList}/>
            <TableContent getPageData={getPageData}  pageNumber={pageNumber} columns={columns} handleTeamInfoDrawer={handleTeamInfoDrawer}/>
            <Pagination teamsList={teamsList} pageNumber={pageNumber} setPageNumber={setPageNumber} dataPerPage={dataPerPage} setDataPerPage={setDataPerPage}/>
        </Container>
    </>
  )
}

export default Table