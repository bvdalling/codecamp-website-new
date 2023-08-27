import React, { useState } from "react";

export const Video = ({ videoId, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`w-[80%] relative mx-auto ${className} shadow-2xl`}>
      {isLoaded && (
        <div className="absolute inset-1 bg-gradient-to-r from-cyan-600 to-pink-600 rounded-2xl blur-xl opacity-25"></div>
      )}
      <div className="relative ring-1 ring-gray-900/5 rounded-2xl leading-none flex items-top justify-start space-x-6">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?controls=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ aspectRatio: "16/9", width: "100%" }}
          className="rounded-2xl"
          onLoad={() => setIsLoaded(true)}
        ></iframe>
      </div>
    </div>
  );
};
