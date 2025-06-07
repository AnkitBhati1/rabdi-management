
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
 * Model Vendor
 * 
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model Rabdi
 * 
 */
export type Rabdi = $Result.DefaultSelection<Prisma.$RabdiPayload>
/**
 * Model Milk
 * 
 */
export type Milk = $Result.DefaultSelection<Prisma.$MilkPayload>
/**
 * Model Gas
 * 
 */
export type Gas = $Result.DefaultSelection<Prisma.$GasPayload>
/**
 * Model Bill
 * 
 */
export type Bill = $Result.DefaultSelection<Prisma.$BillPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Vendors
 * const vendors = await prisma.vendor.findMany()
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
   * // Fetch zero or more Vendors
   * const vendors = await prisma.vendor.findMany()
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
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rabdi`: Exposes CRUD operations for the **Rabdi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rabdis
    * const rabdis = await prisma.rabdi.findMany()
    * ```
    */
  get rabdi(): Prisma.RabdiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.milk`: Exposes CRUD operations for the **Milk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Milks
    * const milks = await prisma.milk.findMany()
    * ```
    */
  get milk(): Prisma.MilkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gas`: Exposes CRUD operations for the **Gas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gases
    * const gases = await prisma.gas.findMany()
    * ```
    */
  get gas(): Prisma.GasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bill`: Exposes CRUD operations for the **Bill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bill.findMany()
    * ```
    */
  get bill(): Prisma.BillDelegate<ExtArgs, ClientOptions>;
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
    Vendor: 'Vendor',
    Rabdi: 'Rabdi',
    Milk: 'Milk',
    Gas: 'Gas',
    Bill: 'Bill'
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
      modelProps: "vendor" | "rabdi" | "milk" | "gas" | "bill"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      Rabdi: {
        payload: Prisma.$RabdiPayload<ExtArgs>
        fields: Prisma.RabdiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RabdiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RabdiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RabdiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RabdiPayload>
          }
          findFirst: {
            args: Prisma.RabdiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RabdiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RabdiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RabdiPayload>
          }
          findMany: {
            args: Prisma.RabdiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RabdiPayload>[]
          }
          create: {
            args: Prisma.RabdiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RabdiPayload>
          }
          createMany: {
            args: Prisma.RabdiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RabdiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RabdiPayload>[]
          }
          delete: {
            args: Prisma.RabdiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RabdiPayload>
          }
          update: {
            args: Prisma.RabdiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RabdiPayload>
          }
          deleteMany: {
            args: Prisma.RabdiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RabdiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RabdiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RabdiPayload>[]
          }
          upsert: {
            args: Prisma.RabdiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RabdiPayload>
          }
          aggregate: {
            args: Prisma.RabdiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRabdi>
          }
          groupBy: {
            args: Prisma.RabdiGroupByArgs<ExtArgs>
            result: $Utils.Optional<RabdiGroupByOutputType>[]
          }
          count: {
            args: Prisma.RabdiCountArgs<ExtArgs>
            result: $Utils.Optional<RabdiCountAggregateOutputType> | number
          }
        }
      }
      Milk: {
        payload: Prisma.$MilkPayload<ExtArgs>
        fields: Prisma.MilkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MilkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MilkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilkPayload>
          }
          findFirst: {
            args: Prisma.MilkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MilkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilkPayload>
          }
          findMany: {
            args: Prisma.MilkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilkPayload>[]
          }
          create: {
            args: Prisma.MilkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilkPayload>
          }
          createMany: {
            args: Prisma.MilkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MilkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilkPayload>[]
          }
          delete: {
            args: Prisma.MilkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilkPayload>
          }
          update: {
            args: Prisma.MilkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilkPayload>
          }
          deleteMany: {
            args: Prisma.MilkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MilkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MilkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilkPayload>[]
          }
          upsert: {
            args: Prisma.MilkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilkPayload>
          }
          aggregate: {
            args: Prisma.MilkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMilk>
          }
          groupBy: {
            args: Prisma.MilkGroupByArgs<ExtArgs>
            result: $Utils.Optional<MilkGroupByOutputType>[]
          }
          count: {
            args: Prisma.MilkCountArgs<ExtArgs>
            result: $Utils.Optional<MilkCountAggregateOutputType> | number
          }
        }
      }
      Gas: {
        payload: Prisma.$GasPayload<ExtArgs>
        fields: Prisma.GasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasPayload>
          }
          findFirst: {
            args: Prisma.GasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasPayload>
          }
          findMany: {
            args: Prisma.GasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasPayload>[]
          }
          create: {
            args: Prisma.GasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasPayload>
          }
          createMany: {
            args: Prisma.GasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasPayload>[]
          }
          delete: {
            args: Prisma.GasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasPayload>
          }
          update: {
            args: Prisma.GasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasPayload>
          }
          deleteMany: {
            args: Prisma.GasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasPayload>[]
          }
          upsert: {
            args: Prisma.GasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GasPayload>
          }
          aggregate: {
            args: Prisma.GasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGas>
          }
          groupBy: {
            args: Prisma.GasGroupByArgs<ExtArgs>
            result: $Utils.Optional<GasGroupByOutputType>[]
          }
          count: {
            args: Prisma.GasCountArgs<ExtArgs>
            result: $Utils.Optional<GasCountAggregateOutputType> | number
          }
        }
      }
      Bill: {
        payload: Prisma.$BillPayload<ExtArgs>
        fields: Prisma.BillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findFirst: {
            args: Prisma.BillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findMany: {
            args: Prisma.BillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          create: {
            args: Prisma.BillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          createMany: {
            args: Prisma.BillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          delete: {
            args: Prisma.BillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          update: {
            args: Prisma.BillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          deleteMany: {
            args: Prisma.BillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          upsert: {
            args: Prisma.BillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          aggregate: {
            args: Prisma.BillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBill>
          }
          groupBy: {
            args: Prisma.BillGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillCountArgs<ExtArgs>
            result: $Utils.Optional<BillCountAggregateOutputType> | number
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
    vendor?: VendorOmit
    rabdi?: RabdiOmit
    milk?: MilkOmit
    gas?: GasOmit
    bill?: BillOmit
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
   * Count Type VendorCountOutputType
   */

  export type VendorCountOutputType = {
    rabdis: number
    milks: number
    gases: number
  }

  export type VendorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rabdis?: boolean | VendorCountOutputTypeCountRabdisArgs
    milks?: boolean | VendorCountOutputTypeCountMilksArgs
    gases?: boolean | VendorCountOutputTypeCountGasesArgs
  }

  // Custom InputTypes
  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountRabdisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RabdiWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountMilksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilkWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountGasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorAvgAggregateOutputType = {
    id: number | null
  }

  export type VendorSumAggregateOutputType = {
    id: number | null
  }

  export type VendorMinAggregateOutputType = {
    id: number | null
    name: string | null
    vendorType: string | null
    clerkUserId: string | null
  }

  export type VendorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    vendorType: string | null
    clerkUserId: string | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    name: number
    vendorType: number
    clerkUserId: number
    _all: number
  }


  export type VendorAvgAggregateInputType = {
    id?: true
  }

  export type VendorSumAggregateInputType = {
    id?: true
  }

  export type VendorMinAggregateInputType = {
    id?: true
    name?: true
    vendorType?: true
    clerkUserId?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    name?: true
    vendorType?: true
    clerkUserId?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    name?: true
    vendorType?: true
    clerkUserId?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _avg?: VendorAvgAggregateInputType
    _sum?: VendorSumAggregateInputType
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    id: number
    name: string
    vendorType: string
    clerkUserId: string
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    vendorType?: boolean
    clerkUserId?: boolean
    rabdis?: boolean | Vendor$rabdisArgs<ExtArgs>
    milks?: boolean | Vendor$milksArgs<ExtArgs>
    gases?: boolean | Vendor$gasesArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    vendorType?: boolean
    clerkUserId?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    vendorType?: boolean
    clerkUserId?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectScalar = {
    id?: boolean
    name?: boolean
    vendorType?: boolean
    clerkUserId?: boolean
  }

  export type VendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "vendorType" | "clerkUserId", ExtArgs["result"]["vendor"]>
  export type VendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rabdis?: boolean | Vendor$rabdisArgs<ExtArgs>
    milks?: boolean | Vendor$milksArgs<ExtArgs>
    gases?: boolean | Vendor$gasesArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VendorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {
      rabdis: Prisma.$RabdiPayload<ExtArgs>[]
      milks: Prisma.$MilkPayload<ExtArgs>[]
      gases: Prisma.$GasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      vendorType: string
      clerkUserId: string
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendors and returns the data saved in the database.
     * @param {VendorCreateManyAndReturnArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors and returns the data updated in the database.
     * @param {VendorUpdateManyAndReturnArgs} args - Arguments to update many Vendors.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.updateManyAndReturn({
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
    updateManyAndReturn<T extends VendorUpdateManyAndReturnArgs>(args: SelectSubset<T, VendorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
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
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rabdis<T extends Vendor$rabdisArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$rabdisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RabdiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    milks<T extends Vendor$milksArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$milksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gases<T extends Vendor$gasesArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$gasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vendor model
   */
  interface VendorFieldRefs {
    readonly id: FieldRef<"Vendor", 'Int'>
    readonly name: FieldRef<"Vendor", 'String'>
    readonly vendorType: FieldRef<"Vendor", 'String'>
    readonly clerkUserId: FieldRef<"Vendor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
  }

  /**
   * Vendor createManyAndReturn
   */
  export type VendorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor updateManyAndReturn
   */
  export type VendorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to delete.
     */
    limit?: number
  }

  /**
   * Vendor.rabdis
   */
  export type Vendor$rabdisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rabdi
     */
    select?: RabdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rabdi
     */
    omit?: RabdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RabdiInclude<ExtArgs> | null
    where?: RabdiWhereInput
    orderBy?: RabdiOrderByWithRelationInput | RabdiOrderByWithRelationInput[]
    cursor?: RabdiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RabdiScalarFieldEnum | RabdiScalarFieldEnum[]
  }

  /**
   * Vendor.milks
   */
  export type Vendor$milksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milk
     */
    select?: MilkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milk
     */
    omit?: MilkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilkInclude<ExtArgs> | null
    where?: MilkWhereInput
    orderBy?: MilkOrderByWithRelationInput | MilkOrderByWithRelationInput[]
    cursor?: MilkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilkScalarFieldEnum | MilkScalarFieldEnum[]
  }

  /**
   * Vendor.gases
   */
  export type Vendor$gasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gas
     */
    select?: GasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gas
     */
    omit?: GasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GasInclude<ExtArgs> | null
    where?: GasWhereInput
    orderBy?: GasOrderByWithRelationInput | GasOrderByWithRelationInput[]
    cursor?: GasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GasScalarFieldEnum | GasScalarFieldEnum[]
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
  }


  /**
   * Model Rabdi
   */

  export type AggregateRabdi = {
    _count: RabdiCountAggregateOutputType | null
    _avg: RabdiAvgAggregateOutputType | null
    _sum: RabdiSumAggregateOutputType | null
    _min: RabdiMinAggregateOutputType | null
    _max: RabdiMaxAggregateOutputType | null
  }

  export type RabdiAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    amountDeposited: number | null
    vendorId: number | null
  }

  export type RabdiSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    amountDeposited: number | null
    vendorId: number | null
  }

  export type RabdiMinAggregateOutputType = {
    id: number | null
    clerkUserId: string | null
    date: Date | null
    quantity: number | null
    amountDeposited: number | null
    vendorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RabdiMaxAggregateOutputType = {
    id: number | null
    clerkUserId: string | null
    date: Date | null
    quantity: number | null
    amountDeposited: number | null
    vendorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RabdiCountAggregateOutputType = {
    id: number
    clerkUserId: number
    date: number
    quantity: number
    amountDeposited: number
    vendorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RabdiAvgAggregateInputType = {
    id?: true
    quantity?: true
    amountDeposited?: true
    vendorId?: true
  }

  export type RabdiSumAggregateInputType = {
    id?: true
    quantity?: true
    amountDeposited?: true
    vendorId?: true
  }

  export type RabdiMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    date?: true
    quantity?: true
    amountDeposited?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RabdiMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    date?: true
    quantity?: true
    amountDeposited?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RabdiCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    date?: true
    quantity?: true
    amountDeposited?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RabdiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rabdi to aggregate.
     */
    where?: RabdiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rabdis to fetch.
     */
    orderBy?: RabdiOrderByWithRelationInput | RabdiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RabdiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rabdis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rabdis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rabdis
    **/
    _count?: true | RabdiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RabdiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RabdiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RabdiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RabdiMaxAggregateInputType
  }

  export type GetRabdiAggregateType<T extends RabdiAggregateArgs> = {
        [P in keyof T & keyof AggregateRabdi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRabdi[P]>
      : GetScalarType<T[P], AggregateRabdi[P]>
  }




  export type RabdiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RabdiWhereInput
    orderBy?: RabdiOrderByWithAggregationInput | RabdiOrderByWithAggregationInput[]
    by: RabdiScalarFieldEnum[] | RabdiScalarFieldEnum
    having?: RabdiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RabdiCountAggregateInputType | true
    _avg?: RabdiAvgAggregateInputType
    _sum?: RabdiSumAggregateInputType
    _min?: RabdiMinAggregateInputType
    _max?: RabdiMaxAggregateInputType
  }

  export type RabdiGroupByOutputType = {
    id: number
    clerkUserId: string
    date: Date
    quantity: number
    amountDeposited: number
    vendorId: number
    createdAt: Date
    updatedAt: Date
    _count: RabdiCountAggregateOutputType | null
    _avg: RabdiAvgAggregateOutputType | null
    _sum: RabdiSumAggregateOutputType | null
    _min: RabdiMinAggregateOutputType | null
    _max: RabdiMaxAggregateOutputType | null
  }

  type GetRabdiGroupByPayload<T extends RabdiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RabdiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RabdiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RabdiGroupByOutputType[P]>
            : GetScalarType<T[P], RabdiGroupByOutputType[P]>
        }
      >
    >


  export type RabdiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    date?: boolean
    quantity?: boolean
    amountDeposited?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rabdi"]>

  export type RabdiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    date?: boolean
    quantity?: boolean
    amountDeposited?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rabdi"]>

  export type RabdiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    date?: boolean
    quantity?: boolean
    amountDeposited?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rabdi"]>

  export type RabdiSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    date?: boolean
    quantity?: boolean
    amountDeposited?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RabdiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkUserId" | "date" | "quantity" | "amountDeposited" | "vendorId" | "createdAt" | "updatedAt", ExtArgs["result"]["rabdi"]>
  export type RabdiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type RabdiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type RabdiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $RabdiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rabdi"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clerkUserId: string
      date: Date
      quantity: number
      amountDeposited: number
      vendorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rabdi"]>
    composites: {}
  }

  type RabdiGetPayload<S extends boolean | null | undefined | RabdiDefaultArgs> = $Result.GetResult<Prisma.$RabdiPayload, S>

  type RabdiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RabdiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RabdiCountAggregateInputType | true
    }

  export interface RabdiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rabdi'], meta: { name: 'Rabdi' } }
    /**
     * Find zero or one Rabdi that matches the filter.
     * @param {RabdiFindUniqueArgs} args - Arguments to find a Rabdi
     * @example
     * // Get one Rabdi
     * const rabdi = await prisma.rabdi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RabdiFindUniqueArgs>(args: SelectSubset<T, RabdiFindUniqueArgs<ExtArgs>>): Prisma__RabdiClient<$Result.GetResult<Prisma.$RabdiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rabdi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RabdiFindUniqueOrThrowArgs} args - Arguments to find a Rabdi
     * @example
     * // Get one Rabdi
     * const rabdi = await prisma.rabdi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RabdiFindUniqueOrThrowArgs>(args: SelectSubset<T, RabdiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RabdiClient<$Result.GetResult<Prisma.$RabdiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rabdi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RabdiFindFirstArgs} args - Arguments to find a Rabdi
     * @example
     * // Get one Rabdi
     * const rabdi = await prisma.rabdi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RabdiFindFirstArgs>(args?: SelectSubset<T, RabdiFindFirstArgs<ExtArgs>>): Prisma__RabdiClient<$Result.GetResult<Prisma.$RabdiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rabdi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RabdiFindFirstOrThrowArgs} args - Arguments to find a Rabdi
     * @example
     * // Get one Rabdi
     * const rabdi = await prisma.rabdi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RabdiFindFirstOrThrowArgs>(args?: SelectSubset<T, RabdiFindFirstOrThrowArgs<ExtArgs>>): Prisma__RabdiClient<$Result.GetResult<Prisma.$RabdiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rabdis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RabdiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rabdis
     * const rabdis = await prisma.rabdi.findMany()
     * 
     * // Get first 10 Rabdis
     * const rabdis = await prisma.rabdi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rabdiWithIdOnly = await prisma.rabdi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RabdiFindManyArgs>(args?: SelectSubset<T, RabdiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RabdiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rabdi.
     * @param {RabdiCreateArgs} args - Arguments to create a Rabdi.
     * @example
     * // Create one Rabdi
     * const Rabdi = await prisma.rabdi.create({
     *   data: {
     *     // ... data to create a Rabdi
     *   }
     * })
     * 
     */
    create<T extends RabdiCreateArgs>(args: SelectSubset<T, RabdiCreateArgs<ExtArgs>>): Prisma__RabdiClient<$Result.GetResult<Prisma.$RabdiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rabdis.
     * @param {RabdiCreateManyArgs} args - Arguments to create many Rabdis.
     * @example
     * // Create many Rabdis
     * const rabdi = await prisma.rabdi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RabdiCreateManyArgs>(args?: SelectSubset<T, RabdiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rabdis and returns the data saved in the database.
     * @param {RabdiCreateManyAndReturnArgs} args - Arguments to create many Rabdis.
     * @example
     * // Create many Rabdis
     * const rabdi = await prisma.rabdi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rabdis and only return the `id`
     * const rabdiWithIdOnly = await prisma.rabdi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RabdiCreateManyAndReturnArgs>(args?: SelectSubset<T, RabdiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RabdiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rabdi.
     * @param {RabdiDeleteArgs} args - Arguments to delete one Rabdi.
     * @example
     * // Delete one Rabdi
     * const Rabdi = await prisma.rabdi.delete({
     *   where: {
     *     // ... filter to delete one Rabdi
     *   }
     * })
     * 
     */
    delete<T extends RabdiDeleteArgs>(args: SelectSubset<T, RabdiDeleteArgs<ExtArgs>>): Prisma__RabdiClient<$Result.GetResult<Prisma.$RabdiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rabdi.
     * @param {RabdiUpdateArgs} args - Arguments to update one Rabdi.
     * @example
     * // Update one Rabdi
     * const rabdi = await prisma.rabdi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RabdiUpdateArgs>(args: SelectSubset<T, RabdiUpdateArgs<ExtArgs>>): Prisma__RabdiClient<$Result.GetResult<Prisma.$RabdiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rabdis.
     * @param {RabdiDeleteManyArgs} args - Arguments to filter Rabdis to delete.
     * @example
     * // Delete a few Rabdis
     * const { count } = await prisma.rabdi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RabdiDeleteManyArgs>(args?: SelectSubset<T, RabdiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rabdis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RabdiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rabdis
     * const rabdi = await prisma.rabdi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RabdiUpdateManyArgs>(args: SelectSubset<T, RabdiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rabdis and returns the data updated in the database.
     * @param {RabdiUpdateManyAndReturnArgs} args - Arguments to update many Rabdis.
     * @example
     * // Update many Rabdis
     * const rabdi = await prisma.rabdi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rabdis and only return the `id`
     * const rabdiWithIdOnly = await prisma.rabdi.updateManyAndReturn({
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
    updateManyAndReturn<T extends RabdiUpdateManyAndReturnArgs>(args: SelectSubset<T, RabdiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RabdiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rabdi.
     * @param {RabdiUpsertArgs} args - Arguments to update or create a Rabdi.
     * @example
     * // Update or create a Rabdi
     * const rabdi = await prisma.rabdi.upsert({
     *   create: {
     *     // ... data to create a Rabdi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rabdi we want to update
     *   }
     * })
     */
    upsert<T extends RabdiUpsertArgs>(args: SelectSubset<T, RabdiUpsertArgs<ExtArgs>>): Prisma__RabdiClient<$Result.GetResult<Prisma.$RabdiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rabdis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RabdiCountArgs} args - Arguments to filter Rabdis to count.
     * @example
     * // Count the number of Rabdis
     * const count = await prisma.rabdi.count({
     *   where: {
     *     // ... the filter for the Rabdis we want to count
     *   }
     * })
    **/
    count<T extends RabdiCountArgs>(
      args?: Subset<T, RabdiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RabdiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rabdi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RabdiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RabdiAggregateArgs>(args: Subset<T, RabdiAggregateArgs>): Prisma.PrismaPromise<GetRabdiAggregateType<T>>

    /**
     * Group by Rabdi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RabdiGroupByArgs} args - Group by arguments.
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
      T extends RabdiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RabdiGroupByArgs['orderBy'] }
        : { orderBy?: RabdiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RabdiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRabdiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rabdi model
   */
  readonly fields: RabdiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rabdi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RabdiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rabdi model
   */
  interface RabdiFieldRefs {
    readonly id: FieldRef<"Rabdi", 'Int'>
    readonly clerkUserId: FieldRef<"Rabdi", 'String'>
    readonly date: FieldRef<"Rabdi", 'DateTime'>
    readonly quantity: FieldRef<"Rabdi", 'Float'>
    readonly amountDeposited: FieldRef<"Rabdi", 'Float'>
    readonly vendorId: FieldRef<"Rabdi", 'Int'>
    readonly createdAt: FieldRef<"Rabdi", 'DateTime'>
    readonly updatedAt: FieldRef<"Rabdi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rabdi findUnique
   */
  export type RabdiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rabdi
     */
    select?: RabdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rabdi
     */
    omit?: RabdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RabdiInclude<ExtArgs> | null
    /**
     * Filter, which Rabdi to fetch.
     */
    where: RabdiWhereUniqueInput
  }

  /**
   * Rabdi findUniqueOrThrow
   */
  export type RabdiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rabdi
     */
    select?: RabdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rabdi
     */
    omit?: RabdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RabdiInclude<ExtArgs> | null
    /**
     * Filter, which Rabdi to fetch.
     */
    where: RabdiWhereUniqueInput
  }

  /**
   * Rabdi findFirst
   */
  export type RabdiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rabdi
     */
    select?: RabdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rabdi
     */
    omit?: RabdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RabdiInclude<ExtArgs> | null
    /**
     * Filter, which Rabdi to fetch.
     */
    where?: RabdiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rabdis to fetch.
     */
    orderBy?: RabdiOrderByWithRelationInput | RabdiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rabdis.
     */
    cursor?: RabdiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rabdis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rabdis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rabdis.
     */
    distinct?: RabdiScalarFieldEnum | RabdiScalarFieldEnum[]
  }

  /**
   * Rabdi findFirstOrThrow
   */
  export type RabdiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rabdi
     */
    select?: RabdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rabdi
     */
    omit?: RabdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RabdiInclude<ExtArgs> | null
    /**
     * Filter, which Rabdi to fetch.
     */
    where?: RabdiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rabdis to fetch.
     */
    orderBy?: RabdiOrderByWithRelationInput | RabdiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rabdis.
     */
    cursor?: RabdiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rabdis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rabdis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rabdis.
     */
    distinct?: RabdiScalarFieldEnum | RabdiScalarFieldEnum[]
  }

  /**
   * Rabdi findMany
   */
  export type RabdiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rabdi
     */
    select?: RabdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rabdi
     */
    omit?: RabdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RabdiInclude<ExtArgs> | null
    /**
     * Filter, which Rabdis to fetch.
     */
    where?: RabdiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rabdis to fetch.
     */
    orderBy?: RabdiOrderByWithRelationInput | RabdiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rabdis.
     */
    cursor?: RabdiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rabdis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rabdis.
     */
    skip?: number
    distinct?: RabdiScalarFieldEnum | RabdiScalarFieldEnum[]
  }

  /**
   * Rabdi create
   */
  export type RabdiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rabdi
     */
    select?: RabdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rabdi
     */
    omit?: RabdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RabdiInclude<ExtArgs> | null
    /**
     * The data needed to create a Rabdi.
     */
    data: XOR<RabdiCreateInput, RabdiUncheckedCreateInput>
  }

  /**
   * Rabdi createMany
   */
  export type RabdiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rabdis.
     */
    data: RabdiCreateManyInput | RabdiCreateManyInput[]
  }

  /**
   * Rabdi createManyAndReturn
   */
  export type RabdiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rabdi
     */
    select?: RabdiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rabdi
     */
    omit?: RabdiOmit<ExtArgs> | null
    /**
     * The data used to create many Rabdis.
     */
    data: RabdiCreateManyInput | RabdiCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RabdiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rabdi update
   */
  export type RabdiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rabdi
     */
    select?: RabdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rabdi
     */
    omit?: RabdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RabdiInclude<ExtArgs> | null
    /**
     * The data needed to update a Rabdi.
     */
    data: XOR<RabdiUpdateInput, RabdiUncheckedUpdateInput>
    /**
     * Choose, which Rabdi to update.
     */
    where: RabdiWhereUniqueInput
  }

  /**
   * Rabdi updateMany
   */
  export type RabdiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rabdis.
     */
    data: XOR<RabdiUpdateManyMutationInput, RabdiUncheckedUpdateManyInput>
    /**
     * Filter which Rabdis to update
     */
    where?: RabdiWhereInput
    /**
     * Limit how many Rabdis to update.
     */
    limit?: number
  }

  /**
   * Rabdi updateManyAndReturn
   */
  export type RabdiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rabdi
     */
    select?: RabdiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rabdi
     */
    omit?: RabdiOmit<ExtArgs> | null
    /**
     * The data used to update Rabdis.
     */
    data: XOR<RabdiUpdateManyMutationInput, RabdiUncheckedUpdateManyInput>
    /**
     * Filter which Rabdis to update
     */
    where?: RabdiWhereInput
    /**
     * Limit how many Rabdis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RabdiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rabdi upsert
   */
  export type RabdiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rabdi
     */
    select?: RabdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rabdi
     */
    omit?: RabdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RabdiInclude<ExtArgs> | null
    /**
     * The filter to search for the Rabdi to update in case it exists.
     */
    where: RabdiWhereUniqueInput
    /**
     * In case the Rabdi found by the `where` argument doesn't exist, create a new Rabdi with this data.
     */
    create: XOR<RabdiCreateInput, RabdiUncheckedCreateInput>
    /**
     * In case the Rabdi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RabdiUpdateInput, RabdiUncheckedUpdateInput>
  }

  /**
   * Rabdi delete
   */
  export type RabdiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rabdi
     */
    select?: RabdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rabdi
     */
    omit?: RabdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RabdiInclude<ExtArgs> | null
    /**
     * Filter which Rabdi to delete.
     */
    where: RabdiWhereUniqueInput
  }

  /**
   * Rabdi deleteMany
   */
  export type RabdiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rabdis to delete
     */
    where?: RabdiWhereInput
    /**
     * Limit how many Rabdis to delete.
     */
    limit?: number
  }

  /**
   * Rabdi without action
   */
  export type RabdiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rabdi
     */
    select?: RabdiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rabdi
     */
    omit?: RabdiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RabdiInclude<ExtArgs> | null
  }


  /**
   * Model Milk
   */

  export type AggregateMilk = {
    _count: MilkCountAggregateOutputType | null
    _avg: MilkAvgAggregateOutputType | null
    _sum: MilkSumAggregateOutputType | null
    _min: MilkMinAggregateOutputType | null
    _max: MilkMaxAggregateOutputType | null
  }

  export type MilkAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    amountDeposited: number | null
    vendorId: number | null
  }

  export type MilkSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    amountDeposited: number | null
    vendorId: number | null
  }

  export type MilkMinAggregateOutputType = {
    id: number | null
    clerkUserId: string | null
    date: Date | null
    milkType: string | null
    quantity: number | null
    amountDeposited: number | null
    vendorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MilkMaxAggregateOutputType = {
    id: number | null
    clerkUserId: string | null
    date: Date | null
    milkType: string | null
    quantity: number | null
    amountDeposited: number | null
    vendorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MilkCountAggregateOutputType = {
    id: number
    clerkUserId: number
    date: number
    milkType: number
    quantity: number
    amountDeposited: number
    vendorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MilkAvgAggregateInputType = {
    id?: true
    quantity?: true
    amountDeposited?: true
    vendorId?: true
  }

  export type MilkSumAggregateInputType = {
    id?: true
    quantity?: true
    amountDeposited?: true
    vendorId?: true
  }

  export type MilkMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    date?: true
    milkType?: true
    quantity?: true
    amountDeposited?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MilkMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    date?: true
    milkType?: true
    quantity?: true
    amountDeposited?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MilkCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    date?: true
    milkType?: true
    quantity?: true
    amountDeposited?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MilkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milk to aggregate.
     */
    where?: MilkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milks to fetch.
     */
    orderBy?: MilkOrderByWithRelationInput | MilkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MilkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Milks
    **/
    _count?: true | MilkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MilkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MilkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilkMaxAggregateInputType
  }

  export type GetMilkAggregateType<T extends MilkAggregateArgs> = {
        [P in keyof T & keyof AggregateMilk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilk[P]>
      : GetScalarType<T[P], AggregateMilk[P]>
  }




  export type MilkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilkWhereInput
    orderBy?: MilkOrderByWithAggregationInput | MilkOrderByWithAggregationInput[]
    by: MilkScalarFieldEnum[] | MilkScalarFieldEnum
    having?: MilkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilkCountAggregateInputType | true
    _avg?: MilkAvgAggregateInputType
    _sum?: MilkSumAggregateInputType
    _min?: MilkMinAggregateInputType
    _max?: MilkMaxAggregateInputType
  }

  export type MilkGroupByOutputType = {
    id: number
    clerkUserId: string
    date: Date
    milkType: string
    quantity: number
    amountDeposited: number
    vendorId: number
    createdAt: Date
    updatedAt: Date
    _count: MilkCountAggregateOutputType | null
    _avg: MilkAvgAggregateOutputType | null
    _sum: MilkSumAggregateOutputType | null
    _min: MilkMinAggregateOutputType | null
    _max: MilkMaxAggregateOutputType | null
  }

  type GetMilkGroupByPayload<T extends MilkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MilkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilkGroupByOutputType[P]>
            : GetScalarType<T[P], MilkGroupByOutputType[P]>
        }
      >
    >


  export type MilkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    date?: boolean
    milkType?: boolean
    quantity?: boolean
    amountDeposited?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milk"]>

  export type MilkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    date?: boolean
    milkType?: boolean
    quantity?: boolean
    amountDeposited?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milk"]>

  export type MilkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    date?: boolean
    milkType?: boolean
    quantity?: boolean
    amountDeposited?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milk"]>

  export type MilkSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    date?: boolean
    milkType?: boolean
    quantity?: boolean
    amountDeposited?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MilkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkUserId" | "date" | "milkType" | "quantity" | "amountDeposited" | "vendorId" | "createdAt" | "updatedAt", ExtArgs["result"]["milk"]>
  export type MilkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type MilkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type MilkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $MilkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Milk"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clerkUserId: string
      date: Date
      milkType: string
      quantity: number
      amountDeposited: number
      vendorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["milk"]>
    composites: {}
  }

  type MilkGetPayload<S extends boolean | null | undefined | MilkDefaultArgs> = $Result.GetResult<Prisma.$MilkPayload, S>

  type MilkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MilkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MilkCountAggregateInputType | true
    }

  export interface MilkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Milk'], meta: { name: 'Milk' } }
    /**
     * Find zero or one Milk that matches the filter.
     * @param {MilkFindUniqueArgs} args - Arguments to find a Milk
     * @example
     * // Get one Milk
     * const milk = await prisma.milk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MilkFindUniqueArgs>(args: SelectSubset<T, MilkFindUniqueArgs<ExtArgs>>): Prisma__MilkClient<$Result.GetResult<Prisma.$MilkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Milk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MilkFindUniqueOrThrowArgs} args - Arguments to find a Milk
     * @example
     * // Get one Milk
     * const milk = await prisma.milk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MilkFindUniqueOrThrowArgs>(args: SelectSubset<T, MilkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MilkClient<$Result.GetResult<Prisma.$MilkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilkFindFirstArgs} args - Arguments to find a Milk
     * @example
     * // Get one Milk
     * const milk = await prisma.milk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MilkFindFirstArgs>(args?: SelectSubset<T, MilkFindFirstArgs<ExtArgs>>): Prisma__MilkClient<$Result.GetResult<Prisma.$MilkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilkFindFirstOrThrowArgs} args - Arguments to find a Milk
     * @example
     * // Get one Milk
     * const milk = await prisma.milk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MilkFindFirstOrThrowArgs>(args?: SelectSubset<T, MilkFindFirstOrThrowArgs<ExtArgs>>): Prisma__MilkClient<$Result.GetResult<Prisma.$MilkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Milks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Milks
     * const milks = await prisma.milk.findMany()
     * 
     * // Get first 10 Milks
     * const milks = await prisma.milk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milkWithIdOnly = await prisma.milk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MilkFindManyArgs>(args?: SelectSubset<T, MilkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Milk.
     * @param {MilkCreateArgs} args - Arguments to create a Milk.
     * @example
     * // Create one Milk
     * const Milk = await prisma.milk.create({
     *   data: {
     *     // ... data to create a Milk
     *   }
     * })
     * 
     */
    create<T extends MilkCreateArgs>(args: SelectSubset<T, MilkCreateArgs<ExtArgs>>): Prisma__MilkClient<$Result.GetResult<Prisma.$MilkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Milks.
     * @param {MilkCreateManyArgs} args - Arguments to create many Milks.
     * @example
     * // Create many Milks
     * const milk = await prisma.milk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MilkCreateManyArgs>(args?: SelectSubset<T, MilkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Milks and returns the data saved in the database.
     * @param {MilkCreateManyAndReturnArgs} args - Arguments to create many Milks.
     * @example
     * // Create many Milks
     * const milk = await prisma.milk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Milks and only return the `id`
     * const milkWithIdOnly = await prisma.milk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MilkCreateManyAndReturnArgs>(args?: SelectSubset<T, MilkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Milk.
     * @param {MilkDeleteArgs} args - Arguments to delete one Milk.
     * @example
     * // Delete one Milk
     * const Milk = await prisma.milk.delete({
     *   where: {
     *     // ... filter to delete one Milk
     *   }
     * })
     * 
     */
    delete<T extends MilkDeleteArgs>(args: SelectSubset<T, MilkDeleteArgs<ExtArgs>>): Prisma__MilkClient<$Result.GetResult<Prisma.$MilkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Milk.
     * @param {MilkUpdateArgs} args - Arguments to update one Milk.
     * @example
     * // Update one Milk
     * const milk = await prisma.milk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MilkUpdateArgs>(args: SelectSubset<T, MilkUpdateArgs<ExtArgs>>): Prisma__MilkClient<$Result.GetResult<Prisma.$MilkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Milks.
     * @param {MilkDeleteManyArgs} args - Arguments to filter Milks to delete.
     * @example
     * // Delete a few Milks
     * const { count } = await prisma.milk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MilkDeleteManyArgs>(args?: SelectSubset<T, MilkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Milks
     * const milk = await prisma.milk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MilkUpdateManyArgs>(args: SelectSubset<T, MilkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milks and returns the data updated in the database.
     * @param {MilkUpdateManyAndReturnArgs} args - Arguments to update many Milks.
     * @example
     * // Update many Milks
     * const milk = await prisma.milk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Milks and only return the `id`
     * const milkWithIdOnly = await prisma.milk.updateManyAndReturn({
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
    updateManyAndReturn<T extends MilkUpdateManyAndReturnArgs>(args: SelectSubset<T, MilkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Milk.
     * @param {MilkUpsertArgs} args - Arguments to update or create a Milk.
     * @example
     * // Update or create a Milk
     * const milk = await prisma.milk.upsert({
     *   create: {
     *     // ... data to create a Milk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Milk we want to update
     *   }
     * })
     */
    upsert<T extends MilkUpsertArgs>(args: SelectSubset<T, MilkUpsertArgs<ExtArgs>>): Prisma__MilkClient<$Result.GetResult<Prisma.$MilkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Milks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilkCountArgs} args - Arguments to filter Milks to count.
     * @example
     * // Count the number of Milks
     * const count = await prisma.milk.count({
     *   where: {
     *     // ... the filter for the Milks we want to count
     *   }
     * })
    **/
    count<T extends MilkCountArgs>(
      args?: Subset<T, MilkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Milk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MilkAggregateArgs>(args: Subset<T, MilkAggregateArgs>): Prisma.PrismaPromise<GetMilkAggregateType<T>>

    /**
     * Group by Milk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilkGroupByArgs} args - Group by arguments.
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
      T extends MilkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MilkGroupByArgs['orderBy'] }
        : { orderBy?: MilkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MilkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Milk model
   */
  readonly fields: MilkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Milk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MilkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Milk model
   */
  interface MilkFieldRefs {
    readonly id: FieldRef<"Milk", 'Int'>
    readonly clerkUserId: FieldRef<"Milk", 'String'>
    readonly date: FieldRef<"Milk", 'DateTime'>
    readonly milkType: FieldRef<"Milk", 'String'>
    readonly quantity: FieldRef<"Milk", 'Float'>
    readonly amountDeposited: FieldRef<"Milk", 'Float'>
    readonly vendorId: FieldRef<"Milk", 'Int'>
    readonly createdAt: FieldRef<"Milk", 'DateTime'>
    readonly updatedAt: FieldRef<"Milk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Milk findUnique
   */
  export type MilkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milk
     */
    select?: MilkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milk
     */
    omit?: MilkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilkInclude<ExtArgs> | null
    /**
     * Filter, which Milk to fetch.
     */
    where: MilkWhereUniqueInput
  }

  /**
   * Milk findUniqueOrThrow
   */
  export type MilkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milk
     */
    select?: MilkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milk
     */
    omit?: MilkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilkInclude<ExtArgs> | null
    /**
     * Filter, which Milk to fetch.
     */
    where: MilkWhereUniqueInput
  }

  /**
   * Milk findFirst
   */
  export type MilkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milk
     */
    select?: MilkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milk
     */
    omit?: MilkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilkInclude<ExtArgs> | null
    /**
     * Filter, which Milk to fetch.
     */
    where?: MilkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milks to fetch.
     */
    orderBy?: MilkOrderByWithRelationInput | MilkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milks.
     */
    cursor?: MilkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milks.
     */
    distinct?: MilkScalarFieldEnum | MilkScalarFieldEnum[]
  }

  /**
   * Milk findFirstOrThrow
   */
  export type MilkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milk
     */
    select?: MilkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milk
     */
    omit?: MilkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilkInclude<ExtArgs> | null
    /**
     * Filter, which Milk to fetch.
     */
    where?: MilkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milks to fetch.
     */
    orderBy?: MilkOrderByWithRelationInput | MilkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milks.
     */
    cursor?: MilkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milks.
     */
    distinct?: MilkScalarFieldEnum | MilkScalarFieldEnum[]
  }

  /**
   * Milk findMany
   */
  export type MilkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milk
     */
    select?: MilkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milk
     */
    omit?: MilkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilkInclude<ExtArgs> | null
    /**
     * Filter, which Milks to fetch.
     */
    where?: MilkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milks to fetch.
     */
    orderBy?: MilkOrderByWithRelationInput | MilkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Milks.
     */
    cursor?: MilkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milks.
     */
    skip?: number
    distinct?: MilkScalarFieldEnum | MilkScalarFieldEnum[]
  }

  /**
   * Milk create
   */
  export type MilkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milk
     */
    select?: MilkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milk
     */
    omit?: MilkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilkInclude<ExtArgs> | null
    /**
     * The data needed to create a Milk.
     */
    data: XOR<MilkCreateInput, MilkUncheckedCreateInput>
  }

  /**
   * Milk createMany
   */
  export type MilkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Milks.
     */
    data: MilkCreateManyInput | MilkCreateManyInput[]
  }

  /**
   * Milk createManyAndReturn
   */
  export type MilkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milk
     */
    select?: MilkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milk
     */
    omit?: MilkOmit<ExtArgs> | null
    /**
     * The data used to create many Milks.
     */
    data: MilkCreateManyInput | MilkCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milk update
   */
  export type MilkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milk
     */
    select?: MilkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milk
     */
    omit?: MilkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilkInclude<ExtArgs> | null
    /**
     * The data needed to update a Milk.
     */
    data: XOR<MilkUpdateInput, MilkUncheckedUpdateInput>
    /**
     * Choose, which Milk to update.
     */
    where: MilkWhereUniqueInput
  }

  /**
   * Milk updateMany
   */
  export type MilkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Milks.
     */
    data: XOR<MilkUpdateManyMutationInput, MilkUncheckedUpdateManyInput>
    /**
     * Filter which Milks to update
     */
    where?: MilkWhereInput
    /**
     * Limit how many Milks to update.
     */
    limit?: number
  }

  /**
   * Milk updateManyAndReturn
   */
  export type MilkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milk
     */
    select?: MilkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milk
     */
    omit?: MilkOmit<ExtArgs> | null
    /**
     * The data used to update Milks.
     */
    data: XOR<MilkUpdateManyMutationInput, MilkUncheckedUpdateManyInput>
    /**
     * Filter which Milks to update
     */
    where?: MilkWhereInput
    /**
     * Limit how many Milks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milk upsert
   */
  export type MilkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milk
     */
    select?: MilkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milk
     */
    omit?: MilkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilkInclude<ExtArgs> | null
    /**
     * The filter to search for the Milk to update in case it exists.
     */
    where: MilkWhereUniqueInput
    /**
     * In case the Milk found by the `where` argument doesn't exist, create a new Milk with this data.
     */
    create: XOR<MilkCreateInput, MilkUncheckedCreateInput>
    /**
     * In case the Milk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MilkUpdateInput, MilkUncheckedUpdateInput>
  }

  /**
   * Milk delete
   */
  export type MilkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milk
     */
    select?: MilkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milk
     */
    omit?: MilkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilkInclude<ExtArgs> | null
    /**
     * Filter which Milk to delete.
     */
    where: MilkWhereUniqueInput
  }

  /**
   * Milk deleteMany
   */
  export type MilkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milks to delete
     */
    where?: MilkWhereInput
    /**
     * Limit how many Milks to delete.
     */
    limit?: number
  }

  /**
   * Milk without action
   */
  export type MilkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milk
     */
    select?: MilkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milk
     */
    omit?: MilkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilkInclude<ExtArgs> | null
  }


  /**
   * Model Gas
   */

  export type AggregateGas = {
    _count: GasCountAggregateOutputType | null
    _avg: GasAvgAggregateOutputType | null
    _sum: GasSumAggregateOutputType | null
    _min: GasMinAggregateOutputType | null
    _max: GasMaxAggregateOutputType | null
  }

  export type GasAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    rate: number | null
    vendorId: number | null
  }

  export type GasSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    rate: number | null
    vendorId: number | null
  }

  export type GasMinAggregateOutputType = {
    id: number | null
    clerkUserId: string | null
    date: Date | null
    quantity: number | null
    rate: number | null
    vendorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GasMaxAggregateOutputType = {
    id: number | null
    clerkUserId: string | null
    date: Date | null
    quantity: number | null
    rate: number | null
    vendorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GasCountAggregateOutputType = {
    id: number
    clerkUserId: number
    date: number
    quantity: number
    rate: number
    vendorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GasAvgAggregateInputType = {
    id?: true
    quantity?: true
    rate?: true
    vendorId?: true
  }

  export type GasSumAggregateInputType = {
    id?: true
    quantity?: true
    rate?: true
    vendorId?: true
  }

  export type GasMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    date?: true
    quantity?: true
    rate?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GasMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    date?: true
    quantity?: true
    rate?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GasCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    date?: true
    quantity?: true
    rate?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gas to aggregate.
     */
    where?: GasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gases to fetch.
     */
    orderBy?: GasOrderByWithRelationInput | GasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gases
    **/
    _count?: true | GasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GasMaxAggregateInputType
  }

  export type GetGasAggregateType<T extends GasAggregateArgs> = {
        [P in keyof T & keyof AggregateGas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGas[P]>
      : GetScalarType<T[P], AggregateGas[P]>
  }




  export type GasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GasWhereInput
    orderBy?: GasOrderByWithAggregationInput | GasOrderByWithAggregationInput[]
    by: GasScalarFieldEnum[] | GasScalarFieldEnum
    having?: GasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GasCountAggregateInputType | true
    _avg?: GasAvgAggregateInputType
    _sum?: GasSumAggregateInputType
    _min?: GasMinAggregateInputType
    _max?: GasMaxAggregateInputType
  }

  export type GasGroupByOutputType = {
    id: number
    clerkUserId: string
    date: Date
    quantity: number
    rate: number
    vendorId: number
    createdAt: Date
    updatedAt: Date
    _count: GasCountAggregateOutputType | null
    _avg: GasAvgAggregateOutputType | null
    _sum: GasSumAggregateOutputType | null
    _min: GasMinAggregateOutputType | null
    _max: GasMaxAggregateOutputType | null
  }

  type GetGasGroupByPayload<T extends GasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GasGroupByOutputType[P]>
            : GetScalarType<T[P], GasGroupByOutputType[P]>
        }
      >
    >


  export type GasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    date?: boolean
    quantity?: boolean
    rate?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gas"]>

  export type GasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    date?: boolean
    quantity?: boolean
    rate?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gas"]>

  export type GasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    date?: boolean
    quantity?: boolean
    rate?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gas"]>

  export type GasSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    date?: boolean
    quantity?: boolean
    rate?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkUserId" | "date" | "quantity" | "rate" | "vendorId" | "createdAt" | "updatedAt", ExtArgs["result"]["gas"]>
  export type GasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type GasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type GasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $GasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gas"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clerkUserId: string
      date: Date
      quantity: number
      rate: number
      vendorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gas"]>
    composites: {}
  }

  type GasGetPayload<S extends boolean | null | undefined | GasDefaultArgs> = $Result.GetResult<Prisma.$GasPayload, S>

  type GasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GasCountAggregateInputType | true
    }

  export interface GasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gas'], meta: { name: 'Gas' } }
    /**
     * Find zero or one Gas that matches the filter.
     * @param {GasFindUniqueArgs} args - Arguments to find a Gas
     * @example
     * // Get one Gas
     * const gas = await prisma.gas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GasFindUniqueArgs>(args: SelectSubset<T, GasFindUniqueArgs<ExtArgs>>): Prisma__GasClient<$Result.GetResult<Prisma.$GasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GasFindUniqueOrThrowArgs} args - Arguments to find a Gas
     * @example
     * // Get one Gas
     * const gas = await prisma.gas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GasFindUniqueOrThrowArgs>(args: SelectSubset<T, GasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GasClient<$Result.GetResult<Prisma.$GasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GasFindFirstArgs} args - Arguments to find a Gas
     * @example
     * // Get one Gas
     * const gas = await prisma.gas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GasFindFirstArgs>(args?: SelectSubset<T, GasFindFirstArgs<ExtArgs>>): Prisma__GasClient<$Result.GetResult<Prisma.$GasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GasFindFirstOrThrowArgs} args - Arguments to find a Gas
     * @example
     * // Get one Gas
     * const gas = await prisma.gas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GasFindFirstOrThrowArgs>(args?: SelectSubset<T, GasFindFirstOrThrowArgs<ExtArgs>>): Prisma__GasClient<$Result.GetResult<Prisma.$GasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gases
     * const gases = await prisma.gas.findMany()
     * 
     * // Get first 10 Gases
     * const gases = await prisma.gas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gasWithIdOnly = await prisma.gas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GasFindManyArgs>(args?: SelectSubset<T, GasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gas.
     * @param {GasCreateArgs} args - Arguments to create a Gas.
     * @example
     * // Create one Gas
     * const Gas = await prisma.gas.create({
     *   data: {
     *     // ... data to create a Gas
     *   }
     * })
     * 
     */
    create<T extends GasCreateArgs>(args: SelectSubset<T, GasCreateArgs<ExtArgs>>): Prisma__GasClient<$Result.GetResult<Prisma.$GasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gases.
     * @param {GasCreateManyArgs} args - Arguments to create many Gases.
     * @example
     * // Create many Gases
     * const gas = await prisma.gas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GasCreateManyArgs>(args?: SelectSubset<T, GasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gases and returns the data saved in the database.
     * @param {GasCreateManyAndReturnArgs} args - Arguments to create many Gases.
     * @example
     * // Create many Gases
     * const gas = await prisma.gas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gases and only return the `id`
     * const gasWithIdOnly = await prisma.gas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GasCreateManyAndReturnArgs>(args?: SelectSubset<T, GasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gas.
     * @param {GasDeleteArgs} args - Arguments to delete one Gas.
     * @example
     * // Delete one Gas
     * const Gas = await prisma.gas.delete({
     *   where: {
     *     // ... filter to delete one Gas
     *   }
     * })
     * 
     */
    delete<T extends GasDeleteArgs>(args: SelectSubset<T, GasDeleteArgs<ExtArgs>>): Prisma__GasClient<$Result.GetResult<Prisma.$GasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gas.
     * @param {GasUpdateArgs} args - Arguments to update one Gas.
     * @example
     * // Update one Gas
     * const gas = await prisma.gas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GasUpdateArgs>(args: SelectSubset<T, GasUpdateArgs<ExtArgs>>): Prisma__GasClient<$Result.GetResult<Prisma.$GasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gases.
     * @param {GasDeleteManyArgs} args - Arguments to filter Gases to delete.
     * @example
     * // Delete a few Gases
     * const { count } = await prisma.gas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GasDeleteManyArgs>(args?: SelectSubset<T, GasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gases
     * const gas = await prisma.gas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GasUpdateManyArgs>(args: SelectSubset<T, GasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gases and returns the data updated in the database.
     * @param {GasUpdateManyAndReturnArgs} args - Arguments to update many Gases.
     * @example
     * // Update many Gases
     * const gas = await prisma.gas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gases and only return the `id`
     * const gasWithIdOnly = await prisma.gas.updateManyAndReturn({
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
    updateManyAndReturn<T extends GasUpdateManyAndReturnArgs>(args: SelectSubset<T, GasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gas.
     * @param {GasUpsertArgs} args - Arguments to update or create a Gas.
     * @example
     * // Update or create a Gas
     * const gas = await prisma.gas.upsert({
     *   create: {
     *     // ... data to create a Gas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gas we want to update
     *   }
     * })
     */
    upsert<T extends GasUpsertArgs>(args: SelectSubset<T, GasUpsertArgs<ExtArgs>>): Prisma__GasClient<$Result.GetResult<Prisma.$GasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GasCountArgs} args - Arguments to filter Gases to count.
     * @example
     * // Count the number of Gases
     * const count = await prisma.gas.count({
     *   where: {
     *     // ... the filter for the Gases we want to count
     *   }
     * })
    **/
    count<T extends GasCountArgs>(
      args?: Subset<T, GasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GasAggregateArgs>(args: Subset<T, GasAggregateArgs>): Prisma.PrismaPromise<GetGasAggregateType<T>>

    /**
     * Group by Gas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GasGroupByArgs} args - Group by arguments.
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
      T extends GasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GasGroupByArgs['orderBy'] }
        : { orderBy?: GasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gas model
   */
  readonly fields: GasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Gas model
   */
  interface GasFieldRefs {
    readonly id: FieldRef<"Gas", 'Int'>
    readonly clerkUserId: FieldRef<"Gas", 'String'>
    readonly date: FieldRef<"Gas", 'DateTime'>
    readonly quantity: FieldRef<"Gas", 'Float'>
    readonly rate: FieldRef<"Gas", 'Float'>
    readonly vendorId: FieldRef<"Gas", 'Int'>
    readonly createdAt: FieldRef<"Gas", 'DateTime'>
    readonly updatedAt: FieldRef<"Gas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gas findUnique
   */
  export type GasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gas
     */
    select?: GasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gas
     */
    omit?: GasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GasInclude<ExtArgs> | null
    /**
     * Filter, which Gas to fetch.
     */
    where: GasWhereUniqueInput
  }

  /**
   * Gas findUniqueOrThrow
   */
  export type GasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gas
     */
    select?: GasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gas
     */
    omit?: GasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GasInclude<ExtArgs> | null
    /**
     * Filter, which Gas to fetch.
     */
    where: GasWhereUniqueInput
  }

  /**
   * Gas findFirst
   */
  export type GasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gas
     */
    select?: GasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gas
     */
    omit?: GasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GasInclude<ExtArgs> | null
    /**
     * Filter, which Gas to fetch.
     */
    where?: GasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gases to fetch.
     */
    orderBy?: GasOrderByWithRelationInput | GasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gases.
     */
    cursor?: GasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gases.
     */
    distinct?: GasScalarFieldEnum | GasScalarFieldEnum[]
  }

  /**
   * Gas findFirstOrThrow
   */
  export type GasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gas
     */
    select?: GasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gas
     */
    omit?: GasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GasInclude<ExtArgs> | null
    /**
     * Filter, which Gas to fetch.
     */
    where?: GasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gases to fetch.
     */
    orderBy?: GasOrderByWithRelationInput | GasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gases.
     */
    cursor?: GasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gases.
     */
    distinct?: GasScalarFieldEnum | GasScalarFieldEnum[]
  }

  /**
   * Gas findMany
   */
  export type GasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gas
     */
    select?: GasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gas
     */
    omit?: GasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GasInclude<ExtArgs> | null
    /**
     * Filter, which Gases to fetch.
     */
    where?: GasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gases to fetch.
     */
    orderBy?: GasOrderByWithRelationInput | GasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gases.
     */
    cursor?: GasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gases.
     */
    skip?: number
    distinct?: GasScalarFieldEnum | GasScalarFieldEnum[]
  }

  /**
   * Gas create
   */
  export type GasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gas
     */
    select?: GasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gas
     */
    omit?: GasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GasInclude<ExtArgs> | null
    /**
     * The data needed to create a Gas.
     */
    data: XOR<GasCreateInput, GasUncheckedCreateInput>
  }

  /**
   * Gas createMany
   */
  export type GasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gases.
     */
    data: GasCreateManyInput | GasCreateManyInput[]
  }

  /**
   * Gas createManyAndReturn
   */
  export type GasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gas
     */
    select?: GasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gas
     */
    omit?: GasOmit<ExtArgs> | null
    /**
     * The data used to create many Gases.
     */
    data: GasCreateManyInput | GasCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gas update
   */
  export type GasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gas
     */
    select?: GasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gas
     */
    omit?: GasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GasInclude<ExtArgs> | null
    /**
     * The data needed to update a Gas.
     */
    data: XOR<GasUpdateInput, GasUncheckedUpdateInput>
    /**
     * Choose, which Gas to update.
     */
    where: GasWhereUniqueInput
  }

  /**
   * Gas updateMany
   */
  export type GasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gases.
     */
    data: XOR<GasUpdateManyMutationInput, GasUncheckedUpdateManyInput>
    /**
     * Filter which Gases to update
     */
    where?: GasWhereInput
    /**
     * Limit how many Gases to update.
     */
    limit?: number
  }

  /**
   * Gas updateManyAndReturn
   */
  export type GasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gas
     */
    select?: GasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gas
     */
    omit?: GasOmit<ExtArgs> | null
    /**
     * The data used to update Gases.
     */
    data: XOR<GasUpdateManyMutationInput, GasUncheckedUpdateManyInput>
    /**
     * Filter which Gases to update
     */
    where?: GasWhereInput
    /**
     * Limit how many Gases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gas upsert
   */
  export type GasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gas
     */
    select?: GasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gas
     */
    omit?: GasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GasInclude<ExtArgs> | null
    /**
     * The filter to search for the Gas to update in case it exists.
     */
    where: GasWhereUniqueInput
    /**
     * In case the Gas found by the `where` argument doesn't exist, create a new Gas with this data.
     */
    create: XOR<GasCreateInput, GasUncheckedCreateInput>
    /**
     * In case the Gas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GasUpdateInput, GasUncheckedUpdateInput>
  }

  /**
   * Gas delete
   */
  export type GasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gas
     */
    select?: GasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gas
     */
    omit?: GasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GasInclude<ExtArgs> | null
    /**
     * Filter which Gas to delete.
     */
    where: GasWhereUniqueInput
  }

  /**
   * Gas deleteMany
   */
  export type GasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gases to delete
     */
    where?: GasWhereInput
    /**
     * Limit how many Gases to delete.
     */
    limit?: number
  }

  /**
   * Gas without action
   */
  export type GasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gas
     */
    select?: GasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gas
     */
    omit?: GasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GasInclude<ExtArgs> | null
  }


  /**
   * Model Bill
   */

  export type AggregateBill = {
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  export type BillAvgAggregateOutputType = {
    id: number | null
    totalRabdi: number | null
    rabdiBill: number | null
    totalMilk: number | null
    totalMilkFat: number | null
    totalMilkWithoutFat: number | null
    milkFatBill: number | null
    milkWithoutFatBill: number | null
    totalMilkBill: number | null
    totalGas: number | null
    gasBill: number | null
  }

  export type BillSumAggregateOutputType = {
    id: number | null
    totalRabdi: number | null
    rabdiBill: number | null
    totalMilk: number | null
    totalMilkFat: number | null
    totalMilkWithoutFat: number | null
    milkFatBill: number | null
    milkWithoutFatBill: number | null
    totalMilkBill: number | null
    totalGas: number | null
    gasBill: number | null
  }

  export type BillMinAggregateOutputType = {
    id: number | null
    clerkUserId: string | null
    startDate: Date | null
    endDate: Date | null
    totalRabdi: number | null
    rabdiBill: number | null
    totalMilk: number | null
    totalMilkFat: number | null
    totalMilkWithoutFat: number | null
    milkFatBill: number | null
    milkWithoutFatBill: number | null
    totalMilkBill: number | null
    totalGas: number | null
    gasBill: number | null
    createdAt: Date | null
  }

  export type BillMaxAggregateOutputType = {
    id: number | null
    clerkUserId: string | null
    startDate: Date | null
    endDate: Date | null
    totalRabdi: number | null
    rabdiBill: number | null
    totalMilk: number | null
    totalMilkFat: number | null
    totalMilkWithoutFat: number | null
    milkFatBill: number | null
    milkWithoutFatBill: number | null
    totalMilkBill: number | null
    totalGas: number | null
    gasBill: number | null
    createdAt: Date | null
  }

  export type BillCountAggregateOutputType = {
    id: number
    clerkUserId: number
    startDate: number
    endDate: number
    totalRabdi: number
    rabdiBill: number
    totalMilk: number
    totalMilkFat: number
    totalMilkWithoutFat: number
    milkFatBill: number
    milkWithoutFatBill: number
    totalMilkBill: number
    totalGas: number
    gasBill: number
    createdAt: number
    _all: number
  }


  export type BillAvgAggregateInputType = {
    id?: true
    totalRabdi?: true
    rabdiBill?: true
    totalMilk?: true
    totalMilkFat?: true
    totalMilkWithoutFat?: true
    milkFatBill?: true
    milkWithoutFatBill?: true
    totalMilkBill?: true
    totalGas?: true
    gasBill?: true
  }

  export type BillSumAggregateInputType = {
    id?: true
    totalRabdi?: true
    rabdiBill?: true
    totalMilk?: true
    totalMilkFat?: true
    totalMilkWithoutFat?: true
    milkFatBill?: true
    milkWithoutFatBill?: true
    totalMilkBill?: true
    totalGas?: true
    gasBill?: true
  }

  export type BillMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    startDate?: true
    endDate?: true
    totalRabdi?: true
    rabdiBill?: true
    totalMilk?: true
    totalMilkFat?: true
    totalMilkWithoutFat?: true
    milkFatBill?: true
    milkWithoutFatBill?: true
    totalMilkBill?: true
    totalGas?: true
    gasBill?: true
    createdAt?: true
  }

  export type BillMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    startDate?: true
    endDate?: true
    totalRabdi?: true
    rabdiBill?: true
    totalMilk?: true
    totalMilkFat?: true
    totalMilkWithoutFat?: true
    milkFatBill?: true
    milkWithoutFatBill?: true
    totalMilkBill?: true
    totalGas?: true
    gasBill?: true
    createdAt?: true
  }

  export type BillCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    startDate?: true
    endDate?: true
    totalRabdi?: true
    rabdiBill?: true
    totalMilk?: true
    totalMilkFat?: true
    totalMilkWithoutFat?: true
    milkFatBill?: true
    milkWithoutFatBill?: true
    totalMilkBill?: true
    totalGas?: true
    gasBill?: true
    createdAt?: true
    _all?: true
  }

  export type BillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bill to aggregate.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillMaxAggregateInputType
  }

  export type GetBillAggregateType<T extends BillAggregateArgs> = {
        [P in keyof T & keyof AggregateBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill[P]>
      : GetScalarType<T[P], AggregateBill[P]>
  }




  export type BillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
    orderBy?: BillOrderByWithAggregationInput | BillOrderByWithAggregationInput[]
    by: BillScalarFieldEnum[] | BillScalarFieldEnum
    having?: BillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillCountAggregateInputType | true
    _avg?: BillAvgAggregateInputType
    _sum?: BillSumAggregateInputType
    _min?: BillMinAggregateInputType
    _max?: BillMaxAggregateInputType
  }

  export type BillGroupByOutputType = {
    id: number
    clerkUserId: string
    startDate: Date
    endDate: Date
    totalRabdi: number
    rabdiBill: number
    totalMilk: number
    totalMilkFat: number
    totalMilkWithoutFat: number
    milkFatBill: number
    milkWithoutFatBill: number
    totalMilkBill: number
    totalGas: number
    gasBill: number
    createdAt: Date
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  type GetBillGroupByPayload<T extends BillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillGroupByOutputType[P]>
            : GetScalarType<T[P], BillGroupByOutputType[P]>
        }
      >
    >


  export type BillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalRabdi?: boolean
    rabdiBill?: boolean
    totalMilk?: boolean
    totalMilkFat?: boolean
    totalMilkWithoutFat?: boolean
    milkFatBill?: boolean
    milkWithoutFatBill?: boolean
    totalMilkBill?: boolean
    totalGas?: boolean
    gasBill?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bill"]>

  export type BillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalRabdi?: boolean
    rabdiBill?: boolean
    totalMilk?: boolean
    totalMilkFat?: boolean
    totalMilkWithoutFat?: boolean
    milkFatBill?: boolean
    milkWithoutFatBill?: boolean
    totalMilkBill?: boolean
    totalGas?: boolean
    gasBill?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bill"]>

  export type BillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalRabdi?: boolean
    rabdiBill?: boolean
    totalMilk?: boolean
    totalMilkFat?: boolean
    totalMilkWithoutFat?: boolean
    milkFatBill?: boolean
    milkWithoutFatBill?: boolean
    totalMilkBill?: boolean
    totalGas?: boolean
    gasBill?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bill"]>

  export type BillSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalRabdi?: boolean
    rabdiBill?: boolean
    totalMilk?: boolean
    totalMilkFat?: boolean
    totalMilkWithoutFat?: boolean
    milkFatBill?: boolean
    milkWithoutFatBill?: boolean
    totalMilkBill?: boolean
    totalGas?: boolean
    gasBill?: boolean
    createdAt?: boolean
  }

  export type BillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkUserId" | "startDate" | "endDate" | "totalRabdi" | "rabdiBill" | "totalMilk" | "totalMilkFat" | "totalMilkWithoutFat" | "milkFatBill" | "milkWithoutFatBill" | "totalMilkBill" | "totalGas" | "gasBill" | "createdAt", ExtArgs["result"]["bill"]>

  export type $BillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bill"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clerkUserId: string
      startDate: Date
      endDate: Date
      totalRabdi: number
      rabdiBill: number
      totalMilk: number
      totalMilkFat: number
      totalMilkWithoutFat: number
      milkFatBill: number
      milkWithoutFatBill: number
      totalMilkBill: number
      totalGas: number
      gasBill: number
      createdAt: Date
    }, ExtArgs["result"]["bill"]>
    composites: {}
  }

  type BillGetPayload<S extends boolean | null | undefined | BillDefaultArgs> = $Result.GetResult<Prisma.$BillPayload, S>

  type BillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillCountAggregateInputType | true
    }

  export interface BillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bill'], meta: { name: 'Bill' } }
    /**
     * Find zero or one Bill that matches the filter.
     * @param {BillFindUniqueArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillFindUniqueArgs>(args: SelectSubset<T, BillFindUniqueArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillFindUniqueOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillFindUniqueOrThrowArgs>(args: SelectSubset<T, BillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillFindFirstArgs>(args?: SelectSubset<T, BillFindFirstArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillFindFirstOrThrowArgs>(args?: SelectSubset<T, BillFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bill.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billWithIdOnly = await prisma.bill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillFindManyArgs>(args?: SelectSubset<T, BillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bill.
     * @param {BillCreateArgs} args - Arguments to create a Bill.
     * @example
     * // Create one Bill
     * const Bill = await prisma.bill.create({
     *   data: {
     *     // ... data to create a Bill
     *   }
     * })
     * 
     */
    create<T extends BillCreateArgs>(args: SelectSubset<T, BillCreateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bills.
     * @param {BillCreateManyArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillCreateManyArgs>(args?: SelectSubset<T, BillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bills and returns the data saved in the database.
     * @param {BillCreateManyAndReturnArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bills and only return the `id`
     * const billWithIdOnly = await prisma.bill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillCreateManyAndReturnArgs>(args?: SelectSubset<T, BillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bill.
     * @param {BillDeleteArgs} args - Arguments to delete one Bill.
     * @example
     * // Delete one Bill
     * const Bill = await prisma.bill.delete({
     *   where: {
     *     // ... filter to delete one Bill
     *   }
     * })
     * 
     */
    delete<T extends BillDeleteArgs>(args: SelectSubset<T, BillDeleteArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bill.
     * @param {BillUpdateArgs} args - Arguments to update one Bill.
     * @example
     * // Update one Bill
     * const bill = await prisma.bill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillUpdateArgs>(args: SelectSubset<T, BillUpdateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bills.
     * @param {BillDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillDeleteManyArgs>(args?: SelectSubset<T, BillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillUpdateManyArgs>(args: SelectSubset<T, BillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills and returns the data updated in the database.
     * @param {BillUpdateManyAndReturnArgs} args - Arguments to update many Bills.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bills and only return the `id`
     * const billWithIdOnly = await prisma.bill.updateManyAndReturn({
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
    updateManyAndReturn<T extends BillUpdateManyAndReturnArgs>(args: SelectSubset<T, BillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bill.
     * @param {BillUpsertArgs} args - Arguments to update or create a Bill.
     * @example
     * // Update or create a Bill
     * const bill = await prisma.bill.upsert({
     *   create: {
     *     // ... data to create a Bill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill we want to update
     *   }
     * })
     */
    upsert<T extends BillUpsertArgs>(args: SelectSubset<T, BillUpsertArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bill.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillCountArgs>(
      args?: Subset<T, BillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillAggregateArgs>(args: Subset<T, BillAggregateArgs>): Prisma.PrismaPromise<GetBillAggregateType<T>>

    /**
     * Group by Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillGroupByArgs} args - Group by arguments.
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
      T extends BillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillGroupByArgs['orderBy'] }
        : { orderBy?: BillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bill model
   */
  readonly fields: BillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Bill model
   */
  interface BillFieldRefs {
    readonly id: FieldRef<"Bill", 'Int'>
    readonly clerkUserId: FieldRef<"Bill", 'String'>
    readonly startDate: FieldRef<"Bill", 'DateTime'>
    readonly endDate: FieldRef<"Bill", 'DateTime'>
    readonly totalRabdi: FieldRef<"Bill", 'Float'>
    readonly rabdiBill: FieldRef<"Bill", 'Float'>
    readonly totalMilk: FieldRef<"Bill", 'Float'>
    readonly totalMilkFat: FieldRef<"Bill", 'Float'>
    readonly totalMilkWithoutFat: FieldRef<"Bill", 'Float'>
    readonly milkFatBill: FieldRef<"Bill", 'Float'>
    readonly milkWithoutFatBill: FieldRef<"Bill", 'Float'>
    readonly totalMilkBill: FieldRef<"Bill", 'Float'>
    readonly totalGas: FieldRef<"Bill", 'Float'>
    readonly gasBill: FieldRef<"Bill", 'Float'>
    readonly createdAt: FieldRef<"Bill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bill findUnique
   */
  export type BillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findUniqueOrThrow
   */
  export type BillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findFirst
   */
  export type BillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findFirstOrThrow
   */
  export type BillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findMany
   */
  export type BillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill create
   */
  export type BillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data needed to create a Bill.
     */
    data: XOR<BillCreateInput, BillUncheckedCreateInput>
  }

  /**
   * Bill createMany
   */
  export type BillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
  }

  /**
   * Bill createManyAndReturn
   */
  export type BillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
  }

  /**
   * Bill update
   */
  export type BillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data needed to update a Bill.
     */
    data: XOR<BillUpdateInput, BillUncheckedUpdateInput>
    /**
     * Choose, which Bill to update.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill updateMany
   */
  export type BillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
  }

  /**
   * Bill updateManyAndReturn
   */
  export type BillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
  }

  /**
   * Bill upsert
   */
  export type BillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The filter to search for the Bill to update in case it exists.
     */
    where: BillWhereUniqueInput
    /**
     * In case the Bill found by the `where` argument doesn't exist, create a new Bill with this data.
     */
    create: XOR<BillCreateInput, BillUncheckedCreateInput>
    /**
     * In case the Bill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillUpdateInput, BillUncheckedUpdateInput>
  }

  /**
   * Bill delete
   */
  export type BillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Filter which Bill to delete.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill deleteMany
   */
  export type BillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to delete
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to delete.
     */
    limit?: number
  }

  /**
   * Bill without action
   */
  export type BillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VendorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    vendorType: 'vendorType',
    clerkUserId: 'clerkUserId'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const RabdiScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    date: 'date',
    quantity: 'quantity',
    amountDeposited: 'amountDeposited',
    vendorId: 'vendorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RabdiScalarFieldEnum = (typeof RabdiScalarFieldEnum)[keyof typeof RabdiScalarFieldEnum]


  export const MilkScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    date: 'date',
    milkType: 'milkType',
    quantity: 'quantity',
    amountDeposited: 'amountDeposited',
    vendorId: 'vendorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MilkScalarFieldEnum = (typeof MilkScalarFieldEnum)[keyof typeof MilkScalarFieldEnum]


  export const GasScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    date: 'date',
    quantity: 'quantity',
    rate: 'rate',
    vendorId: 'vendorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GasScalarFieldEnum = (typeof GasScalarFieldEnum)[keyof typeof GasScalarFieldEnum]


  export const BillScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    startDate: 'startDate',
    endDate: 'endDate',
    totalRabdi: 'totalRabdi',
    rabdiBill: 'rabdiBill',
    totalMilk: 'totalMilk',
    totalMilkFat: 'totalMilkFat',
    totalMilkWithoutFat: 'totalMilkWithoutFat',
    milkFatBill: 'milkFatBill',
    milkWithoutFatBill: 'milkWithoutFatBill',
    totalMilkBill: 'totalMilkBill',
    totalGas: 'totalGas',
    gasBill: 'gasBill',
    createdAt: 'createdAt'
  };

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    id?: IntFilter<"Vendor"> | number
    name?: StringFilter<"Vendor"> | string
    vendorType?: StringFilter<"Vendor"> | string
    clerkUserId?: StringFilter<"Vendor"> | string
    rabdis?: RabdiListRelationFilter
    milks?: MilkListRelationFilter
    gases?: GasListRelationFilter
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    vendorType?: SortOrder
    clerkUserId?: SortOrder
    rabdis?: RabdiOrderByRelationAggregateInput
    milks?: MilkOrderByRelationAggregateInput
    gases?: GasOrderByRelationAggregateInput
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    name?: StringFilter<"Vendor"> | string
    vendorType?: StringFilter<"Vendor"> | string
    clerkUserId?: StringFilter<"Vendor"> | string
    rabdis?: RabdiListRelationFilter
    milks?: MilkListRelationFilter
    gases?: GasListRelationFilter
  }, "id">

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    vendorType?: SortOrder
    clerkUserId?: SortOrder
    _count?: VendorCountOrderByAggregateInput
    _avg?: VendorAvgOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
    _sum?: VendorSumOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vendor"> | number
    name?: StringWithAggregatesFilter<"Vendor"> | string
    vendorType?: StringWithAggregatesFilter<"Vendor"> | string
    clerkUserId?: StringWithAggregatesFilter<"Vendor"> | string
  }

  export type RabdiWhereInput = {
    AND?: RabdiWhereInput | RabdiWhereInput[]
    OR?: RabdiWhereInput[]
    NOT?: RabdiWhereInput | RabdiWhereInput[]
    id?: IntFilter<"Rabdi"> | number
    clerkUserId?: StringFilter<"Rabdi"> | string
    date?: DateTimeFilter<"Rabdi"> | Date | string
    quantity?: FloatFilter<"Rabdi"> | number
    amountDeposited?: FloatFilter<"Rabdi"> | number
    vendorId?: IntFilter<"Rabdi"> | number
    createdAt?: DateTimeFilter<"Rabdi"> | Date | string
    updatedAt?: DateTimeFilter<"Rabdi"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }

  export type RabdiOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    date?: SortOrder
    quantity?: SortOrder
    amountDeposited?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendor?: VendorOrderByWithRelationInput
  }

  export type RabdiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RabdiWhereInput | RabdiWhereInput[]
    OR?: RabdiWhereInput[]
    NOT?: RabdiWhereInput | RabdiWhereInput[]
    clerkUserId?: StringFilter<"Rabdi"> | string
    date?: DateTimeFilter<"Rabdi"> | Date | string
    quantity?: FloatFilter<"Rabdi"> | number
    amountDeposited?: FloatFilter<"Rabdi"> | number
    vendorId?: IntFilter<"Rabdi"> | number
    createdAt?: DateTimeFilter<"Rabdi"> | Date | string
    updatedAt?: DateTimeFilter<"Rabdi"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }, "id">

  export type RabdiOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    date?: SortOrder
    quantity?: SortOrder
    amountDeposited?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RabdiCountOrderByAggregateInput
    _avg?: RabdiAvgOrderByAggregateInput
    _max?: RabdiMaxOrderByAggregateInput
    _min?: RabdiMinOrderByAggregateInput
    _sum?: RabdiSumOrderByAggregateInput
  }

  export type RabdiScalarWhereWithAggregatesInput = {
    AND?: RabdiScalarWhereWithAggregatesInput | RabdiScalarWhereWithAggregatesInput[]
    OR?: RabdiScalarWhereWithAggregatesInput[]
    NOT?: RabdiScalarWhereWithAggregatesInput | RabdiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rabdi"> | number
    clerkUserId?: StringWithAggregatesFilter<"Rabdi"> | string
    date?: DateTimeWithAggregatesFilter<"Rabdi"> | Date | string
    quantity?: FloatWithAggregatesFilter<"Rabdi"> | number
    amountDeposited?: FloatWithAggregatesFilter<"Rabdi"> | number
    vendorId?: IntWithAggregatesFilter<"Rabdi"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Rabdi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rabdi"> | Date | string
  }

  export type MilkWhereInput = {
    AND?: MilkWhereInput | MilkWhereInput[]
    OR?: MilkWhereInput[]
    NOT?: MilkWhereInput | MilkWhereInput[]
    id?: IntFilter<"Milk"> | number
    clerkUserId?: StringFilter<"Milk"> | string
    date?: DateTimeFilter<"Milk"> | Date | string
    milkType?: StringFilter<"Milk"> | string
    quantity?: FloatFilter<"Milk"> | number
    amountDeposited?: FloatFilter<"Milk"> | number
    vendorId?: IntFilter<"Milk"> | number
    createdAt?: DateTimeFilter<"Milk"> | Date | string
    updatedAt?: DateTimeFilter<"Milk"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }

  export type MilkOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    date?: SortOrder
    milkType?: SortOrder
    quantity?: SortOrder
    amountDeposited?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendor?: VendorOrderByWithRelationInput
  }

  export type MilkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MilkWhereInput | MilkWhereInput[]
    OR?: MilkWhereInput[]
    NOT?: MilkWhereInput | MilkWhereInput[]
    clerkUserId?: StringFilter<"Milk"> | string
    date?: DateTimeFilter<"Milk"> | Date | string
    milkType?: StringFilter<"Milk"> | string
    quantity?: FloatFilter<"Milk"> | number
    amountDeposited?: FloatFilter<"Milk"> | number
    vendorId?: IntFilter<"Milk"> | number
    createdAt?: DateTimeFilter<"Milk"> | Date | string
    updatedAt?: DateTimeFilter<"Milk"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }, "id">

  export type MilkOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    date?: SortOrder
    milkType?: SortOrder
    quantity?: SortOrder
    amountDeposited?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MilkCountOrderByAggregateInput
    _avg?: MilkAvgOrderByAggregateInput
    _max?: MilkMaxOrderByAggregateInput
    _min?: MilkMinOrderByAggregateInput
    _sum?: MilkSumOrderByAggregateInput
  }

  export type MilkScalarWhereWithAggregatesInput = {
    AND?: MilkScalarWhereWithAggregatesInput | MilkScalarWhereWithAggregatesInput[]
    OR?: MilkScalarWhereWithAggregatesInput[]
    NOT?: MilkScalarWhereWithAggregatesInput | MilkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Milk"> | number
    clerkUserId?: StringWithAggregatesFilter<"Milk"> | string
    date?: DateTimeWithAggregatesFilter<"Milk"> | Date | string
    milkType?: StringWithAggregatesFilter<"Milk"> | string
    quantity?: FloatWithAggregatesFilter<"Milk"> | number
    amountDeposited?: FloatWithAggregatesFilter<"Milk"> | number
    vendorId?: IntWithAggregatesFilter<"Milk"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Milk"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Milk"> | Date | string
  }

  export type GasWhereInput = {
    AND?: GasWhereInput | GasWhereInput[]
    OR?: GasWhereInput[]
    NOT?: GasWhereInput | GasWhereInput[]
    id?: IntFilter<"Gas"> | number
    clerkUserId?: StringFilter<"Gas"> | string
    date?: DateTimeFilter<"Gas"> | Date | string
    quantity?: FloatFilter<"Gas"> | number
    rate?: FloatFilter<"Gas"> | number
    vendorId?: IntFilter<"Gas"> | number
    createdAt?: DateTimeFilter<"Gas"> | Date | string
    updatedAt?: DateTimeFilter<"Gas"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }

  export type GasOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    date?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendor?: VendorOrderByWithRelationInput
  }

  export type GasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GasWhereInput | GasWhereInput[]
    OR?: GasWhereInput[]
    NOT?: GasWhereInput | GasWhereInput[]
    clerkUserId?: StringFilter<"Gas"> | string
    date?: DateTimeFilter<"Gas"> | Date | string
    quantity?: FloatFilter<"Gas"> | number
    rate?: FloatFilter<"Gas"> | number
    vendorId?: IntFilter<"Gas"> | number
    createdAt?: DateTimeFilter<"Gas"> | Date | string
    updatedAt?: DateTimeFilter<"Gas"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }, "id">

  export type GasOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    date?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GasCountOrderByAggregateInput
    _avg?: GasAvgOrderByAggregateInput
    _max?: GasMaxOrderByAggregateInput
    _min?: GasMinOrderByAggregateInput
    _sum?: GasSumOrderByAggregateInput
  }

  export type GasScalarWhereWithAggregatesInput = {
    AND?: GasScalarWhereWithAggregatesInput | GasScalarWhereWithAggregatesInput[]
    OR?: GasScalarWhereWithAggregatesInput[]
    NOT?: GasScalarWhereWithAggregatesInput | GasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gas"> | number
    clerkUserId?: StringWithAggregatesFilter<"Gas"> | string
    date?: DateTimeWithAggregatesFilter<"Gas"> | Date | string
    quantity?: FloatWithAggregatesFilter<"Gas"> | number
    rate?: FloatWithAggregatesFilter<"Gas"> | number
    vendorId?: IntWithAggregatesFilter<"Gas"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Gas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Gas"> | Date | string
  }

  export type BillWhereInput = {
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    id?: IntFilter<"Bill"> | number
    clerkUserId?: StringFilter<"Bill"> | string
    startDate?: DateTimeFilter<"Bill"> | Date | string
    endDate?: DateTimeFilter<"Bill"> | Date | string
    totalRabdi?: FloatFilter<"Bill"> | number
    rabdiBill?: FloatFilter<"Bill"> | number
    totalMilk?: FloatFilter<"Bill"> | number
    totalMilkFat?: FloatFilter<"Bill"> | number
    totalMilkWithoutFat?: FloatFilter<"Bill"> | number
    milkFatBill?: FloatFilter<"Bill"> | number
    milkWithoutFatBill?: FloatFilter<"Bill"> | number
    totalMilkBill?: FloatFilter<"Bill"> | number
    totalGas?: FloatFilter<"Bill"> | number
    gasBill?: FloatFilter<"Bill"> | number
    createdAt?: DateTimeFilter<"Bill"> | Date | string
  }

  export type BillOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalRabdi?: SortOrder
    rabdiBill?: SortOrder
    totalMilk?: SortOrder
    totalMilkFat?: SortOrder
    totalMilkWithoutFat?: SortOrder
    milkFatBill?: SortOrder
    milkWithoutFatBill?: SortOrder
    totalMilkBill?: SortOrder
    totalGas?: SortOrder
    gasBill?: SortOrder
    createdAt?: SortOrder
  }

  export type BillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    clerkUserId?: StringFilter<"Bill"> | string
    startDate?: DateTimeFilter<"Bill"> | Date | string
    endDate?: DateTimeFilter<"Bill"> | Date | string
    totalRabdi?: FloatFilter<"Bill"> | number
    rabdiBill?: FloatFilter<"Bill"> | number
    totalMilk?: FloatFilter<"Bill"> | number
    totalMilkFat?: FloatFilter<"Bill"> | number
    totalMilkWithoutFat?: FloatFilter<"Bill"> | number
    milkFatBill?: FloatFilter<"Bill"> | number
    milkWithoutFatBill?: FloatFilter<"Bill"> | number
    totalMilkBill?: FloatFilter<"Bill"> | number
    totalGas?: FloatFilter<"Bill"> | number
    gasBill?: FloatFilter<"Bill"> | number
    createdAt?: DateTimeFilter<"Bill"> | Date | string
  }, "id">

  export type BillOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalRabdi?: SortOrder
    rabdiBill?: SortOrder
    totalMilk?: SortOrder
    totalMilkFat?: SortOrder
    totalMilkWithoutFat?: SortOrder
    milkFatBill?: SortOrder
    milkWithoutFatBill?: SortOrder
    totalMilkBill?: SortOrder
    totalGas?: SortOrder
    gasBill?: SortOrder
    createdAt?: SortOrder
    _count?: BillCountOrderByAggregateInput
    _avg?: BillAvgOrderByAggregateInput
    _max?: BillMaxOrderByAggregateInput
    _min?: BillMinOrderByAggregateInput
    _sum?: BillSumOrderByAggregateInput
  }

  export type BillScalarWhereWithAggregatesInput = {
    AND?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    OR?: BillScalarWhereWithAggregatesInput[]
    NOT?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bill"> | number
    clerkUserId?: StringWithAggregatesFilter<"Bill"> | string
    startDate?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    totalRabdi?: FloatWithAggregatesFilter<"Bill"> | number
    rabdiBill?: FloatWithAggregatesFilter<"Bill"> | number
    totalMilk?: FloatWithAggregatesFilter<"Bill"> | number
    totalMilkFat?: FloatWithAggregatesFilter<"Bill"> | number
    totalMilkWithoutFat?: FloatWithAggregatesFilter<"Bill"> | number
    milkFatBill?: FloatWithAggregatesFilter<"Bill"> | number
    milkWithoutFatBill?: FloatWithAggregatesFilter<"Bill"> | number
    totalMilkBill?: FloatWithAggregatesFilter<"Bill"> | number
    totalGas?: FloatWithAggregatesFilter<"Bill"> | number
    gasBill?: FloatWithAggregatesFilter<"Bill"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
  }

  export type VendorCreateInput = {
    name: string
    vendorType: string
    clerkUserId: string
    rabdis?: RabdiCreateNestedManyWithoutVendorInput
    milks?: MilkCreateNestedManyWithoutVendorInput
    gases?: GasCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: number
    name: string
    vendorType: string
    clerkUserId: string
    rabdis?: RabdiUncheckedCreateNestedManyWithoutVendorInput
    milks?: MilkUncheckedCreateNestedManyWithoutVendorInput
    gases?: GasUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    vendorType?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    rabdis?: RabdiUpdateManyWithoutVendorNestedInput
    milks?: MilkUpdateManyWithoutVendorNestedInput
    gases?: GasUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vendorType?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    rabdis?: RabdiUncheckedUpdateManyWithoutVendorNestedInput
    milks?: MilkUncheckedUpdateManyWithoutVendorNestedInput
    gases?: GasUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    id?: number
    name: string
    vendorType: string
    clerkUserId: string
  }

  export type VendorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    vendorType?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vendorType?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
  }

  export type RabdiCreateInput = {
    clerkUserId: string
    date: Date | string
    quantity: number
    amountDeposited?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutRabdisInput
  }

  export type RabdiUncheckedCreateInput = {
    id?: number
    clerkUserId: string
    date: Date | string
    quantity: number
    amountDeposited?: number
    vendorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RabdiUpdateInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: FloatFieldUpdateOperationsInput | number
    amountDeposited?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutRabdisNestedInput
  }

  export type RabdiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: FloatFieldUpdateOperationsInput | number
    amountDeposited?: FloatFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RabdiCreateManyInput = {
    id?: number
    clerkUserId: string
    date: Date | string
    quantity: number
    amountDeposited?: number
    vendorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RabdiUpdateManyMutationInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: FloatFieldUpdateOperationsInput | number
    amountDeposited?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RabdiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: FloatFieldUpdateOperationsInput | number
    amountDeposited?: FloatFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilkCreateInput = {
    clerkUserId: string
    date: Date | string
    milkType: string
    quantity: number
    amountDeposited?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutMilksInput
  }

  export type MilkUncheckedCreateInput = {
    id?: number
    clerkUserId: string
    date: Date | string
    milkType: string
    quantity: number
    amountDeposited?: number
    vendorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilkUpdateInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    milkType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    amountDeposited?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutMilksNestedInput
  }

  export type MilkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    milkType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    amountDeposited?: FloatFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilkCreateManyInput = {
    id?: number
    clerkUserId: string
    date: Date | string
    milkType: string
    quantity: number
    amountDeposited?: number
    vendorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilkUpdateManyMutationInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    milkType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    amountDeposited?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    milkType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    amountDeposited?: FloatFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GasCreateInput = {
    clerkUserId: string
    date: Date | string
    quantity: number
    rate: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutGasesInput
  }

  export type GasUncheckedCreateInput = {
    id?: number
    clerkUserId: string
    date: Date | string
    quantity: number
    rate: number
    vendorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GasUpdateInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutGasesNestedInput
  }

  export type GasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GasCreateManyInput = {
    id?: number
    clerkUserId: string
    date: Date | string
    quantity: number
    rate: number
    vendorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GasUpdateManyMutationInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillCreateInput = {
    clerkUserId: string
    startDate: Date | string
    endDate: Date | string
    totalRabdi: number
    rabdiBill: number
    totalMilk: number
    totalMilkFat: number
    totalMilkWithoutFat: number
    milkFatBill: number
    milkWithoutFatBill: number
    totalMilkBill?: number
    totalGas: number
    gasBill: number
    createdAt?: Date | string
  }

  export type BillUncheckedCreateInput = {
    id?: number
    clerkUserId: string
    startDate: Date | string
    endDate: Date | string
    totalRabdi: number
    rabdiBill: number
    totalMilk: number
    totalMilkFat: number
    totalMilkWithoutFat: number
    milkFatBill: number
    milkWithoutFatBill: number
    totalMilkBill?: number
    totalGas: number
    gasBill: number
    createdAt?: Date | string
  }

  export type BillUpdateInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalRabdi?: FloatFieldUpdateOperationsInput | number
    rabdiBill?: FloatFieldUpdateOperationsInput | number
    totalMilk?: FloatFieldUpdateOperationsInput | number
    totalMilkFat?: FloatFieldUpdateOperationsInput | number
    totalMilkWithoutFat?: FloatFieldUpdateOperationsInput | number
    milkFatBill?: FloatFieldUpdateOperationsInput | number
    milkWithoutFatBill?: FloatFieldUpdateOperationsInput | number
    totalMilkBill?: FloatFieldUpdateOperationsInput | number
    totalGas?: FloatFieldUpdateOperationsInput | number
    gasBill?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkUserId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalRabdi?: FloatFieldUpdateOperationsInput | number
    rabdiBill?: FloatFieldUpdateOperationsInput | number
    totalMilk?: FloatFieldUpdateOperationsInput | number
    totalMilkFat?: FloatFieldUpdateOperationsInput | number
    totalMilkWithoutFat?: FloatFieldUpdateOperationsInput | number
    milkFatBill?: FloatFieldUpdateOperationsInput | number
    milkWithoutFatBill?: FloatFieldUpdateOperationsInput | number
    totalMilkBill?: FloatFieldUpdateOperationsInput | number
    totalGas?: FloatFieldUpdateOperationsInput | number
    gasBill?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillCreateManyInput = {
    id?: number
    clerkUserId: string
    startDate: Date | string
    endDate: Date | string
    totalRabdi: number
    rabdiBill: number
    totalMilk: number
    totalMilkFat: number
    totalMilkWithoutFat: number
    milkFatBill: number
    milkWithoutFatBill: number
    totalMilkBill?: number
    totalGas: number
    gasBill: number
    createdAt?: Date | string
  }

  export type BillUpdateManyMutationInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalRabdi?: FloatFieldUpdateOperationsInput | number
    rabdiBill?: FloatFieldUpdateOperationsInput | number
    totalMilk?: FloatFieldUpdateOperationsInput | number
    totalMilkFat?: FloatFieldUpdateOperationsInput | number
    totalMilkWithoutFat?: FloatFieldUpdateOperationsInput | number
    milkFatBill?: FloatFieldUpdateOperationsInput | number
    milkWithoutFatBill?: FloatFieldUpdateOperationsInput | number
    totalMilkBill?: FloatFieldUpdateOperationsInput | number
    totalGas?: FloatFieldUpdateOperationsInput | number
    gasBill?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkUserId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalRabdi?: FloatFieldUpdateOperationsInput | number
    rabdiBill?: FloatFieldUpdateOperationsInput | number
    totalMilk?: FloatFieldUpdateOperationsInput | number
    totalMilkFat?: FloatFieldUpdateOperationsInput | number
    totalMilkWithoutFat?: FloatFieldUpdateOperationsInput | number
    milkFatBill?: FloatFieldUpdateOperationsInput | number
    milkWithoutFatBill?: FloatFieldUpdateOperationsInput | number
    totalMilkBill?: FloatFieldUpdateOperationsInput | number
    totalGas?: FloatFieldUpdateOperationsInput | number
    gasBill?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type RabdiListRelationFilter = {
    every?: RabdiWhereInput
    some?: RabdiWhereInput
    none?: RabdiWhereInput
  }

  export type MilkListRelationFilter = {
    every?: MilkWhereInput
    some?: MilkWhereInput
    none?: MilkWhereInput
  }

  export type GasListRelationFilter = {
    every?: GasWhereInput
    some?: GasWhereInput
    none?: GasWhereInput
  }

  export type RabdiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MilkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    vendorType?: SortOrder
    clerkUserId?: SortOrder
  }

  export type VendorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    vendorType?: SortOrder
    clerkUserId?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    vendorType?: SortOrder
    clerkUserId?: SortOrder
  }

  export type VendorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VendorScalarRelationFilter = {
    is?: VendorWhereInput
    isNot?: VendorWhereInput
  }

  export type RabdiCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    date?: SortOrder
    quantity?: SortOrder
    amountDeposited?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RabdiAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    amountDeposited?: SortOrder
    vendorId?: SortOrder
  }

  export type RabdiMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    date?: SortOrder
    quantity?: SortOrder
    amountDeposited?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RabdiMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    date?: SortOrder
    quantity?: SortOrder
    amountDeposited?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RabdiSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    amountDeposited?: SortOrder
    vendorId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type MilkCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    date?: SortOrder
    milkType?: SortOrder
    quantity?: SortOrder
    amountDeposited?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MilkAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    amountDeposited?: SortOrder
    vendorId?: SortOrder
  }

  export type MilkMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    date?: SortOrder
    milkType?: SortOrder
    quantity?: SortOrder
    amountDeposited?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MilkMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    date?: SortOrder
    milkType?: SortOrder
    quantity?: SortOrder
    amountDeposited?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MilkSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    amountDeposited?: SortOrder
    vendorId?: SortOrder
  }

  export type GasCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    date?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GasAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    vendorId?: SortOrder
  }

  export type GasMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    date?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GasMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    date?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GasSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    vendorId?: SortOrder
  }

  export type BillCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalRabdi?: SortOrder
    rabdiBill?: SortOrder
    totalMilk?: SortOrder
    totalMilkFat?: SortOrder
    totalMilkWithoutFat?: SortOrder
    milkFatBill?: SortOrder
    milkWithoutFatBill?: SortOrder
    totalMilkBill?: SortOrder
    totalGas?: SortOrder
    gasBill?: SortOrder
    createdAt?: SortOrder
  }

  export type BillAvgOrderByAggregateInput = {
    id?: SortOrder
    totalRabdi?: SortOrder
    rabdiBill?: SortOrder
    totalMilk?: SortOrder
    totalMilkFat?: SortOrder
    totalMilkWithoutFat?: SortOrder
    milkFatBill?: SortOrder
    milkWithoutFatBill?: SortOrder
    totalMilkBill?: SortOrder
    totalGas?: SortOrder
    gasBill?: SortOrder
  }

  export type BillMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalRabdi?: SortOrder
    rabdiBill?: SortOrder
    totalMilk?: SortOrder
    totalMilkFat?: SortOrder
    totalMilkWithoutFat?: SortOrder
    milkFatBill?: SortOrder
    milkWithoutFatBill?: SortOrder
    totalMilkBill?: SortOrder
    totalGas?: SortOrder
    gasBill?: SortOrder
    createdAt?: SortOrder
  }

  export type BillMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalRabdi?: SortOrder
    rabdiBill?: SortOrder
    totalMilk?: SortOrder
    totalMilkFat?: SortOrder
    totalMilkWithoutFat?: SortOrder
    milkFatBill?: SortOrder
    milkWithoutFatBill?: SortOrder
    totalMilkBill?: SortOrder
    totalGas?: SortOrder
    gasBill?: SortOrder
    createdAt?: SortOrder
  }

  export type BillSumOrderByAggregateInput = {
    id?: SortOrder
    totalRabdi?: SortOrder
    rabdiBill?: SortOrder
    totalMilk?: SortOrder
    totalMilkFat?: SortOrder
    totalMilkWithoutFat?: SortOrder
    milkFatBill?: SortOrder
    milkWithoutFatBill?: SortOrder
    totalMilkBill?: SortOrder
    totalGas?: SortOrder
    gasBill?: SortOrder
  }

  export type RabdiCreateNestedManyWithoutVendorInput = {
    create?: XOR<RabdiCreateWithoutVendorInput, RabdiUncheckedCreateWithoutVendorInput> | RabdiCreateWithoutVendorInput[] | RabdiUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RabdiCreateOrConnectWithoutVendorInput | RabdiCreateOrConnectWithoutVendorInput[]
    createMany?: RabdiCreateManyVendorInputEnvelope
    connect?: RabdiWhereUniqueInput | RabdiWhereUniqueInput[]
  }

  export type MilkCreateNestedManyWithoutVendorInput = {
    create?: XOR<MilkCreateWithoutVendorInput, MilkUncheckedCreateWithoutVendorInput> | MilkCreateWithoutVendorInput[] | MilkUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MilkCreateOrConnectWithoutVendorInput | MilkCreateOrConnectWithoutVendorInput[]
    createMany?: MilkCreateManyVendorInputEnvelope
    connect?: MilkWhereUniqueInput | MilkWhereUniqueInput[]
  }

  export type GasCreateNestedManyWithoutVendorInput = {
    create?: XOR<GasCreateWithoutVendorInput, GasUncheckedCreateWithoutVendorInput> | GasCreateWithoutVendorInput[] | GasUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: GasCreateOrConnectWithoutVendorInput | GasCreateOrConnectWithoutVendorInput[]
    createMany?: GasCreateManyVendorInputEnvelope
    connect?: GasWhereUniqueInput | GasWhereUniqueInput[]
  }

  export type RabdiUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<RabdiCreateWithoutVendorInput, RabdiUncheckedCreateWithoutVendorInput> | RabdiCreateWithoutVendorInput[] | RabdiUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RabdiCreateOrConnectWithoutVendorInput | RabdiCreateOrConnectWithoutVendorInput[]
    createMany?: RabdiCreateManyVendorInputEnvelope
    connect?: RabdiWhereUniqueInput | RabdiWhereUniqueInput[]
  }

  export type MilkUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<MilkCreateWithoutVendorInput, MilkUncheckedCreateWithoutVendorInput> | MilkCreateWithoutVendorInput[] | MilkUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MilkCreateOrConnectWithoutVendorInput | MilkCreateOrConnectWithoutVendorInput[]
    createMany?: MilkCreateManyVendorInputEnvelope
    connect?: MilkWhereUniqueInput | MilkWhereUniqueInput[]
  }

  export type GasUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<GasCreateWithoutVendorInput, GasUncheckedCreateWithoutVendorInput> | GasCreateWithoutVendorInput[] | GasUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: GasCreateOrConnectWithoutVendorInput | GasCreateOrConnectWithoutVendorInput[]
    createMany?: GasCreateManyVendorInputEnvelope
    connect?: GasWhereUniqueInput | GasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RabdiUpdateManyWithoutVendorNestedInput = {
    create?: XOR<RabdiCreateWithoutVendorInput, RabdiUncheckedCreateWithoutVendorInput> | RabdiCreateWithoutVendorInput[] | RabdiUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RabdiCreateOrConnectWithoutVendorInput | RabdiCreateOrConnectWithoutVendorInput[]
    upsert?: RabdiUpsertWithWhereUniqueWithoutVendorInput | RabdiUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: RabdiCreateManyVendorInputEnvelope
    set?: RabdiWhereUniqueInput | RabdiWhereUniqueInput[]
    disconnect?: RabdiWhereUniqueInput | RabdiWhereUniqueInput[]
    delete?: RabdiWhereUniqueInput | RabdiWhereUniqueInput[]
    connect?: RabdiWhereUniqueInput | RabdiWhereUniqueInput[]
    update?: RabdiUpdateWithWhereUniqueWithoutVendorInput | RabdiUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: RabdiUpdateManyWithWhereWithoutVendorInput | RabdiUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: RabdiScalarWhereInput | RabdiScalarWhereInput[]
  }

  export type MilkUpdateManyWithoutVendorNestedInput = {
    create?: XOR<MilkCreateWithoutVendorInput, MilkUncheckedCreateWithoutVendorInput> | MilkCreateWithoutVendorInput[] | MilkUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MilkCreateOrConnectWithoutVendorInput | MilkCreateOrConnectWithoutVendorInput[]
    upsert?: MilkUpsertWithWhereUniqueWithoutVendorInput | MilkUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: MilkCreateManyVendorInputEnvelope
    set?: MilkWhereUniqueInput | MilkWhereUniqueInput[]
    disconnect?: MilkWhereUniqueInput | MilkWhereUniqueInput[]
    delete?: MilkWhereUniqueInput | MilkWhereUniqueInput[]
    connect?: MilkWhereUniqueInput | MilkWhereUniqueInput[]
    update?: MilkUpdateWithWhereUniqueWithoutVendorInput | MilkUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: MilkUpdateManyWithWhereWithoutVendorInput | MilkUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: MilkScalarWhereInput | MilkScalarWhereInput[]
  }

  export type GasUpdateManyWithoutVendorNestedInput = {
    create?: XOR<GasCreateWithoutVendorInput, GasUncheckedCreateWithoutVendorInput> | GasCreateWithoutVendorInput[] | GasUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: GasCreateOrConnectWithoutVendorInput | GasCreateOrConnectWithoutVendorInput[]
    upsert?: GasUpsertWithWhereUniqueWithoutVendorInput | GasUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: GasCreateManyVendorInputEnvelope
    set?: GasWhereUniqueInput | GasWhereUniqueInput[]
    disconnect?: GasWhereUniqueInput | GasWhereUniqueInput[]
    delete?: GasWhereUniqueInput | GasWhereUniqueInput[]
    connect?: GasWhereUniqueInput | GasWhereUniqueInput[]
    update?: GasUpdateWithWhereUniqueWithoutVendorInput | GasUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: GasUpdateManyWithWhereWithoutVendorInput | GasUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: GasScalarWhereInput | GasScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RabdiUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<RabdiCreateWithoutVendorInput, RabdiUncheckedCreateWithoutVendorInput> | RabdiCreateWithoutVendorInput[] | RabdiUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RabdiCreateOrConnectWithoutVendorInput | RabdiCreateOrConnectWithoutVendorInput[]
    upsert?: RabdiUpsertWithWhereUniqueWithoutVendorInput | RabdiUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: RabdiCreateManyVendorInputEnvelope
    set?: RabdiWhereUniqueInput | RabdiWhereUniqueInput[]
    disconnect?: RabdiWhereUniqueInput | RabdiWhereUniqueInput[]
    delete?: RabdiWhereUniqueInput | RabdiWhereUniqueInput[]
    connect?: RabdiWhereUniqueInput | RabdiWhereUniqueInput[]
    update?: RabdiUpdateWithWhereUniqueWithoutVendorInput | RabdiUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: RabdiUpdateManyWithWhereWithoutVendorInput | RabdiUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: RabdiScalarWhereInput | RabdiScalarWhereInput[]
  }

  export type MilkUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<MilkCreateWithoutVendorInput, MilkUncheckedCreateWithoutVendorInput> | MilkCreateWithoutVendorInput[] | MilkUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MilkCreateOrConnectWithoutVendorInput | MilkCreateOrConnectWithoutVendorInput[]
    upsert?: MilkUpsertWithWhereUniqueWithoutVendorInput | MilkUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: MilkCreateManyVendorInputEnvelope
    set?: MilkWhereUniqueInput | MilkWhereUniqueInput[]
    disconnect?: MilkWhereUniqueInput | MilkWhereUniqueInput[]
    delete?: MilkWhereUniqueInput | MilkWhereUniqueInput[]
    connect?: MilkWhereUniqueInput | MilkWhereUniqueInput[]
    update?: MilkUpdateWithWhereUniqueWithoutVendorInput | MilkUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: MilkUpdateManyWithWhereWithoutVendorInput | MilkUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: MilkScalarWhereInput | MilkScalarWhereInput[]
  }

  export type GasUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<GasCreateWithoutVendorInput, GasUncheckedCreateWithoutVendorInput> | GasCreateWithoutVendorInput[] | GasUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: GasCreateOrConnectWithoutVendorInput | GasCreateOrConnectWithoutVendorInput[]
    upsert?: GasUpsertWithWhereUniqueWithoutVendorInput | GasUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: GasCreateManyVendorInputEnvelope
    set?: GasWhereUniqueInput | GasWhereUniqueInput[]
    disconnect?: GasWhereUniqueInput | GasWhereUniqueInput[]
    delete?: GasWhereUniqueInput | GasWhereUniqueInput[]
    connect?: GasWhereUniqueInput | GasWhereUniqueInput[]
    update?: GasUpdateWithWhereUniqueWithoutVendorInput | GasUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: GasUpdateManyWithWhereWithoutVendorInput | GasUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: GasScalarWhereInput | GasScalarWhereInput[]
  }

  export type VendorCreateNestedOneWithoutRabdisInput = {
    create?: XOR<VendorCreateWithoutRabdisInput, VendorUncheckedCreateWithoutRabdisInput>
    connectOrCreate?: VendorCreateOrConnectWithoutRabdisInput
    connect?: VendorWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VendorUpdateOneRequiredWithoutRabdisNestedInput = {
    create?: XOR<VendorCreateWithoutRabdisInput, VendorUncheckedCreateWithoutRabdisInput>
    connectOrCreate?: VendorCreateOrConnectWithoutRabdisInput
    upsert?: VendorUpsertWithoutRabdisInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutRabdisInput, VendorUpdateWithoutRabdisInput>, VendorUncheckedUpdateWithoutRabdisInput>
  }

  export type VendorCreateNestedOneWithoutMilksInput = {
    create?: XOR<VendorCreateWithoutMilksInput, VendorUncheckedCreateWithoutMilksInput>
    connectOrCreate?: VendorCreateOrConnectWithoutMilksInput
    connect?: VendorWhereUniqueInput
  }

  export type VendorUpdateOneRequiredWithoutMilksNestedInput = {
    create?: XOR<VendorCreateWithoutMilksInput, VendorUncheckedCreateWithoutMilksInput>
    connectOrCreate?: VendorCreateOrConnectWithoutMilksInput
    upsert?: VendorUpsertWithoutMilksInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutMilksInput, VendorUpdateWithoutMilksInput>, VendorUncheckedUpdateWithoutMilksInput>
  }

  export type VendorCreateNestedOneWithoutGasesInput = {
    create?: XOR<VendorCreateWithoutGasesInput, VendorUncheckedCreateWithoutGasesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutGasesInput
    connect?: VendorWhereUniqueInput
  }

  export type VendorUpdateOneRequiredWithoutGasesNestedInput = {
    create?: XOR<VendorCreateWithoutGasesInput, VendorUncheckedCreateWithoutGasesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutGasesInput
    upsert?: VendorUpsertWithoutGasesInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutGasesInput, VendorUpdateWithoutGasesInput>, VendorUncheckedUpdateWithoutGasesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type RabdiCreateWithoutVendorInput = {
    clerkUserId: string
    date: Date | string
    quantity: number
    amountDeposited?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RabdiUncheckedCreateWithoutVendorInput = {
    id?: number
    clerkUserId: string
    date: Date | string
    quantity: number
    amountDeposited?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RabdiCreateOrConnectWithoutVendorInput = {
    where: RabdiWhereUniqueInput
    create: XOR<RabdiCreateWithoutVendorInput, RabdiUncheckedCreateWithoutVendorInput>
  }

  export type RabdiCreateManyVendorInputEnvelope = {
    data: RabdiCreateManyVendorInput | RabdiCreateManyVendorInput[]
  }

  export type MilkCreateWithoutVendorInput = {
    clerkUserId: string
    date: Date | string
    milkType: string
    quantity: number
    amountDeposited?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilkUncheckedCreateWithoutVendorInput = {
    id?: number
    clerkUserId: string
    date: Date | string
    milkType: string
    quantity: number
    amountDeposited?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilkCreateOrConnectWithoutVendorInput = {
    where: MilkWhereUniqueInput
    create: XOR<MilkCreateWithoutVendorInput, MilkUncheckedCreateWithoutVendorInput>
  }

  export type MilkCreateManyVendorInputEnvelope = {
    data: MilkCreateManyVendorInput | MilkCreateManyVendorInput[]
  }

  export type GasCreateWithoutVendorInput = {
    clerkUserId: string
    date: Date | string
    quantity: number
    rate: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GasUncheckedCreateWithoutVendorInput = {
    id?: number
    clerkUserId: string
    date: Date | string
    quantity: number
    rate: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GasCreateOrConnectWithoutVendorInput = {
    where: GasWhereUniqueInput
    create: XOR<GasCreateWithoutVendorInput, GasUncheckedCreateWithoutVendorInput>
  }

  export type GasCreateManyVendorInputEnvelope = {
    data: GasCreateManyVendorInput | GasCreateManyVendorInput[]
  }

  export type RabdiUpsertWithWhereUniqueWithoutVendorInput = {
    where: RabdiWhereUniqueInput
    update: XOR<RabdiUpdateWithoutVendorInput, RabdiUncheckedUpdateWithoutVendorInput>
    create: XOR<RabdiCreateWithoutVendorInput, RabdiUncheckedCreateWithoutVendorInput>
  }

  export type RabdiUpdateWithWhereUniqueWithoutVendorInput = {
    where: RabdiWhereUniqueInput
    data: XOR<RabdiUpdateWithoutVendorInput, RabdiUncheckedUpdateWithoutVendorInput>
  }

  export type RabdiUpdateManyWithWhereWithoutVendorInput = {
    where: RabdiScalarWhereInput
    data: XOR<RabdiUpdateManyMutationInput, RabdiUncheckedUpdateManyWithoutVendorInput>
  }

  export type RabdiScalarWhereInput = {
    AND?: RabdiScalarWhereInput | RabdiScalarWhereInput[]
    OR?: RabdiScalarWhereInput[]
    NOT?: RabdiScalarWhereInput | RabdiScalarWhereInput[]
    id?: IntFilter<"Rabdi"> | number
    clerkUserId?: StringFilter<"Rabdi"> | string
    date?: DateTimeFilter<"Rabdi"> | Date | string
    quantity?: FloatFilter<"Rabdi"> | number
    amountDeposited?: FloatFilter<"Rabdi"> | number
    vendorId?: IntFilter<"Rabdi"> | number
    createdAt?: DateTimeFilter<"Rabdi"> | Date | string
    updatedAt?: DateTimeFilter<"Rabdi"> | Date | string
  }

  export type MilkUpsertWithWhereUniqueWithoutVendorInput = {
    where: MilkWhereUniqueInput
    update: XOR<MilkUpdateWithoutVendorInput, MilkUncheckedUpdateWithoutVendorInput>
    create: XOR<MilkCreateWithoutVendorInput, MilkUncheckedCreateWithoutVendorInput>
  }

  export type MilkUpdateWithWhereUniqueWithoutVendorInput = {
    where: MilkWhereUniqueInput
    data: XOR<MilkUpdateWithoutVendorInput, MilkUncheckedUpdateWithoutVendorInput>
  }

  export type MilkUpdateManyWithWhereWithoutVendorInput = {
    where: MilkScalarWhereInput
    data: XOR<MilkUpdateManyMutationInput, MilkUncheckedUpdateManyWithoutVendorInput>
  }

  export type MilkScalarWhereInput = {
    AND?: MilkScalarWhereInput | MilkScalarWhereInput[]
    OR?: MilkScalarWhereInput[]
    NOT?: MilkScalarWhereInput | MilkScalarWhereInput[]
    id?: IntFilter<"Milk"> | number
    clerkUserId?: StringFilter<"Milk"> | string
    date?: DateTimeFilter<"Milk"> | Date | string
    milkType?: StringFilter<"Milk"> | string
    quantity?: FloatFilter<"Milk"> | number
    amountDeposited?: FloatFilter<"Milk"> | number
    vendorId?: IntFilter<"Milk"> | number
    createdAt?: DateTimeFilter<"Milk"> | Date | string
    updatedAt?: DateTimeFilter<"Milk"> | Date | string
  }

  export type GasUpsertWithWhereUniqueWithoutVendorInput = {
    where: GasWhereUniqueInput
    update: XOR<GasUpdateWithoutVendorInput, GasUncheckedUpdateWithoutVendorInput>
    create: XOR<GasCreateWithoutVendorInput, GasUncheckedCreateWithoutVendorInput>
  }

  export type GasUpdateWithWhereUniqueWithoutVendorInput = {
    where: GasWhereUniqueInput
    data: XOR<GasUpdateWithoutVendorInput, GasUncheckedUpdateWithoutVendorInput>
  }

  export type GasUpdateManyWithWhereWithoutVendorInput = {
    where: GasScalarWhereInput
    data: XOR<GasUpdateManyMutationInput, GasUncheckedUpdateManyWithoutVendorInput>
  }

  export type GasScalarWhereInput = {
    AND?: GasScalarWhereInput | GasScalarWhereInput[]
    OR?: GasScalarWhereInput[]
    NOT?: GasScalarWhereInput | GasScalarWhereInput[]
    id?: IntFilter<"Gas"> | number
    clerkUserId?: StringFilter<"Gas"> | string
    date?: DateTimeFilter<"Gas"> | Date | string
    quantity?: FloatFilter<"Gas"> | number
    rate?: FloatFilter<"Gas"> | number
    vendorId?: IntFilter<"Gas"> | number
    createdAt?: DateTimeFilter<"Gas"> | Date | string
    updatedAt?: DateTimeFilter<"Gas"> | Date | string
  }

  export type VendorCreateWithoutRabdisInput = {
    name: string
    vendorType: string
    clerkUserId: string
    milks?: MilkCreateNestedManyWithoutVendorInput
    gases?: GasCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutRabdisInput = {
    id?: number
    name: string
    vendorType: string
    clerkUserId: string
    milks?: MilkUncheckedCreateNestedManyWithoutVendorInput
    gases?: GasUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutRabdisInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutRabdisInput, VendorUncheckedCreateWithoutRabdisInput>
  }

  export type VendorUpsertWithoutRabdisInput = {
    update: XOR<VendorUpdateWithoutRabdisInput, VendorUncheckedUpdateWithoutRabdisInput>
    create: XOR<VendorCreateWithoutRabdisInput, VendorUncheckedCreateWithoutRabdisInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutRabdisInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutRabdisInput, VendorUncheckedUpdateWithoutRabdisInput>
  }

  export type VendorUpdateWithoutRabdisInput = {
    name?: StringFieldUpdateOperationsInput | string
    vendorType?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    milks?: MilkUpdateManyWithoutVendorNestedInput
    gases?: GasUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutRabdisInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vendorType?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    milks?: MilkUncheckedUpdateManyWithoutVendorNestedInput
    gases?: GasUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateWithoutMilksInput = {
    name: string
    vendorType: string
    clerkUserId: string
    rabdis?: RabdiCreateNestedManyWithoutVendorInput
    gases?: GasCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutMilksInput = {
    id?: number
    name: string
    vendorType: string
    clerkUserId: string
    rabdis?: RabdiUncheckedCreateNestedManyWithoutVendorInput
    gases?: GasUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutMilksInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutMilksInput, VendorUncheckedCreateWithoutMilksInput>
  }

  export type VendorUpsertWithoutMilksInput = {
    update: XOR<VendorUpdateWithoutMilksInput, VendorUncheckedUpdateWithoutMilksInput>
    create: XOR<VendorCreateWithoutMilksInput, VendorUncheckedCreateWithoutMilksInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutMilksInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutMilksInput, VendorUncheckedUpdateWithoutMilksInput>
  }

  export type VendorUpdateWithoutMilksInput = {
    name?: StringFieldUpdateOperationsInput | string
    vendorType?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    rabdis?: RabdiUpdateManyWithoutVendorNestedInput
    gases?: GasUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutMilksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vendorType?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    rabdis?: RabdiUncheckedUpdateManyWithoutVendorNestedInput
    gases?: GasUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateWithoutGasesInput = {
    name: string
    vendorType: string
    clerkUserId: string
    rabdis?: RabdiCreateNestedManyWithoutVendorInput
    milks?: MilkCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutGasesInput = {
    id?: number
    name: string
    vendorType: string
    clerkUserId: string
    rabdis?: RabdiUncheckedCreateNestedManyWithoutVendorInput
    milks?: MilkUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutGasesInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutGasesInput, VendorUncheckedCreateWithoutGasesInput>
  }

  export type VendorUpsertWithoutGasesInput = {
    update: XOR<VendorUpdateWithoutGasesInput, VendorUncheckedUpdateWithoutGasesInput>
    create: XOR<VendorCreateWithoutGasesInput, VendorUncheckedCreateWithoutGasesInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutGasesInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutGasesInput, VendorUncheckedUpdateWithoutGasesInput>
  }

  export type VendorUpdateWithoutGasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    vendorType?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    rabdis?: RabdiUpdateManyWithoutVendorNestedInput
    milks?: MilkUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutGasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vendorType?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    rabdis?: RabdiUncheckedUpdateManyWithoutVendorNestedInput
    milks?: MilkUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type RabdiCreateManyVendorInput = {
    id?: number
    clerkUserId: string
    date: Date | string
    quantity: number
    amountDeposited?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilkCreateManyVendorInput = {
    id?: number
    clerkUserId: string
    date: Date | string
    milkType: string
    quantity: number
    amountDeposited?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GasCreateManyVendorInput = {
    id?: number
    clerkUserId: string
    date: Date | string
    quantity: number
    rate: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RabdiUpdateWithoutVendorInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: FloatFieldUpdateOperationsInput | number
    amountDeposited?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RabdiUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: FloatFieldUpdateOperationsInput | number
    amountDeposited?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RabdiUncheckedUpdateManyWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: FloatFieldUpdateOperationsInput | number
    amountDeposited?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilkUpdateWithoutVendorInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    milkType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    amountDeposited?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilkUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    milkType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    amountDeposited?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilkUncheckedUpdateManyWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    milkType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    amountDeposited?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GasUpdateWithoutVendorInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GasUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GasUncheckedUpdateManyWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkUserId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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