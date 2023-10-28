import React from 'react';

function Email(props) {
    return (
      <div>
                      <form action="/verify-email" method="POST">
                <div class="mb-3">
                  <label class="form-label" for="email">Email</label>
                  <input
                    class="form-control"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                  <input type="submit" value="인증 하기" />
                </div>
              </form>

              <form
                action="/register"
                method="POST"
                class="validated-form"
                novalidate
              >
                <div class="mb-3">
                  <label class="form-label" for="username">Username</label>
                  <input
                    class="form-control"
                    type="text"
                    id="username"
                    name="username"
                    autofocus
                    required
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label" for="password">Password</label>
                  <input
                    class="form-control"
                    type="password"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                <button class="btn btn-success btn-block">Register</button>
              </form>

      </div>
    );
  }

export default Email;