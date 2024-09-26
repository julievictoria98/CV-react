
import s from '../../style/work.module.css';

interface FolderProps {
folderName: string;
workLink: string;
}

function Folder({ folderName, workLink }: FolderProps) {
  return (
  <a href={workLink}> 
    <div className={s.folder}>
      <h1 className={s.folder_name}>{folderName}</h1>
    </div>
  </a>
  );
}
export default Folder;