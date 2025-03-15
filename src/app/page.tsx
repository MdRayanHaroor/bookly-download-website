'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [downloadStarted, setDownloadStarted] = useState(false);
  
  const handleDownload = () => {
    // Replace with your actual APK URL
    const apkUrl = '/app-release.apk';
    
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = apkUrl;
    link.setAttribute('download', 'app-release.apk');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setDownloadStarted(true);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.logo}>
          <Image 
            src="/bookly-logo.png" 
            alt="Bookly Logo" 
            width={120} 
            height={120} 
            className={styles.logoImage}
          />
        </div>
        
        <h1 className={styles.title}>
          Bookly
        </h1>
        
        <p className={styles.description}>
          Order services in just a few taps
        </p>
        
        <div className={styles.downloadSection}>
          <button 
            className={styles.downloadButton}
            onClick={handleDownload}
          >
            Install Bookly App
          </button>
          
          <p className={styles.downloadInfo}>
            It will take only 2 seconds
          </p>
          
          {downloadStarted && (
            <div className={styles.downloadStarted}>
              <p>Your download has started. If it doesn&apos;t begin automatically, 
                <a href="/app-release.apk" download> click here</a>.
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Bookly. All rights reserved.</p>
      </footer>
    </div>
  );
}