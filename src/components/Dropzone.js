import React, { useCallback, useState, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = () =>{
  const [detectedImage, setDetectedImage] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const uploadImge = async()=>{
    const formdata = new FormData();
    formdata.append('file',selectedImages[0]);
    const options = {
      method: 'POST',
      body: formdata
    };
    const api = process.env.REACT_APP_API;
    var resp = await fetch(
      `${api}/image`, 
      options
    );
    resp = await resp.json();
    setDetectedImage(`${api}/${resp.filename}`);
    setSelectedImages([])
  }

    const baseStyle = {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      borderWidth: 2,
      borderRadius: 2,
      borderColor: '#eeeeee',
      borderStyle: 'dashed',
      backgroundColor: '#fafafa',
      color: '#bdbdbd',
      outline: 'none',
      transition: 'border .24s ease-in-out'
    };
    
    const focusedStyle = {
      borderColor: '#2196f3'
    };
    
    const acceptStyle = {
      borderColor: '#00e676'
    };
    
    const rejectStyle = {
      borderColor: '#ff1744'
    };

    const onDrop = useCallback(acceptedFiles => {
        setSelectedImages(acceptedFiles.map(file=>Object.assign(file,{
            preview: URL.createObjectURL(file)
        })))
      }, [])
      const {getRootProps,
         getInputProps, 
        isFocused,
        isDragAccept,
        isDragReject
      } = useDropzone({onDrop, accpet: 'image/*'});

      const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isFocused,
        isDragAccept,
        isDragReject
      ]);

      const selected_images = selectedImages.map(file=>(
        <div key={file.name}>
            <img src={file.preview} style={{width:"300px"}} alt=""></img>
        </div>
      ));
      return (
        <div className='flex'>
          <div>
          <div {...getRootProps({style})}>
            <input {...getInputProps()} />
                <p>Drop the files here ...</p>
          </div>
          {selected_images}
          <button className='hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4' onClick={uploadImge}>
            Detectar
            </button>
          </div>
          <div className='p-5'>
          <img src={detectedImage} style={{width: "500px"}}/>
          </div>
        </div>
      )
}

export default Dropzone;