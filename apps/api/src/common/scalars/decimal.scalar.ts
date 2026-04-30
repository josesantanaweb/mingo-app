import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import { Prisma } from '@mingo/database';

@Scalar('Decimal', () => Prisma.Decimal)
export class DecimalScalar implements CustomScalar<string | number, Prisma.Decimal> {
  description = 'Decimal scalar that preserves precision using string transport.';

  parseValue(value: unknown): Prisma.Decimal {
    if (typeof value === 'string' || typeof value === 'number') {
      return new Prisma.Decimal(value);
    }

    throw new TypeError('DecimalScalar can only parse string or number input values.');
  }

  serialize(value: unknown): string {
    if (typeof value === 'string' || typeof value === 'number') {
      return String(value);
    }

    if (value instanceof Prisma.Decimal) {
      return value.toString();
    }

    if (value && typeof value === 'object' && 'toString' in value) {
      return String((value as { toString: () => string }).toString());
    }

    throw new TypeError('DecimalScalar can only serialize string, number, or Decimal-like values.');
  }

  parseLiteral(ast: ValueNode): Prisma.Decimal {
    if (ast.kind === Kind.STRING || ast.kind === Kind.INT || ast.kind === Kind.FLOAT) {
      return new Prisma.Decimal(ast.value);
    }

    throw new TypeError('DecimalScalar can only parse string, int, or float literals.');
  }
}
