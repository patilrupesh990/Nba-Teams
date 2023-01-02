import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Tableheader(props) {

    const columns = ["Team Name", "City", "Abbrevation", "Conference", "Division"]
    return (
        <>
            <Row className='head_row'>
                {
                    columns.map((column,index) => {
                        return (
                            <Col key={`index-${column}`} className='head_col align-items-center'>
                                <p className="column-text">{column}</p>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}

export default Tableheader