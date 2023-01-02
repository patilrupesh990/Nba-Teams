import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function Tableheader(props) {
    const {assendingOrder}=props
    const columns = ["Team Name", "City", "Abbrevation", "Conference", "Division"];
    console.log(assendingOrder);
    return (
        <>
            <Row className='head_row'>
                {
                    columns.map((column,index) => {
                        return (
                            <Col key={`index-${column}`} className='head_col align-items-center'>
                                <p className="column-text">{column}</p>
                                {
                                    column === "City" && !assendingOrder?(
                                        <ArrowDropDownIcon onClick={props.handleSortCities} className='header_sorting'/>
                                    ):column === "City" && assendingOrder?(
                                        <ArrowDropUpIcon onClick={props.handleSortCities} className='header_sorting'/>
                                    ):null

                                }
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}

export default Tableheader