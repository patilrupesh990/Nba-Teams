import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TableContent(props) {

    const teamsList = props?.teamsList ? props?.teamsList : []
    const pageNumber = props.pageNumber;
    const getPageData = props.getPageData;
    const columns= props.columns;
    const handleTeamInfoDrawer=props.handleTeamInfoDrawer;

    return (
        <>
            {
                teamsList && getPageData(pageNumber).map((team,index) => {
                    return (
                        <Row  key={`${index}-${team?.name}`} className="data-row">
                            {
                                columns.map((column,index) => {
                                    return (
                                        <Col key={`${index}-${column}`} className='data-col' onClick={()=>handleTeamInfoDrawer(team)}>
                                            {team[column]}
                                        </Col>
                                    )
                                })
                            }
                        </Row>

                    )
                })
            }
        </>
    )
}

export default TableContent