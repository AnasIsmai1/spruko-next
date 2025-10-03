export const DesktopTopHeader = () => {
  return (
    <header className="text-white bg-white/10 box-border caret-transparent hidden md:block">
      <div className="items-center box-border caret-transparent flex h-14 justify-between max-w-none w-full mx-auto md:max-w-[1140px]">
        <ul className="items-center box-border caret-transparent flex flex-wrap list-none min-h-0 min-w-0 pl-0 md:min-h-[auto] md:min-w-[auto]">
          <li className="box-border caret-transparent min-h-0 min-w-0 text-left md:min-h-[auto] md:min-w-[auto]">
            <a
              href="tel://+(123)678-8767"
              className="box-border caret-transparent flex bg-[position:0px_0px] px-4 py-2"
            >
              <i className="italic box-border caret-transparent block min-h-0 min-w-0 mr-2 md:min-h-[auto] md:min-w-[auto] before:accent-auto before:box-border before:caret-transparent before:text-white before:inline-block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-none before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons"></i>
              24x7 Technical Support
            </a>
          </li>
          <li className="box-border caret-transparent min-h-0 min-w-0 text-left md:min-h-[auto] md:min-w-[auto]">
            <a
              href="mailto://john@gmail.com"
              className="box-border caret-transparent block bg-[position:0px_0px] px-4 py-2"
            >
              <i className="italic box-border caret-transparent mr-2 before:accent-auto before:box-border before:caret-transparent before:text-white before:inline-block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-none before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons"></i>
              john@gmail.com
            </a>
          </li>
        </ul>
        <ul className="items-center box-border caret-transparent flex flex-wrap list-none min-h-0 min-w-0 pl-0 md:min-h-[auto] md:min-w-[auto]">
          <li className="box-border caret-transparent min-h-0 min-w-0 text-left md:min-h-[auto] md:min-w-[auto]">
            <a
              href="javascript://void(0);"
              className="box-border caret-transparent block bg-[position:0px_0px] px-4 py-2"
            >
              <i className="italic box-border caret-transparent mr-2 before:accent-auto before:box-border before:caret-transparent before:text-white before:inline-block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-none before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons"></i>
              Help
            </a>
          </li>
          <li className="box-border caret-transparent min-h-0 min-w-0 text-left md:min-h-[auto] md:min-w-[auto]">
            <a
              href="contact-us.html"
              className="box-border caret-transparent flex bg-[position:0px_0px] px-4 py-2"
            >
              <i className="italic box-border caret-transparent block min-h-0 min-w-0 mr-2 md:min-h-[auto] md:min-w-[auto] before:accent-auto before:box-border before:caret-transparent before:text-white before:inline-block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-none before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons"></i>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
