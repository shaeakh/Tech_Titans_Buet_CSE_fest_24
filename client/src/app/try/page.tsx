"use client";
import React, { useState } from 'react';
import { CldUploadButton } from 'next-cloudinary';

export default function page() {
    const [picUrl, setPicUrl] = useState<string | null>(null);

    const handleUploadSuccess = (result: any) => {
        if (result.info?.secure_url) {
            setPicUrl(result.info.secure_url);
            console.log('Uploaded URL:', result.info.secure_url);
        }
    };

    return (
        <div className="upload-container">
            <h1>Upload Image to Cloudinary</h1>
            
            <CldUploadButton
                onSuccess={handleUploadSuccess}
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET} // Make sure this preset exists in your Cloudinary account
            >
                Upload Image
            </CldUploadButton>

            {picUrl && (
                <div>
                    <p>Image URL:</p>
                    <a href={picUrl} target="_blank" rel="noopener noreferrer">{picUrl}</a>
                    <br />
                    <img src={picUrl} alt="Uploaded Image" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}
        </div>
    );
}
