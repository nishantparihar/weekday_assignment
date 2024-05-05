import { useRecoilValue } from "recoil";
import CompanyCard from "./JobsBoxComponents/CompanyCard";
import {jdList} from "../state/atoms/atoms"

export default function JobsBox(){

    const jobList = useRecoilValue(jdList)

    return <div style={{marginTop: '50px', display: 'flex', gap: '30px', flexWrap: 'wrap'}}>
            {jobList ? jobList.map((jd)=> <CompanyCard jd={jd} key={jd.jdUid} />) : <></>}
    </div>
}