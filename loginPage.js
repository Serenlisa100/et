renderLogOnHTML();
function renderLogOnHTML() {
  document.querySelector('.log-on-page').innerHTML = `
  <header class="container-fluid">
  <div class="top d-flex justify-content-between">
    <div>
      <span>Banking</span>
      <span class="stock-plan">Stock Plans</span>
    </div>
    <div>
      <i class="bi bi-question-circle"></i>
      <span>Contact us</span>
    </div>
  </div>
  <span class="js-bi-list">
    <i class="bi bi-list"></i>
  </span>
  <nav>
    <div class="img-con">
      <img src="img/eTrade-img.jpeg" alt="">
    </div>
    <div class="list-con">
      <ul class="d-flex list-unstyled pt-3">
        <li><a href="">Account Types</a></li>
        <li><a href="">Investment Choices</a></li>
        <li><a href="">New to Investing</a></li>
        <li><a href="">Trading</a></li>
        <li class="pricing"><a href="">Pricing and Rates</a></li>
        <li class="knowledge"><a href="">Knowledge</a></li>
        <li><i class="bi bi-three-dots"></i></li>
        <li><a href=""><i class="bi bi-search"></i></a></li>
      </ul>
    </div>
  </nav>
</header>
<div class="container">
  <div class="content">
    <h2 class="text-center">Log on</h2>
    <form action="">
      <div>
        <label for="id">User ID</label>
        <input type="text" class="input">
      </div>
      <div>
        <div class="d-flex justify-content-between">
          <label for="password">Password</label>
          <span id="togglePassword"> <i class="bi bi-eye-fill"></i> Show</span>
        </div>
        <input type="password" id="password" class="input">
      </div>
      <div class="d-lg-flex d-md-flex pe-4">
        <div class="check d-flex align-items-center">
          <input type="checkbox">
          <span class="ps-2 pt-1">Remember User ID</span>
        </div>
        <div class="check d-flex align-items-center ps-lg-5 ps-md-5">
          <input type="checkbox">
          <span class="px-2 pt-1">Use security code</span>
          <i class="bi bi-info-circle"></i>
        </div>
      </div>
      <div class="mt-3">
        <span>
          Go To:
        </span>
        <div class="mt-2 account-logon">
          <select name="wgtmsr" id="wgtmsr">
            <option value="Accounts">Accounts</option>
            <option value="Portfolios">Portfolios</option>
            <option value="Stock Trade">Stock Trade</option>
            <option value="Option Trade">Option Trade</option>
            <option value="Market">Market</option>
            <option value="Bank Account">Bank Account</option>
            <option value="Bill Pay">Bill Pay</option>
            <option value="At Work">At Work</option>
          </select>
          <button class="log-on-btn">
               Log on
          </button>
        </div>
        <div class="d-flex flex-column bottom">
          <span class="mb-3">Forget <a href="">User ID</a> or <a href="">Password?</a></span>
          <a href="" class="mb-4">Need more help logging on?</a>
          <div class="d-flex justify-content-between">
            <div>
              <a href="">Security center</a>
            </div>
            <span>
              <a href="">中文</a>
            </span>

          </div>
        </div>
      </div>
    </form>
  </div>

</div>`
}

document.querySelector('.js-bi-list').addEventListener('click',()=>{
  const container = document.querySelector('.js-container');
  container.classList.add('js-before-log-on');
});


document.querySelector('.js-x-lg').addEventListener('click',()=>{
  const container = document.querySelector('.js-container');
  container.classList.remove('js-before-log-on');
});

// Select the password input and the toggle button
const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');

// Add a click event listener to the toggle button
togglePasswordButton.addEventListener('click', function () {
// Check the current type of the password input
const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';

// Toggle the type attribute
passwordInput.setAttribute('type', type);

// Optionally change the button text (or icon) depending on the state
togglePasswordButton.innerHTML = type === 'password' 
? `<i class="bi bi-eye-fill"></i> Show` 
: `<i class="bi bi-eye-fill"></i> Hide`;
});