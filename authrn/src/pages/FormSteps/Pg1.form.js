import React, {useContext} from "react";
import FormContext from "../formcontext/form.contex";

export const Pg1 = () => {
const {
    username, 
    setUsername,
    cUsername,
    setCUsername
} = useContext(FormContext);

    return (
        <form>
            <div className="mb-3">
                <label>
                    Username
                </label>
                <input
                    type="email"
                    value={username}
                    onChange={(e)=>{
                        setUsername(e.target.value);
                    }}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
            </div>

            <div className="mb-3">
                <label className="form-label">
                    Repeat username
                </label>
                <input
                    value={cUsername}
                    onChange={(e)=>{
                        setCUsername(e.target.value);
                    }}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
            </div>
        </form>
    );
}