'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ContactPage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black-primary font-calibre pt-28">
      {/* Top Bar */}
      <div className="w-full h-20 bg-black-primary" />

      {/* Contact Us Heading */}
      <div className="w-full px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-off-white text-[16px] md:text-[24px] font-medium mb-8 md:mb-12 uppercase tracking-wide">Contact Us</h1>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left Panel */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start px-0 md:px-0 mb-12 md:mb-0">
            <div className="w-full aspect-[3/5] relative overflow-hidden mb-8">
              <Image
                src="/images/location/t3-sterling-2.webp"
                alt="Location"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col gap-2 w-full px-0 md:px-0">
              <div className="text-[16px] leading-[24px] text-off-white">150 Sterling Rd,<br />Toronto,<br />ON M6R 0C6<br />Unit 301</div>
              <div className="text-[16px] leading-[24px] text-off-white">inquiries@m5vinc.com</div>
              <div className="text-[16px] leading-[24px] text-off-white">416-457-6276</div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="md:col-start-7 md:col-end-13 w-full bg-accent-blue p-6 md:p-10 pt-12 md:pt-16 flex flex-col">
            <h2 className="mb-8 md:mb-10 text-3xl sm:text-4xl md:text-5xl font-medium text-off-white">Send an Inquiry</h2>
            <form className="flex flex-col">
              {/* First Name */}
              <label htmlFor="firstName" className="mb-2 text-[18px] leading-[28px] text-off-white">First Name</label>
              <input id="firstName" name="firstName" type="text" placeholder="Enter your first name" className="w-full h-12 mb-6 bg-transparent border-0 border-b border-[rgba(255,255,255,0.6)] focus:outline-none placeholder:italic placeholder:text-[18px] placeholder:text-[rgba(255,255,255,0.6)]" />

              {/* Last Name */}
              <label htmlFor="lastName" className="mb-2 text-[18px] leading-[28px] text-off-white">Last Name</label>
              <input id="lastName" name="lastName" type="text" placeholder="Enter your last name" className="w-full h-12 mb-6 bg-transparent border-0 border-b border-[rgba(255,255,255,0.6)] focus:outline-none placeholder:italic placeholder:text-[18px] placeholder:text-[rgba(255,255,255,0.6)]" />

              {/* Email */}
              <label htmlFor="email" className="mb-2 text-[18px] leading-[28px] text-off-white">Email</label>
              <input id="email" name="email" type="email" placeholder="Enter your email" className="w-full h-12 mb-6 bg-transparent border-0 border-b border-[rgba(255,255,255,0.6)] focus:outline-none placeholder:italic placeholder:text-[18px] placeholder:text-[rgba(255,255,255,0.6)]" />

              {/* Phone */}
              <label htmlFor="phone" className="mb-2 text-[18px] leading-[28px] text-off-white">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="Enter your phone" className="w-full h-12 mb-6 bg-transparent border-0 border-b border-[rgba(255,255,255,0.6)] focus:outline-none placeholder:italic placeholder:text-[18px] placeholder:text-[rgba(255,255,255,0.6)]" />

              {/* Message */}
              <label htmlFor="message" className="mb-2 text-[18px] leading-[28px] text-off-white">Message</label>
              <textarea id="message" name="message" placeholder="Type your message" className="w-full h-24 mb-6 bg-transparent border-0 border-b border-[rgba(255,255,255,0.6)] focus:outline-none resize-none placeholder:italic placeholder:text-[18px] placeholder:text-[rgba(255,255,255,0.6)]" rows={2} />

              {/* File Uploads */}
              <label htmlFor="file1" className="mb-2 text-[18px] leading-[28px] text-off-white">Upload Files</label>
              <input 
                id="file1" 
                name="file1" 
                type="file" 
                multiple
                onChange={handleFileUpload}
                className="w-full h-12 mb-4 bg-transparent border-0 border-b border-[rgba(255,255,255,0.6)] file:text-[rgba(95, 95, 95, 0.6)]" 
              />

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="mb-6">
                  <div className="text-[14px] leading-[20px] text-off-white mb-2">Uploaded Files:</div>
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-[rgba(255,255,255,0.1)] px-3 py-2 rounded">
                        <span className="text-[14px] leading-[20px] text-off-white truncate flex-1 mr-2">
                          {file.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-off-white hover:text-red-400 transition-colors duration-200 text-[18px] font-bold leading-none"
                          aria-label={`Remove ${file.name}`}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center mt-8">
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-black-primary text-off-white font-regular text-[16px] leading-[24px] min-w-[180px] hover:bg-off-white hover:text-accent-blue transition-colors duration-200"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full h-20 bg-black-primary" />
    </div>
  );
}
