import ChartInfo from "@/app/component/ui/Chart";
import KPICard from "@/app/component/ui/KPI";
import {FaUser, FaArrowUp } from "react-icons/fa";
import {RiChatFollowUpFill} from "react-icons/ri";
import {Metadata} from "next";

export const metadata:Metadata = {
    title: "Dashboard | Influencer Panel"
}

export default function DahBoard() {
    return (
        <>
            <div className="my-4 pt-12">
                <ChartInfo/>
            </div>
            <div className="@container">
                <div className="grid grid-cols-3 @3xs:@max-3xl:grid-cols-1 gap-4 mx-auto mt-4">
                    <KPICard title="Toplam Influencer" icon={<FaUser/>} value={3} trend={"%4.7"} color="text-blue-600"/>
                    <KPICard title="Toplam Takipçi" value={102.400} icon={<RiChatFollowUpFill/>} trend={"%4.7"}
                             color="text-violet-600"
                    />
                    <KPICard title="Ortalama Etkileşim" value="%4.7" icon={<FaArrowUp/>} trend={"%4.7"}
                             color="text-pink-600"
                    />
                </div>
            </div>
        </>
    )
}