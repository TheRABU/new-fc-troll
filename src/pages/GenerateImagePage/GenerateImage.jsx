import { useState } from "react";
import axios from "axios";
import bgImage from "../../assets/genBg.jpg";
import bgImage2 from "../../assets/genBg2.jpg";
import { axiosPublic } from "../../hooks/useAxiosPublic";

const teamSuggestions = [
  {
    id: 1,
    name: "Barcelona Fan",
    prompt: "Create a trolling image about Real Madrid's recent failures",
  },
  {
    id: 2,
    name: "Real Madrid Fan",
    prompt: "Make fun of Barcelona's financial troubles",
  },
  {
    id: 3,
    name: "Premier League Fan",
    prompt: "Troll about Champions League underperformances",
  },
];

const GenerateImage = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState([]);
  //   const [generatedVariants, setGeneratedVariants] = useState([]);
  const [error, setError] = useState(null);

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
    setPrompt(team);
  };

  // this version is for generating single image using gemini 2.0 flash
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError("Please enter a description");
      return;
    }

    setGenerating(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/generate-image",
        { prompt: `Create a funny football troll image: ${prompt}` }
      );

      setGeneratedImages([
        {
          id: Date.now(),
          url: response.data.imageUrl,
          caption: response.data.text || prompt,
        },
      ]);
    } catch (err) {
      console.error("Generation failed:", err);
      setError(err.response?.data?.error || "Image generation failed");
    } finally {
      setGenerating(false);
    }
  };

  /// this version is for varients of images using flash 1.5 model
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setGenerating(true);

  //     try {
  //       const response = await axiosPublic.post("/api/generate-image", {
  //         prompt: `${selectedTeam?.prompt || ""} ${prompt}`,
  //       });

  //       setGeneratedVariants(response.data.images);
  //     } catch (err) {
  //       setError(err.response?.data?.error || "Generation failed");
  //     } finally {
  //       setGenerating(false);
  //     }
  //   };

  const handleDownload = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `football-troll-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            {/* Team Suggestion Buttons */}
            <div className="mb-6">
              <h3 className="text-white mb-3 font-medium">Select your team:</h3>
              <div className="flex flex-wrap gap-2">
                {teamSuggestions.map((team) => (
                  <button
                    key={team.id}
                    type="button"
                    onClick={() => handleTeamSelect(team)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      selectedTeam?.id === team.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    }`}
                  >
                    {team.name}
                  </button>
                ))}
              </div>
            </div>
            <fieldset className="contents">
              <div className="flex flex-col gap-2">
                <label htmlFor="input" className="font-semibold text-lg">
                  Describe your football troll image
                </label>
                <textarea
                  name="input"
                  id="input"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows="5"
                  maxLength="256"
                  required
                  placeholder="Eg. 'Ronaldo crying while holding his boots watching Messi lift the World Cup' [Max 256 chars]"
                  className="rounded-lg p-4 bg-gray-100 border-2 border-gray-300 focus:border-green-500 focus:outline-none font-medium text-sm"
                />

                {error && (
                  <div className="p-3 bg-red-100 text-red-800 rounded-md mb-4">
                    Error: {error}
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={generating}
                className="rounded-lg p-3 bg-green-600 text-white transition-colors hover:bg-green-700 font-medium text-base leading-none flex flex-row items-center justify-center gap-2 disabled:bg-green-400"
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
            <div className="mt-12 max-w-2xl mx-auto bg-white/90 p-6 rounded-xl shadow-xl">
              <h2 className="text-xl font-bold mb-4">Generated Image</h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {generatedImages.map((image) => (
                  <div
                    key={image.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-64 object-cover mb-7 rounded-t-xl"
                    />
                    <div className="p-6">
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleDownload(image.url)}
                          className="text-sm font-semibold text-[#3e9d26] hover:underline"
                        >
                          Download
                        </button>
                        <button
                          onClick={() =>
                            navigator.clipboard.writeText(image.url)
                          }
                          className="text-sm font-semibold text-blue-600 hover:underline"
                        >
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Generated variants of images */}

          {/* {generatedVariants.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                Generated Variants
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {generatedVariants.map((img) => (
                  <div
                    key={img.id}
                    className="bg-white/90 rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={img.url}
                      alt={`Variant ${img.id}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <button
                        onClick={() => handleDownload(img.url)}
                        className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
                      >
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default GenerateImage;
