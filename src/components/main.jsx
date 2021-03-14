// import { Component } from 'react';
import { useState } from 'react';
import UserList from './user-list';
import RegistrationForm from './registration-form';
import Tags from '../helpers/tags';
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
//             userState: {
//                 id: 0,
//                 name: '',
//                 surname: '',
//             },
//             // e slint-disable-next-line react/no-unused-state
//             buttonValue: 'Submit',
//         };
//     }

//     handleChange = (event) => {
//         const { userState } = this.state;
//         this.setState({ userState: { ...userState, [event.target.name]: event.target.value } });
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const { userList, userState } = this.state;
//         const { id, name, surname } = userState;
//         const newUserList = (userState.id > 0)
//             ? userList.filter((user) => user.id !== id)
//             : userList;
//         const newUserState = {
//             id: (id > 0) ? id : Date.now(),
//             name,
//             surname,
//         };
//         newUserList.push(newUserState);
//         newUserList.sort((prev, next) => prev.id - next.id);
//         const emptyUserState = { id: 0, name: '', surname: '' };
//         this.setState({
//             userList: newUserList,
//             userState: emptyUserState,
//             buttonValue: 'Submit',
//         });
//     }

//     deleteUser = (userId) => {
//         const { userList } = this.state;
//         return this.setState({
//             userList: userList.filter((user) => user.id !== userId),
//         });
//     }

//     editUser = (userId) => {
//         const { userList } = this.state;
//         const userState = userList.filter((user) => (user.id === userId))[0];
//         this.setState({
//             userState,
//             buttonValue: 'Update',
//         });
//     }

//     render() {
//         /* eslint-disable react/destructuring-assignment */
//         return (
//             <div className="container">
//                 <div className="row">
//                     <RegistrationForm
//                         handleSubmit={this.handleSubmit}
//                         userState={this.state.userState}
//                         handleChange={this.handleChange}
//                         buttonValue={this.state.buttonValue}
//                     />
//                     <UserList
//                         userList={this.state.userList}
//                         deleteUser={this.deleteUser}
//                         editUser={this.editUser}
//                         buttonValue={this.state.buttonValue}
//                     />
//                 </div>
//             </div>
//         );
//         /* eslint-enable react/destructuring-assignment */
//     }
// }

const Main = () => {
    const [userList, setUserList] = useState([]);
    const [userState, setUserState] = useState({
        id: 0,
        name: '',
        surname: '',
    });
    const [buttonValue, setButtonValue] = useState('Submit');

    const handleChange = (event) => setUserState({
        ...userState,
        [event.target.name]: event.target.value,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const { id, name, surname } = userState;
        const newUserList = (id > 0)
            ? userList.filter((user) => user.id !== id)
            : userList;
        newUserList.push({
            id: (id > 0) ? id : Date.now(),
            name,
            surname,
        });
        newUserList.sort((prev, next) => prev.id - next.id);
        setUserList(newUserList);
        setUserState({ id: 0, name: '', surname: '' });
        setButtonValue('Submit');
    };

    const deleteUser = (userId) => setUserList(userList.filter((user) => user.id !== userId));

    const editUser = (userId) => {
        const userData = userList.filter((user) => (user.id === userId))[0];
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
    //                 buttonValue={buttonValue}
    //             />
    //             <UserList
    //                 userList={userList}
    //                 deleteUser={deleteUser}
    //                 editUser={editUser}
    //                 buttonValue={buttonValue}
    //             />
    //         </div>
    //     </div>
    // );

    /**
     * version w/o jsx
     */
    return (
        div(
            { className: 'container' },
            div(
                { className: 'row' },
                RegistrationForm({
                    handleSubmit, userState, handleChange, buttonValue,
                }),
                UserList({
                    userList, deleteUser, editUser, buttonValue,
                }),
            ),
        )
    );
};

export default Main;
