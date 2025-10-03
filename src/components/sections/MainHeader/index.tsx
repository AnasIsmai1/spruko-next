import { DesktopNavbar } from "@/components/sections/MainHeader/components/DesktopNavbar";

export const MainHeader = () => {
  return (
    <header className="fixed bg-blue-700 shadow-[rgba(0,0,0,0.1)_0px_0px_16px_0px] box-border caret-transparent z-[100] top-0 inset-x-0 md:static md:shadow-none md:z-auto md:top-auto md:inset-x-auto">
      <div className="box-border caret-transparent">
        <DesktopNavbar />
      </div>
    </header>
  );
};
