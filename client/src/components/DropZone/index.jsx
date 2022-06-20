import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  DropSection,
  Image,
  UploadImage,
  DropContainer,
  Text,
  UploadButton,
} from './styles';
import { Container, Box, Typography } from '@mui/material';
import { useUpdateAvatarMutation } from '../../features/users/usersSlice';
import { setUser } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function DropZone() {
  const [photo, setPhoto] = useState('');
  const [error, setError] = useState('');
  const [updateAvatar, { isSuccess, data }] = useUpdateAvatarMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setPhoto(e.target.result);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);


  const {
    getRootProps,
    getInputProps,
    // isDragActive,
    // acceptedFiles,
    // fileRejections,
  } = useDropzone({
    onDrop,
    accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] },
  });

  const canSave = [photo].every(Boolean);
;

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser({ user: data.updatedAvatar }));
      localStorage.setItem('user', JSON.stringify(data.updatedAvatar));
      setPhoto('');
      navigate('/dashboard');
    }
  }, [isSuccess, data]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (canSave) {
      try {
        await updateAvatar({
          avatar: photo,
        }).unwrap();
      } catch (err) {
        if (!err?.originalStatus) {
          setError('No Server Response');
        } else if (err.originalStatus === 400) {
          setError('Missing Required Fields');
        } else if (err.originalStatus === 401) {
          setError('Unauthorized');
        } else {
          setError('Upload Failed');
        }
      }
    }
  };

  return (
    <DropSection>
      <DropContainer {...getRootProps({ className: 'dropzone' })}>
        <UploadImage src='images/upload.svg' alt='Upload' />
        <input {...getInputProps()} />
        <Text>Drag 'n' drop your avatar here, or click to select files</Text>
        <Text>(Only *.jpeg and *.png images will be accepted)</Text>
        {photo.length > 0 && <Image src={photo} alt='avatar' />}
      </DropContainer>

      <UploadButton variant='contained' onClick={handleSubmit}>
        Upload
      </UploadButton>
    </DropSection>
  );
}
