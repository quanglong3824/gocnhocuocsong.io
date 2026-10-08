/**
 * GÓC NHỎ CUỘC SỐNG (gocnhocuocsong.io)
 * Bộ sinh và vẽ Pixel Art thuần Canvas (Pixel 16x16 & 32x32)
 * Phong cách & Layout chuẩn Benchmark Việt Mộng Ký (Tháp Rùa, Cầu Thê Húc, Phố cổ VN)
 * 100% Khối vuông - 100% Font VT323
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
    const C_TO = '#f43f5e';
    const C_MI = '#facc15';
    const C_LONG_TRANG = '#ffffff';
    const C_LONG_DO = '#fb923c';
    const C_HANH = '#22c55e';

    const p = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,1,2,2,2,2,2,2,2,2,2,1,0,0,0],
        [0,1,2,3,6,3,4,4,3,6,3,2,2,1,0,0],
        [0,1,3,3,3,4,5,5,4,3,3,3,2,1,0,0],
        [0,1,2,3,6,4,5,5,4,6,3,3,2,1,0,0],
        [0,1,2,3,3,3,4,4,3,3,3,2,2,1,0,0],
        [0,0,1,2,2,2,2,2,2,2,2,2,1,0,0,0],
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
        [0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,1,3,2,2,3,1,0,0,0,0,0,0],
        [0,0,0,0,1,3,2,2,3,1,0,0,0,0,0,0],
        [0,0,0,0,1,3,3,3,3,1,0,0,0,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,1,3,3,3,3,3,3,3,3,3,3,1,0,0,0],
        [0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,1,2,1,0,0,0,0,0,0,1,2,1,0,0,0],
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
        [1,5,5,5,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,1,4,0,0,0,4,1,0,0,0,0,0],
        [0,0,0,0,0,1,4,0,4,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,4,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0]
    ];

    vePixelGrid(ctx, p, {
        1: C_VIEN, 2: C_DO_SANG, 3: C_DO_DAM, 4: C_QUAI, 5: C_LUOI_TRAI
    }, 4);
}

// 1.5. Xe máy Honda Wave Alpha (32x32)
function veXeWaveAlpha(canvasId) {
    const cvs = document.getElementById(canvasId);
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const C_DO = '#e11d48';
    const C_TRANG = '#f8fafc';
    const C_DEN = '#334155';
    const C_BAM_XE = '#94a3b8';
    const C_YEN = '#0f172a';

    ctx.fillStyle = '#f3efe6';
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    const s = 3;
    veBanhXePixelVuong(ctx, 4 * s, 18 * s, s);
    veBanhXePixelVuong(ctx, 20 * s, 18 * s, s);

    ctx.fillStyle = C_YEN;
    ctx.fillRect(6 * s, 11 * s, 11 * s, 3 * s);

    ctx.fillStyle = C_DO;
    ctx.fillRect(11 * s, 14 * s, 8 * s, 4 * s);
    ctx.fillStyle = C_TRANG;
    ctx.fillRect(17 * s, 12 * s, 5 * s, 8 * s);

    ctx.fillStyle = C_DEN;
    ctx.fillRect(20 * s, 8 * s, 4 * s, 4 * s);
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(23 * s, 9 * s, 2 * s, 2 * s);

    ctx.fillStyle = C_BAM_XE;
    ctx.fillRect(5 * s, 20 * s, 12 * s, 2 * s);
}

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

// 1.6. Nhân vật Học sinh 32x32
function veNhanVatHocSinh(canvasId) {
    const cvs = document.getElementById(canvasId);
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const s = 3;
    ctx.fillStyle = '#f3efe6';
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(12 * s, 4 * s, 8 * s, 4 * s);
    ctx.fillRect(11 * s, 5 * s, 10 * s, 3 * s);

    ctx.fillStyle = '#fed7aa';
    ctx.fillRect(12 * s, 7 * s, 8 * s, 6 * s);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(14 * s, 9 * s, 1 * s, 2 * s);
    ctx.fillRect(17 * s, 9 * s, 1 * s, 2 * s);

    ctx.fillStyle = '#ef4444';
    ctx.fillRect(13 * s, 13 * s, 6 * s, 2 * s);
    ctx.fillRect(15 * s, 15 * s, 2 * s, 3 * s);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(11 * s, 14 * s, 10 * s, 8 * s);

    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(12 * s, 22 * s, 4 * s, 7 * s);
    ctx.fillRect(16 * s, 22 * s, 4 * s, 7 * s);

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(11 * s, 29 * s, 5 * s, 2 * s);
    ctx.fillRect(16 * s, 29 * s, 5 * s, 2 * s);
}

// =============================================================================
// 2. TIỂU CẢNH SHOWCASE CANVAS (HỒ GƯƠM, THÁP RÙA & CẦU THÊ HÚC PIXEL 32x32)
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

        // 1. Mặt đường đá vỉa hè phố cổ (bên trái)
        ctx.fillStyle = '#e2e8f0';
        ctx.fillRect(0, 0, 130, cvs.height);
        ctx.fillStyle = '#cbd5e1';
        for (let y = 0; y < cvs.height; y += 16) {
            ctx.fillRect(0, y, 130, 1);
        }

        // 2. Mặt nước Hồ Gươm xanh biếc (bên phải)
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(130, 0, cvs.width - 130, cvs.height);

        // Gợn sóng nước pixel vuông
        ctx.fillStyle = '#7dd3fc';
        for (let i = 0; i < 8; i++) {
            const wx = 140 + ((i * 35 + frameCount * 0.4) % 200);
            const wy = 20 + (i * 32) % 240;
            ctx.fillRect(Math.floor(wx), Math.floor(wy), 14, 3);
        }

        // Bờ kè đá ngăn cách
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(124, 0, 8, cvs.height);

        // 3. Cầu Thê Húc đỏ tươi nối bờ
        ctx.fillStyle = '#dc2626';
        ctx.fillRect(124, 80, 120, 18);
        ctx.fillStyle = '#b91c1c';
        ctx.fillRect(124, 94, 120, 4);
        for (let p = 130; p < 240; p += 18) {
            ctx.fillRect(p, 70, 4, 14);
        }
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(124, 70, 120, 4);

        // 4. Tiểu cảnh Tháp Rùa mini giữa hồ
        ctx.fillStyle = '#22c55e';
        ctx.fillRect(250, 140, 90, 70); // Đảo cỏ
        ctx.fillStyle = '#cbd5e1';
        ctx.fillRect(270, 120, 50, 40); // Tầng 1
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(288, 136, 14, 24); // Cửa vòm
        ctx.fillStyle = '#e2e8f0';
        ctx.fillRect(278, 96, 34, 24);  // Tầng 2
        ctx.fillStyle = '#475569';
        ctx.fillRect(286, 84, 18, 12);  // Mái tháp

        // 5. Nhà phố cổ bên trái vỉa hè
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(10, 20, 100, 120);
        ctx.fillStyle = '#dc2626';
        ctx.fillRect(8, 12, 104, 10);
        // Biển hiệu "SHOWROOM XE WAVE"
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(16, 40, 88, 20);
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px VT323, monospace';
        ctx.textAlign = 'center';
        ctx.fillText('SHOWROOM XE', 60, 54);

        // 6. Hoa sen trên hồ
        ctx.fillStyle = '#15803d';
        ctx.fillRect(160, 180, 16, 8);
        ctx.fillStyle = '#f43f5e';
        ctx.fillRect(164, 174, 8, 8);

        // 7. Nhân vật học sinh đi lại trên vỉa hè
        viTriX += 0.7 * huongDi;
        if (viTriX > 90) huongDi = -1;
        if (viTriX < 20) huongDi = 1;

        const bob = Math.floor(Math.sin(frameCount * 0.15) * 2);
        veNhanVatShowcaseMini(ctx, Math.floor(viTriX), 220 + bob, huongDi);

        requestAnimationFrame(renderLoop);
    }

    renderLoop();
}

function veNhanVatShowcaseMini(ctx, x, y, dir) {
    ctx.save();
    ctx.translate(x, y);
    if (dir < 0) ctx.scale(-1, 1);

    // Tên trên đầu
    ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
    ctx.fillRect(-24, -38, 48, 12);
    ctx.fillStyle = '#fef08a';
    ctx.font = '10px VT323, monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Học Sinh Lớp 5', 0, -29);

    // Đầu & Tóc
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-6, -24, 12, 6);
    ctx.fillStyle = '#fed7aa';
    ctx.fillRect(-5, -18, 10, 8);
    // Mắt
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(1, -15, 2, 2);
    // Áo trắng
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(-6, -10, 12, 10);
    // Khăn quàng đỏ
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(-2, -10, 4, 6);
    // Quần xanh
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(-5, 0, 4, 8);
    ctx.fillRect(1, 0, 4, 8);
    ctx.restore();
}

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
