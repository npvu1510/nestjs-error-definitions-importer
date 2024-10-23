import { Module } from '@nestjs/common';
import { GoogleSheetApiService } from './google-sheet-api/google-sheet-api.service';
import { GoogleSheetApiController } from './google-sheet-api/google-sheet-api.controller';

@Module({
  imports: [],
  controllers: [GoogleSheetApiController],
  providers: [GoogleSheetApiService],
})
export class AppModule {}
