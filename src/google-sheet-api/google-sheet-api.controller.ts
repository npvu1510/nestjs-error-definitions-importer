import { Controller, Get, Query } from '@nestjs/common';
import { GoogleSheetApiService } from './google-sheet-api.service';

@Controller('google-sheet-api')
export class GoogleSheetApiController {
  constructor(private readonly googleSheetApiService: GoogleSheetApiService) {}

  @Get()
  getSheetData(
    @Query('spread-sheet-id') spreadSheetId: string,
    @Query('range') range: string,
  ) {
    return this.googleSheetApiService.getSheetData(spreadSheetId, range);
  }
}
