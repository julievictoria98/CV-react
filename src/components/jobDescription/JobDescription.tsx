import s from '../../style/jobDescription.module.css';
import { MdScreenshotMonitor } from "react-icons/md";
import { BiSolidComponent } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";



interface JobDescriptionProps 
    {
        jobName: string; 
        jobIconIndex: number

    }

    const iconsArray = [
    { icon: <MdScreenshotMonitor  style={{ color: "black"}} size={70}  />, alt: "Javascript Icon" },
    { icon: <IoLogoJavascript  style={{ color: "black" }} size={70}  />, alt: "Javascript Icon" },
    { icon: <BiSolidComponent  style={{ color: "black" }} size={70}  />, alt: "Component Icon" },
    { icon: <HiLightBulb  style={{ color: "black" }} size={70}  />, alt: "Component Icon" },

];

function JobDescription({jobName, jobIconIndex}: JobDescriptionProps) {
    const selectedIcon = iconsArray[jobIconIndex];
  return (
    <div className={s.job}>
     <h1 className={s.jobname}>{jobName}</h1>
    <span aria-label={selectedIcon.alt}>
        {selectedIcon.icon} 
    </span>
    </div>
  );
}
export default JobDescription;