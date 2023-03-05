import { useRecoilValue } from 'recoil';
import { mapState } from "../recoil/states"


type DataCardProps = {
    title: string,
    value: string
}


function DataCard({ title, value }: DataCardProps) {
    return (
        <div className="h-[100%] flex flex-col items-center justify-center lg:items-start lg:flex-1 lg:p-1">
            <span className="font-bold text-[.7rem] text-gray-darker mb-1 lg:mb-2">{title}</span>
            <h2 className="font-bold text-gray-dark text-lg lg:text-2xl lg:break-words">{value}</h2>
        </div>
    );
}


function setValue(value: string) {
    if (!value) {
        return ("")
    } else if (value == ",") {
        return ""
    } else {
        return String(value)
    }
}


export default function DataComponent() {
    const data = useRecoilValue(mapState)
    return (
        <div className="rounded-lg bg-white w-[90%] h-[300px] p-4 mt-6 flex flex-col items-center justify-evenly lg:flex-row lg:justify-evenly gap-4 lg:w-[80%] lg:h-[150px]">
            <DataCard title="IP ADDRESS" value={setValue(data.ip)} />
            <div className="bg-gray-darker h-1/2 w-[.5px] hidden lg:block" />
            <DataCard title="LOCATION" value={setValue([data.region, data.city].join(","))} />
            <div className="bg-gray-darker h-1/2 w-[.5px] hidden lg:block" />
            <DataCard title="TIMEZONE" value={setValue(data.timezone)} />
            <div className="bg-gray-darker h-1/2 w-[.5px] hidden lg:block" />
            <DataCard title="ISP" value={setValue(data.isp)} />
        </div>
    );
}
