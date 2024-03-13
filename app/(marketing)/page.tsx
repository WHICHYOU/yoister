import Link from "next/link";
import localFont from "next/font/local";
import { Noto_Sans, Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-transparent text-black rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          요이스터
        </div>
        <h1 className="text-3xl border-solid md:text-6xl text-center text-purple-800 mb-6">
          모든 디지털 활동을 관리하는
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-black-600 to-white-600 text-black px-4 p-3 rounded-md pb-4 w-fit">
          단 하나의 랜딩페이지
        </div>
      </div>

      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      ></div>
      <Button className="h-10 w-25 bg-blue-700" size="sm" asChild>
        <Link href="/sign-up">지금 가입하기</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
