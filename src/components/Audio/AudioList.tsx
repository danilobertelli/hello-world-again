import { AudioRecorder } from "react-audio-voice-recorder";
import styles from "./AudioList.module.css";
import { useState } from "react";
import { db } from "../../database/db";
import { useLiveQuery } from "dexie-react-hooks";

const AudioList = () => {
  const [audioFiles, setAudioFiles] = useState<Blob[]>([]);

  const addAudioElement = (audioBlob: Blob) => {
    setAudioFiles([...audioFiles, audioBlob]);
    addVoiceNote(audioBlob, "transcribed text", new Date());
  };

  async function addVoiceNote(note: Blob, transcribe: string, date: Date) {
    console.log(`Will add a new note ${note} to database`);
    if (note) {
      try {
        // Add the new voice note!
        const id = await db.notes.add({
          note,
          transcribe,
          date,
        });

        console.log(`Voice note added successfully with id: ${id}`);
      } catch (error) {
        console.log(`Error adding a new voice note to db - ${error}`);
      }
    }
  }

  const notes = useLiveQuery(() => db.notes.orderBy("date").reverse().toArray());

  return (
    <div className={styles.container}>
      <ul className={styles.audioList}>
        {notes?.map((voiceNote) => (
          <li key={voiceNote.id}>
            {voiceNote.date.toString()}
            <br />
            <br />
            <audio controls src={URL.createObjectURL(voiceNote.note)} />
            <br />
            <a
              href={URL.createObjectURL(voiceNote.note)}
              download={`recording-${voiceNote.id + 1}.wav`}
            >
              Download
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.audioRecorder}>
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
      </div>
    </div>
  );
};

export { AudioList };
