import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" bg-green-600 text-white ">
      <div className="container flex align-middle justify-between p-4 mx-auto">
        <Link href={"/"}>
          <h1 className="font-bold text-lg">Jobbar</h1>
        </Link>

        <ul className="flex gap-2 align-middle">
          <li>
            <Link href={"/"} className={"text-sm"}>
              Find a job
            </Link>
          </li>
          <li>
            <Link href={"/messages"} className={"text-sm"}>
              Messages
            </Link>
          </li>
        </ul>
        <div className="">
          <Image
            src={"https://i.pravatar.cc/60?user=user_3"}
            height={60}
            width={60}
            alt="user profile"
            className="rounded-full h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
