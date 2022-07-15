import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  DropSection,
  Image,
  UploadImage,
  DropContainer,
  Text,
} from './styles';
import { Typography, Box, Button } from '@mui/material';
import { useUpdateAvatarMutation } from '../../features/users/usersSlice';
import { setUser } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

export default function DropZone() {
  const [photo, setPhoto] = useState('');
  const [error, setError] = useState('');
  const [updateAvatar, { isSuccess, data }] = useUpdateAvatarMutation();
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

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] },
  });

  const canSave = [photo].every(Boolean);

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setUser({
          user: {
            id: data.updatedAvatar._id,
            creditScore: data.updatedAvatar.creditScore,
            email: data.updatedAvatar.email,
            firstName: data.updatedAvatar.firstName,
            lastName: data.updatedAvatar.lastName,
            avatar: data.updatedAvatar.avatar,
          },
        })
      );
      setPhoto('');
    }
  }, [isSuccess, data, dispatch]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (canSave) {
      try {
        await updateAvatar({
          avatar: photo,
        }).unwrap();
      } catch (err) {
        setError('Upload Failed');
      }
    }
  };

  return (
    <DropSection>
      <Box sx={{ textAlign: 'center', my: 1 }}>
        {error && (
          <Typography
            variant='body1'
            sx={{ color: 'primary.main', textAlign: 'center' }}>
            {error}
          </Typography>
        )}
      </Box>
      <DropContainer {...getRootProps({ className: 'dropzone' })}>
        <UploadImage src='images/upload.svg' alt='Upload' />
        <input {...getInputProps()} />
        <Text>Drag 'n' drop your avatar here, or click to select files</Text>
        <Text>(Only *.jpeg and *.png images will be accepted)</Text>
        {photo.length > 0 && <Image src={photo} alt='avatar' />}
      </DropContainer>

      <Button variant='main' onClick={handleSubmit}>
        Upload
      </Button>
    </DropSection>
  );
}
