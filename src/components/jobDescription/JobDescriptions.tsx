import JobDescription from "./JobDescription";
import s from '../../style/jobDescription.module.css';

function JobDescriptions(){

    return (
        <div className={`${s.job_container} full`}>
            <h1 className="h2">Potential Tasks</h1>
            <div className={s.job_flex}>
            <JobDescription jobName="Development of Responsive Websites" jobIconIndex={0} />
            <JobDescription jobName=" JavaScript-programmering" jobIconIndex={1}  />
            <JobDescription jobName="UI/UX Design Implementation" jobIconIndex={4}  />
            <JobDescription jobName="Component-Based Development in React" jobIconIndex={2}  />
            <JobDescription jobName="Component-Based Development in Astro" jobIconIndex={3}  />
            <JobDescription jobName="Tailwind CSS for styling" jobIconIndex={5}  />
            </div>
        </div>
    );


}
export default JobDescriptions;