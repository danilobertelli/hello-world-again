import { AudioRecorder } from "react-audio-voice-recorder";
import { db } from "../../database/db";
import { useLiveQuery } from "dexie-react-hooks";
import { transcribeAudioPy } from "../../service";
import styles from "./AudioList.module.css";

const AudioList = () => {
  const addVoiceNote = async (note: Blob) => {
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

  const updateTranscription = async (id: number, note: Blob) => {
    try {
      const transcribe = await transcribeAudioPy(note);
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
            {/* A tag br é uma tag que caiu em desuso não se usa mais ela, espaçamentos dentro do html são feitos via css */}
            <br /> 
            <br />
            <audio controls src={URL.createObjectURL(voiceNote.note)} />
            <br />
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
            audioBitsPerSecond: 16000,
          }}
          showVisualizer={true}
        />
      </div>
    </div>
  );
};

export { AudioList };
