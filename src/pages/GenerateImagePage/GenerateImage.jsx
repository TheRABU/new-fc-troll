import { useState } from "react";
import axios from "axios";
import bgImage from "../../assets/genBg.jpg";
import bgImage2 from "../../assets/genBg2.jpg";
import { ToastContainer, toast } from "react-toastify";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const imageTypes = [
  "HD painting",
  "sketch",
  "cartoon",
  "photorealistic",
  "pixel art",
  "3D render",
  "watercolor",
  "comic book style",
  "vintage poster",
];

const userPreferences = [
  {
    id: "barca-fan",
    name: "Barcelona Fan",
    description:
      "trolling Real Madrid or any other team from the point of view of a Barcelona fan",
    promptModifier: "a Barcelona fan, trolling Real Madrid or rival teams",
  },
  {
    id: "real-madrid-fan",
    name: "Real Madrid Fan",
    description:
      "trolling Barcelona in a sarcastic way from the point of view of a Real Madrid fan",
    promptModifier:
      "a Real Madrid fan, trolling Barcelona or rival teams in a sarcastic way",
  },
  {
    id: "man-utd-fan",
    name: "Manchester United Fan",
    description:
      "trolling Liverpool or Manchester City from the point of view of a Manchester United fan",
    promptModifier:
      "a Manchester United fan, trolling Liverpool or Manchester City",
  },
  {
    id: "liverpool-fan",
    name: "Liverpool Fan",
    description:
      "trolling Manchester United or Everton from the point of view of a Liverpool fan",
    promptModifier: "a Liverpool fan, trolling Manchester United or Everton",
  },
  {
    id: "general-football-fan",
    name: "General Football Fan",
    description:
      "trolling a general football event or common football struggles",
    promptModifier:
      "a general football fan, trolling common football struggles or events",
  },
];

const GenerateImage = () => {
  const [prompt, setPrompt] = useState("");
  // Removed selectedTeam and handleTeamSelect as userPreferences now handles this
  const [selectedPreference, setSelectedPreference] = useState(null);
  const [selectedImageType, setSelectedImageType] = useState(imageTypes[0]);
  const [generating, setGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [error, setError] = useState(null);
  // const [keywordSuggestions, setKeywordSuggestions] = useState([]);
  // const [fetchingSuggestions, setFetchingSuggestions] = useState(false);

  const { user } = useAuth();

  // Handlers for selection buttons
  const handlePreferenceSelect = (preference) => {
    setSelectedPreference(preference);
    setPrompt("");
  };

  const handleImageTypeSelect = (type) => {
    setSelectedImageType(type);
  };

  // Callback function for fetching keyword suggestions
  // const fetchKeywordSuggestions = useCallback(
  //   async (currentPrompt, currentPreferenceDescription) => {
  //     if (!currentPrompt.trim()) {
  //       setKeywordSuggestions([]);
  //       return;
  //     }
  //     setFetchingSuggestions(true);
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:5000/api/suggest-keywords",
  //         {
  //           prompt: currentPrompt,
  //           // Send the full description for better AI context
  //           preference: currentPreferenceDescription,
  //         }
  //       );
  //       setKeywordSuggestions(response.data.suggestions);
  //     } catch (err) {
  //       console.error("Failed to fetch keyword suggestions:", err);
  //       // You can add a subtle error message for suggestions if desired
  //     } finally {
  //       setFetchingSuggestions(false);
  //     }
  //   },
  //   []
  // );

  // Debounced effect for keyword suggestions
  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     // Only fetch if a preference is selected and there's a prompt
  //     if (selectedPreference && prompt.trim()) {
  //       fetchKeywordSuggestions(prompt, selectedPreference.description);
  //     } else {
  //       setKeywordSuggestions([]); // Clear suggestions if no prompt or preference
  //     }
  //   }, 700); // Debounce time: fetch suggestions 700ms after user stops typing

  //   return () => {
  //     clearTimeout(handler); // Clear timeout if prompt or preference changes before the delay
  //   };
  // }, [prompt, selectedPreference, fetchKeywordSuggestions]); // Re-run when prompt, preference, or fetch function changes

  // Main submission handler for image generation
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError("Please enter a description for your troll image.");
      return;
    }
    if (!selectedPreference) {
      setError("Please select your fan preference.");
      return;
    }

    setGenerating(true);
    setError(null);
    setGeneratedImages([]);

    try {
      const response = await axiosPublic.post(
        `/api/generate-image/${user?.email}`,
        {
          userPrompt: prompt,
          imageType: selectedImageType,
          userPreference: selectedPreference.promptModifier,
        }
      );

      // Check if imageUrl exists in the response from the backend
      if (response.data && response.data.imageUrl) {
        setGeneratedImages([
          {
            id: Date.now(),
            url: response.data.imageUrl,
            caption: response.data.text || prompt,
          },
        ]);
      } else {
        setError(
          "Image generation response was missing an image URL. Please try again."
        );
      }
    } catch (err) {
      console.error("Image generation failed:", err);
      const errorMessage =
        err.response?.data?.error ||
        "Image generation failed. Please try again.";
      setError(errorMessage);
    } finally {
      setGenerating(false);
    }
  };

  // Download functionality
  const handleDownload = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `football-troll-meme-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Share by copying link functionality
  const handleShare = (imageUrl) => {
    navigator.clipboard
      .writeText(imageUrl)
      .then(() => {
        toast.success("Image Link copied to Clipboard!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: "Bounce",
        });
      })
      .catch((err) => console.error("Failed to copy link:", err));
  };

  return (
    <>
      <div
        className="pt-10 p-4 min-h-screen bg-gray-900"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 py-10 backdrop-blur-sm bg-black/30 min-h-screen sm:py-10 rounded-2xl">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mx-auto gap-6 max-w-2xl bg-white/90 p-6 rounded-xl shadow-xl"
          >
            {/* User Preferences Buttons */}
            <div className="mb-6">
              <h3 className="text-gray-800 mb-3 font-medium text-lg">
                Select your fan preference:
              </h3>
              <div className="flex flex-wrap gap-2">
                {userPreferences.map((preference) => (
                  <button
                    key={preference.id}
                    type="button"
                    onClick={() => handlePreferenceSelect(preference)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedPreference?.id === preference.id
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-200 text-gray-800 hover:bg-blue-100"
                    }`}
                  >
                    {preference.name}
                  </button>
                ))}
              </div>
              {selectedPreference && (
                <p className="mt-2 text-sm text-gray-600">
                  You're generating from the POV of:{" "}
                  <span className="font-semibold">
                    {selectedPreference.name}
                  </span>
                </p>
              )}
            </div>

            {/* Image Type Selection */}
            <div className="mb-6">
              <h3 className="text-gray-800 mb-3 font-medium text-lg">
                Select image style:
              </h3>
              <div className="flex flex-wrap gap-2">
                {imageTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleImageTypeSelect(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors duration-200 ${
                      selectedImageType === type
                        ? "bg-purple-600 text-white shadow-md"
                        : "bg-gray-200 text-gray-800 hover:bg-purple-100"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <fieldset className="contents">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="input"
                  className="font-semibold text-lg text-gray-800"
                >
                  Describe your football troll image:
                </label>
                <textarea
                  name="input"
                  id="input"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows="5"
                  maxLength="256"
                  required
                  placeholder="Eg. 'Ronaldo crying while holding his boots watching Messi lift the World Cup' [Max 256 characters]"
                  className="rounded-lg p-4 bg-gray-100 border-2 border-gray-300 focus:border-green-500 focus:outline-none font-medium text-sm text-gray-900 resize-y"
                />

                {/* AI Keyword Suggestions */}

                {error && (
                  <div className="p-3 bg-red-100 text-red-800 rounded-md mt-4">
                    Error: {error}
                  </div>
                )}
              </div>
              <button
                type="submit"
                // Disable if generating, no preference selected, or prompt is empty
                disabled={generating || !selectedPreference || !prompt.trim()}
                className="rounded-lg p-3 bg-green-600 text-white transition-colors hover:bg-green-700 font-bold text-base leading-none flex flex-row items-center justify-center gap-2 disabled:bg-green-400 disabled:cursor-not-allowed"
              >
                {generating ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="18"
                      height="18"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-bold">Generate Image Now!</span>
                  </>
                )}
              </button>
            </fieldset>
          </form>

          {/* Generated image display */}
          {generatedImages.length > 0 && (
            <div className="mt-12 max-w-2xl mx-auto bg-white/90 p-6 rounded-xl shadow-xl text-gray-800">
              <h2 className="text-xl font-bold mb-4">
                Your Generated Football Meme!
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {generatedImages.map((image) => (
                  <div
                    key={image.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
                  >
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-auto max-h-96 object-contain bg-gray-100 p-2 rounded-t-xl" // object-contain to prevent image cropping
                    />
                    <div className="p-4 flex flex-col gap-3">
                      <p className="text-sm text-gray-700 italic">
                        "{image.caption}"
                      </p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleDownload(image.url)}
                          className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold text-sm"
                        >
                          Download
                        </button>
                        <button
                          onClick={() => handleShare(image.url)}
                          className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-sm"
                        >
                          Copy Link
                        </button>
                        {/* Add more social media share buttons here if desired */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default GenerateImage;
