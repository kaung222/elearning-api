import * as CryptoJS from 'crypto-js';

// generate radom 6 digit number
export function generateOpt() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Replace with secure, unique keys in production
const ENCRYPTION_KEY = '000102030405060238090a0b0c0d0e0f'; // Must be 32 characters for AES-256
const IV = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f'); // 16 bytes (32 hex chars)

// Function to encrypt a token
export function encryptToken(payload: string): string {
  const encrypted = CryptoJS.AES.encrypt(
    payload,
    CryptoJS.enc.Utf8.parse(ENCRYPTION_KEY),
    {
      iv: IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    },
  );
  return encrypted.toString(); // Encrypted string
}

// Function to decrypt a token
export function decryptToken(encryptedToken: string): string {
  const decrypted = CryptoJS.AES.decrypt(
    encryptedToken,
    CryptoJS.enc.Utf8.parse(ENCRYPTION_KEY),
    {
      iv: IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    },
  );

  return decrypted.toString(CryptoJS.enc.Utf8); // Decrypted token as string
}

import { Transform } from 'class-transformer';

export class PaginationResponse<T> {
  private page: number;
  private pageLimit: number;
  private totalCount: number;
  private data: T[];

  constructor({
    page,
    pageLimit = 10,
    totalCount,
    data,
  }: {
    page: number;
    pageLimit?: number;
    totalCount: number;
    data: T[];
  }) {
    this.page = page;
    this.pageLimit = pageLimit;
    this.totalCount = totalCount;
    this.data = data;
  }

  toResponse() {
    return {
      _metadata: {
        page: this.page,
        pageLimit: this.pageLimit,
        totalCount: this.totalCount,
        pageCount: Math.ceil(this.totalCount / this.pageLimit),
      },
      records: this.data,
    };
  }
}

export class PaginateQuery {
  search?: string;
  @Transform(({ value }) => parseInt(value))
  page?: number;
  @Transform(({ value }) => parseInt(value))
  pageLimit?: number;
}

// export async function findAll<T>(
//   repository: Repository<T>, // Accepts a repository of any entity
//   filters: {
//     relations?: string[];
//     where?: FindOptionsWhere<T>;
//     take?: number;
//     skip?: number;
//   },
//   cacheKey: string,
// ): Promise<T[]> {
//   // Check cache
//   const cachedData = await this.cacheService.get(cacheKey);
//   if (cachedData) return cachedData;

//   // Query the repository
//   const data = await repository.find({
//     relations: filters.relations,
//     where: filters.where,
//     take: filters.take || 10, // Default to 10 items per page
//     skip: filters.skip || 0, // Default to no offset
//   });

//   // Cache the results (optional: add TTL if needed)
//   await this.cacheService.set(cacheKey, data);

//   return data;
// }
