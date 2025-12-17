import React, { useEffect, useRef } from 'react';

const WaveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 300; // Fixed height for the banner area
    };
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      ctx.beginPath();
      ctx.lineWidth = 2;
      
      // Gradient stroke
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, '#8b5cf6'); // Gamma (Purple)
      gradient.addColorStop(0.2, '#6366f1'); // XRay
      gradient.addColorStop(0.4, '#06b6d4'); // UV/Blue
      gradient.addColorStop(0.5, '#22c55e'); // Green (Visible)
      gradient.addColorStop(0.7, '#ef4444'); // IR
      gradient.addColorStop(1, '#eab308'); // Radio

      ctx.strokeStyle = gradient;

      for (let x = 0; x < width; x++) {
        // Frequency changes across the width: High (left) -> Low (right)
        // Normalized x from 0 to 1
        const nx = x / width;
        
        // Frequency factor: High at x=0, Low at x=width
        // Using a power function to make the transition smoother
        const frequency = 0.2 * (1 - nx) + 0.005; 
        
        const amplitude = 50;
        
        // y = A * sin(kx - wt)
        // We integrate frequency over x to keep the wave continuous despite changing frequency
        // Ideally: phase = integral of frequency * dx
        // Simplified approach for visual effect:
        // Use a logarithmic mapping for x in the sine function
        
        const y = centerY + amplitude * Math.sin((x * frequency * 20) - time);
        
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      
      ctx.stroke();

      time += 0.15;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-[300px] opacity-30 pointer-events-none z-0"
    />
  );
};

export default WaveCanvas;