import { Module } from '@nestjs/common';
import { ExchangeRatesService } from '@/modules/exchange-rates/exchange-rates.service';
import { ExchangeRatesResolver } from '@/modules/exchange-rates/exchange-rates.resolver';

@Module({
  providers: [ExchangeRatesResolver, ExchangeRatesService],
})
export class ExchangeRatesModule {}
