import { HfInference } from "@huggingface/inference";
const hf = new HfInference(import.meta.env.VITE_HF_API_KEY as string);

const transcribeAudio = async (audioBlob: Blob) => {
    const audioFile = new File([audioBlob], "audio.wav", { type: "audio/wav" });
    let response;
    const maxAttempts = 2;
    let attempts = 0;
  
    /* We see that sometimes the API fails, let's try again in these cases */
    while (attempts < maxAttempts) {
      try {
        response = await hf.automaticSpeechRecognition({
          model: "nilc-nlp/distil-whisper-coraa-mupe-asr",
          data: audioFile,
        });
        break;
      } catch (error) {
        attempts++;
        if (attempts >= maxAttempts) {
          console.error("Transcription failed after 2 attempts", error);
          throw error;
        }
        // that super engineering that we love, add some delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
  
    if (response) {
      return response.text;
    } else {
      throw new Error("Transcription response is undefined");
    }
  };
  

export { transcribeAudio };
