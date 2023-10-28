import React from 'react';

function Login(props) {
    return (
      <div>
        <div className="login-page">
          <div className="login-content login-content-signin">
            <div>
              <h2>Log in</h2>
              <form className="wrapper-box" role="form">
                <div className="input-box">
                  <input type="text"
                    className="form-control form-control-email"
                    placeholder="아이디를 입력해주세요"
                    required />
                  <input type="password"
                    className="form-control form-control-password"
                    placeholder="비밀번호를 입력해주세요"
                    required />
                </div>
                <div className='find-join-group'>
                  <h2 className="outer-link pull-left"
                    onClick={() => {
                      props.setMode("FINDID");
                    }}>아이디 찾기</h2>
                  <h2 className="outer-link pull-left"
                    onClick={() => {
                      props.setMode("FINDPW");
                    }}
                  >비밀번호 찾기</h2>
                  <h2 className="outer-link pull-left"
                    onClick={() => {
                      props.setMode("SIGNIN");
                    }}
                  >회원가입</h2>
                </div>
                <button type="submit" className="btn btn-submit btn-default pull-right btn-login">Log in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Login;