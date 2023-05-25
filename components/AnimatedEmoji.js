import Image from "next/image";
export default function AnimatedEmoji() {
  return (
    <div className="flex justify-between items-center px-4 py-8">
      <div className="animate-bounce">
        <Image
          src="/sad-emoji.png"
          alt="Sad Emoji"
          className="h-12 w-12"
          width="500"
          height="500"
        />
      </div>
      <div className="animate-bounce">
        <Image
          src="/happy-emoji.png"
          alt="Happy Emoji"
          className="h-12 w-12"
          width="500"
          height="500"
        />
      </div>
    </div>
  );
}
