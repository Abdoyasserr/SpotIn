import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import React from "react";
import "./CSS-files/Reports-css/Reports.css";


function Table(props) {

    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 13;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));

    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    const getColor = (time) => {
        const startTime1 = new Date("1970/01/01 09:00:00 AM");
        const endTime1 = new Date("1970/01/01 09:15:00 AM");
        const endTime2 = new Date("1970/01/01 09:30:00 AM");
        const currentTime = new Date(`1970/01/01 ${time}`);

        if (currentTime >= startTime1 && currentTime <= endTime1) {
            return "#00A300";
        } else if (currentTime > endTime1 && currentTime <= endTime2) {
            return "#A3A300";
        } else {
            return "#C23636";
        }
    };

    const getColor2 = (time) => {
        const startTime1 = new Date("1970/01/01 04:30:00 PM");
        const endTime1 = new Date("1970/01/01 04:45:00 PM");
        const startTime2 = new Date("1970/01/01 04:45:00 PM");
        const endTime2 = new Date("1970/01/01 05:00:00 PM");
        const currentTime = new Date(`1970/01/01 ${time}`);

        if (currentTime >= startTime2 && currentTime <= endTime2) {
            return "#00A300";
        } else if (currentTime >= startTime1 && currentTime < endTime1) {
            return "#A3A300";
        } else {
            return "#C23636";
        }
    };
    

    return (
        <>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time in</th>
                        <th>Time out</th>
                        <th>Department</th>
                        <th>Branch</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(value => {
                        return (
                            <tr>
                                <td>{value.emp_id}</td>
                                <td>{value.name}</td>
                                <td>{value.att_Date}</td>
                                <td style={{ color: getColor(value.att_Time) }}>{value.att_Time}</td>
                                <td style={{ color: getColor2(value.dep_Time) }}>{value.dep_Time}</td>
                                <td>{value.department}</td>
                                <td>{value.branch_name}</td>
                                <td>{value.att_comment}</td>
                            </tr>

                        );
                    })}
                </tbody>
            </table>

            <div className="div-pagination">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="Previous"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination justify-content-center"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    activeClassName="active"
                    disabledClassName="disabled"
                />
            </div>
        </>
    );
}
export default Table