import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h2>Hey, Yar...,</h2>
        <h3>Let's Learn Image Component in NextJS</h3>
        <h5>Navigate to "/fresh-image" for image components</h5>

        <Image
          sizes={300}
          height={300}
          width={300}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXnJAbhL9nlViJJTfngOT2DCfU0HGibfJn3A&s"
          }
          alt="Main Image"
        />
        <Image
          sizes={300}
          height={300}
          width={300}
          src={
            "https://images.pexels.com/photos/17847701/pexels-photo-17847701.jpeg?_gl=1*1i63ul3*_ga*MTYzNjQ0NjI4OC4xNzY5MjY5NTcw*_ga_8JE65Q40S6*czE3NzUwNjkyMDkkbzckZzEkdDE3NzUwNjk2ODIkajYwJGwwJGgw"
          }
          alt="Main Image"
          // preload={true}
          loading="lazy"
          oneve
        />
      </main>
    </div>
  );
}
