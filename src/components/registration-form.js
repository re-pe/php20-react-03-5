import Tags from '../helpers/tags'
const { br, div, form, h1, input, label } = Tags;

function RegistrationForm(props) {
    const { handleSubmit, userState, handleChange, buttonValue } = props;

    /**
     *  w/ jsx
     */
    // return (
    //     <div className="col">
    //         <h1>Registration info</h1>
    //         <form onSubmit={handleSubmit}>
    //             <label className="form-label">
    //                 Name:<br />
    //                 <input
    //                     className="form-control"
    //                     type="text"
    //                     name="name"
    //                     value={userState.name}
    //                     placeholder="Enter name"
    //                     onChange={handleChange} />
    //             </label>
    //             <br />
    //             <label className="form-label">
    //                 Surname:<br />
    //                 <input
    //                     className="form-control"
    //                     type="text"
    //                     name="surname"
    //                     value={userState.surname}
    //                     placeholder="Enter surname"
    //                     onChange={handleChange} />
    //             </label>
    //             <br />
    //             <input
    //                     className="btn btn-primary"
    //                     type="submit"
    //                     value={buttonValue} />
    //         </form>
    //     </div>
    // );

    /**
     * w/o jsx
     */
    return div({ className: "col" },
        h1("Registration info"),
        form({ onSubmit: handleSubmit },
            label({ className: "form-label" },
                "Name:", br(),
                input({
                    className: "form-control",
                    type: "text",
                    name: "name",
                    value: userState.name,
                    placeholder: "Enter name",
                    onChange: handleChange
                })
            ),
            br(),
            label({ className: "form-label" },
                "Surname:", br(),
                input({
                    className: "form-control",
                    type: "text",
                    name: "surname",
                    value: userState.surname,
                    placeholder: "Enter surname",
                    onChange: handleChange
                })
            ),
            br(),
            input({
                className: "btn btn-primary",
                type: "submit",
                value: buttonValue
            })
        )
    );
}

export default RegistrationForm;