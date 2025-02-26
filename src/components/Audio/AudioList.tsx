import { AudioRecorder } from "react-audio-voice-recorder";
import styles from "./AudioList.module.css";
import { db } from "../../database/db";
import { useLiveQuery } from "dexie-react-hooks";
import { transcribeAudio } from "../Transcription";

const AudioList = () => {
  async function addVoiceNote(note: Blob) {
    console.log(`Will add a new note ${note} to database`);
    if (note) {
      try {
        // Add the new voice note!
        const id = await db.notes.add({
          note,
          transcribe: "",
          date: new Date(),
        });

        console.log(`Voice note added successfully with id: ${id}`);
        updateTranscription(id, note);
      } catch (error) {
        console.log(`Error adding a new voice note to db - ${error}`);
      }
    }
  }

  async function updateTranscription(id: number, note: Blob) {
    try {
      const transcribe = await transcribeAudio(note);
      await db.notes.update(id, { transcribe });
      console.log(`Voice note updated successfully with id: ${id}`);
    } catch (error) {
      console.log(`Error updating the voice note transcription - ${error}`);
    }
  }

  const notes = useLiveQuery(() =>
    db.notes.orderBy("date").reverse().toArray()
  );

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
            {/* <a
              href={URL.createObjectURL(voiceNote.note)}
              download={`recording-${voiceNote.id + 1}.wav`}
            >
              Download
            </a> */}
            <h3>Transcrição da nota:</h3>
            <p>{voiceNote.transcribe}</p>
          </li>
        ))}
      </ul>
      <div className={styles.audioRecorder}>
        <AudioRecorder
          onRecordingComplete={addVoiceNote}
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
