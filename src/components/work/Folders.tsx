
import Folder from './Folder';
import s from '../../style/work.module.css';

function Folders() {
  return (
    <>
    <h1 className='h2'>Former Exercises</h1>
    <div className={s.folders_grid}>
        <Folder folderName="Game (first semester)" workLink="https://julievictoria98.github.io/Guardian-of-the-wild/"/>
        <Folder folderName="Exam 2024" workLink="hej"/>
        <Folder folderName="Game (third semester)" workLink="https://julievictoria98.github.io/rockpaperscissors/"/>
    </div>
    </>
  );
}
export default Folders;