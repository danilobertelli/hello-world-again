import { useState } from "react";
import styles from "./Home.module.css";
import { AudioRecorder } from "react-audio-voice-recorder";

const Home = () => {
  const [audioFiles, setAudioFiles] = useState<Blob[]>([]);

  const addAudioElement = (audioBlob: Blob) => {
    setAudioFiles([...audioFiles, audioBlob]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.audioList}>
        <AudioRecorder
          onRecordingComplete={addAudioElement}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
          }}
          onNotAllowedOrFound={(err) => console.table(err)}
          downloadOnSavePress={false}
          downloadFileExtension="wav"
          mediaRecorderOptions={{
            audioBitsPerSecond: 128000,
          }}
          showVisualizer={true}
        />
        <ul>
          {audioFiles.map((audioBlob, index) => (
            <li key={index}>
              <audio controls src={URL.createObjectURL(audioBlob)} />
              <br />
              <a
                href={URL.createObjectURL(audioBlob)}
                download={`recording-${index + 1}.wav`}
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img
          src="/logo/todo-list-logo.svg"
          alt="ToDo list logo"
          className={styles.logo}
        />
      </div>
    </div>
  );
};

export { Home };
