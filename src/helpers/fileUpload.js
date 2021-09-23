export const fileUpload = async (file) => {
  const cloudUrl = 'https://api.cloudinary.com/v1_1/dd6bjgims/upload';

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'react-journal-app');

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    });

    if (resp.ok) {
      const { secure_url } = await resp.json();
      return secure_url;
    } else {
      // throw await resp.json();
      return null;
    }
  } catch (error) {
    console.log('Error in uploading', error);
  }
};
