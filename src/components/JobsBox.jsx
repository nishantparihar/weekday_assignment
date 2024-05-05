import CompanyCard from "./JobsBoxComponents/CompanyCard";



export default function JobsBox(){
    return <div style={{marginTop: '50px', display: 'flex', gap: '30px', flexWrap: 'wrap'}}>
           <CompanyCard />
           <CompanyCard />
           <CompanyCard />
           <CompanyCard />
           <CompanyCard />
           <CompanyCard />
    </div>
}