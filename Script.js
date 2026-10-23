// Supabase Configuration
const SUPABASE_URL = "https://vrsvqlitruooezawires.supabase.co/rest/v1/"; // यहाँ अपनी Project URL डालें
const SUPABASE_ANON_KEY = "sb_publishable_RID2VKRjuwTH5S1D7fOp0g_hqyuDwuI"; // यहाँ अपनी Anon / Publishable Key डालें

// Initialize Supabase Client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Switch Tabs between Login and Signup
function switchTab(tab) {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const loginTabBtn = document.getElementById('loginTabBtn');
  const signupTabBtn = document.getElementById('signupTabBtn');
  const authMessage = document.getElementById('authMessage');

  authMessage.textContent = '';

  if (tab === 'login') {
    loginForm.classList.add('active-form');
    signupForm.classList.remove('active-form');
    loginTabBtn.classList.add('active');
    signupTabBtn.classList.remove('active');
  } else {
    signupForm.classList.add('active-form');
    loginForm.classList.remove('active-form');
    signupTabBtn.classList.add('active');
    loginTabBtn.classList.remove('active');
  }
}

// Handle Signup Registration
async function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const phone = document.getElementById('signupPhone').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;
  const authMessage = document.getElementById('authMessage');

  if (password !== confirmPassword) {
    authMessage.style.color = '#ff6b6b';
    authMessage.textContent = 'Password and Confirm Password do not match!';
    return;
  }

  authMessage.style.color = '#f39c12';
  authMessage.textContent = 'Creating account...';

  // Sign up via Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        full_name: name,
        phone_number: phone
      }
    }
  });

  if (error) {
    authMessage.style.color = '#ff6b6b';
    authMessage.textContent = error.message;
  } else {
    authMessage.style.color = '#2ecc71';
    authMessage.textContent = 'Registration successful! You can now login.';
    setTimeout(() => switchTab('login'), 1500);
  }
}

// Handle Login
async function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const authMessage = document.getElementById('authMessage');

  authMessage.style.color = '#f39c12';
  authMessage.textContent = 'Logging in...';

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    authMessage.style.color = '#ff6b6b';
    authMessage.textContent = error.message;
  } else {
    authMessage.style.color = '#2ecc71';
    authMessage.textContent = 'Login successful!';
  }
}
