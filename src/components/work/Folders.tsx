
import Folder from './Folder';
import s from '../../style/work.module.css';

function Folders() {
  return (
    <>
    <h1 className='h2'>Former Work</h1>
    <div className={s.folders_grid}>
        <Folder folderName="Exam Project 2024" workLink="https://sophiakhaled.netlify.app/"/>
        <Folder folderName="Project - CPH Light Festival" workLink="https://main--clf11.netlify.app/"/>
        <Folder folderName="Game (First Semester)" workLink="https://julievictoria98.github.io/Guardian-of-the-wild/"/>
    </div>
    </>
  );
}
export default Folders;