import './UserTable.scss';
import {useUserTableContext} from "../UsersTableContextProvider";

const UserTable = () => {
    const {Users} = useUserTableContext();
    return (
        <div className={'tableContainer'}>
            <table className="col-md-7 table table-primary table-striped mt-5">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Date</th>
                    <th scope="col">Full name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Distance</th>
                    <th scope="col">Payment</th>
                </tr>
                </thead>
                <tbody>
                {Users.map((user) => {
                    return (
                        <tr key={user.id+user.email}>
                            <th scope="row">{user.id}</th>
                            <td>{user.date}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.distance}</td>
                            <td>{user.payment}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;