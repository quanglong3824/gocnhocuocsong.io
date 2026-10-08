/**
 * GÓC NHỎ CUỘC SỐNG (gocnhocuocsong.io)
 * Template View: Màn hình Chơi Game Chính (Game HUD + Viewport Canvas 2D)
 * Tuyệt đối không dùng Icon/Emoji
 */

const gameView = {
    render: () => {
        return `
        <div class="khung-game-chinh">
            <!-- THANH TRẠNG THÁI HUD (CHỮ THUẦN TÚY) -->
            <section class="thanh-hud-game">
                <div class="chi-so-item">
                    <span class="chi-so-nhan">THOI GIAN IN-GAME</span>
                    <span class="chi-so-gia-tri" id="hudThoiGian">08:00 - SANG [NGAY 1]</span>
                </div>
                <div class="chi-so-item">
                    <span class="chi-so-nhan">THE LUC / HP</span>
                    <span class="chi-so-gia-tri" id="hudTheLuc" style="color: var(--mau-xanh-la);">100 / 100</span>
                </div>
                <div class="chi-so-item">
                    <span class="chi-so-nhan">STRESS / AP LUC</span>
                    <span class="chi-so-gia-tri" id="hudStress" style="color: var(--mau-cam-retro);">10% [ON DINH]</span>
                </div>
                <div class="chi-so-item">
                    <span class="chi-so-nhan">TIEN VI / NET WORTH</span>
                    <span class="chi-so-gia-tri" id="hudTien" style="color: var(--mau-vang-nang);">50.000 VND</span>
                </div>
                <div class="chi-so-item">
                    <span class="chi-so-nhan">CHE DO OVERTIME</span>
                    <span class="chi-so-gia-tri" id="hudCheDoOT">TAT [5H NGU]</span>
                </div>
            </section>

            <!-- KHUNG MÀN HÌNH GAMEPLAY CANVAS 2D -->
            <section class="khung-viewport-canvas">
                <canvas id="manHinhGamePlay" width="640" height="360"></canvas>
            </section>

            <!-- THANH ĐIỀU KHIỂN & ĐIỆN THOẠI ẢO -->
            <section style="display: flex; gap: 12px; justify-content: space-between; align-items: center; background: #ffffff; border: 2px solid var(--mau-vien-pixel); padding: 12px; box-shadow: var(--bong-pixel);">
                <div style="display: flex; gap: 8px;">
                    <button class="nut-pixel" onclick="alert('Mo tui do: Mi tom x3, Non bao hiem, Vo sach cap 1')">TUI DO</button>
                    <button class="nut-pixel vang" onclick="alert('Mo LifePhone: Zola (2 tin nhan moi tu Me), V-Bank (50k)')">LIFEPHONE</button>
                    <button class="nut-pixel cam" onclick="alert('Bat/Tat che do Sieu nhan OT')">CHE DO OT</button>
                </div>
                <div>
                    <a href="#gioiThieu" class="nut-pixel">VE TRANG GIOI THIEU</a>
                </div>
            </section>
        </div>
        `;
    },

    sauKhiRender: () => {
        khoiTaoCanvasGameplay();
    }
};

function khoiTaoCanvasGameplay() {
    const cvs = document.getElementById('manHinhGamePlay');
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    // Render cảnh phòng trọ / xóm nhỏ tạm thời trong khi chờ game controller
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    ctx.fillStyle = '#f59e0b';
    ctx.font = '20px VT323, monospace';
    ctx.textAlign = 'center';
    ctx.fillText('[ MAN HINH GAMEPLAY CANVAS 2D - PIXEL PERFECT ]', cvs.width / 2, cvs.height / 2 - 20);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px VT323, monospace';
    ctx.fillText('SU DUNG PHIM MUI TEN HOAC WASD DE DI CHUYEN NHAN VAT', cvs.width / 2, cvs.height / 2 + 10);
    ctx.fillText('DO PHAN GIAI NATIVE: 640 x 360 (TI LE 16:9)', cvs.width / 2, cvs.height / 2 + 35);
}
