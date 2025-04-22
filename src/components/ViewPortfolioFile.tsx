"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

interface FileData {
  name: string;
  type: string;
  size: number;
  data: string;
}

interface PhotographerData {
  _id: string;
  fullName: string;
  email: string;
  portfolioFile?: FileData;
  // other fields...
}

const ViewPortfolioFile = () => {
  const params = useParams();
  const id = params.id as string;
  
  const [photographer, setPhotographer] = useState<PhotographerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  
  useEffect(() => {
    if (!id) return;
    
    const fetchPhotographer = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/photographers/${id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch photographer data');
        }
        
        const data = await response.json();
        setPhotographer(data);
        
        if (data.portfolioFile && data.portfolioFile.data) {
          const binaryString = atob(data.portfolioFile.data);
          const bytes = new Uint8Array(binaryString.length);
          for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          
          const blob = new Blob([bytes], { type: data.portfolioFile.type });
          const url = URL.createObjectURL(blob);
          setFileUrl(url);
        }
      } catch (err) {
        console.error('Error fetching photographer:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };
    
    fetchPhotographer();
    
    return () => {
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl);
      }
    };
  }, [id]);
  
  const handleDownload = () => {
    if (fileUrl && photographer?.portfolioFile) {
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = photographer.portfolioFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600 mx-auto"></div>
          <p className="mt-4 text-gray-700">Loading photographer data...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 p-6 rounded-lg shadow-md">
          <h2 className="text-red-700 text-xl font-semibold">Error</h2>
          <p className="text-red-600 mt-2">{error}</p>
          <button 
            onClick={() => window.history.back()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
  
  if (!photographer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700">No data found</h2>
          <p className="mt-2 text-gray-600">Photographer data could not be retrieved.</p>
          <button 
            onClick={() => window.history.back()}
            className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to- from-be-50 to-igo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gray-600 py-6 px-8">
          <h1 className="text-2xl font-bold text-white">Photographer Portfolio</h1>
          <p className="text-indigo-100 mt-2">{photographer.fullName}</p>
        </div>
        
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Photographer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Name</p>
                <p className="text-gray-800">{photographer.fullName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-gray-800">{photographer.email}</p>
              </div>
              {/* Add other fields as needed */}
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Portfolio File</h2>
            
            {photographer.portfolioFile ? (
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-700">{photographer.portfolioFile.name}</p>
                    <p className="text-sm text-gray-500">
                      {(photographer.portfolioFile.size / 1024 / 1024).toFixed(2)} MB • {photographer.portfolioFile.type}
                    </p>
                  </div>
                  
                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                  >
                    Download File
                  </button>
                </div>
                
                {/* Preview area - only show for certain file types */}
                {photographer.portfolioFile.type.startsWith('image/') && fileUrl && (
                  <div className="mt-4 border border-gray-200 rounded-md overflow-hidden">
                    <img src={fileUrl} alt="Portfolio preview" className="max-w-full h-auto" />
                  </div>
                )}
                
                {photographer.portfolioFile.type === 'application/pdf' && fileUrl && (
                  <div className="mt-4 border border-gray-200 rounded-md overflow-hidden h-96">
                    <iframe src={fileUrl} className="w-full h-full" title="PDF Preview"></iframe>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-500 italic">No portfolio file uploaded</p>
            )}
          </div>
          
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 mr-4"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPortfolioFile;