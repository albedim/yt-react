import './index.css'

function FirstComponent(){
    return(
        <div className="screen">
            <div className="box">
                <div className="title">
                    <h1>Login</h1>
                </div>
                <div className="form">
                    <div>
                        <div><label htmlFor="email">Email</label></div>
                        <div><input placeholder="example@example.com" name="email" type="text" /></div>
                    </div>
                    <div>
                        <div><label htmlFor="password">Password</label></div>
                        <div><input placeholder="********" name="password" type="password" /></div>
                    </div>
                </div>
                <div className="button">
                    <button>Login</button>
                </div>
                <div className="fp">
                    <p>Forget password?</p>
                </div>
            </div>
        </div>
    )
}

export default FirstComponent;