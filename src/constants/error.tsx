import { useState, useEffect } from "react";

function TorchlightCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [on, setOn] = useState(false);

  function toggleLight() {
    setOn((prev) => !prev);
    console.log(on);
  }

  return (
    <>
      {/* Torchlight overlay */}
      <div
        className={`${
          on ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full pointer-events-none z-9999 animate-flicker 
            `}
        style={{
          background: `radial-gradient(circle 600px at ${position.x}px ${position.y}px, transparent 10%, rgba(0, 0, 0, 0.98) 80%)`,
        }}
      />

      <i
        onClick={toggleLight}
        style={{
          filter: on
            ? "drop-shadow(0 0 8px rgba(255, 215, 0, 0.8)) drop-shadow(0 0 15px rgba(255, 215, 0, 0.4))"
            : "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
          transition: "filter 0.3s ease, color 0.3s ease",
          fontSize: "1.5rem",
        }}
        className={`z-10001 absolute top-[1.2em] right-[2em] fa-${
          on ? "solid" : "regular"
        } fa-lightbulb ${!on ? "text-[#fff7]" : "text-[var(--color-primary)]"}`}
      ></i>

      {/* Bulb dot */}
      <div
        className=" fixed w-[10px] h-[10px] bg-[rgba(255,255,200,0.8)] rounded-full pointer-events-none z-[10000]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 20px 5px [var(--color-primary)]",
        }}
      />
    </>
  );
}

function Error() {
  return (
    <section>
      <TorchlightCursor />
      <div className="cont flex text-center flex-col justify-center items-center h-[calc(100vh-10em)]">
        <h2 className="text-[5em] uppercase">
          Sorry this Page is not available <br /> (At the moment)
        </h2>
        <p>
          <a href="/" className="text-secondary text-[2em]">
            Back to Home
          </a>
        </p>
      </div>
    </section>
  );
}

export default Error;
