const UserTable = ({Users}) => {
    return (
        <table className="table mt-5">
            <thead>
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
    );
}

export default UserTable;