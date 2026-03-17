export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <div className="absolute w-[600px] h-[600px] bg-blue-500 opacity-30 blur-3xl rounded-full animate-blob top-[-200px] left-[-200px]"></div>

      <div className="absolute w-[600px] h-[600px] bg-cyan-500 opacity-30 blur-3xl rounded-full animate-blob animation-delay-2000 top-[200px] right-[-200px]"></div>

      <div className="absolute w-[600px] h-[600px] bg-indigo-500 opacity-30 blur-3xl rounded-full animate-blob animation-delay-4000 bottom-[-200px] left-[200px]"></div>

    </div>
  );
}