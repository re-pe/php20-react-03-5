import { FaTrashAlt } from 'react-icons/fa'
import Tags from '../helpers/tags'
const { button, div, h1, p, span } = Tags;

function UserList(props) {
    const { userList, editUser, deleteUser, buttonValue } = props;
    const disabled = (buttonValue === "Update") ? 'disabled' : '';
    /**
     * w/ jsx
     */
    // return (
    //     <div className="col">
    //         <h1>User list</h1>
    //         {userList.map(
    //             (user) => (
    //                 <p key={user.id}>
    //                     <span className="w-25 d-inline-block">{user.name}</span> <span className="w-25 d-inline-block">{user.surname}</span>&nbsp;
    //                     <button className="btn btn-primary" onClick={() => editUser(user.id)} disabled={disabled}>Edit</button>&nbsp;
    //                     <button className="btn btn-danger" onClick={() => deleteUser(user.id)} disabled={disabled}>Delete <FaTrashAlt /></button>
    //                 </p>
    //             )
    //         )}
    //     </div>
    // );

    /**
     * w/o jsx
     */
    return (
        div({ className: "col" },
            h1("User list"),
            ...userList.map(
                user => p({ key: user.id },
                    span({ className: "w-25 d-inline-block" }, user.name),
                    ' ',
                    span({ className: "w-25 d-inline-block" }, user.surname),
                    ' ',
                    button({ className: "btn btn-primary", onClick: () => editUser(user.id), disabled }, "Edit"),
                    ' ',
                    button({ className: "btn btn-danger", onClick: () => deleteUser(user.id), disabled }, "Delete ", FaTrashAlt()),
                )
            )
        )
    );
}

export default UserList;
