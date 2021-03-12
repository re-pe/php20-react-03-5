//import React from 'react';
import { useState } from 'react';
import UserList from './user-list';
import RegistrationForm from './registration-form';
import Tags from '../helpers/tags'
// const { br, div, form, h1, input, label } = Tags;
const { div } = Tags;

/**
 * 
 * class component version
 * To enable, uncomment 1-st line with React import
 */
// class Main extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userList: [],
//             id: 0,
//             name: '',
//             surname: '',
//             btnValue: 'Submit',
//         };
//     }

//     handleChange = (event) => {
//         this.setState({ [event.target.name]: event.target.value });
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const userList = this.state.userList.filter(user => user.id !== this.state.id);
//         const userData = {
//             id: (this.state.id > 0) ? this.state.id : Date.now(),
//             name: this.state.name,
//             surname: this.state.surname,
//         };
//         userList.push(userData);
//         userList.sort((prev, next) => prev.id - next.id);
//         this.setState({ userList, id: 0, name: '', surname: '', btnValue: "Submit" });
//     };

//     deleteUser = (user_id) => this.setState({ userList: this.state.userList.filter(user => user.id !== user_id), });

//     editUser = (user_id) => {
//         const userData = this.state.userList.filter(user => (user.id === user_id))[0];
//         const { id, name, surname } = userData;
//         this.setState({
//             id,
//             name,
//             surname,
//             btnValue: "Update",
//         })
//     };

//     render() {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <RegistrationForm
//                         handleSubmit={this.handleSubmit}
//                         userState={this.userState}
//                         handleChange={this.handleChange}
//                         buttonValue={this.buttonValue} />
//                     <UserList
//                         userList={this.userList}
//                         deleteUser={this.deleteUser}
//                         editUser={this.editUser} />
//                 </div>
//             </div>
//         );
//     }
// }

const Main = () => {
    const [userList, setUserList] = useState([]);
    let [userState, setUserState] = useState({
        id: 0,
        name: '',
        surname: '',
    });
    const [buttonValue, setButtonValue] = useState('Submit');

    const handleChange = (event) => setUserState({ ...userState, [event.target.name]: event.target.value });

    const handleSubmit = (event) => {
        event.preventDefault();
        const list = (userState.id > 0) ?
            userList.filter(user => user.id !== userState.id) :
            userList;
        list.push({
            id: (userState.id > 0) ? userState.id : Date.now(),
            name: userState.name,
            surname: userState.surname,
        });
        list.sort((prev, next) => prev.id - next.id);
        setUserList(list);
        setUserState({ id: 0, name: '', surname: '' });
        setButtonValue('Submit');
    };

    const deleteUser = (user_id) => setUserList(userList.filter(user => user.id !== user_id));

    const editUser = (user_id) => {
        const userData = userList.filter(user => (user.id === user_id))[0];
        setUserState({ id: userData.id, name: userData.name, surname: userData.surname });
        setButtonValue('Update');
    };

    /**
     *  jsx version
     */
    // return (
    //     <div className="container">
    //         <div className="row">
    //             <RegistrationForm
    //                 handleSubmit={handleSubmit}
    //                 userState={userState}
    //                 handleChange={handleChange}
    //                 buttonValue={buttonValue} />
    //             <UserList
    //                 userList={userList}
    //                 deleteUser={deleteUser}
    //                 editUser={editUser} />
    //         </div>
    //     </div>
    // );

    /** 
     * version w/o jsx
     */
    return (
        div({ className: "container" },
            div({ className: "row" },
                RegistrationForm({ handleSubmit, userState, handleChange, buttonValue }),
                UserList({ userList, deleteUser, editUser, buttonValue })
            )
        )
    );
}

export default Main;
