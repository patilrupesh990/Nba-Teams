import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Pagination(props) {
    const teamsList = props?.teamsList ? props?.teamsList : []
    const pageNumber = props.pageNumber;
    const setPageNumber= props.setPageNumber;
    const dataPerPage= props.dataPerPage;
    const setDataPerPage=props.setDataPerPage;
    const getPageData = props?.getPageData;

    const getPaginationsCountList = () => {
        let pageNumbers = [];
        let actualCount=teamsList.length / dataPerPage;
        let exactCount=actualCount-parseInt(actualCount)>0?actualCount+1:parseInt(actualCount);
        for (let count = 1; count <= exactCount; count++)
            pageNumbers.push(count);
        return pageNumbers;
    }
    
    const handlePreviousPage=async()=>{
        if(pageNumber>1){
            await setPageNumber(pageNumber-1);
            getPageData && getPageData(pageNumber)
        }
    }

    const handlePageChange=(pageNumber)=>{
        setPageNumber(pageNumber)
        getPageData && getPageData(pageNumber)
    }

    const handleNextPage = async() =>{
        if(pageNumber<= parseInt(teamsList.length / dataPerPage)){
            await setPageNumber(pageNumber+1);
            getPageData && getPageData(pageNumber)
        }
    }

    return (
        <div className='pagination-container'>
            <div className='pagination-box' onClick={handlePreviousPage}>
                <ArrowBackIosNewIcon fontSize='6' className="pagination_icon" />
            </div>
            {
                teamsList && getPaginationsCountList().map((page) => {
                    return (
                        <div key={page} className={page === pageNumber ? 'active-pagination-box' : 'pagination-box'} onClick={() => handlePageChange(page)}>
                            <p className="page_number">{page}</p>
                        </div>
                    )
                })
            }

            <div className='pagination-box' onClick={handleNextPage}>
                <NavigateNextIcon fontSize='6' className="pagination_icon" />
            </div>
        </div>

    )
}

export default Pagination