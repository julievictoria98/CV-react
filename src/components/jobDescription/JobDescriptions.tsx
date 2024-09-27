import JobDescription from "./JobDescription";
import s from '../../style/jobDescription.module.css';

function JobDescriptions(){

    return (
        <div className={`${s.job_container} full`}>
            <h1 className="h2">Opgaver</h1>
            <div className={s.job_flex}>
            <JobDescription jobName="Udvikling af responsive websider" jobIconIndex={0} />
            <JobDescription jobName=" JavaScript-programmering" jobIconIndex={1}  />
            <JobDescription jobName="UI/UX Design Implementering" jobIconIndex={3}  />
            <JobDescription jobName="Komponentbaseret udvikling" jobIconIndex={2}  />
            <JobDescription jobName="Tailwind CSS til styling" jobIconIndex={3}  />
            <JobDescription jobName="UI/UX Design Implementering" jobIconIndex={3}  />


            </div>
        </div>
    );


}
export default JobDescriptions;