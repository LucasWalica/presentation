import { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Characters for the rain (mix of katakana, letters, and numbers)
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"\'#&_(),.;:?!\\|{}<>[]@アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビプウゥクスツヌフムユュルグズヅブペエェケセテネヘメレヱゲゼデベポオォコソトノホモヨョロヲゴゾドボヴッン';
    const charArray = characters.split('');

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    // Initial drops position (Y coordinates)
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start at random positions above the screen
    }

    const draw = () => {
      // Semi-transparent black to create trailing effect
      ctx.fillStyle = 'rgba(15, 12, 41, 0.1)'; // Matches custom-background color
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#39ff14'; // custom-neonGreen
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Pick a random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Draw the character
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        // Randomize opacity/brightness for some characters to add depth
        if (Math.random() > 0.95) {
          ctx.fillStyle = '#ffffff'; // White flash for "active" characters
        } else {
          ctx.fillStyle = '#39ff14';
        }

        ctx.fillText(char, x, y);

        // Reset drop position if it goes off screen or randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment Y position
        drops[i] += 1;
      }
    };

    const intervalId = setInterval(draw, 50);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-20 z-0"
      style={{ filter: 'blur(0.5px)' }}
    />
  );
}
