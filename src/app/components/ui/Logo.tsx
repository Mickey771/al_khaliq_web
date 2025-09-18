import React from 'react';
import Image from 'next/image';

const AlKhaliqLogo = ({ className = "w-64 h-16" }) => (
  <div className={`${className} relative`}>
    <Image
      src="/logo.png"
      alt="AL-khaliq Logo"
      layout="fill"
      objectFit="contain"
      unoptimized={true}
    />
  </div>
);

export default AlKhaliqLogo;
