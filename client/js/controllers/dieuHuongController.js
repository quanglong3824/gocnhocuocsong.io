/**
 * GÓC NHỎ CUỘC SỐNG (gocnhocuocsong.io)
 * Controller: Điều hướng Route (Client-side MVC Router)
 * Cơ chế Auto-Pick: Tự động chọn template Giới thiệu dự án nếu chưa chọn layout chơi game
 */

class DieuHuongController {
    constructor() {
        this.khungUngDung = document.getElementById('ungDung');
        this.danhSachRoutes = {
            '#gioiThieu': gioiThieuView,
            '#game': gameView
        };
        this.routeMacDinh = '#gioiThieu';
    }

    khoiTao() {
        window.addEventListener('hashchange', () => this.xuLyDoiRoute());
        window.addEventListener('DOMContentLoaded', () => this.xuLyDoiRoute());
    }

    xuLyDoiRoute() {
        let hashHienTai = window.location.hash || this.routeMacDinh;

        // Auto pick: Nếu route không hợp lệ, tự động gán về template giới thiệu
        if (!this.danhSachRoutes[hashHienTai]) {
            hashHienTai = this.routeMacDinh;
            window.location.hash = this.routeMacDinh;
        }

        const viewDuocChon = this.danhSachRoutes[hashHienTai];
        if (viewDuocChon && this.khungUngDung) {
            // Render HTML của View vào điểm cắm ứng dụng
            this.khungUngDung.innerHTML = viewDuocChon.render();

            // Kích hoạt các callback logic đồ họa / sự kiện sau khi render DOM
            if (typeof viewDuocChon.sauKhiRender === 'function') {
                viewDuocChon.sauKhiRender();
            }

            // Scroll về đầu trang mượt mà
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}

// Khởi chạy singleton Router khi nạp trang
const dieuHuongController = new DieuHuongController();
dieuHuongController.khoiTao();
