"use client"
const Loading = () => {
  const text = "Loading...";
  return (
    <>
      <div className="w-10 h-10 relative mx-auto my-24">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-full"
            style={{
              transform: `rotate(${i * 30}deg)`,
            }}
          >
            <div
              className="w-[15%] h-[15%] bg-gray-800 rounded-full mx-auto animate-fadeCircle"
              style={{
                animationDelay: `${-1.2 + (i * 0.1)}s`,
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-1">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="text-pf-text dark:text-pf-text font-semibold text-2xl animate-loading-5"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    </>
  )

}
export default Loading