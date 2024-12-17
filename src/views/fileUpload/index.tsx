import { useRef } from "react";

// const chunkSize = 5 * 1024 * 1024; // 切片刀大小
const FileUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input ref={inputRef} type="file" />
    </div>
  );
};

export default FileUpload;
