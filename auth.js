
function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || !currentUser.isLoggedIn) {
        window.location.href = 'login.html';
    }
}

// Kiểm tra xem người dùng đã đăng ký chưa khi truy cập login
function checkRegisteredBeforeLogin() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.length === 0) {
        alert('Vui lòng đăng ký tài khoản trước!');
        window.location.href  = 'register.html';
    }
}

// Hàm đăng xuất code
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href  =  'login.html';
}
