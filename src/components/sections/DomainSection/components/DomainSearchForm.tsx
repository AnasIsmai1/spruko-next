export const DomainSearchForm = () => {
    return (
        <form className="box-border caret-transparent mb-6">
            <div className="relative items-center box-border caret-transparent flex">
                <input
                    type="search"
                    placeholder="Find your ideal domain name..."
                    className="text-sm bg-white box-border block leading-[31.5px] min-h-[58px] -outline-offset-2 text-start w-full border border-gray-200 pl-5 pr-[60px] py-2 rounded-[5px] border-solid"
                />
                <button
                    type="button"
                    className="absolute text-white font-medium bg-transparent bg-[linear-gradient(to_right,rgb(20,87,230)_0%,rgb(38,143,230)_100%)] caret-transparent block align-middle px-[19.2px] py-[11.04px] rounded-[4.8px] right-[6.4px] hover:bg-blue-700/80"
                >
                    Search
                </button>
            </div>
        </form>
    );
};
