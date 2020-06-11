import {
  loginUser
} from "./data.js"
import {
  handleFirebaseError
} from "../../utils/errorHandler.js"

export const login = () => {
  const container = document.createElement('div');

  const template = `
  <div class="align">
    <form class="form" id="login-form">
      <h2>Login</h2>
      <fieldset class="textarea">
        <input  id='email' type='text' type="email" placeholder="E-mail">
      </fieldset>
      <fieldset class="textarea">
        <input id='password' type='password' placeholder="Password">
      </fieldset>
      <button class="button-login" id='entrar' type="submit">Login</button>
      <div class="alert hidden">Login ou senha incorretos!</div>
      <div>Não tem uma Conta?
        <a href="#register">Cadastre-se!</a>
      </div>
      <div>
        <p> Ou entre com:</p>
      </div>
      <div class='container-buttons-login'>
        <button class="button"><i class="fab fa-2x  fa-google"></i></button><br>
        <button class="button"><i class="fab fa-2x fa-facebook"></i></button>
      </div>
    </form>
</div>
      `;
  container.innerHTML += template;

  const loginForm = container.querySelector("#login-form")
  const errorAlert = container.querySelector(".alert")


  const handleLogin = (e) => {
    e.preventDefault()
    const email = loginForm["email"].value
    const password = loginForm["password"].value
    loginUser(email, password).then(() => {
      window.location.hash = "#feed"
    }).catch((error) => {
      handleFirebaseError(error, errorAlert)
    })
  }

  loginForm.addEventListener("submit", handleLogin)

  return container;
};