/**
 * GÓC NHỎ CUỘC SỐNG (gocnhocuocsong.io)
 * Template View: Màn hình Chơi Game Chuẩn (Benchmark Mẫu Việt Mộng Ký / Đời Thực VN)
 * Layout: Full-viewport Pixel Canvas 2D + HUD Hộp Trạng Thái Góc Trái/Phải + Thanh Phím Bấm Đáy Màn Hình
 * 100% Font VT323 - 100% Item Pixel Vuông - Không Icon
 */

const gameView = {
    render: () => {
        return `
        <div class="khung-game-chuan">
            <!-- KHUNG VIEWPORT GAME CHÍNH -->
            <div class="viewport-game-container">
                <canvas id="manHinhGamePlay" width="960" height="540"></canvas>

                <!-- 1. HỘP TRẠNG THÁI GÓC TRÊN BÊN TRÁI (TOP-LEFT HUD) -->
                <div class="hud-goc-trai">
                    <div class="hud-dong-gio">
                        <span class="hud-nhan-nho">GIỜ CHUNG:</span>
                        <span class="hud-gia-tri-gio" id="hudGioChung">06:52 [SÁNG]</span>
                    </div>
                    <div class="hud-dong-tien">
                        <span class="hud-gia-tri-tien" id="hudTienVi">14.400đ</span>
                        <span class="hud-ghi-chu-luu">[ĐÃ LƯU CLOUD]</span>
                    </div>
                    <div class="hud-dong-phu">
                        <span>THỂ LỰC: 100/100 HP</span>
                        <span>STRESS: 15%</span>
                    </div>
                    <div class="hud-dong-phu" style="color: var(--mau-cam-retro);">
                        <span>CẤP 1 - TIỂU HỌC [LỚP 5A]</span>
                    </div>
                </div>

                <!-- 2. HỘP TRỢ GIÚP GÓC TRÊN BÊN PHẢI (TOP-RIGHT HUD) -->
                <div class="hud-goc-phai">
                    <button class="nut-hud-vuong" onclick="gioiThieuView.moModalGDD('mod1')">TÀI LIỆU [GDD]</button>
                    <button class="nut-hud-vuong" onclick="gioiThieuView.moModalQuyTac()">LUẬT CHƠI [T]</button>
                    <a href="#gioiThieu" class="nut-hud-vuong vang">THOÁT [ESC]</a>
                </div>

                <!-- 3. THANH HƯỚNG DẪN ĐIỀU KHIỂN DƯỚI ĐÁY MÀN HÌNH (BOTTOM CONTROLS BAR) -->
                <div class="hud-thanh-day">
                    <div class="hud-phim-tat-list">
                        <span>CLICK / WASD: DI CHUYỂN</span>
                        <span class="ngan-cach">|</span>
                        <span>E: TƯƠNG TÁC NPC</span>
                        <span class="ngan-cach">|</span>
                        <span>B: TÚI ĐỒ / BA LÔ</span>
                        <span class="ngan-cach">|</span>
                        <span>P: LIFEPHONE</span>
                        <span class="ngan-cach">|</span>
                        <span>SPACE: CÂU CÁ / ĐÁNH LỘN</span>
                    </div>
                    <div class="hud-nut-hanh-dong-nhanh">
                        <button class="nut-action-space" onclick="alert('Thực hiện hành động: Câu cá / Nhặt đồ / Tương tác')">HÀNH ĐỘNG [SPACE]</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    },

    sauKhiRender: () => {
        khoiTaoCanvasGameplayVietNam();
    }
};

// =============================================================================
// RENDER MÀN HÌNH GAMEPLAY PHỐ CỔ & THÁP RÙA HỒ GƯƠM CHUẨN PIXEL 32x32
// =============================================================================
function khoiTaoCanvasGameplayVietNam() {
    const cvs = document.getElementById('manHinhGamePlay');
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    let frame = 0;
    let nvX = 220;
    let nvY = 240;
    let targetX = 220;
    let targetY = 240;
    let huong = 1;

    // Lắng nghe click chuột để di chuyển nhân vật
    cvs.onmousedown = (e) => {
        const rect = cvs.getBoundingClientRect();
        const scaleX = cvs.width / rect.width;
        const scaleY = cvs.height / rect.height;
        targetX = (e.clientX - rect.left) * scaleX;
        targetY = (e.clientY - rect.top) * scaleY;
        // Giới hạn vùng đi trên bờ kè đá
        if (targetX > 320 && targetY > 160 && targetY < 420) {
            targetX = 320; // Không nhảy xuống nước
        }
    };

    function gameLoop() {
        frame++;
        ctx.clearRect(0, 0, cvs.width, cvs.height);

        // 1. NỀN GẠCH LÁT ĐƯỜNG PHỐ CỔ (Bên trái)
        ctx.fillStyle = '#e2e8f0';
        ctx.fillRect(0, 0, cvs.width, cvs.height);
        
        // Vẽ lưới gạch lát đá vuông vức
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 1;
        for (let x = 0; x < cvs.width; x += 32) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, cvs.height);
            ctx.stroke();
        }
        for (let y = 0; y < cvs.height; y += 16) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(cvs.width, y);
            ctx.stroke();
        }

        // 2. MẶT NƯỚC HỒ GƯƠM XANH NGỌC (Bên phải & Giữa)
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(340, 100, 620, 440);
        
        // Gợn sóng nước pixel vuông
        ctx.fillStyle = '#7dd3fc';
        for (let i = 0; i < 15; i++) {
            const wx = 360 + ((i * 47 + frame * 0.5) % 560);
            const wy = 120 + (i * 22) % 380;
            ctx.fillRect(Math.floor(wx), Math.floor(wy), 18, 4);
        }

        // Bông hoa sen & Lá sen trên mặt hồ
        veHoaSenPixel(ctx, 420, 260);
        veHoaSenPixel(ctx, 480, 420);
        veHoaSenPixel(ctx, 860, 360);
        veHoaSenPixel(ctx, 380, 140);

        // 3. BỜ KÈ ĐÁ VUÔNG VỨC QUANH HỒ
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(320, 100, 20, 440);
        ctx.fillStyle = '#64748b';
        for (let y = 100; y < 540; y += 20) {
            ctx.fillRect(320, y, 20, 3);
        }

        // 4. THÁP RÙA TRUNG TÂM HỒ HOÀN KIẾM
        veThapRuaPixel(ctx, 640, 300);

        // 5. CẦU THÊ HÚC MÀU ĐỎ TƯƠI NỐI QUA ĐẢO NGỌC SƠN
        veCauTheHucPixel(ctx, 320, 150, 280, 80);

        // 6. NHÀ PHỐ CỔ VIỆT NAM & SHOWROOM XE (Bên trái)
        veNhaPhoCo(ctx, 20, 180);

        // 7. CÂY PHƯỢNG VĨ & CÂY XANH ĐÔ THỊ
        veCayPhuongVi(ctx, 40, 40);

        // 8. ĐÈN ĐƯỜNG & GHẾ ĐÁ CÔNG VIÊN
        veGheDa(ctx, 240, 60);

        // 9. CÁC NPC ĐỨNG TRÊN PHỐ (Có tên trên đầu)
        veNpcPixel(ctx, 260, 120, 'Nguyễn Quỳnh Như', '#f43f5e');
        veNpcPixel(ctx, 160, 440, 'Chủ Trọ Gác Lửng', '#eab308');

        // 10. NHÂN VẬT NGƯỜI CHƠI (PLAYER DI CHUYỂN)
        const dx = targetX - nvX;
        const dy = targetY - nvY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 2) {
            nvX += (dx / dist) * 2;
            nvY += (dy / dist) * 2;
            huong = dx >= 0 ? 1 : -1;
        }

        const nhay = dist > 2 ? Math.floor(Math.sin(frame * 0.25) * 3) : 0;
        vePlayerChibi(ctx, Math.floor(nvX), Math.floor(nvY) + nhay, huong, 'Bạn (Học Sinh Lớp 5)');

        requestAnimationFrame(gameLoop);
    }

    gameLoop();
}

// =============================================================================
// CÁC HÀM VẼ TIỂU CẢNH VIỆT NAM 100% PIXEL VUÔNG
// =============================================================================

// Tháp Rùa Hồ Gươm 100% khối pixel vuông
function veThapRuaPixel(ctx, cx, cy) {
    // Đảo cỏ xanh vuông quanh Tháp Rùa
    ctx.fillStyle = '#22c55e';
    ctx.fillRect(cx - 90, cy - 30, 180, 140);
    ctx.fillStyle = '#15803d';
    ctx.fillRect(cx - 96, cy - 24, 192, 128);
    ctx.fillStyle = '#4ade80';
    ctx.fillRect(cx - 80, cy - 20, 160, 120);

    // Bờ kè đá quanh đảo Tháp Rùa
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(cx - 94, cy + 90, 188, 16);
    ctx.fillRect(cx - 94, cy - 30, 188, 16);

    // Tầng 1 Tháp Rùa (Đá xám rêu phong)
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(cx - 50, cy, 100, 60);
    ctx.fillStyle = '#64748b';
    ctx.fillRect(cx - 54, cy + 56, 108, 6);
    // Cửa vòm cuốn pixel vuông tầng 1
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(cx - 36, cy + 16, 20, 40);
    ctx.fillRect(cx + 16, cy + 16, 20, 40);

    // Tầng 2 Tháp Rùa
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(cx - 36, cy - 40, 72, 40);
    ctx.fillStyle = '#64748b';
    ctx.fillRect(cx - 40, cy - 4, 80, 6);
    // Cửa vòm tầng 2
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(cx - 10, cy - 28, 20, 24);

    // Mái chóp đỉnh Tháp Rùa
    ctx.fillStyle = '#475569';
    ctx.fillRect(cx - 20, cy - 60, 40, 20);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(cx - 24, cy - 42, 48, 4);
    ctx.fillRect(cx - 4, cy - 70, 8, 10);
}

// Cầu Thê Húc màu đỏ tươi nối bờ
function veCauTheHucPixel(ctx, x, y, w, h) {
    // Trụ cầu đá chìm dưới nước
    ctx.fillStyle = '#475569';
    ctx.fillRect(x + 50, y + 40, 16, 40);
    ctx.fillRect(x + 140, y + 40, 16, 40);
    ctx.fillRect(x + 220, y + 40, 16, 40);

    // Mặt cầu uốn cong hình bậc thang pixel đỏ tươi
    ctx.fillStyle = '#dc2626';
    ctx.fillRect(x, y + 20, w, 24);
    ctx.fillStyle = '#b91c1c';
    ctx.fillRect(x, y + 38, w, 6);

    // Lan can tay vịn cầu Thê Húc đỏ rực
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(x, y + 4, w, 6);
    for (let p = x; p < x + w; p += 24) {
        ctx.fillStyle = '#b91c1c';
        ctx.fillRect(p, y + 4, 6, 20);
    }
}

// Nhà phố cổ Hà Nội / Sài Gòn tường vàng mái ngói
function veNhaPhoCo(ctx, x, y) {
    // Tường vàng cổ kính
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(x, y, 160, 180);
    ctx.fillStyle = '#facc15';
    ctx.fillRect(x, y, 160, 8);

    // Mái ngói đỏ xếp lớp
    ctx.fillStyle = '#ea580c';
    ctx.fillRect(x - 8, y - 24, 176, 24);
    ctx.fillStyle = '#9a3412';
    ctx.fillRect(x - 12, y - 4, 184, 6);

    // Ban công tầng 2
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(x + 16, y + 60, 128, 4);
    for (let b = x + 20; b < x + 140; b += 16) {
        ctx.fillRect(b, y + 40, 4, 20);
    }
    ctx.fillRect(x + 16, y + 36, 128, 4);

    // Biển hiệu "SHOWROOM XE & CỬA HÀNG"
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(x + 10, y + 74, 140, 28);
    ctx.fillStyle = '#ffffff';
    ctx.font = '16px VT323, monospace';
    ctx.textAlign = 'center';
    ctx.fillText('SHOWROOM XE WAVE', x + 80, y + 94);

    // Cửa kính tầng 1
    ctx.fillStyle = '#334155';
    ctx.fillRect(x + 16, y + 106, 128, 70);
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(x + 24, y + 114, 112, 54);
}

// Hoa sen trên hồ
function veHoaSenPixel(ctx, x, y) {
    // Lá sen xanh
    ctx.fillStyle = '#15803d';
    ctx.fillRect(x - 14, y - 4, 28, 12);
    ctx.fillStyle = '#22c55e';
    ctx.fillRect(x - 10, y - 6, 20, 14);
    // Bông hoa sen hồng
    ctx.fillStyle = '#f43f5e';
    ctx.fillRect(x - 4, y - 10, 8, 8);
    ctx.fillStyle = '#fb7185';
    ctx.fillRect(x - 2, y - 12, 4, 4);
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(x - 1, y - 7, 2, 2);
}

// Cây Phượng vĩ hoa đỏ
function veCayPhuongVi(ctx, x, y) {
    // Thân cây nâu
    ctx.fillStyle = '#78350f';
    ctx.fillRect(x + 24, y + 60, 16, 60);
    // Tán lá xanh & Hoa đỏ rực
    ctx.fillStyle = '#15803d';
    ctx.fillRect(x, y, 70, 70);
    ctx.fillStyle = '#dc2626'; // Hoa phượng đỏ
    ctx.fillRect(x + 10, y + 10, 14, 14);
    ctx.fillRect(x + 40, y + 20, 16, 16);
    ctx.fillRect(x + 20, y + 40, 18, 14);
}

// Ghế đá công viên
function veGheDa(ctx, x, y) {
    ctx.fillStyle = '#475569';
    ctx.fillRect(x, y + 20, 8, 16);
    ctx.fillRect(x + 48, y + 20, 8, 16);
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(x - 4, y + 14, 64, 8); // Mặt ngồi
    ctx.fillRect(x - 4, y, 64, 10);      // Tựa lưng
}

// NPC với Tên hiển thị trên đầu
function veNpcPixel(ctx, x, y, ten, mauAo) {
    // Tên NPC trên đầu
    ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
    ctx.fillRect(x - 50, y - 48, 100, 18);
    ctx.fillStyle = '#fef08a';
    ctx.font = '14px VT323, monospace';
    ctx.textAlign = 'center';
    ctx.fillText(ten, x, y - 35);

    // Đầu & Tóc
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(x - 8, y - 30, 16, 8);
    ctx.fillStyle = '#fed7aa';
    ctx.fillRect(x - 6, y - 22, 12, 10);
    // Mắt
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(x + 1, y - 18, 2, 2);
    // Áo
    ctx.fillStyle = mauAo;
    ctx.fillRect(x - 8, y - 12, 16, 16);
    // Quần
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(x - 6, y + 4, 5, 12);
    ctx.fillRect(x + 1, y + 4, 5, 12);
}

// Nhân vật Người chơi Chibi (Player)
function vePlayerChibi(ctx, x, y, dir, ten) {
    // Tên người chơi
    ctx.fillStyle = '#ff6b4a';
    ctx.fillRect(x - 56, y - 52, 112, 18);
    ctx.fillStyle = '#ffffff';
    ctx.font = '14px VT323, monospace';
    ctx.textAlign = 'center';
    ctx.fillText(ten, x, y - 39);

    ctx.save();
    ctx.translate(x, y);
    if (dir < 0) {
        ctx.scale(-1, 1);
    }
    // Tóc
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-10, -32, 20, 10);
    // Mặt
    ctx.fillStyle = '#fed7aa';
    ctx.fillRect(-8, -22, 16, 12);
    // Mắt
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(2, -18, 3, 3);
    // Khăn quàng đỏ
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(-3, -10, 6, 8);
    // Áo trắng học sinh
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(-10, -10, 20, 16);
    // Quần xanh
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(-8, 6, 6, 14);
    ctx.fillRect(2, 6, 6, 14);
    ctx.restore();
}
