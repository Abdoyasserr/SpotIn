import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

function Images(props) {
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));

    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>

            {currentItems.map(value => {
                return (
                    <div className="card">
                        <h5>#{value.id} {value.department}</h5>
                        <div className="card-image">
                            <img id="Photo" src={value.photo} />
                            <div>
                                <p className="card-name">{value.name}</p>
                                <p className="card-email">{value.email ? value.email : "-"}</p>
                                <p className="card-phone">{value.phonenumber ? value.phonenumber : "-"}</p>
                                <p className="card-gender">{value.gender}</p>
                            </div>

                        </div>
                    </div>

                );
            })}
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
export default Images