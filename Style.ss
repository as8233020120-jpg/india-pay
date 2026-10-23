* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background: linear-gradient(135deg, #1f0836 0%, #0d021a 100%);
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.container {
  width: 100%;
  max-width: 420px;
  text-align: center;
}

/* Branding Header */
.brand-header {
  margin-bottom: 25px;
}

.brand-title {
  font-size: 38px;
  font-weight: 800;
  color: #f39c12;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0px 4px 10px rgba(243, 156, 18, 0.4);
}

.brand-tagline {
  font-size: 15px;
  color: #e0d0f5;
  margin-top: 5px;
  font-weight: 500;
}

.brand-features {
  margin-top: 8px;
  font-size: 13px;
  color: #f1c40f;
  letter-spacing: 1px;
  font-weight: 600;
}

/* Auth Box */
.auth-box {
  background: rgba(35, 12, 60, 0.95);
  border: 1px solid rgba(243, 156, 18, 0.3);
  border-radius: 16px;
  padding: 25px 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

/* Tab Switcher */
.tab-buttons {
  display: flex;
  background: #140424;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 4px;
}

.tab-btn {
  flex: 1;
  padding: 10px;
  border: none;
  background: transparent;
  color: #a088c6;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn.active {
  background: #f39c12;
  color: #140424;
}

/* Forms */
.auth-form {
  display: none;
  text-align: left;
}

.auth-form.active-form {
  display: block;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  font-size: 13px;
  color: #f39c12;
  margin-bottom: 6px;
  font-weight: 500;
}

.input-group input {
  width: 100%;
  padding: 12px 14px;
  background: #120320;
  border: 1px solid #4a237a;
  border-radius: 8px;
  color: #ffffff;
  font-size: 14px;
  outline: none;
}

.input-group input:focus {
  border-color: #f39c12;
}

.submit-btn {
  width: 100%;
  padding: 13px;
  background: #f39c12;
  color: #140424;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;
}

.submit-btn:hover {
  background: #e67e22;
}

.message {
  margin-top: 15px;
  font-size: 13px;
  text-align: center;
}
