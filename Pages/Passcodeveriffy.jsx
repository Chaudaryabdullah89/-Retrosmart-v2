import { React, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const PasscodeVerify = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [passcode, setPasscode] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const handleChange = (e, idx) => {
    const val = e.target.value;

    if (!/^\d?$/.test(val)) return;

    const newPasscode = [...passcode];
    newPasscode[idx] = val;
    setPasscode(newPasscode);

    if (val && idx < 5) {
      inputsRef.current[idx + 1].focus();
    }
  };
const handlepasscode = async (e) => {
  e.preventDefault();
  console.log("[handlepasscode] Form submitted.");

  setIsLoading(true);
  console.log("[handlepasscode] Loading state set to true.");

  const joinedPasscode = passcode.join("");
  console.log("[handlepasscode] Passcode entered:", joinedPasscode);

  // Check if passcode is complete
  if (joinedPasscode.length !== 6) {
    setError("Please enter a complete 6-digit passcode");
    setIsLoading(false);
    return;
  }

  try {
    console.log("[handlepasscode] Sending POST request to /api/verification/passcode");
    console.log("[handlepasscode] Request payload:", { passcode: joinedPasscode });
    
    const response = await axios.post("https://retro-bd.vercel.app//api/verification/passcode", {
      passcode: joinedPasscode,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    console.log("[handlepasscode] Response received from server:", response.data);
    console.log("[handlepasscode] Response status:", response.status);

    setIsLoading(false);
    console.log("[handlepasscode] Loading state set to false.");

    if (response.data.success) {
      console.log("[handlepasscode] Passcode verification successful.");
      setSuccess(true);
      console.log("[handlepasscode] Success state set to true.");
      
      // Save the token to localStorage
      if (response.data.token) {
        localStorage.setItem("adminToken", response.data.token);
        console.log("[handlepasscode] Token saved to localStorage");
      }
      
      console.log("[handlepasscode] Navigating to /admin/blog");
      navigate("/admin/blog");
    } else {
      console.warn("[handlepasscode] Verification failed:", response.data.message);
      setError(response.data.message || "Invalid passcode");
    }
  } catch (error) {
    setIsLoading(false);
    console.log("[handlepasscode] Loading state set to false due to error.");

    const errorMessage = error.response?.data?.message || "An error occurred";
    console.error("[handlepasscode] Error during passcode verification:", errorMessage);
    console.error("[handlepasscode] Full error:", error);
    console.error("[handlepasscode] Error response:", error.response);
    setError(errorMessage);
  }
};


  return (
    <>
     {isLoading && (
  <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
    <div className="text-white text-xl font-medium animate-pulse">Verifying...</div>
  </div>
)}

<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full relative">
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Verification</h2>
    <p className="text-sm text-gray-500 text-center mb-6">
      Enter the 6-digit code for admin access
    </p>

    {error && (
      <div className="mb-4 text-center text-sm text-red-600 bg-red-100 px-3 py-2 rounded-md border border-red-300">
        ⚠️ {error}
      </div>
    )}

    {success && (
      <div className="mb-4 text-center text-sm text-green-700 bg-green-100 px-3 py-2 rounded-md border border-green-300">
        ✅ Code verified! Redirecting...
      </div>
    )}

    <form className="space-y-6" onSubmit={handlepasscode}>
      <div className="flex justify-center gap-2">
        {passcode.map((digit, idx) => (
          <input
            key={idx}
            type="text"
            inputMode="numeric"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, idx)}
            ref={(el) => (inputsRef.current[idx] = el)}
            className="w-12 h-14 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={isLoading}
          />
        ))}
      </div>

      <button
        type="submit"
        className={`w-full py-2 text-white rounded-lg transition ${
          isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
        }`}
        disabled={isLoading}
      >
        {isLoading ? 'Verifying...' : 'Verify Code'}
      </button>
      
      {/* Test button for debugging */}
      <button
        type="button"
        onClick={async () => {
          try {
            console.log("Testing API directly...");
            const response = await axios.post("http://localhost:3000/api/verification/passcode", {
              passcode: "123456"
            });
            console.log("Test response:", response.data);
            alert("API test successful! Check console for details.");
          } catch (error) {
            console.error("API test failed:", error);
            alert("API test failed! Check console for details.");
          }
        }}
        className="w-full mt-2 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Test API (123456)
      </button>
    </form>
  </div>
</div>
    </>
  );
};

export default PasscodeVerify;
