import HomeComponent from "@/components/homeComponent";

export default function Home() {
  return (
    <div className="">
      <header className="p-4 space-y-5 flex justify-center min-h-[250px] bg-green-600 text-white py-8">
        <div className="container flex justify-center">
          <div className="max-w-[750px] text-center space-y-4">
            <h1 className="font-bold text-[3rem] leading-[2.9rem]">
              Find your next Tech job now
            </h1>
            <p>
              Unlock a world of tech possibilities with our cutting-edge job
              search platform. Discover roles tailored to your skills - from
              coding wizards to UI gurus. Elevate your career and embrace the
              future of work. Explore our dynamic listings and embark on your
              next tech adventure today.
            </p>
          </div>
        </div>
      </header>
      <HomeComponent />
    </div>
  );
}
