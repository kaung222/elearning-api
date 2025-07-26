
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
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model AssignmentSession
 * 
 */
export type AssignmentSession = $Result.DefaultSelection<Prisma.$AssignmentSessionPayload>
/**
 * Model Assessment
 * 
 */
export type Assessment = $Result.DefaultSelection<Prisma.$AssessmentPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model Competency
 * 
 */
export type Competency = $Result.DefaultSelection<Prisma.$CompetencyPayload>
/**
 * Model UserCompetency
 * 
 */
export type UserCompetency = $Result.DefaultSelection<Prisma.$UserCompetencyPayload>
/**
 * Model QuestionBank
 * 
 */
export type QuestionBank = $Result.DefaultSelection<Prisma.$QuestionBankPayload>
/**
 * Model ExamQuestion
 * 
 */
export type ExamQuestion = $Result.DefaultSelection<Prisma.$ExamQuestionPayload>
/**
 * Model ExamSession
 * 
 */
export type ExamSession = $Result.DefaultSelection<Prisma.$ExamSessionPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AssessmentType: {
  QUIZ: 'QUIZ',
  ASSIGNMENT: 'ASSIGNMENT',
  PROJECT: 'PROJECT',
  EXAM: 'EXAM'
};

export type AssessmentType = (typeof AssessmentType)[keyof typeof AssessmentType]


export const QuestionType: {
  MCQ: 'MCQ',
  SHORT_ANSWER: 'SHORT_ANSWER',
  ESSAY: 'ESSAY',
  TRUE_FALSE: 'TRUE_FALSE'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]


export const ExamStatus: {
  IN_PROGRESS: 'IN_PROGRESS',
  SUBMITTED: 'SUBMITTED',
  LATE: 'LATE',
  CANCELLED: 'CANCELLED'
};

export type ExamStatus = (typeof ExamStatus)[keyof typeof ExamStatus]

}

export type AssessmentType = $Enums.AssessmentType

export const AssessmentType: typeof $Enums.AssessmentType

export type QuestionType = $Enums.QuestionType

export const QuestionType: typeof $Enums.QuestionType

export type ExamStatus = $Enums.ExamStatus

export const ExamStatus: typeof $Enums.ExamStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Assignments
 * const assignments = await prisma.assignment.findMany()
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
   * // Fetch zero or more Assignments
   * const assignments = await prisma.assignment.findMany()
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
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignmentSession`: Exposes CRUD operations for the **AssignmentSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssignmentSessions
    * const assignmentSessions = await prisma.assignmentSession.findMany()
    * ```
    */
  get assignmentSession(): Prisma.AssignmentSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assessment`: Exposes CRUD operations for the **Assessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assessments
    * const assessments = await prisma.assessment.findMany()
    * ```
    */
  get assessment(): Prisma.AssessmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competency`: Exposes CRUD operations for the **Competency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competencies
    * const competencies = await prisma.competency.findMany()
    * ```
    */
  get competency(): Prisma.CompetencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCompetency`: Exposes CRUD operations for the **UserCompetency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCompetencies
    * const userCompetencies = await prisma.userCompetency.findMany()
    * ```
    */
  get userCompetency(): Prisma.UserCompetencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionBank`: Exposes CRUD operations for the **QuestionBank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionBanks
    * const questionBanks = await prisma.questionBank.findMany()
    * ```
    */
  get questionBank(): Prisma.QuestionBankDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examQuestion`: Exposes CRUD operations for the **ExamQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamQuestions
    * const examQuestions = await prisma.examQuestion.findMany()
    * ```
    */
  get examQuestion(): Prisma.ExamQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examSession`: Exposes CRUD operations for the **ExamSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamSessions
    * const examSessions = await prisma.examSession.findMany()
    * ```
    */
  get examSession(): Prisma.ExamSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;
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
    Assignment: 'Assignment',
    AssignmentSession: 'AssignmentSession',
    Assessment: 'Assessment',
    Submission: 'Submission',
    ActivityLog: 'ActivityLog',
    Competency: 'Competency',
    UserCompetency: 'UserCompetency',
    QuestionBank: 'QuestionBank',
    ExamQuestion: 'ExamQuestion',
    ExamSession: 'ExamSession',
    Answer: 'Answer'
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
      modelProps: "assignment" | "assignmentSession" | "assessment" | "submission" | "activityLog" | "competency" | "userCompetency" | "questionBank" | "examQuestion" | "examSession" | "answer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      AssignmentSession: {
        payload: Prisma.$AssignmentSessionPayload<ExtArgs>
        fields: Prisma.AssignmentSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSessionPayload>
          }
          findFirst: {
            args: Prisma.AssignmentSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSessionPayload>
          }
          findMany: {
            args: Prisma.AssignmentSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSessionPayload>[]
          }
          create: {
            args: Prisma.AssignmentSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSessionPayload>
          }
          createMany: {
            args: Prisma.AssignmentSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSessionPayload>[]
          }
          delete: {
            args: Prisma.AssignmentSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSessionPayload>
          }
          update: {
            args: Prisma.AssignmentSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSessionPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSessionPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSessionPayload>
          }
          aggregate: {
            args: Prisma.AssignmentSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignmentSession>
          }
          groupBy: {
            args: Prisma.AssignmentSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentSessionCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentSessionCountAggregateOutputType> | number
          }
        }
      }
      Assessment: {
        payload: Prisma.$AssessmentPayload<ExtArgs>
        fields: Prisma.AssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findFirst: {
            args: Prisma.AssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findMany: {
            args: Prisma.AssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          create: {
            args: Prisma.AssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          createMany: {
            args: Prisma.AssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          delete: {
            args: Prisma.AssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          update: {
            args: Prisma.AssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssessmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          upsert: {
            args: Prisma.AssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          aggregate: {
            args: Prisma.AssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessment>
          }
          groupBy: {
            args: Prisma.AssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      Competency: {
        payload: Prisma.$CompetencyPayload<ExtArgs>
        fields: Prisma.CompetencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetencyPayload>
          }
          findFirst: {
            args: Prisma.CompetencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetencyPayload>
          }
          findMany: {
            args: Prisma.CompetencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetencyPayload>[]
          }
          create: {
            args: Prisma.CompetencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetencyPayload>
          }
          createMany: {
            args: Prisma.CompetencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetencyPayload>[]
          }
          delete: {
            args: Prisma.CompetencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetencyPayload>
          }
          update: {
            args: Prisma.CompetencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetencyPayload>
          }
          deleteMany: {
            args: Prisma.CompetencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetencyPayload>[]
          }
          upsert: {
            args: Prisma.CompetencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetencyPayload>
          }
          aggregate: {
            args: Prisma.CompetencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetency>
          }
          groupBy: {
            args: Prisma.CompetencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetencyCountArgs<ExtArgs>
            result: $Utils.Optional<CompetencyCountAggregateOutputType> | number
          }
        }
      }
      UserCompetency: {
        payload: Prisma.$UserCompetencyPayload<ExtArgs>
        fields: Prisma.UserCompetencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCompetencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompetencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCompetencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompetencyPayload>
          }
          findFirst: {
            args: Prisma.UserCompetencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompetencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCompetencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompetencyPayload>
          }
          findMany: {
            args: Prisma.UserCompetencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompetencyPayload>[]
          }
          create: {
            args: Prisma.UserCompetencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompetencyPayload>
          }
          createMany: {
            args: Prisma.UserCompetencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCompetencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompetencyPayload>[]
          }
          delete: {
            args: Prisma.UserCompetencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompetencyPayload>
          }
          update: {
            args: Prisma.UserCompetencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompetencyPayload>
          }
          deleteMany: {
            args: Prisma.UserCompetencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCompetencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCompetencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompetencyPayload>[]
          }
          upsert: {
            args: Prisma.UserCompetencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompetencyPayload>
          }
          aggregate: {
            args: Prisma.UserCompetencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCompetency>
          }
          groupBy: {
            args: Prisma.UserCompetencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCompetencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCompetencyCountArgs<ExtArgs>
            result: $Utils.Optional<UserCompetencyCountAggregateOutputType> | number
          }
        }
      }
      QuestionBank: {
        payload: Prisma.$QuestionBankPayload<ExtArgs>
        fields: Prisma.QuestionBankFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionBankFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionBankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionBankFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionBankPayload>
          }
          findFirst: {
            args: Prisma.QuestionBankFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionBankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionBankFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionBankPayload>
          }
          findMany: {
            args: Prisma.QuestionBankFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionBankPayload>[]
          }
          create: {
            args: Prisma.QuestionBankCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionBankPayload>
          }
          createMany: {
            args: Prisma.QuestionBankCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionBankCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionBankPayload>[]
          }
          delete: {
            args: Prisma.QuestionBankDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionBankPayload>
          }
          update: {
            args: Prisma.QuestionBankUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionBankPayload>
          }
          deleteMany: {
            args: Prisma.QuestionBankDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionBankUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionBankUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionBankPayload>[]
          }
          upsert: {
            args: Prisma.QuestionBankUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionBankPayload>
          }
          aggregate: {
            args: Prisma.QuestionBankAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionBank>
          }
          groupBy: {
            args: Prisma.QuestionBankGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionBankGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionBankCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionBankCountAggregateOutputType> | number
          }
        }
      }
      ExamQuestion: {
        payload: Prisma.$ExamQuestionPayload<ExtArgs>
        fields: Prisma.ExamQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          findFirst: {
            args: Prisma.ExamQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          findMany: {
            args: Prisma.ExamQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>[]
          }
          create: {
            args: Prisma.ExamQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          createMany: {
            args: Prisma.ExamQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>[]
          }
          delete: {
            args: Prisma.ExamQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          update: {
            args: Prisma.ExamQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          deleteMany: {
            args: Prisma.ExamQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>[]
          }
          upsert: {
            args: Prisma.ExamQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          aggregate: {
            args: Prisma.ExamQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamQuestion>
          }
          groupBy: {
            args: Prisma.ExamQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<ExamQuestionCountAggregateOutputType> | number
          }
        }
      }
      ExamSession: {
        payload: Prisma.$ExamSessionPayload<ExtArgs>
        fields: Prisma.ExamSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>
          }
          findFirst: {
            args: Prisma.ExamSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>
          }
          findMany: {
            args: Prisma.ExamSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>[]
          }
          create: {
            args: Prisma.ExamSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>
          }
          createMany: {
            args: Prisma.ExamSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>[]
          }
          delete: {
            args: Prisma.ExamSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>
          }
          update: {
            args: Prisma.ExamSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>
          }
          deleteMany: {
            args: Prisma.ExamSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>[]
          }
          upsert: {
            args: Prisma.ExamSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSessionPayload>
          }
          aggregate: {
            args: Prisma.ExamSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamSession>
          }
          groupBy: {
            args: Prisma.ExamSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ExamSessionCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
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
    assignment?: AssignmentOmit
    assignmentSession?: AssignmentSessionOmit
    assessment?: AssessmentOmit
    submission?: SubmissionOmit
    activityLog?: ActivityLogOmit
    competency?: CompetencyOmit
    userCompetency?: UserCompetencyOmit
    questionBank?: QuestionBankOmit
    examQuestion?: ExamQuestionOmit
    examSession?: ExamSessionOmit
    answer?: AnswerOmit
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
   * Count Type AssignmentSessionCountOutputType
   */

  export type AssignmentSessionCountOutputType = {
    assignments: number
  }

  export type AssignmentSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | AssignmentSessionCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * AssignmentSessionCountOutputType without action
   */
  export type AssignmentSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSessionCountOutputType
     */
    select?: AssignmentSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssignmentSessionCountOutputType without action
   */
  export type AssignmentSessionCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }


  /**
   * Count Type AssessmentCountOutputType
   */

  export type AssessmentCountOutputType = {
    examQuestions: number
    submissions: number
    examSessions: number
  }

  export type AssessmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examQuestions?: boolean | AssessmentCountOutputTypeCountExamQuestionsArgs
    submissions?: boolean | AssessmentCountOutputTypeCountSubmissionsArgs
    examSessions?: boolean | AssessmentCountOutputTypeCountExamSessionsArgs
  }

  // Custom InputTypes
  /**
   * AssessmentCountOutputType without action
   */
  export type AssessmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentCountOutputType
     */
    select?: AssessmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssessmentCountOutputType without action
   */
  export type AssessmentCountOutputTypeCountExamQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamQuestionWhereInput
  }

  /**
   * AssessmentCountOutputType without action
   */
  export type AssessmentCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * AssessmentCountOutputType without action
   */
  export type AssessmentCountOutputTypeCountExamSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamSessionWhereInput
  }


  /**
   * Count Type CompetencyCountOutputType
   */

  export type CompetencyCountOutputType = {
    usercompetencies: number
  }

  export type CompetencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usercompetencies?: boolean | CompetencyCountOutputTypeCountUsercompetenciesArgs
  }

  // Custom InputTypes
  /**
   * CompetencyCountOutputType without action
   */
  export type CompetencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetencyCountOutputType
     */
    select?: CompetencyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetencyCountOutputType without action
   */
  export type CompetencyCountOutputTypeCountUsercompetenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCompetencyWhereInput
  }


  /**
   * Count Type QuestionBankCountOutputType
   */

  export type QuestionBankCountOutputType = {
    examQuestions: number
  }

  export type QuestionBankCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examQuestions?: boolean | QuestionBankCountOutputTypeCountExamQuestionsArgs
  }

  // Custom InputTypes
  /**
   * QuestionBankCountOutputType without action
   */
  export type QuestionBankCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionBankCountOutputType
     */
    select?: QuestionBankCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionBankCountOutputType without action
   */
  export type QuestionBankCountOutputTypeCountExamQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamQuestionWhereInput
  }


  /**
   * Count Type ExamSessionCountOutputType
   */

  export type ExamSessionCountOutputType = {
    answers: number
  }

  export type ExamSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | ExamSessionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * ExamSessionCountOutputType without action
   */
  export type ExamSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSessionCountOutputType
     */
    select?: ExamSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamSessionCountOutputType without action
   */
  export type ExamSessionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    isCompleted: boolean | null
    createdAt: Date | null
    assignmentSessionId: string | null
    userId: string | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    isCompleted: boolean | null
    createdAt: Date | null
    assignmentSessionId: string | null
    userId: string | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    dueDate: number
    isCompleted: number
    createdAt: number
    assignmentSessionId: number
    userId: number
    _all: number
  }


  export type AssignmentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    isCompleted?: true
    createdAt?: true
    assignmentSessionId?: true
    userId?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    isCompleted?: true
    createdAt?: true
    assignmentSessionId?: true
    userId?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    isCompleted?: true
    createdAt?: true
    assignmentSessionId?: true
    userId?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: string
    title: string
    description: string
    dueDate: Date
    isCompleted: boolean
    createdAt: Date
    assignmentSessionId: string
    userId: string
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    assignmentSessionId?: boolean
    userId?: boolean
    assignmentSession?: boolean | AssignmentSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    assignmentSessionId?: boolean
    userId?: boolean
    assignmentSession?: boolean | AssignmentSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    assignmentSessionId?: boolean
    userId?: boolean
    assignmentSession?: boolean | AssignmentSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    assignmentSessionId?: boolean
    userId?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "dueDate" | "isCompleted" | "createdAt" | "assignmentSessionId" | "userId", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignmentSession?: boolean | AssignmentSessionDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignmentSession?: boolean | AssignmentSessionDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignmentSession?: boolean | AssignmentSessionDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      assignmentSession: Prisma.$AssignmentSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      dueDate: Date
      isCompleted: boolean
      createdAt: Date
      assignmentSessionId: string
      userId: string
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {AssignmentUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
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
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignmentSession<T extends AssignmentSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentSessionDefaultArgs<ExtArgs>>): Prisma__AssignmentSessionClient<$Result.GetResult<Prisma.$AssignmentSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'String'>
    readonly title: FieldRef<"Assignment", 'String'>
    readonly description: FieldRef<"Assignment", 'String'>
    readonly dueDate: FieldRef<"Assignment", 'DateTime'>
    readonly isCompleted: FieldRef<"Assignment", 'Boolean'>
    readonly createdAt: FieldRef<"Assignment", 'DateTime'>
    readonly assignmentSessionId: FieldRef<"Assignment", 'String'>
    readonly userId: FieldRef<"Assignment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment updateManyAndReturn
   */
  export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model AssignmentSession
   */

  export type AggregateAssignmentSession = {
    _count: AssignmentSessionCountAggregateOutputType | null
    _min: AssignmentSessionMinAggregateOutputType | null
    _max: AssignmentSessionMaxAggregateOutputType | null
  }

  export type AssignmentSessionMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    isCompleted: boolean | null
    courseId: string | null
    createAt: Date | null
  }

  export type AssignmentSessionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    isCompleted: boolean | null
    courseId: string | null
    createAt: Date | null
  }

  export type AssignmentSessionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    dueDate: number
    isCompleted: number
    courseId: number
    createAt: number
    _all: number
  }


  export type AssignmentSessionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    isCompleted?: true
    courseId?: true
    createAt?: true
  }

  export type AssignmentSessionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    isCompleted?: true
    courseId?: true
    createAt?: true
  }

  export type AssignmentSessionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    isCompleted?: true
    courseId?: true
    createAt?: true
    _all?: true
  }

  export type AssignmentSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentSession to aggregate.
     */
    where?: AssignmentSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentSessions to fetch.
     */
    orderBy?: AssignmentSessionOrderByWithRelationInput | AssignmentSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssignmentSessions
    **/
    _count?: true | AssignmentSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentSessionMaxAggregateInputType
  }

  export type GetAssignmentSessionAggregateType<T extends AssignmentSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignmentSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignmentSession[P]>
      : GetScalarType<T[P], AggregateAssignmentSession[P]>
  }




  export type AssignmentSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentSessionWhereInput
    orderBy?: AssignmentSessionOrderByWithAggregationInput | AssignmentSessionOrderByWithAggregationInput[]
    by: AssignmentSessionScalarFieldEnum[] | AssignmentSessionScalarFieldEnum
    having?: AssignmentSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentSessionCountAggregateInputType | true
    _min?: AssignmentSessionMinAggregateInputType
    _max?: AssignmentSessionMaxAggregateInputType
  }

  export type AssignmentSessionGroupByOutputType = {
    id: string
    title: string
    description: string
    dueDate: Date
    isCompleted: boolean
    courseId: string
    createAt: Date
    _count: AssignmentSessionCountAggregateOutputType | null
    _min: AssignmentSessionMinAggregateOutputType | null
    _max: AssignmentSessionMaxAggregateOutputType | null
  }

  type GetAssignmentSessionGroupByPayload<T extends AssignmentSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentSessionGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentSessionGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    isCompleted?: boolean
    courseId?: boolean
    createAt?: boolean
    assignments?: boolean | AssignmentSession$assignmentsArgs<ExtArgs>
    _count?: boolean | AssignmentSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentSession"]>

  export type AssignmentSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    isCompleted?: boolean
    courseId?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["assignmentSession"]>

  export type AssignmentSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    isCompleted?: boolean
    courseId?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["assignmentSession"]>

  export type AssignmentSessionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    isCompleted?: boolean
    courseId?: boolean
    createAt?: boolean
  }

  export type AssignmentSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "dueDate" | "isCompleted" | "courseId" | "createAt", ExtArgs["result"]["assignmentSession"]>
  export type AssignmentSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | AssignmentSession$assignmentsArgs<ExtArgs>
    _count?: boolean | AssignmentSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssignmentSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AssignmentSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AssignmentSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssignmentSession"
    objects: {
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      dueDate: Date
      isCompleted: boolean
      courseId: string
      createAt: Date
    }, ExtArgs["result"]["assignmentSession"]>
    composites: {}
  }

  type AssignmentSessionGetPayload<S extends boolean | null | undefined | AssignmentSessionDefaultArgs> = $Result.GetResult<Prisma.$AssignmentSessionPayload, S>

  type AssignmentSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentSessionCountAggregateInputType | true
    }

  export interface AssignmentSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssignmentSession'], meta: { name: 'AssignmentSession' } }
    /**
     * Find zero or one AssignmentSession that matches the filter.
     * @param {AssignmentSessionFindUniqueArgs} args - Arguments to find a AssignmentSession
     * @example
     * // Get one AssignmentSession
     * const assignmentSession = await prisma.assignmentSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentSessionFindUniqueArgs>(args: SelectSubset<T, AssignmentSessionFindUniqueArgs<ExtArgs>>): Prisma__AssignmentSessionClient<$Result.GetResult<Prisma.$AssignmentSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssignmentSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentSessionFindUniqueOrThrowArgs} args - Arguments to find a AssignmentSession
     * @example
     * // Get one AssignmentSession
     * const assignmentSession = await prisma.assignmentSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentSessionClient<$Result.GetResult<Prisma.$AssignmentSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSessionFindFirstArgs} args - Arguments to find a AssignmentSession
     * @example
     * // Get one AssignmentSession
     * const assignmentSession = await prisma.assignmentSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentSessionFindFirstArgs>(args?: SelectSubset<T, AssignmentSessionFindFirstArgs<ExtArgs>>): Prisma__AssignmentSessionClient<$Result.GetResult<Prisma.$AssignmentSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSessionFindFirstOrThrowArgs} args - Arguments to find a AssignmentSession
     * @example
     * // Get one AssignmentSession
     * const assignmentSession = await prisma.assignmentSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentSessionClient<$Result.GetResult<Prisma.$AssignmentSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssignmentSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssignmentSessions
     * const assignmentSessions = await prisma.assignmentSession.findMany()
     * 
     * // Get first 10 AssignmentSessions
     * const assignmentSessions = await prisma.assignmentSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentSessionWithIdOnly = await prisma.assignmentSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentSessionFindManyArgs>(args?: SelectSubset<T, AssignmentSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssignmentSession.
     * @param {AssignmentSessionCreateArgs} args - Arguments to create a AssignmentSession.
     * @example
     * // Create one AssignmentSession
     * const AssignmentSession = await prisma.assignmentSession.create({
     *   data: {
     *     // ... data to create a AssignmentSession
     *   }
     * })
     * 
     */
    create<T extends AssignmentSessionCreateArgs>(args: SelectSubset<T, AssignmentSessionCreateArgs<ExtArgs>>): Prisma__AssignmentSessionClient<$Result.GetResult<Prisma.$AssignmentSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssignmentSessions.
     * @param {AssignmentSessionCreateManyArgs} args - Arguments to create many AssignmentSessions.
     * @example
     * // Create many AssignmentSessions
     * const assignmentSession = await prisma.assignmentSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentSessionCreateManyArgs>(args?: SelectSubset<T, AssignmentSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssignmentSessions and returns the data saved in the database.
     * @param {AssignmentSessionCreateManyAndReturnArgs} args - Arguments to create many AssignmentSessions.
     * @example
     * // Create many AssignmentSessions
     * const assignmentSession = await prisma.assignmentSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssignmentSessions and only return the `id`
     * const assignmentSessionWithIdOnly = await prisma.assignmentSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssignmentSession.
     * @param {AssignmentSessionDeleteArgs} args - Arguments to delete one AssignmentSession.
     * @example
     * // Delete one AssignmentSession
     * const AssignmentSession = await prisma.assignmentSession.delete({
     *   where: {
     *     // ... filter to delete one AssignmentSession
     *   }
     * })
     * 
     */
    delete<T extends AssignmentSessionDeleteArgs>(args: SelectSubset<T, AssignmentSessionDeleteArgs<ExtArgs>>): Prisma__AssignmentSessionClient<$Result.GetResult<Prisma.$AssignmentSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssignmentSession.
     * @param {AssignmentSessionUpdateArgs} args - Arguments to update one AssignmentSession.
     * @example
     * // Update one AssignmentSession
     * const assignmentSession = await prisma.assignmentSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentSessionUpdateArgs>(args: SelectSubset<T, AssignmentSessionUpdateArgs<ExtArgs>>): Prisma__AssignmentSessionClient<$Result.GetResult<Prisma.$AssignmentSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssignmentSessions.
     * @param {AssignmentSessionDeleteManyArgs} args - Arguments to filter AssignmentSessions to delete.
     * @example
     * // Delete a few AssignmentSessions
     * const { count } = await prisma.assignmentSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentSessionDeleteManyArgs>(args?: SelectSubset<T, AssignmentSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssignmentSessions
     * const assignmentSession = await prisma.assignmentSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentSessionUpdateManyArgs>(args: SelectSubset<T, AssignmentSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentSessions and returns the data updated in the database.
     * @param {AssignmentSessionUpdateManyAndReturnArgs} args - Arguments to update many AssignmentSessions.
     * @example
     * // Update many AssignmentSessions
     * const assignmentSession = await prisma.assignmentSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssignmentSessions and only return the `id`
     * const assignmentSessionWithIdOnly = await prisma.assignmentSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssignmentSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssignmentSession.
     * @param {AssignmentSessionUpsertArgs} args - Arguments to update or create a AssignmentSession.
     * @example
     * // Update or create a AssignmentSession
     * const assignmentSession = await prisma.assignmentSession.upsert({
     *   create: {
     *     // ... data to create a AssignmentSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssignmentSession we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentSessionUpsertArgs>(args: SelectSubset<T, AssignmentSessionUpsertArgs<ExtArgs>>): Prisma__AssignmentSessionClient<$Result.GetResult<Prisma.$AssignmentSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssignmentSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSessionCountArgs} args - Arguments to filter AssignmentSessions to count.
     * @example
     * // Count the number of AssignmentSessions
     * const count = await prisma.assignmentSession.count({
     *   where: {
     *     // ... the filter for the AssignmentSessions we want to count
     *   }
     * })
    **/
    count<T extends AssignmentSessionCountArgs>(
      args?: Subset<T, AssignmentSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssignmentSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentSessionAggregateArgs>(args: Subset<T, AssignmentSessionAggregateArgs>): Prisma.PrismaPromise<GetAssignmentSessionAggregateType<T>>

    /**
     * Group by AssignmentSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSessionGroupByArgs} args - Group by arguments.
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
      T extends AssignmentSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentSessionGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignmentSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssignmentSession model
   */
  readonly fields: AssignmentSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssignmentSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignments<T extends AssignmentSession$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentSession$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AssignmentSession model
   */
  interface AssignmentSessionFieldRefs {
    readonly id: FieldRef<"AssignmentSession", 'String'>
    readonly title: FieldRef<"AssignmentSession", 'String'>
    readonly description: FieldRef<"AssignmentSession", 'String'>
    readonly dueDate: FieldRef<"AssignmentSession", 'DateTime'>
    readonly isCompleted: FieldRef<"AssignmentSession", 'Boolean'>
    readonly courseId: FieldRef<"AssignmentSession", 'String'>
    readonly createAt: FieldRef<"AssignmentSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssignmentSession findUnique
   */
  export type AssignmentSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSession
     */
    select?: AssignmentSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSession
     */
    omit?: AssignmentSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSessionInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentSession to fetch.
     */
    where: AssignmentSessionWhereUniqueInput
  }

  /**
   * AssignmentSession findUniqueOrThrow
   */
  export type AssignmentSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSession
     */
    select?: AssignmentSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSession
     */
    omit?: AssignmentSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSessionInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentSession to fetch.
     */
    where: AssignmentSessionWhereUniqueInput
  }

  /**
   * AssignmentSession findFirst
   */
  export type AssignmentSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSession
     */
    select?: AssignmentSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSession
     */
    omit?: AssignmentSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSessionInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentSession to fetch.
     */
    where?: AssignmentSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentSessions to fetch.
     */
    orderBy?: AssignmentSessionOrderByWithRelationInput | AssignmentSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentSessions.
     */
    cursor?: AssignmentSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentSessions.
     */
    distinct?: AssignmentSessionScalarFieldEnum | AssignmentSessionScalarFieldEnum[]
  }

  /**
   * AssignmentSession findFirstOrThrow
   */
  export type AssignmentSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSession
     */
    select?: AssignmentSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSession
     */
    omit?: AssignmentSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSessionInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentSession to fetch.
     */
    where?: AssignmentSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentSessions to fetch.
     */
    orderBy?: AssignmentSessionOrderByWithRelationInput | AssignmentSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentSessions.
     */
    cursor?: AssignmentSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentSessions.
     */
    distinct?: AssignmentSessionScalarFieldEnum | AssignmentSessionScalarFieldEnum[]
  }

  /**
   * AssignmentSession findMany
   */
  export type AssignmentSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSession
     */
    select?: AssignmentSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSession
     */
    omit?: AssignmentSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSessionInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentSessions to fetch.
     */
    where?: AssignmentSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentSessions to fetch.
     */
    orderBy?: AssignmentSessionOrderByWithRelationInput | AssignmentSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssignmentSessions.
     */
    cursor?: AssignmentSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentSessions.
     */
    skip?: number
    distinct?: AssignmentSessionScalarFieldEnum | AssignmentSessionScalarFieldEnum[]
  }

  /**
   * AssignmentSession create
   */
  export type AssignmentSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSession
     */
    select?: AssignmentSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSession
     */
    omit?: AssignmentSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a AssignmentSession.
     */
    data: XOR<AssignmentSessionCreateInput, AssignmentSessionUncheckedCreateInput>
  }

  /**
   * AssignmentSession createMany
   */
  export type AssignmentSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssignmentSessions.
     */
    data: AssignmentSessionCreateManyInput | AssignmentSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssignmentSession createManyAndReturn
   */
  export type AssignmentSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSession
     */
    select?: AssignmentSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSession
     */
    omit?: AssignmentSessionOmit<ExtArgs> | null
    /**
     * The data used to create many AssignmentSessions.
     */
    data: AssignmentSessionCreateManyInput | AssignmentSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssignmentSession update
   */
  export type AssignmentSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSession
     */
    select?: AssignmentSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSession
     */
    omit?: AssignmentSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a AssignmentSession.
     */
    data: XOR<AssignmentSessionUpdateInput, AssignmentSessionUncheckedUpdateInput>
    /**
     * Choose, which AssignmentSession to update.
     */
    where: AssignmentSessionWhereUniqueInput
  }

  /**
   * AssignmentSession updateMany
   */
  export type AssignmentSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssignmentSessions.
     */
    data: XOR<AssignmentSessionUpdateManyMutationInput, AssignmentSessionUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentSessions to update
     */
    where?: AssignmentSessionWhereInput
    /**
     * Limit how many AssignmentSessions to update.
     */
    limit?: number
  }

  /**
   * AssignmentSession updateManyAndReturn
   */
  export type AssignmentSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSession
     */
    select?: AssignmentSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSession
     */
    omit?: AssignmentSessionOmit<ExtArgs> | null
    /**
     * The data used to update AssignmentSessions.
     */
    data: XOR<AssignmentSessionUpdateManyMutationInput, AssignmentSessionUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentSessions to update
     */
    where?: AssignmentSessionWhereInput
    /**
     * Limit how many AssignmentSessions to update.
     */
    limit?: number
  }

  /**
   * AssignmentSession upsert
   */
  export type AssignmentSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSession
     */
    select?: AssignmentSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSession
     */
    omit?: AssignmentSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the AssignmentSession to update in case it exists.
     */
    where: AssignmentSessionWhereUniqueInput
    /**
     * In case the AssignmentSession found by the `where` argument doesn't exist, create a new AssignmentSession with this data.
     */
    create: XOR<AssignmentSessionCreateInput, AssignmentSessionUncheckedCreateInput>
    /**
     * In case the AssignmentSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentSessionUpdateInput, AssignmentSessionUncheckedUpdateInput>
  }

  /**
   * AssignmentSession delete
   */
  export type AssignmentSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSession
     */
    select?: AssignmentSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSession
     */
    omit?: AssignmentSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSessionInclude<ExtArgs> | null
    /**
     * Filter which AssignmentSession to delete.
     */
    where: AssignmentSessionWhereUniqueInput
  }

  /**
   * AssignmentSession deleteMany
   */
  export type AssignmentSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentSessions to delete
     */
    where?: AssignmentSessionWhereInput
    /**
     * Limit how many AssignmentSessions to delete.
     */
    limit?: number
  }

  /**
   * AssignmentSession.assignments
   */
  export type AssignmentSession$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * AssignmentSession without action
   */
  export type AssignmentSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSession
     */
    select?: AssignmentSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSession
     */
    omit?: AssignmentSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSessionInclude<ExtArgs> | null
  }


  /**
   * Model Assessment
   */

  export type AggregateAssessment = {
    _count: AssessmentCountAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  export type AssessmentMinAggregateOutputType = {
    id: string | null
    title: string | null
    type: $Enums.AssessmentType | null
    courseId: string | null
    dueDate: Date | null
    createdAt: Date | null
  }

  export type AssessmentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    type: $Enums.AssessmentType | null
    courseId: string | null
    dueDate: Date | null
    createdAt: Date | null
  }

  export type AssessmentCountAggregateOutputType = {
    id: number
    title: number
    type: number
    courseId: number
    dueDate: number
    createdAt: number
    _all: number
  }


  export type AssessmentMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    courseId?: true
    dueDate?: true
    createdAt?: true
  }

  export type AssessmentMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    courseId?: true
    dueDate?: true
    createdAt?: true
  }

  export type AssessmentCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    courseId?: true
    dueDate?: true
    createdAt?: true
    _all?: true
  }

  export type AssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessment to aggregate.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assessments
    **/
    _count?: true | AssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentMaxAggregateInputType
  }

  export type GetAssessmentAggregateType<T extends AssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessment[P]>
      : GetScalarType<T[P], AggregateAssessment[P]>
  }




  export type AssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithAggregationInput | AssessmentOrderByWithAggregationInput[]
    by: AssessmentScalarFieldEnum[] | AssessmentScalarFieldEnum
    having?: AssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentCountAggregateInputType | true
    _min?: AssessmentMinAggregateInputType
    _max?: AssessmentMaxAggregateInputType
  }

  export type AssessmentGroupByOutputType = {
    id: string
    title: string
    type: $Enums.AssessmentType
    courseId: string
    dueDate: Date
    createdAt: Date
    _count: AssessmentCountAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  type GetAssessmentGroupByPayload<T extends AssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    courseId?: boolean
    dueDate?: boolean
    createdAt?: boolean
    examQuestions?: boolean | Assessment$examQuestionsArgs<ExtArgs>
    submissions?: boolean | Assessment$submissionsArgs<ExtArgs>
    examSessions?: boolean | Assessment$examSessionsArgs<ExtArgs>
    _count?: boolean | AssessmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    courseId?: boolean
    dueDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    courseId?: boolean
    dueDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    courseId?: boolean
    dueDate?: boolean
    createdAt?: boolean
  }

  export type AssessmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "courseId" | "dueDate" | "createdAt", ExtArgs["result"]["assessment"]>
  export type AssessmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examQuestions?: boolean | Assessment$examQuestionsArgs<ExtArgs>
    submissions?: boolean | Assessment$submissionsArgs<ExtArgs>
    examSessions?: boolean | Assessment$examSessionsArgs<ExtArgs>
    _count?: boolean | AssessmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssessmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AssessmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assessment"
    objects: {
      examQuestions: Prisma.$ExamQuestionPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      examSessions: Prisma.$ExamSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      type: $Enums.AssessmentType
      courseId: string
      dueDate: Date
      createdAt: Date
    }, ExtArgs["result"]["assessment"]>
    composites: {}
  }

  type AssessmentGetPayload<S extends boolean | null | undefined | AssessmentDefaultArgs> = $Result.GetResult<Prisma.$AssessmentPayload, S>

  type AssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssessmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssessmentCountAggregateInputType | true
    }

  export interface AssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assessment'], meta: { name: 'Assessment' } }
    /**
     * Find zero or one Assessment that matches the filter.
     * @param {AssessmentFindUniqueArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentFindUniqueArgs>(args: SelectSubset<T, AssessmentFindUniqueArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assessment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssessmentFindUniqueOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentFindFirstArgs>(args?: SelectSubset<T, AssessmentFindFirstArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assessments
     * const assessments = await prisma.assessment.findMany()
     * 
     * // Get first 10 Assessments
     * const assessments = await prisma.assessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentWithIdOnly = await prisma.assessment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentFindManyArgs>(args?: SelectSubset<T, AssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assessment.
     * @param {AssessmentCreateArgs} args - Arguments to create a Assessment.
     * @example
     * // Create one Assessment
     * const Assessment = await prisma.assessment.create({
     *   data: {
     *     // ... data to create a Assessment
     *   }
     * })
     * 
     */
    create<T extends AssessmentCreateArgs>(args: SelectSubset<T, AssessmentCreateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assessments.
     * @param {AssessmentCreateManyArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentCreateManyArgs>(args?: SelectSubset<T, AssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assessments and returns the data saved in the database.
     * @param {AssessmentCreateManyAndReturnArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assessment.
     * @param {AssessmentDeleteArgs} args - Arguments to delete one Assessment.
     * @example
     * // Delete one Assessment
     * const Assessment = await prisma.assessment.delete({
     *   where: {
     *     // ... filter to delete one Assessment
     *   }
     * })
     * 
     */
    delete<T extends AssessmentDeleteArgs>(args: SelectSubset<T, AssessmentDeleteArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assessment.
     * @param {AssessmentUpdateArgs} args - Arguments to update one Assessment.
     * @example
     * // Update one Assessment
     * const assessment = await prisma.assessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentUpdateArgs>(args: SelectSubset<T, AssessmentUpdateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assessments.
     * @param {AssessmentDeleteManyArgs} args - Arguments to filter Assessments to delete.
     * @example
     * // Delete a few Assessments
     * const { count } = await prisma.assessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentDeleteManyArgs>(args?: SelectSubset<T, AssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentUpdateManyArgs>(args: SelectSubset<T, AssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments and returns the data updated in the database.
     * @param {AssessmentUpdateManyAndReturnArgs} args - Arguments to update many Assessments.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssessmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssessmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assessment.
     * @param {AssessmentUpsertArgs} args - Arguments to update or create a Assessment.
     * @example
     * // Update or create a Assessment
     * const assessment = await prisma.assessment.upsert({
     *   create: {
     *     // ... data to create a Assessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assessment we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentUpsertArgs>(args: SelectSubset<T, AssessmentUpsertArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentCountArgs} args - Arguments to filter Assessments to count.
     * @example
     * // Count the number of Assessments
     * const count = await prisma.assessment.count({
     *   where: {
     *     // ... the filter for the Assessments we want to count
     *   }
     * })
    **/
    count<T extends AssessmentCountArgs>(
      args?: Subset<T, AssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssessmentAggregateArgs>(args: Subset<T, AssessmentAggregateArgs>): Prisma.PrismaPromise<GetAssessmentAggregateType<T>>

    /**
     * Group by Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentGroupByArgs} args - Group by arguments.
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
      T extends AssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assessment model
   */
  readonly fields: AssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examQuestions<T extends Assessment$examQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, Assessment$examQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends Assessment$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Assessment$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    examSessions<T extends Assessment$examSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Assessment$examSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Assessment model
   */
  interface AssessmentFieldRefs {
    readonly id: FieldRef<"Assessment", 'String'>
    readonly title: FieldRef<"Assessment", 'String'>
    readonly type: FieldRef<"Assessment", 'AssessmentType'>
    readonly courseId: FieldRef<"Assessment", 'String'>
    readonly dueDate: FieldRef<"Assessment", 'DateTime'>
    readonly createdAt: FieldRef<"Assessment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assessment findUnique
   */
  export type AssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findUniqueOrThrow
   */
  export type AssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findFirst
   */
  export type AssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findFirstOrThrow
   */
  export type AssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findMany
   */
  export type AssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment create
   */
  export type AssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assessment.
     */
    data: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
  }

  /**
   * Assessment createMany
   */
  export type AssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assessment createManyAndReturn
   */
  export type AssessmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assessment update
   */
  export type AssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assessment.
     */
    data: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
    /**
     * Choose, which Assessment to update.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment updateMany
   */
  export type AssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
  }

  /**
   * Assessment updateManyAndReturn
   */
  export type AssessmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
  }

  /**
   * Assessment upsert
   */
  export type AssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assessment to update in case it exists.
     */
    where: AssessmentWhereUniqueInput
    /**
     * In case the Assessment found by the `where` argument doesn't exist, create a new Assessment with this data.
     */
    create: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
    /**
     * In case the Assessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
  }

  /**
   * Assessment delete
   */
  export type AssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter which Assessment to delete.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment deleteMany
   */
  export type AssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessments to delete
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to delete.
     */
    limit?: number
  }

  /**
   * Assessment.examQuestions
   */
  export type Assessment$examQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamQuestion
     */
    omit?: ExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    where?: ExamQuestionWhereInput
    orderBy?: ExamQuestionOrderByWithRelationInput | ExamQuestionOrderByWithRelationInput[]
    cursor?: ExamQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamQuestionScalarFieldEnum | ExamQuestionScalarFieldEnum[]
  }

  /**
   * Assessment.submissions
   */
  export type Assessment$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Assessment.examSessions
   */
  export type Assessment$examSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    where?: ExamSessionWhereInput
    orderBy?: ExamSessionOrderByWithRelationInput | ExamSessionOrderByWithRelationInput[]
    cursor?: ExamSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamSessionScalarFieldEnum | ExamSessionScalarFieldEnum[]
  }

  /**
   * Assessment without action
   */
  export type AssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    grade: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    grade: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    assessmentId: string | null
    studentId: string | null
    submittedAt: Date | null
    grade: number | null
    feedback: string | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    assessmentId: string | null
    studentId: string | null
    submittedAt: Date | null
    grade: number | null
    feedback: string | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    assessmentId: number
    studentId: number
    submittedAt: number
    grade: number
    feedback: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    grade?: true
  }

  export type SubmissionSumAggregateInputType = {
    grade?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    assessmentId?: true
    studentId?: true
    submittedAt?: true
    grade?: true
    feedback?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    assessmentId?: true
    studentId?: true
    submittedAt?: true
    grade?: true
    feedback?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    assessmentId?: true
    studentId?: true
    submittedAt?: true
    grade?: true
    feedback?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    assessmentId: string
    studentId: string
    submittedAt: Date
    grade: number | null
    feedback: string | null
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    studentId?: boolean
    submittedAt?: boolean
    grade?: boolean
    feedback?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    studentId?: boolean
    submittedAt?: boolean
    grade?: boolean
    feedback?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    studentId?: boolean
    submittedAt?: boolean
    grade?: boolean
    feedback?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    assessmentId?: boolean
    studentId?: boolean
    submittedAt?: boolean
    grade?: boolean
    feedback?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assessmentId" | "studentId" | "submittedAt" | "grade" | "feedback", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      assessment: Prisma.$AssessmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assessmentId: string
      studentId: string
      submittedAt: Date
      grade: number | null
      feedback: string | null
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
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
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assessment<T extends AssessmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentDefaultArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly assessmentId: FieldRef<"Submission", 'String'>
    readonly studentId: FieldRef<"Submission", 'String'>
    readonly submittedAt: FieldRef<"Submission", 'DateTime'>
    readonly grade: FieldRef<"Submission", 'Float'>
    readonly feedback: FieldRef<"Submission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    action: string | null
    timestamp: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    action: string | null
    timestamp: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    action: number
    timestamp: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    action?: true
    timestamp?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    action?: true
    timestamp?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    action?: true
    timestamp?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    userId: string
    courseId: string
    action: string
    timestamp: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    action?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    action?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    action?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    action?: boolean
    timestamp?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "action" | "timestamp", ExtArgs["result"]["activityLog"]>

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseId: string
      action: string
      timestamp: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly courseId: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly timestamp: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
  }


  /**
   * Model Competency
   */

  export type AggregateCompetency = {
    _count: CompetencyCountAggregateOutputType | null
    _min: CompetencyMinAggregateOutputType | null
    _max: CompetencyMaxAggregateOutputType | null
  }

  export type CompetencyMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    courseId: string | null
  }

  export type CompetencyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    courseId: string | null
  }

  export type CompetencyCountAggregateOutputType = {
    id: number
    name: number
    description: number
    courseId: number
    _all: number
  }


  export type CompetencyMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    courseId?: true
  }

  export type CompetencyMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    courseId?: true
  }

  export type CompetencyCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    courseId?: true
    _all?: true
  }

  export type CompetencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competency to aggregate.
     */
    where?: CompetencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competencies to fetch.
     */
    orderBy?: CompetencyOrderByWithRelationInput | CompetencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competencies
    **/
    _count?: true | CompetencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetencyMaxAggregateInputType
  }

  export type GetCompetencyAggregateType<T extends CompetencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetency[P]>
      : GetScalarType<T[P], AggregateCompetency[P]>
  }




  export type CompetencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetencyWhereInput
    orderBy?: CompetencyOrderByWithAggregationInput | CompetencyOrderByWithAggregationInput[]
    by: CompetencyScalarFieldEnum[] | CompetencyScalarFieldEnum
    having?: CompetencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetencyCountAggregateInputType | true
    _min?: CompetencyMinAggregateInputType
    _max?: CompetencyMaxAggregateInputType
  }

  export type CompetencyGroupByOutputType = {
    id: string
    name: string
    description: string | null
    courseId: string
    _count: CompetencyCountAggregateOutputType | null
    _min: CompetencyMinAggregateOutputType | null
    _max: CompetencyMaxAggregateOutputType | null
  }

  type GetCompetencyGroupByPayload<T extends CompetencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetencyGroupByOutputType[P]>
            : GetScalarType<T[P], CompetencyGroupByOutputType[P]>
        }
      >
    >


  export type CompetencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    courseId?: boolean
    usercompetencies?: boolean | Competency$usercompetenciesArgs<ExtArgs>
    _count?: boolean | CompetencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competency"]>

  export type CompetencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    courseId?: boolean
  }, ExtArgs["result"]["competency"]>

  export type CompetencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    courseId?: boolean
  }, ExtArgs["result"]["competency"]>

  export type CompetencySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    courseId?: boolean
  }

  export type CompetencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "courseId", ExtArgs["result"]["competency"]>
  export type CompetencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usercompetencies?: boolean | Competency$usercompetenciesArgs<ExtArgs>
    _count?: boolean | CompetencyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompetencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompetencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompetencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Competency"
    objects: {
      usercompetencies: Prisma.$UserCompetencyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      courseId: string
    }, ExtArgs["result"]["competency"]>
    composites: {}
  }

  type CompetencyGetPayload<S extends boolean | null | undefined | CompetencyDefaultArgs> = $Result.GetResult<Prisma.$CompetencyPayload, S>

  type CompetencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetencyCountAggregateInputType | true
    }

  export interface CompetencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Competency'], meta: { name: 'Competency' } }
    /**
     * Find zero or one Competency that matches the filter.
     * @param {CompetencyFindUniqueArgs} args - Arguments to find a Competency
     * @example
     * // Get one Competency
     * const competency = await prisma.competency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetencyFindUniqueArgs>(args: SelectSubset<T, CompetencyFindUniqueArgs<ExtArgs>>): Prisma__CompetencyClient<$Result.GetResult<Prisma.$CompetencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetencyFindUniqueOrThrowArgs} args - Arguments to find a Competency
     * @example
     * // Get one Competency
     * const competency = await prisma.competency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetencyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetencyClient<$Result.GetResult<Prisma.$CompetencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetencyFindFirstArgs} args - Arguments to find a Competency
     * @example
     * // Get one Competency
     * const competency = await prisma.competency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetencyFindFirstArgs>(args?: SelectSubset<T, CompetencyFindFirstArgs<ExtArgs>>): Prisma__CompetencyClient<$Result.GetResult<Prisma.$CompetencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetencyFindFirstOrThrowArgs} args - Arguments to find a Competency
     * @example
     * // Get one Competency
     * const competency = await prisma.competency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetencyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetencyClient<$Result.GetResult<Prisma.$CompetencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competencies
     * const competencies = await prisma.competency.findMany()
     * 
     * // Get first 10 Competencies
     * const competencies = await prisma.competency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competencyWithIdOnly = await prisma.competency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetencyFindManyArgs>(args?: SelectSubset<T, CompetencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competency.
     * @param {CompetencyCreateArgs} args - Arguments to create a Competency.
     * @example
     * // Create one Competency
     * const Competency = await prisma.competency.create({
     *   data: {
     *     // ... data to create a Competency
     *   }
     * })
     * 
     */
    create<T extends CompetencyCreateArgs>(args: SelectSubset<T, CompetencyCreateArgs<ExtArgs>>): Prisma__CompetencyClient<$Result.GetResult<Prisma.$CompetencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competencies.
     * @param {CompetencyCreateManyArgs} args - Arguments to create many Competencies.
     * @example
     * // Create many Competencies
     * const competency = await prisma.competency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetencyCreateManyArgs>(args?: SelectSubset<T, CompetencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Competencies and returns the data saved in the database.
     * @param {CompetencyCreateManyAndReturnArgs} args - Arguments to create many Competencies.
     * @example
     * // Create many Competencies
     * const competency = await prisma.competency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Competencies and only return the `id`
     * const competencyWithIdOnly = await prisma.competency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetencyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Competency.
     * @param {CompetencyDeleteArgs} args - Arguments to delete one Competency.
     * @example
     * // Delete one Competency
     * const Competency = await prisma.competency.delete({
     *   where: {
     *     // ... filter to delete one Competency
     *   }
     * })
     * 
     */
    delete<T extends CompetencyDeleteArgs>(args: SelectSubset<T, CompetencyDeleteArgs<ExtArgs>>): Prisma__CompetencyClient<$Result.GetResult<Prisma.$CompetencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competency.
     * @param {CompetencyUpdateArgs} args - Arguments to update one Competency.
     * @example
     * // Update one Competency
     * const competency = await prisma.competency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetencyUpdateArgs>(args: SelectSubset<T, CompetencyUpdateArgs<ExtArgs>>): Prisma__CompetencyClient<$Result.GetResult<Prisma.$CompetencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competencies.
     * @param {CompetencyDeleteManyArgs} args - Arguments to filter Competencies to delete.
     * @example
     * // Delete a few Competencies
     * const { count } = await prisma.competency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetencyDeleteManyArgs>(args?: SelectSubset<T, CompetencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competencies
     * const competency = await prisma.competency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetencyUpdateManyArgs>(args: SelectSubset<T, CompetencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competencies and returns the data updated in the database.
     * @param {CompetencyUpdateManyAndReturnArgs} args - Arguments to update many Competencies.
     * @example
     * // Update many Competencies
     * const competency = await prisma.competency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Competencies and only return the `id`
     * const competencyWithIdOnly = await prisma.competency.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompetencyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Competency.
     * @param {CompetencyUpsertArgs} args - Arguments to update or create a Competency.
     * @example
     * // Update or create a Competency
     * const competency = await prisma.competency.upsert({
     *   create: {
     *     // ... data to create a Competency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competency we want to update
     *   }
     * })
     */
    upsert<T extends CompetencyUpsertArgs>(args: SelectSubset<T, CompetencyUpsertArgs<ExtArgs>>): Prisma__CompetencyClient<$Result.GetResult<Prisma.$CompetencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetencyCountArgs} args - Arguments to filter Competencies to count.
     * @example
     * // Count the number of Competencies
     * const count = await prisma.competency.count({
     *   where: {
     *     // ... the filter for the Competencies we want to count
     *   }
     * })
    **/
    count<T extends CompetencyCountArgs>(
      args?: Subset<T, CompetencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompetencyAggregateArgs>(args: Subset<T, CompetencyAggregateArgs>): Prisma.PrismaPromise<GetCompetencyAggregateType<T>>

    /**
     * Group by Competency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetencyGroupByArgs} args - Group by arguments.
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
      T extends CompetencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetencyGroupByArgs['orderBy'] }
        : { orderBy?: CompetencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompetencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Competency model
   */
  readonly fields: CompetencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Competency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usercompetencies<T extends Competency$usercompetenciesArgs<ExtArgs> = {}>(args?: Subset<T, Competency$usercompetenciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCompetencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Competency model
   */
  interface CompetencyFieldRefs {
    readonly id: FieldRef<"Competency", 'String'>
    readonly name: FieldRef<"Competency", 'String'>
    readonly description: FieldRef<"Competency", 'String'>
    readonly courseId: FieldRef<"Competency", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Competency findUnique
   */
  export type CompetencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competency
     */
    select?: CompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competency
     */
    omit?: CompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetencyInclude<ExtArgs> | null
    /**
     * Filter, which Competency to fetch.
     */
    where: CompetencyWhereUniqueInput
  }

  /**
   * Competency findUniqueOrThrow
   */
  export type CompetencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competency
     */
    select?: CompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competency
     */
    omit?: CompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetencyInclude<ExtArgs> | null
    /**
     * Filter, which Competency to fetch.
     */
    where: CompetencyWhereUniqueInput
  }

  /**
   * Competency findFirst
   */
  export type CompetencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competency
     */
    select?: CompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competency
     */
    omit?: CompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetencyInclude<ExtArgs> | null
    /**
     * Filter, which Competency to fetch.
     */
    where?: CompetencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competencies to fetch.
     */
    orderBy?: CompetencyOrderByWithRelationInput | CompetencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competencies.
     */
    cursor?: CompetencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competencies.
     */
    distinct?: CompetencyScalarFieldEnum | CompetencyScalarFieldEnum[]
  }

  /**
   * Competency findFirstOrThrow
   */
  export type CompetencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competency
     */
    select?: CompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competency
     */
    omit?: CompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetencyInclude<ExtArgs> | null
    /**
     * Filter, which Competency to fetch.
     */
    where?: CompetencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competencies to fetch.
     */
    orderBy?: CompetencyOrderByWithRelationInput | CompetencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competencies.
     */
    cursor?: CompetencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competencies.
     */
    distinct?: CompetencyScalarFieldEnum | CompetencyScalarFieldEnum[]
  }

  /**
   * Competency findMany
   */
  export type CompetencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competency
     */
    select?: CompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competency
     */
    omit?: CompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetencyInclude<ExtArgs> | null
    /**
     * Filter, which Competencies to fetch.
     */
    where?: CompetencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competencies to fetch.
     */
    orderBy?: CompetencyOrderByWithRelationInput | CompetencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competencies.
     */
    cursor?: CompetencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competencies.
     */
    skip?: number
    distinct?: CompetencyScalarFieldEnum | CompetencyScalarFieldEnum[]
  }

  /**
   * Competency create
   */
  export type CompetencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competency
     */
    select?: CompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competency
     */
    omit?: CompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Competency.
     */
    data: XOR<CompetencyCreateInput, CompetencyUncheckedCreateInput>
  }

  /**
   * Competency createMany
   */
  export type CompetencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Competencies.
     */
    data: CompetencyCreateManyInput | CompetencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competency createManyAndReturn
   */
  export type CompetencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competency
     */
    select?: CompetencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competency
     */
    omit?: CompetencyOmit<ExtArgs> | null
    /**
     * The data used to create many Competencies.
     */
    data: CompetencyCreateManyInput | CompetencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competency update
   */
  export type CompetencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competency
     */
    select?: CompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competency
     */
    omit?: CompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Competency.
     */
    data: XOR<CompetencyUpdateInput, CompetencyUncheckedUpdateInput>
    /**
     * Choose, which Competency to update.
     */
    where: CompetencyWhereUniqueInput
  }

  /**
   * Competency updateMany
   */
  export type CompetencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Competencies.
     */
    data: XOR<CompetencyUpdateManyMutationInput, CompetencyUncheckedUpdateManyInput>
    /**
     * Filter which Competencies to update
     */
    where?: CompetencyWhereInput
    /**
     * Limit how many Competencies to update.
     */
    limit?: number
  }

  /**
   * Competency updateManyAndReturn
   */
  export type CompetencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competency
     */
    select?: CompetencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competency
     */
    omit?: CompetencyOmit<ExtArgs> | null
    /**
     * The data used to update Competencies.
     */
    data: XOR<CompetencyUpdateManyMutationInput, CompetencyUncheckedUpdateManyInput>
    /**
     * Filter which Competencies to update
     */
    where?: CompetencyWhereInput
    /**
     * Limit how many Competencies to update.
     */
    limit?: number
  }

  /**
   * Competency upsert
   */
  export type CompetencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competency
     */
    select?: CompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competency
     */
    omit?: CompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Competency to update in case it exists.
     */
    where: CompetencyWhereUniqueInput
    /**
     * In case the Competency found by the `where` argument doesn't exist, create a new Competency with this data.
     */
    create: XOR<CompetencyCreateInput, CompetencyUncheckedCreateInput>
    /**
     * In case the Competency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetencyUpdateInput, CompetencyUncheckedUpdateInput>
  }

  /**
   * Competency delete
   */
  export type CompetencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competency
     */
    select?: CompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competency
     */
    omit?: CompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetencyInclude<ExtArgs> | null
    /**
     * Filter which Competency to delete.
     */
    where: CompetencyWhereUniqueInput
  }

  /**
   * Competency deleteMany
   */
  export type CompetencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competencies to delete
     */
    where?: CompetencyWhereInput
    /**
     * Limit how many Competencies to delete.
     */
    limit?: number
  }

  /**
   * Competency.usercompetencies
   */
  export type Competency$usercompetenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompetency
     */
    select?: UserCompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompetency
     */
    omit?: UserCompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompetencyInclude<ExtArgs> | null
    where?: UserCompetencyWhereInput
    orderBy?: UserCompetencyOrderByWithRelationInput | UserCompetencyOrderByWithRelationInput[]
    cursor?: UserCompetencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCompetencyScalarFieldEnum | UserCompetencyScalarFieldEnum[]
  }

  /**
   * Competency without action
   */
  export type CompetencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competency
     */
    select?: CompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competency
     */
    omit?: CompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetencyInclude<ExtArgs> | null
  }


  /**
   * Model UserCompetency
   */

  export type AggregateUserCompetency = {
    _count: UserCompetencyCountAggregateOutputType | null
    _min: UserCompetencyMinAggregateOutputType | null
    _max: UserCompetencyMaxAggregateOutputType | null
  }

  export type UserCompetencyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    competencyId: string | null
    achievedAt: Date | null
  }

  export type UserCompetencyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    competencyId: string | null
    achievedAt: Date | null
  }

  export type UserCompetencyCountAggregateOutputType = {
    id: number
    userId: number
    competencyId: number
    achievedAt: number
    _all: number
  }


  export type UserCompetencyMinAggregateInputType = {
    id?: true
    userId?: true
    competencyId?: true
    achievedAt?: true
  }

  export type UserCompetencyMaxAggregateInputType = {
    id?: true
    userId?: true
    competencyId?: true
    achievedAt?: true
  }

  export type UserCompetencyCountAggregateInputType = {
    id?: true
    userId?: true
    competencyId?: true
    achievedAt?: true
    _all?: true
  }

  export type UserCompetencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCompetency to aggregate.
     */
    where?: UserCompetencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCompetencies to fetch.
     */
    orderBy?: UserCompetencyOrderByWithRelationInput | UserCompetencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCompetencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCompetencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCompetencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCompetencies
    **/
    _count?: true | UserCompetencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCompetencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCompetencyMaxAggregateInputType
  }

  export type GetUserCompetencyAggregateType<T extends UserCompetencyAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCompetency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCompetency[P]>
      : GetScalarType<T[P], AggregateUserCompetency[P]>
  }




  export type UserCompetencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCompetencyWhereInput
    orderBy?: UserCompetencyOrderByWithAggregationInput | UserCompetencyOrderByWithAggregationInput[]
    by: UserCompetencyScalarFieldEnum[] | UserCompetencyScalarFieldEnum
    having?: UserCompetencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCompetencyCountAggregateInputType | true
    _min?: UserCompetencyMinAggregateInputType
    _max?: UserCompetencyMaxAggregateInputType
  }

  export type UserCompetencyGroupByOutputType = {
    id: string
    userId: string
    competencyId: string
    achievedAt: Date | null
    _count: UserCompetencyCountAggregateOutputType | null
    _min: UserCompetencyMinAggregateOutputType | null
    _max: UserCompetencyMaxAggregateOutputType | null
  }

  type GetUserCompetencyGroupByPayload<T extends UserCompetencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCompetencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCompetencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCompetencyGroupByOutputType[P]>
            : GetScalarType<T[P], UserCompetencyGroupByOutputType[P]>
        }
      >
    >


  export type UserCompetencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    competencyId?: boolean
    achievedAt?: boolean
    competency?: boolean | CompetencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCompetency"]>

  export type UserCompetencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    competencyId?: boolean
    achievedAt?: boolean
    competency?: boolean | CompetencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCompetency"]>

  export type UserCompetencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    competencyId?: boolean
    achievedAt?: boolean
    competency?: boolean | CompetencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCompetency"]>

  export type UserCompetencySelectScalar = {
    id?: boolean
    userId?: boolean
    competencyId?: boolean
    achievedAt?: boolean
  }

  export type UserCompetencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "competencyId" | "achievedAt", ExtArgs["result"]["userCompetency"]>
  export type UserCompetencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competency?: boolean | CompetencyDefaultArgs<ExtArgs>
  }
  export type UserCompetencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competency?: boolean | CompetencyDefaultArgs<ExtArgs>
  }
  export type UserCompetencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competency?: boolean | CompetencyDefaultArgs<ExtArgs>
  }

  export type $UserCompetencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCompetency"
    objects: {
      competency: Prisma.$CompetencyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      competencyId: string
      achievedAt: Date | null
    }, ExtArgs["result"]["userCompetency"]>
    composites: {}
  }

  type UserCompetencyGetPayload<S extends boolean | null | undefined | UserCompetencyDefaultArgs> = $Result.GetResult<Prisma.$UserCompetencyPayload, S>

  type UserCompetencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCompetencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCompetencyCountAggregateInputType | true
    }

  export interface UserCompetencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCompetency'], meta: { name: 'UserCompetency' } }
    /**
     * Find zero or one UserCompetency that matches the filter.
     * @param {UserCompetencyFindUniqueArgs} args - Arguments to find a UserCompetency
     * @example
     * // Get one UserCompetency
     * const userCompetency = await prisma.userCompetency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCompetencyFindUniqueArgs>(args: SelectSubset<T, UserCompetencyFindUniqueArgs<ExtArgs>>): Prisma__UserCompetencyClient<$Result.GetResult<Prisma.$UserCompetencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCompetency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCompetencyFindUniqueOrThrowArgs} args - Arguments to find a UserCompetency
     * @example
     * // Get one UserCompetency
     * const userCompetency = await prisma.userCompetency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCompetencyFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCompetencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCompetencyClient<$Result.GetResult<Prisma.$UserCompetencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCompetency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCompetencyFindFirstArgs} args - Arguments to find a UserCompetency
     * @example
     * // Get one UserCompetency
     * const userCompetency = await prisma.userCompetency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCompetencyFindFirstArgs>(args?: SelectSubset<T, UserCompetencyFindFirstArgs<ExtArgs>>): Prisma__UserCompetencyClient<$Result.GetResult<Prisma.$UserCompetencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCompetency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCompetencyFindFirstOrThrowArgs} args - Arguments to find a UserCompetency
     * @example
     * // Get one UserCompetency
     * const userCompetency = await prisma.userCompetency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCompetencyFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCompetencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCompetencyClient<$Result.GetResult<Prisma.$UserCompetencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCompetencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCompetencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCompetencies
     * const userCompetencies = await prisma.userCompetency.findMany()
     * 
     * // Get first 10 UserCompetencies
     * const userCompetencies = await prisma.userCompetency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCompetencyWithIdOnly = await prisma.userCompetency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCompetencyFindManyArgs>(args?: SelectSubset<T, UserCompetencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCompetencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCompetency.
     * @param {UserCompetencyCreateArgs} args - Arguments to create a UserCompetency.
     * @example
     * // Create one UserCompetency
     * const UserCompetency = await prisma.userCompetency.create({
     *   data: {
     *     // ... data to create a UserCompetency
     *   }
     * })
     * 
     */
    create<T extends UserCompetencyCreateArgs>(args: SelectSubset<T, UserCompetencyCreateArgs<ExtArgs>>): Prisma__UserCompetencyClient<$Result.GetResult<Prisma.$UserCompetencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCompetencies.
     * @param {UserCompetencyCreateManyArgs} args - Arguments to create many UserCompetencies.
     * @example
     * // Create many UserCompetencies
     * const userCompetency = await prisma.userCompetency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCompetencyCreateManyArgs>(args?: SelectSubset<T, UserCompetencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCompetencies and returns the data saved in the database.
     * @param {UserCompetencyCreateManyAndReturnArgs} args - Arguments to create many UserCompetencies.
     * @example
     * // Create many UserCompetencies
     * const userCompetency = await prisma.userCompetency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCompetencies and only return the `id`
     * const userCompetencyWithIdOnly = await prisma.userCompetency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCompetencyCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCompetencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCompetencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCompetency.
     * @param {UserCompetencyDeleteArgs} args - Arguments to delete one UserCompetency.
     * @example
     * // Delete one UserCompetency
     * const UserCompetency = await prisma.userCompetency.delete({
     *   where: {
     *     // ... filter to delete one UserCompetency
     *   }
     * })
     * 
     */
    delete<T extends UserCompetencyDeleteArgs>(args: SelectSubset<T, UserCompetencyDeleteArgs<ExtArgs>>): Prisma__UserCompetencyClient<$Result.GetResult<Prisma.$UserCompetencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCompetency.
     * @param {UserCompetencyUpdateArgs} args - Arguments to update one UserCompetency.
     * @example
     * // Update one UserCompetency
     * const userCompetency = await prisma.userCompetency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCompetencyUpdateArgs>(args: SelectSubset<T, UserCompetencyUpdateArgs<ExtArgs>>): Prisma__UserCompetencyClient<$Result.GetResult<Prisma.$UserCompetencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCompetencies.
     * @param {UserCompetencyDeleteManyArgs} args - Arguments to filter UserCompetencies to delete.
     * @example
     * // Delete a few UserCompetencies
     * const { count } = await prisma.userCompetency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCompetencyDeleteManyArgs>(args?: SelectSubset<T, UserCompetencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCompetencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCompetencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCompetencies
     * const userCompetency = await prisma.userCompetency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCompetencyUpdateManyArgs>(args: SelectSubset<T, UserCompetencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCompetencies and returns the data updated in the database.
     * @param {UserCompetencyUpdateManyAndReturnArgs} args - Arguments to update many UserCompetencies.
     * @example
     * // Update many UserCompetencies
     * const userCompetency = await prisma.userCompetency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCompetencies and only return the `id`
     * const userCompetencyWithIdOnly = await prisma.userCompetency.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserCompetencyUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCompetencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCompetencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCompetency.
     * @param {UserCompetencyUpsertArgs} args - Arguments to update or create a UserCompetency.
     * @example
     * // Update or create a UserCompetency
     * const userCompetency = await prisma.userCompetency.upsert({
     *   create: {
     *     // ... data to create a UserCompetency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCompetency we want to update
     *   }
     * })
     */
    upsert<T extends UserCompetencyUpsertArgs>(args: SelectSubset<T, UserCompetencyUpsertArgs<ExtArgs>>): Prisma__UserCompetencyClient<$Result.GetResult<Prisma.$UserCompetencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCompetencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCompetencyCountArgs} args - Arguments to filter UserCompetencies to count.
     * @example
     * // Count the number of UserCompetencies
     * const count = await prisma.userCompetency.count({
     *   where: {
     *     // ... the filter for the UserCompetencies we want to count
     *   }
     * })
    **/
    count<T extends UserCompetencyCountArgs>(
      args?: Subset<T, UserCompetencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCompetencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCompetency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCompetencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCompetencyAggregateArgs>(args: Subset<T, UserCompetencyAggregateArgs>): Prisma.PrismaPromise<GetUserCompetencyAggregateType<T>>

    /**
     * Group by UserCompetency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCompetencyGroupByArgs} args - Group by arguments.
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
      T extends UserCompetencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCompetencyGroupByArgs['orderBy'] }
        : { orderBy?: UserCompetencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCompetencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCompetencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCompetency model
   */
  readonly fields: UserCompetencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCompetency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCompetencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competency<T extends CompetencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetencyDefaultArgs<ExtArgs>>): Prisma__CompetencyClient<$Result.GetResult<Prisma.$CompetencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserCompetency model
   */
  interface UserCompetencyFieldRefs {
    readonly id: FieldRef<"UserCompetency", 'String'>
    readonly userId: FieldRef<"UserCompetency", 'String'>
    readonly competencyId: FieldRef<"UserCompetency", 'String'>
    readonly achievedAt: FieldRef<"UserCompetency", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCompetency findUnique
   */
  export type UserCompetencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompetency
     */
    select?: UserCompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompetency
     */
    omit?: UserCompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompetencyInclude<ExtArgs> | null
    /**
     * Filter, which UserCompetency to fetch.
     */
    where: UserCompetencyWhereUniqueInput
  }

  /**
   * UserCompetency findUniqueOrThrow
   */
  export type UserCompetencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompetency
     */
    select?: UserCompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompetency
     */
    omit?: UserCompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompetencyInclude<ExtArgs> | null
    /**
     * Filter, which UserCompetency to fetch.
     */
    where: UserCompetencyWhereUniqueInput
  }

  /**
   * UserCompetency findFirst
   */
  export type UserCompetencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompetency
     */
    select?: UserCompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompetency
     */
    omit?: UserCompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompetencyInclude<ExtArgs> | null
    /**
     * Filter, which UserCompetency to fetch.
     */
    where?: UserCompetencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCompetencies to fetch.
     */
    orderBy?: UserCompetencyOrderByWithRelationInput | UserCompetencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCompetencies.
     */
    cursor?: UserCompetencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCompetencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCompetencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCompetencies.
     */
    distinct?: UserCompetencyScalarFieldEnum | UserCompetencyScalarFieldEnum[]
  }

  /**
   * UserCompetency findFirstOrThrow
   */
  export type UserCompetencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompetency
     */
    select?: UserCompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompetency
     */
    omit?: UserCompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompetencyInclude<ExtArgs> | null
    /**
     * Filter, which UserCompetency to fetch.
     */
    where?: UserCompetencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCompetencies to fetch.
     */
    orderBy?: UserCompetencyOrderByWithRelationInput | UserCompetencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCompetencies.
     */
    cursor?: UserCompetencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCompetencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCompetencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCompetencies.
     */
    distinct?: UserCompetencyScalarFieldEnum | UserCompetencyScalarFieldEnum[]
  }

  /**
   * UserCompetency findMany
   */
  export type UserCompetencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompetency
     */
    select?: UserCompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompetency
     */
    omit?: UserCompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompetencyInclude<ExtArgs> | null
    /**
     * Filter, which UserCompetencies to fetch.
     */
    where?: UserCompetencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCompetencies to fetch.
     */
    orderBy?: UserCompetencyOrderByWithRelationInput | UserCompetencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCompetencies.
     */
    cursor?: UserCompetencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCompetencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCompetencies.
     */
    skip?: number
    distinct?: UserCompetencyScalarFieldEnum | UserCompetencyScalarFieldEnum[]
  }

  /**
   * UserCompetency create
   */
  export type UserCompetencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompetency
     */
    select?: UserCompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompetency
     */
    omit?: UserCompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompetencyInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCompetency.
     */
    data: XOR<UserCompetencyCreateInput, UserCompetencyUncheckedCreateInput>
  }

  /**
   * UserCompetency createMany
   */
  export type UserCompetencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCompetencies.
     */
    data: UserCompetencyCreateManyInput | UserCompetencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCompetency createManyAndReturn
   */
  export type UserCompetencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompetency
     */
    select?: UserCompetencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompetency
     */
    omit?: UserCompetencyOmit<ExtArgs> | null
    /**
     * The data used to create many UserCompetencies.
     */
    data: UserCompetencyCreateManyInput | UserCompetencyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompetencyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCompetency update
   */
  export type UserCompetencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompetency
     */
    select?: UserCompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompetency
     */
    omit?: UserCompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompetencyInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCompetency.
     */
    data: XOR<UserCompetencyUpdateInput, UserCompetencyUncheckedUpdateInput>
    /**
     * Choose, which UserCompetency to update.
     */
    where: UserCompetencyWhereUniqueInput
  }

  /**
   * UserCompetency updateMany
   */
  export type UserCompetencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCompetencies.
     */
    data: XOR<UserCompetencyUpdateManyMutationInput, UserCompetencyUncheckedUpdateManyInput>
    /**
     * Filter which UserCompetencies to update
     */
    where?: UserCompetencyWhereInput
    /**
     * Limit how many UserCompetencies to update.
     */
    limit?: number
  }

  /**
   * UserCompetency updateManyAndReturn
   */
  export type UserCompetencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompetency
     */
    select?: UserCompetencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompetency
     */
    omit?: UserCompetencyOmit<ExtArgs> | null
    /**
     * The data used to update UserCompetencies.
     */
    data: XOR<UserCompetencyUpdateManyMutationInput, UserCompetencyUncheckedUpdateManyInput>
    /**
     * Filter which UserCompetencies to update
     */
    where?: UserCompetencyWhereInput
    /**
     * Limit how many UserCompetencies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompetencyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCompetency upsert
   */
  export type UserCompetencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompetency
     */
    select?: UserCompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompetency
     */
    omit?: UserCompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompetencyInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCompetency to update in case it exists.
     */
    where: UserCompetencyWhereUniqueInput
    /**
     * In case the UserCompetency found by the `where` argument doesn't exist, create a new UserCompetency with this data.
     */
    create: XOR<UserCompetencyCreateInput, UserCompetencyUncheckedCreateInput>
    /**
     * In case the UserCompetency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCompetencyUpdateInput, UserCompetencyUncheckedUpdateInput>
  }

  /**
   * UserCompetency delete
   */
  export type UserCompetencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompetency
     */
    select?: UserCompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompetency
     */
    omit?: UserCompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompetencyInclude<ExtArgs> | null
    /**
     * Filter which UserCompetency to delete.
     */
    where: UserCompetencyWhereUniqueInput
  }

  /**
   * UserCompetency deleteMany
   */
  export type UserCompetencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCompetencies to delete
     */
    where?: UserCompetencyWhereInput
    /**
     * Limit how many UserCompetencies to delete.
     */
    limit?: number
  }

  /**
   * UserCompetency without action
   */
  export type UserCompetencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompetency
     */
    select?: UserCompetencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompetency
     */
    omit?: UserCompetencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompetencyInclude<ExtArgs> | null
  }


  /**
   * Model QuestionBank
   */

  export type AggregateQuestionBank = {
    _count: QuestionBankCountAggregateOutputType | null
    _min: QuestionBankMinAggregateOutputType | null
    _max: QuestionBankMaxAggregateOutputType | null
  }

  export type QuestionBankMinAggregateOutputType = {
    id: string | null
    text: string | null
    type: $Enums.QuestionType | null
    answer: string | null
    createdAt: Date | null
  }

  export type QuestionBankMaxAggregateOutputType = {
    id: string | null
    text: string | null
    type: $Enums.QuestionType | null
    answer: string | null
    createdAt: Date | null
  }

  export type QuestionBankCountAggregateOutputType = {
    id: number
    text: number
    type: number
    options: number
    answer: number
    createdAt: number
    tags: number
    _all: number
  }


  export type QuestionBankMinAggregateInputType = {
    id?: true
    text?: true
    type?: true
    answer?: true
    createdAt?: true
  }

  export type QuestionBankMaxAggregateInputType = {
    id?: true
    text?: true
    type?: true
    answer?: true
    createdAt?: true
  }

  export type QuestionBankCountAggregateInputType = {
    id?: true
    text?: true
    type?: true
    options?: true
    answer?: true
    createdAt?: true
    tags?: true
    _all?: true
  }

  export type QuestionBankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionBank to aggregate.
     */
    where?: QuestionBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionBanks to fetch.
     */
    orderBy?: QuestionBankOrderByWithRelationInput | QuestionBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionBanks
    **/
    _count?: true | QuestionBankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionBankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionBankMaxAggregateInputType
  }

  export type GetQuestionBankAggregateType<T extends QuestionBankAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionBank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionBank[P]>
      : GetScalarType<T[P], AggregateQuestionBank[P]>
  }




  export type QuestionBankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionBankWhereInput
    orderBy?: QuestionBankOrderByWithAggregationInput | QuestionBankOrderByWithAggregationInput[]
    by: QuestionBankScalarFieldEnum[] | QuestionBankScalarFieldEnum
    having?: QuestionBankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionBankCountAggregateInputType | true
    _min?: QuestionBankMinAggregateInputType
    _max?: QuestionBankMaxAggregateInputType
  }

  export type QuestionBankGroupByOutputType = {
    id: string
    text: string
    type: $Enums.QuestionType
    options: JsonValue | null
    answer: string | null
    createdAt: Date
    tags: string[]
    _count: QuestionBankCountAggregateOutputType | null
    _min: QuestionBankMinAggregateOutputType | null
    _max: QuestionBankMaxAggregateOutputType | null
  }

  type GetQuestionBankGroupByPayload<T extends QuestionBankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionBankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionBankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionBankGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionBankGroupByOutputType[P]>
        }
      >
    >


  export type QuestionBankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    type?: boolean
    options?: boolean
    answer?: boolean
    createdAt?: boolean
    tags?: boolean
    examQuestions?: boolean | QuestionBank$examQuestionsArgs<ExtArgs>
    _count?: boolean | QuestionBankCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionBank"]>

  export type QuestionBankSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    type?: boolean
    options?: boolean
    answer?: boolean
    createdAt?: boolean
    tags?: boolean
  }, ExtArgs["result"]["questionBank"]>

  export type QuestionBankSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    type?: boolean
    options?: boolean
    answer?: boolean
    createdAt?: boolean
    tags?: boolean
  }, ExtArgs["result"]["questionBank"]>

  export type QuestionBankSelectScalar = {
    id?: boolean
    text?: boolean
    type?: boolean
    options?: boolean
    answer?: boolean
    createdAt?: boolean
    tags?: boolean
  }

  export type QuestionBankOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "type" | "options" | "answer" | "createdAt" | "tags", ExtArgs["result"]["questionBank"]>
  export type QuestionBankInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examQuestions?: boolean | QuestionBank$examQuestionsArgs<ExtArgs>
    _count?: boolean | QuestionBankCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionBankIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuestionBankIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuestionBankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionBank"
    objects: {
      examQuestions: Prisma.$ExamQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      type: $Enums.QuestionType
      options: Prisma.JsonValue | null
      answer: string | null
      createdAt: Date
      tags: string[]
    }, ExtArgs["result"]["questionBank"]>
    composites: {}
  }

  type QuestionBankGetPayload<S extends boolean | null | undefined | QuestionBankDefaultArgs> = $Result.GetResult<Prisma.$QuestionBankPayload, S>

  type QuestionBankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionBankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionBankCountAggregateInputType | true
    }

  export interface QuestionBankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionBank'], meta: { name: 'QuestionBank' } }
    /**
     * Find zero or one QuestionBank that matches the filter.
     * @param {QuestionBankFindUniqueArgs} args - Arguments to find a QuestionBank
     * @example
     * // Get one QuestionBank
     * const questionBank = await prisma.questionBank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionBankFindUniqueArgs>(args: SelectSubset<T, QuestionBankFindUniqueArgs<ExtArgs>>): Prisma__QuestionBankClient<$Result.GetResult<Prisma.$QuestionBankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionBank that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionBankFindUniqueOrThrowArgs} args - Arguments to find a QuestionBank
     * @example
     * // Get one QuestionBank
     * const questionBank = await prisma.questionBank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionBankFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionBankFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionBankClient<$Result.GetResult<Prisma.$QuestionBankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionBank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionBankFindFirstArgs} args - Arguments to find a QuestionBank
     * @example
     * // Get one QuestionBank
     * const questionBank = await prisma.questionBank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionBankFindFirstArgs>(args?: SelectSubset<T, QuestionBankFindFirstArgs<ExtArgs>>): Prisma__QuestionBankClient<$Result.GetResult<Prisma.$QuestionBankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionBank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionBankFindFirstOrThrowArgs} args - Arguments to find a QuestionBank
     * @example
     * // Get one QuestionBank
     * const questionBank = await prisma.questionBank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionBankFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionBankFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionBankClient<$Result.GetResult<Prisma.$QuestionBankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionBanks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionBankFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionBanks
     * const questionBanks = await prisma.questionBank.findMany()
     * 
     * // Get first 10 QuestionBanks
     * const questionBanks = await prisma.questionBank.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionBankWithIdOnly = await prisma.questionBank.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionBankFindManyArgs>(args?: SelectSubset<T, QuestionBankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionBankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionBank.
     * @param {QuestionBankCreateArgs} args - Arguments to create a QuestionBank.
     * @example
     * // Create one QuestionBank
     * const QuestionBank = await prisma.questionBank.create({
     *   data: {
     *     // ... data to create a QuestionBank
     *   }
     * })
     * 
     */
    create<T extends QuestionBankCreateArgs>(args: SelectSubset<T, QuestionBankCreateArgs<ExtArgs>>): Prisma__QuestionBankClient<$Result.GetResult<Prisma.$QuestionBankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionBanks.
     * @param {QuestionBankCreateManyArgs} args - Arguments to create many QuestionBanks.
     * @example
     * // Create many QuestionBanks
     * const questionBank = await prisma.questionBank.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionBankCreateManyArgs>(args?: SelectSubset<T, QuestionBankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionBanks and returns the data saved in the database.
     * @param {QuestionBankCreateManyAndReturnArgs} args - Arguments to create many QuestionBanks.
     * @example
     * // Create many QuestionBanks
     * const questionBank = await prisma.questionBank.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionBanks and only return the `id`
     * const questionBankWithIdOnly = await prisma.questionBank.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionBankCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionBankCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionBankPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionBank.
     * @param {QuestionBankDeleteArgs} args - Arguments to delete one QuestionBank.
     * @example
     * // Delete one QuestionBank
     * const QuestionBank = await prisma.questionBank.delete({
     *   where: {
     *     // ... filter to delete one QuestionBank
     *   }
     * })
     * 
     */
    delete<T extends QuestionBankDeleteArgs>(args: SelectSubset<T, QuestionBankDeleteArgs<ExtArgs>>): Prisma__QuestionBankClient<$Result.GetResult<Prisma.$QuestionBankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionBank.
     * @param {QuestionBankUpdateArgs} args - Arguments to update one QuestionBank.
     * @example
     * // Update one QuestionBank
     * const questionBank = await prisma.questionBank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionBankUpdateArgs>(args: SelectSubset<T, QuestionBankUpdateArgs<ExtArgs>>): Prisma__QuestionBankClient<$Result.GetResult<Prisma.$QuestionBankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionBanks.
     * @param {QuestionBankDeleteManyArgs} args - Arguments to filter QuestionBanks to delete.
     * @example
     * // Delete a few QuestionBanks
     * const { count } = await prisma.questionBank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionBankDeleteManyArgs>(args?: SelectSubset<T, QuestionBankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionBanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionBankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionBanks
     * const questionBank = await prisma.questionBank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionBankUpdateManyArgs>(args: SelectSubset<T, QuestionBankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionBanks and returns the data updated in the database.
     * @param {QuestionBankUpdateManyAndReturnArgs} args - Arguments to update many QuestionBanks.
     * @example
     * // Update many QuestionBanks
     * const questionBank = await prisma.questionBank.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionBanks and only return the `id`
     * const questionBankWithIdOnly = await prisma.questionBank.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionBankUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionBankUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionBankPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionBank.
     * @param {QuestionBankUpsertArgs} args - Arguments to update or create a QuestionBank.
     * @example
     * // Update or create a QuestionBank
     * const questionBank = await prisma.questionBank.upsert({
     *   create: {
     *     // ... data to create a QuestionBank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionBank we want to update
     *   }
     * })
     */
    upsert<T extends QuestionBankUpsertArgs>(args: SelectSubset<T, QuestionBankUpsertArgs<ExtArgs>>): Prisma__QuestionBankClient<$Result.GetResult<Prisma.$QuestionBankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionBanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionBankCountArgs} args - Arguments to filter QuestionBanks to count.
     * @example
     * // Count the number of QuestionBanks
     * const count = await prisma.questionBank.count({
     *   where: {
     *     // ... the filter for the QuestionBanks we want to count
     *   }
     * })
    **/
    count<T extends QuestionBankCountArgs>(
      args?: Subset<T, QuestionBankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionBankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionBank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionBankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionBankAggregateArgs>(args: Subset<T, QuestionBankAggregateArgs>): Prisma.PrismaPromise<GetQuestionBankAggregateType<T>>

    /**
     * Group by QuestionBank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionBankGroupByArgs} args - Group by arguments.
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
      T extends QuestionBankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionBankGroupByArgs['orderBy'] }
        : { orderBy?: QuestionBankGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionBankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionBankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionBank model
   */
  readonly fields: QuestionBankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionBank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionBankClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examQuestions<T extends QuestionBank$examQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, QuestionBank$examQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QuestionBank model
   */
  interface QuestionBankFieldRefs {
    readonly id: FieldRef<"QuestionBank", 'String'>
    readonly text: FieldRef<"QuestionBank", 'String'>
    readonly type: FieldRef<"QuestionBank", 'QuestionType'>
    readonly options: FieldRef<"QuestionBank", 'Json'>
    readonly answer: FieldRef<"QuestionBank", 'String'>
    readonly createdAt: FieldRef<"QuestionBank", 'DateTime'>
    readonly tags: FieldRef<"QuestionBank", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * QuestionBank findUnique
   */
  export type QuestionBankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionBank
     */
    select?: QuestionBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionBank
     */
    omit?: QuestionBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionBankInclude<ExtArgs> | null
    /**
     * Filter, which QuestionBank to fetch.
     */
    where: QuestionBankWhereUniqueInput
  }

  /**
   * QuestionBank findUniqueOrThrow
   */
  export type QuestionBankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionBank
     */
    select?: QuestionBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionBank
     */
    omit?: QuestionBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionBankInclude<ExtArgs> | null
    /**
     * Filter, which QuestionBank to fetch.
     */
    where: QuestionBankWhereUniqueInput
  }

  /**
   * QuestionBank findFirst
   */
  export type QuestionBankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionBank
     */
    select?: QuestionBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionBank
     */
    omit?: QuestionBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionBankInclude<ExtArgs> | null
    /**
     * Filter, which QuestionBank to fetch.
     */
    where?: QuestionBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionBanks to fetch.
     */
    orderBy?: QuestionBankOrderByWithRelationInput | QuestionBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionBanks.
     */
    cursor?: QuestionBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionBanks.
     */
    distinct?: QuestionBankScalarFieldEnum | QuestionBankScalarFieldEnum[]
  }

  /**
   * QuestionBank findFirstOrThrow
   */
  export type QuestionBankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionBank
     */
    select?: QuestionBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionBank
     */
    omit?: QuestionBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionBankInclude<ExtArgs> | null
    /**
     * Filter, which QuestionBank to fetch.
     */
    where?: QuestionBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionBanks to fetch.
     */
    orderBy?: QuestionBankOrderByWithRelationInput | QuestionBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionBanks.
     */
    cursor?: QuestionBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionBanks.
     */
    distinct?: QuestionBankScalarFieldEnum | QuestionBankScalarFieldEnum[]
  }

  /**
   * QuestionBank findMany
   */
  export type QuestionBankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionBank
     */
    select?: QuestionBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionBank
     */
    omit?: QuestionBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionBankInclude<ExtArgs> | null
    /**
     * Filter, which QuestionBanks to fetch.
     */
    where?: QuestionBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionBanks to fetch.
     */
    orderBy?: QuestionBankOrderByWithRelationInput | QuestionBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionBanks.
     */
    cursor?: QuestionBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionBanks.
     */
    skip?: number
    distinct?: QuestionBankScalarFieldEnum | QuestionBankScalarFieldEnum[]
  }

  /**
   * QuestionBank create
   */
  export type QuestionBankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionBank
     */
    select?: QuestionBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionBank
     */
    omit?: QuestionBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionBankInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionBank.
     */
    data: XOR<QuestionBankCreateInput, QuestionBankUncheckedCreateInput>
  }

  /**
   * QuestionBank createMany
   */
  export type QuestionBankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionBanks.
     */
    data: QuestionBankCreateManyInput | QuestionBankCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionBank createManyAndReturn
   */
  export type QuestionBankCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionBank
     */
    select?: QuestionBankSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionBank
     */
    omit?: QuestionBankOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionBanks.
     */
    data: QuestionBankCreateManyInput | QuestionBankCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionBank update
   */
  export type QuestionBankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionBank
     */
    select?: QuestionBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionBank
     */
    omit?: QuestionBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionBankInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionBank.
     */
    data: XOR<QuestionBankUpdateInput, QuestionBankUncheckedUpdateInput>
    /**
     * Choose, which QuestionBank to update.
     */
    where: QuestionBankWhereUniqueInput
  }

  /**
   * QuestionBank updateMany
   */
  export type QuestionBankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionBanks.
     */
    data: XOR<QuestionBankUpdateManyMutationInput, QuestionBankUncheckedUpdateManyInput>
    /**
     * Filter which QuestionBanks to update
     */
    where?: QuestionBankWhereInput
    /**
     * Limit how many QuestionBanks to update.
     */
    limit?: number
  }

  /**
   * QuestionBank updateManyAndReturn
   */
  export type QuestionBankUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionBank
     */
    select?: QuestionBankSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionBank
     */
    omit?: QuestionBankOmit<ExtArgs> | null
    /**
     * The data used to update QuestionBanks.
     */
    data: XOR<QuestionBankUpdateManyMutationInput, QuestionBankUncheckedUpdateManyInput>
    /**
     * Filter which QuestionBanks to update
     */
    where?: QuestionBankWhereInput
    /**
     * Limit how many QuestionBanks to update.
     */
    limit?: number
  }

  /**
   * QuestionBank upsert
   */
  export type QuestionBankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionBank
     */
    select?: QuestionBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionBank
     */
    omit?: QuestionBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionBankInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionBank to update in case it exists.
     */
    where: QuestionBankWhereUniqueInput
    /**
     * In case the QuestionBank found by the `where` argument doesn't exist, create a new QuestionBank with this data.
     */
    create: XOR<QuestionBankCreateInput, QuestionBankUncheckedCreateInput>
    /**
     * In case the QuestionBank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionBankUpdateInput, QuestionBankUncheckedUpdateInput>
  }

  /**
   * QuestionBank delete
   */
  export type QuestionBankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionBank
     */
    select?: QuestionBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionBank
     */
    omit?: QuestionBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionBankInclude<ExtArgs> | null
    /**
     * Filter which QuestionBank to delete.
     */
    where: QuestionBankWhereUniqueInput
  }

  /**
   * QuestionBank deleteMany
   */
  export type QuestionBankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionBanks to delete
     */
    where?: QuestionBankWhereInput
    /**
     * Limit how many QuestionBanks to delete.
     */
    limit?: number
  }

  /**
   * QuestionBank.examQuestions
   */
  export type QuestionBank$examQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamQuestion
     */
    omit?: ExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    where?: ExamQuestionWhereInput
    orderBy?: ExamQuestionOrderByWithRelationInput | ExamQuestionOrderByWithRelationInput[]
    cursor?: ExamQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamQuestionScalarFieldEnum | ExamQuestionScalarFieldEnum[]
  }

  /**
   * QuestionBank without action
   */
  export type QuestionBankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionBank
     */
    select?: QuestionBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionBank
     */
    omit?: QuestionBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionBankInclude<ExtArgs> | null
  }


  /**
   * Model ExamQuestion
   */

  export type AggregateExamQuestion = {
    _count: ExamQuestionCountAggregateOutputType | null
    _avg: ExamQuestionAvgAggregateOutputType | null
    _sum: ExamQuestionSumAggregateOutputType | null
    _min: ExamQuestionMinAggregateOutputType | null
    _max: ExamQuestionMaxAggregateOutputType | null
  }

  export type ExamQuestionAvgAggregateOutputType = {
    points: number | null
  }

  export type ExamQuestionSumAggregateOutputType = {
    points: number | null
  }

  export type ExamQuestionMinAggregateOutputType = {
    id: string | null
    assessmentId: string | null
    questionBankId: string | null
    points: number | null
  }

  export type ExamQuestionMaxAggregateOutputType = {
    id: string | null
    assessmentId: string | null
    questionBankId: string | null
    points: number | null
  }

  export type ExamQuestionCountAggregateOutputType = {
    id: number
    assessmentId: number
    questionBankId: number
    points: number
    _all: number
  }


  export type ExamQuestionAvgAggregateInputType = {
    points?: true
  }

  export type ExamQuestionSumAggregateInputType = {
    points?: true
  }

  export type ExamQuestionMinAggregateInputType = {
    id?: true
    assessmentId?: true
    questionBankId?: true
    points?: true
  }

  export type ExamQuestionMaxAggregateInputType = {
    id?: true
    assessmentId?: true
    questionBankId?: true
    points?: true
  }

  export type ExamQuestionCountAggregateInputType = {
    id?: true
    assessmentId?: true
    questionBankId?: true
    points?: true
    _all?: true
  }

  export type ExamQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamQuestion to aggregate.
     */
    where?: ExamQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamQuestions to fetch.
     */
    orderBy?: ExamQuestionOrderByWithRelationInput | ExamQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamQuestions
    **/
    _count?: true | ExamQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamQuestionMaxAggregateInputType
  }

  export type GetExamQuestionAggregateType<T extends ExamQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateExamQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamQuestion[P]>
      : GetScalarType<T[P], AggregateExamQuestion[P]>
  }




  export type ExamQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamQuestionWhereInput
    orderBy?: ExamQuestionOrderByWithAggregationInput | ExamQuestionOrderByWithAggregationInput[]
    by: ExamQuestionScalarFieldEnum[] | ExamQuestionScalarFieldEnum
    having?: ExamQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamQuestionCountAggregateInputType | true
    _avg?: ExamQuestionAvgAggregateInputType
    _sum?: ExamQuestionSumAggregateInputType
    _min?: ExamQuestionMinAggregateInputType
    _max?: ExamQuestionMaxAggregateInputType
  }

  export type ExamQuestionGroupByOutputType = {
    id: string
    assessmentId: string
    questionBankId: string
    points: number
    _count: ExamQuestionCountAggregateOutputType | null
    _avg: ExamQuestionAvgAggregateOutputType | null
    _sum: ExamQuestionSumAggregateOutputType | null
    _min: ExamQuestionMinAggregateOutputType | null
    _max: ExamQuestionMaxAggregateOutputType | null
  }

  type GetExamQuestionGroupByPayload<T extends ExamQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], ExamQuestionGroupByOutputType[P]>
        }
      >
    >


  export type ExamQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    questionBankId?: boolean
    points?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    questionBank?: boolean | QuestionBankDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examQuestion"]>

  export type ExamQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    questionBankId?: boolean
    points?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    questionBank?: boolean | QuestionBankDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examQuestion"]>

  export type ExamQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    questionBankId?: boolean
    points?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    questionBank?: boolean | QuestionBankDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examQuestion"]>

  export type ExamQuestionSelectScalar = {
    id?: boolean
    assessmentId?: boolean
    questionBankId?: boolean
    points?: boolean
  }

  export type ExamQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assessmentId" | "questionBankId" | "points", ExtArgs["result"]["examQuestion"]>
  export type ExamQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    questionBank?: boolean | QuestionBankDefaultArgs<ExtArgs>
  }
  export type ExamQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    questionBank?: boolean | QuestionBankDefaultArgs<ExtArgs>
  }
  export type ExamQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    questionBank?: boolean | QuestionBankDefaultArgs<ExtArgs>
  }

  export type $ExamQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamQuestion"
    objects: {
      assessment: Prisma.$AssessmentPayload<ExtArgs>
      questionBank: Prisma.$QuestionBankPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assessmentId: string
      questionBankId: string
      points: number
    }, ExtArgs["result"]["examQuestion"]>
    composites: {}
  }

  type ExamQuestionGetPayload<S extends boolean | null | undefined | ExamQuestionDefaultArgs> = $Result.GetResult<Prisma.$ExamQuestionPayload, S>

  type ExamQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamQuestionCountAggregateInputType | true
    }

  export interface ExamQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamQuestion'], meta: { name: 'ExamQuestion' } }
    /**
     * Find zero or one ExamQuestion that matches the filter.
     * @param {ExamQuestionFindUniqueArgs} args - Arguments to find a ExamQuestion
     * @example
     * // Get one ExamQuestion
     * const examQuestion = await prisma.examQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamQuestionFindUniqueArgs>(args: SelectSubset<T, ExamQuestionFindUniqueArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamQuestionFindUniqueOrThrowArgs} args - Arguments to find a ExamQuestion
     * @example
     * // Get one ExamQuestion
     * const examQuestion = await prisma.examQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionFindFirstArgs} args - Arguments to find a ExamQuestion
     * @example
     * // Get one ExamQuestion
     * const examQuestion = await prisma.examQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamQuestionFindFirstArgs>(args?: SelectSubset<T, ExamQuestionFindFirstArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionFindFirstOrThrowArgs} args - Arguments to find a ExamQuestion
     * @example
     * // Get one ExamQuestion
     * const examQuestion = await prisma.examQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamQuestions
     * const examQuestions = await prisma.examQuestion.findMany()
     * 
     * // Get first 10 ExamQuestions
     * const examQuestions = await prisma.examQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examQuestionWithIdOnly = await prisma.examQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamQuestionFindManyArgs>(args?: SelectSubset<T, ExamQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamQuestion.
     * @param {ExamQuestionCreateArgs} args - Arguments to create a ExamQuestion.
     * @example
     * // Create one ExamQuestion
     * const ExamQuestion = await prisma.examQuestion.create({
     *   data: {
     *     // ... data to create a ExamQuestion
     *   }
     * })
     * 
     */
    create<T extends ExamQuestionCreateArgs>(args: SelectSubset<T, ExamQuestionCreateArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamQuestions.
     * @param {ExamQuestionCreateManyArgs} args - Arguments to create many ExamQuestions.
     * @example
     * // Create many ExamQuestions
     * const examQuestion = await prisma.examQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamQuestionCreateManyArgs>(args?: SelectSubset<T, ExamQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamQuestions and returns the data saved in the database.
     * @param {ExamQuestionCreateManyAndReturnArgs} args - Arguments to create many ExamQuestions.
     * @example
     * // Create many ExamQuestions
     * const examQuestion = await prisma.examQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamQuestions and only return the `id`
     * const examQuestionWithIdOnly = await prisma.examQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExamQuestion.
     * @param {ExamQuestionDeleteArgs} args - Arguments to delete one ExamQuestion.
     * @example
     * // Delete one ExamQuestion
     * const ExamQuestion = await prisma.examQuestion.delete({
     *   where: {
     *     // ... filter to delete one ExamQuestion
     *   }
     * })
     * 
     */
    delete<T extends ExamQuestionDeleteArgs>(args: SelectSubset<T, ExamQuestionDeleteArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamQuestion.
     * @param {ExamQuestionUpdateArgs} args - Arguments to update one ExamQuestion.
     * @example
     * // Update one ExamQuestion
     * const examQuestion = await prisma.examQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamQuestionUpdateArgs>(args: SelectSubset<T, ExamQuestionUpdateArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamQuestions.
     * @param {ExamQuestionDeleteManyArgs} args - Arguments to filter ExamQuestions to delete.
     * @example
     * // Delete a few ExamQuestions
     * const { count } = await prisma.examQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamQuestionDeleteManyArgs>(args?: SelectSubset<T, ExamQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamQuestions
     * const examQuestion = await prisma.examQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamQuestionUpdateManyArgs>(args: SelectSubset<T, ExamQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamQuestions and returns the data updated in the database.
     * @param {ExamQuestionUpdateManyAndReturnArgs} args - Arguments to update many ExamQuestions.
     * @example
     * // Update many ExamQuestions
     * const examQuestion = await prisma.examQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExamQuestions and only return the `id`
     * const examQuestionWithIdOnly = await prisma.examQuestion.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExamQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExamQuestion.
     * @param {ExamQuestionUpsertArgs} args - Arguments to update or create a ExamQuestion.
     * @example
     * // Update or create a ExamQuestion
     * const examQuestion = await prisma.examQuestion.upsert({
     *   create: {
     *     // ... data to create a ExamQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamQuestion we want to update
     *   }
     * })
     */
    upsert<T extends ExamQuestionUpsertArgs>(args: SelectSubset<T, ExamQuestionUpsertArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionCountArgs} args - Arguments to filter ExamQuestions to count.
     * @example
     * // Count the number of ExamQuestions
     * const count = await prisma.examQuestion.count({
     *   where: {
     *     // ... the filter for the ExamQuestions we want to count
     *   }
     * })
    **/
    count<T extends ExamQuestionCountArgs>(
      args?: Subset<T, ExamQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamQuestionAggregateArgs>(args: Subset<T, ExamQuestionAggregateArgs>): Prisma.PrismaPromise<GetExamQuestionAggregateType<T>>

    /**
     * Group by ExamQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionGroupByArgs} args - Group by arguments.
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
      T extends ExamQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamQuestionGroupByArgs['orderBy'] }
        : { orderBy?: ExamQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamQuestion model
   */
  readonly fields: ExamQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assessment<T extends AssessmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentDefaultArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questionBank<T extends QuestionBankDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionBankDefaultArgs<ExtArgs>>): Prisma__QuestionBankClient<$Result.GetResult<Prisma.$QuestionBankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExamQuestion model
   */
  interface ExamQuestionFieldRefs {
    readonly id: FieldRef<"ExamQuestion", 'String'>
    readonly assessmentId: FieldRef<"ExamQuestion", 'String'>
    readonly questionBankId: FieldRef<"ExamQuestion", 'String'>
    readonly points: FieldRef<"ExamQuestion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExamQuestion findUnique
   */
  export type ExamQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamQuestion
     */
    omit?: ExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExamQuestion to fetch.
     */
    where: ExamQuestionWhereUniqueInput
  }

  /**
   * ExamQuestion findUniqueOrThrow
   */
  export type ExamQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamQuestion
     */
    omit?: ExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExamQuestion to fetch.
     */
    where: ExamQuestionWhereUniqueInput
  }

  /**
   * ExamQuestion findFirst
   */
  export type ExamQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamQuestion
     */
    omit?: ExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExamQuestion to fetch.
     */
    where?: ExamQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamQuestions to fetch.
     */
    orderBy?: ExamQuestionOrderByWithRelationInput | ExamQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamQuestions.
     */
    cursor?: ExamQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamQuestions.
     */
    distinct?: ExamQuestionScalarFieldEnum | ExamQuestionScalarFieldEnum[]
  }

  /**
   * ExamQuestion findFirstOrThrow
   */
  export type ExamQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamQuestion
     */
    omit?: ExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExamQuestion to fetch.
     */
    where?: ExamQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamQuestions to fetch.
     */
    orderBy?: ExamQuestionOrderByWithRelationInput | ExamQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamQuestions.
     */
    cursor?: ExamQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamQuestions.
     */
    distinct?: ExamQuestionScalarFieldEnum | ExamQuestionScalarFieldEnum[]
  }

  /**
   * ExamQuestion findMany
   */
  export type ExamQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamQuestion
     */
    omit?: ExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExamQuestions to fetch.
     */
    where?: ExamQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamQuestions to fetch.
     */
    orderBy?: ExamQuestionOrderByWithRelationInput | ExamQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamQuestions.
     */
    cursor?: ExamQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamQuestions.
     */
    skip?: number
    distinct?: ExamQuestionScalarFieldEnum | ExamQuestionScalarFieldEnum[]
  }

  /**
   * ExamQuestion create
   */
  export type ExamQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamQuestion
     */
    omit?: ExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamQuestion.
     */
    data: XOR<ExamQuestionCreateInput, ExamQuestionUncheckedCreateInput>
  }

  /**
   * ExamQuestion createMany
   */
  export type ExamQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamQuestions.
     */
    data: ExamQuestionCreateManyInput | ExamQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamQuestion createManyAndReturn
   */
  export type ExamQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamQuestion
     */
    omit?: ExamQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many ExamQuestions.
     */
    data: ExamQuestionCreateManyInput | ExamQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamQuestion update
   */
  export type ExamQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamQuestion
     */
    omit?: ExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamQuestion.
     */
    data: XOR<ExamQuestionUpdateInput, ExamQuestionUncheckedUpdateInput>
    /**
     * Choose, which ExamQuestion to update.
     */
    where: ExamQuestionWhereUniqueInput
  }

  /**
   * ExamQuestion updateMany
   */
  export type ExamQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamQuestions.
     */
    data: XOR<ExamQuestionUpdateManyMutationInput, ExamQuestionUncheckedUpdateManyInput>
    /**
     * Filter which ExamQuestions to update
     */
    where?: ExamQuestionWhereInput
    /**
     * Limit how many ExamQuestions to update.
     */
    limit?: number
  }

  /**
   * ExamQuestion updateManyAndReturn
   */
  export type ExamQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamQuestion
     */
    omit?: ExamQuestionOmit<ExtArgs> | null
    /**
     * The data used to update ExamQuestions.
     */
    data: XOR<ExamQuestionUpdateManyMutationInput, ExamQuestionUncheckedUpdateManyInput>
    /**
     * Filter which ExamQuestions to update
     */
    where?: ExamQuestionWhereInput
    /**
     * Limit how many ExamQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamQuestion upsert
   */
  export type ExamQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamQuestion
     */
    omit?: ExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamQuestion to update in case it exists.
     */
    where: ExamQuestionWhereUniqueInput
    /**
     * In case the ExamQuestion found by the `where` argument doesn't exist, create a new ExamQuestion with this data.
     */
    create: XOR<ExamQuestionCreateInput, ExamQuestionUncheckedCreateInput>
    /**
     * In case the ExamQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamQuestionUpdateInput, ExamQuestionUncheckedUpdateInput>
  }

  /**
   * ExamQuestion delete
   */
  export type ExamQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamQuestion
     */
    omit?: ExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter which ExamQuestion to delete.
     */
    where: ExamQuestionWhereUniqueInput
  }

  /**
   * ExamQuestion deleteMany
   */
  export type ExamQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamQuestions to delete
     */
    where?: ExamQuestionWhereInput
    /**
     * Limit how many ExamQuestions to delete.
     */
    limit?: number
  }

  /**
   * ExamQuestion without action
   */
  export type ExamQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamQuestion
     */
    omit?: ExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
  }


  /**
   * Model ExamSession
   */

  export type AggregateExamSession = {
    _count: ExamSessionCountAggregateOutputType | null
    _min: ExamSessionMinAggregateOutputType | null
    _max: ExamSessionMaxAggregateOutputType | null
  }

  export type ExamSessionMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    assessmentId: string | null
    startedAt: Date | null
    submittedAt: Date | null
    status: $Enums.ExamStatus | null
  }

  export type ExamSessionMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    assessmentId: string | null
    startedAt: Date | null
    submittedAt: Date | null
    status: $Enums.ExamStatus | null
  }

  export type ExamSessionCountAggregateOutputType = {
    id: number
    studentId: number
    assessmentId: number
    startedAt: number
    submittedAt: number
    status: number
    _all: number
  }


  export type ExamSessionMinAggregateInputType = {
    id?: true
    studentId?: true
    assessmentId?: true
    startedAt?: true
    submittedAt?: true
    status?: true
  }

  export type ExamSessionMaxAggregateInputType = {
    id?: true
    studentId?: true
    assessmentId?: true
    startedAt?: true
    submittedAt?: true
    status?: true
  }

  export type ExamSessionCountAggregateInputType = {
    id?: true
    studentId?: true
    assessmentId?: true
    startedAt?: true
    submittedAt?: true
    status?: true
    _all?: true
  }

  export type ExamSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamSession to aggregate.
     */
    where?: ExamSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSessions to fetch.
     */
    orderBy?: ExamSessionOrderByWithRelationInput | ExamSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamSessions
    **/
    _count?: true | ExamSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamSessionMaxAggregateInputType
  }

  export type GetExamSessionAggregateType<T extends ExamSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateExamSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamSession[P]>
      : GetScalarType<T[P], AggregateExamSession[P]>
  }




  export type ExamSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamSessionWhereInput
    orderBy?: ExamSessionOrderByWithAggregationInput | ExamSessionOrderByWithAggregationInput[]
    by: ExamSessionScalarFieldEnum[] | ExamSessionScalarFieldEnum
    having?: ExamSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamSessionCountAggregateInputType | true
    _min?: ExamSessionMinAggregateInputType
    _max?: ExamSessionMaxAggregateInputType
  }

  export type ExamSessionGroupByOutputType = {
    id: string
    studentId: string
    assessmentId: string
    startedAt: Date
    submittedAt: Date | null
    status: $Enums.ExamStatus
    _count: ExamSessionCountAggregateOutputType | null
    _min: ExamSessionMinAggregateOutputType | null
    _max: ExamSessionMaxAggregateOutputType | null
  }

  type GetExamSessionGroupByPayload<T extends ExamSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ExamSessionGroupByOutputType[P]>
        }
      >
    >


  export type ExamSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    assessmentId?: boolean
    startedAt?: boolean
    submittedAt?: boolean
    status?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    answers?: boolean | ExamSession$answersArgs<ExtArgs>
    _count?: boolean | ExamSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examSession"]>

  export type ExamSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    assessmentId?: boolean
    startedAt?: boolean
    submittedAt?: boolean
    status?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examSession"]>

  export type ExamSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    assessmentId?: boolean
    startedAt?: boolean
    submittedAt?: boolean
    status?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examSession"]>

  export type ExamSessionSelectScalar = {
    id?: boolean
    studentId?: boolean
    assessmentId?: boolean
    startedAt?: boolean
    submittedAt?: boolean
    status?: boolean
  }

  export type ExamSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "assessmentId" | "startedAt" | "submittedAt" | "status", ExtArgs["result"]["examSession"]>
  export type ExamSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    answers?: boolean | ExamSession$answersArgs<ExtArgs>
    _count?: boolean | ExamSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }
  export type ExamSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }

  export type $ExamSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamSession"
    objects: {
      assessment: Prisma.$AssessmentPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      assessmentId: string
      startedAt: Date
      submittedAt: Date | null
      status: $Enums.ExamStatus
    }, ExtArgs["result"]["examSession"]>
    composites: {}
  }

  type ExamSessionGetPayload<S extends boolean | null | undefined | ExamSessionDefaultArgs> = $Result.GetResult<Prisma.$ExamSessionPayload, S>

  type ExamSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamSessionCountAggregateInputType | true
    }

  export interface ExamSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamSession'], meta: { name: 'ExamSession' } }
    /**
     * Find zero or one ExamSession that matches the filter.
     * @param {ExamSessionFindUniqueArgs} args - Arguments to find a ExamSession
     * @example
     * // Get one ExamSession
     * const examSession = await prisma.examSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamSessionFindUniqueArgs>(args: SelectSubset<T, ExamSessionFindUniqueArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamSessionFindUniqueOrThrowArgs} args - Arguments to find a ExamSession
     * @example
     * // Get one ExamSession
     * const examSession = await prisma.examSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSessionFindFirstArgs} args - Arguments to find a ExamSession
     * @example
     * // Get one ExamSession
     * const examSession = await prisma.examSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamSessionFindFirstArgs>(args?: SelectSubset<T, ExamSessionFindFirstArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSessionFindFirstOrThrowArgs} args - Arguments to find a ExamSession
     * @example
     * // Get one ExamSession
     * const examSession = await prisma.examSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamSessions
     * const examSessions = await prisma.examSession.findMany()
     * 
     * // Get first 10 ExamSessions
     * const examSessions = await prisma.examSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examSessionWithIdOnly = await prisma.examSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamSessionFindManyArgs>(args?: SelectSubset<T, ExamSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamSession.
     * @param {ExamSessionCreateArgs} args - Arguments to create a ExamSession.
     * @example
     * // Create one ExamSession
     * const ExamSession = await prisma.examSession.create({
     *   data: {
     *     // ... data to create a ExamSession
     *   }
     * })
     * 
     */
    create<T extends ExamSessionCreateArgs>(args: SelectSubset<T, ExamSessionCreateArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamSessions.
     * @param {ExamSessionCreateManyArgs} args - Arguments to create many ExamSessions.
     * @example
     * // Create many ExamSessions
     * const examSession = await prisma.examSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamSessionCreateManyArgs>(args?: SelectSubset<T, ExamSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamSessions and returns the data saved in the database.
     * @param {ExamSessionCreateManyAndReturnArgs} args - Arguments to create many ExamSessions.
     * @example
     * // Create many ExamSessions
     * const examSession = await prisma.examSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamSessions and only return the `id`
     * const examSessionWithIdOnly = await prisma.examSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExamSession.
     * @param {ExamSessionDeleteArgs} args - Arguments to delete one ExamSession.
     * @example
     * // Delete one ExamSession
     * const ExamSession = await prisma.examSession.delete({
     *   where: {
     *     // ... filter to delete one ExamSession
     *   }
     * })
     * 
     */
    delete<T extends ExamSessionDeleteArgs>(args: SelectSubset<T, ExamSessionDeleteArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamSession.
     * @param {ExamSessionUpdateArgs} args - Arguments to update one ExamSession.
     * @example
     * // Update one ExamSession
     * const examSession = await prisma.examSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamSessionUpdateArgs>(args: SelectSubset<T, ExamSessionUpdateArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamSessions.
     * @param {ExamSessionDeleteManyArgs} args - Arguments to filter ExamSessions to delete.
     * @example
     * // Delete a few ExamSessions
     * const { count } = await prisma.examSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamSessionDeleteManyArgs>(args?: SelectSubset<T, ExamSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamSessions
     * const examSession = await prisma.examSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamSessionUpdateManyArgs>(args: SelectSubset<T, ExamSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamSessions and returns the data updated in the database.
     * @param {ExamSessionUpdateManyAndReturnArgs} args - Arguments to update many ExamSessions.
     * @example
     * // Update many ExamSessions
     * const examSession = await prisma.examSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExamSessions and only return the `id`
     * const examSessionWithIdOnly = await prisma.examSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExamSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExamSession.
     * @param {ExamSessionUpsertArgs} args - Arguments to update or create a ExamSession.
     * @example
     * // Update or create a ExamSession
     * const examSession = await prisma.examSession.upsert({
     *   create: {
     *     // ... data to create a ExamSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamSession we want to update
     *   }
     * })
     */
    upsert<T extends ExamSessionUpsertArgs>(args: SelectSubset<T, ExamSessionUpsertArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSessionCountArgs} args - Arguments to filter ExamSessions to count.
     * @example
     * // Count the number of ExamSessions
     * const count = await prisma.examSession.count({
     *   where: {
     *     // ... the filter for the ExamSessions we want to count
     *   }
     * })
    **/
    count<T extends ExamSessionCountArgs>(
      args?: Subset<T, ExamSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamSessionAggregateArgs>(args: Subset<T, ExamSessionAggregateArgs>): Prisma.PrismaPromise<GetExamSessionAggregateType<T>>

    /**
     * Group by ExamSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSessionGroupByArgs} args - Group by arguments.
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
      T extends ExamSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamSessionGroupByArgs['orderBy'] }
        : { orderBy?: ExamSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamSession model
   */
  readonly fields: ExamSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assessment<T extends AssessmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentDefaultArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends ExamSession$answersArgs<ExtArgs> = {}>(args?: Subset<T, ExamSession$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ExamSession model
   */
  interface ExamSessionFieldRefs {
    readonly id: FieldRef<"ExamSession", 'String'>
    readonly studentId: FieldRef<"ExamSession", 'String'>
    readonly assessmentId: FieldRef<"ExamSession", 'String'>
    readonly startedAt: FieldRef<"ExamSession", 'DateTime'>
    readonly submittedAt: FieldRef<"ExamSession", 'DateTime'>
    readonly status: FieldRef<"ExamSession", 'ExamStatus'>
  }
    

  // Custom InputTypes
  /**
   * ExamSession findUnique
   */
  export type ExamSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSession to fetch.
     */
    where: ExamSessionWhereUniqueInput
  }

  /**
   * ExamSession findUniqueOrThrow
   */
  export type ExamSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSession to fetch.
     */
    where: ExamSessionWhereUniqueInput
  }

  /**
   * ExamSession findFirst
   */
  export type ExamSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSession to fetch.
     */
    where?: ExamSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSessions to fetch.
     */
    orderBy?: ExamSessionOrderByWithRelationInput | ExamSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamSessions.
     */
    cursor?: ExamSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamSessions.
     */
    distinct?: ExamSessionScalarFieldEnum | ExamSessionScalarFieldEnum[]
  }

  /**
   * ExamSession findFirstOrThrow
   */
  export type ExamSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSession to fetch.
     */
    where?: ExamSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSessions to fetch.
     */
    orderBy?: ExamSessionOrderByWithRelationInput | ExamSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamSessions.
     */
    cursor?: ExamSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamSessions.
     */
    distinct?: ExamSessionScalarFieldEnum | ExamSessionScalarFieldEnum[]
  }

  /**
   * ExamSession findMany
   */
  export type ExamSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSessions to fetch.
     */
    where?: ExamSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSessions to fetch.
     */
    orderBy?: ExamSessionOrderByWithRelationInput | ExamSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamSessions.
     */
    cursor?: ExamSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSessions.
     */
    skip?: number
    distinct?: ExamSessionScalarFieldEnum | ExamSessionScalarFieldEnum[]
  }

  /**
   * ExamSession create
   */
  export type ExamSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamSession.
     */
    data: XOR<ExamSessionCreateInput, ExamSessionUncheckedCreateInput>
  }

  /**
   * ExamSession createMany
   */
  export type ExamSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamSessions.
     */
    data: ExamSessionCreateManyInput | ExamSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamSession createManyAndReturn
   */
  export type ExamSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ExamSessions.
     */
    data: ExamSessionCreateManyInput | ExamSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamSession update
   */
  export type ExamSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamSession.
     */
    data: XOR<ExamSessionUpdateInput, ExamSessionUncheckedUpdateInput>
    /**
     * Choose, which ExamSession to update.
     */
    where: ExamSessionWhereUniqueInput
  }

  /**
   * ExamSession updateMany
   */
  export type ExamSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamSessions.
     */
    data: XOR<ExamSessionUpdateManyMutationInput, ExamSessionUncheckedUpdateManyInput>
    /**
     * Filter which ExamSessions to update
     */
    where?: ExamSessionWhereInput
    /**
     * Limit how many ExamSessions to update.
     */
    limit?: number
  }

  /**
   * ExamSession updateManyAndReturn
   */
  export type ExamSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * The data used to update ExamSessions.
     */
    data: XOR<ExamSessionUpdateManyMutationInput, ExamSessionUncheckedUpdateManyInput>
    /**
     * Filter which ExamSessions to update
     */
    where?: ExamSessionWhereInput
    /**
     * Limit how many ExamSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamSession upsert
   */
  export type ExamSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamSession to update in case it exists.
     */
    where: ExamSessionWhereUniqueInput
    /**
     * In case the ExamSession found by the `where` argument doesn't exist, create a new ExamSession with this data.
     */
    create: XOR<ExamSessionCreateInput, ExamSessionUncheckedCreateInput>
    /**
     * In case the ExamSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamSessionUpdateInput, ExamSessionUncheckedUpdateInput>
  }

  /**
   * ExamSession delete
   */
  export type ExamSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
    /**
     * Filter which ExamSession to delete.
     */
    where: ExamSessionWhereUniqueInput
  }

  /**
   * ExamSession deleteMany
   */
  export type ExamSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamSessions to delete
     */
    where?: ExamSessionWhereInput
    /**
     * Limit how many ExamSessions to delete.
     */
    limit?: number
  }

  /**
   * ExamSession.answers
   */
  export type ExamSession$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * ExamSession without action
   */
  export type ExamSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSession
     */
    select?: ExamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSession
     */
    omit?: ExamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSessionInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    gradedScore: number | null
  }

  export type AnswerSumAggregateOutputType = {
    gradedScore: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    questionId: string | null
    response: string | null
    gradedScore: number | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    questionId: string | null
    response: string | null
    gradedScore: number | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    sessionId: number
    questionId: number
    response: number
    gradedScore: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    gradedScore?: true
  }

  export type AnswerSumAggregateInputType = {
    gradedScore?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    sessionId?: true
    questionId?: true
    response?: true
    gradedScore?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    sessionId?: true
    questionId?: true
    response?: true
    gradedScore?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    sessionId?: true
    questionId?: true
    response?: true
    gradedScore?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    sessionId: string
    questionId: string
    response: string | null
    gradedScore: number | null
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    questionId?: boolean
    response?: boolean
    gradedScore?: boolean
    session?: boolean | ExamSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    questionId?: boolean
    response?: boolean
    gradedScore?: boolean
    session?: boolean | ExamSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    questionId?: boolean
    response?: boolean
    gradedScore?: boolean
    session?: boolean | ExamSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    sessionId?: boolean
    questionId?: boolean
    response?: boolean
    gradedScore?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "questionId" | "response" | "gradedScore", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ExamSessionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ExamSessionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ExamSessionDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      session: Prisma.$ExamSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      questionId: string
      response: string | null
      gradedScore: number | null
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends ExamSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamSessionDefaultArgs<ExtArgs>>): Prisma__ExamSessionClient<$Result.GetResult<Prisma.$ExamSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly sessionId: FieldRef<"Answer", 'String'>
    readonly questionId: FieldRef<"Answer", 'String'>
    readonly response: FieldRef<"Answer", 'String'>
    readonly gradedScore: FieldRef<"Answer", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
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


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    dueDate: 'dueDate',
    isCompleted: 'isCompleted',
    createdAt: 'createdAt',
    assignmentSessionId: 'assignmentSessionId',
    userId: 'userId'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const AssignmentSessionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    dueDate: 'dueDate',
    isCompleted: 'isCompleted',
    courseId: 'courseId',
    createAt: 'createAt'
  };

  export type AssignmentSessionScalarFieldEnum = (typeof AssignmentSessionScalarFieldEnum)[keyof typeof AssignmentSessionScalarFieldEnum]


  export const AssessmentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type',
    courseId: 'courseId',
    dueDate: 'dueDate',
    createdAt: 'createdAt'
  };

  export type AssessmentScalarFieldEnum = (typeof AssessmentScalarFieldEnum)[keyof typeof AssessmentScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    assessmentId: 'assessmentId',
    studentId: 'studentId',
    submittedAt: 'submittedAt',
    grade: 'grade',
    feedback: 'feedback'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    action: 'action',
    timestamp: 'timestamp'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const CompetencyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    courseId: 'courseId'
  };

  export type CompetencyScalarFieldEnum = (typeof CompetencyScalarFieldEnum)[keyof typeof CompetencyScalarFieldEnum]


  export const UserCompetencyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    competencyId: 'competencyId',
    achievedAt: 'achievedAt'
  };

  export type UserCompetencyScalarFieldEnum = (typeof UserCompetencyScalarFieldEnum)[keyof typeof UserCompetencyScalarFieldEnum]


  export const QuestionBankScalarFieldEnum: {
    id: 'id',
    text: 'text',
    type: 'type',
    options: 'options',
    answer: 'answer',
    createdAt: 'createdAt',
    tags: 'tags'
  };

  export type QuestionBankScalarFieldEnum = (typeof QuestionBankScalarFieldEnum)[keyof typeof QuestionBankScalarFieldEnum]


  export const ExamQuestionScalarFieldEnum: {
    id: 'id',
    assessmentId: 'assessmentId',
    questionBankId: 'questionBankId',
    points: 'points'
  };

  export type ExamQuestionScalarFieldEnum = (typeof ExamQuestionScalarFieldEnum)[keyof typeof ExamQuestionScalarFieldEnum]


  export const ExamSessionScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    assessmentId: 'assessmentId',
    startedAt: 'startedAt',
    submittedAt: 'submittedAt',
    status: 'status'
  };

  export type ExamSessionScalarFieldEnum = (typeof ExamSessionScalarFieldEnum)[keyof typeof ExamSessionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    questionId: 'questionId',
    response: 'response',
    gradedScore: 'gradedScore'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AssessmentType'
   */
  export type EnumAssessmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssessmentType'>
    


  /**
   * Reference to a field of type 'AssessmentType[]'
   */
  export type ListEnumAssessmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssessmentType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'QuestionType'
   */
  export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>
    


  /**
   * Reference to a field of type 'QuestionType[]'
   */
  export type ListEnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ExamStatus'
   */
  export type EnumExamStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamStatus'>
    


  /**
   * Reference to a field of type 'ExamStatus[]'
   */
  export type ListEnumExamStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: StringFilter<"Assignment"> | string
    title?: StringFilter<"Assignment"> | string
    description?: StringFilter<"Assignment"> | string
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    isCompleted?: BoolFilter<"Assignment"> | boolean
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    assignmentSessionId?: StringFilter<"Assignment"> | string
    userId?: StringFilter<"Assignment"> | string
    assignmentSession?: XOR<AssignmentSessionScalarRelationFilter, AssignmentSessionWhereInput>
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    assignmentSessionId?: SortOrder
    userId?: SortOrder
    assignmentSession?: AssignmentSessionOrderByWithRelationInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    title?: StringFilter<"Assignment"> | string
    description?: StringFilter<"Assignment"> | string
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    isCompleted?: BoolFilter<"Assignment"> | boolean
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    assignmentSessionId?: StringFilter<"Assignment"> | string
    userId?: StringFilter<"Assignment"> | string
    assignmentSession?: XOR<AssignmentSessionScalarRelationFilter, AssignmentSessionWhereInput>
  }, "id">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    assignmentSessionId?: SortOrder
    userId?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assignment"> | string
    title?: StringWithAggregatesFilter<"Assignment"> | string
    description?: StringWithAggregatesFilter<"Assignment"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    isCompleted?: BoolWithAggregatesFilter<"Assignment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    assignmentSessionId?: StringWithAggregatesFilter<"Assignment"> | string
    userId?: StringWithAggregatesFilter<"Assignment"> | string
  }

  export type AssignmentSessionWhereInput = {
    AND?: AssignmentSessionWhereInput | AssignmentSessionWhereInput[]
    OR?: AssignmentSessionWhereInput[]
    NOT?: AssignmentSessionWhereInput | AssignmentSessionWhereInput[]
    id?: StringFilter<"AssignmentSession"> | string
    title?: StringFilter<"AssignmentSession"> | string
    description?: StringFilter<"AssignmentSession"> | string
    dueDate?: DateTimeFilter<"AssignmentSession"> | Date | string
    isCompleted?: BoolFilter<"AssignmentSession"> | boolean
    courseId?: StringFilter<"AssignmentSession"> | string
    createAt?: DateTimeFilter<"AssignmentSession"> | Date | string
    assignments?: AssignmentListRelationFilter
  }

  export type AssignmentSessionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    isCompleted?: SortOrder
    courseId?: SortOrder
    createAt?: SortOrder
    assignments?: AssignmentOrderByRelationAggregateInput
  }

  export type AssignmentSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssignmentSessionWhereInput | AssignmentSessionWhereInput[]
    OR?: AssignmentSessionWhereInput[]
    NOT?: AssignmentSessionWhereInput | AssignmentSessionWhereInput[]
    title?: StringFilter<"AssignmentSession"> | string
    description?: StringFilter<"AssignmentSession"> | string
    dueDate?: DateTimeFilter<"AssignmentSession"> | Date | string
    isCompleted?: BoolFilter<"AssignmentSession"> | boolean
    courseId?: StringFilter<"AssignmentSession"> | string
    createAt?: DateTimeFilter<"AssignmentSession"> | Date | string
    assignments?: AssignmentListRelationFilter
  }, "id">

  export type AssignmentSessionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    isCompleted?: SortOrder
    courseId?: SortOrder
    createAt?: SortOrder
    _count?: AssignmentSessionCountOrderByAggregateInput
    _max?: AssignmentSessionMaxOrderByAggregateInput
    _min?: AssignmentSessionMinOrderByAggregateInput
  }

  export type AssignmentSessionScalarWhereWithAggregatesInput = {
    AND?: AssignmentSessionScalarWhereWithAggregatesInput | AssignmentSessionScalarWhereWithAggregatesInput[]
    OR?: AssignmentSessionScalarWhereWithAggregatesInput[]
    NOT?: AssignmentSessionScalarWhereWithAggregatesInput | AssignmentSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssignmentSession"> | string
    title?: StringWithAggregatesFilter<"AssignmentSession"> | string
    description?: StringWithAggregatesFilter<"AssignmentSession"> | string
    dueDate?: DateTimeWithAggregatesFilter<"AssignmentSession"> | Date | string
    isCompleted?: BoolWithAggregatesFilter<"AssignmentSession"> | boolean
    courseId?: StringWithAggregatesFilter<"AssignmentSession"> | string
    createAt?: DateTimeWithAggregatesFilter<"AssignmentSession"> | Date | string
  }

  export type AssessmentWhereInput = {
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    id?: StringFilter<"Assessment"> | string
    title?: StringFilter<"Assessment"> | string
    type?: EnumAssessmentTypeFilter<"Assessment"> | $Enums.AssessmentType
    courseId?: StringFilter<"Assessment"> | string
    dueDate?: DateTimeFilter<"Assessment"> | Date | string
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    examQuestions?: ExamQuestionListRelationFilter
    submissions?: SubmissionListRelationFilter
    examSessions?: ExamSessionListRelationFilter
  }

  export type AssessmentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    courseId?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    examQuestions?: ExamQuestionOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
    examSessions?: ExamSessionOrderByRelationAggregateInput
  }

  export type AssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    title?: StringFilter<"Assessment"> | string
    type?: EnumAssessmentTypeFilter<"Assessment"> | $Enums.AssessmentType
    courseId?: StringFilter<"Assessment"> | string
    dueDate?: DateTimeFilter<"Assessment"> | Date | string
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    examQuestions?: ExamQuestionListRelationFilter
    submissions?: SubmissionListRelationFilter
    examSessions?: ExamSessionListRelationFilter
  }, "id">

  export type AssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    courseId?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    _count?: AssessmentCountOrderByAggregateInput
    _max?: AssessmentMaxOrderByAggregateInput
    _min?: AssessmentMinOrderByAggregateInput
  }

  export type AssessmentScalarWhereWithAggregatesInput = {
    AND?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    OR?: AssessmentScalarWhereWithAggregatesInput[]
    NOT?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assessment"> | string
    title?: StringWithAggregatesFilter<"Assessment"> | string
    type?: EnumAssessmentTypeWithAggregatesFilter<"Assessment"> | $Enums.AssessmentType
    courseId?: StringWithAggregatesFilter<"Assessment"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    assessmentId?: StringFilter<"Submission"> | string
    studentId?: StringFilter<"Submission"> | string
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    grade?: FloatNullableFilter<"Submission"> | number | null
    feedback?: StringNullableFilter<"Submission"> | string | null
    assessment?: XOR<AssessmentScalarRelationFilter, AssessmentWhereInput>
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    studentId?: SortOrder
    submittedAt?: SortOrder
    grade?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    assessment?: AssessmentOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    assessmentId?: StringFilter<"Submission"> | string
    studentId?: StringFilter<"Submission"> | string
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    grade?: FloatNullableFilter<"Submission"> | number | null
    feedback?: StringNullableFilter<"Submission"> | string | null
    assessment?: XOR<AssessmentScalarRelationFilter, AssessmentWhereInput>
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    studentId?: SortOrder
    submittedAt?: SortOrder
    grade?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _avg?: SubmissionAvgOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
    _sum?: SubmissionSumOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    assessmentId?: StringWithAggregatesFilter<"Submission"> | string
    studentId?: StringWithAggregatesFilter<"Submission"> | string
    submittedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    grade?: FloatNullableWithAggregatesFilter<"Submission"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"Submission"> | string | null
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    userId?: StringFilter<"ActivityLog"> | string
    courseId?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    timestamp?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    userId?: StringFilter<"ActivityLog"> | string
    courseId?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    timestamp?: DateTimeFilter<"ActivityLog"> | Date | string
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    userId?: StringWithAggregatesFilter<"ActivityLog"> | string
    courseId?: StringWithAggregatesFilter<"ActivityLog"> | string
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type CompetencyWhereInput = {
    AND?: CompetencyWhereInput | CompetencyWhereInput[]
    OR?: CompetencyWhereInput[]
    NOT?: CompetencyWhereInput | CompetencyWhereInput[]
    id?: StringFilter<"Competency"> | string
    name?: StringFilter<"Competency"> | string
    description?: StringNullableFilter<"Competency"> | string | null
    courseId?: StringFilter<"Competency"> | string
    usercompetencies?: UserCompetencyListRelationFilter
  }

  export type CompetencyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    courseId?: SortOrder
    usercompetencies?: UserCompetencyOrderByRelationAggregateInput
  }

  export type CompetencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompetencyWhereInput | CompetencyWhereInput[]
    OR?: CompetencyWhereInput[]
    NOT?: CompetencyWhereInput | CompetencyWhereInput[]
    name?: StringFilter<"Competency"> | string
    description?: StringNullableFilter<"Competency"> | string | null
    courseId?: StringFilter<"Competency"> | string
    usercompetencies?: UserCompetencyListRelationFilter
  }, "id">

  export type CompetencyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    courseId?: SortOrder
    _count?: CompetencyCountOrderByAggregateInput
    _max?: CompetencyMaxOrderByAggregateInput
    _min?: CompetencyMinOrderByAggregateInput
  }

  export type CompetencyScalarWhereWithAggregatesInput = {
    AND?: CompetencyScalarWhereWithAggregatesInput | CompetencyScalarWhereWithAggregatesInput[]
    OR?: CompetencyScalarWhereWithAggregatesInput[]
    NOT?: CompetencyScalarWhereWithAggregatesInput | CompetencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Competency"> | string
    name?: StringWithAggregatesFilter<"Competency"> | string
    description?: StringNullableWithAggregatesFilter<"Competency"> | string | null
    courseId?: StringWithAggregatesFilter<"Competency"> | string
  }

  export type UserCompetencyWhereInput = {
    AND?: UserCompetencyWhereInput | UserCompetencyWhereInput[]
    OR?: UserCompetencyWhereInput[]
    NOT?: UserCompetencyWhereInput | UserCompetencyWhereInput[]
    id?: StringFilter<"UserCompetency"> | string
    userId?: StringFilter<"UserCompetency"> | string
    competencyId?: StringFilter<"UserCompetency"> | string
    achievedAt?: DateTimeNullableFilter<"UserCompetency"> | Date | string | null
    competency?: XOR<CompetencyScalarRelationFilter, CompetencyWhereInput>
  }

  export type UserCompetencyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    competencyId?: SortOrder
    achievedAt?: SortOrderInput | SortOrder
    competency?: CompetencyOrderByWithRelationInput
  }

  export type UserCompetencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserCompetencyWhereInput | UserCompetencyWhereInput[]
    OR?: UserCompetencyWhereInput[]
    NOT?: UserCompetencyWhereInput | UserCompetencyWhereInput[]
    userId?: StringFilter<"UserCompetency"> | string
    competencyId?: StringFilter<"UserCompetency"> | string
    achievedAt?: DateTimeNullableFilter<"UserCompetency"> | Date | string | null
    competency?: XOR<CompetencyScalarRelationFilter, CompetencyWhereInput>
  }, "id">

  export type UserCompetencyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    competencyId?: SortOrder
    achievedAt?: SortOrderInput | SortOrder
    _count?: UserCompetencyCountOrderByAggregateInput
    _max?: UserCompetencyMaxOrderByAggregateInput
    _min?: UserCompetencyMinOrderByAggregateInput
  }

  export type UserCompetencyScalarWhereWithAggregatesInput = {
    AND?: UserCompetencyScalarWhereWithAggregatesInput | UserCompetencyScalarWhereWithAggregatesInput[]
    OR?: UserCompetencyScalarWhereWithAggregatesInput[]
    NOT?: UserCompetencyScalarWhereWithAggregatesInput | UserCompetencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCompetency"> | string
    userId?: StringWithAggregatesFilter<"UserCompetency"> | string
    competencyId?: StringWithAggregatesFilter<"UserCompetency"> | string
    achievedAt?: DateTimeNullableWithAggregatesFilter<"UserCompetency"> | Date | string | null
  }

  export type QuestionBankWhereInput = {
    AND?: QuestionBankWhereInput | QuestionBankWhereInput[]
    OR?: QuestionBankWhereInput[]
    NOT?: QuestionBankWhereInput | QuestionBankWhereInput[]
    id?: StringFilter<"QuestionBank"> | string
    text?: StringFilter<"QuestionBank"> | string
    type?: EnumQuestionTypeFilter<"QuestionBank"> | $Enums.QuestionType
    options?: JsonNullableFilter<"QuestionBank">
    answer?: StringNullableFilter<"QuestionBank"> | string | null
    createdAt?: DateTimeFilter<"QuestionBank"> | Date | string
    tags?: StringNullableListFilter<"QuestionBank">
    examQuestions?: ExamQuestionListRelationFilter
  }

  export type QuestionBankOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    options?: SortOrderInput | SortOrder
    answer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tags?: SortOrder
    examQuestions?: ExamQuestionOrderByRelationAggregateInput
  }

  export type QuestionBankWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionBankWhereInput | QuestionBankWhereInput[]
    OR?: QuestionBankWhereInput[]
    NOT?: QuestionBankWhereInput | QuestionBankWhereInput[]
    text?: StringFilter<"QuestionBank"> | string
    type?: EnumQuestionTypeFilter<"QuestionBank"> | $Enums.QuestionType
    options?: JsonNullableFilter<"QuestionBank">
    answer?: StringNullableFilter<"QuestionBank"> | string | null
    createdAt?: DateTimeFilter<"QuestionBank"> | Date | string
    tags?: StringNullableListFilter<"QuestionBank">
    examQuestions?: ExamQuestionListRelationFilter
  }, "id">

  export type QuestionBankOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    options?: SortOrderInput | SortOrder
    answer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tags?: SortOrder
    _count?: QuestionBankCountOrderByAggregateInput
    _max?: QuestionBankMaxOrderByAggregateInput
    _min?: QuestionBankMinOrderByAggregateInput
  }

  export type QuestionBankScalarWhereWithAggregatesInput = {
    AND?: QuestionBankScalarWhereWithAggregatesInput | QuestionBankScalarWhereWithAggregatesInput[]
    OR?: QuestionBankScalarWhereWithAggregatesInput[]
    NOT?: QuestionBankScalarWhereWithAggregatesInput | QuestionBankScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionBank"> | string
    text?: StringWithAggregatesFilter<"QuestionBank"> | string
    type?: EnumQuestionTypeWithAggregatesFilter<"QuestionBank"> | $Enums.QuestionType
    options?: JsonNullableWithAggregatesFilter<"QuestionBank">
    answer?: StringNullableWithAggregatesFilter<"QuestionBank"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuestionBank"> | Date | string
    tags?: StringNullableListFilter<"QuestionBank">
  }

  export type ExamQuestionWhereInput = {
    AND?: ExamQuestionWhereInput | ExamQuestionWhereInput[]
    OR?: ExamQuestionWhereInput[]
    NOT?: ExamQuestionWhereInput | ExamQuestionWhereInput[]
    id?: StringFilter<"ExamQuestion"> | string
    assessmentId?: StringFilter<"ExamQuestion"> | string
    questionBankId?: StringFilter<"ExamQuestion"> | string
    points?: IntFilter<"ExamQuestion"> | number
    assessment?: XOR<AssessmentScalarRelationFilter, AssessmentWhereInput>
    questionBank?: XOR<QuestionBankScalarRelationFilter, QuestionBankWhereInput>
  }

  export type ExamQuestionOrderByWithRelationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionBankId?: SortOrder
    points?: SortOrder
    assessment?: AssessmentOrderByWithRelationInput
    questionBank?: QuestionBankOrderByWithRelationInput
  }

  export type ExamQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamQuestionWhereInput | ExamQuestionWhereInput[]
    OR?: ExamQuestionWhereInput[]
    NOT?: ExamQuestionWhereInput | ExamQuestionWhereInput[]
    assessmentId?: StringFilter<"ExamQuestion"> | string
    questionBankId?: StringFilter<"ExamQuestion"> | string
    points?: IntFilter<"ExamQuestion"> | number
    assessment?: XOR<AssessmentScalarRelationFilter, AssessmentWhereInput>
    questionBank?: XOR<QuestionBankScalarRelationFilter, QuestionBankWhereInput>
  }, "id">

  export type ExamQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionBankId?: SortOrder
    points?: SortOrder
    _count?: ExamQuestionCountOrderByAggregateInput
    _avg?: ExamQuestionAvgOrderByAggregateInput
    _max?: ExamQuestionMaxOrderByAggregateInput
    _min?: ExamQuestionMinOrderByAggregateInput
    _sum?: ExamQuestionSumOrderByAggregateInput
  }

  export type ExamQuestionScalarWhereWithAggregatesInput = {
    AND?: ExamQuestionScalarWhereWithAggregatesInput | ExamQuestionScalarWhereWithAggregatesInput[]
    OR?: ExamQuestionScalarWhereWithAggregatesInput[]
    NOT?: ExamQuestionScalarWhereWithAggregatesInput | ExamQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExamQuestion"> | string
    assessmentId?: StringWithAggregatesFilter<"ExamQuestion"> | string
    questionBankId?: StringWithAggregatesFilter<"ExamQuestion"> | string
    points?: IntWithAggregatesFilter<"ExamQuestion"> | number
  }

  export type ExamSessionWhereInput = {
    AND?: ExamSessionWhereInput | ExamSessionWhereInput[]
    OR?: ExamSessionWhereInput[]
    NOT?: ExamSessionWhereInput | ExamSessionWhereInput[]
    id?: StringFilter<"ExamSession"> | string
    studentId?: StringFilter<"ExamSession"> | string
    assessmentId?: StringFilter<"ExamSession"> | string
    startedAt?: DateTimeFilter<"ExamSession"> | Date | string
    submittedAt?: DateTimeNullableFilter<"ExamSession"> | Date | string | null
    status?: EnumExamStatusFilter<"ExamSession"> | $Enums.ExamStatus
    assessment?: XOR<AssessmentScalarRelationFilter, AssessmentWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type ExamSessionOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    assessmentId?: SortOrder
    startedAt?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    assessment?: AssessmentOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type ExamSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamSessionWhereInput | ExamSessionWhereInput[]
    OR?: ExamSessionWhereInput[]
    NOT?: ExamSessionWhereInput | ExamSessionWhereInput[]
    studentId?: StringFilter<"ExamSession"> | string
    assessmentId?: StringFilter<"ExamSession"> | string
    startedAt?: DateTimeFilter<"ExamSession"> | Date | string
    submittedAt?: DateTimeNullableFilter<"ExamSession"> | Date | string | null
    status?: EnumExamStatusFilter<"ExamSession"> | $Enums.ExamStatus
    assessment?: XOR<AssessmentScalarRelationFilter, AssessmentWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type ExamSessionOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    assessmentId?: SortOrder
    startedAt?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: ExamSessionCountOrderByAggregateInput
    _max?: ExamSessionMaxOrderByAggregateInput
    _min?: ExamSessionMinOrderByAggregateInput
  }

  export type ExamSessionScalarWhereWithAggregatesInput = {
    AND?: ExamSessionScalarWhereWithAggregatesInput | ExamSessionScalarWhereWithAggregatesInput[]
    OR?: ExamSessionScalarWhereWithAggregatesInput[]
    NOT?: ExamSessionScalarWhereWithAggregatesInput | ExamSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExamSession"> | string
    studentId?: StringWithAggregatesFilter<"ExamSession"> | string
    assessmentId?: StringWithAggregatesFilter<"ExamSession"> | string
    startedAt?: DateTimeWithAggregatesFilter<"ExamSession"> | Date | string
    submittedAt?: DateTimeNullableWithAggregatesFilter<"ExamSession"> | Date | string | null
    status?: EnumExamStatusWithAggregatesFilter<"ExamSession"> | $Enums.ExamStatus
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    sessionId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    response?: StringNullableFilter<"Answer"> | string | null
    gradedScore?: FloatNullableFilter<"Answer"> | number | null
    session?: XOR<ExamSessionScalarRelationFilter, ExamSessionWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    questionId?: SortOrder
    response?: SortOrderInput | SortOrder
    gradedScore?: SortOrderInput | SortOrder
    session?: ExamSessionOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    sessionId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    response?: StringNullableFilter<"Answer"> | string | null
    gradedScore?: FloatNullableFilter<"Answer"> | number | null
    session?: XOR<ExamSessionScalarRelationFilter, ExamSessionWhereInput>
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    questionId?: SortOrder
    response?: SortOrderInput | SortOrder
    gradedScore?: SortOrderInput | SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    sessionId?: StringWithAggregatesFilter<"Answer"> | string
    questionId?: StringWithAggregatesFilter<"Answer"> | string
    response?: StringNullableWithAggregatesFilter<"Answer"> | string | null
    gradedScore?: FloatNullableWithAggregatesFilter<"Answer"> | number | null
  }

  export type AssignmentCreateInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
    userId: string
    assignmentSession: AssignmentSessionCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
    assignmentSessionId: string
    userId: string
  }

  export type AssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    assignmentSession?: AssignmentSessionUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentSessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AssignmentCreateManyInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
    assignmentSessionId: string
    userId: string
  }

  export type AssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignmentSessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AssignmentSessionCreateInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    isCompleted?: boolean
    courseId: string
    createAt?: Date | string
    assignments?: AssignmentCreateNestedManyWithoutAssignmentSessionInput
  }

  export type AssignmentSessionUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    isCompleted?: boolean
    courseId: string
    createAt?: Date | string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutAssignmentSessionInput
  }

  export type AssignmentSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    courseId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUpdateManyWithoutAssignmentSessionNestedInput
  }

  export type AssignmentSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    courseId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUncheckedUpdateManyWithoutAssignmentSessionNestedInput
  }

  export type AssignmentSessionCreateManyInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    isCompleted?: boolean
    courseId: string
    createAt?: Date | string
  }

  export type AssignmentSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    courseId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    courseId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentCreateInput = {
    id?: string
    title: string
    type: $Enums.AssessmentType
    courseId: string
    dueDate: Date | string
    createdAt?: Date | string
    examQuestions?: ExamQuestionCreateNestedManyWithoutAssessmentInput
    submissions?: SubmissionCreateNestedManyWithoutAssessmentInput
    examSessions?: ExamSessionCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateInput = {
    id?: string
    title: string
    type: $Enums.AssessmentType
    courseId: string
    dueDate: Date | string
    createdAt?: Date | string
    examQuestions?: ExamQuestionUncheckedCreateNestedManyWithoutAssessmentInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssessmentInput
    examSessions?: ExamSessionUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    courseId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examQuestions?: ExamQuestionUpdateManyWithoutAssessmentNestedInput
    submissions?: SubmissionUpdateManyWithoutAssessmentNestedInput
    examSessions?: ExamSessionUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    courseId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examQuestions?: ExamQuestionUncheckedUpdateManyWithoutAssessmentNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutAssessmentNestedInput
    examSessions?: ExamSessionUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentCreateManyInput = {
    id?: string
    title: string
    type: $Enums.AssessmentType
    courseId: string
    dueDate: Date | string
    createdAt?: Date | string
  }

  export type AssessmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    courseId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    courseId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    studentId: string
    submittedAt?: Date | string
    grade?: number | null
    feedback?: string | null
    assessment: AssessmentCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    assessmentId: string
    studentId: string
    submittedAt?: Date | string
    grade?: number | null
    feedback?: string | null
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    assessment?: AssessmentUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionCreateManyInput = {
    id?: string
    assessmentId: string
    studentId: string
    submittedAt?: Date | string
    grade?: number | null
    feedback?: string | null
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityLogCreateInput = {
    id?: string
    userId: string
    courseId: string
    action: string
    timestamp?: Date | string
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    userId: string
    courseId: string
    action: string
    timestamp?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    userId: string
    courseId: string
    action: string
    timestamp?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetencyCreateInput = {
    id?: string
    name: string
    description?: string | null
    courseId: string
    usercompetencies?: UserCompetencyCreateNestedManyWithoutCompetencyInput
  }

  export type CompetencyUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    courseId: string
    usercompetencies?: UserCompetencyUncheckedCreateNestedManyWithoutCompetencyInput
  }

  export type CompetencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: StringFieldUpdateOperationsInput | string
    usercompetencies?: UserCompetencyUpdateManyWithoutCompetencyNestedInput
  }

  export type CompetencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: StringFieldUpdateOperationsInput | string
    usercompetencies?: UserCompetencyUncheckedUpdateManyWithoutCompetencyNestedInput
  }

  export type CompetencyCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    courseId: string
  }

  export type CompetencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type CompetencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCompetencyCreateInput = {
    id?: string
    userId: string
    achievedAt?: Date | string | null
    competency: CompetencyCreateNestedOneWithoutUsercompetenciesInput
  }

  export type UserCompetencyUncheckedCreateInput = {
    id?: string
    userId: string
    competencyId: string
    achievedAt?: Date | string | null
  }

  export type UserCompetencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competency?: CompetencyUpdateOneRequiredWithoutUsercompetenciesNestedInput
  }

  export type UserCompetencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    competencyId?: StringFieldUpdateOperationsInput | string
    achievedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCompetencyCreateManyInput = {
    id?: string
    userId: string
    competencyId: string
    achievedAt?: Date | string | null
  }

  export type UserCompetencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCompetencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    competencyId?: StringFieldUpdateOperationsInput | string
    achievedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestionBankCreateInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    options?: NullableJsonNullValueInput | InputJsonValue
    answer?: string | null
    createdAt?: Date | string
    tags?: QuestionBankCreatetagsInput | string[]
    examQuestions?: ExamQuestionCreateNestedManyWithoutQuestionBankInput
  }

  export type QuestionBankUncheckedCreateInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    options?: NullableJsonNullValueInput | InputJsonValue
    answer?: string | null
    createdAt?: Date | string
    tags?: QuestionBankCreatetagsInput | string[]
    examQuestions?: ExamQuestionUncheckedCreateNestedManyWithoutQuestionBankInput
  }

  export type QuestionBankUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    options?: NullableJsonNullValueInput | InputJsonValue
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: QuestionBankUpdatetagsInput | string[]
    examQuestions?: ExamQuestionUpdateManyWithoutQuestionBankNestedInput
  }

  export type QuestionBankUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    options?: NullableJsonNullValueInput | InputJsonValue
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: QuestionBankUpdatetagsInput | string[]
    examQuestions?: ExamQuestionUncheckedUpdateManyWithoutQuestionBankNestedInput
  }

  export type QuestionBankCreateManyInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    options?: NullableJsonNullValueInput | InputJsonValue
    answer?: string | null
    createdAt?: Date | string
    tags?: QuestionBankCreatetagsInput | string[]
  }

  export type QuestionBankUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    options?: NullableJsonNullValueInput | InputJsonValue
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: QuestionBankUpdatetagsInput | string[]
  }

  export type QuestionBankUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    options?: NullableJsonNullValueInput | InputJsonValue
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: QuestionBankUpdatetagsInput | string[]
  }

  export type ExamQuestionCreateInput = {
    id?: string
    points: number
    assessment: AssessmentCreateNestedOneWithoutExamQuestionsInput
    questionBank: QuestionBankCreateNestedOneWithoutExamQuestionsInput
  }

  export type ExamQuestionUncheckedCreateInput = {
    id?: string
    assessmentId: string
    questionBankId: string
    points: number
  }

  export type ExamQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    assessment?: AssessmentUpdateOneRequiredWithoutExamQuestionsNestedInput
    questionBank?: QuestionBankUpdateOneRequiredWithoutExamQuestionsNestedInput
  }

  export type ExamQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    questionBankId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
  }

  export type ExamQuestionCreateManyInput = {
    id?: string
    assessmentId: string
    questionBankId: string
    points: number
  }

  export type ExamQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
  }

  export type ExamQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    questionBankId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
  }

  export type ExamSessionCreateInput = {
    id?: string
    studentId: string
    startedAt?: Date | string
    submittedAt?: Date | string | null
    status?: $Enums.ExamStatus
    assessment: AssessmentCreateNestedOneWithoutExamSessionsInput
    answers?: AnswerCreateNestedManyWithoutSessionInput
  }

  export type ExamSessionUncheckedCreateInput = {
    id?: string
    studentId: string
    assessmentId: string
    startedAt?: Date | string
    submittedAt?: Date | string | null
    status?: $Enums.ExamStatus
    answers?: AnswerUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ExamSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
    assessment?: AssessmentUpdateOneRequiredWithoutExamSessionsNestedInput
    answers?: AnswerUpdateManyWithoutSessionNestedInput
  }

  export type ExamSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
    answers?: AnswerUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ExamSessionCreateManyInput = {
    id?: string
    studentId: string
    assessmentId: string
    startedAt?: Date | string
    submittedAt?: Date | string | null
    status?: $Enums.ExamStatus
  }

  export type ExamSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
  }

  export type ExamSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
  }

  export type AnswerCreateInput = {
    id?: string
    questionId: string
    response?: string | null
    gradedScore?: number | null
    session: ExamSessionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    sessionId: string
    questionId: string
    response?: string | null
    gradedScore?: number | null
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    gradedScore?: NullableFloatFieldUpdateOperationsInput | number | null
    session?: ExamSessionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    gradedScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AnswerCreateManyInput = {
    id?: string
    sessionId: string
    questionId: string
    response?: string | null
    gradedScore?: number | null
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    gradedScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    gradedScore?: NullableFloatFieldUpdateOperationsInput | number | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AssignmentSessionScalarRelationFilter = {
    is?: AssignmentSessionWhereInput
    isNot?: AssignmentSessionWhereInput
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    assignmentSessionId?: SortOrder
    userId?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    assignmentSessionId?: SortOrder
    userId?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    assignmentSessionId?: SortOrder
    userId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentSessionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    isCompleted?: SortOrder
    courseId?: SortOrder
    createAt?: SortOrder
  }

  export type AssignmentSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    isCompleted?: SortOrder
    courseId?: SortOrder
    createAt?: SortOrder
  }

  export type AssignmentSessionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    isCompleted?: SortOrder
    courseId?: SortOrder
    createAt?: SortOrder
  }

  export type EnumAssessmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentTypeFilter<$PrismaModel> | $Enums.AssessmentType
  }

  export type ExamQuestionListRelationFilter = {
    every?: ExamQuestionWhereInput
    some?: ExamQuestionWhereInput
    none?: ExamQuestionWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type ExamSessionListRelationFilter = {
    every?: ExamSessionWhereInput
    some?: ExamSessionWhereInput
    none?: ExamSessionWhereInput
  }

  export type ExamQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    courseId?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    courseId?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    courseId?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAssessmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssessmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssessmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAssessmentTypeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type AssessmentScalarRelationFilter = {
    is?: AssessmentWhereInput
    isNot?: AssessmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    studentId?: SortOrder
    submittedAt?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
  }

  export type SubmissionAvgOrderByAggregateInput = {
    grade?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    studentId?: SortOrder
    submittedAt?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    studentId?: SortOrder
    submittedAt?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
  }

  export type SubmissionSumOrderByAggregateInput = {
    grade?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }

  export type UserCompetencyListRelationFilter = {
    every?: UserCompetencyWhereInput
    some?: UserCompetencyWhereInput
    none?: UserCompetencyWhereInput
  }

  export type UserCompetencyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetencyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    courseId?: SortOrder
  }

  export type CompetencyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    courseId?: SortOrder
  }

  export type CompetencyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    courseId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CompetencyScalarRelationFilter = {
    is?: CompetencyWhereInput
    isNot?: CompetencyWhereInput
  }

  export type UserCompetencyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    competencyId?: SortOrder
    achievedAt?: SortOrder
  }

  export type UserCompetencyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    competencyId?: SortOrder
    achievedAt?: SortOrder
  }

  export type UserCompetencyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    competencyId?: SortOrder
    achievedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type QuestionBankCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    options?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    tags?: SortOrder
  }

  export type QuestionBankMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionBankMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type QuestionBankScalarRelationFilter = {
    is?: QuestionBankWhereInput
    isNot?: QuestionBankWhereInput
  }

  export type ExamQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionBankId?: SortOrder
    points?: SortOrder
  }

  export type ExamQuestionAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type ExamQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionBankId?: SortOrder
    points?: SortOrder
  }

  export type ExamQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionBankId?: SortOrder
    points?: SortOrder
  }

  export type ExamQuestionSumOrderByAggregateInput = {
    points?: SortOrder
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

  export type EnumExamStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamStatus | EnumExamStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExamStatusFilter<$PrismaModel> | $Enums.ExamStatus
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamSessionCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    assessmentId?: SortOrder
    startedAt?: SortOrder
    submittedAt?: SortOrder
    status?: SortOrder
  }

  export type ExamSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    assessmentId?: SortOrder
    startedAt?: SortOrder
    submittedAt?: SortOrder
    status?: SortOrder
  }

  export type ExamSessionMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    assessmentId?: SortOrder
    startedAt?: SortOrder
    submittedAt?: SortOrder
    status?: SortOrder
  }

  export type EnumExamStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamStatus | EnumExamStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExamStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExamStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExamStatusFilter<$PrismaModel>
    _max?: NestedEnumExamStatusFilter<$PrismaModel>
  }

  export type ExamSessionScalarRelationFilter = {
    is?: ExamSessionWhereInput
    isNot?: ExamSessionWhereInput
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    questionId?: SortOrder
    response?: SortOrder
    gradedScore?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    gradedScore?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    questionId?: SortOrder
    response?: SortOrder
    gradedScore?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    questionId?: SortOrder
    response?: SortOrder
    gradedScore?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    gradedScore?: SortOrder
  }

  export type AssignmentSessionCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<AssignmentSessionCreateWithoutAssignmentsInput, AssignmentSessionUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: AssignmentSessionCreateOrConnectWithoutAssignmentsInput
    connect?: AssignmentSessionWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AssignmentSessionUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<AssignmentSessionCreateWithoutAssignmentsInput, AssignmentSessionUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: AssignmentSessionCreateOrConnectWithoutAssignmentsInput
    upsert?: AssignmentSessionUpsertWithoutAssignmentsInput
    connect?: AssignmentSessionWhereUniqueInput
    update?: XOR<XOR<AssignmentSessionUpdateToOneWithWhereWithoutAssignmentsInput, AssignmentSessionUpdateWithoutAssignmentsInput>, AssignmentSessionUncheckedUpdateWithoutAssignmentsInput>
  }

  export type AssignmentCreateNestedManyWithoutAssignmentSessionInput = {
    create?: XOR<AssignmentCreateWithoutAssignmentSessionInput, AssignmentUncheckedCreateWithoutAssignmentSessionInput> | AssignmentCreateWithoutAssignmentSessionInput[] | AssignmentUncheckedCreateWithoutAssignmentSessionInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutAssignmentSessionInput | AssignmentCreateOrConnectWithoutAssignmentSessionInput[]
    createMany?: AssignmentCreateManyAssignmentSessionInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutAssignmentSessionInput = {
    create?: XOR<AssignmentCreateWithoutAssignmentSessionInput, AssignmentUncheckedCreateWithoutAssignmentSessionInput> | AssignmentCreateWithoutAssignmentSessionInput[] | AssignmentUncheckedCreateWithoutAssignmentSessionInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutAssignmentSessionInput | AssignmentCreateOrConnectWithoutAssignmentSessionInput[]
    createMany?: AssignmentCreateManyAssignmentSessionInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AssignmentUpdateManyWithoutAssignmentSessionNestedInput = {
    create?: XOR<AssignmentCreateWithoutAssignmentSessionInput, AssignmentUncheckedCreateWithoutAssignmentSessionInput> | AssignmentCreateWithoutAssignmentSessionInput[] | AssignmentUncheckedCreateWithoutAssignmentSessionInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutAssignmentSessionInput | AssignmentCreateOrConnectWithoutAssignmentSessionInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutAssignmentSessionInput | AssignmentUpsertWithWhereUniqueWithoutAssignmentSessionInput[]
    createMany?: AssignmentCreateManyAssignmentSessionInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutAssignmentSessionInput | AssignmentUpdateWithWhereUniqueWithoutAssignmentSessionInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutAssignmentSessionInput | AssignmentUpdateManyWithWhereWithoutAssignmentSessionInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutAssignmentSessionNestedInput = {
    create?: XOR<AssignmentCreateWithoutAssignmentSessionInput, AssignmentUncheckedCreateWithoutAssignmentSessionInput> | AssignmentCreateWithoutAssignmentSessionInput[] | AssignmentUncheckedCreateWithoutAssignmentSessionInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutAssignmentSessionInput | AssignmentCreateOrConnectWithoutAssignmentSessionInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutAssignmentSessionInput | AssignmentUpsertWithWhereUniqueWithoutAssignmentSessionInput[]
    createMany?: AssignmentCreateManyAssignmentSessionInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutAssignmentSessionInput | AssignmentUpdateWithWhereUniqueWithoutAssignmentSessionInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutAssignmentSessionInput | AssignmentUpdateManyWithWhereWithoutAssignmentSessionInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type ExamQuestionCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<ExamQuestionCreateWithoutAssessmentInput, ExamQuestionUncheckedCreateWithoutAssessmentInput> | ExamQuestionCreateWithoutAssessmentInput[] | ExamQuestionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutAssessmentInput | ExamQuestionCreateOrConnectWithoutAssessmentInput[]
    createMany?: ExamQuestionCreateManyAssessmentInputEnvelope
    connect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<SubmissionCreateWithoutAssessmentInput, SubmissionUncheckedCreateWithoutAssessmentInput> | SubmissionCreateWithoutAssessmentInput[] | SubmissionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssessmentInput | SubmissionCreateOrConnectWithoutAssessmentInput[]
    createMany?: SubmissionCreateManyAssessmentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ExamSessionCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<ExamSessionCreateWithoutAssessmentInput, ExamSessionUncheckedCreateWithoutAssessmentInput> | ExamSessionCreateWithoutAssessmentInput[] | ExamSessionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: ExamSessionCreateOrConnectWithoutAssessmentInput | ExamSessionCreateOrConnectWithoutAssessmentInput[]
    createMany?: ExamSessionCreateManyAssessmentInputEnvelope
    connect?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
  }

  export type ExamQuestionUncheckedCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<ExamQuestionCreateWithoutAssessmentInput, ExamQuestionUncheckedCreateWithoutAssessmentInput> | ExamQuestionCreateWithoutAssessmentInput[] | ExamQuestionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutAssessmentInput | ExamQuestionCreateOrConnectWithoutAssessmentInput[]
    createMany?: ExamQuestionCreateManyAssessmentInputEnvelope
    connect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<SubmissionCreateWithoutAssessmentInput, SubmissionUncheckedCreateWithoutAssessmentInput> | SubmissionCreateWithoutAssessmentInput[] | SubmissionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssessmentInput | SubmissionCreateOrConnectWithoutAssessmentInput[]
    createMany?: SubmissionCreateManyAssessmentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ExamSessionUncheckedCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<ExamSessionCreateWithoutAssessmentInput, ExamSessionUncheckedCreateWithoutAssessmentInput> | ExamSessionCreateWithoutAssessmentInput[] | ExamSessionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: ExamSessionCreateOrConnectWithoutAssessmentInput | ExamSessionCreateOrConnectWithoutAssessmentInput[]
    createMany?: ExamSessionCreateManyAssessmentInputEnvelope
    connect?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
  }

  export type EnumAssessmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssessmentType
  }

  export type ExamQuestionUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<ExamQuestionCreateWithoutAssessmentInput, ExamQuestionUncheckedCreateWithoutAssessmentInput> | ExamQuestionCreateWithoutAssessmentInput[] | ExamQuestionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutAssessmentInput | ExamQuestionCreateOrConnectWithoutAssessmentInput[]
    upsert?: ExamQuestionUpsertWithWhereUniqueWithoutAssessmentInput | ExamQuestionUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: ExamQuestionCreateManyAssessmentInputEnvelope
    set?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    disconnect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    delete?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    connect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    update?: ExamQuestionUpdateWithWhereUniqueWithoutAssessmentInput | ExamQuestionUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: ExamQuestionUpdateManyWithWhereWithoutAssessmentInput | ExamQuestionUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: ExamQuestionScalarWhereInput | ExamQuestionScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<SubmissionCreateWithoutAssessmentInput, SubmissionUncheckedCreateWithoutAssessmentInput> | SubmissionCreateWithoutAssessmentInput[] | SubmissionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssessmentInput | SubmissionCreateOrConnectWithoutAssessmentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutAssessmentInput | SubmissionUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: SubmissionCreateManyAssessmentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutAssessmentInput | SubmissionUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutAssessmentInput | SubmissionUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ExamSessionUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<ExamSessionCreateWithoutAssessmentInput, ExamSessionUncheckedCreateWithoutAssessmentInput> | ExamSessionCreateWithoutAssessmentInput[] | ExamSessionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: ExamSessionCreateOrConnectWithoutAssessmentInput | ExamSessionCreateOrConnectWithoutAssessmentInput[]
    upsert?: ExamSessionUpsertWithWhereUniqueWithoutAssessmentInput | ExamSessionUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: ExamSessionCreateManyAssessmentInputEnvelope
    set?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
    disconnect?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
    delete?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
    connect?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
    update?: ExamSessionUpdateWithWhereUniqueWithoutAssessmentInput | ExamSessionUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: ExamSessionUpdateManyWithWhereWithoutAssessmentInput | ExamSessionUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: ExamSessionScalarWhereInput | ExamSessionScalarWhereInput[]
  }

  export type ExamQuestionUncheckedUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<ExamQuestionCreateWithoutAssessmentInput, ExamQuestionUncheckedCreateWithoutAssessmentInput> | ExamQuestionCreateWithoutAssessmentInput[] | ExamQuestionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutAssessmentInput | ExamQuestionCreateOrConnectWithoutAssessmentInput[]
    upsert?: ExamQuestionUpsertWithWhereUniqueWithoutAssessmentInput | ExamQuestionUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: ExamQuestionCreateManyAssessmentInputEnvelope
    set?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    disconnect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    delete?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    connect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    update?: ExamQuestionUpdateWithWhereUniqueWithoutAssessmentInput | ExamQuestionUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: ExamQuestionUpdateManyWithWhereWithoutAssessmentInput | ExamQuestionUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: ExamQuestionScalarWhereInput | ExamQuestionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<SubmissionCreateWithoutAssessmentInput, SubmissionUncheckedCreateWithoutAssessmentInput> | SubmissionCreateWithoutAssessmentInput[] | SubmissionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssessmentInput | SubmissionCreateOrConnectWithoutAssessmentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutAssessmentInput | SubmissionUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: SubmissionCreateManyAssessmentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutAssessmentInput | SubmissionUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutAssessmentInput | SubmissionUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ExamSessionUncheckedUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<ExamSessionCreateWithoutAssessmentInput, ExamSessionUncheckedCreateWithoutAssessmentInput> | ExamSessionCreateWithoutAssessmentInput[] | ExamSessionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: ExamSessionCreateOrConnectWithoutAssessmentInput | ExamSessionCreateOrConnectWithoutAssessmentInput[]
    upsert?: ExamSessionUpsertWithWhereUniqueWithoutAssessmentInput | ExamSessionUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: ExamSessionCreateManyAssessmentInputEnvelope
    set?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
    disconnect?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
    delete?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
    connect?: ExamSessionWhereUniqueInput | ExamSessionWhereUniqueInput[]
    update?: ExamSessionUpdateWithWhereUniqueWithoutAssessmentInput | ExamSessionUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: ExamSessionUpdateManyWithWhereWithoutAssessmentInput | ExamSessionUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: ExamSessionScalarWhereInput | ExamSessionScalarWhereInput[]
  }

  export type AssessmentCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<AssessmentCreateWithoutSubmissionsInput, AssessmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutSubmissionsInput
    connect?: AssessmentWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AssessmentUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<AssessmentCreateWithoutSubmissionsInput, AssessmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutSubmissionsInput
    upsert?: AssessmentUpsertWithoutSubmissionsInput
    connect?: AssessmentWhereUniqueInput
    update?: XOR<XOR<AssessmentUpdateToOneWithWhereWithoutSubmissionsInput, AssessmentUpdateWithoutSubmissionsInput>, AssessmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserCompetencyCreateNestedManyWithoutCompetencyInput = {
    create?: XOR<UserCompetencyCreateWithoutCompetencyInput, UserCompetencyUncheckedCreateWithoutCompetencyInput> | UserCompetencyCreateWithoutCompetencyInput[] | UserCompetencyUncheckedCreateWithoutCompetencyInput[]
    connectOrCreate?: UserCompetencyCreateOrConnectWithoutCompetencyInput | UserCompetencyCreateOrConnectWithoutCompetencyInput[]
    createMany?: UserCompetencyCreateManyCompetencyInputEnvelope
    connect?: UserCompetencyWhereUniqueInput | UserCompetencyWhereUniqueInput[]
  }

  export type UserCompetencyUncheckedCreateNestedManyWithoutCompetencyInput = {
    create?: XOR<UserCompetencyCreateWithoutCompetencyInput, UserCompetencyUncheckedCreateWithoutCompetencyInput> | UserCompetencyCreateWithoutCompetencyInput[] | UserCompetencyUncheckedCreateWithoutCompetencyInput[]
    connectOrCreate?: UserCompetencyCreateOrConnectWithoutCompetencyInput | UserCompetencyCreateOrConnectWithoutCompetencyInput[]
    createMany?: UserCompetencyCreateManyCompetencyInputEnvelope
    connect?: UserCompetencyWhereUniqueInput | UserCompetencyWhereUniqueInput[]
  }

  export type UserCompetencyUpdateManyWithoutCompetencyNestedInput = {
    create?: XOR<UserCompetencyCreateWithoutCompetencyInput, UserCompetencyUncheckedCreateWithoutCompetencyInput> | UserCompetencyCreateWithoutCompetencyInput[] | UserCompetencyUncheckedCreateWithoutCompetencyInput[]
    connectOrCreate?: UserCompetencyCreateOrConnectWithoutCompetencyInput | UserCompetencyCreateOrConnectWithoutCompetencyInput[]
    upsert?: UserCompetencyUpsertWithWhereUniqueWithoutCompetencyInput | UserCompetencyUpsertWithWhereUniqueWithoutCompetencyInput[]
    createMany?: UserCompetencyCreateManyCompetencyInputEnvelope
    set?: UserCompetencyWhereUniqueInput | UserCompetencyWhereUniqueInput[]
    disconnect?: UserCompetencyWhereUniqueInput | UserCompetencyWhereUniqueInput[]
    delete?: UserCompetencyWhereUniqueInput | UserCompetencyWhereUniqueInput[]
    connect?: UserCompetencyWhereUniqueInput | UserCompetencyWhereUniqueInput[]
    update?: UserCompetencyUpdateWithWhereUniqueWithoutCompetencyInput | UserCompetencyUpdateWithWhereUniqueWithoutCompetencyInput[]
    updateMany?: UserCompetencyUpdateManyWithWhereWithoutCompetencyInput | UserCompetencyUpdateManyWithWhereWithoutCompetencyInput[]
    deleteMany?: UserCompetencyScalarWhereInput | UserCompetencyScalarWhereInput[]
  }

  export type UserCompetencyUncheckedUpdateManyWithoutCompetencyNestedInput = {
    create?: XOR<UserCompetencyCreateWithoutCompetencyInput, UserCompetencyUncheckedCreateWithoutCompetencyInput> | UserCompetencyCreateWithoutCompetencyInput[] | UserCompetencyUncheckedCreateWithoutCompetencyInput[]
    connectOrCreate?: UserCompetencyCreateOrConnectWithoutCompetencyInput | UserCompetencyCreateOrConnectWithoutCompetencyInput[]
    upsert?: UserCompetencyUpsertWithWhereUniqueWithoutCompetencyInput | UserCompetencyUpsertWithWhereUniqueWithoutCompetencyInput[]
    createMany?: UserCompetencyCreateManyCompetencyInputEnvelope
    set?: UserCompetencyWhereUniqueInput | UserCompetencyWhereUniqueInput[]
    disconnect?: UserCompetencyWhereUniqueInput | UserCompetencyWhereUniqueInput[]
    delete?: UserCompetencyWhereUniqueInput | UserCompetencyWhereUniqueInput[]
    connect?: UserCompetencyWhereUniqueInput | UserCompetencyWhereUniqueInput[]
    update?: UserCompetencyUpdateWithWhereUniqueWithoutCompetencyInput | UserCompetencyUpdateWithWhereUniqueWithoutCompetencyInput[]
    updateMany?: UserCompetencyUpdateManyWithWhereWithoutCompetencyInput | UserCompetencyUpdateManyWithWhereWithoutCompetencyInput[]
    deleteMany?: UserCompetencyScalarWhereInput | UserCompetencyScalarWhereInput[]
  }

  export type CompetencyCreateNestedOneWithoutUsercompetenciesInput = {
    create?: XOR<CompetencyCreateWithoutUsercompetenciesInput, CompetencyUncheckedCreateWithoutUsercompetenciesInput>
    connectOrCreate?: CompetencyCreateOrConnectWithoutUsercompetenciesInput
    connect?: CompetencyWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CompetencyUpdateOneRequiredWithoutUsercompetenciesNestedInput = {
    create?: XOR<CompetencyCreateWithoutUsercompetenciesInput, CompetencyUncheckedCreateWithoutUsercompetenciesInput>
    connectOrCreate?: CompetencyCreateOrConnectWithoutUsercompetenciesInput
    upsert?: CompetencyUpsertWithoutUsercompetenciesInput
    connect?: CompetencyWhereUniqueInput
    update?: XOR<XOR<CompetencyUpdateToOneWithWhereWithoutUsercompetenciesInput, CompetencyUpdateWithoutUsercompetenciesInput>, CompetencyUncheckedUpdateWithoutUsercompetenciesInput>
  }

  export type QuestionBankCreatetagsInput = {
    set: string[]
  }

  export type ExamQuestionCreateNestedManyWithoutQuestionBankInput = {
    create?: XOR<ExamQuestionCreateWithoutQuestionBankInput, ExamQuestionUncheckedCreateWithoutQuestionBankInput> | ExamQuestionCreateWithoutQuestionBankInput[] | ExamQuestionUncheckedCreateWithoutQuestionBankInput[]
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutQuestionBankInput | ExamQuestionCreateOrConnectWithoutQuestionBankInput[]
    createMany?: ExamQuestionCreateManyQuestionBankInputEnvelope
    connect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
  }

  export type ExamQuestionUncheckedCreateNestedManyWithoutQuestionBankInput = {
    create?: XOR<ExamQuestionCreateWithoutQuestionBankInput, ExamQuestionUncheckedCreateWithoutQuestionBankInput> | ExamQuestionCreateWithoutQuestionBankInput[] | ExamQuestionUncheckedCreateWithoutQuestionBankInput[]
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutQuestionBankInput | ExamQuestionCreateOrConnectWithoutQuestionBankInput[]
    createMany?: ExamQuestionCreateManyQuestionBankInputEnvelope
    connect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
  }

  export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType
  }

  export type QuestionBankUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ExamQuestionUpdateManyWithoutQuestionBankNestedInput = {
    create?: XOR<ExamQuestionCreateWithoutQuestionBankInput, ExamQuestionUncheckedCreateWithoutQuestionBankInput> | ExamQuestionCreateWithoutQuestionBankInput[] | ExamQuestionUncheckedCreateWithoutQuestionBankInput[]
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutQuestionBankInput | ExamQuestionCreateOrConnectWithoutQuestionBankInput[]
    upsert?: ExamQuestionUpsertWithWhereUniqueWithoutQuestionBankInput | ExamQuestionUpsertWithWhereUniqueWithoutQuestionBankInput[]
    createMany?: ExamQuestionCreateManyQuestionBankInputEnvelope
    set?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    disconnect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    delete?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    connect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    update?: ExamQuestionUpdateWithWhereUniqueWithoutQuestionBankInput | ExamQuestionUpdateWithWhereUniqueWithoutQuestionBankInput[]
    updateMany?: ExamQuestionUpdateManyWithWhereWithoutQuestionBankInput | ExamQuestionUpdateManyWithWhereWithoutQuestionBankInput[]
    deleteMany?: ExamQuestionScalarWhereInput | ExamQuestionScalarWhereInput[]
  }

  export type ExamQuestionUncheckedUpdateManyWithoutQuestionBankNestedInput = {
    create?: XOR<ExamQuestionCreateWithoutQuestionBankInput, ExamQuestionUncheckedCreateWithoutQuestionBankInput> | ExamQuestionCreateWithoutQuestionBankInput[] | ExamQuestionUncheckedCreateWithoutQuestionBankInput[]
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutQuestionBankInput | ExamQuestionCreateOrConnectWithoutQuestionBankInput[]
    upsert?: ExamQuestionUpsertWithWhereUniqueWithoutQuestionBankInput | ExamQuestionUpsertWithWhereUniqueWithoutQuestionBankInput[]
    createMany?: ExamQuestionCreateManyQuestionBankInputEnvelope
    set?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    disconnect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    delete?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    connect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    update?: ExamQuestionUpdateWithWhereUniqueWithoutQuestionBankInput | ExamQuestionUpdateWithWhereUniqueWithoutQuestionBankInput[]
    updateMany?: ExamQuestionUpdateManyWithWhereWithoutQuestionBankInput | ExamQuestionUpdateManyWithWhereWithoutQuestionBankInput[]
    deleteMany?: ExamQuestionScalarWhereInput | ExamQuestionScalarWhereInput[]
  }

  export type AssessmentCreateNestedOneWithoutExamQuestionsInput = {
    create?: XOR<AssessmentCreateWithoutExamQuestionsInput, AssessmentUncheckedCreateWithoutExamQuestionsInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutExamQuestionsInput
    connect?: AssessmentWhereUniqueInput
  }

  export type QuestionBankCreateNestedOneWithoutExamQuestionsInput = {
    create?: XOR<QuestionBankCreateWithoutExamQuestionsInput, QuestionBankUncheckedCreateWithoutExamQuestionsInput>
    connectOrCreate?: QuestionBankCreateOrConnectWithoutExamQuestionsInput
    connect?: QuestionBankWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssessmentUpdateOneRequiredWithoutExamQuestionsNestedInput = {
    create?: XOR<AssessmentCreateWithoutExamQuestionsInput, AssessmentUncheckedCreateWithoutExamQuestionsInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutExamQuestionsInput
    upsert?: AssessmentUpsertWithoutExamQuestionsInput
    connect?: AssessmentWhereUniqueInput
    update?: XOR<XOR<AssessmentUpdateToOneWithWhereWithoutExamQuestionsInput, AssessmentUpdateWithoutExamQuestionsInput>, AssessmentUncheckedUpdateWithoutExamQuestionsInput>
  }

  export type QuestionBankUpdateOneRequiredWithoutExamQuestionsNestedInput = {
    create?: XOR<QuestionBankCreateWithoutExamQuestionsInput, QuestionBankUncheckedCreateWithoutExamQuestionsInput>
    connectOrCreate?: QuestionBankCreateOrConnectWithoutExamQuestionsInput
    upsert?: QuestionBankUpsertWithoutExamQuestionsInput
    connect?: QuestionBankWhereUniqueInput
    update?: XOR<XOR<QuestionBankUpdateToOneWithWhereWithoutExamQuestionsInput, QuestionBankUpdateWithoutExamQuestionsInput>, QuestionBankUncheckedUpdateWithoutExamQuestionsInput>
  }

  export type AssessmentCreateNestedOneWithoutExamSessionsInput = {
    create?: XOR<AssessmentCreateWithoutExamSessionsInput, AssessmentUncheckedCreateWithoutExamSessionsInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutExamSessionsInput
    connect?: AssessmentWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutSessionInput = {
    create?: XOR<AnswerCreateWithoutSessionInput, AnswerUncheckedCreateWithoutSessionInput> | AnswerCreateWithoutSessionInput[] | AnswerUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutSessionInput | AnswerCreateOrConnectWithoutSessionInput[]
    createMany?: AnswerCreateManySessionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<AnswerCreateWithoutSessionInput, AnswerUncheckedCreateWithoutSessionInput> | AnswerCreateWithoutSessionInput[] | AnswerUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutSessionInput | AnswerCreateOrConnectWithoutSessionInput[]
    createMany?: AnswerCreateManySessionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type EnumExamStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExamStatus
  }

  export type AssessmentUpdateOneRequiredWithoutExamSessionsNestedInput = {
    create?: XOR<AssessmentCreateWithoutExamSessionsInput, AssessmentUncheckedCreateWithoutExamSessionsInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutExamSessionsInput
    upsert?: AssessmentUpsertWithoutExamSessionsInput
    connect?: AssessmentWhereUniqueInput
    update?: XOR<XOR<AssessmentUpdateToOneWithWhereWithoutExamSessionsInput, AssessmentUpdateWithoutExamSessionsInput>, AssessmentUncheckedUpdateWithoutExamSessionsInput>
  }

  export type AnswerUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AnswerCreateWithoutSessionInput, AnswerUncheckedCreateWithoutSessionInput> | AnswerCreateWithoutSessionInput[] | AnswerUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutSessionInput | AnswerCreateOrConnectWithoutSessionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutSessionInput | AnswerUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AnswerCreateManySessionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutSessionInput | AnswerUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutSessionInput | AnswerUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AnswerCreateWithoutSessionInput, AnswerUncheckedCreateWithoutSessionInput> | AnswerCreateWithoutSessionInput[] | AnswerUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutSessionInput | AnswerCreateOrConnectWithoutSessionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutSessionInput | AnswerUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AnswerCreateManySessionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutSessionInput | AnswerUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutSessionInput | AnswerUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type ExamSessionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<ExamSessionCreateWithoutAnswersInput, ExamSessionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: ExamSessionCreateOrConnectWithoutAnswersInput
    connect?: ExamSessionWhereUniqueInput
  }

  export type ExamSessionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<ExamSessionCreateWithoutAnswersInput, ExamSessionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: ExamSessionCreateOrConnectWithoutAnswersInput
    upsert?: ExamSessionUpsertWithoutAnswersInput
    connect?: ExamSessionWhereUniqueInput
    update?: XOR<XOR<ExamSessionUpdateToOneWithWhereWithoutAnswersInput, ExamSessionUpdateWithoutAnswersInput>, ExamSessionUncheckedUpdateWithoutAnswersInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAssessmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentTypeFilter<$PrismaModel> | $Enums.AssessmentType
  }

  export type NestedEnumAssessmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssessmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssessmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAssessmentTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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

  export type NestedEnumExamStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamStatus | EnumExamStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExamStatusFilter<$PrismaModel> | $Enums.ExamStatus
  }

  export type NestedEnumExamStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamStatus | EnumExamStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExamStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExamStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExamStatusFilter<$PrismaModel>
    _max?: NestedEnumExamStatusFilter<$PrismaModel>
  }

  export type AssignmentSessionCreateWithoutAssignmentsInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    isCompleted?: boolean
    courseId: string
    createAt?: Date | string
  }

  export type AssignmentSessionUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    isCompleted?: boolean
    courseId: string
    createAt?: Date | string
  }

  export type AssignmentSessionCreateOrConnectWithoutAssignmentsInput = {
    where: AssignmentSessionWhereUniqueInput
    create: XOR<AssignmentSessionCreateWithoutAssignmentsInput, AssignmentSessionUncheckedCreateWithoutAssignmentsInput>
  }

  export type AssignmentSessionUpsertWithoutAssignmentsInput = {
    update: XOR<AssignmentSessionUpdateWithoutAssignmentsInput, AssignmentSessionUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<AssignmentSessionCreateWithoutAssignmentsInput, AssignmentSessionUncheckedCreateWithoutAssignmentsInput>
    where?: AssignmentSessionWhereInput
  }

  export type AssignmentSessionUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: AssignmentSessionWhereInput
    data: XOR<AssignmentSessionUpdateWithoutAssignmentsInput, AssignmentSessionUncheckedUpdateWithoutAssignmentsInput>
  }

  export type AssignmentSessionUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    courseId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentSessionUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    courseId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateWithoutAssignmentSessionInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type AssignmentUncheckedCreateWithoutAssignmentSessionInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type AssignmentCreateOrConnectWithoutAssignmentSessionInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutAssignmentSessionInput, AssignmentUncheckedCreateWithoutAssignmentSessionInput>
  }

  export type AssignmentCreateManyAssignmentSessionInputEnvelope = {
    data: AssignmentCreateManyAssignmentSessionInput | AssignmentCreateManyAssignmentSessionInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentUpsertWithWhereUniqueWithoutAssignmentSessionInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutAssignmentSessionInput, AssignmentUncheckedUpdateWithoutAssignmentSessionInput>
    create: XOR<AssignmentCreateWithoutAssignmentSessionInput, AssignmentUncheckedCreateWithoutAssignmentSessionInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutAssignmentSessionInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutAssignmentSessionInput, AssignmentUncheckedUpdateWithoutAssignmentSessionInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutAssignmentSessionInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutAssignmentSessionInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: StringFilter<"Assignment"> | string
    title?: StringFilter<"Assignment"> | string
    description?: StringFilter<"Assignment"> | string
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    isCompleted?: BoolFilter<"Assignment"> | boolean
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    assignmentSessionId?: StringFilter<"Assignment"> | string
    userId?: StringFilter<"Assignment"> | string
  }

  export type ExamQuestionCreateWithoutAssessmentInput = {
    id?: string
    points: number
    questionBank: QuestionBankCreateNestedOneWithoutExamQuestionsInput
  }

  export type ExamQuestionUncheckedCreateWithoutAssessmentInput = {
    id?: string
    questionBankId: string
    points: number
  }

  export type ExamQuestionCreateOrConnectWithoutAssessmentInput = {
    where: ExamQuestionWhereUniqueInput
    create: XOR<ExamQuestionCreateWithoutAssessmentInput, ExamQuestionUncheckedCreateWithoutAssessmentInput>
  }

  export type ExamQuestionCreateManyAssessmentInputEnvelope = {
    data: ExamQuestionCreateManyAssessmentInput | ExamQuestionCreateManyAssessmentInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutAssessmentInput = {
    id?: string
    studentId: string
    submittedAt?: Date | string
    grade?: number | null
    feedback?: string | null
  }

  export type SubmissionUncheckedCreateWithoutAssessmentInput = {
    id?: string
    studentId: string
    submittedAt?: Date | string
    grade?: number | null
    feedback?: string | null
  }

  export type SubmissionCreateOrConnectWithoutAssessmentInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutAssessmentInput, SubmissionUncheckedCreateWithoutAssessmentInput>
  }

  export type SubmissionCreateManyAssessmentInputEnvelope = {
    data: SubmissionCreateManyAssessmentInput | SubmissionCreateManyAssessmentInput[]
    skipDuplicates?: boolean
  }

  export type ExamSessionCreateWithoutAssessmentInput = {
    id?: string
    studentId: string
    startedAt?: Date | string
    submittedAt?: Date | string | null
    status?: $Enums.ExamStatus
    answers?: AnswerCreateNestedManyWithoutSessionInput
  }

  export type ExamSessionUncheckedCreateWithoutAssessmentInput = {
    id?: string
    studentId: string
    startedAt?: Date | string
    submittedAt?: Date | string | null
    status?: $Enums.ExamStatus
    answers?: AnswerUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ExamSessionCreateOrConnectWithoutAssessmentInput = {
    where: ExamSessionWhereUniqueInput
    create: XOR<ExamSessionCreateWithoutAssessmentInput, ExamSessionUncheckedCreateWithoutAssessmentInput>
  }

  export type ExamSessionCreateManyAssessmentInputEnvelope = {
    data: ExamSessionCreateManyAssessmentInput | ExamSessionCreateManyAssessmentInput[]
    skipDuplicates?: boolean
  }

  export type ExamQuestionUpsertWithWhereUniqueWithoutAssessmentInput = {
    where: ExamQuestionWhereUniqueInput
    update: XOR<ExamQuestionUpdateWithoutAssessmentInput, ExamQuestionUncheckedUpdateWithoutAssessmentInput>
    create: XOR<ExamQuestionCreateWithoutAssessmentInput, ExamQuestionUncheckedCreateWithoutAssessmentInput>
  }

  export type ExamQuestionUpdateWithWhereUniqueWithoutAssessmentInput = {
    where: ExamQuestionWhereUniqueInput
    data: XOR<ExamQuestionUpdateWithoutAssessmentInput, ExamQuestionUncheckedUpdateWithoutAssessmentInput>
  }

  export type ExamQuestionUpdateManyWithWhereWithoutAssessmentInput = {
    where: ExamQuestionScalarWhereInput
    data: XOR<ExamQuestionUpdateManyMutationInput, ExamQuestionUncheckedUpdateManyWithoutAssessmentInput>
  }

  export type ExamQuestionScalarWhereInput = {
    AND?: ExamQuestionScalarWhereInput | ExamQuestionScalarWhereInput[]
    OR?: ExamQuestionScalarWhereInput[]
    NOT?: ExamQuestionScalarWhereInput | ExamQuestionScalarWhereInput[]
    id?: StringFilter<"ExamQuestion"> | string
    assessmentId?: StringFilter<"ExamQuestion"> | string
    questionBankId?: StringFilter<"ExamQuestion"> | string
    points?: IntFilter<"ExamQuestion"> | number
  }

  export type SubmissionUpsertWithWhereUniqueWithoutAssessmentInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutAssessmentInput, SubmissionUncheckedUpdateWithoutAssessmentInput>
    create: XOR<SubmissionCreateWithoutAssessmentInput, SubmissionUncheckedCreateWithoutAssessmentInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutAssessmentInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutAssessmentInput, SubmissionUncheckedUpdateWithoutAssessmentInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutAssessmentInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutAssessmentInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    assessmentId?: StringFilter<"Submission"> | string
    studentId?: StringFilter<"Submission"> | string
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    grade?: FloatNullableFilter<"Submission"> | number | null
    feedback?: StringNullableFilter<"Submission"> | string | null
  }

  export type ExamSessionUpsertWithWhereUniqueWithoutAssessmentInput = {
    where: ExamSessionWhereUniqueInput
    update: XOR<ExamSessionUpdateWithoutAssessmentInput, ExamSessionUncheckedUpdateWithoutAssessmentInput>
    create: XOR<ExamSessionCreateWithoutAssessmentInput, ExamSessionUncheckedCreateWithoutAssessmentInput>
  }

  export type ExamSessionUpdateWithWhereUniqueWithoutAssessmentInput = {
    where: ExamSessionWhereUniqueInput
    data: XOR<ExamSessionUpdateWithoutAssessmentInput, ExamSessionUncheckedUpdateWithoutAssessmentInput>
  }

  export type ExamSessionUpdateManyWithWhereWithoutAssessmentInput = {
    where: ExamSessionScalarWhereInput
    data: XOR<ExamSessionUpdateManyMutationInput, ExamSessionUncheckedUpdateManyWithoutAssessmentInput>
  }

  export type ExamSessionScalarWhereInput = {
    AND?: ExamSessionScalarWhereInput | ExamSessionScalarWhereInput[]
    OR?: ExamSessionScalarWhereInput[]
    NOT?: ExamSessionScalarWhereInput | ExamSessionScalarWhereInput[]
    id?: StringFilter<"ExamSession"> | string
    studentId?: StringFilter<"ExamSession"> | string
    assessmentId?: StringFilter<"ExamSession"> | string
    startedAt?: DateTimeFilter<"ExamSession"> | Date | string
    submittedAt?: DateTimeNullableFilter<"ExamSession"> | Date | string | null
    status?: EnumExamStatusFilter<"ExamSession"> | $Enums.ExamStatus
  }

  export type AssessmentCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    type: $Enums.AssessmentType
    courseId: string
    dueDate: Date | string
    createdAt?: Date | string
    examQuestions?: ExamQuestionCreateNestedManyWithoutAssessmentInput
    examSessions?: ExamSessionCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    type: $Enums.AssessmentType
    courseId: string
    dueDate: Date | string
    createdAt?: Date | string
    examQuestions?: ExamQuestionUncheckedCreateNestedManyWithoutAssessmentInput
    examSessions?: ExamSessionUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentCreateOrConnectWithoutSubmissionsInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutSubmissionsInput, AssessmentUncheckedCreateWithoutSubmissionsInput>
  }

  export type AssessmentUpsertWithoutSubmissionsInput = {
    update: XOR<AssessmentUpdateWithoutSubmissionsInput, AssessmentUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<AssessmentCreateWithoutSubmissionsInput, AssessmentUncheckedCreateWithoutSubmissionsInput>
    where?: AssessmentWhereInput
  }

  export type AssessmentUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: AssessmentWhereInput
    data: XOR<AssessmentUpdateWithoutSubmissionsInput, AssessmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type AssessmentUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    courseId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examQuestions?: ExamQuestionUpdateManyWithoutAssessmentNestedInput
    examSessions?: ExamSessionUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    courseId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examQuestions?: ExamQuestionUncheckedUpdateManyWithoutAssessmentNestedInput
    examSessions?: ExamSessionUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type UserCompetencyCreateWithoutCompetencyInput = {
    id?: string
    userId: string
    achievedAt?: Date | string | null
  }

  export type UserCompetencyUncheckedCreateWithoutCompetencyInput = {
    id?: string
    userId: string
    achievedAt?: Date | string | null
  }

  export type UserCompetencyCreateOrConnectWithoutCompetencyInput = {
    where: UserCompetencyWhereUniqueInput
    create: XOR<UserCompetencyCreateWithoutCompetencyInput, UserCompetencyUncheckedCreateWithoutCompetencyInput>
  }

  export type UserCompetencyCreateManyCompetencyInputEnvelope = {
    data: UserCompetencyCreateManyCompetencyInput | UserCompetencyCreateManyCompetencyInput[]
    skipDuplicates?: boolean
  }

  export type UserCompetencyUpsertWithWhereUniqueWithoutCompetencyInput = {
    where: UserCompetencyWhereUniqueInput
    update: XOR<UserCompetencyUpdateWithoutCompetencyInput, UserCompetencyUncheckedUpdateWithoutCompetencyInput>
    create: XOR<UserCompetencyCreateWithoutCompetencyInput, UserCompetencyUncheckedCreateWithoutCompetencyInput>
  }

  export type UserCompetencyUpdateWithWhereUniqueWithoutCompetencyInput = {
    where: UserCompetencyWhereUniqueInput
    data: XOR<UserCompetencyUpdateWithoutCompetencyInput, UserCompetencyUncheckedUpdateWithoutCompetencyInput>
  }

  export type UserCompetencyUpdateManyWithWhereWithoutCompetencyInput = {
    where: UserCompetencyScalarWhereInput
    data: XOR<UserCompetencyUpdateManyMutationInput, UserCompetencyUncheckedUpdateManyWithoutCompetencyInput>
  }

  export type UserCompetencyScalarWhereInput = {
    AND?: UserCompetencyScalarWhereInput | UserCompetencyScalarWhereInput[]
    OR?: UserCompetencyScalarWhereInput[]
    NOT?: UserCompetencyScalarWhereInput | UserCompetencyScalarWhereInput[]
    id?: StringFilter<"UserCompetency"> | string
    userId?: StringFilter<"UserCompetency"> | string
    competencyId?: StringFilter<"UserCompetency"> | string
    achievedAt?: DateTimeNullableFilter<"UserCompetency"> | Date | string | null
  }

  export type CompetencyCreateWithoutUsercompetenciesInput = {
    id?: string
    name: string
    description?: string | null
    courseId: string
  }

  export type CompetencyUncheckedCreateWithoutUsercompetenciesInput = {
    id?: string
    name: string
    description?: string | null
    courseId: string
  }

  export type CompetencyCreateOrConnectWithoutUsercompetenciesInput = {
    where: CompetencyWhereUniqueInput
    create: XOR<CompetencyCreateWithoutUsercompetenciesInput, CompetencyUncheckedCreateWithoutUsercompetenciesInput>
  }

  export type CompetencyUpsertWithoutUsercompetenciesInput = {
    update: XOR<CompetencyUpdateWithoutUsercompetenciesInput, CompetencyUncheckedUpdateWithoutUsercompetenciesInput>
    create: XOR<CompetencyCreateWithoutUsercompetenciesInput, CompetencyUncheckedCreateWithoutUsercompetenciesInput>
    where?: CompetencyWhereInput
  }

  export type CompetencyUpdateToOneWithWhereWithoutUsercompetenciesInput = {
    where?: CompetencyWhereInput
    data: XOR<CompetencyUpdateWithoutUsercompetenciesInput, CompetencyUncheckedUpdateWithoutUsercompetenciesInput>
  }

  export type CompetencyUpdateWithoutUsercompetenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type CompetencyUncheckedUpdateWithoutUsercompetenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type ExamQuestionCreateWithoutQuestionBankInput = {
    id?: string
    points: number
    assessment: AssessmentCreateNestedOneWithoutExamQuestionsInput
  }

  export type ExamQuestionUncheckedCreateWithoutQuestionBankInput = {
    id?: string
    assessmentId: string
    points: number
  }

  export type ExamQuestionCreateOrConnectWithoutQuestionBankInput = {
    where: ExamQuestionWhereUniqueInput
    create: XOR<ExamQuestionCreateWithoutQuestionBankInput, ExamQuestionUncheckedCreateWithoutQuestionBankInput>
  }

  export type ExamQuestionCreateManyQuestionBankInputEnvelope = {
    data: ExamQuestionCreateManyQuestionBankInput | ExamQuestionCreateManyQuestionBankInput[]
    skipDuplicates?: boolean
  }

  export type ExamQuestionUpsertWithWhereUniqueWithoutQuestionBankInput = {
    where: ExamQuestionWhereUniqueInput
    update: XOR<ExamQuestionUpdateWithoutQuestionBankInput, ExamQuestionUncheckedUpdateWithoutQuestionBankInput>
    create: XOR<ExamQuestionCreateWithoutQuestionBankInput, ExamQuestionUncheckedCreateWithoutQuestionBankInput>
  }

  export type ExamQuestionUpdateWithWhereUniqueWithoutQuestionBankInput = {
    where: ExamQuestionWhereUniqueInput
    data: XOR<ExamQuestionUpdateWithoutQuestionBankInput, ExamQuestionUncheckedUpdateWithoutQuestionBankInput>
  }

  export type ExamQuestionUpdateManyWithWhereWithoutQuestionBankInput = {
    where: ExamQuestionScalarWhereInput
    data: XOR<ExamQuestionUpdateManyMutationInput, ExamQuestionUncheckedUpdateManyWithoutQuestionBankInput>
  }

  export type AssessmentCreateWithoutExamQuestionsInput = {
    id?: string
    title: string
    type: $Enums.AssessmentType
    courseId: string
    dueDate: Date | string
    createdAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutAssessmentInput
    examSessions?: ExamSessionCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutExamQuestionsInput = {
    id?: string
    title: string
    type: $Enums.AssessmentType
    courseId: string
    dueDate: Date | string
    createdAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssessmentInput
    examSessions?: ExamSessionUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentCreateOrConnectWithoutExamQuestionsInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutExamQuestionsInput, AssessmentUncheckedCreateWithoutExamQuestionsInput>
  }

  export type QuestionBankCreateWithoutExamQuestionsInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    options?: NullableJsonNullValueInput | InputJsonValue
    answer?: string | null
    createdAt?: Date | string
    tags?: QuestionBankCreatetagsInput | string[]
  }

  export type QuestionBankUncheckedCreateWithoutExamQuestionsInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    options?: NullableJsonNullValueInput | InputJsonValue
    answer?: string | null
    createdAt?: Date | string
    tags?: QuestionBankCreatetagsInput | string[]
  }

  export type QuestionBankCreateOrConnectWithoutExamQuestionsInput = {
    where: QuestionBankWhereUniqueInput
    create: XOR<QuestionBankCreateWithoutExamQuestionsInput, QuestionBankUncheckedCreateWithoutExamQuestionsInput>
  }

  export type AssessmentUpsertWithoutExamQuestionsInput = {
    update: XOR<AssessmentUpdateWithoutExamQuestionsInput, AssessmentUncheckedUpdateWithoutExamQuestionsInput>
    create: XOR<AssessmentCreateWithoutExamQuestionsInput, AssessmentUncheckedCreateWithoutExamQuestionsInput>
    where?: AssessmentWhereInput
  }

  export type AssessmentUpdateToOneWithWhereWithoutExamQuestionsInput = {
    where?: AssessmentWhereInput
    data: XOR<AssessmentUpdateWithoutExamQuestionsInput, AssessmentUncheckedUpdateWithoutExamQuestionsInput>
  }

  export type AssessmentUpdateWithoutExamQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    courseId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutAssessmentNestedInput
    examSessions?: ExamSessionUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutExamQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    courseId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutAssessmentNestedInput
    examSessions?: ExamSessionUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type QuestionBankUpsertWithoutExamQuestionsInput = {
    update: XOR<QuestionBankUpdateWithoutExamQuestionsInput, QuestionBankUncheckedUpdateWithoutExamQuestionsInput>
    create: XOR<QuestionBankCreateWithoutExamQuestionsInput, QuestionBankUncheckedCreateWithoutExamQuestionsInput>
    where?: QuestionBankWhereInput
  }

  export type QuestionBankUpdateToOneWithWhereWithoutExamQuestionsInput = {
    where?: QuestionBankWhereInput
    data: XOR<QuestionBankUpdateWithoutExamQuestionsInput, QuestionBankUncheckedUpdateWithoutExamQuestionsInput>
  }

  export type QuestionBankUpdateWithoutExamQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    options?: NullableJsonNullValueInput | InputJsonValue
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: QuestionBankUpdatetagsInput | string[]
  }

  export type QuestionBankUncheckedUpdateWithoutExamQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    options?: NullableJsonNullValueInput | InputJsonValue
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: QuestionBankUpdatetagsInput | string[]
  }

  export type AssessmentCreateWithoutExamSessionsInput = {
    id?: string
    title: string
    type: $Enums.AssessmentType
    courseId: string
    dueDate: Date | string
    createdAt?: Date | string
    examQuestions?: ExamQuestionCreateNestedManyWithoutAssessmentInput
    submissions?: SubmissionCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutExamSessionsInput = {
    id?: string
    title: string
    type: $Enums.AssessmentType
    courseId: string
    dueDate: Date | string
    createdAt?: Date | string
    examQuestions?: ExamQuestionUncheckedCreateNestedManyWithoutAssessmentInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentCreateOrConnectWithoutExamSessionsInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutExamSessionsInput, AssessmentUncheckedCreateWithoutExamSessionsInput>
  }

  export type AnswerCreateWithoutSessionInput = {
    id?: string
    questionId: string
    response?: string | null
    gradedScore?: number | null
  }

  export type AnswerUncheckedCreateWithoutSessionInput = {
    id?: string
    questionId: string
    response?: string | null
    gradedScore?: number | null
  }

  export type AnswerCreateOrConnectWithoutSessionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutSessionInput, AnswerUncheckedCreateWithoutSessionInput>
  }

  export type AnswerCreateManySessionInputEnvelope = {
    data: AnswerCreateManySessionInput | AnswerCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentUpsertWithoutExamSessionsInput = {
    update: XOR<AssessmentUpdateWithoutExamSessionsInput, AssessmentUncheckedUpdateWithoutExamSessionsInput>
    create: XOR<AssessmentCreateWithoutExamSessionsInput, AssessmentUncheckedCreateWithoutExamSessionsInput>
    where?: AssessmentWhereInput
  }

  export type AssessmentUpdateToOneWithWhereWithoutExamSessionsInput = {
    where?: AssessmentWhereInput
    data: XOR<AssessmentUpdateWithoutExamSessionsInput, AssessmentUncheckedUpdateWithoutExamSessionsInput>
  }

  export type AssessmentUpdateWithoutExamSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    courseId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examQuestions?: ExamQuestionUpdateManyWithoutAssessmentNestedInput
    submissions?: SubmissionUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutExamSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    courseId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examQuestions?: ExamQuestionUncheckedUpdateManyWithoutAssessmentNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutSessionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutSessionInput, AnswerUncheckedUpdateWithoutSessionInput>
    create: XOR<AnswerCreateWithoutSessionInput, AnswerUncheckedCreateWithoutSessionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutSessionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutSessionInput, AnswerUncheckedUpdateWithoutSessionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutSessionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutSessionInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    sessionId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    response?: StringNullableFilter<"Answer"> | string | null
    gradedScore?: FloatNullableFilter<"Answer"> | number | null
  }

  export type ExamSessionCreateWithoutAnswersInput = {
    id?: string
    studentId: string
    startedAt?: Date | string
    submittedAt?: Date | string | null
    status?: $Enums.ExamStatus
    assessment: AssessmentCreateNestedOneWithoutExamSessionsInput
  }

  export type ExamSessionUncheckedCreateWithoutAnswersInput = {
    id?: string
    studentId: string
    assessmentId: string
    startedAt?: Date | string
    submittedAt?: Date | string | null
    status?: $Enums.ExamStatus
  }

  export type ExamSessionCreateOrConnectWithoutAnswersInput = {
    where: ExamSessionWhereUniqueInput
    create: XOR<ExamSessionCreateWithoutAnswersInput, ExamSessionUncheckedCreateWithoutAnswersInput>
  }

  export type ExamSessionUpsertWithoutAnswersInput = {
    update: XOR<ExamSessionUpdateWithoutAnswersInput, ExamSessionUncheckedUpdateWithoutAnswersInput>
    create: XOR<ExamSessionCreateWithoutAnswersInput, ExamSessionUncheckedCreateWithoutAnswersInput>
    where?: ExamSessionWhereInput
  }

  export type ExamSessionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: ExamSessionWhereInput
    data: XOR<ExamSessionUpdateWithoutAnswersInput, ExamSessionUncheckedUpdateWithoutAnswersInput>
  }

  export type ExamSessionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
    assessment?: AssessmentUpdateOneRequiredWithoutExamSessionsNestedInput
  }

  export type ExamSessionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
  }

  export type AssignmentCreateManyAssignmentSessionInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type AssignmentUpdateWithoutAssignmentSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AssignmentUncheckedUpdateWithoutAssignmentSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AssignmentUncheckedUpdateManyWithoutAssignmentSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExamQuestionCreateManyAssessmentInput = {
    id?: string
    questionBankId: string
    points: number
  }

  export type SubmissionCreateManyAssessmentInput = {
    id?: string
    studentId: string
    submittedAt?: Date | string
    grade?: number | null
    feedback?: string | null
  }

  export type ExamSessionCreateManyAssessmentInput = {
    id?: string
    studentId: string
    startedAt?: Date | string
    submittedAt?: Date | string | null
    status?: $Enums.ExamStatus
  }

  export type ExamQuestionUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    questionBank?: QuestionBankUpdateOneRequiredWithoutExamQuestionsNestedInput
  }

  export type ExamQuestionUncheckedUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionBankId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
  }

  export type ExamQuestionUncheckedUpdateManyWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionBankId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
  }

  export type SubmissionUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionUncheckedUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionUncheckedUpdateManyWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamSessionUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
    answers?: AnswerUpdateManyWithoutSessionNestedInput
  }

  export type ExamSessionUncheckedUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
    answers?: AnswerUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ExamSessionUncheckedUpdateManyWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
  }

  export type UserCompetencyCreateManyCompetencyInput = {
    id?: string
    userId: string
    achievedAt?: Date | string | null
  }

  export type UserCompetencyUpdateWithoutCompetencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCompetencyUncheckedUpdateWithoutCompetencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCompetencyUncheckedUpdateManyWithoutCompetencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExamQuestionCreateManyQuestionBankInput = {
    id?: string
    assessmentId: string
    points: number
  }

  export type ExamQuestionUpdateWithoutQuestionBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    assessment?: AssessmentUpdateOneRequiredWithoutExamQuestionsNestedInput
  }

  export type ExamQuestionUncheckedUpdateWithoutQuestionBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
  }

  export type ExamQuestionUncheckedUpdateManyWithoutQuestionBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerCreateManySessionInput = {
    id?: string
    questionId: string
    response?: string | null
    gradedScore?: number | null
  }

  export type AnswerUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    gradedScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AnswerUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    gradedScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AnswerUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    gradedScore?: NullableFloatFieldUpdateOperationsInput | number | null
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