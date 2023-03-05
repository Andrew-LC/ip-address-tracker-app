import SearchBar from "./components/searchbar"
import Datacomponent from "./components/datacomponent"
import Map from "./components/map"

function Overlay() {
    return (
        <div className="w-full flex flex-col gap-4 lg:gap-8 items-center p-4 absolute top-4 z-30 lg:top-4">
            <h1 className="font-bold text-white text-3xl">IP Address Tracker</h1>
            <SearchBar />
            <Datacomponent />
        </div>
    );
}

function App() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="bg-[#556ad0] max-h-[330px] flex-1 bg-mobile-bg lg:bg-desktop-bg w-full bg-cover bg-no-repeat lg:flex-none lg:h-[280px]" />
            <Overlay />
            <div className="flex-1 map w-full bg-red-100 z-0 relative">
                <Map />
            </div>
        </div>
    )
}

export default App
