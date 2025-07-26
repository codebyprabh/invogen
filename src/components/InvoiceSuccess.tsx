import React, { useEffect, useState, useRef } from "react";
import { saveAs } from "file-saver";

interface Props {
  onGenerateAgain: () => void;
  fileBlob: Blob | null;
  fileName: string;
}

const InvoiceSuccess: React.FC<Props> = ({
  onGenerateAgain,
  fileBlob,
  fileName,
}) => {
  const [countdown, setCountdown] = useState(3);
const downloadedRef = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1 && fileBlob && !downloadedRef.current) {
           downloadedRef.current = true;
          saveAs(fileBlob, fileName);
        }
        return prev > 0 ? prev - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [fileBlob, fileName]);

  const handleManualDownload = () => {
    if (fileBlob) {
      saveAs(fileBlob, fileName);
    }
  };

  return (
    <div className="text-center mt-12">
      {countdown > 0 ? (
        <h2 className="text-2xl font-semibold">
          Your invoice will be ready to download in {countdown}...
        </h2>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-4">
            Your invoice is now ready to download!
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            If it doesn't start automatically,{" "}
            <button
              onClick={handleManualDownload}
              className="text-blue-500 underline cursor-pointer"
            >
              click here
            </button>
            .
          </p>
          <button
            onClick={onGenerateAgain}
            className="bg-amber-400 text-white cursor-pointer font-semibold py-2 px-6 rounded hover:bg-yellow-500 transition"
          >
            Generate Again
          </button>
        </>
      )}
    </div>
  );
};

export default InvoiceSuccess;
