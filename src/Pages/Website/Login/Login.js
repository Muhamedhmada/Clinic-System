import './Login.css'
function Login(){
  return(
    <div className="login-container container">
      <div className="login-content content">
        <div className="leftLogin"></div>
        <div className="rightLogin">
          <div className="header">
            <h2 className='h-after-effect'>login here</h2>
            <p>Didn't you account yet ? <a href="/#">Register Here</a></p>
          </div>
          <div className='inputs'>
            <div className="twoInputs">
              <input type="text" placeholder='First name' />
              <input type="email" placeholder='your email' />
            </div>
            <div className="twoInputs">
              <input type="password" placeholder='password' />
              <input type="password" placeholder='confirm password' />
            </div>
          </div>
          <button>login</button>
        </div>
      </div>
    </div>
  )
}
export default Login