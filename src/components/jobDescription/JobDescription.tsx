import s from '../../style/jobDescription.module.css';
import { MdScreenshotMonitor } from "react-icons/md";
import { SiAstro } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";





interface JobDescriptionProps 
    {
        jobName: string; 
        jobIconIndex: number

    }

    const iconsArray = [
    { icon: <MdScreenshotMonitor  style={{ color: "black"}} size={70}  />, alt: "Javascript Icon" },
    { icon: <IoLogoJavascript  style={{ color: "black" }} size={70}  />, alt: "Javascript Icon" },
    { icon: <FaReact  style={{ color: "black" }} size={60}  />, alt: "React Icon" },
    { icon: <SiAstro  style={{ color: "black" }} size={60}  />, alt: "Astro Icon" },
    { icon: <HiLightBulb  style={{ color: "black" }} size={70}  />, alt: "Lightbulb Icon" },
    { icon: <RiTailwindCssFill  style={{ color: "black" }} size={70}  />, alt: "Tailwind Icon" },

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