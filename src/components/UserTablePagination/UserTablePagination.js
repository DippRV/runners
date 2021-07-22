import ReactPaginate from 'react-paginate';
import {useUserTableContext} from "../UsersTableContextProvider";

const UserTablePagination = () => {
    const {changePage, pageCount} = useUserTableContext()
    return (
        <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName='pagination'
        pageClassName='page-item'
        previousClassName='page-item'
        nextClassName='page-item'
        pageLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
        disabledClassName={'disabled'}
        />
    );
}

export default UserTablePagination;