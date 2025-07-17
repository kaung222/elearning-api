
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model OrganizationMember
 * 
 */
export type OrganizationMember = $Result.DefaultSelection<Prisma.$OrganizationMemberPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model OrgStats
 * 
 */
export type OrgStats = $Result.DefaultSelection<Prisma.$OrgStatsPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Instructor
 * 
 */
export type Instructor = $Result.DefaultSelection<Prisma.$InstructorPayload>
/**
 * Model WorkExperience
 * 
 */
export type WorkExperience = $Result.DefaultSelection<Prisma.$WorkExperiencePayload>
/**
 * Model InstructorStats
 * 
 */
export type InstructorStats = $Result.DefaultSelection<Prisma.$InstructorStatsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrgType: {
  University: 'University',
  Company: 'Company',
  Institute: 'Institute',
  Academy: 'Academy',
  BootCamp: 'BootCamp',
  NonProfit: 'NonProfit'
};

export type OrgType = (typeof OrgType)[keyof typeof OrgType]


export const OrgRole: {
  ORG_ADMIN: 'ORG_ADMIN',
  INSTRUCTOR: 'INSTRUCTOR',
  STAFF: 'STAFF'
};

export type OrgRole = (typeof OrgRole)[keyof typeof OrgRole]

}

export type OrgType = $Enums.OrgType

export const OrgType: typeof $Enums.OrgType

export type OrgRole = $Enums.OrgRole

export const OrgRole: typeof $Enums.OrgRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more OrganizationMembers
 * const organizationMembers = await prisma.organizationMember.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more OrganizationMembers
   * const organizationMembers = await prisma.organizationMember.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.organizationMember`: Exposes CRUD operations for the **OrganizationMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationMembers
    * const organizationMembers = await prisma.organizationMember.findMany()
    * ```
    */
  get organizationMember(): Prisma.OrganizationMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orgStats`: Exposes CRUD operations for the **OrgStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrgStats
    * const orgStats = await prisma.orgStats.findMany()
    * ```
    */
  get orgStats(): Prisma.OrgStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructor`: Exposes CRUD operations for the **Instructor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instructors
    * const instructors = await prisma.instructor.findMany()
    * ```
    */
  get instructor(): Prisma.InstructorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workExperience`: Exposes CRUD operations for the **WorkExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkExperiences
    * const workExperiences = await prisma.workExperience.findMany()
    * ```
    */
  get workExperience(): Prisma.WorkExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructorStats`: Exposes CRUD operations for the **InstructorStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstructorStats
    * const instructorStats = await prisma.instructorStats.findMany()
    * ```
    */
  get instructorStats(): Prisma.InstructorStatsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    OrganizationMember: 'OrganizationMember',
    Organization: 'Organization',
    OrgStats: 'OrgStats',
    Contact: 'Contact',
    Review: 'Review',
    Instructor: 'Instructor',
    WorkExperience: 'WorkExperience',
    InstructorStats: 'InstructorStats'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "organizationMember" | "organization" | "orgStats" | "contact" | "review" | "instructor" | "workExperience" | "instructorStats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      OrganizationMember: {
        payload: Prisma.$OrganizationMemberPayload<ExtArgs>
        fields: Prisma.OrganizationMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          findFirst: {
            args: Prisma.OrganizationMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          findMany: {
            args: Prisma.OrganizationMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          create: {
            args: Prisma.OrganizationMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          createMany: {
            args: Prisma.OrganizationMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          delete: {
            args: Prisma.OrganizationMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          update: {
            args: Prisma.OrganizationMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          aggregate: {
            args: Prisma.OrganizationMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationMember>
          }
          groupBy: {
            args: Prisma.OrganizationMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationMemberCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMemberCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      OrgStats: {
        payload: Prisma.$OrgStatsPayload<ExtArgs>
        fields: Prisma.OrgStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrgStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrgStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgStatsPayload>
          }
          findFirst: {
            args: Prisma.OrgStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrgStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgStatsPayload>
          }
          findMany: {
            args: Prisma.OrgStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgStatsPayload>[]
          }
          create: {
            args: Prisma.OrgStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgStatsPayload>
          }
          createMany: {
            args: Prisma.OrgStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrgStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgStatsPayload>[]
          }
          delete: {
            args: Prisma.OrgStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgStatsPayload>
          }
          update: {
            args: Prisma.OrgStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgStatsPayload>
          }
          deleteMany: {
            args: Prisma.OrgStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrgStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrgStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgStatsPayload>[]
          }
          upsert: {
            args: Prisma.OrgStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgStatsPayload>
          }
          aggregate: {
            args: Prisma.OrgStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrgStats>
          }
          groupBy: {
            args: Prisma.OrgStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrgStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrgStatsCountArgs<ExtArgs>
            result: $Utils.Optional<OrgStatsCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Instructor: {
        payload: Prisma.$InstructorPayload<ExtArgs>
        fields: Prisma.InstructorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findFirst: {
            args: Prisma.InstructorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findMany: {
            args: Prisma.InstructorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          create: {
            args: Prisma.InstructorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          createMany: {
            args: Prisma.InstructorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          delete: {
            args: Prisma.InstructorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          update: {
            args: Prisma.InstructorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          deleteMany: {
            args: Prisma.InstructorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          upsert: {
            args: Prisma.InstructorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          aggregate: {
            args: Prisma.InstructorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructor>
          }
          groupBy: {
            args: Prisma.InstructorGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructorCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorCountAggregateOutputType> | number
          }
        }
      }
      WorkExperience: {
        payload: Prisma.$WorkExperiencePayload<ExtArgs>
        fields: Prisma.WorkExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          findFirst: {
            args: Prisma.WorkExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          findMany: {
            args: Prisma.WorkExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          create: {
            args: Prisma.WorkExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          createMany: {
            args: Prisma.WorkExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          delete: {
            args: Prisma.WorkExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          update: {
            args: Prisma.WorkExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          deleteMany: {
            args: Prisma.WorkExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          upsert: {
            args: Prisma.WorkExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          aggregate: {
            args: Prisma.WorkExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkExperience>
          }
          groupBy: {
            args: Prisma.WorkExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkExperienceCountAggregateOutputType> | number
          }
        }
      }
      InstructorStats: {
        payload: Prisma.$InstructorStatsPayload<ExtArgs>
        fields: Prisma.InstructorStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructorStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructorStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorStatsPayload>
          }
          findFirst: {
            args: Prisma.InstructorStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructorStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorStatsPayload>
          }
          findMany: {
            args: Prisma.InstructorStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorStatsPayload>[]
          }
          create: {
            args: Prisma.InstructorStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorStatsPayload>
          }
          createMany: {
            args: Prisma.InstructorStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructorStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorStatsPayload>[]
          }
          delete: {
            args: Prisma.InstructorStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorStatsPayload>
          }
          update: {
            args: Prisma.InstructorStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorStatsPayload>
          }
          deleteMany: {
            args: Prisma.InstructorStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructorStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructorStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorStatsPayload>[]
          }
          upsert: {
            args: Prisma.InstructorStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorStatsPayload>
          }
          aggregate: {
            args: Prisma.InstructorStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructorStats>
          }
          groupBy: {
            args: Prisma.InstructorStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructorStatsCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorStatsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    organizationMember?: OrganizationMemberOmit
    organization?: OrganizationOmit
    orgStats?: OrgStatsOmit
    contact?: ContactOmit
    review?: ReviewOmit
    instructor?: InstructorOmit
    workExperience?: WorkExperienceOmit
    instructorStats?: InstructorStatsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    instructors: number
    reviews: number
    members: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructors?: boolean | OrganizationCountOutputTypeCountInstructorsArgs
    reviews?: boolean | OrganizationCountOutputTypeCountReviewsArgs
    members?: boolean | OrganizationCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountInstructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
  }


  /**
   * Count Type InstructorCountOutputType
   */

  export type InstructorCountOutputType = {
    workExperience: number
    reviews: number
  }

  export type InstructorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workExperience?: boolean | InstructorCountOutputTypeCountWorkExperienceArgs
    reviews?: boolean | InstructorCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorCountOutputType
     */
    select?: InstructorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeCountWorkExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkExperienceWhereInput
  }

  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model OrganizationMember
   */

  export type AggregateOrganizationMember = {
    _count: OrganizationMemberCountAggregateOutputType | null
    _min: OrganizationMemberMinAggregateOutputType | null
    _max: OrganizationMemberMaxAggregateOutputType | null
  }

  export type OrganizationMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    role: $Enums.OrgRole | null
  }

  export type OrganizationMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    role: $Enums.OrgRole | null
  }

  export type OrganizationMemberCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    role: number
    _all: number
  }


  export type OrganizationMemberMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    role?: true
  }

  export type OrganizationMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    role?: true
  }

  export type OrganizationMemberCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    role?: true
    _all?: true
  }

  export type OrganizationMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMember to aggregate.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationMembers
    **/
    _count?: true | OrganizationMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMemberMaxAggregateInputType
  }

  export type GetOrganizationMemberAggregateType<T extends OrganizationMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationMember[P]>
      : GetScalarType<T[P], AggregateOrganizationMember[P]>
  }




  export type OrganizationMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithAggregationInput | OrganizationMemberOrderByWithAggregationInput[]
    by: OrganizationMemberScalarFieldEnum[] | OrganizationMemberScalarFieldEnum
    having?: OrganizationMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationMemberCountAggregateInputType | true
    _min?: OrganizationMemberMinAggregateInputType
    _max?: OrganizationMemberMaxAggregateInputType
  }

  export type OrganizationMemberGroupByOutputType = {
    id: string
    userId: string
    organizationId: string
    role: $Enums.OrgRole
    _count: OrganizationMemberCountAggregateOutputType | null
    _min: OrganizationMemberMinAggregateOutputType | null
    _max: OrganizationMemberMaxAggregateOutputType | null
  }

  type GetOrganizationMemberGroupByPayload<T extends OrganizationMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationMemberGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationMemberGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
  }

  export type OrganizationMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "role", ExtArgs["result"]["organizationMember"]>
  export type OrganizationMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrganizationMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrganizationMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $OrganizationMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationMember"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string
      role: $Enums.OrgRole
    }, ExtArgs["result"]["organizationMember"]>
    composites: {}
  }

  type OrganizationMemberGetPayload<S extends boolean | null | undefined | OrganizationMemberDefaultArgs> = $Result.GetResult<Prisma.$OrganizationMemberPayload, S>

  type OrganizationMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationMemberCountAggregateInputType | true
    }

  export interface OrganizationMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationMember'], meta: { name: 'OrganizationMember' } }
    /**
     * Find zero or one OrganizationMember that matches the filter.
     * @param {OrganizationMemberFindUniqueArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationMemberFindUniqueArgs>(args: SelectSubset<T, OrganizationMemberFindUniqueArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationMemberFindUniqueOrThrowArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindFirstArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationMemberFindFirstArgs>(args?: SelectSubset<T, OrganizationMemberFindFirstArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindFirstOrThrowArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationMembers
     * const organizationMembers = await prisma.organizationMember.findMany()
     * 
     * // Get first 10 OrganizationMembers
     * const organizationMembers = await prisma.organizationMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationMemberFindManyArgs>(args?: SelectSubset<T, OrganizationMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationMember.
     * @param {OrganizationMemberCreateArgs} args - Arguments to create a OrganizationMember.
     * @example
     * // Create one OrganizationMember
     * const OrganizationMember = await prisma.organizationMember.create({
     *   data: {
     *     // ... data to create a OrganizationMember
     *   }
     * })
     * 
     */
    create<T extends OrganizationMemberCreateArgs>(args: SelectSubset<T, OrganizationMemberCreateArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationMembers.
     * @param {OrganizationMemberCreateManyArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationMemberCreateManyArgs>(args?: SelectSubset<T, OrganizationMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationMembers and returns the data saved in the database.
     * @param {OrganizationMemberCreateManyAndReturnArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationMembers and only return the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationMember.
     * @param {OrganizationMemberDeleteArgs} args - Arguments to delete one OrganizationMember.
     * @example
     * // Delete one OrganizationMember
     * const OrganizationMember = await prisma.organizationMember.delete({
     *   where: {
     *     // ... filter to delete one OrganizationMember
     *   }
     * })
     * 
     */
    delete<T extends OrganizationMemberDeleteArgs>(args: SelectSubset<T, OrganizationMemberDeleteArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationMember.
     * @param {OrganizationMemberUpdateArgs} args - Arguments to update one OrganizationMember.
     * @example
     * // Update one OrganizationMember
     * const organizationMember = await prisma.organizationMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationMemberUpdateArgs>(args: SelectSubset<T, OrganizationMemberUpdateArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationMembers.
     * @param {OrganizationMemberDeleteManyArgs} args - Arguments to filter OrganizationMembers to delete.
     * @example
     * // Delete a few OrganizationMembers
     * const { count } = await prisma.organizationMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationMemberDeleteManyArgs>(args?: SelectSubset<T, OrganizationMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationMemberUpdateManyArgs>(args: SelectSubset<T, OrganizationMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMembers and returns the data updated in the database.
     * @param {OrganizationMemberUpdateManyAndReturnArgs} args - Arguments to update many OrganizationMembers.
     * @example
     * // Update many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationMembers and only return the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationMember.
     * @param {OrganizationMemberUpsertArgs} args - Arguments to update or create a OrganizationMember.
     * @example
     * // Update or create a OrganizationMember
     * const organizationMember = await prisma.organizationMember.upsert({
     *   create: {
     *     // ... data to create a OrganizationMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationMember we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationMemberUpsertArgs>(args: SelectSubset<T, OrganizationMemberUpsertArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberCountArgs} args - Arguments to filter OrganizationMembers to count.
     * @example
     * // Count the number of OrganizationMembers
     * const count = await prisma.organizationMember.count({
     *   where: {
     *     // ... the filter for the OrganizationMembers we want to count
     *   }
     * })
    **/
    count<T extends OrganizationMemberCountArgs>(
      args?: Subset<T, OrganizationMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationMemberAggregateArgs>(args: Subset<T, OrganizationMemberAggregateArgs>): Prisma.PrismaPromise<GetOrganizationMemberAggregateType<T>>

    /**
     * Group by OrganizationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationMemberGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationMember model
   */
  readonly fields: OrganizationMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrganizationMember model
   */
  interface OrganizationMemberFieldRefs {
    readonly id: FieldRef<"OrganizationMember", 'String'>
    readonly userId: FieldRef<"OrganizationMember", 'String'>
    readonly organizationId: FieldRef<"OrganizationMember", 'String'>
    readonly role: FieldRef<"OrganizationMember", 'OrgRole'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationMember findUnique
   */
  export type OrganizationMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember findUniqueOrThrow
   */
  export type OrganizationMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember findFirst
   */
  export type OrganizationMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember findFirstOrThrow
   */
  export type OrganizationMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember findMany
   */
  export type OrganizationMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembers to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember create
   */
  export type OrganizationMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationMember.
     */
    data: XOR<OrganizationMemberCreateInput, OrganizationMemberUncheckedCreateInput>
  }

  /**
   * OrganizationMember createMany
   */
  export type OrganizationMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationMembers.
     */
    data: OrganizationMemberCreateManyInput | OrganizationMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationMember createManyAndReturn
   */
  export type OrganizationMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationMembers.
     */
    data: OrganizationMemberCreateManyInput | OrganizationMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationMember update
   */
  export type OrganizationMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationMember.
     */
    data: XOR<OrganizationMemberUpdateInput, OrganizationMemberUncheckedUpdateInput>
    /**
     * Choose, which OrganizationMember to update.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember updateMany
   */
  export type OrganizationMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationMembers.
     */
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMembers to update
     */
    where?: OrganizationMemberWhereInput
    /**
     * Limit how many OrganizationMembers to update.
     */
    limit?: number
  }

  /**
   * OrganizationMember updateManyAndReturn
   */
  export type OrganizationMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationMembers.
     */
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMembers to update
     */
    where?: OrganizationMemberWhereInput
    /**
     * Limit how many OrganizationMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationMember upsert
   */
  export type OrganizationMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationMember to update in case it exists.
     */
    where: OrganizationMemberWhereUniqueInput
    /**
     * In case the OrganizationMember found by the `where` argument doesn't exist, create a new OrganizationMember with this data.
     */
    create: XOR<OrganizationMemberCreateInput, OrganizationMemberUncheckedCreateInput>
    /**
     * In case the OrganizationMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationMemberUpdateInput, OrganizationMemberUncheckedUpdateInput>
  }

  /**
   * OrganizationMember delete
   */
  export type OrganizationMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter which OrganizationMember to delete.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember deleteMany
   */
  export type OrganizationMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMembers to delete
     */
    where?: OrganizationMemberWhereInput
    /**
     * Limit how many OrganizationMembers to delete.
     */
    limit?: number
  }

  /**
   * OrganizationMember without action
   */
  export type OrganizationMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    totalCourses: number | null
    totalStudents: number | null
    totalInstructors: number | null
    rating: number | null
    reviewCount: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    totalCourses: number | null
    totalStudents: number | null
    totalInstructors: number | null
    rating: number | null
    reviewCount: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    type: $Enums.OrgType | null
    logo: string | null
    coverImage: string | null
    description: string | null
    longDescription: string | null
    location: string | null
    website: string | null
    email: string | null
    phone: string | null
    founded: string | null
    totalCourses: number | null
    totalStudents: number | null
    totalInstructors: number | null
    rating: number | null
    reviewCount: number | null
    featured: boolean | null
    verified: boolean | null
    mission: string | null
    vision: string | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    type: $Enums.OrgType | null
    logo: string | null
    coverImage: string | null
    description: string | null
    longDescription: string | null
    location: string | null
    website: string | null
    email: string | null
    phone: string | null
    founded: string | null
    totalCourses: number | null
    totalStudents: number | null
    totalInstructors: number | null
    rating: number | null
    reviewCount: number | null
    featured: boolean | null
    verified: boolean | null
    mission: string | null
    vision: string | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    type: number
    logo: number
    coverImage: number
    description: number
    longDescription: number
    location: number
    website: number
    email: number
    phone: number
    founded: number
    totalCourses: number
    totalStudents: number
    totalInstructors: number
    rating: number
    reviewCount: number
    specialties: number
    featured: number
    verified: number
    accreditation: number
    mission: number
    vision: number
    achievements: number
    partnerships: number
    social: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    totalCourses?: true
    totalStudents?: true
    totalInstructors?: true
    rating?: true
    reviewCount?: true
  }

  export type OrganizationSumAggregateInputType = {
    totalCourses?: true
    totalStudents?: true
    totalInstructors?: true
    rating?: true
    reviewCount?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    logo?: true
    coverImage?: true
    description?: true
    longDescription?: true
    location?: true
    website?: true
    email?: true
    phone?: true
    founded?: true
    totalCourses?: true
    totalStudents?: true
    totalInstructors?: true
    rating?: true
    reviewCount?: true
    featured?: true
    verified?: true
    mission?: true
    vision?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    logo?: true
    coverImage?: true
    description?: true
    longDescription?: true
    location?: true
    website?: true
    email?: true
    phone?: true
    founded?: true
    totalCourses?: true
    totalStudents?: true
    totalInstructors?: true
    rating?: true
    reviewCount?: true
    featured?: true
    verified?: true
    mission?: true
    vision?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    logo?: true
    coverImage?: true
    description?: true
    longDescription?: true
    location?: true
    website?: true
    email?: true
    phone?: true
    founded?: true
    totalCourses?: true
    totalStudents?: true
    totalInstructors?: true
    rating?: true
    reviewCount?: true
    specialties?: true
    featured?: true
    verified?: true
    accreditation?: true
    mission?: true
    vision?: true
    achievements?: true
    partnerships?: true
    social?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    userId: string
    name: string
    type: $Enums.OrgType
    logo: string
    coverImage: string
    description: string
    longDescription: string
    location: string
    website: string
    email: string
    phone: string
    founded: string
    totalCourses: number
    totalStudents: number
    totalInstructors: number
    rating: number
    reviewCount: number
    specialties: string[]
    featured: boolean
    verified: boolean
    accreditation: string[]
    mission: string
    vision: string
    achievements: string[]
    partnerships: string[]
    social: JsonValue
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    logo?: boolean
    coverImage?: boolean
    description?: boolean
    longDescription?: boolean
    location?: boolean
    website?: boolean
    email?: boolean
    phone?: boolean
    founded?: boolean
    totalCourses?: boolean
    totalStudents?: boolean
    totalInstructors?: boolean
    rating?: boolean
    reviewCount?: boolean
    specialties?: boolean
    featured?: boolean
    verified?: boolean
    accreditation?: boolean
    mission?: boolean
    vision?: boolean
    achievements?: boolean
    partnerships?: boolean
    social?: boolean
    instructors?: boolean | Organization$instructorsArgs<ExtArgs>
    reviews?: boolean | Organization$reviewsArgs<ExtArgs>
    stats?: boolean | Organization$statsArgs<ExtArgs>
    contact?: boolean | Organization$contactArgs<ExtArgs>
    members?: boolean | Organization$membersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    logo?: boolean
    coverImage?: boolean
    description?: boolean
    longDescription?: boolean
    location?: boolean
    website?: boolean
    email?: boolean
    phone?: boolean
    founded?: boolean
    totalCourses?: boolean
    totalStudents?: boolean
    totalInstructors?: boolean
    rating?: boolean
    reviewCount?: boolean
    specialties?: boolean
    featured?: boolean
    verified?: boolean
    accreditation?: boolean
    mission?: boolean
    vision?: boolean
    achievements?: boolean
    partnerships?: boolean
    social?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    logo?: boolean
    coverImage?: boolean
    description?: boolean
    longDescription?: boolean
    location?: boolean
    website?: boolean
    email?: boolean
    phone?: boolean
    founded?: boolean
    totalCourses?: boolean
    totalStudents?: boolean
    totalInstructors?: boolean
    rating?: boolean
    reviewCount?: boolean
    specialties?: boolean
    featured?: boolean
    verified?: boolean
    accreditation?: boolean
    mission?: boolean
    vision?: boolean
    achievements?: boolean
    partnerships?: boolean
    social?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    logo?: boolean
    coverImage?: boolean
    description?: boolean
    longDescription?: boolean
    location?: boolean
    website?: boolean
    email?: boolean
    phone?: boolean
    founded?: boolean
    totalCourses?: boolean
    totalStudents?: boolean
    totalInstructors?: boolean
    rating?: boolean
    reviewCount?: boolean
    specialties?: boolean
    featured?: boolean
    verified?: boolean
    accreditation?: boolean
    mission?: boolean
    vision?: boolean
    achievements?: boolean
    partnerships?: boolean
    social?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "type" | "logo" | "coverImage" | "description" | "longDescription" | "location" | "website" | "email" | "phone" | "founded" | "totalCourses" | "totalStudents" | "totalInstructors" | "rating" | "reviewCount" | "specialties" | "featured" | "verified" | "accreditation" | "mission" | "vision" | "achievements" | "partnerships" | "social", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructors?: boolean | Organization$instructorsArgs<ExtArgs>
    reviews?: boolean | Organization$reviewsArgs<ExtArgs>
    stats?: boolean | Organization$statsArgs<ExtArgs>
    contact?: boolean | Organization$contactArgs<ExtArgs>
    members?: boolean | Organization$membersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      instructors: Prisma.$InstructorPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      stats: Prisma.$OrgStatsPayload<ExtArgs> | null
      contact: Prisma.$ContactPayload<ExtArgs> | null
      members: Prisma.$OrganizationMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      type: $Enums.OrgType
      logo: string
      coverImage: string
      description: string
      longDescription: string
      location: string
      website: string
      email: string
      phone: string
      founded: string
      totalCourses: number
      totalStudents: number
      totalInstructors: number
      rating: number
      reviewCount: number
      specialties: string[]
      featured: boolean
      verified: boolean
      accreditation: string[]
      mission: string
      vision: string
      achievements: string[]
      partnerships: string[]
      social: Prisma.JsonValue
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructors<T extends Organization$instructorsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$instructorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Organization$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stats<T extends Organization$statsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$statsArgs<ExtArgs>>): Prisma__OrgStatsClient<$Result.GetResult<Prisma.$OrgStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contact<T extends Organization$contactArgs<ExtArgs> = {}>(args?: Subset<T, Organization$contactArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends Organization$membersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly userId: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly type: FieldRef<"Organization", 'OrgType'>
    readonly logo: FieldRef<"Organization", 'String'>
    readonly coverImage: FieldRef<"Organization", 'String'>
    readonly description: FieldRef<"Organization", 'String'>
    readonly longDescription: FieldRef<"Organization", 'String'>
    readonly location: FieldRef<"Organization", 'String'>
    readonly website: FieldRef<"Organization", 'String'>
    readonly email: FieldRef<"Organization", 'String'>
    readonly phone: FieldRef<"Organization", 'String'>
    readonly founded: FieldRef<"Organization", 'String'>
    readonly totalCourses: FieldRef<"Organization", 'Int'>
    readonly totalStudents: FieldRef<"Organization", 'Int'>
    readonly totalInstructors: FieldRef<"Organization", 'Int'>
    readonly rating: FieldRef<"Organization", 'Float'>
    readonly reviewCount: FieldRef<"Organization", 'Int'>
    readonly specialties: FieldRef<"Organization", 'String[]'>
    readonly featured: FieldRef<"Organization", 'Boolean'>
    readonly verified: FieldRef<"Organization", 'Boolean'>
    readonly accreditation: FieldRef<"Organization", 'String[]'>
    readonly mission: FieldRef<"Organization", 'String'>
    readonly vision: FieldRef<"Organization", 'String'>
    readonly achievements: FieldRef<"Organization", 'String[]'>
    readonly partnerships: FieldRef<"Organization", 'String[]'>
    readonly social: FieldRef<"Organization", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.instructors
   */
  export type Organization$instructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    where?: InstructorWhereInput
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    cursor?: InstructorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Organization.reviews
   */
  export type Organization$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Organization.stats
   */
  export type Organization$statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgStats
     */
    select?: OrgStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgStats
     */
    omit?: OrgStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgStatsInclude<ExtArgs> | null
    where?: OrgStatsWhereInput
  }

  /**
   * Organization.contact
   */
  export type Organization$contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
  }

  /**
   * Organization.members
   */
  export type Organization$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    cursor?: OrganizationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model OrgStats
   */

  export type AggregateOrgStats = {
    _count: OrgStatsCountAggregateOutputType | null
    _min: OrgStatsMinAggregateOutputType | null
    _max: OrgStatsMaxAggregateOutputType | null
  }

  export type OrgStatsMinAggregateOutputType = {
    id: string | null
    graduationRate: string | null
    employmentRate: string | null
    averageSalary: string | null
    studentSatisfaction: string | null
    organizationId: string | null
  }

  export type OrgStatsMaxAggregateOutputType = {
    id: string | null
    graduationRate: string | null
    employmentRate: string | null
    averageSalary: string | null
    studentSatisfaction: string | null
    organizationId: string | null
  }

  export type OrgStatsCountAggregateOutputType = {
    id: number
    graduationRate: number
    employmentRate: number
    averageSalary: number
    studentSatisfaction: number
    organizationId: number
    _all: number
  }


  export type OrgStatsMinAggregateInputType = {
    id?: true
    graduationRate?: true
    employmentRate?: true
    averageSalary?: true
    studentSatisfaction?: true
    organizationId?: true
  }

  export type OrgStatsMaxAggregateInputType = {
    id?: true
    graduationRate?: true
    employmentRate?: true
    averageSalary?: true
    studentSatisfaction?: true
    organizationId?: true
  }

  export type OrgStatsCountAggregateInputType = {
    id?: true
    graduationRate?: true
    employmentRate?: true
    averageSalary?: true
    studentSatisfaction?: true
    organizationId?: true
    _all?: true
  }

  export type OrgStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrgStats to aggregate.
     */
    where?: OrgStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgStats to fetch.
     */
    orderBy?: OrgStatsOrderByWithRelationInput | OrgStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrgStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrgStats
    **/
    _count?: true | OrgStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrgStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrgStatsMaxAggregateInputType
  }

  export type GetOrgStatsAggregateType<T extends OrgStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrgStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrgStats[P]>
      : GetScalarType<T[P], AggregateOrgStats[P]>
  }




  export type OrgStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgStatsWhereInput
    orderBy?: OrgStatsOrderByWithAggregationInput | OrgStatsOrderByWithAggregationInput[]
    by: OrgStatsScalarFieldEnum[] | OrgStatsScalarFieldEnum
    having?: OrgStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrgStatsCountAggregateInputType | true
    _min?: OrgStatsMinAggregateInputType
    _max?: OrgStatsMaxAggregateInputType
  }

  export type OrgStatsGroupByOutputType = {
    id: string
    graduationRate: string | null
    employmentRate: string | null
    averageSalary: string | null
    studentSatisfaction: string
    organizationId: string
    _count: OrgStatsCountAggregateOutputType | null
    _min: OrgStatsMinAggregateOutputType | null
    _max: OrgStatsMaxAggregateOutputType | null
  }

  type GetOrgStatsGroupByPayload<T extends OrgStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrgStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrgStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrgStatsGroupByOutputType[P]>
            : GetScalarType<T[P], OrgStatsGroupByOutputType[P]>
        }
      >
    >


  export type OrgStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    graduationRate?: boolean
    employmentRate?: boolean
    averageSalary?: boolean
    studentSatisfaction?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orgStats"]>

  export type OrgStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    graduationRate?: boolean
    employmentRate?: boolean
    averageSalary?: boolean
    studentSatisfaction?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orgStats"]>

  export type OrgStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    graduationRate?: boolean
    employmentRate?: boolean
    averageSalary?: boolean
    studentSatisfaction?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orgStats"]>

  export type OrgStatsSelectScalar = {
    id?: boolean
    graduationRate?: boolean
    employmentRate?: boolean
    averageSalary?: boolean
    studentSatisfaction?: boolean
    organizationId?: boolean
  }

  export type OrgStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "graduationRate" | "employmentRate" | "averageSalary" | "studentSatisfaction" | "organizationId", ExtArgs["result"]["orgStats"]>
  export type OrgStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrgStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrgStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $OrgStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrgStats"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      graduationRate: string | null
      employmentRate: string | null
      averageSalary: string | null
      studentSatisfaction: string
      organizationId: string
    }, ExtArgs["result"]["orgStats"]>
    composites: {}
  }

  type OrgStatsGetPayload<S extends boolean | null | undefined | OrgStatsDefaultArgs> = $Result.GetResult<Prisma.$OrgStatsPayload, S>

  type OrgStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrgStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrgStatsCountAggregateInputType | true
    }

  export interface OrgStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrgStats'], meta: { name: 'OrgStats' } }
    /**
     * Find zero or one OrgStats that matches the filter.
     * @param {OrgStatsFindUniqueArgs} args - Arguments to find a OrgStats
     * @example
     * // Get one OrgStats
     * const orgStats = await prisma.orgStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrgStatsFindUniqueArgs>(args: SelectSubset<T, OrgStatsFindUniqueArgs<ExtArgs>>): Prisma__OrgStatsClient<$Result.GetResult<Prisma.$OrgStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrgStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrgStatsFindUniqueOrThrowArgs} args - Arguments to find a OrgStats
     * @example
     * // Get one OrgStats
     * const orgStats = await prisma.orgStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrgStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrgStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrgStatsClient<$Result.GetResult<Prisma.$OrgStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrgStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgStatsFindFirstArgs} args - Arguments to find a OrgStats
     * @example
     * // Get one OrgStats
     * const orgStats = await prisma.orgStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrgStatsFindFirstArgs>(args?: SelectSubset<T, OrgStatsFindFirstArgs<ExtArgs>>): Prisma__OrgStatsClient<$Result.GetResult<Prisma.$OrgStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrgStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgStatsFindFirstOrThrowArgs} args - Arguments to find a OrgStats
     * @example
     * // Get one OrgStats
     * const orgStats = await prisma.orgStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrgStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrgStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrgStatsClient<$Result.GetResult<Prisma.$OrgStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrgStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrgStats
     * const orgStats = await prisma.orgStats.findMany()
     * 
     * // Get first 10 OrgStats
     * const orgStats = await prisma.orgStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orgStatsWithIdOnly = await prisma.orgStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrgStatsFindManyArgs>(args?: SelectSubset<T, OrgStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrgStats.
     * @param {OrgStatsCreateArgs} args - Arguments to create a OrgStats.
     * @example
     * // Create one OrgStats
     * const OrgStats = await prisma.orgStats.create({
     *   data: {
     *     // ... data to create a OrgStats
     *   }
     * })
     * 
     */
    create<T extends OrgStatsCreateArgs>(args: SelectSubset<T, OrgStatsCreateArgs<ExtArgs>>): Prisma__OrgStatsClient<$Result.GetResult<Prisma.$OrgStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrgStats.
     * @param {OrgStatsCreateManyArgs} args - Arguments to create many OrgStats.
     * @example
     * // Create many OrgStats
     * const orgStats = await prisma.orgStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrgStatsCreateManyArgs>(args?: SelectSubset<T, OrgStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrgStats and returns the data saved in the database.
     * @param {OrgStatsCreateManyAndReturnArgs} args - Arguments to create many OrgStats.
     * @example
     * // Create many OrgStats
     * const orgStats = await prisma.orgStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrgStats and only return the `id`
     * const orgStatsWithIdOnly = await prisma.orgStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrgStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, OrgStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrgStats.
     * @param {OrgStatsDeleteArgs} args - Arguments to delete one OrgStats.
     * @example
     * // Delete one OrgStats
     * const OrgStats = await prisma.orgStats.delete({
     *   where: {
     *     // ... filter to delete one OrgStats
     *   }
     * })
     * 
     */
    delete<T extends OrgStatsDeleteArgs>(args: SelectSubset<T, OrgStatsDeleteArgs<ExtArgs>>): Prisma__OrgStatsClient<$Result.GetResult<Prisma.$OrgStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrgStats.
     * @param {OrgStatsUpdateArgs} args - Arguments to update one OrgStats.
     * @example
     * // Update one OrgStats
     * const orgStats = await prisma.orgStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrgStatsUpdateArgs>(args: SelectSubset<T, OrgStatsUpdateArgs<ExtArgs>>): Prisma__OrgStatsClient<$Result.GetResult<Prisma.$OrgStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrgStats.
     * @param {OrgStatsDeleteManyArgs} args - Arguments to filter OrgStats to delete.
     * @example
     * // Delete a few OrgStats
     * const { count } = await prisma.orgStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrgStatsDeleteManyArgs>(args?: SelectSubset<T, OrgStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrgStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrgStats
     * const orgStats = await prisma.orgStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrgStatsUpdateManyArgs>(args: SelectSubset<T, OrgStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrgStats and returns the data updated in the database.
     * @param {OrgStatsUpdateManyAndReturnArgs} args - Arguments to update many OrgStats.
     * @example
     * // Update many OrgStats
     * const orgStats = await prisma.orgStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrgStats and only return the `id`
     * const orgStatsWithIdOnly = await prisma.orgStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrgStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, OrgStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrgStats.
     * @param {OrgStatsUpsertArgs} args - Arguments to update or create a OrgStats.
     * @example
     * // Update or create a OrgStats
     * const orgStats = await prisma.orgStats.upsert({
     *   create: {
     *     // ... data to create a OrgStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrgStats we want to update
     *   }
     * })
     */
    upsert<T extends OrgStatsUpsertArgs>(args: SelectSubset<T, OrgStatsUpsertArgs<ExtArgs>>): Prisma__OrgStatsClient<$Result.GetResult<Prisma.$OrgStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrgStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgStatsCountArgs} args - Arguments to filter OrgStats to count.
     * @example
     * // Count the number of OrgStats
     * const count = await prisma.orgStats.count({
     *   where: {
     *     // ... the filter for the OrgStats we want to count
     *   }
     * })
    **/
    count<T extends OrgStatsCountArgs>(
      args?: Subset<T, OrgStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrgStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrgStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrgStatsAggregateArgs>(args: Subset<T, OrgStatsAggregateArgs>): Prisma.PrismaPromise<GetOrgStatsAggregateType<T>>

    /**
     * Group by OrgStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrgStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrgStatsGroupByArgs['orderBy'] }
        : { orderBy?: OrgStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrgStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrgStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrgStats model
   */
  readonly fields: OrgStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrgStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrgStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrgStats model
   */
  interface OrgStatsFieldRefs {
    readonly id: FieldRef<"OrgStats", 'String'>
    readonly graduationRate: FieldRef<"OrgStats", 'String'>
    readonly employmentRate: FieldRef<"OrgStats", 'String'>
    readonly averageSalary: FieldRef<"OrgStats", 'String'>
    readonly studentSatisfaction: FieldRef<"OrgStats", 'String'>
    readonly organizationId: FieldRef<"OrgStats", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrgStats findUnique
   */
  export type OrgStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgStats
     */
    select?: OrgStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgStats
     */
    omit?: OrgStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgStatsInclude<ExtArgs> | null
    /**
     * Filter, which OrgStats to fetch.
     */
    where: OrgStatsWhereUniqueInput
  }

  /**
   * OrgStats findUniqueOrThrow
   */
  export type OrgStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgStats
     */
    select?: OrgStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgStats
     */
    omit?: OrgStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgStatsInclude<ExtArgs> | null
    /**
     * Filter, which OrgStats to fetch.
     */
    where: OrgStatsWhereUniqueInput
  }

  /**
   * OrgStats findFirst
   */
  export type OrgStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgStats
     */
    select?: OrgStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgStats
     */
    omit?: OrgStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgStatsInclude<ExtArgs> | null
    /**
     * Filter, which OrgStats to fetch.
     */
    where?: OrgStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgStats to fetch.
     */
    orderBy?: OrgStatsOrderByWithRelationInput | OrgStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrgStats.
     */
    cursor?: OrgStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrgStats.
     */
    distinct?: OrgStatsScalarFieldEnum | OrgStatsScalarFieldEnum[]
  }

  /**
   * OrgStats findFirstOrThrow
   */
  export type OrgStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgStats
     */
    select?: OrgStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgStats
     */
    omit?: OrgStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgStatsInclude<ExtArgs> | null
    /**
     * Filter, which OrgStats to fetch.
     */
    where?: OrgStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgStats to fetch.
     */
    orderBy?: OrgStatsOrderByWithRelationInput | OrgStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrgStats.
     */
    cursor?: OrgStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrgStats.
     */
    distinct?: OrgStatsScalarFieldEnum | OrgStatsScalarFieldEnum[]
  }

  /**
   * OrgStats findMany
   */
  export type OrgStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgStats
     */
    select?: OrgStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgStats
     */
    omit?: OrgStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgStatsInclude<ExtArgs> | null
    /**
     * Filter, which OrgStats to fetch.
     */
    where?: OrgStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgStats to fetch.
     */
    orderBy?: OrgStatsOrderByWithRelationInput | OrgStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrgStats.
     */
    cursor?: OrgStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgStats.
     */
    skip?: number
    distinct?: OrgStatsScalarFieldEnum | OrgStatsScalarFieldEnum[]
  }

  /**
   * OrgStats create
   */
  export type OrgStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgStats
     */
    select?: OrgStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgStats
     */
    omit?: OrgStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrgStats.
     */
    data: XOR<OrgStatsCreateInput, OrgStatsUncheckedCreateInput>
  }

  /**
   * OrgStats createMany
   */
  export type OrgStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrgStats.
     */
    data: OrgStatsCreateManyInput | OrgStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrgStats createManyAndReturn
   */
  export type OrgStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgStats
     */
    select?: OrgStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrgStats
     */
    omit?: OrgStatsOmit<ExtArgs> | null
    /**
     * The data used to create many OrgStats.
     */
    data: OrgStatsCreateManyInput | OrgStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrgStats update
   */
  export type OrgStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgStats
     */
    select?: OrgStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgStats
     */
    omit?: OrgStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrgStats.
     */
    data: XOR<OrgStatsUpdateInput, OrgStatsUncheckedUpdateInput>
    /**
     * Choose, which OrgStats to update.
     */
    where: OrgStatsWhereUniqueInput
  }

  /**
   * OrgStats updateMany
   */
  export type OrgStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrgStats.
     */
    data: XOR<OrgStatsUpdateManyMutationInput, OrgStatsUncheckedUpdateManyInput>
    /**
     * Filter which OrgStats to update
     */
    where?: OrgStatsWhereInput
    /**
     * Limit how many OrgStats to update.
     */
    limit?: number
  }

  /**
   * OrgStats updateManyAndReturn
   */
  export type OrgStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgStats
     */
    select?: OrgStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrgStats
     */
    omit?: OrgStatsOmit<ExtArgs> | null
    /**
     * The data used to update OrgStats.
     */
    data: XOR<OrgStatsUpdateManyMutationInput, OrgStatsUncheckedUpdateManyInput>
    /**
     * Filter which OrgStats to update
     */
    where?: OrgStatsWhereInput
    /**
     * Limit how many OrgStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrgStats upsert
   */
  export type OrgStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgStats
     */
    select?: OrgStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgStats
     */
    omit?: OrgStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrgStats to update in case it exists.
     */
    where: OrgStatsWhereUniqueInput
    /**
     * In case the OrgStats found by the `where` argument doesn't exist, create a new OrgStats with this data.
     */
    create: XOR<OrgStatsCreateInput, OrgStatsUncheckedCreateInput>
    /**
     * In case the OrgStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrgStatsUpdateInput, OrgStatsUncheckedUpdateInput>
  }

  /**
   * OrgStats delete
   */
  export type OrgStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgStats
     */
    select?: OrgStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgStats
     */
    omit?: OrgStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgStatsInclude<ExtArgs> | null
    /**
     * Filter which OrgStats to delete.
     */
    where: OrgStatsWhereUniqueInput
  }

  /**
   * OrgStats deleteMany
   */
  export type OrgStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrgStats to delete
     */
    where?: OrgStatsWhereInput
    /**
     * Limit how many OrgStats to delete.
     */
    limit?: number
  }

  /**
   * OrgStats without action
   */
  export type OrgStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgStats
     */
    select?: OrgStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgStats
     */
    omit?: OrgStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgStatsInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    organizationId: string | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    organizationId: string | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    address: number
    city: number
    state: number
    zipCode: number
    country: number
    organizationId: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    organizationId?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    organizationId?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    organizationId?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
    organizationId: string
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    organizationId?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "city" | "state" | "zipCode" | "country" | "organizationId", ExtArgs["result"]["contact"]>
  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      city: string
      state: string
      zipCode: string
      country: string
      organizationId: string
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly address: FieldRef<"Contact", 'String'>
    readonly city: FieldRef<"Contact", 'String'>
    readonly state: FieldRef<"Contact", 'String'>
    readonly zipCode: FieldRef<"Contact", 'String'>
    readonly country: FieldRef<"Contact", 'String'>
    readonly organizationId: FieldRef<"Contact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    userName: string | null
    userAvatar: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    instructorId: string | null
    organizationId: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    userAvatar: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    instructorId: string | null
    organizationId: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userName: number
    userAvatar: number
    rating: number
    comment: number
    createdAt: number
    instructorId: number
    organizationId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userName?: true
    userAvatar?: true
    rating?: true
    comment?: true
    createdAt?: true
    instructorId?: true
    organizationId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userName?: true
    userAvatar?: true
    rating?: true
    comment?: true
    createdAt?: true
    instructorId?: true
    organizationId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userName?: true
    userAvatar?: true
    rating?: true
    comment?: true
    createdAt?: true
    instructorId?: true
    organizationId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    userName: string
    userAvatar: string
    rating: number
    comment: string
    createdAt: Date
    instructorId: string | null
    organizationId: string | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    userAvatar?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    instructorId?: boolean
    organizationId?: boolean
    instructor?: boolean | Review$instructorArgs<ExtArgs>
    organization?: boolean | Review$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    userAvatar?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    instructorId?: boolean
    organizationId?: boolean
    instructor?: boolean | Review$instructorArgs<ExtArgs>
    organization?: boolean | Review$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    userAvatar?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    instructorId?: boolean
    organizationId?: boolean
    instructor?: boolean | Review$instructorArgs<ExtArgs>
    organization?: boolean | Review$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    userName?: boolean
    userAvatar?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    instructorId?: boolean
    organizationId?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "userAvatar" | "rating" | "comment" | "createdAt" | "instructorId" | "organizationId", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | Review$instructorArgs<ExtArgs>
    organization?: boolean | Review$organizationArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | Review$instructorArgs<ExtArgs>
    organization?: boolean | Review$organizationArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | Review$instructorArgs<ExtArgs>
    organization?: boolean | Review$organizationArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      instructor: Prisma.$InstructorPayload<ExtArgs> | null
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      userAvatar: string
      rating: number
      comment: string
      createdAt: Date
      instructorId: string | null
      organizationId: string | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructor<T extends Review$instructorArgs<ExtArgs> = {}>(args?: Subset<T, Review$instructorArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    organization<T extends Review$organizationArgs<ExtArgs> = {}>(args?: Subset<T, Review$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly userName: FieldRef<"Review", 'String'>
    readonly userAvatar: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Float'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly instructorId: FieldRef<"Review", 'String'>
    readonly organizationId: FieldRef<"Review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.instructor
   */
  export type Review$instructorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    where?: InstructorWhereInput
  }

  /**
   * Review.organization
   */
  export type Review$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Instructor
   */

  export type AggregateInstructor = {
    _count: InstructorCountAggregateOutputType | null
    _avg: InstructorAvgAggregateOutputType | null
    _sum: InstructorSumAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  export type InstructorAvgAggregateOutputType = {
    rating: number | null
    totalStudents: number | null
    totalCourses: number | null
  }

  export type InstructorSumAggregateOutputType = {
    rating: number | null
    totalStudents: number | null
    totalCourses: number | null
  }

  export type InstructorMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    title: string | null
    avatar: string | null
    coverImage: string | null
    bio: string | null
    featured: boolean | null
    longBio: string | null
    rating: number | null
    totalStudents: number | null
    totalCourses: number | null
    experience: string | null
    location: string | null
    joinedDate: string | null
    organizationId: string | null
  }

  export type InstructorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    title: string | null
    avatar: string | null
    coverImage: string | null
    bio: string | null
    featured: boolean | null
    longBio: string | null
    rating: number | null
    totalStudents: number | null
    totalCourses: number | null
    experience: string | null
    location: string | null
    joinedDate: string | null
    organizationId: string | null
  }

  export type InstructorCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    title: number
    avatar: number
    coverImage: number
    bio: number
    featured: number
    longBio: number
    rating: number
    totalStudents: number
    totalCourses: number
    experience: number
    location: number
    joinedDate: number
    specialties: number
    achievements: number
    education: number
    social: number
    organizationId: number
    _all: number
  }


  export type InstructorAvgAggregateInputType = {
    rating?: true
    totalStudents?: true
    totalCourses?: true
  }

  export type InstructorSumAggregateInputType = {
    rating?: true
    totalStudents?: true
    totalCourses?: true
  }

  export type InstructorMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    title?: true
    avatar?: true
    coverImage?: true
    bio?: true
    featured?: true
    longBio?: true
    rating?: true
    totalStudents?: true
    totalCourses?: true
    experience?: true
    location?: true
    joinedDate?: true
    organizationId?: true
  }

  export type InstructorMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    title?: true
    avatar?: true
    coverImage?: true
    bio?: true
    featured?: true
    longBio?: true
    rating?: true
    totalStudents?: true
    totalCourses?: true
    experience?: true
    location?: true
    joinedDate?: true
    organizationId?: true
  }

  export type InstructorCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    title?: true
    avatar?: true
    coverImage?: true
    bio?: true
    featured?: true
    longBio?: true
    rating?: true
    totalStudents?: true
    totalCourses?: true
    experience?: true
    location?: true
    joinedDate?: true
    specialties?: true
    achievements?: true
    education?: true
    social?: true
    organizationId?: true
    _all?: true
  }

  export type InstructorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructor to aggregate.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instructors
    **/
    _count?: true | InstructorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstructorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstructorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorMaxAggregateInputType
  }

  export type GetInstructorAggregateType<T extends InstructorAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructor[P]>
      : GetScalarType<T[P], AggregateInstructor[P]>
  }




  export type InstructorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorWhereInput
    orderBy?: InstructorOrderByWithAggregationInput | InstructorOrderByWithAggregationInput[]
    by: InstructorScalarFieldEnum[] | InstructorScalarFieldEnum
    having?: InstructorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorCountAggregateInputType | true
    _avg?: InstructorAvgAggregateInputType
    _sum?: InstructorSumAggregateInputType
    _min?: InstructorMinAggregateInputType
    _max?: InstructorMaxAggregateInputType
  }

  export type InstructorGroupByOutputType = {
    id: string
    userId: string
    name: string
    title: string
    avatar: string
    coverImage: string | null
    bio: string
    featured: boolean | null
    longBio: string | null
    rating: number
    totalStudents: number
    totalCourses: number
    experience: string | null
    location: string | null
    joinedDate: string | null
    specialties: string[]
    achievements: string[]
    education: string[]
    social: JsonValue
    organizationId: string | null
    _count: InstructorCountAggregateOutputType | null
    _avg: InstructorAvgAggregateOutputType | null
    _sum: InstructorSumAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  type GetInstructorGroupByPayload<T extends InstructorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorGroupByOutputType[P]>
        }
      >
    >


  export type InstructorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    title?: boolean
    avatar?: boolean
    coverImage?: boolean
    bio?: boolean
    featured?: boolean
    longBio?: boolean
    rating?: boolean
    totalStudents?: boolean
    totalCourses?: boolean
    experience?: boolean
    location?: boolean
    joinedDate?: boolean
    specialties?: boolean
    achievements?: boolean
    education?: boolean
    social?: boolean
    organizationId?: boolean
    workExperience?: boolean | Instructor$workExperienceArgs<ExtArgs>
    organization?: boolean | Instructor$organizationArgs<ExtArgs>
    reviews?: boolean | Instructor$reviewsArgs<ExtArgs>
    stats?: boolean | Instructor$statsArgs<ExtArgs>
    _count?: boolean | InstructorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    title?: boolean
    avatar?: boolean
    coverImage?: boolean
    bio?: boolean
    featured?: boolean
    longBio?: boolean
    rating?: boolean
    totalStudents?: boolean
    totalCourses?: boolean
    experience?: boolean
    location?: boolean
    joinedDate?: boolean
    specialties?: boolean
    achievements?: boolean
    education?: boolean
    social?: boolean
    organizationId?: boolean
    organization?: boolean | Instructor$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    title?: boolean
    avatar?: boolean
    coverImage?: boolean
    bio?: boolean
    featured?: boolean
    longBio?: boolean
    rating?: boolean
    totalStudents?: boolean
    totalCourses?: boolean
    experience?: boolean
    location?: boolean
    joinedDate?: boolean
    specialties?: boolean
    achievements?: boolean
    education?: boolean
    social?: boolean
    organizationId?: boolean
    organization?: boolean | Instructor$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    title?: boolean
    avatar?: boolean
    coverImage?: boolean
    bio?: boolean
    featured?: boolean
    longBio?: boolean
    rating?: boolean
    totalStudents?: boolean
    totalCourses?: boolean
    experience?: boolean
    location?: boolean
    joinedDate?: boolean
    specialties?: boolean
    achievements?: boolean
    education?: boolean
    social?: boolean
    organizationId?: boolean
  }

  export type InstructorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "title" | "avatar" | "coverImage" | "bio" | "featured" | "longBio" | "rating" | "totalStudents" | "totalCourses" | "experience" | "location" | "joinedDate" | "specialties" | "achievements" | "education" | "social" | "organizationId", ExtArgs["result"]["instructor"]>
  export type InstructorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workExperience?: boolean | Instructor$workExperienceArgs<ExtArgs>
    organization?: boolean | Instructor$organizationArgs<ExtArgs>
    reviews?: boolean | Instructor$reviewsArgs<ExtArgs>
    stats?: boolean | Instructor$statsArgs<ExtArgs>
    _count?: boolean | InstructorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstructorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Instructor$organizationArgs<ExtArgs>
  }
  export type InstructorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Instructor$organizationArgs<ExtArgs>
  }

  export type $InstructorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instructor"
    objects: {
      workExperience: Prisma.$WorkExperiencePayload<ExtArgs>[]
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      stats: Prisma.$InstructorStatsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      title: string
      avatar: string
      coverImage: string | null
      bio: string
      featured: boolean | null
      longBio: string | null
      rating: number
      totalStudents: number
      totalCourses: number
      experience: string | null
      location: string | null
      joinedDate: string | null
      specialties: string[]
      achievements: string[]
      education: string[]
      social: Prisma.JsonValue
      organizationId: string | null
    }, ExtArgs["result"]["instructor"]>
    composites: {}
  }

  type InstructorGetPayload<S extends boolean | null | undefined | InstructorDefaultArgs> = $Result.GetResult<Prisma.$InstructorPayload, S>

  type InstructorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructorCountAggregateInputType | true
    }

  export interface InstructorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instructor'], meta: { name: 'Instructor' } }
    /**
     * Find zero or one Instructor that matches the filter.
     * @param {InstructorFindUniqueArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructorFindUniqueArgs>(args: SelectSubset<T, InstructorFindUniqueArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instructor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructorFindUniqueOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructorFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructorFindFirstArgs>(args?: SelectSubset<T, InstructorFindFirstArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructorFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructorFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instructors
     * const instructors = await prisma.instructor.findMany()
     * 
     * // Get first 10 Instructors
     * const instructors = await prisma.instructor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructorWithIdOnly = await prisma.instructor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstructorFindManyArgs>(args?: SelectSubset<T, InstructorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instructor.
     * @param {InstructorCreateArgs} args - Arguments to create a Instructor.
     * @example
     * // Create one Instructor
     * const Instructor = await prisma.instructor.create({
     *   data: {
     *     // ... data to create a Instructor
     *   }
     * })
     * 
     */
    create<T extends InstructorCreateArgs>(args: SelectSubset<T, InstructorCreateArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instructors.
     * @param {InstructorCreateManyArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructor = await prisma.instructor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructorCreateManyArgs>(args?: SelectSubset<T, InstructorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instructors and returns the data saved in the database.
     * @param {InstructorCreateManyAndReturnArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructor = await prisma.instructor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instructors and only return the `id`
     * const instructorWithIdOnly = await prisma.instructor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructorCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instructor.
     * @param {InstructorDeleteArgs} args - Arguments to delete one Instructor.
     * @example
     * // Delete one Instructor
     * const Instructor = await prisma.instructor.delete({
     *   where: {
     *     // ... filter to delete one Instructor
     *   }
     * })
     * 
     */
    delete<T extends InstructorDeleteArgs>(args: SelectSubset<T, InstructorDeleteArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instructor.
     * @param {InstructorUpdateArgs} args - Arguments to update one Instructor.
     * @example
     * // Update one Instructor
     * const instructor = await prisma.instructor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructorUpdateArgs>(args: SelectSubset<T, InstructorUpdateArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instructors.
     * @param {InstructorDeleteManyArgs} args - Arguments to filter Instructors to delete.
     * @example
     * // Delete a few Instructors
     * const { count } = await prisma.instructor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructorDeleteManyArgs>(args?: SelectSubset<T, InstructorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instructors
     * const instructor = await prisma.instructor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructorUpdateManyArgs>(args: SelectSubset<T, InstructorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors and returns the data updated in the database.
     * @param {InstructorUpdateManyAndReturnArgs} args - Arguments to update many Instructors.
     * @example
     * // Update many Instructors
     * const instructor = await prisma.instructor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instructors and only return the `id`
     * const instructorWithIdOnly = await prisma.instructor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstructorUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instructor.
     * @param {InstructorUpsertArgs} args - Arguments to update or create a Instructor.
     * @example
     * // Update or create a Instructor
     * const instructor = await prisma.instructor.upsert({
     *   create: {
     *     // ... data to create a Instructor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instructor we want to update
     *   }
     * })
     */
    upsert<T extends InstructorUpsertArgs>(args: SelectSubset<T, InstructorUpsertArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorCountArgs} args - Arguments to filter Instructors to count.
     * @example
     * // Count the number of Instructors
     * const count = await prisma.instructor.count({
     *   where: {
     *     // ... the filter for the Instructors we want to count
     *   }
     * })
    **/
    count<T extends InstructorCountArgs>(
      args?: Subset<T, InstructorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstructorAggregateArgs>(args: Subset<T, InstructorAggregateArgs>): Prisma.PrismaPromise<GetInstructorAggregateType<T>>

    /**
     * Group by Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstructorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructorGroupByArgs['orderBy'] }
        : { orderBy?: InstructorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstructorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instructor model
   */
  readonly fields: InstructorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instructor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workExperience<T extends Instructor$workExperienceArgs<ExtArgs> = {}>(args?: Subset<T, Instructor$workExperienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organization<T extends Instructor$organizationArgs<ExtArgs> = {}>(args?: Subset<T, Instructor$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Instructor$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Instructor$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stats<T extends Instructor$statsArgs<ExtArgs> = {}>(args?: Subset<T, Instructor$statsArgs<ExtArgs>>): Prisma__InstructorStatsClient<$Result.GetResult<Prisma.$InstructorStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Instructor model
   */
  interface InstructorFieldRefs {
    readonly id: FieldRef<"Instructor", 'String'>
    readonly userId: FieldRef<"Instructor", 'String'>
    readonly name: FieldRef<"Instructor", 'String'>
    readonly title: FieldRef<"Instructor", 'String'>
    readonly avatar: FieldRef<"Instructor", 'String'>
    readonly coverImage: FieldRef<"Instructor", 'String'>
    readonly bio: FieldRef<"Instructor", 'String'>
    readonly featured: FieldRef<"Instructor", 'Boolean'>
    readonly longBio: FieldRef<"Instructor", 'String'>
    readonly rating: FieldRef<"Instructor", 'Float'>
    readonly totalStudents: FieldRef<"Instructor", 'Int'>
    readonly totalCourses: FieldRef<"Instructor", 'Int'>
    readonly experience: FieldRef<"Instructor", 'String'>
    readonly location: FieldRef<"Instructor", 'String'>
    readonly joinedDate: FieldRef<"Instructor", 'String'>
    readonly specialties: FieldRef<"Instructor", 'String[]'>
    readonly achievements: FieldRef<"Instructor", 'String[]'>
    readonly education: FieldRef<"Instructor", 'String[]'>
    readonly social: FieldRef<"Instructor", 'Json'>
    readonly organizationId: FieldRef<"Instructor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instructor findUnique
   */
  export type InstructorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor findUniqueOrThrow
   */
  export type InstructorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor findFirst
   */
  export type InstructorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor findFirstOrThrow
   */
  export type InstructorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor findMany
   */
  export type InstructorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructors to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor create
   */
  export type InstructorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The data needed to create a Instructor.
     */
    data: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
  }

  /**
   * Instructor createMany
   */
  export type InstructorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instructors.
     */
    data: InstructorCreateManyInput | InstructorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instructor createManyAndReturn
   */
  export type InstructorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * The data used to create many Instructors.
     */
    data: InstructorCreateManyInput | InstructorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instructor update
   */
  export type InstructorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The data needed to update a Instructor.
     */
    data: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
    /**
     * Choose, which Instructor to update.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor updateMany
   */
  export type InstructorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instructors.
     */
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyInput>
    /**
     * Filter which Instructors to update
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to update.
     */
    limit?: number
  }

  /**
   * Instructor updateManyAndReturn
   */
  export type InstructorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * The data used to update Instructors.
     */
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyInput>
    /**
     * Filter which Instructors to update
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instructor upsert
   */
  export type InstructorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The filter to search for the Instructor to update in case it exists.
     */
    where: InstructorWhereUniqueInput
    /**
     * In case the Instructor found by the `where` argument doesn't exist, create a new Instructor with this data.
     */
    create: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
    /**
     * In case the Instructor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
  }

  /**
   * Instructor delete
   */
  export type InstructorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter which Instructor to delete.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor deleteMany
   */
  export type InstructorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructors to delete
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to delete.
     */
    limit?: number
  }

  /**
   * Instructor.workExperience
   */
  export type Instructor$workExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    where?: WorkExperienceWhereInput
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    cursor?: WorkExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * Instructor.organization
   */
  export type Instructor$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Instructor.reviews
   */
  export type Instructor$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Instructor.stats
   */
  export type Instructor$statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorStats
     */
    select?: InstructorStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorStats
     */
    omit?: InstructorStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorStatsInclude<ExtArgs> | null
    where?: InstructorStatsWhereInput
  }

  /**
   * Instructor without action
   */
  export type InstructorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
  }


  /**
   * Model WorkExperience
   */

  export type AggregateWorkExperience = {
    _count: WorkExperienceCountAggregateOutputType | null
    _min: WorkExperienceMinAggregateOutputType | null
    _max: WorkExperienceMaxAggregateOutputType | null
  }

  export type WorkExperienceMinAggregateOutputType = {
    id: string | null
    company: string | null
    position: string | null
    duration: string | null
    instructorId: string | null
  }

  export type WorkExperienceMaxAggregateOutputType = {
    id: string | null
    company: string | null
    position: string | null
    duration: string | null
    instructorId: string | null
  }

  export type WorkExperienceCountAggregateOutputType = {
    id: number
    company: number
    position: number
    duration: number
    instructorId: number
    _all: number
  }


  export type WorkExperienceMinAggregateInputType = {
    id?: true
    company?: true
    position?: true
    duration?: true
    instructorId?: true
  }

  export type WorkExperienceMaxAggregateInputType = {
    id?: true
    company?: true
    position?: true
    duration?: true
    instructorId?: true
  }

  export type WorkExperienceCountAggregateInputType = {
    id?: true
    company?: true
    position?: true
    duration?: true
    instructorId?: true
    _all?: true
  }

  export type WorkExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkExperience to aggregate.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkExperiences
    **/
    _count?: true | WorkExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkExperienceMaxAggregateInputType
  }

  export type GetWorkExperienceAggregateType<T extends WorkExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkExperience[P]>
      : GetScalarType<T[P], AggregateWorkExperience[P]>
  }




  export type WorkExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkExperienceWhereInput
    orderBy?: WorkExperienceOrderByWithAggregationInput | WorkExperienceOrderByWithAggregationInput[]
    by: WorkExperienceScalarFieldEnum[] | WorkExperienceScalarFieldEnum
    having?: WorkExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkExperienceCountAggregateInputType | true
    _min?: WorkExperienceMinAggregateInputType
    _max?: WorkExperienceMaxAggregateInputType
  }

  export type WorkExperienceGroupByOutputType = {
    id: string
    company: string
    position: string
    duration: string
    instructorId: string
    _count: WorkExperienceCountAggregateOutputType | null
    _min: WorkExperienceMinAggregateOutputType | null
    _max: WorkExperienceMaxAggregateOutputType | null
  }

  type GetWorkExperienceGroupByPayload<T extends WorkExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkExperienceGroupByOutputType[P]>
        }
      >
    >


  export type WorkExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    position?: boolean
    duration?: boolean
    instructorId?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>

  export type WorkExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    position?: boolean
    duration?: boolean
    instructorId?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>

  export type WorkExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    position?: boolean
    duration?: boolean
    instructorId?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>

  export type WorkExperienceSelectScalar = {
    id?: boolean
    company?: boolean
    position?: boolean
    duration?: boolean
    instructorId?: boolean
  }

  export type WorkExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company" | "position" | "duration" | "instructorId", ExtArgs["result"]["workExperience"]>
  export type WorkExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }
  export type WorkExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }
  export type WorkExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }

  export type $WorkExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkExperience"
    objects: {
      instructor: Prisma.$InstructorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company: string
      position: string
      duration: string
      instructorId: string
    }, ExtArgs["result"]["workExperience"]>
    composites: {}
  }

  type WorkExperienceGetPayload<S extends boolean | null | undefined | WorkExperienceDefaultArgs> = $Result.GetResult<Prisma.$WorkExperiencePayload, S>

  type WorkExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkExperienceCountAggregateInputType | true
    }

  export interface WorkExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkExperience'], meta: { name: 'WorkExperience' } }
    /**
     * Find zero or one WorkExperience that matches the filter.
     * @param {WorkExperienceFindUniqueArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkExperienceFindUniqueArgs>(args: SelectSubset<T, WorkExperienceFindUniqueArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkExperience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkExperienceFindUniqueOrThrowArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindFirstArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkExperienceFindFirstArgs>(args?: SelectSubset<T, WorkExperienceFindFirstArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindFirstOrThrowArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkExperiences
     * const workExperiences = await prisma.workExperience.findMany()
     * 
     * // Get first 10 WorkExperiences
     * const workExperiences = await prisma.workExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workExperienceWithIdOnly = await prisma.workExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkExperienceFindManyArgs>(args?: SelectSubset<T, WorkExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkExperience.
     * @param {WorkExperienceCreateArgs} args - Arguments to create a WorkExperience.
     * @example
     * // Create one WorkExperience
     * const WorkExperience = await prisma.workExperience.create({
     *   data: {
     *     // ... data to create a WorkExperience
     *   }
     * })
     * 
     */
    create<T extends WorkExperienceCreateArgs>(args: SelectSubset<T, WorkExperienceCreateArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkExperiences.
     * @param {WorkExperienceCreateManyArgs} args - Arguments to create many WorkExperiences.
     * @example
     * // Create many WorkExperiences
     * const workExperience = await prisma.workExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkExperienceCreateManyArgs>(args?: SelectSubset<T, WorkExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkExperiences and returns the data saved in the database.
     * @param {WorkExperienceCreateManyAndReturnArgs} args - Arguments to create many WorkExperiences.
     * @example
     * // Create many WorkExperiences
     * const workExperience = await prisma.workExperience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkExperiences and only return the `id`
     * const workExperienceWithIdOnly = await prisma.workExperience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkExperience.
     * @param {WorkExperienceDeleteArgs} args - Arguments to delete one WorkExperience.
     * @example
     * // Delete one WorkExperience
     * const WorkExperience = await prisma.workExperience.delete({
     *   where: {
     *     // ... filter to delete one WorkExperience
     *   }
     * })
     * 
     */
    delete<T extends WorkExperienceDeleteArgs>(args: SelectSubset<T, WorkExperienceDeleteArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkExperience.
     * @param {WorkExperienceUpdateArgs} args - Arguments to update one WorkExperience.
     * @example
     * // Update one WorkExperience
     * const workExperience = await prisma.workExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkExperienceUpdateArgs>(args: SelectSubset<T, WorkExperienceUpdateArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkExperiences.
     * @param {WorkExperienceDeleteManyArgs} args - Arguments to filter WorkExperiences to delete.
     * @example
     * // Delete a few WorkExperiences
     * const { count } = await prisma.workExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkExperienceDeleteManyArgs>(args?: SelectSubset<T, WorkExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkExperiences
     * const workExperience = await prisma.workExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkExperienceUpdateManyArgs>(args: SelectSubset<T, WorkExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkExperiences and returns the data updated in the database.
     * @param {WorkExperienceUpdateManyAndReturnArgs} args - Arguments to update many WorkExperiences.
     * @example
     * // Update many WorkExperiences
     * const workExperience = await prisma.workExperience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkExperiences and only return the `id`
     * const workExperienceWithIdOnly = await prisma.workExperience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkExperience.
     * @param {WorkExperienceUpsertArgs} args - Arguments to update or create a WorkExperience.
     * @example
     * // Update or create a WorkExperience
     * const workExperience = await prisma.workExperience.upsert({
     *   create: {
     *     // ... data to create a WorkExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkExperience we want to update
     *   }
     * })
     */
    upsert<T extends WorkExperienceUpsertArgs>(args: SelectSubset<T, WorkExperienceUpsertArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceCountArgs} args - Arguments to filter WorkExperiences to count.
     * @example
     * // Count the number of WorkExperiences
     * const count = await prisma.workExperience.count({
     *   where: {
     *     // ... the filter for the WorkExperiences we want to count
     *   }
     * })
    **/
    count<T extends WorkExperienceCountArgs>(
      args?: Subset<T, WorkExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkExperienceAggregateArgs>(args: Subset<T, WorkExperienceAggregateArgs>): Prisma.PrismaPromise<GetWorkExperienceAggregateType<T>>

    /**
     * Group by WorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkExperienceGroupByArgs['orderBy'] }
        : { orderBy?: WorkExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkExperience model
   */
  readonly fields: WorkExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructor<T extends InstructorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstructorDefaultArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkExperience model
   */
  interface WorkExperienceFieldRefs {
    readonly id: FieldRef<"WorkExperience", 'String'>
    readonly company: FieldRef<"WorkExperience", 'String'>
    readonly position: FieldRef<"WorkExperience", 'String'>
    readonly duration: FieldRef<"WorkExperience", 'String'>
    readonly instructorId: FieldRef<"WorkExperience", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkExperience findUnique
   */
  export type WorkExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience findUniqueOrThrow
   */
  export type WorkExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience findFirst
   */
  export type WorkExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperiences.
     */
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience findFirstOrThrow
   */
  export type WorkExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperiences.
     */
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience findMany
   */
  export type WorkExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperiences to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience create
   */
  export type WorkExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkExperience.
     */
    data: XOR<WorkExperienceCreateInput, WorkExperienceUncheckedCreateInput>
  }

  /**
   * WorkExperience createMany
   */
  export type WorkExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkExperiences.
     */
    data: WorkExperienceCreateManyInput | WorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkExperience createManyAndReturn
   */
  export type WorkExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many WorkExperiences.
     */
    data: WorkExperienceCreateManyInput | WorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkExperience update
   */
  export type WorkExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkExperience.
     */
    data: XOR<WorkExperienceUpdateInput, WorkExperienceUncheckedUpdateInput>
    /**
     * Choose, which WorkExperience to update.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience updateMany
   */
  export type WorkExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkExperiences.
     */
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which WorkExperiences to update
     */
    where?: WorkExperienceWhereInput
    /**
     * Limit how many WorkExperiences to update.
     */
    limit?: number
  }

  /**
   * WorkExperience updateManyAndReturn
   */
  export type WorkExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * The data used to update WorkExperiences.
     */
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which WorkExperiences to update
     */
    where?: WorkExperienceWhereInput
    /**
     * Limit how many WorkExperiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkExperience upsert
   */
  export type WorkExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkExperience to update in case it exists.
     */
    where: WorkExperienceWhereUniqueInput
    /**
     * In case the WorkExperience found by the `where` argument doesn't exist, create a new WorkExperience with this data.
     */
    create: XOR<WorkExperienceCreateInput, WorkExperienceUncheckedCreateInput>
    /**
     * In case the WorkExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkExperienceUpdateInput, WorkExperienceUncheckedUpdateInput>
  }

  /**
   * WorkExperience delete
   */
  export type WorkExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter which WorkExperience to delete.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience deleteMany
   */
  export type WorkExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkExperiences to delete
     */
    where?: WorkExperienceWhereInput
    /**
     * Limit how many WorkExperiences to delete.
     */
    limit?: number
  }

  /**
   * WorkExperience without action
   */
  export type WorkExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
  }


  /**
   * Model InstructorStats
   */

  export type AggregateInstructorStats = {
    _count: InstructorStatsCountAggregateOutputType | null
    _avg: InstructorStatsAvgAggregateOutputType | null
    _sum: InstructorStatsSumAggregateOutputType | null
    _min: InstructorStatsMinAggregateOutputType | null
    _max: InstructorStatsMaxAggregateOutputType | null
  }

  export type InstructorStatsAvgAggregateOutputType = {
    totalReviews: number | null
  }

  export type InstructorStatsSumAggregateOutputType = {
    totalReviews: number | null
  }

  export type InstructorStatsMinAggregateOutputType = {
    id: string | null
    totalReviews: number | null
    responseRate: string | null
    avgResponseTime: string | null
    instructorId: string | null
  }

  export type InstructorStatsMaxAggregateOutputType = {
    id: string | null
    totalReviews: number | null
    responseRate: string | null
    avgResponseTime: string | null
    instructorId: string | null
  }

  export type InstructorStatsCountAggregateOutputType = {
    id: number
    totalReviews: number
    responseRate: number
    avgResponseTime: number
    instructorId: number
    _all: number
  }


  export type InstructorStatsAvgAggregateInputType = {
    totalReviews?: true
  }

  export type InstructorStatsSumAggregateInputType = {
    totalReviews?: true
  }

  export type InstructorStatsMinAggregateInputType = {
    id?: true
    totalReviews?: true
    responseRate?: true
    avgResponseTime?: true
    instructorId?: true
  }

  export type InstructorStatsMaxAggregateInputType = {
    id?: true
    totalReviews?: true
    responseRate?: true
    avgResponseTime?: true
    instructorId?: true
  }

  export type InstructorStatsCountAggregateInputType = {
    id?: true
    totalReviews?: true
    responseRate?: true
    avgResponseTime?: true
    instructorId?: true
    _all?: true
  }

  export type InstructorStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstructorStats to aggregate.
     */
    where?: InstructorStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorStats to fetch.
     */
    orderBy?: InstructorStatsOrderByWithRelationInput | InstructorStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructorStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstructorStats
    **/
    _count?: true | InstructorStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstructorStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstructorStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorStatsMaxAggregateInputType
  }

  export type GetInstructorStatsAggregateType<T extends InstructorStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructorStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructorStats[P]>
      : GetScalarType<T[P], AggregateInstructorStats[P]>
  }




  export type InstructorStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorStatsWhereInput
    orderBy?: InstructorStatsOrderByWithAggregationInput | InstructorStatsOrderByWithAggregationInput[]
    by: InstructorStatsScalarFieldEnum[] | InstructorStatsScalarFieldEnum
    having?: InstructorStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorStatsCountAggregateInputType | true
    _avg?: InstructorStatsAvgAggregateInputType
    _sum?: InstructorStatsSumAggregateInputType
    _min?: InstructorStatsMinAggregateInputType
    _max?: InstructorStatsMaxAggregateInputType
  }

  export type InstructorStatsGroupByOutputType = {
    id: string
    totalReviews: number
    responseRate: string
    avgResponseTime: string
    instructorId: string
    _count: InstructorStatsCountAggregateOutputType | null
    _avg: InstructorStatsAvgAggregateOutputType | null
    _sum: InstructorStatsSumAggregateOutputType | null
    _min: InstructorStatsMinAggregateOutputType | null
    _max: InstructorStatsMaxAggregateOutputType | null
  }

  type GetInstructorStatsGroupByPayload<T extends InstructorStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorStatsGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorStatsGroupByOutputType[P]>
        }
      >
    >


  export type InstructorStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalReviews?: boolean
    responseRate?: boolean
    avgResponseTime?: boolean
    instructorId?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorStats"]>

  export type InstructorStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalReviews?: boolean
    responseRate?: boolean
    avgResponseTime?: boolean
    instructorId?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorStats"]>

  export type InstructorStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalReviews?: boolean
    responseRate?: boolean
    avgResponseTime?: boolean
    instructorId?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorStats"]>

  export type InstructorStatsSelectScalar = {
    id?: boolean
    totalReviews?: boolean
    responseRate?: boolean
    avgResponseTime?: boolean
    instructorId?: boolean
  }

  export type InstructorStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalReviews" | "responseRate" | "avgResponseTime" | "instructorId", ExtArgs["result"]["instructorStats"]>
  export type InstructorStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }
  export type InstructorStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }
  export type InstructorStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }

  export type $InstructorStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstructorStats"
    objects: {
      instructor: Prisma.$InstructorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalReviews: number
      responseRate: string
      avgResponseTime: string
      instructorId: string
    }, ExtArgs["result"]["instructorStats"]>
    composites: {}
  }

  type InstructorStatsGetPayload<S extends boolean | null | undefined | InstructorStatsDefaultArgs> = $Result.GetResult<Prisma.$InstructorStatsPayload, S>

  type InstructorStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructorStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructorStatsCountAggregateInputType | true
    }

  export interface InstructorStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstructorStats'], meta: { name: 'InstructorStats' } }
    /**
     * Find zero or one InstructorStats that matches the filter.
     * @param {InstructorStatsFindUniqueArgs} args - Arguments to find a InstructorStats
     * @example
     * // Get one InstructorStats
     * const instructorStats = await prisma.instructorStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructorStatsFindUniqueArgs>(args: SelectSubset<T, InstructorStatsFindUniqueArgs<ExtArgs>>): Prisma__InstructorStatsClient<$Result.GetResult<Prisma.$InstructorStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstructorStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructorStatsFindUniqueOrThrowArgs} args - Arguments to find a InstructorStats
     * @example
     * // Get one InstructorStats
     * const instructorStats = await prisma.instructorStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructorStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructorStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructorStatsClient<$Result.GetResult<Prisma.$InstructorStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstructorStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorStatsFindFirstArgs} args - Arguments to find a InstructorStats
     * @example
     * // Get one InstructorStats
     * const instructorStats = await prisma.instructorStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructorStatsFindFirstArgs>(args?: SelectSubset<T, InstructorStatsFindFirstArgs<ExtArgs>>): Prisma__InstructorStatsClient<$Result.GetResult<Prisma.$InstructorStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstructorStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorStatsFindFirstOrThrowArgs} args - Arguments to find a InstructorStats
     * @example
     * // Get one InstructorStats
     * const instructorStats = await prisma.instructorStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructorStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructorStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructorStatsClient<$Result.GetResult<Prisma.$InstructorStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstructorStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstructorStats
     * const instructorStats = await prisma.instructorStats.findMany()
     * 
     * // Get first 10 InstructorStats
     * const instructorStats = await prisma.instructorStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructorStatsWithIdOnly = await prisma.instructorStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstructorStatsFindManyArgs>(args?: SelectSubset<T, InstructorStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstructorStats.
     * @param {InstructorStatsCreateArgs} args - Arguments to create a InstructorStats.
     * @example
     * // Create one InstructorStats
     * const InstructorStats = await prisma.instructorStats.create({
     *   data: {
     *     // ... data to create a InstructorStats
     *   }
     * })
     * 
     */
    create<T extends InstructorStatsCreateArgs>(args: SelectSubset<T, InstructorStatsCreateArgs<ExtArgs>>): Prisma__InstructorStatsClient<$Result.GetResult<Prisma.$InstructorStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstructorStats.
     * @param {InstructorStatsCreateManyArgs} args - Arguments to create many InstructorStats.
     * @example
     * // Create many InstructorStats
     * const instructorStats = await prisma.instructorStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructorStatsCreateManyArgs>(args?: SelectSubset<T, InstructorStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstructorStats and returns the data saved in the database.
     * @param {InstructorStatsCreateManyAndReturnArgs} args - Arguments to create many InstructorStats.
     * @example
     * // Create many InstructorStats
     * const instructorStats = await prisma.instructorStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstructorStats and only return the `id`
     * const instructorStatsWithIdOnly = await prisma.instructorStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructorStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructorStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstructorStats.
     * @param {InstructorStatsDeleteArgs} args - Arguments to delete one InstructorStats.
     * @example
     * // Delete one InstructorStats
     * const InstructorStats = await prisma.instructorStats.delete({
     *   where: {
     *     // ... filter to delete one InstructorStats
     *   }
     * })
     * 
     */
    delete<T extends InstructorStatsDeleteArgs>(args: SelectSubset<T, InstructorStatsDeleteArgs<ExtArgs>>): Prisma__InstructorStatsClient<$Result.GetResult<Prisma.$InstructorStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstructorStats.
     * @param {InstructorStatsUpdateArgs} args - Arguments to update one InstructorStats.
     * @example
     * // Update one InstructorStats
     * const instructorStats = await prisma.instructorStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructorStatsUpdateArgs>(args: SelectSubset<T, InstructorStatsUpdateArgs<ExtArgs>>): Prisma__InstructorStatsClient<$Result.GetResult<Prisma.$InstructorStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstructorStats.
     * @param {InstructorStatsDeleteManyArgs} args - Arguments to filter InstructorStats to delete.
     * @example
     * // Delete a few InstructorStats
     * const { count } = await prisma.instructorStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructorStatsDeleteManyArgs>(args?: SelectSubset<T, InstructorStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstructorStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstructorStats
     * const instructorStats = await prisma.instructorStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructorStatsUpdateManyArgs>(args: SelectSubset<T, InstructorStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstructorStats and returns the data updated in the database.
     * @param {InstructorStatsUpdateManyAndReturnArgs} args - Arguments to update many InstructorStats.
     * @example
     * // Update many InstructorStats
     * const instructorStats = await prisma.instructorStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstructorStats and only return the `id`
     * const instructorStatsWithIdOnly = await prisma.instructorStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstructorStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructorStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstructorStats.
     * @param {InstructorStatsUpsertArgs} args - Arguments to update or create a InstructorStats.
     * @example
     * // Update or create a InstructorStats
     * const instructorStats = await prisma.instructorStats.upsert({
     *   create: {
     *     // ... data to create a InstructorStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstructorStats we want to update
     *   }
     * })
     */
    upsert<T extends InstructorStatsUpsertArgs>(args: SelectSubset<T, InstructorStatsUpsertArgs<ExtArgs>>): Prisma__InstructorStatsClient<$Result.GetResult<Prisma.$InstructorStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstructorStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorStatsCountArgs} args - Arguments to filter InstructorStats to count.
     * @example
     * // Count the number of InstructorStats
     * const count = await prisma.instructorStats.count({
     *   where: {
     *     // ... the filter for the InstructorStats we want to count
     *   }
     * })
    **/
    count<T extends InstructorStatsCountArgs>(
      args?: Subset<T, InstructorStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstructorStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstructorStatsAggregateArgs>(args: Subset<T, InstructorStatsAggregateArgs>): Prisma.PrismaPromise<GetInstructorStatsAggregateType<T>>

    /**
     * Group by InstructorStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstructorStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructorStatsGroupByArgs['orderBy'] }
        : { orderBy?: InstructorStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstructorStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstructorStats model
   */
  readonly fields: InstructorStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstructorStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructorStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructor<T extends InstructorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstructorDefaultArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InstructorStats model
   */
  interface InstructorStatsFieldRefs {
    readonly id: FieldRef<"InstructorStats", 'String'>
    readonly totalReviews: FieldRef<"InstructorStats", 'Int'>
    readonly responseRate: FieldRef<"InstructorStats", 'String'>
    readonly avgResponseTime: FieldRef<"InstructorStats", 'String'>
    readonly instructorId: FieldRef<"InstructorStats", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InstructorStats findUnique
   */
  export type InstructorStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorStats
     */
    select?: InstructorStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorStats
     */
    omit?: InstructorStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorStatsInclude<ExtArgs> | null
    /**
     * Filter, which InstructorStats to fetch.
     */
    where: InstructorStatsWhereUniqueInput
  }

  /**
   * InstructorStats findUniqueOrThrow
   */
  export type InstructorStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorStats
     */
    select?: InstructorStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorStats
     */
    omit?: InstructorStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorStatsInclude<ExtArgs> | null
    /**
     * Filter, which InstructorStats to fetch.
     */
    where: InstructorStatsWhereUniqueInput
  }

  /**
   * InstructorStats findFirst
   */
  export type InstructorStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorStats
     */
    select?: InstructorStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorStats
     */
    omit?: InstructorStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorStatsInclude<ExtArgs> | null
    /**
     * Filter, which InstructorStats to fetch.
     */
    where?: InstructorStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorStats to fetch.
     */
    orderBy?: InstructorStatsOrderByWithRelationInput | InstructorStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstructorStats.
     */
    cursor?: InstructorStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstructorStats.
     */
    distinct?: InstructorStatsScalarFieldEnum | InstructorStatsScalarFieldEnum[]
  }

  /**
   * InstructorStats findFirstOrThrow
   */
  export type InstructorStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorStats
     */
    select?: InstructorStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorStats
     */
    omit?: InstructorStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorStatsInclude<ExtArgs> | null
    /**
     * Filter, which InstructorStats to fetch.
     */
    where?: InstructorStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorStats to fetch.
     */
    orderBy?: InstructorStatsOrderByWithRelationInput | InstructorStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstructorStats.
     */
    cursor?: InstructorStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstructorStats.
     */
    distinct?: InstructorStatsScalarFieldEnum | InstructorStatsScalarFieldEnum[]
  }

  /**
   * InstructorStats findMany
   */
  export type InstructorStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorStats
     */
    select?: InstructorStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorStats
     */
    omit?: InstructorStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorStatsInclude<ExtArgs> | null
    /**
     * Filter, which InstructorStats to fetch.
     */
    where?: InstructorStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorStats to fetch.
     */
    orderBy?: InstructorStatsOrderByWithRelationInput | InstructorStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstructorStats.
     */
    cursor?: InstructorStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorStats.
     */
    skip?: number
    distinct?: InstructorStatsScalarFieldEnum | InstructorStatsScalarFieldEnum[]
  }

  /**
   * InstructorStats create
   */
  export type InstructorStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorStats
     */
    select?: InstructorStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorStats
     */
    omit?: InstructorStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a InstructorStats.
     */
    data: XOR<InstructorStatsCreateInput, InstructorStatsUncheckedCreateInput>
  }

  /**
   * InstructorStats createMany
   */
  export type InstructorStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstructorStats.
     */
    data: InstructorStatsCreateManyInput | InstructorStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstructorStats createManyAndReturn
   */
  export type InstructorStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorStats
     */
    select?: InstructorStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorStats
     */
    omit?: InstructorStatsOmit<ExtArgs> | null
    /**
     * The data used to create many InstructorStats.
     */
    data: InstructorStatsCreateManyInput | InstructorStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstructorStats update
   */
  export type InstructorStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorStats
     */
    select?: InstructorStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorStats
     */
    omit?: InstructorStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a InstructorStats.
     */
    data: XOR<InstructorStatsUpdateInput, InstructorStatsUncheckedUpdateInput>
    /**
     * Choose, which InstructorStats to update.
     */
    where: InstructorStatsWhereUniqueInput
  }

  /**
   * InstructorStats updateMany
   */
  export type InstructorStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstructorStats.
     */
    data: XOR<InstructorStatsUpdateManyMutationInput, InstructorStatsUncheckedUpdateManyInput>
    /**
     * Filter which InstructorStats to update
     */
    where?: InstructorStatsWhereInput
    /**
     * Limit how many InstructorStats to update.
     */
    limit?: number
  }

  /**
   * InstructorStats updateManyAndReturn
   */
  export type InstructorStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorStats
     */
    select?: InstructorStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorStats
     */
    omit?: InstructorStatsOmit<ExtArgs> | null
    /**
     * The data used to update InstructorStats.
     */
    data: XOR<InstructorStatsUpdateManyMutationInput, InstructorStatsUncheckedUpdateManyInput>
    /**
     * Filter which InstructorStats to update
     */
    where?: InstructorStatsWhereInput
    /**
     * Limit how many InstructorStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstructorStats upsert
   */
  export type InstructorStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorStats
     */
    select?: InstructorStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorStats
     */
    omit?: InstructorStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the InstructorStats to update in case it exists.
     */
    where: InstructorStatsWhereUniqueInput
    /**
     * In case the InstructorStats found by the `where` argument doesn't exist, create a new InstructorStats with this data.
     */
    create: XOR<InstructorStatsCreateInput, InstructorStatsUncheckedCreateInput>
    /**
     * In case the InstructorStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructorStatsUpdateInput, InstructorStatsUncheckedUpdateInput>
  }

  /**
   * InstructorStats delete
   */
  export type InstructorStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorStats
     */
    select?: InstructorStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorStats
     */
    omit?: InstructorStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorStatsInclude<ExtArgs> | null
    /**
     * Filter which InstructorStats to delete.
     */
    where: InstructorStatsWhereUniqueInput
  }

  /**
   * InstructorStats deleteMany
   */
  export type InstructorStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstructorStats to delete
     */
    where?: InstructorStatsWhereInput
    /**
     * Limit how many InstructorStats to delete.
     */
    limit?: number
  }

  /**
   * InstructorStats without action
   */
  export type InstructorStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorStats
     */
    select?: InstructorStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorStats
     */
    omit?: InstructorStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorStatsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    role: 'role'
  };

  export type OrganizationMemberScalarFieldEnum = (typeof OrganizationMemberScalarFieldEnum)[keyof typeof OrganizationMemberScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    type: 'type',
    logo: 'logo',
    coverImage: 'coverImage',
    description: 'description',
    longDescription: 'longDescription',
    location: 'location',
    website: 'website',
    email: 'email',
    phone: 'phone',
    founded: 'founded',
    totalCourses: 'totalCourses',
    totalStudents: 'totalStudents',
    totalInstructors: 'totalInstructors',
    rating: 'rating',
    reviewCount: 'reviewCount',
    specialties: 'specialties',
    featured: 'featured',
    verified: 'verified',
    accreditation: 'accreditation',
    mission: 'mission',
    vision: 'vision',
    achievements: 'achievements',
    partnerships: 'partnerships',
    social: 'social'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const OrgStatsScalarFieldEnum: {
    id: 'id',
    graduationRate: 'graduationRate',
    employmentRate: 'employmentRate',
    averageSalary: 'averageSalary',
    studentSatisfaction: 'studentSatisfaction',
    organizationId: 'organizationId'
  };

  export type OrgStatsScalarFieldEnum = (typeof OrgStatsScalarFieldEnum)[keyof typeof OrgStatsScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    address: 'address',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    country: 'country',
    organizationId: 'organizationId'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    userAvatar: 'userAvatar',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    instructorId: 'instructorId',
    organizationId: 'organizationId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const InstructorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    title: 'title',
    avatar: 'avatar',
    coverImage: 'coverImage',
    bio: 'bio',
    featured: 'featured',
    longBio: 'longBio',
    rating: 'rating',
    totalStudents: 'totalStudents',
    totalCourses: 'totalCourses',
    experience: 'experience',
    location: 'location',
    joinedDate: 'joinedDate',
    specialties: 'specialties',
    achievements: 'achievements',
    education: 'education',
    social: 'social',
    organizationId: 'organizationId'
  };

  export type InstructorScalarFieldEnum = (typeof InstructorScalarFieldEnum)[keyof typeof InstructorScalarFieldEnum]


  export const WorkExperienceScalarFieldEnum: {
    id: 'id',
    company: 'company',
    position: 'position',
    duration: 'duration',
    instructorId: 'instructorId'
  };

  export type WorkExperienceScalarFieldEnum = (typeof WorkExperienceScalarFieldEnum)[keyof typeof WorkExperienceScalarFieldEnum]


  export const InstructorStatsScalarFieldEnum: {
    id: 'id',
    totalReviews: 'totalReviews',
    responseRate: 'responseRate',
    avgResponseTime: 'avgResponseTime',
    instructorId: 'instructorId'
  };

  export type InstructorStatsScalarFieldEnum = (typeof InstructorStatsScalarFieldEnum)[keyof typeof InstructorStatsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'OrgRole'
   */
  export type EnumOrgRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrgRole'>
    


  /**
   * Reference to a field of type 'OrgRole[]'
   */
  export type ListEnumOrgRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrgRole[]'>
    


  /**
   * Reference to a field of type 'OrgType'
   */
  export type EnumOrgTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrgType'>
    


  /**
   * Reference to a field of type 'OrgType[]'
   */
  export type ListEnumOrgTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrgType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationMemberWhereInput = {
    AND?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    OR?: OrganizationMemberWhereInput[]
    NOT?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    id?: StringFilter<"OrganizationMember"> | string
    userId?: StringFilter<"OrganizationMember"> | string
    organizationId?: StringFilter<"OrganizationMember"> | string
    role?: EnumOrgRoleFilter<"OrganizationMember"> | $Enums.OrgRole
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type OrganizationMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type OrganizationMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_organizationId?: OrganizationMemberUserIdOrganizationIdCompoundUniqueInput
    AND?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    OR?: OrganizationMemberWhereInput[]
    NOT?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    userId?: StringFilter<"OrganizationMember"> | string
    organizationId?: StringFilter<"OrganizationMember"> | string
    role?: EnumOrgRoleFilter<"OrganizationMember"> | $Enums.OrgRole
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "userId_organizationId">

  export type OrganizationMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    _count?: OrganizationMemberCountOrderByAggregateInput
    _max?: OrganizationMemberMaxOrderByAggregateInput
    _min?: OrganizationMemberMinOrderByAggregateInput
  }

  export type OrganizationMemberScalarWhereWithAggregatesInput = {
    AND?: OrganizationMemberScalarWhereWithAggregatesInput | OrganizationMemberScalarWhereWithAggregatesInput[]
    OR?: OrganizationMemberScalarWhereWithAggregatesInput[]
    NOT?: OrganizationMemberScalarWhereWithAggregatesInput | OrganizationMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrganizationMember"> | string
    userId?: StringWithAggregatesFilter<"OrganizationMember"> | string
    organizationId?: StringWithAggregatesFilter<"OrganizationMember"> | string
    role?: EnumOrgRoleWithAggregatesFilter<"OrganizationMember"> | $Enums.OrgRole
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    userId?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    type?: EnumOrgTypeFilter<"Organization"> | $Enums.OrgType
    logo?: StringFilter<"Organization"> | string
    coverImage?: StringFilter<"Organization"> | string
    description?: StringFilter<"Organization"> | string
    longDescription?: StringFilter<"Organization"> | string
    location?: StringFilter<"Organization"> | string
    website?: StringFilter<"Organization"> | string
    email?: StringFilter<"Organization"> | string
    phone?: StringFilter<"Organization"> | string
    founded?: StringFilter<"Organization"> | string
    totalCourses?: IntFilter<"Organization"> | number
    totalStudents?: IntFilter<"Organization"> | number
    totalInstructors?: IntFilter<"Organization"> | number
    rating?: FloatFilter<"Organization"> | number
    reviewCount?: IntFilter<"Organization"> | number
    specialties?: StringNullableListFilter<"Organization">
    featured?: BoolFilter<"Organization"> | boolean
    verified?: BoolFilter<"Organization"> | boolean
    accreditation?: StringNullableListFilter<"Organization">
    mission?: StringFilter<"Organization"> | string
    vision?: StringFilter<"Organization"> | string
    achievements?: StringNullableListFilter<"Organization">
    partnerships?: StringNullableListFilter<"Organization">
    social?: JsonFilter<"Organization">
    instructors?: InstructorListRelationFilter
    reviews?: ReviewListRelationFilter
    stats?: XOR<OrgStatsNullableScalarRelationFilter, OrgStatsWhereInput> | null
    contact?: XOR<ContactNullableScalarRelationFilter, ContactWhereInput> | null
    members?: OrganizationMemberListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    logo?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    location?: SortOrder
    website?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    founded?: SortOrder
    totalCourses?: SortOrder
    totalStudents?: SortOrder
    totalInstructors?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    specialties?: SortOrder
    featured?: SortOrder
    verified?: SortOrder
    accreditation?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    achievements?: SortOrder
    partnerships?: SortOrder
    social?: SortOrder
    instructors?: InstructorOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    stats?: OrgStatsOrderByWithRelationInput
    contact?: ContactOrderByWithRelationInput
    members?: OrganizationMemberOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    userId?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    type?: EnumOrgTypeFilter<"Organization"> | $Enums.OrgType
    logo?: StringFilter<"Organization"> | string
    coverImage?: StringFilter<"Organization"> | string
    description?: StringFilter<"Organization"> | string
    longDescription?: StringFilter<"Organization"> | string
    location?: StringFilter<"Organization"> | string
    website?: StringFilter<"Organization"> | string
    email?: StringFilter<"Organization"> | string
    phone?: StringFilter<"Organization"> | string
    founded?: StringFilter<"Organization"> | string
    totalCourses?: IntFilter<"Organization"> | number
    totalStudents?: IntFilter<"Organization"> | number
    totalInstructors?: IntFilter<"Organization"> | number
    rating?: FloatFilter<"Organization"> | number
    reviewCount?: IntFilter<"Organization"> | number
    specialties?: StringNullableListFilter<"Organization">
    featured?: BoolFilter<"Organization"> | boolean
    verified?: BoolFilter<"Organization"> | boolean
    accreditation?: StringNullableListFilter<"Organization">
    mission?: StringFilter<"Organization"> | string
    vision?: StringFilter<"Organization"> | string
    achievements?: StringNullableListFilter<"Organization">
    partnerships?: StringNullableListFilter<"Organization">
    social?: JsonFilter<"Organization">
    instructors?: InstructorListRelationFilter
    reviews?: ReviewListRelationFilter
    stats?: XOR<OrgStatsNullableScalarRelationFilter, OrgStatsWhereInput> | null
    contact?: XOR<ContactNullableScalarRelationFilter, ContactWhereInput> | null
    members?: OrganizationMemberListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    logo?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    location?: SortOrder
    website?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    founded?: SortOrder
    totalCourses?: SortOrder
    totalStudents?: SortOrder
    totalInstructors?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    specialties?: SortOrder
    featured?: SortOrder
    verified?: SortOrder
    accreditation?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    achievements?: SortOrder
    partnerships?: SortOrder
    social?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    userId?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    type?: EnumOrgTypeWithAggregatesFilter<"Organization"> | $Enums.OrgType
    logo?: StringWithAggregatesFilter<"Organization"> | string
    coverImage?: StringWithAggregatesFilter<"Organization"> | string
    description?: StringWithAggregatesFilter<"Organization"> | string
    longDescription?: StringWithAggregatesFilter<"Organization"> | string
    location?: StringWithAggregatesFilter<"Organization"> | string
    website?: StringWithAggregatesFilter<"Organization"> | string
    email?: StringWithAggregatesFilter<"Organization"> | string
    phone?: StringWithAggregatesFilter<"Organization"> | string
    founded?: StringWithAggregatesFilter<"Organization"> | string
    totalCourses?: IntWithAggregatesFilter<"Organization"> | number
    totalStudents?: IntWithAggregatesFilter<"Organization"> | number
    totalInstructors?: IntWithAggregatesFilter<"Organization"> | number
    rating?: FloatWithAggregatesFilter<"Organization"> | number
    reviewCount?: IntWithAggregatesFilter<"Organization"> | number
    specialties?: StringNullableListFilter<"Organization">
    featured?: BoolWithAggregatesFilter<"Organization"> | boolean
    verified?: BoolWithAggregatesFilter<"Organization"> | boolean
    accreditation?: StringNullableListFilter<"Organization">
    mission?: StringWithAggregatesFilter<"Organization"> | string
    vision?: StringWithAggregatesFilter<"Organization"> | string
    achievements?: StringNullableListFilter<"Organization">
    partnerships?: StringNullableListFilter<"Organization">
    social?: JsonWithAggregatesFilter<"Organization">
  }

  export type OrgStatsWhereInput = {
    AND?: OrgStatsWhereInput | OrgStatsWhereInput[]
    OR?: OrgStatsWhereInput[]
    NOT?: OrgStatsWhereInput | OrgStatsWhereInput[]
    id?: StringFilter<"OrgStats"> | string
    graduationRate?: StringNullableFilter<"OrgStats"> | string | null
    employmentRate?: StringNullableFilter<"OrgStats"> | string | null
    averageSalary?: StringNullableFilter<"OrgStats"> | string | null
    studentSatisfaction?: StringFilter<"OrgStats"> | string
    organizationId?: StringFilter<"OrgStats"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type OrgStatsOrderByWithRelationInput = {
    id?: SortOrder
    graduationRate?: SortOrderInput | SortOrder
    employmentRate?: SortOrderInput | SortOrder
    averageSalary?: SortOrderInput | SortOrder
    studentSatisfaction?: SortOrder
    organizationId?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type OrgStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    organizationId?: string
    AND?: OrgStatsWhereInput | OrgStatsWhereInput[]
    OR?: OrgStatsWhereInput[]
    NOT?: OrgStatsWhereInput | OrgStatsWhereInput[]
    graduationRate?: StringNullableFilter<"OrgStats"> | string | null
    employmentRate?: StringNullableFilter<"OrgStats"> | string | null
    averageSalary?: StringNullableFilter<"OrgStats"> | string | null
    studentSatisfaction?: StringFilter<"OrgStats"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "organizationId">

  export type OrgStatsOrderByWithAggregationInput = {
    id?: SortOrder
    graduationRate?: SortOrderInput | SortOrder
    employmentRate?: SortOrderInput | SortOrder
    averageSalary?: SortOrderInput | SortOrder
    studentSatisfaction?: SortOrder
    organizationId?: SortOrder
    _count?: OrgStatsCountOrderByAggregateInput
    _max?: OrgStatsMaxOrderByAggregateInput
    _min?: OrgStatsMinOrderByAggregateInput
  }

  export type OrgStatsScalarWhereWithAggregatesInput = {
    AND?: OrgStatsScalarWhereWithAggregatesInput | OrgStatsScalarWhereWithAggregatesInput[]
    OR?: OrgStatsScalarWhereWithAggregatesInput[]
    NOT?: OrgStatsScalarWhereWithAggregatesInput | OrgStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrgStats"> | string
    graduationRate?: StringNullableWithAggregatesFilter<"OrgStats"> | string | null
    employmentRate?: StringNullableWithAggregatesFilter<"OrgStats"> | string | null
    averageSalary?: StringNullableWithAggregatesFilter<"OrgStats"> | string | null
    studentSatisfaction?: StringWithAggregatesFilter<"OrgStats"> | string
    organizationId?: StringWithAggregatesFilter<"OrgStats"> | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    address?: StringFilter<"Contact"> | string
    city?: StringFilter<"Contact"> | string
    state?: StringFilter<"Contact"> | string
    zipCode?: StringFilter<"Contact"> | string
    country?: StringFilter<"Contact"> | string
    organizationId?: StringFilter<"Contact"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    organizationId?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    organizationId?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    address?: StringFilter<"Contact"> | string
    city?: StringFilter<"Contact"> | string
    state?: StringFilter<"Contact"> | string
    zipCode?: StringFilter<"Contact"> | string
    country?: StringFilter<"Contact"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "organizationId">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    organizationId?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    address?: StringWithAggregatesFilter<"Contact"> | string
    city?: StringWithAggregatesFilter<"Contact"> | string
    state?: StringWithAggregatesFilter<"Contact"> | string
    zipCode?: StringWithAggregatesFilter<"Contact"> | string
    country?: StringWithAggregatesFilter<"Contact"> | string
    organizationId?: StringWithAggregatesFilter<"Contact"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    userName?: StringFilter<"Review"> | string
    userAvatar?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    instructorId?: StringNullableFilter<"Review"> | string | null
    organizationId?: StringNullableFilter<"Review"> | string | null
    instructor?: XOR<InstructorNullableScalarRelationFilter, InstructorWhereInput> | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    userAvatar?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    instructorId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    instructor?: InstructorOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    userName?: StringFilter<"Review"> | string
    userAvatar?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    instructorId?: StringNullableFilter<"Review"> | string | null
    organizationId?: StringNullableFilter<"Review"> | string | null
    instructor?: XOR<InstructorNullableScalarRelationFilter, InstructorWhereInput> | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    userAvatar?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    instructorId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    userName?: StringWithAggregatesFilter<"Review"> | string
    userAvatar?: StringWithAggregatesFilter<"Review"> | string
    rating?: FloatWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    instructorId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    organizationId?: StringNullableWithAggregatesFilter<"Review"> | string | null
  }

  export type InstructorWhereInput = {
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    id?: StringFilter<"Instructor"> | string
    userId?: StringFilter<"Instructor"> | string
    name?: StringFilter<"Instructor"> | string
    title?: StringFilter<"Instructor"> | string
    avatar?: StringFilter<"Instructor"> | string
    coverImage?: StringNullableFilter<"Instructor"> | string | null
    bio?: StringFilter<"Instructor"> | string
    featured?: BoolNullableFilter<"Instructor"> | boolean | null
    longBio?: StringNullableFilter<"Instructor"> | string | null
    rating?: FloatFilter<"Instructor"> | number
    totalStudents?: IntFilter<"Instructor"> | number
    totalCourses?: IntFilter<"Instructor"> | number
    experience?: StringNullableFilter<"Instructor"> | string | null
    location?: StringNullableFilter<"Instructor"> | string | null
    joinedDate?: StringNullableFilter<"Instructor"> | string | null
    specialties?: StringNullableListFilter<"Instructor">
    achievements?: StringNullableListFilter<"Instructor">
    education?: StringNullableListFilter<"Instructor">
    social?: JsonFilter<"Instructor">
    organizationId?: StringNullableFilter<"Instructor"> | string | null
    workExperience?: WorkExperienceListRelationFilter
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    reviews?: ReviewListRelationFilter
    stats?: XOR<InstructorStatsNullableScalarRelationFilter, InstructorStatsWhereInput> | null
  }

  export type InstructorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    avatar?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    bio?: SortOrder
    featured?: SortOrderInput | SortOrder
    longBio?: SortOrderInput | SortOrder
    rating?: SortOrder
    totalStudents?: SortOrder
    totalCourses?: SortOrder
    experience?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    joinedDate?: SortOrderInput | SortOrder
    specialties?: SortOrder
    achievements?: SortOrder
    education?: SortOrder
    social?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    workExperience?: WorkExperienceOrderByRelationAggregateInput
    organization?: OrganizationOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
    stats?: InstructorStatsOrderByWithRelationInput
  }

  export type InstructorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    name?: StringFilter<"Instructor"> | string
    title?: StringFilter<"Instructor"> | string
    avatar?: StringFilter<"Instructor"> | string
    coverImage?: StringNullableFilter<"Instructor"> | string | null
    bio?: StringFilter<"Instructor"> | string
    featured?: BoolNullableFilter<"Instructor"> | boolean | null
    longBio?: StringNullableFilter<"Instructor"> | string | null
    rating?: FloatFilter<"Instructor"> | number
    totalStudents?: IntFilter<"Instructor"> | number
    totalCourses?: IntFilter<"Instructor"> | number
    experience?: StringNullableFilter<"Instructor"> | string | null
    location?: StringNullableFilter<"Instructor"> | string | null
    joinedDate?: StringNullableFilter<"Instructor"> | string | null
    specialties?: StringNullableListFilter<"Instructor">
    achievements?: StringNullableListFilter<"Instructor">
    education?: StringNullableListFilter<"Instructor">
    social?: JsonFilter<"Instructor">
    organizationId?: StringNullableFilter<"Instructor"> | string | null
    workExperience?: WorkExperienceListRelationFilter
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    reviews?: ReviewListRelationFilter
    stats?: XOR<InstructorStatsNullableScalarRelationFilter, InstructorStatsWhereInput> | null
  }, "id" | "userId">

  export type InstructorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    avatar?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    bio?: SortOrder
    featured?: SortOrderInput | SortOrder
    longBio?: SortOrderInput | SortOrder
    rating?: SortOrder
    totalStudents?: SortOrder
    totalCourses?: SortOrder
    experience?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    joinedDate?: SortOrderInput | SortOrder
    specialties?: SortOrder
    achievements?: SortOrder
    education?: SortOrder
    social?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    _count?: InstructorCountOrderByAggregateInput
    _avg?: InstructorAvgOrderByAggregateInput
    _max?: InstructorMaxOrderByAggregateInput
    _min?: InstructorMinOrderByAggregateInput
    _sum?: InstructorSumOrderByAggregateInput
  }

  export type InstructorScalarWhereWithAggregatesInput = {
    AND?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    OR?: InstructorScalarWhereWithAggregatesInput[]
    NOT?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Instructor"> | string
    userId?: StringWithAggregatesFilter<"Instructor"> | string
    name?: StringWithAggregatesFilter<"Instructor"> | string
    title?: StringWithAggregatesFilter<"Instructor"> | string
    avatar?: StringWithAggregatesFilter<"Instructor"> | string
    coverImage?: StringNullableWithAggregatesFilter<"Instructor"> | string | null
    bio?: StringWithAggregatesFilter<"Instructor"> | string
    featured?: BoolNullableWithAggregatesFilter<"Instructor"> | boolean | null
    longBio?: StringNullableWithAggregatesFilter<"Instructor"> | string | null
    rating?: FloatWithAggregatesFilter<"Instructor"> | number
    totalStudents?: IntWithAggregatesFilter<"Instructor"> | number
    totalCourses?: IntWithAggregatesFilter<"Instructor"> | number
    experience?: StringNullableWithAggregatesFilter<"Instructor"> | string | null
    location?: StringNullableWithAggregatesFilter<"Instructor"> | string | null
    joinedDate?: StringNullableWithAggregatesFilter<"Instructor"> | string | null
    specialties?: StringNullableListFilter<"Instructor">
    achievements?: StringNullableListFilter<"Instructor">
    education?: StringNullableListFilter<"Instructor">
    social?: JsonWithAggregatesFilter<"Instructor">
    organizationId?: StringNullableWithAggregatesFilter<"Instructor"> | string | null
  }

  export type WorkExperienceWhereInput = {
    AND?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    OR?: WorkExperienceWhereInput[]
    NOT?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    id?: StringFilter<"WorkExperience"> | string
    company?: StringFilter<"WorkExperience"> | string
    position?: StringFilter<"WorkExperience"> | string
    duration?: StringFilter<"WorkExperience"> | string
    instructorId?: StringFilter<"WorkExperience"> | string
    instructor?: XOR<InstructorScalarRelationFilter, InstructorWhereInput>
  }

  export type WorkExperienceOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    duration?: SortOrder
    instructorId?: SortOrder
    instructor?: InstructorOrderByWithRelationInput
  }

  export type WorkExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    OR?: WorkExperienceWhereInput[]
    NOT?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    company?: StringFilter<"WorkExperience"> | string
    position?: StringFilter<"WorkExperience"> | string
    duration?: StringFilter<"WorkExperience"> | string
    instructorId?: StringFilter<"WorkExperience"> | string
    instructor?: XOR<InstructorScalarRelationFilter, InstructorWhereInput>
  }, "id">

  export type WorkExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    duration?: SortOrder
    instructorId?: SortOrder
    _count?: WorkExperienceCountOrderByAggregateInput
    _max?: WorkExperienceMaxOrderByAggregateInput
    _min?: WorkExperienceMinOrderByAggregateInput
  }

  export type WorkExperienceScalarWhereWithAggregatesInput = {
    AND?: WorkExperienceScalarWhereWithAggregatesInput | WorkExperienceScalarWhereWithAggregatesInput[]
    OR?: WorkExperienceScalarWhereWithAggregatesInput[]
    NOT?: WorkExperienceScalarWhereWithAggregatesInput | WorkExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkExperience"> | string
    company?: StringWithAggregatesFilter<"WorkExperience"> | string
    position?: StringWithAggregatesFilter<"WorkExperience"> | string
    duration?: StringWithAggregatesFilter<"WorkExperience"> | string
    instructorId?: StringWithAggregatesFilter<"WorkExperience"> | string
  }

  export type InstructorStatsWhereInput = {
    AND?: InstructorStatsWhereInput | InstructorStatsWhereInput[]
    OR?: InstructorStatsWhereInput[]
    NOT?: InstructorStatsWhereInput | InstructorStatsWhereInput[]
    id?: StringFilter<"InstructorStats"> | string
    totalReviews?: IntFilter<"InstructorStats"> | number
    responseRate?: StringFilter<"InstructorStats"> | string
    avgResponseTime?: StringFilter<"InstructorStats"> | string
    instructorId?: StringFilter<"InstructorStats"> | string
    instructor?: XOR<InstructorScalarRelationFilter, InstructorWhereInput>
  }

  export type InstructorStatsOrderByWithRelationInput = {
    id?: SortOrder
    totalReviews?: SortOrder
    responseRate?: SortOrder
    avgResponseTime?: SortOrder
    instructorId?: SortOrder
    instructor?: InstructorOrderByWithRelationInput
  }

  export type InstructorStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    instructorId?: string
    AND?: InstructorStatsWhereInput | InstructorStatsWhereInput[]
    OR?: InstructorStatsWhereInput[]
    NOT?: InstructorStatsWhereInput | InstructorStatsWhereInput[]
    totalReviews?: IntFilter<"InstructorStats"> | number
    responseRate?: StringFilter<"InstructorStats"> | string
    avgResponseTime?: StringFilter<"InstructorStats"> | string
    instructor?: XOR<InstructorScalarRelationFilter, InstructorWhereInput>
  }, "id" | "instructorId">

  export type InstructorStatsOrderByWithAggregationInput = {
    id?: SortOrder
    totalReviews?: SortOrder
    responseRate?: SortOrder
    avgResponseTime?: SortOrder
    instructorId?: SortOrder
    _count?: InstructorStatsCountOrderByAggregateInput
    _avg?: InstructorStatsAvgOrderByAggregateInput
    _max?: InstructorStatsMaxOrderByAggregateInput
    _min?: InstructorStatsMinOrderByAggregateInput
    _sum?: InstructorStatsSumOrderByAggregateInput
  }

  export type InstructorStatsScalarWhereWithAggregatesInput = {
    AND?: InstructorStatsScalarWhereWithAggregatesInput | InstructorStatsScalarWhereWithAggregatesInput[]
    OR?: InstructorStatsScalarWhereWithAggregatesInput[]
    NOT?: InstructorStatsScalarWhereWithAggregatesInput | InstructorStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InstructorStats"> | string
    totalReviews?: IntWithAggregatesFilter<"InstructorStats"> | number
    responseRate?: StringWithAggregatesFilter<"InstructorStats"> | string
    avgResponseTime?: StringWithAggregatesFilter<"InstructorStats"> | string
    instructorId?: StringWithAggregatesFilter<"InstructorStats"> | string
  }

  export type OrganizationMemberCreateInput = {
    id?: string
    userId: string
    role: $Enums.OrgRole
    organization: OrganizationCreateNestedOneWithoutMembersInput
  }

  export type OrganizationMemberUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId: string
    role: $Enums.OrgRole
  }

  export type OrganizationMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    organization?: OrganizationUpdateOneRequiredWithoutMembersNestedInput
  }

  export type OrganizationMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
  }

  export type OrganizationMemberCreateManyInput = {
    id?: string
    userId: string
    organizationId: string
    role: $Enums.OrgRole
  }

  export type OrganizationMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
  }

  export type OrganizationMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
  }

  export type OrganizationCreateInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.OrgType
    logo: string
    coverImage: string
    description: string
    longDescription: string
    location: string
    website: string
    email: string
    phone: string
    founded: string
    totalCourses: number
    totalStudents: number
    totalInstructors: number
    rating: number
    reviewCount: number
    specialties?: OrganizationCreatespecialtiesInput | string[]
    featured: boolean
    verified: boolean
    accreditation?: OrganizationCreateaccreditationInput | string[]
    mission: string
    vision: string
    achievements?: OrganizationCreateachievementsInput | string[]
    partnerships?: OrganizationCreatepartnershipsInput | string[]
    social: JsonNullValueInput | InputJsonValue
    instructors?: InstructorCreateNestedManyWithoutOrganizationInput
    reviews?: ReviewCreateNestedManyWithoutOrganizationInput
    stats?: OrgStatsCreateNestedOneWithoutOrganizationInput
    contact?: ContactCreateNestedOneWithoutOrganizationInput
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.OrgType
    logo: string
    coverImage: string
    description: string
    longDescription: string
    location: string
    website: string
    email: string
    phone: string
    founded: string
    totalCourses: number
    totalStudents: number
    totalInstructors: number
    rating: number
    reviewCount: number
    specialties?: OrganizationCreatespecialtiesInput | string[]
    featured: boolean
    verified: boolean
    accreditation?: OrganizationCreateaccreditationInput | string[]
    mission: string
    vision: string
    achievements?: OrganizationCreateachievementsInput | string[]
    partnerships?: OrganizationCreatepartnershipsInput | string[]
    social: JsonNullValueInput | InputJsonValue
    instructors?: InstructorUncheckedCreateNestedManyWithoutOrganizationInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutOrganizationInput
    stats?: OrgStatsUncheckedCreateNestedOneWithoutOrganizationInput
    contact?: ContactUncheckedCreateNestedOneWithoutOrganizationInput
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOrgTypeFieldUpdateOperationsInput | $Enums.OrgType
    logo?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    founded?: StringFieldUpdateOperationsInput | string
    totalCourses?: IntFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalInstructors?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    specialties?: OrganizationUpdatespecialtiesInput | string[]
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    accreditation?: OrganizationUpdateaccreditationInput | string[]
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    achievements?: OrganizationUpdateachievementsInput | string[]
    partnerships?: OrganizationUpdatepartnershipsInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    instructors?: InstructorUpdateManyWithoutOrganizationNestedInput
    reviews?: ReviewUpdateManyWithoutOrganizationNestedInput
    stats?: OrgStatsUpdateOneWithoutOrganizationNestedInput
    contact?: ContactUpdateOneWithoutOrganizationNestedInput
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOrgTypeFieldUpdateOperationsInput | $Enums.OrgType
    logo?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    founded?: StringFieldUpdateOperationsInput | string
    totalCourses?: IntFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalInstructors?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    specialties?: OrganizationUpdatespecialtiesInput | string[]
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    accreditation?: OrganizationUpdateaccreditationInput | string[]
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    achievements?: OrganizationUpdateachievementsInput | string[]
    partnerships?: OrganizationUpdatepartnershipsInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    instructors?: InstructorUncheckedUpdateManyWithoutOrganizationNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutOrganizationNestedInput
    stats?: OrgStatsUncheckedUpdateOneWithoutOrganizationNestedInput
    contact?: ContactUncheckedUpdateOneWithoutOrganizationNestedInput
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.OrgType
    logo: string
    coverImage: string
    description: string
    longDescription: string
    location: string
    website: string
    email: string
    phone: string
    founded: string
    totalCourses: number
    totalStudents: number
    totalInstructors: number
    rating: number
    reviewCount: number
    specialties?: OrganizationCreatespecialtiesInput | string[]
    featured: boolean
    verified: boolean
    accreditation?: OrganizationCreateaccreditationInput | string[]
    mission: string
    vision: string
    achievements?: OrganizationCreateachievementsInput | string[]
    partnerships?: OrganizationCreatepartnershipsInput | string[]
    social: JsonNullValueInput | InputJsonValue
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOrgTypeFieldUpdateOperationsInput | $Enums.OrgType
    logo?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    founded?: StringFieldUpdateOperationsInput | string
    totalCourses?: IntFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalInstructors?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    specialties?: OrganizationUpdatespecialtiesInput | string[]
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    accreditation?: OrganizationUpdateaccreditationInput | string[]
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    achievements?: OrganizationUpdateachievementsInput | string[]
    partnerships?: OrganizationUpdatepartnershipsInput | string[]
    social?: JsonNullValueInput | InputJsonValue
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOrgTypeFieldUpdateOperationsInput | $Enums.OrgType
    logo?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    founded?: StringFieldUpdateOperationsInput | string
    totalCourses?: IntFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalInstructors?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    specialties?: OrganizationUpdatespecialtiesInput | string[]
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    accreditation?: OrganizationUpdateaccreditationInput | string[]
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    achievements?: OrganizationUpdateachievementsInput | string[]
    partnerships?: OrganizationUpdatepartnershipsInput | string[]
    social?: JsonNullValueInput | InputJsonValue
  }

  export type OrgStatsCreateInput = {
    id?: string
    graduationRate?: string | null
    employmentRate?: string | null
    averageSalary?: string | null
    studentSatisfaction: string
    organization: OrganizationCreateNestedOneWithoutStatsInput
  }

  export type OrgStatsUncheckedCreateInput = {
    id?: string
    graduationRate?: string | null
    employmentRate?: string | null
    averageSalary?: string | null
    studentSatisfaction: string
    organizationId: string
  }

  export type OrgStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    graduationRate?: NullableStringFieldUpdateOperationsInput | string | null
    employmentRate?: NullableStringFieldUpdateOperationsInput | string | null
    averageSalary?: NullableStringFieldUpdateOperationsInput | string | null
    studentSatisfaction?: StringFieldUpdateOperationsInput | string
    organization?: OrganizationUpdateOneRequiredWithoutStatsNestedInput
  }

  export type OrgStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    graduationRate?: NullableStringFieldUpdateOperationsInput | string | null
    employmentRate?: NullableStringFieldUpdateOperationsInput | string | null
    averageSalary?: NullableStringFieldUpdateOperationsInput | string | null
    studentSatisfaction?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type OrgStatsCreateManyInput = {
    id?: string
    graduationRate?: string | null
    employmentRate?: string | null
    averageSalary?: string | null
    studentSatisfaction: string
    organizationId: string
  }

  export type OrgStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    graduationRate?: NullableStringFieldUpdateOperationsInput | string | null
    employmentRate?: NullableStringFieldUpdateOperationsInput | string | null
    averageSalary?: NullableStringFieldUpdateOperationsInput | string | null
    studentSatisfaction?: StringFieldUpdateOperationsInput | string
  }

  export type OrgStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    graduationRate?: NullableStringFieldUpdateOperationsInput | string | null
    employmentRate?: NullableStringFieldUpdateOperationsInput | string | null
    averageSalary?: NullableStringFieldUpdateOperationsInput | string | null
    studentSatisfaction?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactCreateInput = {
    id?: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
    organization: OrganizationCreateNestedOneWithoutContactInput
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
    organizationId: string
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    organization?: OrganizationUpdateOneRequiredWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactCreateManyInput = {
    id?: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
    organizationId: string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    id?: string
    userName: string
    userAvatar: string
    rating: number
    comment: string
    createdAt?: Date | string
    instructor?: InstructorCreateNestedOneWithoutReviewsInput
    organization?: OrganizationCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    userName: string
    userAvatar: string
    rating: number
    comment: string
    createdAt?: Date | string
    instructorId?: string | null
    organizationId?: string | null
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAvatar?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: InstructorUpdateOneWithoutReviewsNestedInput
    organization?: OrganizationUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAvatar?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateManyInput = {
    id?: string
    userName: string
    userAvatar: string
    rating: number
    comment: string
    createdAt?: Date | string
    instructorId?: string | null
    organizationId?: string | null
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAvatar?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAvatar?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstructorCreateInput = {
    id?: string
    userId: string
    name: string
    title: string
    avatar: string
    coverImage?: string | null
    bio: string
    featured?: boolean | null
    longBio?: string | null
    rating: number
    totalStudents: number
    totalCourses: number
    experience?: string | null
    location?: string | null
    joinedDate?: string | null
    specialties?: InstructorCreatespecialtiesInput | string[]
    achievements?: InstructorCreateachievementsInput | string[]
    education?: InstructorCreateeducationInput | string[]
    social: JsonNullValueInput | InputJsonValue
    workExperience?: WorkExperienceCreateNestedManyWithoutInstructorInput
    organization?: OrganizationCreateNestedOneWithoutInstructorsInput
    reviews?: ReviewCreateNestedManyWithoutInstructorInput
    stats?: InstructorStatsCreateNestedOneWithoutInstructorInput
  }

  export type InstructorUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    title: string
    avatar: string
    coverImage?: string | null
    bio: string
    featured?: boolean | null
    longBio?: string | null
    rating: number
    totalStudents: number
    totalCourses: number
    experience?: string | null
    location?: string | null
    joinedDate?: string | null
    specialties?: InstructorCreatespecialtiesInput | string[]
    achievements?: InstructorCreateachievementsInput | string[]
    education?: InstructorCreateeducationInput | string[]
    social: JsonNullValueInput | InputJsonValue
    organizationId?: string | null
    workExperience?: WorkExperienceUncheckedCreateNestedManyWithoutInstructorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutInstructorInput
    stats?: InstructorStatsUncheckedCreateNestedOneWithoutInstructorInput
  }

  export type InstructorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    longBio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalCourses?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joinedDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: InstructorUpdatespecialtiesInput | string[]
    achievements?: InstructorUpdateachievementsInput | string[]
    education?: InstructorUpdateeducationInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    workExperience?: WorkExperienceUpdateManyWithoutInstructorNestedInput
    organization?: OrganizationUpdateOneWithoutInstructorsNestedInput
    reviews?: ReviewUpdateManyWithoutInstructorNestedInput
    stats?: InstructorStatsUpdateOneWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    longBio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalCourses?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joinedDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: InstructorUpdatespecialtiesInput | string[]
    achievements?: InstructorUpdateachievementsInput | string[]
    education?: InstructorUpdateeducationInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workExperience?: WorkExperienceUncheckedUpdateManyWithoutInstructorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutInstructorNestedInput
    stats?: InstructorStatsUncheckedUpdateOneWithoutInstructorNestedInput
  }

  export type InstructorCreateManyInput = {
    id?: string
    userId: string
    name: string
    title: string
    avatar: string
    coverImage?: string | null
    bio: string
    featured?: boolean | null
    longBio?: string | null
    rating: number
    totalStudents: number
    totalCourses: number
    experience?: string | null
    location?: string | null
    joinedDate?: string | null
    specialties?: InstructorCreatespecialtiesInput | string[]
    achievements?: InstructorCreateachievementsInput | string[]
    education?: InstructorCreateeducationInput | string[]
    social: JsonNullValueInput | InputJsonValue
    organizationId?: string | null
  }

  export type InstructorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    longBio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalCourses?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joinedDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: InstructorUpdatespecialtiesInput | string[]
    achievements?: InstructorUpdateachievementsInput | string[]
    education?: InstructorUpdateeducationInput | string[]
    social?: JsonNullValueInput | InputJsonValue
  }

  export type InstructorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    longBio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalCourses?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joinedDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: InstructorUpdatespecialtiesInput | string[]
    achievements?: InstructorUpdateachievementsInput | string[]
    education?: InstructorUpdateeducationInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkExperienceCreateInput = {
    id?: string
    company: string
    position: string
    duration: string
    instructor: InstructorCreateNestedOneWithoutWorkExperienceInput
  }

  export type WorkExperienceUncheckedCreateInput = {
    id?: string
    company: string
    position: string
    duration: string
    instructorId: string
  }

  export type WorkExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructor?: InstructorUpdateOneRequiredWithoutWorkExperienceNestedInput
  }

  export type WorkExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkExperienceCreateManyInput = {
    id?: string
    company: string
    position: string
    duration: string
    instructorId: string
  }

  export type WorkExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type WorkExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorStatsCreateInput = {
    id?: string
    totalReviews: number
    responseRate: string
    avgResponseTime: string
    instructor: InstructorCreateNestedOneWithoutStatsInput
  }

  export type InstructorStatsUncheckedCreateInput = {
    id?: string
    totalReviews: number
    responseRate: string
    avgResponseTime: string
    instructorId: string
  }

  export type InstructorStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    responseRate?: StringFieldUpdateOperationsInput | string
    avgResponseTime?: StringFieldUpdateOperationsInput | string
    instructor?: InstructorUpdateOneRequiredWithoutStatsNestedInput
  }

  export type InstructorStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    responseRate?: StringFieldUpdateOperationsInput | string
    avgResponseTime?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorStatsCreateManyInput = {
    id?: string
    totalReviews: number
    responseRate: string
    avgResponseTime: string
    instructorId: string
  }

  export type InstructorStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    responseRate?: StringFieldUpdateOperationsInput | string
    avgResponseTime?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    responseRate?: StringFieldUpdateOperationsInput | string
    avgResponseTime?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumOrgRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgRoleFilter<$PrismaModel> | $Enums.OrgRole
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type OrganizationMemberUserIdOrganizationIdCompoundUniqueInput = {
    userId: string
    organizationId: string
  }

  export type OrganizationMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
  }

  export type OrganizationMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
  }

  export type OrganizationMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumOrgRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrgRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrgRoleFilter<$PrismaModel>
    _max?: NestedEnumOrgRoleFilter<$PrismaModel>
  }

  export type EnumOrgTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgType | EnumOrgTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrgType[] | ListEnumOrgTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgType[] | ListEnumOrgTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgTypeFilter<$PrismaModel> | $Enums.OrgType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type InstructorListRelationFilter = {
    every?: InstructorWhereInput
    some?: InstructorWhereInput
    none?: InstructorWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type OrgStatsNullableScalarRelationFilter = {
    is?: OrgStatsWhereInput | null
    isNot?: OrgStatsWhereInput | null
  }

  export type ContactNullableScalarRelationFilter = {
    is?: ContactWhereInput | null
    isNot?: ContactWhereInput | null
  }

  export type OrganizationMemberListRelationFilter = {
    every?: OrganizationMemberWhereInput
    some?: OrganizationMemberWhereInput
    none?: OrganizationMemberWhereInput
  }

  export type InstructorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    logo?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    location?: SortOrder
    website?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    founded?: SortOrder
    totalCourses?: SortOrder
    totalStudents?: SortOrder
    totalInstructors?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    specialties?: SortOrder
    featured?: SortOrder
    verified?: SortOrder
    accreditation?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    achievements?: SortOrder
    partnerships?: SortOrder
    social?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    totalCourses?: SortOrder
    totalStudents?: SortOrder
    totalInstructors?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    logo?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    location?: SortOrder
    website?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    founded?: SortOrder
    totalCourses?: SortOrder
    totalStudents?: SortOrder
    totalInstructors?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    featured?: SortOrder
    verified?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    logo?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    location?: SortOrder
    website?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    founded?: SortOrder
    totalCourses?: SortOrder
    totalStudents?: SortOrder
    totalInstructors?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    featured?: SortOrder
    verified?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    totalCourses?: SortOrder
    totalStudents?: SortOrder
    totalInstructors?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
  }

  export type EnumOrgTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgType | EnumOrgTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrgType[] | ListEnumOrgTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgType[] | ListEnumOrgTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrgType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrgTypeFilter<$PrismaModel>
    _max?: NestedEnumOrgTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrgStatsCountOrderByAggregateInput = {
    id?: SortOrder
    graduationRate?: SortOrder
    employmentRate?: SortOrder
    averageSalary?: SortOrder
    studentSatisfaction?: SortOrder
    organizationId?: SortOrder
  }

  export type OrgStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    graduationRate?: SortOrder
    employmentRate?: SortOrder
    averageSalary?: SortOrder
    studentSatisfaction?: SortOrder
    organizationId?: SortOrder
  }

  export type OrgStatsMinOrderByAggregateInput = {
    id?: SortOrder
    graduationRate?: SortOrder
    employmentRate?: SortOrder
    averageSalary?: SortOrder
    studentSatisfaction?: SortOrder
    organizationId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    organizationId?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    organizationId?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    organizationId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InstructorNullableScalarRelationFilter = {
    is?: InstructorWhereInput | null
    isNot?: InstructorWhereInput | null
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    userAvatar?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    instructorId?: SortOrder
    organizationId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    userAvatar?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    instructorId?: SortOrder
    organizationId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    userAvatar?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    instructorId?: SortOrder
    organizationId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type WorkExperienceListRelationFilter = {
    every?: WorkExperienceWhereInput
    some?: WorkExperienceWhereInput
    none?: WorkExperienceWhereInput
  }

  export type InstructorStatsNullableScalarRelationFilter = {
    is?: InstructorStatsWhereInput | null
    isNot?: InstructorStatsWhereInput | null
  }

  export type WorkExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstructorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    avatar?: SortOrder
    coverImage?: SortOrder
    bio?: SortOrder
    featured?: SortOrder
    longBio?: SortOrder
    rating?: SortOrder
    totalStudents?: SortOrder
    totalCourses?: SortOrder
    experience?: SortOrder
    location?: SortOrder
    joinedDate?: SortOrder
    specialties?: SortOrder
    achievements?: SortOrder
    education?: SortOrder
    social?: SortOrder
    organizationId?: SortOrder
  }

  export type InstructorAvgOrderByAggregateInput = {
    rating?: SortOrder
    totalStudents?: SortOrder
    totalCourses?: SortOrder
  }

  export type InstructorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    avatar?: SortOrder
    coverImage?: SortOrder
    bio?: SortOrder
    featured?: SortOrder
    longBio?: SortOrder
    rating?: SortOrder
    totalStudents?: SortOrder
    totalCourses?: SortOrder
    experience?: SortOrder
    location?: SortOrder
    joinedDate?: SortOrder
    organizationId?: SortOrder
  }

  export type InstructorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    avatar?: SortOrder
    coverImage?: SortOrder
    bio?: SortOrder
    featured?: SortOrder
    longBio?: SortOrder
    rating?: SortOrder
    totalStudents?: SortOrder
    totalCourses?: SortOrder
    experience?: SortOrder
    location?: SortOrder
    joinedDate?: SortOrder
    organizationId?: SortOrder
  }

  export type InstructorSumOrderByAggregateInput = {
    rating?: SortOrder
    totalStudents?: SortOrder
    totalCourses?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type InstructorScalarRelationFilter = {
    is?: InstructorWhereInput
    isNot?: InstructorWhereInput
  }

  export type WorkExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    duration?: SortOrder
    instructorId?: SortOrder
  }

  export type WorkExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    duration?: SortOrder
    instructorId?: SortOrder
  }

  export type WorkExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    duration?: SortOrder
    instructorId?: SortOrder
  }

  export type InstructorStatsCountOrderByAggregateInput = {
    id?: SortOrder
    totalReviews?: SortOrder
    responseRate?: SortOrder
    avgResponseTime?: SortOrder
    instructorId?: SortOrder
  }

  export type InstructorStatsAvgOrderByAggregateInput = {
    totalReviews?: SortOrder
  }

  export type InstructorStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    totalReviews?: SortOrder
    responseRate?: SortOrder
    avgResponseTime?: SortOrder
    instructorId?: SortOrder
  }

  export type InstructorStatsMinOrderByAggregateInput = {
    id?: SortOrder
    totalReviews?: SortOrder
    responseRate?: SortOrder
    avgResponseTime?: SortOrder
    instructorId?: SortOrder
  }

  export type InstructorStatsSumOrderByAggregateInput = {
    totalReviews?: SortOrder
  }

  export type OrganizationCreateNestedOneWithoutMembersInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumOrgRoleFieldUpdateOperationsInput = {
    set?: $Enums.OrgRole
  }

  export type OrganizationUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    upsert?: OrganizationUpsertWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMembersInput, OrganizationUpdateWithoutMembersInput>, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type OrganizationCreatespecialtiesInput = {
    set: string[]
  }

  export type OrganizationCreateaccreditationInput = {
    set: string[]
  }

  export type OrganizationCreateachievementsInput = {
    set: string[]
  }

  export type OrganizationCreatepartnershipsInput = {
    set: string[]
  }

  export type InstructorCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<InstructorCreateWithoutOrganizationInput, InstructorUncheckedCreateWithoutOrganizationInput> | InstructorCreateWithoutOrganizationInput[] | InstructorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: InstructorCreateOrConnectWithoutOrganizationInput | InstructorCreateOrConnectWithoutOrganizationInput[]
    createMany?: InstructorCreateManyOrganizationInputEnvelope
    connect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ReviewCreateWithoutOrganizationInput, ReviewUncheckedCreateWithoutOrganizationInput> | ReviewCreateWithoutOrganizationInput[] | ReviewUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutOrganizationInput | ReviewCreateOrConnectWithoutOrganizationInput[]
    createMany?: ReviewCreateManyOrganizationInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type OrgStatsCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<OrgStatsCreateWithoutOrganizationInput, OrgStatsUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: OrgStatsCreateOrConnectWithoutOrganizationInput
    connect?: OrgStatsWhereUniqueInput
  }

  export type ContactCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<ContactCreateWithoutOrganizationInput, ContactUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: ContactCreateOrConnectWithoutOrganizationInput
    connect?: ContactWhereUniqueInput
  }

  export type OrganizationMemberCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type InstructorUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<InstructorCreateWithoutOrganizationInput, InstructorUncheckedCreateWithoutOrganizationInput> | InstructorCreateWithoutOrganizationInput[] | InstructorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: InstructorCreateOrConnectWithoutOrganizationInput | InstructorCreateOrConnectWithoutOrganizationInput[]
    createMany?: InstructorCreateManyOrganizationInputEnvelope
    connect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ReviewCreateWithoutOrganizationInput, ReviewUncheckedCreateWithoutOrganizationInput> | ReviewCreateWithoutOrganizationInput[] | ReviewUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutOrganizationInput | ReviewCreateOrConnectWithoutOrganizationInput[]
    createMany?: ReviewCreateManyOrganizationInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type OrgStatsUncheckedCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<OrgStatsCreateWithoutOrganizationInput, OrgStatsUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: OrgStatsCreateOrConnectWithoutOrganizationInput
    connect?: OrgStatsWhereUniqueInput
  }

  export type ContactUncheckedCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<ContactCreateWithoutOrganizationInput, ContactUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: ContactCreateOrConnectWithoutOrganizationInput
    connect?: ContactWhereUniqueInput
  }

  export type OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type EnumOrgTypeFieldUpdateOperationsInput = {
    set?: $Enums.OrgType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationUpdatespecialtiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrganizationUpdateaccreditationInput = {
    set?: string[]
    push?: string | string[]
  }

  export type OrganizationUpdateachievementsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type OrganizationUpdatepartnershipsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type InstructorUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<InstructorCreateWithoutOrganizationInput, InstructorUncheckedCreateWithoutOrganizationInput> | InstructorCreateWithoutOrganizationInput[] | InstructorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: InstructorCreateOrConnectWithoutOrganizationInput | InstructorCreateOrConnectWithoutOrganizationInput[]
    upsert?: InstructorUpsertWithWhereUniqueWithoutOrganizationInput | InstructorUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: InstructorCreateManyOrganizationInputEnvelope
    set?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    disconnect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    delete?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    connect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    update?: InstructorUpdateWithWhereUniqueWithoutOrganizationInput | InstructorUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: InstructorUpdateManyWithWhereWithoutOrganizationInput | InstructorUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: InstructorScalarWhereInput | InstructorScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ReviewCreateWithoutOrganizationInput, ReviewUncheckedCreateWithoutOrganizationInput> | ReviewCreateWithoutOrganizationInput[] | ReviewUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutOrganizationInput | ReviewCreateOrConnectWithoutOrganizationInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutOrganizationInput | ReviewUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ReviewCreateManyOrganizationInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutOrganizationInput | ReviewUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutOrganizationInput | ReviewUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type OrgStatsUpdateOneWithoutOrganizationNestedInput = {
    create?: XOR<OrgStatsCreateWithoutOrganizationInput, OrgStatsUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: OrgStatsCreateOrConnectWithoutOrganizationInput
    upsert?: OrgStatsUpsertWithoutOrganizationInput
    disconnect?: OrgStatsWhereInput | boolean
    delete?: OrgStatsWhereInput | boolean
    connect?: OrgStatsWhereUniqueInput
    update?: XOR<XOR<OrgStatsUpdateToOneWithWhereWithoutOrganizationInput, OrgStatsUpdateWithoutOrganizationInput>, OrgStatsUncheckedUpdateWithoutOrganizationInput>
  }

  export type ContactUpdateOneWithoutOrganizationNestedInput = {
    create?: XOR<ContactCreateWithoutOrganizationInput, ContactUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: ContactCreateOrConnectWithoutOrganizationInput
    upsert?: ContactUpsertWithoutOrganizationInput
    disconnect?: ContactWhereInput | boolean
    delete?: ContactWhereInput | boolean
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutOrganizationInput, ContactUpdateWithoutOrganizationInput>, ContactUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationMemberUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type InstructorUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<InstructorCreateWithoutOrganizationInput, InstructorUncheckedCreateWithoutOrganizationInput> | InstructorCreateWithoutOrganizationInput[] | InstructorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: InstructorCreateOrConnectWithoutOrganizationInput | InstructorCreateOrConnectWithoutOrganizationInput[]
    upsert?: InstructorUpsertWithWhereUniqueWithoutOrganizationInput | InstructorUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: InstructorCreateManyOrganizationInputEnvelope
    set?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    disconnect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    delete?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    connect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    update?: InstructorUpdateWithWhereUniqueWithoutOrganizationInput | InstructorUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: InstructorUpdateManyWithWhereWithoutOrganizationInput | InstructorUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: InstructorScalarWhereInput | InstructorScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ReviewCreateWithoutOrganizationInput, ReviewUncheckedCreateWithoutOrganizationInput> | ReviewCreateWithoutOrganizationInput[] | ReviewUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutOrganizationInput | ReviewCreateOrConnectWithoutOrganizationInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutOrganizationInput | ReviewUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ReviewCreateManyOrganizationInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutOrganizationInput | ReviewUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutOrganizationInput | ReviewUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type OrgStatsUncheckedUpdateOneWithoutOrganizationNestedInput = {
    create?: XOR<OrgStatsCreateWithoutOrganizationInput, OrgStatsUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: OrgStatsCreateOrConnectWithoutOrganizationInput
    upsert?: OrgStatsUpsertWithoutOrganizationInput
    disconnect?: OrgStatsWhereInput | boolean
    delete?: OrgStatsWhereInput | boolean
    connect?: OrgStatsWhereUniqueInput
    update?: XOR<XOR<OrgStatsUpdateToOneWithWhereWithoutOrganizationInput, OrgStatsUpdateWithoutOrganizationInput>, OrgStatsUncheckedUpdateWithoutOrganizationInput>
  }

  export type ContactUncheckedUpdateOneWithoutOrganizationNestedInput = {
    create?: XOR<ContactCreateWithoutOrganizationInput, ContactUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: ContactCreateOrConnectWithoutOrganizationInput
    upsert?: ContactUpsertWithoutOrganizationInput
    disconnect?: ContactWhereInput | boolean
    delete?: ContactWhereInput | boolean
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutOrganizationInput, ContactUpdateWithoutOrganizationInput>, ContactUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutStatsInput = {
    create?: XOR<OrganizationCreateWithoutStatsInput, OrganizationUncheckedCreateWithoutStatsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutStatsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrganizationUpdateOneRequiredWithoutStatsNestedInput = {
    create?: XOR<OrganizationCreateWithoutStatsInput, OrganizationUncheckedCreateWithoutStatsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutStatsInput
    upsert?: OrganizationUpsertWithoutStatsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutStatsInput, OrganizationUpdateWithoutStatsInput>, OrganizationUncheckedUpdateWithoutStatsInput>
  }

  export type OrganizationCreateNestedOneWithoutContactInput = {
    create?: XOR<OrganizationCreateWithoutContactInput, OrganizationUncheckedCreateWithoutContactInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutContactInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutContactNestedInput = {
    create?: XOR<OrganizationCreateWithoutContactInput, OrganizationUncheckedCreateWithoutContactInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutContactInput
    upsert?: OrganizationUpsertWithoutContactInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutContactInput, OrganizationUpdateWithoutContactInput>, OrganizationUncheckedUpdateWithoutContactInput>
  }

  export type InstructorCreateNestedOneWithoutReviewsInput = {
    create?: XOR<InstructorCreateWithoutReviewsInput, InstructorUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutReviewsInput
    connect?: InstructorWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutReviewsInput = {
    create?: XOR<OrganizationCreateWithoutReviewsInput, OrganizationUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutReviewsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InstructorUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<InstructorCreateWithoutReviewsInput, InstructorUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutReviewsInput
    upsert?: InstructorUpsertWithoutReviewsInput
    disconnect?: InstructorWhereInput | boolean
    delete?: InstructorWhereInput | boolean
    connect?: InstructorWhereUniqueInput
    update?: XOR<XOR<InstructorUpdateToOneWithWhereWithoutReviewsInput, InstructorUpdateWithoutReviewsInput>, InstructorUncheckedUpdateWithoutReviewsInput>
  }

  export type OrganizationUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<OrganizationCreateWithoutReviewsInput, OrganizationUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutReviewsInput
    upsert?: OrganizationUpsertWithoutReviewsInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutReviewsInput, OrganizationUpdateWithoutReviewsInput>, OrganizationUncheckedUpdateWithoutReviewsInput>
  }

  export type InstructorCreatespecialtiesInput = {
    set: string[]
  }

  export type InstructorCreateachievementsInput = {
    set: string[]
  }

  export type InstructorCreateeducationInput = {
    set: string[]
  }

  export type WorkExperienceCreateNestedManyWithoutInstructorInput = {
    create?: XOR<WorkExperienceCreateWithoutInstructorInput, WorkExperienceUncheckedCreateWithoutInstructorInput> | WorkExperienceCreateWithoutInstructorInput[] | WorkExperienceUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutInstructorInput | WorkExperienceCreateOrConnectWithoutInstructorInput[]
    createMany?: WorkExperienceCreateManyInstructorInputEnvelope
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
  }

  export type OrganizationCreateNestedOneWithoutInstructorsInput = {
    create?: XOR<OrganizationCreateWithoutInstructorsInput, OrganizationUncheckedCreateWithoutInstructorsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutInstructorsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutInstructorInput = {
    create?: XOR<ReviewCreateWithoutInstructorInput, ReviewUncheckedCreateWithoutInstructorInput> | ReviewCreateWithoutInstructorInput[] | ReviewUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutInstructorInput | ReviewCreateOrConnectWithoutInstructorInput[]
    createMany?: ReviewCreateManyInstructorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type InstructorStatsCreateNestedOneWithoutInstructorInput = {
    create?: XOR<InstructorStatsCreateWithoutInstructorInput, InstructorStatsUncheckedCreateWithoutInstructorInput>
    connectOrCreate?: InstructorStatsCreateOrConnectWithoutInstructorInput
    connect?: InstructorStatsWhereUniqueInput
  }

  export type WorkExperienceUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<WorkExperienceCreateWithoutInstructorInput, WorkExperienceUncheckedCreateWithoutInstructorInput> | WorkExperienceCreateWithoutInstructorInput[] | WorkExperienceUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutInstructorInput | WorkExperienceCreateOrConnectWithoutInstructorInput[]
    createMany?: WorkExperienceCreateManyInstructorInputEnvelope
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<ReviewCreateWithoutInstructorInput, ReviewUncheckedCreateWithoutInstructorInput> | ReviewCreateWithoutInstructorInput[] | ReviewUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutInstructorInput | ReviewCreateOrConnectWithoutInstructorInput[]
    createMany?: ReviewCreateManyInstructorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type InstructorStatsUncheckedCreateNestedOneWithoutInstructorInput = {
    create?: XOR<InstructorStatsCreateWithoutInstructorInput, InstructorStatsUncheckedCreateWithoutInstructorInput>
    connectOrCreate?: InstructorStatsCreateOrConnectWithoutInstructorInput
    connect?: InstructorStatsWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type InstructorUpdatespecialtiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type InstructorUpdateachievementsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type InstructorUpdateeducationInput = {
    set?: string[]
    push?: string | string[]
  }

  export type WorkExperienceUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<WorkExperienceCreateWithoutInstructorInput, WorkExperienceUncheckedCreateWithoutInstructorInput> | WorkExperienceCreateWithoutInstructorInput[] | WorkExperienceUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutInstructorInput | WorkExperienceCreateOrConnectWithoutInstructorInput[]
    upsert?: WorkExperienceUpsertWithWhereUniqueWithoutInstructorInput | WorkExperienceUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: WorkExperienceCreateManyInstructorInputEnvelope
    set?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    disconnect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    delete?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    update?: WorkExperienceUpdateWithWhereUniqueWithoutInstructorInput | WorkExperienceUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: WorkExperienceUpdateManyWithWhereWithoutInstructorInput | WorkExperienceUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
  }

  export type OrganizationUpdateOneWithoutInstructorsNestedInput = {
    create?: XOR<OrganizationCreateWithoutInstructorsInput, OrganizationUncheckedCreateWithoutInstructorsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutInstructorsInput
    upsert?: OrganizationUpsertWithoutInstructorsInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutInstructorsInput, OrganizationUpdateWithoutInstructorsInput>, OrganizationUncheckedUpdateWithoutInstructorsInput>
  }

  export type ReviewUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<ReviewCreateWithoutInstructorInput, ReviewUncheckedCreateWithoutInstructorInput> | ReviewCreateWithoutInstructorInput[] | ReviewUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutInstructorInput | ReviewCreateOrConnectWithoutInstructorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutInstructorInput | ReviewUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: ReviewCreateManyInstructorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutInstructorInput | ReviewUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutInstructorInput | ReviewUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type InstructorStatsUpdateOneWithoutInstructorNestedInput = {
    create?: XOR<InstructorStatsCreateWithoutInstructorInput, InstructorStatsUncheckedCreateWithoutInstructorInput>
    connectOrCreate?: InstructorStatsCreateOrConnectWithoutInstructorInput
    upsert?: InstructorStatsUpsertWithoutInstructorInput
    disconnect?: InstructorStatsWhereInput | boolean
    delete?: InstructorStatsWhereInput | boolean
    connect?: InstructorStatsWhereUniqueInput
    update?: XOR<XOR<InstructorStatsUpdateToOneWithWhereWithoutInstructorInput, InstructorStatsUpdateWithoutInstructorInput>, InstructorStatsUncheckedUpdateWithoutInstructorInput>
  }

  export type WorkExperienceUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<WorkExperienceCreateWithoutInstructorInput, WorkExperienceUncheckedCreateWithoutInstructorInput> | WorkExperienceCreateWithoutInstructorInput[] | WorkExperienceUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutInstructorInput | WorkExperienceCreateOrConnectWithoutInstructorInput[]
    upsert?: WorkExperienceUpsertWithWhereUniqueWithoutInstructorInput | WorkExperienceUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: WorkExperienceCreateManyInstructorInputEnvelope
    set?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    disconnect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    delete?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    update?: WorkExperienceUpdateWithWhereUniqueWithoutInstructorInput | WorkExperienceUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: WorkExperienceUpdateManyWithWhereWithoutInstructorInput | WorkExperienceUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<ReviewCreateWithoutInstructorInput, ReviewUncheckedCreateWithoutInstructorInput> | ReviewCreateWithoutInstructorInput[] | ReviewUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutInstructorInput | ReviewCreateOrConnectWithoutInstructorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutInstructorInput | ReviewUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: ReviewCreateManyInstructorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutInstructorInput | ReviewUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutInstructorInput | ReviewUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type InstructorStatsUncheckedUpdateOneWithoutInstructorNestedInput = {
    create?: XOR<InstructorStatsCreateWithoutInstructorInput, InstructorStatsUncheckedCreateWithoutInstructorInput>
    connectOrCreate?: InstructorStatsCreateOrConnectWithoutInstructorInput
    upsert?: InstructorStatsUpsertWithoutInstructorInput
    disconnect?: InstructorStatsWhereInput | boolean
    delete?: InstructorStatsWhereInput | boolean
    connect?: InstructorStatsWhereUniqueInput
    update?: XOR<XOR<InstructorStatsUpdateToOneWithWhereWithoutInstructorInput, InstructorStatsUpdateWithoutInstructorInput>, InstructorStatsUncheckedUpdateWithoutInstructorInput>
  }

  export type InstructorCreateNestedOneWithoutWorkExperienceInput = {
    create?: XOR<InstructorCreateWithoutWorkExperienceInput, InstructorUncheckedCreateWithoutWorkExperienceInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutWorkExperienceInput
    connect?: InstructorWhereUniqueInput
  }

  export type InstructorUpdateOneRequiredWithoutWorkExperienceNestedInput = {
    create?: XOR<InstructorCreateWithoutWorkExperienceInput, InstructorUncheckedCreateWithoutWorkExperienceInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutWorkExperienceInput
    upsert?: InstructorUpsertWithoutWorkExperienceInput
    connect?: InstructorWhereUniqueInput
    update?: XOR<XOR<InstructorUpdateToOneWithWhereWithoutWorkExperienceInput, InstructorUpdateWithoutWorkExperienceInput>, InstructorUncheckedUpdateWithoutWorkExperienceInput>
  }

  export type InstructorCreateNestedOneWithoutStatsInput = {
    create?: XOR<InstructorCreateWithoutStatsInput, InstructorUncheckedCreateWithoutStatsInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutStatsInput
    connect?: InstructorWhereUniqueInput
  }

  export type InstructorUpdateOneRequiredWithoutStatsNestedInput = {
    create?: XOR<InstructorCreateWithoutStatsInput, InstructorUncheckedCreateWithoutStatsInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutStatsInput
    upsert?: InstructorUpsertWithoutStatsInput
    connect?: InstructorWhereUniqueInput
    update?: XOR<XOR<InstructorUpdateToOneWithWhereWithoutStatsInput, InstructorUpdateWithoutStatsInput>, InstructorUncheckedUpdateWithoutStatsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumOrgRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgRoleFilter<$PrismaModel> | $Enums.OrgRole
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumOrgRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrgRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrgRoleFilter<$PrismaModel>
    _max?: NestedEnumOrgRoleFilter<$PrismaModel>
  }

  export type NestedEnumOrgTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgType | EnumOrgTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrgType[] | ListEnumOrgTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgType[] | ListEnumOrgTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgTypeFilter<$PrismaModel> | $Enums.OrgType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumOrgTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgType | EnumOrgTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrgType[] | ListEnumOrgTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgType[] | ListEnumOrgTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrgType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrgTypeFilter<$PrismaModel>
    _max?: NestedEnumOrgTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type OrganizationCreateWithoutMembersInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.OrgType
    logo: string
    coverImage: string
    description: string
    longDescription: string
    location: string
    website: string
    email: string
    phone: string
    founded: string
    totalCourses: number
    totalStudents: number
    totalInstructors: number
    rating: number
    reviewCount: number
    specialties?: OrganizationCreatespecialtiesInput | string[]
    featured: boolean
    verified: boolean
    accreditation?: OrganizationCreateaccreditationInput | string[]
    mission: string
    vision: string
    achievements?: OrganizationCreateachievementsInput | string[]
    partnerships?: OrganizationCreatepartnershipsInput | string[]
    social: JsonNullValueInput | InputJsonValue
    instructors?: InstructorCreateNestedManyWithoutOrganizationInput
    reviews?: ReviewCreateNestedManyWithoutOrganizationInput
    stats?: OrgStatsCreateNestedOneWithoutOrganizationInput
    contact?: ContactCreateNestedOneWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMembersInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.OrgType
    logo: string
    coverImage: string
    description: string
    longDescription: string
    location: string
    website: string
    email: string
    phone: string
    founded: string
    totalCourses: number
    totalStudents: number
    totalInstructors: number
    rating: number
    reviewCount: number
    specialties?: OrganizationCreatespecialtiesInput | string[]
    featured: boolean
    verified: boolean
    accreditation?: OrganizationCreateaccreditationInput | string[]
    mission: string
    vision: string
    achievements?: OrganizationCreateachievementsInput | string[]
    partnerships?: OrganizationCreatepartnershipsInput | string[]
    social: JsonNullValueInput | InputJsonValue
    instructors?: InstructorUncheckedCreateNestedManyWithoutOrganizationInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutOrganizationInput
    stats?: OrgStatsUncheckedCreateNestedOneWithoutOrganizationInput
    contact?: ContactUncheckedCreateNestedOneWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutMembersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
  }

  export type OrganizationUpsertWithoutMembersInput = {
    update: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMembersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type OrganizationUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOrgTypeFieldUpdateOperationsInput | $Enums.OrgType
    logo?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    founded?: StringFieldUpdateOperationsInput | string
    totalCourses?: IntFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalInstructors?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    specialties?: OrganizationUpdatespecialtiesInput | string[]
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    accreditation?: OrganizationUpdateaccreditationInput | string[]
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    achievements?: OrganizationUpdateachievementsInput | string[]
    partnerships?: OrganizationUpdatepartnershipsInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    instructors?: InstructorUpdateManyWithoutOrganizationNestedInput
    reviews?: ReviewUpdateManyWithoutOrganizationNestedInput
    stats?: OrgStatsUpdateOneWithoutOrganizationNestedInput
    contact?: ContactUpdateOneWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOrgTypeFieldUpdateOperationsInput | $Enums.OrgType
    logo?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    founded?: StringFieldUpdateOperationsInput | string
    totalCourses?: IntFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalInstructors?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    specialties?: OrganizationUpdatespecialtiesInput | string[]
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    accreditation?: OrganizationUpdateaccreditationInput | string[]
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    achievements?: OrganizationUpdateachievementsInput | string[]
    partnerships?: OrganizationUpdatepartnershipsInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    instructors?: InstructorUncheckedUpdateManyWithoutOrganizationNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutOrganizationNestedInput
    stats?: OrgStatsUncheckedUpdateOneWithoutOrganizationNestedInput
    contact?: ContactUncheckedUpdateOneWithoutOrganizationNestedInput
  }

  export type InstructorCreateWithoutOrganizationInput = {
    id?: string
    userId: string
    name: string
    title: string
    avatar: string
    coverImage?: string | null
    bio: string
    featured?: boolean | null
    longBio?: string | null
    rating: number
    totalStudents: number
    totalCourses: number
    experience?: string | null
    location?: string | null
    joinedDate?: string | null
    specialties?: InstructorCreatespecialtiesInput | string[]
    achievements?: InstructorCreateachievementsInput | string[]
    education?: InstructorCreateeducationInput | string[]
    social: JsonNullValueInput | InputJsonValue
    workExperience?: WorkExperienceCreateNestedManyWithoutInstructorInput
    reviews?: ReviewCreateNestedManyWithoutInstructorInput
    stats?: InstructorStatsCreateNestedOneWithoutInstructorInput
  }

  export type InstructorUncheckedCreateWithoutOrganizationInput = {
    id?: string
    userId: string
    name: string
    title: string
    avatar: string
    coverImage?: string | null
    bio: string
    featured?: boolean | null
    longBio?: string | null
    rating: number
    totalStudents: number
    totalCourses: number
    experience?: string | null
    location?: string | null
    joinedDate?: string | null
    specialties?: InstructorCreatespecialtiesInput | string[]
    achievements?: InstructorCreateachievementsInput | string[]
    education?: InstructorCreateeducationInput | string[]
    social: JsonNullValueInput | InputJsonValue
    workExperience?: WorkExperienceUncheckedCreateNestedManyWithoutInstructorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutInstructorInput
    stats?: InstructorStatsUncheckedCreateNestedOneWithoutInstructorInput
  }

  export type InstructorCreateOrConnectWithoutOrganizationInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutOrganizationInput, InstructorUncheckedCreateWithoutOrganizationInput>
  }

  export type InstructorCreateManyOrganizationInputEnvelope = {
    data: InstructorCreateManyOrganizationInput | InstructorCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutOrganizationInput = {
    id?: string
    userName: string
    userAvatar: string
    rating: number
    comment: string
    createdAt?: Date | string
    instructor?: InstructorCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutOrganizationInput = {
    id?: string
    userName: string
    userAvatar: string
    rating: number
    comment: string
    createdAt?: Date | string
    instructorId?: string | null
  }

  export type ReviewCreateOrConnectWithoutOrganizationInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutOrganizationInput, ReviewUncheckedCreateWithoutOrganizationInput>
  }

  export type ReviewCreateManyOrganizationInputEnvelope = {
    data: ReviewCreateManyOrganizationInput | ReviewCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type OrgStatsCreateWithoutOrganizationInput = {
    id?: string
    graduationRate?: string | null
    employmentRate?: string | null
    averageSalary?: string | null
    studentSatisfaction: string
  }

  export type OrgStatsUncheckedCreateWithoutOrganizationInput = {
    id?: string
    graduationRate?: string | null
    employmentRate?: string | null
    averageSalary?: string | null
    studentSatisfaction: string
  }

  export type OrgStatsCreateOrConnectWithoutOrganizationInput = {
    where: OrgStatsWhereUniqueInput
    create: XOR<OrgStatsCreateWithoutOrganizationInput, OrgStatsUncheckedCreateWithoutOrganizationInput>
  }

  export type ContactCreateWithoutOrganizationInput = {
    id?: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
  }

  export type ContactUncheckedCreateWithoutOrganizationInput = {
    id?: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
  }

  export type ContactCreateOrConnectWithoutOrganizationInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutOrganizationInput, ContactUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMemberCreateWithoutOrganizationInput = {
    id?: string
    userId: string
    role: $Enums.OrgRole
  }

  export type OrganizationMemberUncheckedCreateWithoutOrganizationInput = {
    id?: string
    userId: string
    role: $Enums.OrgRole
  }

  export type OrganizationMemberCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    create: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMemberCreateManyOrganizationInputEnvelope = {
    data: OrganizationMemberCreateManyOrganizationInput | OrganizationMemberCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type InstructorUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: InstructorWhereUniqueInput
    update: XOR<InstructorUpdateWithoutOrganizationInput, InstructorUncheckedUpdateWithoutOrganizationInput>
    create: XOR<InstructorCreateWithoutOrganizationInput, InstructorUncheckedCreateWithoutOrganizationInput>
  }

  export type InstructorUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: InstructorWhereUniqueInput
    data: XOR<InstructorUpdateWithoutOrganizationInput, InstructorUncheckedUpdateWithoutOrganizationInput>
  }

  export type InstructorUpdateManyWithWhereWithoutOrganizationInput = {
    where: InstructorScalarWhereInput
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type InstructorScalarWhereInput = {
    AND?: InstructorScalarWhereInput | InstructorScalarWhereInput[]
    OR?: InstructorScalarWhereInput[]
    NOT?: InstructorScalarWhereInput | InstructorScalarWhereInput[]
    id?: StringFilter<"Instructor"> | string
    userId?: StringFilter<"Instructor"> | string
    name?: StringFilter<"Instructor"> | string
    title?: StringFilter<"Instructor"> | string
    avatar?: StringFilter<"Instructor"> | string
    coverImage?: StringNullableFilter<"Instructor"> | string | null
    bio?: StringFilter<"Instructor"> | string
    featured?: BoolNullableFilter<"Instructor"> | boolean | null
    longBio?: StringNullableFilter<"Instructor"> | string | null
    rating?: FloatFilter<"Instructor"> | number
    totalStudents?: IntFilter<"Instructor"> | number
    totalCourses?: IntFilter<"Instructor"> | number
    experience?: StringNullableFilter<"Instructor"> | string | null
    location?: StringNullableFilter<"Instructor"> | string | null
    joinedDate?: StringNullableFilter<"Instructor"> | string | null
    specialties?: StringNullableListFilter<"Instructor">
    achievements?: StringNullableListFilter<"Instructor">
    education?: StringNullableListFilter<"Instructor">
    social?: JsonFilter<"Instructor">
    organizationId?: StringNullableFilter<"Instructor"> | string | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutOrganizationInput, ReviewUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ReviewCreateWithoutOrganizationInput, ReviewUncheckedCreateWithoutOrganizationInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutOrganizationInput, ReviewUncheckedUpdateWithoutOrganizationInput>
  }

  export type ReviewUpdateManyWithWhereWithoutOrganizationInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    userName?: StringFilter<"Review"> | string
    userAvatar?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    instructorId?: StringNullableFilter<"Review"> | string | null
    organizationId?: StringNullableFilter<"Review"> | string | null
  }

  export type OrgStatsUpsertWithoutOrganizationInput = {
    update: XOR<OrgStatsUpdateWithoutOrganizationInput, OrgStatsUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrgStatsCreateWithoutOrganizationInput, OrgStatsUncheckedCreateWithoutOrganizationInput>
    where?: OrgStatsWhereInput
  }

  export type OrgStatsUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: OrgStatsWhereInput
    data: XOR<OrgStatsUpdateWithoutOrganizationInput, OrgStatsUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrgStatsUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    graduationRate?: NullableStringFieldUpdateOperationsInput | string | null
    employmentRate?: NullableStringFieldUpdateOperationsInput | string | null
    averageSalary?: NullableStringFieldUpdateOperationsInput | string | null
    studentSatisfaction?: StringFieldUpdateOperationsInput | string
  }

  export type OrgStatsUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    graduationRate?: NullableStringFieldUpdateOperationsInput | string | null
    employmentRate?: NullableStringFieldUpdateOperationsInput | string | null
    averageSalary?: NullableStringFieldUpdateOperationsInput | string | null
    studentSatisfaction?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUpsertWithoutOrganizationInput = {
    update: XOR<ContactUpdateWithoutOrganizationInput, ContactUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ContactCreateWithoutOrganizationInput, ContactUncheckedCreateWithoutOrganizationInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutOrganizationInput, ContactUncheckedUpdateWithoutOrganizationInput>
  }

  export type ContactUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    update: XOR<OrganizationMemberUpdateWithoutOrganizationInput, OrganizationMemberUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    data: XOR<OrganizationMemberUpdateWithoutOrganizationInput, OrganizationMemberUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationMemberScalarWhereInput
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type OrganizationMemberScalarWhereInput = {
    AND?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
    OR?: OrganizationMemberScalarWhereInput[]
    NOT?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
    id?: StringFilter<"OrganizationMember"> | string
    userId?: StringFilter<"OrganizationMember"> | string
    organizationId?: StringFilter<"OrganizationMember"> | string
    role?: EnumOrgRoleFilter<"OrganizationMember"> | $Enums.OrgRole
  }

  export type OrganizationCreateWithoutStatsInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.OrgType
    logo: string
    coverImage: string
    description: string
    longDescription: string
    location: string
    website: string
    email: string
    phone: string
    founded: string
    totalCourses: number
    totalStudents: number
    totalInstructors: number
    rating: number
    reviewCount: number
    specialties?: OrganizationCreatespecialtiesInput | string[]
    featured: boolean
    verified: boolean
    accreditation?: OrganizationCreateaccreditationInput | string[]
    mission: string
    vision: string
    achievements?: OrganizationCreateachievementsInput | string[]
    partnerships?: OrganizationCreatepartnershipsInput | string[]
    social: JsonNullValueInput | InputJsonValue
    instructors?: InstructorCreateNestedManyWithoutOrganizationInput
    reviews?: ReviewCreateNestedManyWithoutOrganizationInput
    contact?: ContactCreateNestedOneWithoutOrganizationInput
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutStatsInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.OrgType
    logo: string
    coverImage: string
    description: string
    longDescription: string
    location: string
    website: string
    email: string
    phone: string
    founded: string
    totalCourses: number
    totalStudents: number
    totalInstructors: number
    rating: number
    reviewCount: number
    specialties?: OrganizationCreatespecialtiesInput | string[]
    featured: boolean
    verified: boolean
    accreditation?: OrganizationCreateaccreditationInput | string[]
    mission: string
    vision: string
    achievements?: OrganizationCreateachievementsInput | string[]
    partnerships?: OrganizationCreatepartnershipsInput | string[]
    social: JsonNullValueInput | InputJsonValue
    instructors?: InstructorUncheckedCreateNestedManyWithoutOrganizationInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutOrganizationInput
    contact?: ContactUncheckedCreateNestedOneWithoutOrganizationInput
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutStatsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutStatsInput, OrganizationUncheckedCreateWithoutStatsInput>
  }

  export type OrganizationUpsertWithoutStatsInput = {
    update: XOR<OrganizationUpdateWithoutStatsInput, OrganizationUncheckedUpdateWithoutStatsInput>
    create: XOR<OrganizationCreateWithoutStatsInput, OrganizationUncheckedCreateWithoutStatsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutStatsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutStatsInput, OrganizationUncheckedUpdateWithoutStatsInput>
  }

  export type OrganizationUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOrgTypeFieldUpdateOperationsInput | $Enums.OrgType
    logo?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    founded?: StringFieldUpdateOperationsInput | string
    totalCourses?: IntFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalInstructors?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    specialties?: OrganizationUpdatespecialtiesInput | string[]
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    accreditation?: OrganizationUpdateaccreditationInput | string[]
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    achievements?: OrganizationUpdateachievementsInput | string[]
    partnerships?: OrganizationUpdatepartnershipsInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    instructors?: InstructorUpdateManyWithoutOrganizationNestedInput
    reviews?: ReviewUpdateManyWithoutOrganizationNestedInput
    contact?: ContactUpdateOneWithoutOrganizationNestedInput
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOrgTypeFieldUpdateOperationsInput | $Enums.OrgType
    logo?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    founded?: StringFieldUpdateOperationsInput | string
    totalCourses?: IntFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalInstructors?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    specialties?: OrganizationUpdatespecialtiesInput | string[]
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    accreditation?: OrganizationUpdateaccreditationInput | string[]
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    achievements?: OrganizationUpdateachievementsInput | string[]
    partnerships?: OrganizationUpdatepartnershipsInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    instructors?: InstructorUncheckedUpdateManyWithoutOrganizationNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutOrganizationNestedInput
    contact?: ContactUncheckedUpdateOneWithoutOrganizationNestedInput
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutContactInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.OrgType
    logo: string
    coverImage: string
    description: string
    longDescription: string
    location: string
    website: string
    email: string
    phone: string
    founded: string
    totalCourses: number
    totalStudents: number
    totalInstructors: number
    rating: number
    reviewCount: number
    specialties?: OrganizationCreatespecialtiesInput | string[]
    featured: boolean
    verified: boolean
    accreditation?: OrganizationCreateaccreditationInput | string[]
    mission: string
    vision: string
    achievements?: OrganizationCreateachievementsInput | string[]
    partnerships?: OrganizationCreatepartnershipsInput | string[]
    social: JsonNullValueInput | InputJsonValue
    instructors?: InstructorCreateNestedManyWithoutOrganizationInput
    reviews?: ReviewCreateNestedManyWithoutOrganizationInput
    stats?: OrgStatsCreateNestedOneWithoutOrganizationInput
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutContactInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.OrgType
    logo: string
    coverImage: string
    description: string
    longDescription: string
    location: string
    website: string
    email: string
    phone: string
    founded: string
    totalCourses: number
    totalStudents: number
    totalInstructors: number
    rating: number
    reviewCount: number
    specialties?: OrganizationCreatespecialtiesInput | string[]
    featured: boolean
    verified: boolean
    accreditation?: OrganizationCreateaccreditationInput | string[]
    mission: string
    vision: string
    achievements?: OrganizationCreateachievementsInput | string[]
    partnerships?: OrganizationCreatepartnershipsInput | string[]
    social: JsonNullValueInput | InputJsonValue
    instructors?: InstructorUncheckedCreateNestedManyWithoutOrganizationInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutOrganizationInput
    stats?: OrgStatsUncheckedCreateNestedOneWithoutOrganizationInput
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutContactInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutContactInput, OrganizationUncheckedCreateWithoutContactInput>
  }

  export type OrganizationUpsertWithoutContactInput = {
    update: XOR<OrganizationUpdateWithoutContactInput, OrganizationUncheckedUpdateWithoutContactInput>
    create: XOR<OrganizationCreateWithoutContactInput, OrganizationUncheckedCreateWithoutContactInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutContactInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutContactInput, OrganizationUncheckedUpdateWithoutContactInput>
  }

  export type OrganizationUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOrgTypeFieldUpdateOperationsInput | $Enums.OrgType
    logo?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    founded?: StringFieldUpdateOperationsInput | string
    totalCourses?: IntFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalInstructors?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    specialties?: OrganizationUpdatespecialtiesInput | string[]
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    accreditation?: OrganizationUpdateaccreditationInput | string[]
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    achievements?: OrganizationUpdateachievementsInput | string[]
    partnerships?: OrganizationUpdatepartnershipsInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    instructors?: InstructorUpdateManyWithoutOrganizationNestedInput
    reviews?: ReviewUpdateManyWithoutOrganizationNestedInput
    stats?: OrgStatsUpdateOneWithoutOrganizationNestedInput
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOrgTypeFieldUpdateOperationsInput | $Enums.OrgType
    logo?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    founded?: StringFieldUpdateOperationsInput | string
    totalCourses?: IntFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalInstructors?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    specialties?: OrganizationUpdatespecialtiesInput | string[]
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    accreditation?: OrganizationUpdateaccreditationInput | string[]
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    achievements?: OrganizationUpdateachievementsInput | string[]
    partnerships?: OrganizationUpdatepartnershipsInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    instructors?: InstructorUncheckedUpdateManyWithoutOrganizationNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutOrganizationNestedInput
    stats?: OrgStatsUncheckedUpdateOneWithoutOrganizationNestedInput
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type InstructorCreateWithoutReviewsInput = {
    id?: string
    userId: string
    name: string
    title: string
    avatar: string
    coverImage?: string | null
    bio: string
    featured?: boolean | null
    longBio?: string | null
    rating: number
    totalStudents: number
    totalCourses: number
    experience?: string | null
    location?: string | null
    joinedDate?: string | null
    specialties?: InstructorCreatespecialtiesInput | string[]
    achievements?: InstructorCreateachievementsInput | string[]
    education?: InstructorCreateeducationInput | string[]
    social: JsonNullValueInput | InputJsonValue
    workExperience?: WorkExperienceCreateNestedManyWithoutInstructorInput
    organization?: OrganizationCreateNestedOneWithoutInstructorsInput
    stats?: InstructorStatsCreateNestedOneWithoutInstructorInput
  }

  export type InstructorUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    name: string
    title: string
    avatar: string
    coverImage?: string | null
    bio: string
    featured?: boolean | null
    longBio?: string | null
    rating: number
    totalStudents: number
    totalCourses: number
    experience?: string | null
    location?: string | null
    joinedDate?: string | null
    specialties?: InstructorCreatespecialtiesInput | string[]
    achievements?: InstructorCreateachievementsInput | string[]
    education?: InstructorCreateeducationInput | string[]
    social: JsonNullValueInput | InputJsonValue
    organizationId?: string | null
    workExperience?: WorkExperienceUncheckedCreateNestedManyWithoutInstructorInput
    stats?: InstructorStatsUncheckedCreateNestedOneWithoutInstructorInput
  }

  export type InstructorCreateOrConnectWithoutReviewsInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutReviewsInput, InstructorUncheckedCreateWithoutReviewsInput>
  }

  export type OrganizationCreateWithoutReviewsInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.OrgType
    logo: string
    coverImage: string
    description: string
    longDescription: string
    location: string
    website: string
    email: string
    phone: string
    founded: string
    totalCourses: number
    totalStudents: number
    totalInstructors: number
    rating: number
    reviewCount: number
    specialties?: OrganizationCreatespecialtiesInput | string[]
    featured: boolean
    verified: boolean
    accreditation?: OrganizationCreateaccreditationInput | string[]
    mission: string
    vision: string
    achievements?: OrganizationCreateachievementsInput | string[]
    partnerships?: OrganizationCreatepartnershipsInput | string[]
    social: JsonNullValueInput | InputJsonValue
    instructors?: InstructorCreateNestedManyWithoutOrganizationInput
    stats?: OrgStatsCreateNestedOneWithoutOrganizationInput
    contact?: ContactCreateNestedOneWithoutOrganizationInput
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.OrgType
    logo: string
    coverImage: string
    description: string
    longDescription: string
    location: string
    website: string
    email: string
    phone: string
    founded: string
    totalCourses: number
    totalStudents: number
    totalInstructors: number
    rating: number
    reviewCount: number
    specialties?: OrganizationCreatespecialtiesInput | string[]
    featured: boolean
    verified: boolean
    accreditation?: OrganizationCreateaccreditationInput | string[]
    mission: string
    vision: string
    achievements?: OrganizationCreateachievementsInput | string[]
    partnerships?: OrganizationCreatepartnershipsInput | string[]
    social: JsonNullValueInput | InputJsonValue
    instructors?: InstructorUncheckedCreateNestedManyWithoutOrganizationInput
    stats?: OrgStatsUncheckedCreateNestedOneWithoutOrganizationInput
    contact?: ContactUncheckedCreateNestedOneWithoutOrganizationInput
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutReviewsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutReviewsInput, OrganizationUncheckedCreateWithoutReviewsInput>
  }

  export type InstructorUpsertWithoutReviewsInput = {
    update: XOR<InstructorUpdateWithoutReviewsInput, InstructorUncheckedUpdateWithoutReviewsInput>
    create: XOR<InstructorCreateWithoutReviewsInput, InstructorUncheckedCreateWithoutReviewsInput>
    where?: InstructorWhereInput
  }

  export type InstructorUpdateToOneWithWhereWithoutReviewsInput = {
    where?: InstructorWhereInput
    data: XOR<InstructorUpdateWithoutReviewsInput, InstructorUncheckedUpdateWithoutReviewsInput>
  }

  export type InstructorUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    longBio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalCourses?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joinedDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: InstructorUpdatespecialtiesInput | string[]
    achievements?: InstructorUpdateachievementsInput | string[]
    education?: InstructorUpdateeducationInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    workExperience?: WorkExperienceUpdateManyWithoutInstructorNestedInput
    organization?: OrganizationUpdateOneWithoutInstructorsNestedInput
    stats?: InstructorStatsUpdateOneWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    longBio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalCourses?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joinedDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: InstructorUpdatespecialtiesInput | string[]
    achievements?: InstructorUpdateachievementsInput | string[]
    education?: InstructorUpdateeducationInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workExperience?: WorkExperienceUncheckedUpdateManyWithoutInstructorNestedInput
    stats?: InstructorStatsUncheckedUpdateOneWithoutInstructorNestedInput
  }

  export type OrganizationUpsertWithoutReviewsInput = {
    update: XOR<OrganizationUpdateWithoutReviewsInput, OrganizationUncheckedUpdateWithoutReviewsInput>
    create: XOR<OrganizationCreateWithoutReviewsInput, OrganizationUncheckedCreateWithoutReviewsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutReviewsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutReviewsInput, OrganizationUncheckedUpdateWithoutReviewsInput>
  }

  export type OrganizationUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOrgTypeFieldUpdateOperationsInput | $Enums.OrgType
    logo?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    founded?: StringFieldUpdateOperationsInput | string
    totalCourses?: IntFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalInstructors?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    specialties?: OrganizationUpdatespecialtiesInput | string[]
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    accreditation?: OrganizationUpdateaccreditationInput | string[]
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    achievements?: OrganizationUpdateachievementsInput | string[]
    partnerships?: OrganizationUpdatepartnershipsInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    instructors?: InstructorUpdateManyWithoutOrganizationNestedInput
    stats?: OrgStatsUpdateOneWithoutOrganizationNestedInput
    contact?: ContactUpdateOneWithoutOrganizationNestedInput
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOrgTypeFieldUpdateOperationsInput | $Enums.OrgType
    logo?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    founded?: StringFieldUpdateOperationsInput | string
    totalCourses?: IntFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalInstructors?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    specialties?: OrganizationUpdatespecialtiesInput | string[]
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    accreditation?: OrganizationUpdateaccreditationInput | string[]
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    achievements?: OrganizationUpdateachievementsInput | string[]
    partnerships?: OrganizationUpdatepartnershipsInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    instructors?: InstructorUncheckedUpdateManyWithoutOrganizationNestedInput
    stats?: OrgStatsUncheckedUpdateOneWithoutOrganizationNestedInput
    contact?: ContactUncheckedUpdateOneWithoutOrganizationNestedInput
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type WorkExperienceCreateWithoutInstructorInput = {
    id?: string
    company: string
    position: string
    duration: string
  }

  export type WorkExperienceUncheckedCreateWithoutInstructorInput = {
    id?: string
    company: string
    position: string
    duration: string
  }

  export type WorkExperienceCreateOrConnectWithoutInstructorInput = {
    where: WorkExperienceWhereUniqueInput
    create: XOR<WorkExperienceCreateWithoutInstructorInput, WorkExperienceUncheckedCreateWithoutInstructorInput>
  }

  export type WorkExperienceCreateManyInstructorInputEnvelope = {
    data: WorkExperienceCreateManyInstructorInput | WorkExperienceCreateManyInstructorInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationCreateWithoutInstructorsInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.OrgType
    logo: string
    coverImage: string
    description: string
    longDescription: string
    location: string
    website: string
    email: string
    phone: string
    founded: string
    totalCourses: number
    totalStudents: number
    totalInstructors: number
    rating: number
    reviewCount: number
    specialties?: OrganizationCreatespecialtiesInput | string[]
    featured: boolean
    verified: boolean
    accreditation?: OrganizationCreateaccreditationInput | string[]
    mission: string
    vision: string
    achievements?: OrganizationCreateachievementsInput | string[]
    partnerships?: OrganizationCreatepartnershipsInput | string[]
    social: JsonNullValueInput | InputJsonValue
    reviews?: ReviewCreateNestedManyWithoutOrganizationInput
    stats?: OrgStatsCreateNestedOneWithoutOrganizationInput
    contact?: ContactCreateNestedOneWithoutOrganizationInput
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutInstructorsInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.OrgType
    logo: string
    coverImage: string
    description: string
    longDescription: string
    location: string
    website: string
    email: string
    phone: string
    founded: string
    totalCourses: number
    totalStudents: number
    totalInstructors: number
    rating: number
    reviewCount: number
    specialties?: OrganizationCreatespecialtiesInput | string[]
    featured: boolean
    verified: boolean
    accreditation?: OrganizationCreateaccreditationInput | string[]
    mission: string
    vision: string
    achievements?: OrganizationCreateachievementsInput | string[]
    partnerships?: OrganizationCreatepartnershipsInput | string[]
    social: JsonNullValueInput | InputJsonValue
    reviews?: ReviewUncheckedCreateNestedManyWithoutOrganizationInput
    stats?: OrgStatsUncheckedCreateNestedOneWithoutOrganizationInput
    contact?: ContactUncheckedCreateNestedOneWithoutOrganizationInput
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutInstructorsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutInstructorsInput, OrganizationUncheckedCreateWithoutInstructorsInput>
  }

  export type ReviewCreateWithoutInstructorInput = {
    id?: string
    userName: string
    userAvatar: string
    rating: number
    comment: string
    createdAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutInstructorInput = {
    id?: string
    userName: string
    userAvatar: string
    rating: number
    comment: string
    createdAt?: Date | string
    organizationId?: string | null
  }

  export type ReviewCreateOrConnectWithoutInstructorInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutInstructorInput, ReviewUncheckedCreateWithoutInstructorInput>
  }

  export type ReviewCreateManyInstructorInputEnvelope = {
    data: ReviewCreateManyInstructorInput | ReviewCreateManyInstructorInput[]
    skipDuplicates?: boolean
  }

  export type InstructorStatsCreateWithoutInstructorInput = {
    id?: string
    totalReviews: number
    responseRate: string
    avgResponseTime: string
  }

  export type InstructorStatsUncheckedCreateWithoutInstructorInput = {
    id?: string
    totalReviews: number
    responseRate: string
    avgResponseTime: string
  }

  export type InstructorStatsCreateOrConnectWithoutInstructorInput = {
    where: InstructorStatsWhereUniqueInput
    create: XOR<InstructorStatsCreateWithoutInstructorInput, InstructorStatsUncheckedCreateWithoutInstructorInput>
  }

  export type WorkExperienceUpsertWithWhereUniqueWithoutInstructorInput = {
    where: WorkExperienceWhereUniqueInput
    update: XOR<WorkExperienceUpdateWithoutInstructorInput, WorkExperienceUncheckedUpdateWithoutInstructorInput>
    create: XOR<WorkExperienceCreateWithoutInstructorInput, WorkExperienceUncheckedCreateWithoutInstructorInput>
  }

  export type WorkExperienceUpdateWithWhereUniqueWithoutInstructorInput = {
    where: WorkExperienceWhereUniqueInput
    data: XOR<WorkExperienceUpdateWithoutInstructorInput, WorkExperienceUncheckedUpdateWithoutInstructorInput>
  }

  export type WorkExperienceUpdateManyWithWhereWithoutInstructorInput = {
    where: WorkExperienceScalarWhereInput
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyWithoutInstructorInput>
  }

  export type WorkExperienceScalarWhereInput = {
    AND?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
    OR?: WorkExperienceScalarWhereInput[]
    NOT?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
    id?: StringFilter<"WorkExperience"> | string
    company?: StringFilter<"WorkExperience"> | string
    position?: StringFilter<"WorkExperience"> | string
    duration?: StringFilter<"WorkExperience"> | string
    instructorId?: StringFilter<"WorkExperience"> | string
  }

  export type OrganizationUpsertWithoutInstructorsInput = {
    update: XOR<OrganizationUpdateWithoutInstructorsInput, OrganizationUncheckedUpdateWithoutInstructorsInput>
    create: XOR<OrganizationCreateWithoutInstructorsInput, OrganizationUncheckedCreateWithoutInstructorsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutInstructorsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutInstructorsInput, OrganizationUncheckedUpdateWithoutInstructorsInput>
  }

  export type OrganizationUpdateWithoutInstructorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOrgTypeFieldUpdateOperationsInput | $Enums.OrgType
    logo?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    founded?: StringFieldUpdateOperationsInput | string
    totalCourses?: IntFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalInstructors?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    specialties?: OrganizationUpdatespecialtiesInput | string[]
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    accreditation?: OrganizationUpdateaccreditationInput | string[]
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    achievements?: OrganizationUpdateachievementsInput | string[]
    partnerships?: OrganizationUpdatepartnershipsInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    reviews?: ReviewUpdateManyWithoutOrganizationNestedInput
    stats?: OrgStatsUpdateOneWithoutOrganizationNestedInput
    contact?: ContactUpdateOneWithoutOrganizationNestedInput
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutInstructorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumOrgTypeFieldUpdateOperationsInput | $Enums.OrgType
    logo?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    founded?: StringFieldUpdateOperationsInput | string
    totalCourses?: IntFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalInstructors?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    specialties?: OrganizationUpdatespecialtiesInput | string[]
    featured?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    accreditation?: OrganizationUpdateaccreditationInput | string[]
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    achievements?: OrganizationUpdateachievementsInput | string[]
    partnerships?: OrganizationUpdatepartnershipsInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    reviews?: ReviewUncheckedUpdateManyWithoutOrganizationNestedInput
    stats?: OrgStatsUncheckedUpdateOneWithoutOrganizationNestedInput
    contact?: ContactUncheckedUpdateOneWithoutOrganizationNestedInput
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutInstructorInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutInstructorInput, ReviewUncheckedUpdateWithoutInstructorInput>
    create: XOR<ReviewCreateWithoutInstructorInput, ReviewUncheckedCreateWithoutInstructorInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutInstructorInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutInstructorInput, ReviewUncheckedUpdateWithoutInstructorInput>
  }

  export type ReviewUpdateManyWithWhereWithoutInstructorInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutInstructorInput>
  }

  export type InstructorStatsUpsertWithoutInstructorInput = {
    update: XOR<InstructorStatsUpdateWithoutInstructorInput, InstructorStatsUncheckedUpdateWithoutInstructorInput>
    create: XOR<InstructorStatsCreateWithoutInstructorInput, InstructorStatsUncheckedCreateWithoutInstructorInput>
    where?: InstructorStatsWhereInput
  }

  export type InstructorStatsUpdateToOneWithWhereWithoutInstructorInput = {
    where?: InstructorStatsWhereInput
    data: XOR<InstructorStatsUpdateWithoutInstructorInput, InstructorStatsUncheckedUpdateWithoutInstructorInput>
  }

  export type InstructorStatsUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    responseRate?: StringFieldUpdateOperationsInput | string
    avgResponseTime?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorStatsUncheckedUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    responseRate?: StringFieldUpdateOperationsInput | string
    avgResponseTime?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorCreateWithoutWorkExperienceInput = {
    id?: string
    userId: string
    name: string
    title: string
    avatar: string
    coverImage?: string | null
    bio: string
    featured?: boolean | null
    longBio?: string | null
    rating: number
    totalStudents: number
    totalCourses: number
    experience?: string | null
    location?: string | null
    joinedDate?: string | null
    specialties?: InstructorCreatespecialtiesInput | string[]
    achievements?: InstructorCreateachievementsInput | string[]
    education?: InstructorCreateeducationInput | string[]
    social: JsonNullValueInput | InputJsonValue
    organization?: OrganizationCreateNestedOneWithoutInstructorsInput
    reviews?: ReviewCreateNestedManyWithoutInstructorInput
    stats?: InstructorStatsCreateNestedOneWithoutInstructorInput
  }

  export type InstructorUncheckedCreateWithoutWorkExperienceInput = {
    id?: string
    userId: string
    name: string
    title: string
    avatar: string
    coverImage?: string | null
    bio: string
    featured?: boolean | null
    longBio?: string | null
    rating: number
    totalStudents: number
    totalCourses: number
    experience?: string | null
    location?: string | null
    joinedDate?: string | null
    specialties?: InstructorCreatespecialtiesInput | string[]
    achievements?: InstructorCreateachievementsInput | string[]
    education?: InstructorCreateeducationInput | string[]
    social: JsonNullValueInput | InputJsonValue
    organizationId?: string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutInstructorInput
    stats?: InstructorStatsUncheckedCreateNestedOneWithoutInstructorInput
  }

  export type InstructorCreateOrConnectWithoutWorkExperienceInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutWorkExperienceInput, InstructorUncheckedCreateWithoutWorkExperienceInput>
  }

  export type InstructorUpsertWithoutWorkExperienceInput = {
    update: XOR<InstructorUpdateWithoutWorkExperienceInput, InstructorUncheckedUpdateWithoutWorkExperienceInput>
    create: XOR<InstructorCreateWithoutWorkExperienceInput, InstructorUncheckedCreateWithoutWorkExperienceInput>
    where?: InstructorWhereInput
  }

  export type InstructorUpdateToOneWithWhereWithoutWorkExperienceInput = {
    where?: InstructorWhereInput
    data: XOR<InstructorUpdateWithoutWorkExperienceInput, InstructorUncheckedUpdateWithoutWorkExperienceInput>
  }

  export type InstructorUpdateWithoutWorkExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    longBio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalCourses?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joinedDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: InstructorUpdatespecialtiesInput | string[]
    achievements?: InstructorUpdateachievementsInput | string[]
    education?: InstructorUpdateeducationInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    organization?: OrganizationUpdateOneWithoutInstructorsNestedInput
    reviews?: ReviewUpdateManyWithoutInstructorNestedInput
    stats?: InstructorStatsUpdateOneWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateWithoutWorkExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    longBio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalCourses?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joinedDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: InstructorUpdatespecialtiesInput | string[]
    achievements?: InstructorUpdateachievementsInput | string[]
    education?: InstructorUpdateeducationInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutInstructorNestedInput
    stats?: InstructorStatsUncheckedUpdateOneWithoutInstructorNestedInput
  }

  export type InstructorCreateWithoutStatsInput = {
    id?: string
    userId: string
    name: string
    title: string
    avatar: string
    coverImage?: string | null
    bio: string
    featured?: boolean | null
    longBio?: string | null
    rating: number
    totalStudents: number
    totalCourses: number
    experience?: string | null
    location?: string | null
    joinedDate?: string | null
    specialties?: InstructorCreatespecialtiesInput | string[]
    achievements?: InstructorCreateachievementsInput | string[]
    education?: InstructorCreateeducationInput | string[]
    social: JsonNullValueInput | InputJsonValue
    workExperience?: WorkExperienceCreateNestedManyWithoutInstructorInput
    organization?: OrganizationCreateNestedOneWithoutInstructorsInput
    reviews?: ReviewCreateNestedManyWithoutInstructorInput
  }

  export type InstructorUncheckedCreateWithoutStatsInput = {
    id?: string
    userId: string
    name: string
    title: string
    avatar: string
    coverImage?: string | null
    bio: string
    featured?: boolean | null
    longBio?: string | null
    rating: number
    totalStudents: number
    totalCourses: number
    experience?: string | null
    location?: string | null
    joinedDate?: string | null
    specialties?: InstructorCreatespecialtiesInput | string[]
    achievements?: InstructorCreateachievementsInput | string[]
    education?: InstructorCreateeducationInput | string[]
    social: JsonNullValueInput | InputJsonValue
    organizationId?: string | null
    workExperience?: WorkExperienceUncheckedCreateNestedManyWithoutInstructorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type InstructorCreateOrConnectWithoutStatsInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutStatsInput, InstructorUncheckedCreateWithoutStatsInput>
  }

  export type InstructorUpsertWithoutStatsInput = {
    update: XOR<InstructorUpdateWithoutStatsInput, InstructorUncheckedUpdateWithoutStatsInput>
    create: XOR<InstructorCreateWithoutStatsInput, InstructorUncheckedCreateWithoutStatsInput>
    where?: InstructorWhereInput
  }

  export type InstructorUpdateToOneWithWhereWithoutStatsInput = {
    where?: InstructorWhereInput
    data: XOR<InstructorUpdateWithoutStatsInput, InstructorUncheckedUpdateWithoutStatsInput>
  }

  export type InstructorUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    longBio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalCourses?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joinedDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: InstructorUpdatespecialtiesInput | string[]
    achievements?: InstructorUpdateachievementsInput | string[]
    education?: InstructorUpdateeducationInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    workExperience?: WorkExperienceUpdateManyWithoutInstructorNestedInput
    organization?: OrganizationUpdateOneWithoutInstructorsNestedInput
    reviews?: ReviewUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    longBio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalCourses?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joinedDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: InstructorUpdatespecialtiesInput | string[]
    achievements?: InstructorUpdateachievementsInput | string[]
    education?: InstructorUpdateeducationInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workExperience?: WorkExperienceUncheckedUpdateManyWithoutInstructorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorCreateManyOrganizationInput = {
    id?: string
    userId: string
    name: string
    title: string
    avatar: string
    coverImage?: string | null
    bio: string
    featured?: boolean | null
    longBio?: string | null
    rating: number
    totalStudents: number
    totalCourses: number
    experience?: string | null
    location?: string | null
    joinedDate?: string | null
    specialties?: InstructorCreatespecialtiesInput | string[]
    achievements?: InstructorCreateachievementsInput | string[]
    education?: InstructorCreateeducationInput | string[]
    social: JsonNullValueInput | InputJsonValue
  }

  export type ReviewCreateManyOrganizationInput = {
    id?: string
    userName: string
    userAvatar: string
    rating: number
    comment: string
    createdAt?: Date | string
    instructorId?: string | null
  }

  export type OrganizationMemberCreateManyOrganizationInput = {
    id?: string
    userId: string
    role: $Enums.OrgRole
  }

  export type InstructorUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    longBio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalCourses?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joinedDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: InstructorUpdatespecialtiesInput | string[]
    achievements?: InstructorUpdateachievementsInput | string[]
    education?: InstructorUpdateeducationInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    workExperience?: WorkExperienceUpdateManyWithoutInstructorNestedInput
    reviews?: ReviewUpdateManyWithoutInstructorNestedInput
    stats?: InstructorStatsUpdateOneWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    longBio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalCourses?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joinedDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: InstructorUpdatespecialtiesInput | string[]
    achievements?: InstructorUpdateachievementsInput | string[]
    education?: InstructorUpdateeducationInput | string[]
    social?: JsonNullValueInput | InputJsonValue
    workExperience?: WorkExperienceUncheckedUpdateManyWithoutInstructorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutInstructorNestedInput
    stats?: InstructorStatsUncheckedUpdateOneWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    longBio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalStudents?: IntFieldUpdateOperationsInput | number
    totalCourses?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    joinedDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: InstructorUpdatespecialtiesInput | string[]
    achievements?: InstructorUpdateachievementsInput | string[]
    education?: InstructorUpdateeducationInput | string[]
    social?: JsonNullValueInput | InputJsonValue
  }

  export type ReviewUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAvatar?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: InstructorUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAvatar?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAvatar?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationMemberUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
  }

  export type OrganizationMemberUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
  }

  export type WorkExperienceCreateManyInstructorInput = {
    id?: string
    company: string
    position: string
    duration: string
  }

  export type ReviewCreateManyInstructorInput = {
    id?: string
    userName: string
    userAvatar: string
    rating: number
    comment: string
    createdAt?: Date | string
    organizationId?: string | null
  }

  export type WorkExperienceUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type WorkExperienceUncheckedUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type WorkExperienceUncheckedUpdateManyWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAvatar?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAvatar?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAvatar?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}