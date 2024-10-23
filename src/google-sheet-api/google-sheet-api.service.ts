import { Injectable } from '@nestjs/common';

import * as fs from 'fs';
import { google } from 'googleapis';
import * as path from 'path';

@Injectable()
export class GoogleSheetApiService {
  private readonly credentials;
  private readonly auth;
  constructor() {
    const credentialsPath = path.join(
      __dirname,
      '..',
      'error-definition-importer-1495e7e47094.json',
    );

    this.credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf-8'));

    this.auth = new google.auth.GoogleAuth({
      credentials: this.credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    console.log(this.auth);
  }

  async getSheetData(spreadsheetId: string, range: string) {
    try {
      const sheets = google.sheets({ version: 'v4', auth: this.auth });

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
