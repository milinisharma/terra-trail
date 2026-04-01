import { Injectable, signal } from '@angular/core';
import { Place } from '../pages/places/place.model';

const DB_USERS = "myuserdb";

export interface User {
  id: number;
  name: string;
  username?: string;
  password?: string;
  active: number; 
}

type PlaceSyncOperation = 'upsert' | 'delete';

interface PlaceSyncQueueItem {
  placeId: string;
  operation: PlaceSyncOperation;
  payload?: string;
  createdat: number;
}

@Injectable({
  providedIn: 'root',
})

export class Database {
  
  private SQLiteCon: SQLiteConnection = new SQlLiteConnection (CapacitorSQLite);
  private db !: SQLiteDBConnection;
  private dbOpened = false;
  private initPromise?: Promise<boolean>;
  private syncAllPromise?: Promise <{ users: {synced: number; pending: number}; places: {synced: number; pending: number}}>
  private onlineListenerRegistered = false;
  private firebaseApp?: FireBaseApp;
  private firestore?: Firestore;
  private users: WritableSignal<User[]> = signal <User[]>([]);
  private places: WritableSignal<Place[]> = signal <User[]>([]);


  constructor() {

  }

  private buildInsertQuery(table: string, data: Record<string, string | number>) {
    const columns = Object.keys(data);
    const placeholders = columns.map(() => '?').join(', ');
    const values= columns.map((column) =>  data[column])
    return {
      query: `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`,
      values,
    };
  }

  private async ensureDbReady() {
    if (this.dbOpened) {
      return;
    }

    if (this.initPromise) {
      await this.initPromise;
      return;
    }

    await this.initializePlugin();
  }

  async initializePlugin() {
    if (this.dbOpened) {
      console.log('[DB] Already Initialized');
      return true;
    }

    if (this.initPromise) {
      return this.initPromise;
    }

    this.initPromise = (async () => {
      console.log('[DB] Initializing on platform: ', Capacitor.getPlatform)
    })
  }
  
}
