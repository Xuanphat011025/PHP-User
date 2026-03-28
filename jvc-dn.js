// File: jvc-dn.js

document.addEventListener('DOMContentLoaded', function () {
    // Tìm các nút bấm trên giao diện
    const btnLogin = document.getElementById('btn-login');
    const btnLogout = document.getElementById('btn-logout');

    // Nếu trang hiện tại có chứa Header này thì mới chạy code
    if (btnLogin && btnLogout) {

        // Kiểm tra xem trình duyệt đã lưu trạng thái đăng nhập chưa
        let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

        if (isLoggedIn) {
            // NẾU ĐÃ ĐĂNG NHẬP:
            btnLogout.classList.remove('hidden'); // Hiện nút đăng xuất
            btnLogin.href = "thongtinkh.html";      // Đổi link sang trang Sổ địa chỉ
            btnLogin.title = "Quản lý tài khoản";
        } else {
            // NẾU CHƯA ĐĂNG NHẬP:
            btnLogout.classList.add('hidden');    // Ẩn nút đăng xuất
            btnLogin.href = "dangnhap.html";      // Giữ link là trang Đăng nhập
            btnLogin.title = "Tài khoản";
        }

        // Bắt sự kiện khi bấm vào nút Đăng xuất
        btnLogout.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Bạn đã đăng xuất thành công!');

            // Xóa trạng thái đăng nhập
            localStorage.setItem('isLoggedIn', 'false');

            // Nếu đang ở trang thongtin.html mà đăng xuất thì đá văng về trang chủ
            if (window.location.pathname.includes('thongtinkh.html')) {
                window.location.href = 'main.html'; // Đang xem thông tin cá nhân mà đăng xuất thì đá về trang chủ
            } else {
                window.location.reload(); // Còn ở các trang mua sắm khác thì chỉ cần tải lại trang để nó ẩn nút đăng xuất đi
            }
        });
    }
});
// Xử lý sự kiện bấm nút Thêm vào giỏ
document.addEventListener('DOMContentLoaded', function() {
    // 1. Tìm TẤT CẢ các nút có class btn-icon-add trên trang
    const btnsAddCart = document.querySelectorAll('.btn-icon-add');
    // 2. Tìm cái khung thông báo
    const toastCart = document.getElementById('toast-cart');

    // Nếu có nút thêm giỏ hàng thì mới chạy code
    if (btnsAddCart.length > 0 && toastCart) {
        
        // 3. Gắn sự kiện Click cho từng nút
        btnsAddCart.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault(); // Ngăn trang bị giật tung lên đầu
                
                // Hiện thông báo lên bằng cách thêm class show-toast
                toastCart.classList.add('show-toast');

                // Tự động ẩn đi sau 2.5 giây
                setTimeout(function() {
                    toastCart.classList.remove('show-toast');
                }, 2500); 
            });
        });
    }
});