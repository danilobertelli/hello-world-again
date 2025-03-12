const transcribeAudioPy = async (audioBlob: Blob) => {
  const audioFile = new File([audioBlob], "audio.wav", { type: "audio/wav" });
  const formData = new FormData();
  formData.append("file", audioFile);

  let response, data;
  const maxAttempts = 2;
  let attempts = 0;
  console.log("Tentando transcrever o áudio usando o servidor local.");

  // Loop de tentativas em caso de falhas temporárias
  while (attempts < maxAttempts) {
    try {
      response = await fetch("https://python-transcribe-production.up.railway.app/transcribe", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Erro HTTP: " + response.status);
      }
      data = await response.json();
      break;
    } catch (error) {
      console.log("Falha na transcrição... tentando novamente.", error);
      attempts++;
      if (attempts >= maxAttempts) {
        console.error("Transcrição falhou após 2 tentativas", error);
        throw error;
      }
      // Aguarda 5 segundos antes de tentar novamente
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }

  if (data) {
    console.log(`Resposta da transcrição: ${JSON.stringify(data)}`);
    return data.text ? data.text : data;
  } else {
    throw new Error("A resposta da transcrição está indefinida");
  }
};

export { transcribeAudioPy };
