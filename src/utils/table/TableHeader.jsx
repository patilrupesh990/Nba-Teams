import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Tableheader(props) {
const className=props.className;
const teamsList = props?.teamsList?props?.teamsList:[]
const [pageNumber,setPageNumber] =  useState(1);
const [dataPerPage,setDataPerPage] = useState(7);

const getPageData = (pageNumber) =>{
    
    const start = pageNumber===1?0:(pageNumber-1) * (dataPerPage)
    const end = pageNumber===1?6:(pageNumber*dataPerPage)-1;
    let pageData=[];
    for(let count= start;count<=end;count++)
        teamsList[count] && pageData.push(teamsList[count])
    
    return pageData?pageData:[]
}

const getPaginationsCountList = () =>{
    let pageNumbers=[];
    for(let count=1;count<=parseInt(teamsList.length/dataPerPage);count++)
        pageNumbers.push(count);
    return pageNumbers;
}
const columns =["Team Name","City","Abbrevation","Conference","Division"]
  return (
    <>
        <Container className={className} style={{marginLeft:'0px'}}>
            <Row className='head_row'>
                {
                    columns.map((column)=>{
                        return(
                            <Col className='head_col align-items-center'>
                                <p className="column-text">{column}</p>
                            </Col>
                        )
                    })
                }
                
            </Row>

            {
                   teamsList &&  getPageData(2).map((team)=>{
                        return(
                            <Row className="data-row">
                                {
                                   columns.map((column)=>{
                                        return(
                                            <Col className='data-col'>
                                                {team[column]}
                                            </Col>
                                        )
                                   })
                                }
                            </Row>

                        )
                    })
                }
                 <div className='pagination-container'>
                    <div className='pagination-box'>
                        <ArrowBackIosNewIcon fontSize='6' className="pagination_icon"/>
                    </div>
                    {
                       teamsList && getPaginationsCountList().map((page)=>{
                        return(
                        <div className='pagination-box'>
                            <p className="page_number">{page}</p>
                        </div>
                        )
                       })
                    }
                    
                    <div className='pagination-box'>
                        <NavigateNextIcon fontSize='6' className="pagination_icon"/>
                    </div>
                </div>
        </Container>
       
    </>
  )
}

export default Tableheader