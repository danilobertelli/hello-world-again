import { HfInference } from "@huggingface/inference";
const hf = new HfInference(
  import.meta.env.VITE_HUGGINGFACE_API_TOKEN as string
);

// Funções uteis que que só fazem processamento mas não retornam componentes visuais não são componentes e sim funções comuns.
// Por isso movimentei e criei uma pasta nova chamada services para colocar essas funções que chamam APIS e fazem processamento de dados.
const transcribeAudio = async (audioBlob: Blob) => {
  const audioFile = new File([audioBlob], "audio.wav", { type: "audio/wav" });
  let response;
  const maxAttempts = 2;
  let attempts = 0;
  console.log("Trying to transcribe our audio note.");

  /* We see that sometimes the API fails, let's try again in these cases */
  while (attempts < maxAttempts) {
    try {
      response = await hf.automaticSpeechRecognition({
        model: "nilc-nlp/distil-whisper-coraa-mupe-asr",
        data: audioFile,
      });
      break;
    } catch (error) {
      console.log("Failed to transcribe... trying again.");
      attempts++;
      if (attempts >= maxAttempts) {
        console.error("Transcription failed after 2 attempts", error);
        throw error;
      }
      // that super engineering that we love, add some delay
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }

  if (response) {
    return response.text;
  } else {
    throw new Error("Transcription response is undefined");
  }
};

export { transcribeAudio };
