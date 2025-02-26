import Dexie, { type EntityTable } from "dexie";

interface VoiceNote {
  id: number;
  note: Blob;
  transcribe: string;
  date: Date;
}

const db = new Dexie("VoiceNotes") as Dexie & {
  notes: EntityTable<
    VoiceNote,
    "id" // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  notes: "++id, audioData, transcribe, date", // primary key "id" (for the runtime!)
});

export type { VoiceNote };
export { db };
