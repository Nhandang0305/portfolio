document.addEventListener('DOMContentLoaded', () => {
    const lantern = document.getElementById('movingLantern');
    let currentAngle = 0;
    let isHovered = false;
    let animationFrameId;

    // Hàm cập nhật chuyển động xoay liên tục
    function rotateLantern() {
        if (!isHovered) {
            currentAngle += 0.5; // Tốc độ xoay (tăng/giảm tùy ý)
            lantern.style.transform = `rotateY(${currentAngle}deg)`;
        }
        animationFrameId = requestAnimationFrame(rotateLantern);
    }

    // Sự kiện tương tác chuột
    lantern.addEventListener('mouseenter', () => {
        isHovered = true;
    });

    lantern.addEventListener('mouseleave', () => {
        isHovered = false;
    });

    // Kích hoạt vòng lặp xoay
    rotateLantern();
});