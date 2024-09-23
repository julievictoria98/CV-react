
import s from '../../style/work.module.css';

interface FolderProps {
workName: string;
workLink: string;
}

function Folder({ workName, workLink }: FolderProps) {
  return (
    <a href={workLink}> 
    <div className={s.folder}>
      <h1>{workName}</h1>
    </div>
    </a>
  );
}
export default Folder;