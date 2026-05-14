import React, { useEffect, useRef } from "react";

type Star = {
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
};

const StarfieldHero: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];

        const STAR_COUNT = 40;
        const CONNECTION_DIST = 2;
        const FALL_SPEED = 0.5;

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (!parent) return;

            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
            initStars();
        };

        const initStars = () => {
            stars = Array.from({ length: STAR_COUNT }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5 + 2.3,
                speed: Math.random() * 2.5 + FALL_SPEED,
                opacity: Math.random() * 0.5 + 0.5,
            }));
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star, i) => {
                star.y += star.speed;

                if (star.y > canvas.height) {
                    star.y = -5;
                    star.x = Math.random() * canvas.width;
                }

                ctx.fillStyle = `rgba(204, 247, 32, ${star.opacity})`;
                ctx.fillRect(star.x, star.y, star.size, star.size);

                for (let j = i + 1; j < stars.length; j++) {
                    const other = stars[j];
                    const dx = star.x - other.x;
                    const dy = star.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DIST) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(204, 247, 32, ${
                            (1 - dist / CONNECTION_DIST) * 0.3
                        })`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(star.x, star.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0"
            style={{ pointerEvents: "none" }}
        />
    );
};

export default StarfieldHero;