import "./Form.css"

export default function Form(){
    return(
        <div className="container">
            <h1 className="formTitle">Form</h1>
            <form id="form">
                <div className="userInfo">
                    <div className="inputBox">
                        <label for="name">Full Name</label>
                        <br/>
                        <input type="text" id="name" name="fullName" placeholder="Enter Full Name" required/>
                    </div>
                    <div className="inputBox">
                        <label for="email">Email</label>
                        <br/>
                        <input type="text" id="email" name="email"placeholder="Enter Email"required/>
                    </div>
                    <div className="inputBox">
                        <label for="Country">Country</label>    
                        <br/>
                        <select id="country" name="country" class="form-control">
                            <option value="Default">Select a country</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="America">America</option>
                            <option value="UK">UK</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Japan">Japan</option>
                    </select>
                    </div>
                    <div className="termsCondition">
                        <div class="terms1"></div>
                            <input type="checkbox" name="terms" id="termscons"/>
                            <label id="terms2"for="terms&condition">Are you agree with terms and conditions</label>
                    </div>
                </div>
                <div className="Button">
                    <button type="button" className="btn btn-dark">Submit</button>
                </div>
            </form>
        </div>
    )
}