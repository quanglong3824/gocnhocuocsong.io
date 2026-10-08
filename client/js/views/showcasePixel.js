/**
 * GÓC NHỎ CUỘC SỐNG (gocnhocuocsong.io)
 * Bộ sinh và vẽ Pixel Art thuần Canvas (Pixel 16x16 & 32x32)
 * Quy tắc: 100% HÌNH KHỐI ĐƯỢC CẤU TẠO TỪ PIXEL VUÔNG (KHÔNG DÙNG CTX.ARC HOẶC ĐƯỜNG CONG VECTOR)
 */

window.addEventListener('DOMContentLoaded', () => {
    khoiTaoAssetItems();
    khoiTaoMainShowcase();
});

// =============================================================================
// 1. VẼ CÁC MẪU ASSET ITEM 16x16 & 32x32 (100% PIXEL VUÔNG)
// =============================================================================
function khoiTaoAssetItems() {
    veCaPheSuaDa('canvasCaPhe');
    veMiTomTrung('canvasMiTom');
    veGheNhua('canvasGheNhua');
    veNonBaoHiem('canvasNonBH');
    veXeWaveAlpha('canvasXeWave');
    veNhanVatHocSinh('canvasNhanVat');
}

// 1.1. Ly Cà phê sữa đá (16x16)
function veCaPheSuaDa(canvasId) {
    const cvs = document.getElementById(canvasId);
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const C_VIEN = '#1e293b';
    const C_LY = '#e2e8f0';
    const C_SUA = '#fef08a';
    const C_CA_PHE = '#78350f';
    const C_DA = '#93c5fd';
    const C_ONG_HUT = '#ef4444';

    const p = [
        [0,0,0,0,0,0,0,6,6,0,0,0,0,0,0,0], // Ống hút đỏ
        [0,0,0,0,0,0,6,6,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,6,6,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0], // Miệng ly
        [0,0,1,4,4,4,4,4,4,4,4,1,0,0,0,0],
        [0,0,1,3,3,5,5,3,3,5,3,1,0,0,0,0], // Cafe & đá viên pixel vuông
        [0,0,1,3,5,5,3,3,5,5,3,1,0,0,0,0],
        [0,0,1,3,3,3,3,3,3,3,3,1,0,0,0,0],
        [0,0,0,1,3,3,3,3,3,3,1,0,0,0,0,0],
        [0,0,0,1,2,2,2,2,2,2,1,0,0,0,0,0], // Lớp sữa đặc
        [0,0,0,1,2,2,2,2,2,2,1,0,0,0,0,0],
        [0,0,0,1,2,2,2,2,2,2,1,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0], // Đáy ly
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];

    vePixelGrid(ctx, p, {
        1: C_VIEN, 2: C_SUA, 3: C_CA_PHE, 4: C_LY, 5: C_DA, 6: C_ONG_HUT
    }, 4);
}

// 1.2. Tô Mì tôm trứng Hảo Hảo (16x16)
function veMiTomTrung(canvasId) {
    const cvs = document.getElementById(canvasId);
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const C_VIEN = '#1e293b';
    const C_TO = '#f43f5e'; // Tô đỏ
    const C_MI = '#facc15';  // Sợi mì vàng
    const C_LONG_TRANG = '#ffffff';
    const C_LONG_DO = '#fb923c';
    const C_HANH = '#22c55e';

    const p = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,1,2,2,2,2,2,2,2,2,2,1,0,0,0],
        [0,1,2,3,6,3,4,4,3,6,3,2,2,1,0,0], // Mì, hành, trứng vuông pixel
        [0,1,3,3,3,4,5,5,4,3,3,3,2,1,0,0],
        [0,1,2,3,6,4,5,5,4,6,3,3,2,1,0,0],
        [0,1,2,3,3,3,4,4,3,3,3,2,2,1,0,0],
        [0,0,1,2,2,2,2,2,2,2,2,2,1,0,0,0], // Thân tô
        [0,0,1,2,2,2,2,2,2,2,2,2,1,0,0,0],
        [0,0,0,1,2,2,2,2,2,2,2,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0]
    ];

    vePixelGrid(ctx, p, {
        1: C_VIEN, 2: C_TO, 3: C_MI, 4: C_LONG_TRANG, 5: C_LONG_DO, 6: C_HANH
    }, 4);
}

// 1.3. Ghế nhựa xanh Song Long (16x16)
function veGheNhua(canvasId) {
    const cvs = document.getElementById(canvasId);
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const C_VIEN = '#1e293b';
    const C_XANH_DAM = '#0284c7';
    const C_XANH_SANG = '#38bdf8';

    const p = [
        [0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0], // Lưng tựa
        [0,0,0,0,1,3,2,2,3,1,0,0,0,0,0,0],
        [0,0,0,0,1,3,2,2,3,1,0,0,0,0,0,0],
        [0,0,0,0,1,3,3,3,3,1,0,0,0,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0], // Mặt ghế
        [0,1,3,3,3,3,3,3,3,3,3,3,1,0,0,0],
        [0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,1,2,1,0,0,0,0,0,0,1,2,1,0,0,0], // 4 chân ghế
        [0,1,3,1,0,0,0,0,0,0,1,3,1,0,0,0],
        [0,1,3,1,0,0,0,0,0,0,1,3,1,0,0,0],
        [0,1,2,1,0,0,0,0,0,0,1,2,1,0,0,0],
        [0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0]
    ];

    vePixelGrid(ctx, p, {
        1: C_VIEN, 2: C_XANH_DAM, 3: C_XANH_SANG
    }, 4);
}

// 1.4. Nón bảo hiểm nửa đầu (16x16)
function veNonBaoHiem(canvasId) {
    const cvs = document.getElementById(canvasId);
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const C_VIEN = '#1e293b';
    const C_DO_SANG = '#f43f5e';
    const C_DO_DAM = '#be123c';
    const C_QUAI = '#475569';
    const C_LUOI_TRAI = '#0f172a';

    const p = [
        [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,1,1,2,2,2,2,2,1,1,0,0,0,0],
        [0,0,1,2,2,2,2,3,3,3,2,2,1,0,0,0],
        [0,1,2,2,2,2,3,3,3,3,3,2,2,1,0,0],
        [0,1,2,2,2,3,3,3,3,3,3,3,2,1,0,0],
        [1,5,5,5,1,1,1,1,1,1,1,1,1,1,0,0], // Lưỡi trai vuông
        [0,0,0,0,1,4,0,0,0,4,1,0,0,0,0,0], // Quai cài pixel
        [0,0,0,0,0,1,4,0,4,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,4,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0]
    ];

    vePixelGrid(ctx, p, {
        1: C_VIEN, 2: C_DO_SANG, 3: C_DO_DAM, 4: C_QUAI, 5: C_LUOI_TRAI
    }, 4);
}

// 1.5. Xe máy Honda Wave Alpha (32x32 - 100% Pixel Vuông)
function veXeWaveAlpha(canvasId) {
    const cvs = document.getElementById(canvasId);
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const C_VIEN = '#1e293b';
    const C_DO = '#e11d48';
    const C_TRANG = '#f8fafc';
    const C_DEN = '#334155';
    const C_BAM_XE = '#94a3b8';
    const C_YEN = '#0f172a';

    ctx.fillStyle = '#f3efe6';
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    const s = 3; // Scale 3x cho 32x32

    // Bánh sau pixel vuông (Ma trận hình tròn ghép từ các khối pixel vuông)
    veBanhXePixelVuong(ctx, 4 * s, 18 * s, s);
    // Bánh trước pixel vuông
    veBanhXePixelVuong(ctx, 20 * s, 18 * s, s);

    // Yên xe
    ctx.fillStyle = C_YEN;
    ctx.fillRect(6 * s, 11 * s, 11 * s, 3 * s);

    // Khung sườn đỏ & bửng trắng
    ctx.fillStyle = C_DO;
    ctx.fillRect(11 * s, 14 * s, 8 * s, 4 * s);
    ctx.fillStyle = C_TRANG; // Bửng trước Wave
    ctx.fillRect(17 * s, 12 * s, 5 * s, 8 * s);

    // Ghi đông & Đèn pha vuông
    ctx.fillStyle = C_DEN;
    ctx.fillRect(20 * s, 8 * s, 4 * s, 4 * s);
    ctx.fillStyle = '#fef08a'; // Đèn vàng vuông
    ctx.fillRect(23 * s, 9 * s, 2 * s, 2 * s);

    // Ống pô bạc vuông
    ctx.fillStyle = C_BAM_XE;
    ctx.fillRect(5 * s, 20 * s, 12 * s, 2 * s);
}

// Bánh xe ghép 100% từ các khối pixel vuông (Bresenham Pixel Circle)
function veBanhXePixelVuong(ctx, startX, startY, s) {
    const C_DEN = '#1e293b';
    const C_BAM = '#94a3b8';

    const matrix = [
        [0,1,1,1,1,1,0],
        [1,2,2,2,2,2,1],
        [1,2,1,1,1,2,1],
        [1,2,1,2,1,2,1],
        [1,2,1,1,1,2,1],
        [1,2,2,2,2,2,1],
        [0,1,1,1,1,1,0]
    ];

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] === 1) {
                ctx.fillStyle = C_DEN;
                ctx.fillRect(startX + c * s, startY + r * s, s, s);
            } else if (matrix[r][c] === 2) {
                ctx.fillStyle = C_BAM;
                ctx.fillRect(startX + c * s, startY + r * s, s, s);
            }
        }
    }
}

// 1.6. Nhân vật Học sinh 32x32 (100% Pixel Vuông)
function veNhanVatHocSinh(canvasId) {
    const cvs = document.getElementById(canvasId);
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const s = 3;
    ctx.fillStyle = '#f3efe6';
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    // Tóc đen vuông
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(12 * s, 4 * s, 8 * s, 4 * s);
    ctx.fillRect(11 * s, 5 * s, 10 * s, 3 * s);

    // Mặt da sáng
    ctx.fillStyle = '#fed7aa';
    ctx.fillRect(12 * s, 7 * s, 8 * s, 6 * s);
    // Mắt pixel vuông
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(14 * s, 9 * s, 1 * s, 2 * s);
    ctx.fillRect(17 * s, 9 * s, 1 * s, 2 * s);

    // Khăn quàng đỏ học sinh
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(13 * s, 13 * s, 6 * s, 2 * s);
    ctx.fillRect(15 * s, 15 * s, 2 * s, 3 * s);

    // Áo trắng học sinh
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(11 * s, 14 * s, 10 * s, 8 * s);

    // Quần tây xanh đen
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(12 * s, 22 * s, 4 * s, 7 * s);
    ctx.fillRect(16 * s, 22 * s, 4 * s, 7 * s);

    // Giày bata
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(11 * s, 29 * s, 5 * s, 2 * s);
    ctx.fillRect(16 * s, 29 * s, 5 * s, 2 * s);
}

// =============================================================================
// 2. MÀN HÌNH CHÍNH SHOWCASE CANVAS (100% KHỐI PIXEL VUÔNG)
// =============================================================================
let frameCount = 0;
let viTriX = 50;
let huongDi = 1;

function khoiTaoMainShowcase() {
    const cvs = document.getElementById('manHinhShowcase');
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    function renderLoop() {
        frameCount++;
        ctx.clearRect(0, 0, cvs.width, cvs.height);

        // 1. Nền trời sáng vuông
        ctx.fillStyle = '#bae6fd';
        ctx.fillRect(0, 0, cvs.width, cvs.height);

        // 2. Dãy nhà phố & Biển hiệu quán net pixel
        ctx.fillStyle = '#fef08a'; // Tường vàng cổ
        ctx.fillRect(20, 40, 180, 180);
        ctx.fillStyle = '#f87171'; // Mái ngói đỏ vuông
        ctx.fillRect(15, 30, 190, 12);

        // Biển hiệu "QUÁN NÉT CỎ"
        ctx.fillStyle = '#dc2626';
        ctx.fillRect(35, 60, 150, 30);
        ctx.fillStyle = '#ffffff';
        ctx.font = '15px VT323, monospace';
        ctx.fillText('QUAN NET CO - 5K/1H', 50, 80);

        // Cột điện & Dây điện dạng bậc thang pixel (KHÔNG dùng curve mềm)
        ctx.fillStyle = '#475569';
        ctx.fillRect(240, 20, 8, 200);
        
        // Dây điện pixel bậc thang
        veDayDienPixel(ctx, 0, 40, 240, 35);
        veDayDienPixel(ctx, 248, 35, cvs.width, 45);

        // 3. Vỉa hè & Mặt đường
        ctx.fillStyle = '#cbd5e1'; // Vỉa hè
        ctx.fillRect(0, 210, cvs.width, 30);
        ctx.fillStyle = '#334155'; // Lòng đường
        ctx.fillRect(0, 240, cvs.width, 80);

        // Ghế nhựa xanh & Bàn trà đá trên vỉa hè
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(70, 205, 16, 16);
        ctx.fillRect(95, 205, 16, 16);
        ctx.fillStyle = '#e2e8f0'; // Bàn trà đá
        ctx.fillRect(85, 200, 12, 14);

        // 4. Nhân vật đi lại trên vỉa hè
        viTriX += 0.8 * huongDi;
        if (viTriX > 260) huongDi = -1;
        if (viTriX < 40) huongDi = 1;

        const bob = Math.floor(Math.sin(frameCount * 0.15) * 2); // Bước nhảy theo bậc pixel
        veNhanVatMiniVuong(ctx, Math.floor(viTriX), 185 + bob, huongDi);

        requestAnimationFrame(renderLoop);
    }

    renderLoop();
}

// Dây điện dạng bậc thang pixel vuông
function veDayDienPixel(ctx, x1, y1, x2, y2) {
    ctx.fillStyle = '#334155';
    const steps = 30;
    const dx = (x2 - x1) / steps;
    const dy = (y2 - y1) / steps;
    for (let i = 0; i < steps; i++) {
        const x = Math.floor(x1 + dx * i);
        const y = Math.floor(y1 + dy * i + Math.sin((i / steps) * Math.PI) * 12);
        ctx.fillRect(x, y, 2, 2);
    }
}

// Nhân vật mini 100% pixel vuông
function veNhanVatMiniVuong(ctx, x, y, dir) {
    ctx.save();
    ctx.translate(x, y);
    if (dir < 0) {
        ctx.scale(-1, 1);
    }
    // Đầu & Tóc vuông
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-6, -26, 12, 6);
    ctx.fillStyle = '#fed7aa';
    ctx.fillRect(-5, -20, 10, 8);
    // Mắt vuông
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(1, -17, 2, 2);
    // Áo trắng vuông
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(-6, -12, 12, 12);
    // Khăn quàng đỏ vuông
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(-2, -12, 4, 6);
    // Quần xanh vuông
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(-5, 0, 4, 10);
    ctx.fillRect(1, 0, 4, 10);
    ctx.restore();
}

// Helper: Vẽ mảng 2D pixel vuông
function vePixelGrid(ctx, grid, colorMap, scale) {
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            const val = grid[r][c];
            if (val !== 0 && colorMap[val]) {
                ctx.fillStyle = colorMap[val];
                ctx.fillRect(c * scale, r * scale, scale, scale);
            }
        }
    }
}
