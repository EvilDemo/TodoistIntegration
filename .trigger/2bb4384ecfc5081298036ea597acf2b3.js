process.on("uncaughtException", function(error, origin) { if (error instanceof Error) { process.send && process.send({ type: "UNCAUGHT_EXCEPTION", payload: { error: { name: error.name, message: error.message, stack: error.stack }, origin }, version: "v1" }); } else { process.send && process.send({ type: "UNCAUGHT_EXCEPTION", payload: { error: { name: "Error", message: typeof error === "string" ? error : JSON.stringify(error) }, origin }, version: "v1" }); } });
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// <define:__PROJECT_CONFIG__>
var define_PROJECT_CONFIG_default;
var init_define_PROJECT_CONFIG = __esm({
  "<define:__PROJECT_CONFIG__>"() {
    define_PROJECT_CONFIG_default = { project: "proj_nswxjnjiwnxxnvstnrjf", retries: { enabledInDev: true, default: { maxAttempts: 3, factor: 2, minTimeoutInMs: 1e3, maxTimeoutInMs: 1e4, randomize: true } }, logLevel: "log", triggerDirectories: ["/Users/leonelribeiro/Documents/GitHub/TodoistIntegration/src/trigger"], triggerUrl: "https://api.trigger.dev", projectDir: "/Users/leonelribeiro/Documents/GitHub/TodoistIntegration", tsconfigPath: "/Users/leonelribeiro/Documents/GitHub/TodoistIntegration/tsconfig.json", additionalFiles: [] };
  }
});

// node_modules/@trigger.dev/core/dist/v3/index.js
var require_v3 = __commonJS({
  "node_modules/@trigger.dev/core/dist/v3/index.js"(exports2) {
    "use strict";
    init_define_PROJECT_CONFIG();
    var api = require("@opentelemetry/api");
    var zod = require("zod");
    var zodValidationError = require("zod-validation-error");
    var preciseDate = require("@google-cloud/precise-date");
    var apiLogs = require("@opentelemetry/api-logs");
    var humanizeDuration = require("humanize-duration");
    function _interopDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var humanizeDuration__default = /* @__PURE__ */ _interopDefault(humanizeDuration);
    var __defProp5 = Object.defineProperty;
    var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __name4 = (target, value) => __defProp5(target, "name", { value, configurable: true });
    var __publicField3 = (obj, key, value) => {
      __defNormalProp3(obj, typeof key !== "symbol" ? key + "" : key, value);
      return value;
    };
    var __accessCheck3 = (obj, member, msg) => {
      if (!member.has(obj))
        throw TypeError("Cannot " + msg);
    };
    var __privateAdd3 = (obj, member, value) => {
      if (member.has(obj))
        throw TypeError("Cannot add the same private member more than once");
      member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    };
    var __privateMethod3 = (obj, member, method) => {
      __accessCheck3(obj, member, "access private method");
      return method;
    };
    var version3 = "3.0.0-beta.56";
    var dependencies = {
      "@google-cloud/precise-date": "^4.0.0",
      "@opentelemetry/api": "^1.8.0",
      "@opentelemetry/api-logs": "^0.48.0",
      "@opentelemetry/exporter-logs-otlp-http": "^0.49.1",
      "@opentelemetry/exporter-trace-otlp-http": "^0.49.1",
      "@opentelemetry/instrumentation": "^0.49.1",
      "@opentelemetry/resources": "^1.22.0",
      "@opentelemetry/sdk-logs": "^0.49.1",
      "@opentelemetry/sdk-node": "^0.49.1",
      "@opentelemetry/sdk-trace-base": "^1.22.0",
      "@opentelemetry/sdk-trace-node": "^1.22.0",
      "@opentelemetry/semantic-conventions": "^1.22.0",
      "humanize-duration": "^3.27.3",
      "socket.io-client": "4.7.5",
      superjson: "^2.2.1",
      ulidx: "^2.2.1",
      zod: "3.22.3",
      "zod-error": "1.5.0",
      "zod-validation-error": "^1.5.0"
    };
    var CreateAuthorizationCodeResponseSchema = zod.z.object({
      url: zod.z.string().url(),
      authorizationCode: zod.z.string()
    });
    var GetPersonalAccessTokenRequestSchema = zod.z.object({
      authorizationCode: zod.z.string()
    });
    var GetPersonalAccessTokenResponseSchema = zod.z.object({
      token: zod.z.object({
        token: zod.z.string(),
        obfuscatedToken: zod.z.string()
      }).nullable()
    });
    var MachineCpu = zod.z.union([
      zod.z.literal(0.25),
      zod.z.literal(0.5),
      zod.z.literal(1),
      zod.z.literal(2),
      zod.z.literal(4)
    ]);
    var MachineMemory = zod.z.union([
      zod.z.literal(0.25),
      zod.z.literal(0.5),
      zod.z.literal(1),
      zod.z.literal(2),
      zod.z.literal(4),
      zod.z.literal(8)
    ]);
    var MachinePresetName = zod.z.enum([
      "micro",
      "small-1x",
      "small-2x",
      "medium-1x",
      "medium-2x",
      "large-1x",
      "large-2x"
    ]);
    var MachineConfig = zod.z.object({
      cpu: MachineCpu.optional(),
      memory: MachineMemory.optional(),
      preset: MachinePresetName.optional()
    });
    var MachinePreset = zod.z.object({
      name: MachinePresetName,
      cpu: zod.z.number(),
      memory: zod.z.number(),
      centsPerMs: zod.z.number()
    });
    var TaskRunBuiltInError = zod.z.object({
      type: zod.z.literal("BUILT_IN_ERROR"),
      name: zod.z.string(),
      message: zod.z.string(),
      stackTrace: zod.z.string()
    });
    var TaskRunCustomErrorObject = zod.z.object({
      type: zod.z.literal("CUSTOM_ERROR"),
      raw: zod.z.string()
    });
    var TaskRunStringError = zod.z.object({
      type: zod.z.literal("STRING_ERROR"),
      raw: zod.z.string()
    });
    var TaskRunErrorCodes2 = {
      COULD_NOT_FIND_EXECUTOR: "COULD_NOT_FIND_EXECUTOR",
      COULD_NOT_FIND_TASK: "COULD_NOT_FIND_TASK",
      CONFIGURED_INCORRECTLY: "CONFIGURED_INCORRECTLY",
      TASK_ALREADY_RUNNING: "TASK_ALREADY_RUNNING",
      TASK_EXECUTION_FAILED: "TASK_EXECUTION_FAILED",
      TASK_EXECUTION_ABORTED: "TASK_EXECUTION_ABORTED",
      TASK_PROCESS_EXITED_WITH_NON_ZERO_CODE: "TASK_PROCESS_EXITED_WITH_NON_ZERO_CODE",
      TASK_PROCESS_SIGKILL_TIMEOUT: "TASK_PROCESS_SIGKILL_TIMEOUT",
      TASK_RUN_CANCELLED: "TASK_RUN_CANCELLED",
      TASK_OUTPUT_ERROR: "TASK_OUTPUT_ERROR",
      HANDLE_ERROR_ERROR: "HANDLE_ERROR_ERROR",
      GRACEFUL_EXIT_TIMEOUT: "GRACEFUL_EXIT_TIMEOUT",
      TASK_RUN_CRASHED: "TASK_RUN_CRASHED"
    };
    var TaskRunInternalError = zod.z.object({
      type: zod.z.literal("INTERNAL_ERROR"),
      code: zod.z.enum([
        "COULD_NOT_FIND_EXECUTOR",
        "COULD_NOT_FIND_TASK",
        "CONFIGURED_INCORRECTLY",
        "TASK_ALREADY_RUNNING",
        "TASK_EXECUTION_FAILED",
        "TASK_EXECUTION_ABORTED",
        "TASK_PROCESS_EXITED_WITH_NON_ZERO_CODE",
        "TASK_PROCESS_SIGKILL_TIMEOUT",
        "TASK_RUN_CANCELLED",
        "TASK_OUTPUT_ERROR",
        "HANDLE_ERROR_ERROR",
        "GRACEFUL_EXIT_TIMEOUT",
        "TASK_RUN_HEARTBEAT_TIMEOUT",
        "TASK_RUN_CRASHED"
      ]),
      message: zod.z.string().optional(),
      stackTrace: zod.z.string().optional()
    });
    var TaskRunError = zod.z.discriminatedUnion("type", [
      TaskRunBuiltInError,
      TaskRunCustomErrorObject,
      TaskRunStringError,
      TaskRunInternalError
    ]);
    var TaskRun = zod.z.object({
      id: zod.z.string(),
      payload: zod.z.string(),
      payloadType: zod.z.string(),
      context: zod.z.any(),
      tags: zod.z.array(zod.z.string()),
      isTest: zod.z.boolean().default(false),
      createdAt: zod.z.coerce.date(),
      startedAt: zod.z.coerce.date().default(() => /* @__PURE__ */ new Date()),
      idempotencyKey: zod.z.string().optional(),
      maxAttempts: zod.z.number().optional(),
      durationMs: zod.z.number().default(0),
      costInCents: zod.z.number().default(0),
      baseCostInCents: zod.z.number().default(0),
      version: zod.z.string().optional()
    });
    var TaskRunExecutionTask = zod.z.object({
      id: zod.z.string(),
      filePath: zod.z.string(),
      exportName: zod.z.string()
    });
    var TaskRunExecutionAttempt = zod.z.object({
      id: zod.z.string(),
      number: zod.z.number(),
      startedAt: zod.z.coerce.date(),
      backgroundWorkerId: zod.z.string(),
      backgroundWorkerTaskId: zod.z.string(),
      status: zod.z.string()
    });
    var TaskRunExecutionEnvironment = zod.z.object({
      id: zod.z.string(),
      slug: zod.z.string(),
      type: zod.z.enum([
        "PRODUCTION",
        "STAGING",
        "DEVELOPMENT",
        "PREVIEW"
      ])
    });
    var TaskRunExecutionOrganization = zod.z.object({
      id: zod.z.string(),
      slug: zod.z.string(),
      name: zod.z.string()
    });
    var TaskRunExecutionProject = zod.z.object({
      id: zod.z.string(),
      ref: zod.z.string(),
      slug: zod.z.string(),
      name: zod.z.string()
    });
    var TaskRunExecutionQueue = zod.z.object({
      id: zod.z.string(),
      name: zod.z.string()
    });
    var TaskRunExecutionBatch = zod.z.object({
      id: zod.z.string()
    });
    var TaskRunExecution = zod.z.object({
      task: TaskRunExecutionTask,
      attempt: TaskRunExecutionAttempt,
      run: TaskRun,
      queue: TaskRunExecutionQueue,
      environment: TaskRunExecutionEnvironment,
      organization: TaskRunExecutionOrganization,
      project: TaskRunExecutionProject,
      batch: TaskRunExecutionBatch.optional(),
      machine: MachinePreset.optional()
    });
    var TaskRunContext = zod.z.object({
      task: TaskRunExecutionTask,
      attempt: TaskRunExecutionAttempt.omit({
        backgroundWorkerId: true,
        backgroundWorkerTaskId: true
      }),
      run: TaskRun.omit({
        payload: true,
        payloadType: true
      }),
      queue: TaskRunExecutionQueue,
      environment: TaskRunExecutionEnvironment,
      organization: TaskRunExecutionOrganization,
      project: TaskRunExecutionProject,
      batch: TaskRunExecutionBatch.optional(),
      machine: MachinePreset.optional()
    });
    var TaskRunExecutionRetry = zod.z.object({
      timestamp: zod.z.number(),
      delay: zod.z.number(),
      error: zod.z.unknown().optional()
    });
    var TaskRunExecutionUsage = zod.z.object({
      durationMs: zod.z.number()
    });
    var TaskRunFailedExecutionResult = zod.z.object({
      ok: zod.z.literal(false),
      id: zod.z.string(),
      error: TaskRunError,
      retry: TaskRunExecutionRetry.optional(),
      skippedRetrying: zod.z.boolean().optional(),
      usage: TaskRunExecutionUsage.optional()
    });
    var TaskRunSuccessfulExecutionResult = zod.z.object({
      ok: zod.z.literal(true),
      id: zod.z.string(),
      output: zod.z.string().optional(),
      outputType: zod.z.string(),
      usage: TaskRunExecutionUsage.optional()
    });
    var TaskRunExecutionResult = zod.z.discriminatedUnion("ok", [
      TaskRunSuccessfulExecutionResult,
      TaskRunFailedExecutionResult
    ]);
    var BatchTaskRunExecutionResult = zod.z.object({
      id: zod.z.string(),
      items: TaskRunExecutionResult.array()
    });
    var EnvironmentType = zod.z.enum([
      "PRODUCTION",
      "STAGING",
      "DEVELOPMENT",
      "PREVIEW"
    ]);
    var TaskRunExecutionPayload = zod.z.object({
      execution: TaskRunExecution,
      traceContext: zod.z.record(zod.z.unknown()),
      environment: zod.z.record(zod.z.string()).optional()
    });
    var ProdTaskRunExecution = TaskRunExecution.extend({
      worker: zod.z.object({
        id: zod.z.string(),
        contentHash: zod.z.string(),
        version: zod.z.string()
      }),
      machine: MachinePreset.default({
        name: "small-1x",
        cpu: 1,
        memory: 1,
        centsPerMs: 0
      })
    });
    var ProdTaskRunExecutionPayload = zod.z.object({
      execution: ProdTaskRunExecution,
      traceContext: zod.z.record(zod.z.unknown()),
      environment: zod.z.record(zod.z.string()).optional()
    });
    var FixedWindowRateLimit = zod.z.object({
      type: zod.z.literal("fixed-window"),
      limit: zod.z.number(),
      window: zod.z.union([
        zod.z.object({
          seconds: zod.z.number()
        }),
        zod.z.object({
          minutes: zod.z.number()
        }),
        zod.z.object({
          hours: zod.z.number()
        })
      ])
    });
    var SlidingWindowRateLimit = zod.z.object({
      type: zod.z.literal("sliding-window"),
      limit: zod.z.number(),
      window: zod.z.union([
        zod.z.object({
          seconds: zod.z.number()
        }),
        zod.z.object({
          minutes: zod.z.number()
        }),
        zod.z.object({
          hours: zod.z.number()
        })
      ])
    });
    var RateLimitOptions = zod.z.discriminatedUnion("type", [
      FixedWindowRateLimit,
      SlidingWindowRateLimit
    ]);
    var RetryOptions = zod.z.object({
      /** The number of attempts before giving up */
      maxAttempts: zod.z.number().int().optional(),
      /** The exponential factor to use when calculating the next retry time.
      *
      * Each subsequent retry will be calculated as `previousTimeout * factor`
      */
      factor: zod.z.number().optional(),
      /** The minimum time to wait before retrying */
      minTimeoutInMs: zod.z.number().int().optional(),
      /** The maximum time to wait before retrying */
      maxTimeoutInMs: zod.z.number().int().optional(),
      /** Randomize the timeout between retries.
      *
      * This can be useful to prevent the thundering herd problem where all retries happen at the same time.
      */
      randomize: zod.z.boolean().optional()
    });
    var QueueOptions = zod.z.object({
      /** You can define a shared queue and then pass the name in to your task.
         * 
         * @example
         * 
         * ```ts
         * const myQueue = queue({
            name: "my-queue",
            concurrencyLimit: 1,
          });
      
          export const task1 = task({
            id: "task-1",
            queue: {
              name: "my-queue",
            },
            run: async (payload: { message: string }) => {
              // ...
            },
          });
      
          export const task2 = task({
            id: "task-2",
            queue: {
              name: "my-queue",
            },
            run: async (payload: { message: string }) => {
              // ...
            },
          });
         * ```
         */
      name: zod.z.string().optional(),
      /** An optional property that specifies the maximum number of concurrent run executions.
      *
      * If this property is omitted, the task can potentially use up the full concurrency of an environment. */
      concurrencyLimit: zod.z.number().int().min(0).max(1e3).optional(),
      /** @deprecated This feature is coming soon */
      rateLimit: RateLimitOptions.optional()
    });
    var ScheduleMetadata = zod.z.object({
      cron: zod.z.string(),
      timezone: zod.z.string()
    });
    var TaskMetadata = zod.z.object({
      id: zod.z.string(),
      packageVersion: zod.z.string(),
      queue: QueueOptions.optional(),
      retry: RetryOptions.optional(),
      machine: MachineConfig.optional(),
      triggerSource: zod.z.string().optional(),
      schedule: ScheduleMetadata.optional()
    });
    var TaskFileMetadata = zod.z.object({
      filePath: zod.z.string(),
      exportName: zod.z.string()
    });
    var TaskMetadataWithFilePath = zod.z.object({
      id: zod.z.string(),
      packageVersion: zod.z.string(),
      queue: QueueOptions.optional(),
      retry: RetryOptions.optional(),
      machine: MachineConfig.optional(),
      triggerSource: zod.z.string().optional(),
      schedule: ScheduleMetadata.optional(),
      filePath: zod.z.string(),
      exportName: zod.z.string()
    });
    var PostStartCauses = zod.z.enum([
      "index",
      "create",
      "restore"
    ]);
    var PreStopCauses = zod.z.enum([
      "terminate"
    ]);
    var RegexSchema = zod.z.custom((val) => {
      try {
        return typeof val.test === "function";
      } catch {
        return false;
      }
    });
    var Config = zod.z.object({
      project: zod.z.string(),
      triggerDirectories: zod.z.string().array().optional(),
      triggerUrl: zod.z.string().optional(),
      projectDir: zod.z.string().optional(),
      tsconfigPath: zod.z.string().optional(),
      retries: zod.z.object({
        enabledInDev: zod.z.boolean().default(true),
        default: RetryOptions.optional()
      }).optional(),
      additionalPackages: zod.z.string().array().optional(),
      additionalFiles: zod.z.string().array().optional(),
      dependenciesToBundle: zod.z.array(zod.z.union([
        zod.z.string(),
        RegexSchema
      ])).optional(),
      logLevel: zod.z.string().optional(),
      enableConsoleLogging: zod.z.boolean().optional(),
      postInstall: zod.z.string().optional(),
      extraCACerts: zod.z.string().optional()
    });
    var WaitReason = zod.z.enum([
      "WAIT_FOR_DURATION",
      "WAIT_FOR_TASK",
      "WAIT_FOR_BATCH"
    ]);
    var TaskRunExecutionLazyAttemptPayload = zod.z.object({
      runId: zod.z.string(),
      attemptCount: zod.z.number().optional(),
      messageId: zod.z.string(),
      isTest: zod.z.boolean(),
      traceContext: zod.z.record(zod.z.unknown()),
      environment: zod.z.record(zod.z.string()).optional()
    });
    var TaskResource = zod.z.object({
      id: zod.z.string(),
      filePath: zod.z.string(),
      exportName: zod.z.string(),
      queue: QueueOptions.optional(),
      retry: RetryOptions.optional(),
      machine: MachineConfig.optional(),
      triggerSource: zod.z.string().optional(),
      schedule: ScheduleMetadata.optional()
    });
    var BackgroundWorkerMetadata = zod.z.object({
      packageVersion: zod.z.string(),
      contentHash: zod.z.string(),
      cliPackageVersion: zod.z.string().optional(),
      tasks: zod.z.array(TaskResource)
    });
    var ImageDetailsMetadata = zod.z.object({
      contentHash: zod.z.string(),
      imageTag: zod.z.string()
    });
    var _AbortTaskRunError = class _AbortTaskRunError extends Error {
      constructor(message) {
        super(message);
        this.name = "AbortTaskRunError";
      }
    };
    __name4(_AbortTaskRunError, "AbortTaskRunError");
    var AbortTaskRunError = _AbortTaskRunError;
    function parseError(error) {
      if (error instanceof Error) {
        return {
          type: "BUILT_IN_ERROR",
          name: error.name,
          message: error.message,
          stackTrace: error.stack ?? ""
        };
      }
      if (typeof error === "string") {
        return {
          type: "STRING_ERROR",
          raw: error
        };
      }
      try {
        return {
          type: "CUSTOM_ERROR",
          raw: JSON.stringify(error)
        };
      } catch (e) {
        return {
          type: "CUSTOM_ERROR",
          raw: String(error)
        };
      }
    }
    __name4(parseError, "parseError");
    function createErrorTaskError(error) {
      switch (error.type) {
        case "BUILT_IN_ERROR": {
          const e = new Error(error.message);
          e.name = error.name;
          e.stack = error.stackTrace;
          return e;
        }
        case "STRING_ERROR": {
          return error.raw;
        }
        case "CUSTOM_ERROR": {
          return JSON.parse(error.raw);
        }
        case "INTERNAL_ERROR": {
          return new Error(`trigger.dev internal error (${error.code})`);
        }
      }
    }
    __name4(createErrorTaskError, "createErrorTaskError");
    var SerializedError = zod.z.object({
      message: zod.z.string(),
      name: zod.z.string().optional(),
      stackTrace: zod.z.string().optional()
    });
    function createJsonErrorObject(error) {
      switch (error.type) {
        case "BUILT_IN_ERROR": {
          return {
            name: error.name,
            message: error.message,
            stackTrace: error.stackTrace
          };
        }
        case "STRING_ERROR": {
          return {
            message: error.raw
          };
        }
        case "CUSTOM_ERROR": {
          return {
            message: error.raw
          };
        }
        case "INTERNAL_ERROR": {
          return {
            message: `trigger.dev internal error (${error.code})`
          };
        }
      }
    }
    __name4(createJsonErrorObject, "createJsonErrorObject");
    function sanitizeError(error) {
      switch (error.type) {
        case "BUILT_IN_ERROR": {
          return {
            type: "BUILT_IN_ERROR",
            message: error.message?.replace(/\0/g, ""),
            name: error.name?.replace(/\0/g, ""),
            stackTrace: error.stackTrace?.replace(/\0/g, "")
          };
        }
        case "STRING_ERROR": {
          return {
            type: "STRING_ERROR",
            raw: error.raw.replace(/\0/g, "")
          };
        }
        case "CUSTOM_ERROR": {
          return {
            type: "CUSTOM_ERROR",
            raw: error.raw.replace(/\0/g, "")
          };
        }
        case "INTERNAL_ERROR": {
          return {
            type: "INTERNAL_ERROR",
            code: error.code,
            message: error.message?.replace(/\0/g, ""),
            stackTrace: error.stackTrace?.replace(/\0/g, "")
          };
        }
      }
    }
    __name4(sanitizeError, "sanitizeError");
    function correctErrorStackTrace(stackTrace, projectDir, options) {
      const [errorLine, ...traceLines] = stackTrace.split("\n");
      return [
        options?.removeFirstLine ? void 0 : errorLine,
        ...traceLines.map((line) => correctStackTraceLine(line, projectDir, options?.isDev))
      ].filter(Boolean).join("\n");
    }
    __name4(correctErrorStackTrace, "correctErrorStackTrace");
    var LINES_TO_IGNORE = [
      /ConsoleInterceptor/,
      /TriggerTracer/,
      /TaskExecutor/,
      /EXECUTE_TASK_RUN/,
      /@trigger.dev\/core/,
      /packages\/core\/src\/v3/,
      /safeJsonProcess/,
      /__entryPoint.ts/,
      /ZodIpc/,
      /startActiveSpan/,
      /processTicksAndRejections/
    ];
    function correctStackTraceLine(line, projectDir, isDev) {
      if (LINES_TO_IGNORE.some((regex) => regex.test(line))) {
        return;
      }
      if (isDev && projectDir && !line.includes(projectDir)) {
        return;
      }
      return line.trim();
    }
    __name4(correctStackTraceLine, "correctStackTraceLine");
    function groupTaskMetadataIssuesByTask(tasks, issues) {
      return issues.reduce((acc, issue) => {
        if (issue.path.length === 0) {
          return acc;
        }
        const taskIndex = issue.path[1];
        if (typeof taskIndex !== "number") {
          return acc;
        }
        const task = tasks[taskIndex];
        if (!task) {
          return acc;
        }
        const restOfPath = issue.path.slice(2);
        const taskId = task.id;
        const taskName = task.exportName;
        const filePath = task.filePath;
        const key = taskIndex;
        const existing = acc[key] ?? {
          id: taskId,
          exportName: taskName,
          filePath,
          issues: []
        };
        existing.issues.push({
          message: issue.message,
          path: restOfPath.length === 0 ? void 0 : restOfPath.join(".")
        });
        return {
          ...acc,
          [key]: existing
        };
      }, {});
    }
    __name4(groupTaskMetadataIssuesByTask, "groupTaskMetadataIssuesByTask");
    var WhoAmIResponseSchema = zod.z.object({
      userId: zod.z.string(),
      email: zod.z.string().email(),
      dashboardUrl: zod.z.string()
    });
    var GetProjectResponseBody = zod.z.object({
      id: zod.z.string(),
      externalRef: zod.z.string(),
      name: zod.z.string(),
      slug: zod.z.string(),
      createdAt: zod.z.coerce.date(),
      organization: zod.z.object({
        id: zod.z.string(),
        title: zod.z.string(),
        slug: zod.z.string(),
        createdAt: zod.z.coerce.date()
      })
    });
    var GetProjectsResponseBody = zod.z.array(GetProjectResponseBody);
    var GetProjectEnvResponse = zod.z.object({
      apiKey: zod.z.string(),
      name: zod.z.string(),
      apiUrl: zod.z.string()
    });
    var CreateBackgroundWorkerRequestBody = zod.z.object({
      localOnly: zod.z.boolean(),
      metadata: BackgroundWorkerMetadata,
      supportsLazyAttempts: zod.z.boolean().optional()
    });
    var CreateBackgroundWorkerResponse = zod.z.object({
      id: zod.z.string(),
      version: zod.z.string(),
      contentHash: zod.z.string()
    });
    var RunTag = zod.z.string().max(64, "Tags must be less than 64 characters");
    var RunTags = zod.z.union([
      RunTag,
      RunTag.array()
    ]);
    var TriggerTaskRequestBody = zod.z.object({
      payload: zod.z.any(),
      context: zod.z.any(),
      options: zod.z.object({
        dependentAttempt: zod.z.string().optional(),
        dependentBatch: zod.z.string().optional(),
        lockToVersion: zod.z.string().optional(),
        queue: QueueOptions.optional(),
        concurrencyKey: zod.z.string().optional(),
        idempotencyKey: zod.z.string().optional(),
        test: zod.z.boolean().optional(),
        payloadType: zod.z.string().optional(),
        delay: zod.z.string().or(zod.z.coerce.date()).optional(),
        ttl: zod.z.string().or(zod.z.number().nonnegative().int()).optional(),
        tags: RunTags.optional(),
        maxAttempts: zod.z.number().int().optional()
      }).optional()
    });
    var TriggerTaskResponse = zod.z.object({
      id: zod.z.string()
    });
    var BatchTriggerTaskRequestBody = zod.z.object({
      items: TriggerTaskRequestBody.array(),
      dependentAttempt: zod.z.string().optional()
    });
    var BatchTriggerTaskResponse = zod.z.object({
      batchId: zod.z.string(),
      runs: zod.z.string().array()
    });
    var GetBatchResponseBody = zod.z.object({
      id: zod.z.string(),
      items: zod.z.array(zod.z.object({
        id: zod.z.string(),
        taskRunId: zod.z.string(),
        status: zod.z.enum([
          "PENDING",
          "CANCELED",
          "COMPLETED",
          "FAILED"
        ])
      }))
    });
    var AddTagsRequestBody = zod.z.object({
      tags: RunTags
    });
    var RescheduleRunRequestBody = zod.z.object({
      delay: zod.z.string().or(zod.z.coerce.date())
    });
    var GetEnvironmentVariablesResponseBody = zod.z.object({
      variables: zod.z.record(zod.z.string())
    });
    var StartDeploymentIndexingRequestBody = zod.z.object({
      imageReference: zod.z.string(),
      selfHosted: zod.z.boolean().optional()
    });
    var StartDeploymentIndexingResponseBody = zod.z.object({
      id: zod.z.string(),
      contentHash: zod.z.string()
    });
    var ExternalBuildData = zod.z.object({
      buildId: zod.z.string(),
      buildToken: zod.z.string(),
      projectId: zod.z.string()
    });
    var InitializeDeploymentResponseBody = zod.z.object({
      id: zod.z.string(),
      contentHash: zod.z.string(),
      shortCode: zod.z.string(),
      version: zod.z.string(),
      imageTag: zod.z.string(),
      externalBuildData: ExternalBuildData.optional().nullable(),
      registryHost: zod.z.string().optional()
    });
    var InitializeDeploymentRequestBody = zod.z.object({
      contentHash: zod.z.string(),
      userId: zod.z.string().optional()
    });
    var DeploymentErrorData = zod.z.object({
      name: zod.z.string(),
      message: zod.z.string(),
      stack: zod.z.string().optional(),
      stderr: zod.z.string().optional()
    });
    var GetDeploymentResponseBody = zod.z.object({
      id: zod.z.string(),
      status: zod.z.enum([
        "PENDING",
        "BUILDING",
        "DEPLOYING",
        "DEPLOYED",
        "FAILED",
        "CANCELED",
        "TIMED_OUT"
      ]),
      contentHash: zod.z.string(),
      shortCode: zod.z.string(),
      version: zod.z.string(),
      imageReference: zod.z.string().optional(),
      errorData: DeploymentErrorData.optional().nullable(),
      worker: zod.z.object({
        id: zod.z.string(),
        version: zod.z.string(),
        tasks: zod.z.array(zod.z.object({
          id: zod.z.string(),
          slug: zod.z.string(),
          filePath: zod.z.string(),
          exportName: zod.z.string()
        }))
      }).optional()
    });
    var CreateUploadPayloadUrlResponseBody = zod.z.object({
      presignedUrl: zod.z.string()
    });
    var ReplayRunResponse = zod.z.object({
      id: zod.z.string()
    });
    var CanceledRunResponse = zod.z.object({
      id: zod.z.string()
    });
    var ScheduleType = zod.z.union([
      zod.z.literal("DECLARATIVE"),
      zod.z.literal("IMPERATIVE")
    ]);
    var ScheduledTaskPayload = zod.z.object({
      /** The schedule id associated with this run (you can have many schedules for the same task).
      You can use this to remove the schedule, update it, etc */
      scheduleId: zod.z.string(),
      /** The type of schedule – `"DECLARATIVE"` or `"IMPERATIVE"`.
      *
      * **DECLARATIVE** – defined inline on your `schedules.task` using the `cron` property. They can only be created, updated or deleted by modifying the `cron` property on your task.
      *
      * **IMPERATIVE** – created using the `schedules.create` functions or in the dashboard.
      */
      type: ScheduleType,
      /** When the task was scheduled to run.
      * Note this will be slightly different from `new Date()` because it takes a few ms to run the task.
      * 
      * This date is UTC. To output it as a string with a timezone you would do this: 
      * ```ts
      * const formatted = payload.timestamp.toLocaleString("en-US", {
           timeZone: payload.timezone,
       });
       ```  */
      timestamp: zod.z.date(),
      /** When the task was last run (it has been).
      This can be undefined if it's never been run. This date is UTC. */
      lastTimestamp: zod.z.date().optional(),
      /** You can optionally provide an external id when creating the schedule.
      Usually you would use a userId or some other unique identifier.
      This defaults to undefined if you didn't provide one. */
      externalId: zod.z.string().optional(),
      /** The IANA timezone the schedule is set to. The default is UTC.
      * You can see the full list of supported timezones here: https://cloud.trigger.dev/timezones
      */
      timezone: zod.z.string(),
      /** The next 5 dates this task is scheduled to run */
      upcoming: zod.z.array(zod.z.date())
    });
    var CreateScheduleOptions = zod.z.object({
      /** The id of the task you want to attach to. */
      task: zod.z.string(),
      /**  The schedule in CRON format.
         * 
         * ```txt
      *    *    *    *    *    *
      ┬    ┬    ┬    ┬    ┬
      │    │    │    │    |
      │    │    │    │    └ day of week (0 - 7, 1L - 7L) (0 or 7 is Sun)
      │    │    │    └───── month (1 - 12)
      │    │    └────────── day of month (1 - 31, L)
      │    └─────────────── hour (0 - 23)
      └──────────────────── minute (0 - 59)
         * ```
      
      "L" means the last. In the "day of week" field, 1L means the last Monday of the month. In the day of month field, L means the last day of the month.
      
         */
      cron: zod.z.string(),
      /** You can only create one schedule with this key. If you use it twice, the second call will update the schedule.
      *
      * This is required to prevent you from creating duplicate schedules. */
      deduplicationKey: zod.z.string(),
      /** Optionally, you can specify your own IDs (like a user ID) and then use it inside the run function of your task.
      *
      * This allows you to have per-user CRON tasks.
      */
      externalId: zod.z.string().optional(),
      /** Optionally, you can specify a timezone in the IANA format. If unset it will use UTC.
      * If specified then the CRON will be evaluated in that timezone and will respect daylight savings.
      *
      * If you set the CRON to `0 0 * * *` and the timezone to `America/New_York` then the task will run at midnight in New York time, no matter whether it's daylight savings or not.
      *
      * You can see the full list of supported timezones here: https://cloud.trigger.dev/timezones
      *
      * @example "America/New_York", "Europe/London", "Asia/Tokyo", "Africa/Cairo"
      *
      */
      timezone: zod.z.string().optional()
    });
    var UpdateScheduleOptions = CreateScheduleOptions.omit({
      deduplicationKey: true
    });
    var ScheduleGenerator = zod.z.object({
      type: zod.z.literal("CRON"),
      expression: zod.z.string(),
      description: zod.z.string()
    });
    var ScheduleObject = zod.z.object({
      id: zod.z.string(),
      type: ScheduleType,
      task: zod.z.string(),
      active: zod.z.boolean(),
      deduplicationKey: zod.z.string().nullish(),
      externalId: zod.z.string().nullish(),
      generator: ScheduleGenerator,
      timezone: zod.z.string(),
      nextRun: zod.z.coerce.date().nullish(),
      environments: zod.z.array(zod.z.object({
        id: zod.z.string(),
        type: zod.z.string(),
        userName: zod.z.string().nullish()
      }))
    });
    var DeletedScheduleObject = zod.z.object({
      id: zod.z.string()
    });
    var ListSchedulesResult = zod.z.object({
      data: zod.z.array(ScheduleObject),
      pagination: zod.z.object({
        currentPage: zod.z.number(),
        totalPages: zod.z.number(),
        count: zod.z.number()
      })
    });
    var ListScheduleOptions = zod.z.object({
      page: zod.z.number().optional(),
      perPage: zod.z.number().optional()
    });
    var TimezonesResult = zod.z.object({
      timezones: zod.z.array(zod.z.string())
    });
    var RunStatus = zod.z.enum([
      /// Task hasn't been deployed yet but is waiting to be executed
      "WAITING_FOR_DEPLOY",
      /// Task is waiting to be executed by a worker
      "QUEUED",
      /// Task is currently being executed by a worker
      "EXECUTING",
      /// Task has failed and is waiting to be retried
      "REATTEMPTING",
      /// Task has been paused by the system, and will be resumed by the system
      "FROZEN",
      /// Task has been completed successfully
      "COMPLETED",
      /// Task has been canceled by the user
      "CANCELED",
      /// Task has been completed with errors
      "FAILED",
      /// Task has crashed and won't be retried, most likely the worker ran out of resources, e.g. memory or storage
      "CRASHED",
      /// Task was interrupted during execution, mostly this happens in development environments
      "INTERRUPTED",
      /// Task has failed to complete, due to an error in the system
      "SYSTEM_FAILURE",
      /// Task has been scheduled to run at a specific time
      "DELAYED",
      /// Task has expired and won't be executed
      "EXPIRED"
    ]);
    var AttemptStatus = zod.z.enum([
      "PENDING",
      "EXECUTING",
      "PAUSED",
      "COMPLETED",
      "FAILED",
      "CANCELED"
    ]);
    var RunEnvironmentDetails = zod.z.object({
      id: zod.z.string(),
      name: zod.z.string(),
      user: zod.z.string().optional()
    });
    var RunScheduleDetails = zod.z.object({
      id: zod.z.string(),
      externalId: zod.z.string().optional(),
      deduplicationKey: zod.z.string().optional(),
      generator: ScheduleGenerator
    });
    var CommonRunFields = {
      id: zod.z.string(),
      status: RunStatus,
      taskIdentifier: zod.z.string(),
      idempotencyKey: zod.z.string().optional(),
      version: zod.z.string().optional(),
      isQueued: zod.z.boolean(),
      isExecuting: zod.z.boolean(),
      isCompleted: zod.z.boolean(),
      isSuccess: zod.z.boolean(),
      isFailed: zod.z.boolean(),
      isCancelled: zod.z.boolean(),
      isTest: zod.z.boolean(),
      createdAt: zod.z.coerce.date(),
      updatedAt: zod.z.coerce.date(),
      startedAt: zod.z.coerce.date().optional(),
      finishedAt: zod.z.coerce.date().optional(),
      delayedUntil: zod.z.coerce.date().optional(),
      ttl: zod.z.string().optional(),
      expiredAt: zod.z.coerce.date().optional(),
      tags: zod.z.string().array(),
      costInCents: zod.z.number(),
      baseCostInCents: zod.z.number(),
      durationMs: zod.z.number()
    };
    var RetrieveRunResponse = zod.z.object({
      ...CommonRunFields,
      payload: zod.z.any().optional(),
      payloadPresignedUrl: zod.z.string().optional(),
      output: zod.z.any().optional(),
      outputPresignedUrl: zod.z.string().optional(),
      schedule: RunScheduleDetails.optional(),
      attempts: zod.z.array(zod.z.object({
        id: zod.z.string(),
        status: AttemptStatus,
        createdAt: zod.z.coerce.date(),
        updatedAt: zod.z.coerce.date(),
        startedAt: zod.z.coerce.date().optional(),
        completedAt: zod.z.coerce.date().optional(),
        error: SerializedError.optional()
      }).optional())
    });
    var ListRunResponseItem = zod.z.object({
      ...CommonRunFields,
      env: RunEnvironmentDetails
    });
    var ListRunResponse = zod.z.object({
      data: zod.z.array(ListRunResponseItem),
      pagination: zod.z.object({
        next: zod.z.string().optional(),
        previous: zod.z.string().optional()
      })
    });
    var CreateEnvironmentVariableRequestBody = zod.z.object({
      name: zod.z.string(),
      value: zod.z.string()
    });
    var UpdateEnvironmentVariableRequestBody = zod.z.object({
      value: zod.z.string()
    });
    var ImportEnvironmentVariablesRequestBody = zod.z.object({
      variables: zod.z.record(zod.z.string()),
      override: zod.z.boolean().optional()
    });
    var EnvironmentVariableResponseBody = zod.z.object({
      success: zod.z.boolean()
    });
    var EnvironmentVariableValue = zod.z.object({
      value: zod.z.string()
    });
    var EnvironmentVariable = zod.z.object({
      name: zod.z.string(),
      value: zod.z.string()
    });
    var EnvironmentVariables = zod.z.array(EnvironmentVariable);
    var BackgroundWorkerServerMessages = zod.z.discriminatedUnion("type", [
      zod.z.object({
        type: zod.z.literal("EXECUTE_RUNS"),
        payloads: zod.z.array(TaskRunExecutionPayload)
      }),
      zod.z.object({
        type: zod.z.literal("CANCEL_ATTEMPT"),
        taskAttemptId: zod.z.string(),
        taskRunId: zod.z.string()
      }),
      zod.z.object({
        type: zod.z.literal("SCHEDULE_ATTEMPT"),
        image: zod.z.string(),
        version: zod.z.string(),
        machine: MachinePreset,
        nextAttemptNumber: zod.z.number().optional(),
        // identifiers
        id: zod.z.string().optional(),
        envId: zod.z.string(),
        envType: EnvironmentType,
        orgId: zod.z.string(),
        projectId: zod.z.string(),
        runId: zod.z.string()
      }),
      zod.z.object({
        type: zod.z.literal("EXECUTE_RUN_LAZY_ATTEMPT"),
        payload: TaskRunExecutionLazyAttemptPayload
      })
    ]);
    var serverWebsocketMessages = {
      SERVER_READY: zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        id: zod.z.string()
      }),
      BACKGROUND_WORKER_MESSAGE: zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        backgroundWorkerId: zod.z.string(),
        data: BackgroundWorkerServerMessages
      })
    };
    var BackgroundWorkerClientMessages = zod.z.discriminatedUnion("type", [
      zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        type: zod.z.literal("TASK_RUN_COMPLETED"),
        completion: TaskRunExecutionResult,
        execution: TaskRunExecution
      }),
      zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        type: zod.z.literal("TASK_RUN_FAILED_TO_RUN"),
        completion: TaskRunFailedExecutionResult
      }),
      zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        type: zod.z.literal("TASK_HEARTBEAT"),
        id: zod.z.string()
      }),
      zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        type: zod.z.literal("TASK_RUN_HEARTBEAT"),
        id: zod.z.string()
      })
    ]);
    var BackgroundWorkerProperties = zod.z.object({
      id: zod.z.string(),
      version: zod.z.string(),
      contentHash: zod.z.string()
    });
    var clientWebsocketMessages = {
      READY_FOR_TASKS: zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        backgroundWorkerId: zod.z.string(),
        inProgressRuns: zod.z.string().array().optional()
      }),
      BACKGROUND_WORKER_DEPRECATED: zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        backgroundWorkerId: zod.z.string()
      }),
      BACKGROUND_WORKER_MESSAGE: zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        backgroundWorkerId: zod.z.string(),
        data: BackgroundWorkerClientMessages
      })
    };
    var workerToChildMessages2 = {
      EXECUTE_TASK_RUN: zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        execution: TaskRunExecution,
        traceContext: zod.z.record(zod.z.unknown()),
        metadata: BackgroundWorkerProperties
      }),
      TASK_RUN_COMPLETED_NOTIFICATION: zod.z.discriminatedUnion("version", [
        zod.z.object({
          version: zod.z.literal("v1"),
          completion: TaskRunExecutionResult,
          execution: TaskRunExecution
        }),
        zod.z.object({
          version: zod.z.literal("v2"),
          completion: TaskRunExecutionResult
        })
      ]),
      CLEANUP: zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        flush: zod.z.boolean().default(false),
        kill: zod.z.boolean().default(true)
      })
    };
    var UncaughtExceptionMessage = zod.z.object({
      version: zod.z.literal("v1").default("v1"),
      error: zod.z.object({
        name: zod.z.string(),
        message: zod.z.string(),
        stack: zod.z.string().optional()
      }),
      origin: zod.z.enum([
        "uncaughtException",
        "unhandledRejection"
      ])
    });
    var TaskMetadataFailedToParseData = zod.z.object({
      version: zod.z.literal("v1").default("v1"),
      tasks: zod.z.unknown(),
      zodIssues: zod.z.custom((v) => {
        return Array.isArray(v) && v.every((issue) => typeof issue === "object" && "message" in issue);
      })
    });
    var childToWorkerMessages2 = {
      TASK_RUN_COMPLETED: zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        execution: TaskRunExecution,
        result: TaskRunExecutionResult
      }),
      TASKS_READY: zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        tasks: TaskMetadataWithFilePath.array()
      }),
      TASKS_FAILED_TO_PARSE: TaskMetadataFailedToParseData,
      TASK_HEARTBEAT: zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        id: zod.z.string()
      }),
      TASK_RUN_HEARTBEAT: zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        id: zod.z.string()
      }),
      READY_TO_DISPOSE: zod.z.undefined(),
      WAIT_FOR_DURATION: zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        ms: zod.z.number()
      }),
      WAIT_FOR_TASK: zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        id: zod.z.string()
      }),
      WAIT_FOR_BATCH: zod.z.object({
        version: zod.z.literal("v1").default("v1"),
        id: zod.z.string(),
        runs: zod.z.string().array()
      }),
      UNCAUGHT_EXCEPTION: UncaughtExceptionMessage
    };
    var ProdChildToWorkerMessages = {
      TASK_RUN_COMPLETED: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          execution: TaskRunExecution,
          result: TaskRunExecutionResult
        })
      },
      TASKS_READY: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          tasks: TaskMetadataWithFilePath.array()
        })
      },
      TASKS_FAILED_TO_PARSE: {
        message: TaskMetadataFailedToParseData
      },
      TASK_HEARTBEAT: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          id: zod.z.string()
        })
      },
      READY_TO_DISPOSE: {
        message: zod.z.undefined()
      },
      WAIT_FOR_DURATION: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          ms: zod.z.number(),
          now: zod.z.number(),
          waitThresholdInMs: zod.z.number()
        })
      },
      WAIT_FOR_TASK: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          friendlyId: zod.z.string()
        })
      },
      WAIT_FOR_BATCH: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          batchFriendlyId: zod.z.string(),
          runFriendlyIds: zod.z.string().array()
        })
      },
      UNCAUGHT_EXCEPTION: {
        message: UncaughtExceptionMessage
      }
    };
    var ProdWorkerToChildMessages = {
      EXECUTE_TASK_RUN: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          execution: TaskRunExecution,
          traceContext: zod.z.record(zod.z.unknown()),
          metadata: BackgroundWorkerProperties
        })
      },
      TASK_RUN_COMPLETED_NOTIFICATION: {
        message: zod.z.discriminatedUnion("version", [
          zod.z.object({
            version: zod.z.literal("v1"),
            completion: TaskRunExecutionResult,
            execution: TaskRunExecution
          }),
          zod.z.object({
            version: zod.z.literal("v2"),
            completion: TaskRunExecutionResult
          })
        ])
      },
      CLEANUP: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          flush: zod.z.boolean().default(false),
          kill: zod.z.boolean().default(true)
        }),
        callback: zod.z.void()
      },
      WAIT_COMPLETED_NOTIFICATION: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1")
        })
      }
    };
    var ProviderToPlatformMessages = {
      LOG: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          data: zod.z.string()
        })
      },
      LOG_WITH_ACK: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          data: zod.z.string()
        }),
        callback: zod.z.object({
          status: zod.z.literal("ok")
        })
      },
      WORKER_CRASHED: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          runId: zod.z.string(),
          reason: zod.z.string().optional(),
          exitCode: zod.z.number().optional(),
          message: zod.z.string().optional(),
          logs: zod.z.string().optional(),
          overrideCompletion: zod.z.boolean().optional()
        })
      },
      INDEXING_FAILED: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          deploymentId: zod.z.string(),
          error: zod.z.object({
            name: zod.z.string(),
            message: zod.z.string(),
            stack: zod.z.string().optional(),
            stderr: zod.z.string().optional()
          }),
          overrideCompletion: zod.z.boolean().optional()
        })
      }
    };
    var PlatformToProviderMessages = {
      INDEX: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          imageTag: zod.z.string(),
          shortCode: zod.z.string(),
          apiKey: zod.z.string(),
          apiUrl: zod.z.string(),
          // identifiers
          envId: zod.z.string(),
          envType: EnvironmentType,
          orgId: zod.z.string(),
          projectId: zod.z.string(),
          deploymentId: zod.z.string()
        }),
        callback: zod.z.discriminatedUnion("success", [
          zod.z.object({
            success: zod.z.literal(false),
            error: zod.z.object({
              name: zod.z.string(),
              message: zod.z.string(),
              stack: zod.z.string().optional(),
              stderr: zod.z.string().optional()
            })
          }),
          zod.z.object({
            success: zod.z.literal(true)
          })
        ])
      },
      RESTORE: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          type: zod.z.enum([
            "DOCKER",
            "KUBERNETES"
          ]),
          location: zod.z.string(),
          reason: zod.z.string().optional(),
          imageRef: zod.z.string(),
          attemptNumber: zod.z.number().optional(),
          machine: MachinePreset,
          // identifiers
          checkpointId: zod.z.string(),
          envId: zod.z.string(),
          envType: EnvironmentType,
          orgId: zod.z.string(),
          projectId: zod.z.string(),
          runId: zod.z.string()
        })
      },
      PRE_PULL_DEPLOYMENT: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          imageRef: zod.z.string(),
          shortCode: zod.z.string(),
          // identifiers
          envId: zod.z.string(),
          envType: EnvironmentType,
          orgId: zod.z.string(),
          projectId: zod.z.string(),
          deploymentId: zod.z.string()
        })
      }
    };
    var CreateWorkerMessage = zod.z.object({
      projectRef: zod.z.string(),
      envId: zod.z.string(),
      deploymentId: zod.z.string(),
      metadata: zod.z.object({
        cliPackageVersion: zod.z.string().optional(),
        contentHash: zod.z.string(),
        packageVersion: zod.z.string(),
        tasks: TaskResource.array()
      })
    });
    var CoordinatorToPlatformMessages = {
      LOG: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          metadata: zod.z.any(),
          text: zod.z.string()
        })
      },
      CREATE_WORKER: {
        message: zod.z.discriminatedUnion("version", [
          CreateWorkerMessage.extend({
            version: zod.z.literal("v1")
          }),
          CreateWorkerMessage.extend({
            version: zod.z.literal("v2"),
            supportsLazyAttempts: zod.z.boolean()
          })
        ]),
        callback: zod.z.discriminatedUnion("success", [
          zod.z.object({
            success: zod.z.literal(false)
          }),
          zod.z.object({
            success: zod.z.literal(true)
          })
        ])
      },
      CREATE_TASK_RUN_ATTEMPT: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          runId: zod.z.string(),
          envId: zod.z.string()
        }),
        callback: zod.z.discriminatedUnion("success", [
          zod.z.object({
            success: zod.z.literal(false),
            reason: zod.z.string().optional()
          }),
          zod.z.object({
            success: zod.z.literal(true),
            executionPayload: ProdTaskRunExecutionPayload
          })
        ])
      },
      // Deprecated: Only workers without lazy attempt support will use this
      READY_FOR_EXECUTION: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          runId: zod.z.string(),
          totalCompletions: zod.z.number()
        }),
        callback: zod.z.discriminatedUnion("success", [
          zod.z.object({
            success: zod.z.literal(false)
          }),
          zod.z.object({
            success: zod.z.literal(true),
            payload: ProdTaskRunExecutionPayload
          })
        ])
      },
      READY_FOR_LAZY_ATTEMPT: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          runId: zod.z.string(),
          envId: zod.z.string(),
          totalCompletions: zod.z.number()
        }),
        callback: zod.z.discriminatedUnion("success", [
          zod.z.object({
            success: zod.z.literal(false),
            reason: zod.z.string().optional()
          }),
          zod.z.object({
            success: zod.z.literal(true),
            lazyPayload: TaskRunExecutionLazyAttemptPayload
          })
        ])
      },
      READY_FOR_RESUME: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          attemptFriendlyId: zod.z.string(),
          type: WaitReason
        })
      },
      TASK_RUN_COMPLETED: {
        message: zod.z.object({
          version: zod.z.enum([
            "v1",
            "v2"
          ]).default("v1"),
          execution: ProdTaskRunExecution,
          completion: TaskRunExecutionResult,
          checkpoint: zod.z.object({
            docker: zod.z.boolean(),
            location: zod.z.string()
          }).optional()
        })
      },
      TASK_RUN_FAILED_TO_RUN: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          completion: TaskRunFailedExecutionResult
        })
      },
      TASK_HEARTBEAT: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          attemptFriendlyId: zod.z.string()
        })
      },
      TASK_RUN_HEARTBEAT: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          runId: zod.z.string()
        })
      },
      CHECKPOINT_CREATED: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          attemptFriendlyId: zod.z.string(),
          docker: zod.z.boolean(),
          location: zod.z.string(),
          reason: zod.z.discriminatedUnion("type", [
            zod.z.object({
              type: zod.z.literal("WAIT_FOR_DURATION"),
              ms: zod.z.number(),
              now: zod.z.number()
            }),
            zod.z.object({
              type: zod.z.literal("WAIT_FOR_BATCH"),
              batchFriendlyId: zod.z.string(),
              runFriendlyIds: zod.z.string().array()
            }),
            zod.z.object({
              type: zod.z.literal("WAIT_FOR_TASK"),
              friendlyId: zod.z.string()
            }),
            zod.z.object({
              type: zod.z.literal("RETRYING_AFTER_FAILURE"),
              attemptNumber: zod.z.number()
            })
          ])
        }),
        callback: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          keepRunAlive: zod.z.boolean()
        })
      },
      INDEXING_FAILED: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          deploymentId: zod.z.string(),
          error: zod.z.object({
            name: zod.z.string(),
            message: zod.z.string(),
            stack: zod.z.string().optional(),
            stderr: zod.z.string().optional()
          })
        })
      },
      RUN_CRASHED: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          runId: zod.z.string(),
          error: zod.z.object({
            name: zod.z.string(),
            message: zod.z.string(),
            stack: zod.z.string().optional()
          })
        })
      }
    };
    var PlatformToCoordinatorMessages = {
      RESUME_AFTER_DEPENDENCY: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          runId: zod.z.string(),
          attemptId: zod.z.string(),
          attemptFriendlyId: zod.z.string(),
          completions: TaskRunExecutionResult.array(),
          executions: TaskRunExecution.array()
        })
      },
      RESUME_AFTER_DURATION: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          attemptId: zod.z.string(),
          attemptFriendlyId: zod.z.string()
        })
      },
      REQUEST_ATTEMPT_CANCELLATION: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          attemptId: zod.z.string(),
          attemptFriendlyId: zod.z.string()
        })
      },
      REQUEST_RUN_CANCELLATION: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          runId: zod.z.string(),
          delayInMs: zod.z.number().optional()
        })
      },
      READY_FOR_RETRY: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          runId: zod.z.string()
        })
      },
      DYNAMIC_CONFIG: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          checkpointThresholdInMs: zod.z.number()
        })
      }
    };
    var ClientToSharedQueueMessages = {
      READY_FOR_TASKS: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          backgroundWorkerId: zod.z.string()
        })
      },
      BACKGROUND_WORKER_DEPRECATED: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          backgroundWorkerId: zod.z.string()
        })
      },
      BACKGROUND_WORKER_MESSAGE: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          backgroundWorkerId: zod.z.string(),
          data: BackgroundWorkerClientMessages
        })
      }
    };
    var SharedQueueToClientMessages = {
      SERVER_READY: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          id: zod.z.string()
        })
      },
      BACKGROUND_WORKER_MESSAGE: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          backgroundWorkerId: zod.z.string(),
          data: BackgroundWorkerServerMessages
        })
      }
    };
    var IndexTasksMessage = zod.z.object({
      version: zod.z.literal("v1"),
      deploymentId: zod.z.string(),
      tasks: TaskResource.array(),
      packageVersion: zod.z.string()
    });
    var ProdWorkerToCoordinatorMessages = {
      TEST: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1")
        }),
        callback: zod.z.void()
      },
      INDEX_TASKS: {
        message: zod.z.discriminatedUnion("version", [
          IndexTasksMessage.extend({
            version: zod.z.literal("v1")
          }),
          IndexTasksMessage.extend({
            version: zod.z.literal("v2"),
            supportsLazyAttempts: zod.z.boolean()
          })
        ]),
        callback: zod.z.discriminatedUnion("success", [
          zod.z.object({
            success: zod.z.literal(false)
          }),
          zod.z.object({
            success: zod.z.literal(true)
          })
        ])
      },
      // Deprecated: Only workers without lazy attempt support will use this
      READY_FOR_EXECUTION: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          runId: zod.z.string(),
          totalCompletions: zod.z.number()
        })
      },
      READY_FOR_LAZY_ATTEMPT: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          runId: zod.z.string(),
          totalCompletions: zod.z.number()
        })
      },
      READY_FOR_RESUME: {
        message: zod.z.discriminatedUnion("version", [
          zod.z.object({
            version: zod.z.literal("v1"),
            attemptFriendlyId: zod.z.string(),
            type: WaitReason
          }),
          zod.z.object({
            version: zod.z.literal("v2"),
            attemptFriendlyId: zod.z.string(),
            attemptNumber: zod.z.number(),
            type: WaitReason
          })
        ])
      },
      READY_FOR_CHECKPOINT: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1")
        })
      },
      CANCEL_CHECKPOINT: {
        message: zod.z.discriminatedUnion("version", [
          zod.z.object({
            version: zod.z.literal("v1")
          }),
          zod.z.object({
            version: zod.z.literal("v2"),
            reason: WaitReason.optional()
          })
        ]).default({
          version: "v1"
        }),
        callback: zod.z.object({
          version: zod.z.literal("v2").default("v2"),
          checkpointCanceled: zod.z.boolean(),
          reason: WaitReason.optional()
        })
      },
      TASK_HEARTBEAT: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          attemptFriendlyId: zod.z.string()
        })
      },
      TASK_RUN_HEARTBEAT: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          runId: zod.z.string()
        })
      },
      TASK_RUN_COMPLETED: {
        message: zod.z.object({
          version: zod.z.enum([
            "v1",
            "v2"
          ]).default("v1"),
          execution: ProdTaskRunExecution,
          completion: TaskRunExecutionResult
        }),
        callback: zod.z.object({
          willCheckpointAndRestore: zod.z.boolean(),
          shouldExit: zod.z.boolean()
        })
      },
      TASK_RUN_FAILED_TO_RUN: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          completion: TaskRunFailedExecutionResult
        })
      },
      WAIT_FOR_DURATION: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          ms: zod.z.number(),
          now: zod.z.number(),
          attemptFriendlyId: zod.z.string()
        }),
        callback: zod.z.object({
          willCheckpointAndRestore: zod.z.boolean()
        })
      },
      WAIT_FOR_TASK: {
        message: zod.z.object({
          version: zod.z.enum([
            "v1",
            "v2"
          ]).default("v1"),
          friendlyId: zod.z.string(),
          // This is the attempt that is waiting
          attemptFriendlyId: zod.z.string()
        }),
        callback: zod.z.object({
          willCheckpointAndRestore: zod.z.boolean()
        })
      },
      WAIT_FOR_BATCH: {
        message: zod.z.object({
          version: zod.z.enum([
            "v1",
            "v2"
          ]).default("v1"),
          batchFriendlyId: zod.z.string(),
          runFriendlyIds: zod.z.string().array(),
          // This is the attempt that is waiting
          attemptFriendlyId: zod.z.string()
        }),
        callback: zod.z.object({
          willCheckpointAndRestore: zod.z.boolean()
        })
      },
      INDEXING_FAILED: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          deploymentId: zod.z.string(),
          error: zod.z.object({
            name: zod.z.string(),
            message: zod.z.string(),
            stack: zod.z.string().optional(),
            stderr: zod.z.string().optional()
          })
        })
      },
      CREATE_TASK_RUN_ATTEMPT: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          runId: zod.z.string()
        }),
        callback: zod.z.discriminatedUnion("success", [
          zod.z.object({
            success: zod.z.literal(false),
            reason: zod.z.string().optional()
          }),
          zod.z.object({
            success: zod.z.literal(true),
            executionPayload: ProdTaskRunExecutionPayload
          })
        ])
      },
      UNRECOVERABLE_ERROR: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          error: zod.z.object({
            name: zod.z.string(),
            message: zod.z.string(),
            stack: zod.z.string().optional()
          })
        })
      },
      SET_STATE: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          attemptFriendlyId: zod.z.string().optional(),
          attemptNumber: zod.z.string().optional()
        })
      }
    };
    var CoordinatorToProdWorkerMessages = {
      RESUME_AFTER_DEPENDENCY: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          attemptId: zod.z.string(),
          completions: TaskRunExecutionResult.array(),
          executions: TaskRunExecution.array()
        })
      },
      RESUME_AFTER_DURATION: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          attemptId: zod.z.string()
        })
      },
      // Deprecated: Only workers without lazy attempt support will use this
      EXECUTE_TASK_RUN: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          executionPayload: ProdTaskRunExecutionPayload
        })
      },
      EXECUTE_TASK_RUN_LAZY_ATTEMPT: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          lazyPayload: TaskRunExecutionLazyAttemptPayload
        })
      },
      REQUEST_ATTEMPT_CANCELLATION: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          attemptId: zod.z.string()
        })
      },
      REQUEST_EXIT: {
        message: zod.z.discriminatedUnion("version", [
          zod.z.object({
            version: zod.z.literal("v1")
          }),
          zod.z.object({
            version: zod.z.literal("v2"),
            delayInMs: zod.z.number().optional()
          })
        ])
      },
      READY_FOR_RETRY: {
        message: zod.z.object({
          version: zod.z.literal("v1").default("v1"),
          runId: zod.z.string()
        })
      }
    };
    var ProdWorkerSocketData = zod.z.object({
      contentHash: zod.z.string(),
      projectRef: zod.z.string(),
      envId: zod.z.string(),
      runId: zod.z.string(),
      attemptFriendlyId: zod.z.string().optional(),
      attemptNumber: zod.z.string().optional(),
      podName: zod.z.string(),
      deploymentId: zod.z.string(),
      deploymentVersion: zod.z.string()
    });
    var CoordinatorSocketData = zod.z.object({
      supportsDynamicConfig: zod.z.string().optional()
    });
    var PRIMARY_VARIANT = "primary";
    var Variant = zod.z.enum([
      PRIMARY_VARIANT
    ]);
    var AccessoryItem = zod.z.object({
      text: zod.z.string(),
      variant: zod.z.string().optional(),
      url: zod.z.string().optional()
    });
    var Accessory = zod.z.object({
      items: zod.z.array(AccessoryItem),
      style: zod.z.enum([
        "codepath"
      ]).optional()
    });
    var TaskEventStyle = zod.z.object({
      icon: zod.z.string().optional(),
      variant: Variant.optional(),
      accessory: Accessory.optional()
    }).default({
      icon: void 0,
      variant: void 0
    });
    var stringPatternMatchers2 = [
      zod.z.object({
        $endsWith: zod.z.string()
      }),
      zod.z.object({
        $startsWith: zod.z.string()
      }),
      zod.z.object({
        $ignoreCaseEquals: zod.z.string()
      })
    ];
    var EventMatcher = zod.z.union([
      /** Match against a string */
      zod.z.array(zod.z.string()),
      /** Match against a number */
      zod.z.array(zod.z.number()),
      /** Match against a boolean */
      zod.z.array(zod.z.boolean()),
      zod.z.array(zod.z.union([
        ...stringPatternMatchers2,
        zod.z.object({
          $exists: zod.z.boolean()
        }),
        zod.z.object({
          $isNull: zod.z.boolean()
        }),
        zod.z.object({
          $anythingBut: zod.z.union([
            zod.z.string(),
            zod.z.number(),
            zod.z.boolean()
          ])
        }),
        zod.z.object({
          $anythingBut: zod.z.union([
            zod.z.array(zod.z.string()),
            zod.z.array(zod.z.number()),
            zod.z.array(zod.z.boolean())
          ])
        }),
        zod.z.object({
          $gt: zod.z.number()
        }),
        zod.z.object({
          $lt: zod.z.number()
        }),
        zod.z.object({
          $gte: zod.z.number()
        }),
        zod.z.object({
          $lte: zod.z.number()
        }),
        zod.z.object({
          $between: zod.z.tuple([
            zod.z.number(),
            zod.z.number()
          ])
        }),
        zod.z.object({
          $includes: zod.z.union([
            zod.z.string(),
            zod.z.number(),
            zod.z.boolean()
          ])
        }),
        zod.z.object({
          $not: zod.z.union([
            zod.z.string(),
            zod.z.number(),
            zod.z.boolean()
          ])
        })
      ]))
    ]);
    var EventFilter = zod.z.lazy(() => zod.z.record(zod.z.union([
      EventMatcher,
      EventFilter
    ])));
    var FetchRetryHeadersStrategy = zod.z.object({
      /** The `headers` strategy retries the request using info from the response headers. */
      strategy: zod.z.literal("headers"),
      /** The header to use to determine the maximum number of times to retry the request. */
      limitHeader: zod.z.string(),
      /** The header to use to determine the number of remaining retries. */
      remainingHeader: zod.z.string(),
      /** The header to use to determine the time when the number of remaining retries will be reset. */
      resetHeader: zod.z.string(),
      /** The event filter to use to determine if the request should be retried. */
      bodyFilter: EventFilter.optional(),
      /** The format of the `resetHeader` value. */
      resetFormat: zod.z.enum([
        "unix_timestamp",
        "unix_timestamp_in_ms",
        "iso_8601",
        "iso_8601_duration_openai_variant"
      ]).default("unix_timestamp").optional()
    });
    var FetchRetryBackoffStrategy = RetryOptions.extend({
      /** The `backoff` strategy retries the request with an exponential backoff. */
      strategy: zod.z.literal("backoff"),
      /** The event filter to use to determine if the request should be retried. */
      bodyFilter: EventFilter.optional()
    });
    var FetchRetryStrategy = zod.z.discriminatedUnion("strategy", [
      FetchRetryHeadersStrategy,
      FetchRetryBackoffStrategy
    ]);
    var FetchRetryByStatusOptions = zod.z.record(zod.z.string(), FetchRetryStrategy);
    var FetchTimeoutOptions = zod.z.object({
      /** The maximum time to wait for the request to complete. */
      durationInMs: zod.z.number().optional(),
      retry: RetryOptions.optional()
    });
    var FetchRetryOptions = zod.z.object({
      /** The retrying strategy for specific status codes. */
      byStatus: FetchRetryByStatusOptions.optional(),
      /** The timeout options for the request. */
      timeout: RetryOptions.optional(),
      /**
      * The retrying strategy for connection errors.
      */
      connectionError: RetryOptions.optional()
    });
    var ExceptionEventProperties = zod.z.object({
      type: zod.z.string().optional(),
      message: zod.z.string().optional(),
      stacktrace: zod.z.string().optional()
    });
    var ExceptionSpanEvent = zod.z.object({
      name: zod.z.literal("exception"),
      time: zod.z.coerce.date(),
      properties: zod.z.object({
        exception: ExceptionEventProperties
      })
    });
    var CancellationSpanEvent = zod.z.object({
      name: zod.z.literal("cancellation"),
      time: zod.z.coerce.date(),
      properties: zod.z.object({
        reason: zod.z.string()
      })
    });
    var OtherSpanEvent = zod.z.object({
      name: zod.z.string(),
      time: zod.z.coerce.date(),
      properties: zod.z.record(zod.z.unknown())
    });
    var SpanEvent = zod.z.union([
      ExceptionSpanEvent,
      CancellationSpanEvent,
      OtherSpanEvent
    ]);
    var SpanEvents = zod.z.array(SpanEvent);
    function isExceptionSpanEvent(event) {
      return event.name === "exception";
    }
    __name4(isExceptionSpanEvent, "isExceptionSpanEvent");
    function isCancellationSpanEvent(event) {
      return event.name === "cancellation";
    }
    __name4(isCancellationSpanEvent, "isCancellationSpanEvent");
    var SpanMessagingEvent = zod.z.object({
      system: zod.z.string().optional(),
      client_id: zod.z.string().optional(),
      operation: zod.z.enum([
        "publish",
        "create",
        "receive",
        "deliver"
      ]),
      message: zod.z.any(),
      destination: zod.z.string().optional()
    });
    var _globalThis = typeof globalThis === "object" ? globalThis : global;
    var GLOBAL_TRIGGER_DOT_DEV_KEY = Symbol.for(`dev.trigger.ts.api`);
    var _global = _globalThis;
    function registerGlobal(type, instance, allowOverride = false) {
      const api2 = _global[GLOBAL_TRIGGER_DOT_DEV_KEY] = _global[GLOBAL_TRIGGER_DOT_DEV_KEY] ?? {};
      if (!allowOverride && api2[type]) {
        return false;
      }
      api2[type] = instance;
      return true;
    }
    __name4(registerGlobal, "registerGlobal");
    function getGlobal(type) {
      return _global[GLOBAL_TRIGGER_DOT_DEV_KEY]?.[type];
    }
    __name4(getGlobal, "getGlobal");
    function unregisterGlobal(type) {
      const api2 = _global[GLOBAL_TRIGGER_DOT_DEV_KEY];
      if (api2) {
        delete api2[type];
      }
    }
    __name4(unregisterGlobal, "unregisterGlobal");
    var SemanticInternalAttributes = {
      ENVIRONMENT_ID: "ctx.environment.id",
      ENVIRONMENT_TYPE: "ctx.environment.type",
      ORGANIZATION_ID: "ctx.organization.id",
      ORGANIZATION_SLUG: "ctx.organization.slug",
      ORGANIZATION_NAME: "ctx.organization.name",
      PROJECT_ID: "ctx.project.id",
      PROJECT_REF: "ctx.project.ref",
      PROJECT_NAME: "ctx.project.title",
      PROJECT_DIR: "project.dir",
      ATTEMPT_ID: "ctx.attempt.id",
      ATTEMPT_NUMBER: "ctx.attempt.number",
      RUN_ID: "ctx.run.id",
      RUN_IS_TEST: "ctx.run.isTest",
      BATCH_ID: "ctx.batch.id",
      TASK_SLUG: "ctx.task.id",
      TASK_PATH: "ctx.task.filePath",
      TASK_EXPORT_NAME: "ctx.task.exportName",
      QUEUE_NAME: "ctx.queue.name",
      QUEUE_ID: "ctx.queue.id",
      MACHINE_PRESET_NAME: "ctx.machine.name",
      MACHINE_PRESET_CPU: "ctx.machine.cpu",
      MACHINE_PRESET_MEMORY: "ctx.machine.memory",
      MACHINE_PRESET_CENTS_PER_MS: "ctx.machine.centsPerMs",
      SPAN_PARTIAL: "$span.partial",
      SPAN_ID: "$span.span_id",
      OUTPUT: "$output",
      OUTPUT_TYPE: "$mime_type_output",
      STYLE: "$style",
      STYLE_ICON: "$style.icon",
      STYLE_VARIANT: "$style.variant",
      STYLE_ACCESSORY: "$style.accessory",
      METADATA: "$metadata",
      TRIGGER: "$trigger",
      PAYLOAD: "$payload",
      PAYLOAD_TYPE: "$mime_type_payload",
      SHOW: "$show",
      SHOW_ACTIONS: "$show.actions",
      WORKER_ID: "worker.id",
      WORKER_VERSION: "worker.version",
      CLI_VERSION: "cli.version",
      SDK_VERSION: "sdk.version",
      SDK_LANGUAGE: "sdk.language",
      RETRY_AT: "retry.at",
      RETRY_DELAY: "retry.delay",
      RETRY_COUNT: "retry.count",
      LINK_TITLE: "$link.title",
      IDEMPOTENCY_KEY: "ctx.run.idempotencyKey",
      USAGE_DURATION_MS: "$usage.durationMs",
      USAGE_COST_IN_CENTS: "$usage.costInCents",
      RATE_LIMIT_LIMIT: "response.rateLimit.limit",
      RATE_LIMIT_REMAINING: "response.rateLimit.remaining",
      RATE_LIMIT_RESET: "response.rateLimit.reset"
    };
    var API_NAME = "task-context";
    var _getTaskContext;
    var getTaskContext_fn;
    var _TaskContextAPI = class _TaskContextAPI2 {
      constructor() {
        __privateAdd3(this, _getTaskContext);
      }
      static getInstance() {
        if (!this._instance) {
          this._instance = new _TaskContextAPI2();
        }
        return this._instance;
      }
      get isInsideTask() {
        return __privateMethod3(this, _getTaskContext, getTaskContext_fn).call(this) !== void 0;
      }
      get ctx() {
        return __privateMethod3(this, _getTaskContext, getTaskContext_fn).call(this)?.ctx;
      }
      get worker() {
        return __privateMethod3(this, _getTaskContext, getTaskContext_fn).call(this)?.worker;
      }
      get attributes() {
        if (this.ctx) {
          return {
            ...this.contextAttributes,
            ...this.workerAttributes
          };
        }
        return {};
      }
      get workerAttributes() {
        if (this.worker) {
          return {
            [SemanticInternalAttributes.WORKER_ID]: this.worker.id,
            [SemanticInternalAttributes.WORKER_VERSION]: this.worker.version
          };
        }
        return {};
      }
      get contextAttributes() {
        if (this.ctx) {
          return {
            [SemanticInternalAttributes.ATTEMPT_ID]: this.ctx.attempt.id,
            [SemanticInternalAttributes.ATTEMPT_NUMBER]: this.ctx.attempt.number,
            [SemanticInternalAttributes.TASK_SLUG]: this.ctx.task.id,
            [SemanticInternalAttributes.TASK_PATH]: this.ctx.task.filePath,
            [SemanticInternalAttributes.TASK_EXPORT_NAME]: this.ctx.task.exportName,
            [SemanticInternalAttributes.QUEUE_NAME]: this.ctx.queue.name,
            [SemanticInternalAttributes.QUEUE_ID]: this.ctx.queue.id,
            [SemanticInternalAttributes.ENVIRONMENT_ID]: this.ctx.environment.id,
            [SemanticInternalAttributes.ENVIRONMENT_TYPE]: this.ctx.environment.type,
            [SemanticInternalAttributes.ORGANIZATION_ID]: this.ctx.organization.id,
            [SemanticInternalAttributes.PROJECT_ID]: this.ctx.project.id,
            [SemanticInternalAttributes.PROJECT_REF]: this.ctx.project.ref,
            [SemanticInternalAttributes.PROJECT_NAME]: this.ctx.project.name,
            [SemanticInternalAttributes.RUN_ID]: this.ctx.run.id,
            [SemanticInternalAttributes.RUN_IS_TEST]: this.ctx.run.isTest,
            [SemanticInternalAttributes.ORGANIZATION_SLUG]: this.ctx.organization.slug,
            [SemanticInternalAttributes.ORGANIZATION_NAME]: this.ctx.organization.name,
            [SemanticInternalAttributes.BATCH_ID]: this.ctx.batch?.id,
            [SemanticInternalAttributes.IDEMPOTENCY_KEY]: this.ctx.run.idempotencyKey,
            [SemanticInternalAttributes.MACHINE_PRESET_NAME]: this.ctx.machine?.name,
            [SemanticInternalAttributes.MACHINE_PRESET_CPU]: this.ctx.machine?.cpu,
            [SemanticInternalAttributes.MACHINE_PRESET_MEMORY]: this.ctx.machine?.memory,
            [SemanticInternalAttributes.MACHINE_PRESET_CENTS_PER_MS]: this.ctx.machine?.centsPerMs
          };
        }
        return {};
      }
      disable() {
        unregisterGlobal(API_NAME);
      }
      setGlobalTaskContext(taskContext2) {
        return registerGlobal(API_NAME, taskContext2);
      }
    };
    _getTaskContext = /* @__PURE__ */ new WeakSet();
    getTaskContext_fn = /* @__PURE__ */ __name4(function() {
      return getGlobal(API_NAME);
    }, "#getTaskContext");
    __name4(_TaskContextAPI, "TaskContextAPI");
    var TaskContextAPI = _TaskContextAPI;
    var taskContext = TaskContextAPI.getInstance();
    function calculateResetAt2(resets, format, now = /* @__PURE__ */ new Date()) {
      if (!resets)
        return;
      switch (format) {
        case "iso_8601_duration_openai_variant": {
          return calculateISO8601DurationOpenAIVariantResetAt2(resets, now);
        }
        case "iso_8601": {
          return calculateISO8601ResetAt2(resets, now);
        }
        case "unix_timestamp": {
          return calculateUnixTimestampResetAt2(resets, now);
        }
        case "unix_timestamp_in_ms": {
          return calculateUnixTimestampInMsResetAt2(resets, now);
        }
      }
    }
    __name4(calculateResetAt2, "calculateResetAt");
    function calculateUnixTimestampResetAt2(resets, now = /* @__PURE__ */ new Date()) {
      if (!resets)
        return void 0;
      const resetAt = parseInt(resets, 10);
      if (isNaN(resetAt))
        return void 0;
      return new Date(resetAt * 1e3);
    }
    __name4(calculateUnixTimestampResetAt2, "calculateUnixTimestampResetAt");
    function calculateUnixTimestampInMsResetAt2(resets, now = /* @__PURE__ */ new Date()) {
      if (!resets)
        return void 0;
      const resetAt = parseInt(resets, 10);
      if (isNaN(resetAt))
        return void 0;
      return new Date(resetAt);
    }
    __name4(calculateUnixTimestampInMsResetAt2, "calculateUnixTimestampInMsResetAt");
    function calculateISO8601ResetAt2(resets, now = /* @__PURE__ */ new Date()) {
      if (!resets)
        return void 0;
      const resetAt = new Date(resets);
      if (isNaN(resetAt.getTime()))
        return void 0;
      return resetAt;
    }
    __name4(calculateISO8601ResetAt2, "calculateISO8601ResetAt");
    function calculateISO8601DurationOpenAIVariantResetAt2(resets, now = /* @__PURE__ */ new Date()) {
      if (!resets)
        return void 0;
      const pattern = /^(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:(\d+(?:\.\d+)?)s)?(?:(\d+)ms)?$/;
      const match = resets.match(pattern);
      if (!match)
        return void 0;
      const days = parseInt(match[1], 10) || 0;
      const hours = parseInt(match[2], 10) || 0;
      const minutes = parseInt(match[3], 10) || 0;
      const seconds = parseFloat(match[4]) || 0;
      const milliseconds = parseInt(match[5], 10) || 0;
      const resetAt = new Date(now);
      resetAt.setDate(resetAt.getDate() + days);
      resetAt.setHours(resetAt.getHours() + hours);
      resetAt.setMinutes(resetAt.getMinutes() + minutes);
      resetAt.setSeconds(resetAt.getSeconds() + Math.floor(seconds));
      resetAt.setMilliseconds(resetAt.getMilliseconds() + (seconds - Math.floor(seconds)) * 1e3 + milliseconds);
      return resetAt;
    }
    __name4(calculateISO8601DurationOpenAIVariantResetAt2, "calculateISO8601DurationOpenAIVariantResetAt");
    var defaultRetryOptions = {
      maxAttempts: 3,
      factor: 2,
      minTimeoutInMs: 1e3,
      maxTimeoutInMs: 6e4,
      randomize: true
    };
    var defaultFetchRetryOptions = {
      byStatus: {
        "429,408,409,5xx": {
          strategy: "backoff",
          ...defaultRetryOptions
        }
      },
      connectionError: defaultRetryOptions,
      timeout: defaultRetryOptions
    };
    function calculateNextRetryDelay(options, attempt) {
      const opts = {
        ...defaultRetryOptions,
        ...options
      };
      if (attempt >= opts.maxAttempts) {
        return;
      }
      const { factor, minTimeoutInMs, maxTimeoutInMs, randomize } = opts;
      const random = randomize ? Math.random() + 1 : 1;
      const timeout = Math.min(maxTimeoutInMs, random * minTimeoutInMs * Math.pow(factor, attempt - 1));
      return Math.round(timeout);
    }
    __name4(calculateNextRetryDelay, "calculateNextRetryDelay");
    function calculateResetAt22(resets, format, now = Date.now()) {
      const resetAt = calculateResetAt2(resets, format, new Date(now));
      return resetAt?.getTime();
    }
    __name4(calculateResetAt22, "calculateResetAt");
    var _ApiError = class _ApiError2 extends Error {
      constructor(status, error, message, headers) {
        super(`${_ApiError2.makeMessage(status, error, message)}`);
        this.name = "TriggerApiError";
        this.status = status;
        this.headers = headers;
        const data = error;
        this.error = data;
        this.code = data?.["code"];
        this.param = data?.["param"];
        this.type = data?.["type"];
      }
      static makeMessage(status, error, message) {
        const msg = error?.message ? typeof error.message === "string" ? error.message : JSON.stringify(error.message) : error ? JSON.stringify(error) : message;
        if (status && msg) {
          return `${status} ${msg}`;
        }
        if (status) {
          return `${status} status code (no body)`;
        }
        if (msg) {
          return msg;
        }
        return "(no status code or body)";
      }
      static generate(status, errorResponse, message, headers) {
        if (!status) {
          return new ApiConnectionError({
            cause: castToError(errorResponse)
          });
        }
        const error = errorResponse?.["error"];
        if (status === 400) {
          return new BadRequestError(status, error, message, headers);
        }
        if (status === 401) {
          return new AuthenticationError(status, error, message, headers);
        }
        if (status === 403) {
          return new PermissionDeniedError(status, error, message, headers);
        }
        if (status === 404) {
          return new NotFoundError(status, error, message, headers);
        }
        if (status === 409) {
          return new ConflictError(status, error, message, headers);
        }
        if (status === 422) {
          return new UnprocessableEntityError(status, error, message, headers);
        }
        if (status === 429) {
          return new RateLimitError(status, error, message, headers);
        }
        if (status >= 500) {
          return new InternalServerError(status, error, message, headers);
        }
        return new _ApiError2(status, error, message, headers);
      }
    };
    __name4(_ApiError, "ApiError");
    var ApiError = _ApiError;
    var _ApiConnectionError = class _ApiConnectionError extends ApiError {
      constructor({ message, cause }) {
        super(void 0, void 0, message || "Connection error.", void 0);
        __publicField3(this, "status");
        if (cause)
          this.cause = cause;
      }
    };
    __name4(_ApiConnectionError, "ApiConnectionError");
    var ApiConnectionError = _ApiConnectionError;
    var _BadRequestError = class _BadRequestError extends ApiError {
      constructor() {
        super(...arguments);
        __publicField3(this, "status", 400);
      }
    };
    __name4(_BadRequestError, "BadRequestError");
    var BadRequestError = _BadRequestError;
    var _AuthenticationError = class _AuthenticationError extends ApiError {
      constructor() {
        super(...arguments);
        __publicField3(this, "status", 401);
      }
    };
    __name4(_AuthenticationError, "AuthenticationError");
    var AuthenticationError = _AuthenticationError;
    var _PermissionDeniedError = class _PermissionDeniedError extends ApiError {
      constructor() {
        super(...arguments);
        __publicField3(this, "status", 403);
      }
    };
    __name4(_PermissionDeniedError, "PermissionDeniedError");
    var PermissionDeniedError = _PermissionDeniedError;
    var _NotFoundError = class _NotFoundError extends ApiError {
      constructor() {
        super(...arguments);
        __publicField3(this, "status", 404);
      }
    };
    __name4(_NotFoundError, "NotFoundError");
    var NotFoundError = _NotFoundError;
    var _ConflictError = class _ConflictError extends ApiError {
      constructor() {
        super(...arguments);
        __publicField3(this, "status", 409);
      }
    };
    __name4(_ConflictError, "ConflictError");
    var ConflictError = _ConflictError;
    var _UnprocessableEntityError = class _UnprocessableEntityError extends ApiError {
      constructor() {
        super(...arguments);
        __publicField3(this, "status", 422);
      }
    };
    __name4(_UnprocessableEntityError, "UnprocessableEntityError");
    var UnprocessableEntityError = _UnprocessableEntityError;
    var _RateLimitError = class _RateLimitError extends ApiError {
      constructor() {
        super(...arguments);
        __publicField3(this, "status", 429);
      }
      get millisecondsUntilReset() {
        const resetAtUnixEpochMs = (this.headers ?? {})["x-ratelimit-reset"];
        if (typeof resetAtUnixEpochMs === "string") {
          const resetAtUnixEpoch = parseInt(resetAtUnixEpochMs, 10);
          if (isNaN(resetAtUnixEpoch)) {
            return;
          }
          return Math.max(resetAtUnixEpoch - Date.now() + Math.floor(Math.random() * 2e3), 0);
        }
      }
    };
    __name4(_RateLimitError, "RateLimitError");
    var RateLimitError = _RateLimitError;
    var _InternalServerError = class _InternalServerError extends ApiError {
    };
    __name4(_InternalServerError, "InternalServerError");
    var InternalServerError = _InternalServerError;
    function castToError(err) {
      if (err instanceof Error)
        return err;
      return new Error(err);
    }
    __name4(castToError, "castToError");
    var NULL_SENTINEL = "$@null((";
    function flattenAttributes(obj, prefix) {
      const result = {};
      if (obj === void 0) {
        return result;
      }
      if (obj === null) {
        result[prefix || ""] = NULL_SENTINEL;
        return result;
      }
      if (typeof obj === "string") {
        result[prefix || ""] = obj;
        return result;
      }
      if (typeof obj === "number") {
        result[prefix || ""] = obj;
        return result;
      }
      if (typeof obj === "boolean") {
        result[prefix || ""] = obj;
        return result;
      }
      for (const [key, value] of Object.entries(obj)) {
        const newPrefix = `${prefix ? `${prefix}.` : ""}${Array.isArray(obj) ? `[${key}]` : key}`;
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            if (typeof value[i] === "object" && value[i] !== null) {
              Object.assign(result, flattenAttributes(value[i], `${newPrefix}.[${i}]`));
            } else {
              if (value[i] === null) {
                result[`${newPrefix}.[${i}]`] = NULL_SENTINEL;
              } else {
                result[`${newPrefix}.[${i}]`] = value[i];
              }
            }
          }
        } else if (isRecord(value)) {
          Object.assign(result, flattenAttributes(value, newPrefix));
        } else {
          if (typeof value === "number" || typeof value === "string" || typeof value === "boolean") {
            result[newPrefix] = value;
          } else if (value === null) {
            result[newPrefix] = NULL_SENTINEL;
          }
        }
      }
      return result;
    }
    __name4(flattenAttributes, "flattenAttributes");
    function isRecord(value) {
      return value !== null && typeof value === "object" && !Array.isArray(value);
    }
    __name4(isRecord, "isRecord");
    function unflattenAttributes(obj) {
      if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return obj;
      }
      if (typeof obj === "object" && obj !== null && Object.keys(obj).length === 1 && Object.keys(obj)[0] === "") {
        return rehydrateNull(obj[""]);
      }
      if (Object.keys(obj).length === 0) {
        return;
      }
      const result = {};
      for (const [key, value] of Object.entries(obj)) {
        const parts = key.split(".").reduce((acc, part) => {
          if (part.includes("[")) {
            const subparts = part.split(/\[|\]/).filter((p) => p !== "");
            acc.push(...subparts);
          } else {
            acc.push(part);
          }
          return acc;
        }, []);
        let current = result;
        for (let i = 0; i < parts.length - 1; i++) {
          const part = parts[i];
          const nextPart = parts[i + 1];
          const isArray = /^\d+$/.test(nextPart);
          if (isArray && !Array.isArray(current[part])) {
            current[part] = [];
          } else if (!isArray && current[part] === void 0) {
            current[part] = {};
          }
          current = current[part];
        }
        const lastPart = parts[parts.length - 1];
        current[lastPart] = rehydrateNull(value);
      }
      if (Object.keys(result).every((k) => /^\d+$/.test(k))) {
        const maxIndex = Math.max(...Object.keys(result).map((k) => parseInt(k)));
        const arrayResult = Array(maxIndex + 1);
        for (const key in result) {
          arrayResult[parseInt(key)] = result[key];
        }
        return arrayResult;
      }
      return result;
    }
    __name4(unflattenAttributes, "unflattenAttributes");
    function primitiveValueOrflattenedAttributes(obj, prefix) {
      if (typeof obj === "string" || typeof obj === "number" || typeof obj === "boolean" || obj === null || obj === void 0) {
        return obj;
      }
      const attributes = flattenAttributes(obj, prefix);
      if (prefix !== void 0 && typeof attributes[prefix] !== "undefined" && attributes[prefix] !== null) {
        return attributes[prefix];
      }
      return attributes;
    }
    __name4(primitiveValueOrflattenedAttributes, "primitiveValueOrflattenedAttributes");
    function rehydrateNull(value) {
      if (value === NULL_SENTINEL) {
        return null;
      }
      return value;
    }
    __name4(rehydrateNull, "rehydrateNull");
    function accessoryAttributes(accessory) {
      return flattenAttributes(accessory, SemanticInternalAttributes.STYLE_ACCESSORY);
    }
    __name4(accessoryAttributes, "accessoryAttributes");
    var _CursorPage = class _CursorPage {
      constructor(data, pagination, pageFetcher) {
        this.pageFetcher = pageFetcher;
        this.data = data;
        this.pagination = pagination;
      }
      getPaginatedItems() {
        return this.data ?? [];
      }
      hasNextPage() {
        return !!this.pagination.next;
      }
      hasPreviousPage() {
        return !!this.pagination.previous;
      }
      getNextPage() {
        if (!this.pagination.next) {
          throw new Error("No next page available");
        }
        return this.pageFetcher({
          after: this.pagination.next
        });
      }
      getPreviousPage() {
        if (!this.pagination.previous) {
          throw new Error("No previous page available");
        }
        return this.pageFetcher({
          before: this.pagination.previous
        });
      }
      async *iterPages() {
        let page = this;
        yield page;
        while (page.hasNextPage()) {
          page = await page.getNextPage();
          yield page;
        }
      }
      async *[Symbol.asyncIterator]() {
        for await (const page of this.iterPages()) {
          for (const item of page.getPaginatedItems()) {
            yield item;
          }
        }
      }
    };
    __name4(_CursorPage, "CursorPage");
    var CursorPage = _CursorPage;
    var _OffsetLimitPage = class _OffsetLimitPage {
      constructor(data, pagination, pageFetcher) {
        this.pageFetcher = pageFetcher;
        this.data = data;
        this.pagination = pagination;
      }
      getPaginatedItems() {
        return this.data ?? [];
      }
      hasNextPage() {
        return this.pagination.currentPage < this.pagination.totalPages;
      }
      hasPreviousPage() {
        return this.pagination.currentPage > 1;
      }
      getNextPage() {
        if (!this.hasNextPage()) {
          throw new Error("No next page available");
        }
        return this.pageFetcher({
          page: this.pagination.currentPage + 1
        });
      }
      getPreviousPage() {
        if (!this.hasPreviousPage()) {
          throw new Error("No previous page available");
        }
        return this.pageFetcher({
          page: this.pagination.currentPage - 1
        });
      }
      async *iterPages() {
        let page = this;
        yield page;
        while (page.hasNextPage()) {
          page = await page.getNextPage();
          yield page;
        }
      }
      async *[Symbol.asyncIterator]() {
        for await (const page of this.iterPages()) {
          for (const item of page.getPaginatedItems()) {
            yield item;
          }
        }
      }
    };
    __name4(_OffsetLimitPage, "OffsetLimitPage");
    var OffsetLimitPage = _OffsetLimitPage;
    var defaultRetryOptions2 = {
      maxAttempts: 3,
      factor: 2,
      minTimeoutInMs: 1e3,
      maxTimeoutInMs: 6e4,
      randomize: false
    };
    var requestOptionsKeys = {
      retry: true
    };
    var isRequestOptions = /* @__PURE__ */ __name4((obj) => {
      return typeof obj === "object" && obj !== null && !isEmptyObj(obj) && Object.keys(obj).every((k) => hasOwn(requestOptionsKeys, k));
    }, "isRequestOptions");
    function zodfetch2(schema, url, requestInit, options) {
      return new ApiPromise(_doZodFetch(schema, url, requestInit, options));
    }
    __name4(zodfetch2, "zodfetch");
    function zodfetchCursorPage(schema, url, params, requestInit, options) {
      const query = new URLSearchParams(params.query);
      if (params.limit) {
        query.set("page[size]", String(params.limit));
      }
      if (params.after) {
        query.set("page[after]", params.after);
      }
      if (params.before) {
        query.set("page[before]", params.before);
      }
      const cursorPageSchema = zod.z.object({
        data: zod.z.array(schema),
        pagination: zod.z.object({
          next: zod.z.string().optional(),
          previous: zod.z.string().optional()
        })
      });
      const $url = new URL(url);
      $url.search = query.toString();
      const fetchResult = _doZodFetch(cursorPageSchema, $url.href, requestInit, options);
      return new CursorPagePromise(fetchResult, schema, url, params, requestInit, options);
    }
    __name4(zodfetchCursorPage, "zodfetchCursorPage");
    function zodfetchOffsetLimitPage(schema, url, params, requestInit, options) {
      const query = new URLSearchParams(params.query);
      if (params.limit) {
        query.set("perPage", String(params.limit));
      }
      if (params.page) {
        query.set("page", String(params.page));
      }
      const offsetLimitPageSchema = zod.z.object({
        data: zod.z.array(schema),
        pagination: zod.z.object({
          currentPage: zod.z.coerce.number(),
          totalPages: zod.z.coerce.number(),
          count: zod.z.coerce.number()
        })
      });
      const $url = new URL(url);
      $url.search = query.toString();
      const fetchResult = _doZodFetch(offsetLimitPageSchema, $url.href, requestInit, options);
      return new OffsetLimitPagePromise(fetchResult, schema, url, params, requestInit, options);
    }
    __name4(zodfetchOffsetLimitPage, "zodfetchOffsetLimitPage");
    async function traceZodFetch(params, callback) {
      if (!params.options?.tracer) {
        return callback();
      }
      const url = new URL(params.url);
      const method = params.requestInit?.method ?? "GET";
      const name = params.options.name ?? `${method} ${url.pathname}`;
      return await params.options.tracer.startActiveSpan(name, async (span) => {
        return await callback(span);
      }, {
        attributes: {
          [SemanticInternalAttributes.STYLE_ICON]: params.options?.icon ?? "api",
          ...params.options.attributes
        }
      });
    }
    __name4(traceZodFetch, "traceZodFetch");
    async function _doZodFetch(schema, url, requestInit, options) {
      const $requestInit = await requestInit;
      return traceZodFetch({
        url,
        requestInit: $requestInit,
        options
      }, async (span) => {
        const result = await _doZodFetchWithRetries(schema, url, $requestInit, options);
        if (options?.onResponseBody && span) {
          options.onResponseBody(result.data, span);
        }
        return result;
      });
    }
    __name4(_doZodFetch, "_doZodFetch");
    async function _doZodFetchWithRetries(schema, url, requestInit, options, attempt = 1) {
      try {
        const response = await fetch(url, requestInitWithCache2(requestInit));
        const responseHeaders = createResponseHeaders(response.headers);
        if (!response.ok) {
          const retryResult = shouldRetry(response, attempt, options?.retry);
          if (retryResult.retry) {
            await waitForRetry(url, attempt + 1, retryResult.delay, options, requestInit, response);
            return await _doZodFetchWithRetries(schema, url, requestInit, options, attempt + 1);
          } else {
            const errText = await response.text().catch((e) => castToError2(e).message);
            const errJSON = safeJsonParse2(errText);
            const errMessage = errJSON ? void 0 : errText;
            throw ApiError.generate(response.status, errJSON, errMessage, responseHeaders);
          }
        }
        const jsonBody = await response.json();
        const parsedResult = schema.safeParse(jsonBody);
        if (parsedResult.success) {
          return {
            data: parsedResult.data,
            response
          };
        }
        throw zodValidationError.fromZodError(parsedResult.error);
      } catch (error) {
        if (error instanceof ApiError) {
          throw error;
        }
        if (options?.retry) {
          const retry = {
            ...defaultRetryOptions2,
            ...options.retry
          };
          const delay = calculateNextRetryDelay(retry, attempt);
          if (delay) {
            await waitForRetry(url, attempt + 1, delay, options, requestInit);
            return await _doZodFetchWithRetries(schema, url, requestInit, options, attempt + 1);
          }
        }
        throw new ApiConnectionError({
          cause: castToError2(error)
        });
      }
    }
    __name4(_doZodFetchWithRetries, "_doZodFetchWithRetries");
    function castToError2(err) {
      if (err instanceof Error)
        return err;
      return new Error(err);
    }
    __name4(castToError2, "castToError");
    function shouldRetry(response, attempt, retryOptions) {
      function shouldRetryForOptions() {
        const retry = {
          ...defaultRetryOptions2,
          ...retryOptions
        };
        const delay = calculateNextRetryDelay(retry, attempt);
        if (delay) {
          return {
            retry: true,
            delay
          };
        } else {
          return {
            retry: false
          };
        }
      }
      __name4(shouldRetryForOptions, "shouldRetryForOptions");
      const shouldRetryHeader = response.headers.get("x-should-retry");
      if (shouldRetryHeader === "true")
        return shouldRetryForOptions();
      if (shouldRetryHeader === "false")
        return {
          retry: false
        };
      if (response.status === 408)
        return shouldRetryForOptions();
      if (response.status === 409)
        return shouldRetryForOptions();
      if (response.status === 429) {
        if (attempt >= (typeof retryOptions?.maxAttempts === "number" ? retryOptions?.maxAttempts : 3)) {
          return {
            retry: false
          };
        }
        const resetAtUnixEpochMs = response.headers.get("x-ratelimit-reset");
        if (resetAtUnixEpochMs) {
          const resetAtUnixEpoch = parseInt(resetAtUnixEpochMs, 10);
          const delay = resetAtUnixEpoch - Date.now() + Math.floor(Math.random() * 1e3);
          if (delay > 0) {
            return {
              retry: true,
              delay
            };
          }
        }
        return shouldRetryForOptions();
      }
      if (response.status >= 500)
        return shouldRetryForOptions();
      return {
        retry: false
      };
    }
    __name4(shouldRetry, "shouldRetry");
    function safeJsonParse2(text) {
      try {
        return JSON.parse(text);
      } catch (e) {
        return void 0;
      }
    }
    __name4(safeJsonParse2, "safeJsonParse");
    function createResponseHeaders(headers) {
      return new Proxy(Object.fromEntries(
        // @ts-ignore
        headers.entries()
      ), {
        get(target, name) {
          const key = name.toString();
          return target[key.toLowerCase()] || target[key];
        }
      });
    }
    __name4(createResponseHeaders, "createResponseHeaders");
    function requestInitWithCache2(requestInit) {
      try {
        const withCache = {
          ...requestInit,
          cache: "no-cache"
        };
        const _ = new Request("http://localhost", withCache);
        return withCache;
      } catch (error) {
        return requestInit ?? {};
      }
    }
    __name4(requestInitWithCache2, "requestInitWithCache");
    var _ApiPromise = class _ApiPromise extends Promise {
      constructor(responsePromise) {
        super((resolve) => {
          resolve(null);
        });
        this.responsePromise = responsePromise;
      }
      /**
      * Gets the raw `Response` instance instead of parsing the response
      * data.
      *
      * If you want to parse the response body but still get the `Response`
      * instance, you can use {@link withResponse()}.
      */
      asResponse() {
        return this.responsePromise.then((p) => p.response);
      }
      /**
      * Gets the parsed response data and the raw `Response` instance.
      *
      * If you just want to get the raw `Response` instance without parsing it,
      * you can use {@link asResponse()}.
      */
      async withResponse() {
        const [data, response] = await Promise.all([
          this.parse(),
          this.asResponse()
        ]);
        return {
          data,
          response
        };
      }
      parse() {
        return this.responsePromise.then((result) => result.data);
      }
      then(onfulfilled, onrejected) {
        return this.parse().then(onfulfilled, onrejected);
      }
      catch(onrejected) {
        return this.parse().catch(onrejected);
      }
      finally(onfinally) {
        return this.parse().finally(onfinally);
      }
    };
    __name4(_ApiPromise, "ApiPromise");
    var ApiPromise = _ApiPromise;
    var _fetchPage;
    var fetchPage_fn;
    var _CursorPagePromise = class _CursorPagePromise extends ApiPromise {
      constructor(result, schema, url, params, requestInit, options) {
        super(result.then((result2) => ({
          data: new CursorPage(result2.data.data, result2.data.pagination, __privateMethod3(this, _fetchPage, fetchPage_fn).bind(this)),
          response: result2.response
        })));
        __privateAdd3(this, _fetchPage);
        this.schema = schema;
        this.url = url;
        this.params = params;
        this.requestInit = requestInit;
        this.options = options;
      }
      /**
      * Allow auto-paginating iteration on an unawaited list call, eg:
      *
      *    for await (const item of client.items.list()) {
      *      console.log(item)
      *    }
      */
      async *[Symbol.asyncIterator]() {
        const page = await this;
        for await (const item of page) {
          yield item;
        }
      }
    };
    _fetchPage = /* @__PURE__ */ new WeakSet();
    fetchPage_fn = /* @__PURE__ */ __name4(function(params) {
      return zodfetchCursorPage(this.schema, this.url, {
        ...this.params,
        ...params
      }, this.requestInit, this.options);
    }, "#fetchPage");
    __name4(_CursorPagePromise, "CursorPagePromise");
    var CursorPagePromise = _CursorPagePromise;
    var _fetchPage2;
    var fetchPage_fn2;
    var _OffsetLimitPagePromise = class _OffsetLimitPagePromise extends ApiPromise {
      constructor(result, schema, url, params, requestInit, options) {
        super(result.then((result2) => ({
          data: new OffsetLimitPage(result2.data.data, result2.data.pagination, __privateMethod3(this, _fetchPage2, fetchPage_fn2).bind(this)),
          response: result2.response
        })));
        __privateAdd3(this, _fetchPage2);
        this.schema = schema;
        this.url = url;
        this.params = params;
        this.requestInit = requestInit;
        this.options = options;
      }
      /**
      * Allow auto-paginating iteration on an unawaited list call, eg:
      *
      *    for await (const item of client.items.list()) {
      *      console.log(item)
      *    }
      */
      async *[Symbol.asyncIterator]() {
        const page = await this;
        for await (const item of page) {
          yield item;
        }
      }
    };
    _fetchPage2 = /* @__PURE__ */ new WeakSet();
    fetchPage_fn2 = /* @__PURE__ */ __name4(function(params1) {
      return zodfetchOffsetLimitPage(this.schema, this.url, {
        ...this.params,
        ...params1
      }, this.requestInit, this.options);
    }, "#fetchPage");
    __name4(_OffsetLimitPagePromise, "OffsetLimitPagePromise");
    var OffsetLimitPagePromise = _OffsetLimitPagePromise;
    async function waitForRetry(url, attempt, delay, options, requestInit, response) {
      if (options?.tracer) {
        const method = requestInit?.method ?? "GET";
        return options.tracer.startActiveSpan(response ? `wait after ${response.status}` : `wait after error`, async (span) => {
          await new Promise((resolve) => setTimeout(resolve, delay));
        }, {
          attributes: {
            [SemanticInternalAttributes.STYLE_ICON]: "wait",
            ...accessoryAttributes({
              items: [
                {
                  text: `retrying ${options?.name ?? method.toUpperCase()} in ${delay}ms`,
                  variant: "normal"
                }
              ],
              style: "codepath"
            })
          }
        });
      }
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    __name4(waitForRetry, "waitForRetry");
    function isEmptyObj(obj) {
      if (!obj)
        return true;
      for (const _k in obj)
        return false;
      return true;
    }
    __name4(isEmptyObj, "isEmptyObj");
    function hasOwn(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
    __name4(hasOwn, "hasOwn");
    var DEFAULT_ZOD_FETCH_OPTIONS = {
      retry: {
        maxAttempts: 3,
        minTimeoutInMs: 1e3,
        maxTimeoutInMs: 3e4,
        factor: 2,
        randomize: false
      }
    };
    var _getHeaders;
    var getHeaders_fn;
    var _ApiClient3 = class _ApiClient {
      constructor(baseUrl, accessToken, requestOptions = {}) {
        __privateAdd3(this, _getHeaders);
        this.accessToken = accessToken;
        this.baseUrl = baseUrl.replace(/\/$/, "");
        this.defaultRequestOptions = mergeRequestOptions(DEFAULT_ZOD_FETCH_OPTIONS, requestOptions);
      }
      async getRunResult(runId, requestOptions) {
        try {
          return await zodfetch2(TaskRunExecutionResult, `${this.baseUrl}/api/v1/runs/${runId}/result`, {
            method: "GET",
            headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
          }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
        } catch (error) {
          if (error instanceof ApiError) {
            if (error.status === 404) {
              return void 0;
            }
          }
          throw error;
        }
      }
      async getBatchResults(batchId, requestOptions) {
        return await zodfetch2(BatchTaskRunExecutionResult, `${this.baseUrl}/api/v1/batches/${batchId}/results`, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      triggerTask(taskId, body, options, requestOptions) {
        const encodedTaskId = encodeURIComponent(taskId);
        return zodfetch2(TriggerTaskResponse, `${this.baseUrl}/api/v1/tasks/${encodedTaskId}/trigger`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, options?.spanParentAsLink ?? false),
          body: JSON.stringify(body)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      batchTriggerTask(taskId, body, options, requestOptions) {
        const encodedTaskId = encodeURIComponent(taskId);
        return zodfetch2(BatchTriggerTaskResponse, `${this.baseUrl}/api/v1/tasks/${encodedTaskId}/batch`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, options?.spanParentAsLink ?? false),
          body: JSON.stringify(body)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      createUploadPayloadUrl(filename, requestOptions) {
        return zodfetch2(CreateUploadPayloadUrlResponseBody, `${this.baseUrl}/api/v1/packets/${filename}`, {
          method: "PUT",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      getPayloadUrl(filename, requestOptions) {
        return zodfetch2(CreateUploadPayloadUrlResponseBody, `${this.baseUrl}/api/v1/packets/${filename}`, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      retrieveRun(runId, requestOptions) {
        return zodfetch2(RetrieveRunResponse, `${this.baseUrl}/api/v3/runs/${runId}`, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      listRuns(query, requestOptions) {
        const searchParams = createSearchQueryForListRuns(query);
        return zodfetchCursorPage(ListRunResponseItem, `${this.baseUrl}/api/v1/runs`, {
          query: searchParams,
          limit: query?.limit,
          after: query?.after,
          before: query?.before
        }, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      listProjectRuns(projectRef, query, requestOptions) {
        const searchParams = createSearchQueryForListRuns(query);
        if (query?.env) {
          searchParams.append("filter[env]", Array.isArray(query.env) ? query.env.join(",") : query.env);
        }
        return zodfetchCursorPage(ListRunResponseItem, `${this.baseUrl}/api/v1/projects/${projectRef}/runs`, {
          query: searchParams,
          limit: query?.limit,
          after: query?.after,
          before: query?.before
        }, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      replayRun(runId, requestOptions) {
        return zodfetch2(ReplayRunResponse, `${this.baseUrl}/api/v1/runs/${runId}/replay`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      cancelRun(runId, requestOptions) {
        return zodfetch2(CanceledRunResponse, `${this.baseUrl}/api/v2/runs/${runId}/cancel`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      rescheduleRun(runId, body, requestOptions) {
        return zodfetch2(RetrieveRunResponse, `${this.baseUrl}/api/v1/runs/${runId}/reschedule`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false),
          body: JSON.stringify(body)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      addTags(runId, body, requestOptions) {
        return zodfetch2(zod.z.object({
          message: zod.z.string()
        }), `${this.baseUrl}/api/v1/runs/${runId}/tags`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false),
          body: JSON.stringify(body)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      createSchedule(options, requestOptions) {
        return zodfetch2(ScheduleObject, `${this.baseUrl}/api/v1/schedules`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false),
          body: JSON.stringify(options)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      listSchedules(options, requestOptions) {
        const searchParams = new URLSearchParams();
        if (options?.page) {
          searchParams.append("page", options.page.toString());
        }
        if (options?.perPage) {
          searchParams.append("perPage", options.perPage.toString());
        }
        return zodfetchOffsetLimitPage(ScheduleObject, `${this.baseUrl}/api/v1/schedules`, {
          page: options?.page,
          limit: options?.perPage
        }, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      retrieveSchedule(scheduleId, requestOptions) {
        return zodfetch2(ScheduleObject, `${this.baseUrl}/api/v1/schedules/${scheduleId}`, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      updateSchedule(scheduleId, options, requestOptions) {
        return zodfetch2(ScheduleObject, `${this.baseUrl}/api/v1/schedules/${scheduleId}`, {
          method: "PUT",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false),
          body: JSON.stringify(options)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      deactivateSchedule(scheduleId, requestOptions) {
        return zodfetch2(ScheduleObject, `${this.baseUrl}/api/v1/schedules/${scheduleId}/deactivate`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      activateSchedule(scheduleId, requestOptions) {
        return zodfetch2(ScheduleObject, `${this.baseUrl}/api/v1/schedules/${scheduleId}/activate`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      deleteSchedule(scheduleId, requestOptions) {
        return zodfetch2(DeletedScheduleObject, `${this.baseUrl}/api/v1/schedules/${scheduleId}`, {
          method: "DELETE",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      listEnvVars(projectRef, slug, requestOptions) {
        return zodfetch2(EnvironmentVariables, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}`, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      importEnvVars(projectRef, slug, body, requestOptions) {
        return zodfetch2(EnvironmentVariableResponseBody, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}/import`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false),
          body: JSON.stringify(body)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      retrieveEnvVar(projectRef, slug, key, requestOptions) {
        return zodfetch2(EnvironmentVariableValue, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}/${key}`, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      createEnvVar(projectRef, slug, body, requestOptions) {
        return zodfetch2(EnvironmentVariableResponseBody, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false),
          body: JSON.stringify(body)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      updateEnvVar(projectRef, slug, key, body, requestOptions) {
        return zodfetch2(EnvironmentVariableResponseBody, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}/${key}`, {
          method: "PUT",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false),
          body: JSON.stringify(body)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      deleteEnvVar(projectRef, slug, key, requestOptions) {
        return zodfetch2(EnvironmentVariableResponseBody, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}/${key}`, {
          method: "DELETE",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
    };
    _getHeaders = /* @__PURE__ */ new WeakSet();
    getHeaders_fn = /* @__PURE__ */ __name4(function(spanParentAsLink) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
        "trigger-version": version3
      };
      if (taskContext.isInsideTask) {
        headers["x-trigger-worker"] = "true";
        api.propagation.inject(api.context.active(), headers);
        if (spanParentAsLink) {
          headers["x-trigger-span-parent-as-link"] = "1";
        }
      }
      return headers;
    }, "#getHeaders");
    __name4(_ApiClient3, "ApiClient");
    var ApiClient2 = _ApiClient3;
    function createSearchQueryForListRuns(query) {
      const searchParams = new URLSearchParams();
      if (query) {
        if (query.status) {
          searchParams.append("filter[status]", Array.isArray(query.status) ? query.status.join(",") : query.status);
        }
        if (query.taskIdentifier) {
          searchParams.append("filter[taskIdentifier]", Array.isArray(query.taskIdentifier) ? query.taskIdentifier.join(",") : query.taskIdentifier);
        }
        if (query.version) {
          searchParams.append("filter[version]", Array.isArray(query.version) ? query.version.join(",") : query.version);
        }
        if (query.bulkAction) {
          searchParams.append("filter[bulkAction]", query.bulkAction);
        }
        if (query.tag) {
          searchParams.append("filter[tag]", Array.isArray(query.tag) ? query.tag.join(",") : query.tag);
        }
        if (query.schedule) {
          searchParams.append("filter[schedule]", query.schedule);
        }
        if (typeof query.isTest === "boolean") {
          searchParams.append("filter[isTest]", String(query.isTest));
        }
        if (query.from) {
          searchParams.append("filter[createdAt][from]", query.from instanceof Date ? query.from.getTime().toString() : query.from.toString());
        }
        if (query.to) {
          searchParams.append("filter[createdAt][to]", query.to instanceof Date ? query.to.getTime().toString() : query.to.toString());
        }
        if (query.period) {
          searchParams.append("filter[createdAt][period]", query.period);
        }
      }
      return searchParams;
    }
    __name4(createSearchQueryForListRuns, "createSearchQueryForListRuns");
    function mergeRequestOptions(defaultOptions, options) {
      if (!options) {
        return defaultOptions;
      }
      return {
        ...defaultOptions,
        ...options,
        retry: {
          ...defaultOptions.retry,
          ...options.retry
        }
      };
    }
    __name4(mergeRequestOptions, "mergeRequestOptions");
    var _SimpleClock = class _SimpleClock {
      preciseNow() {
        const now = new preciseDate.PreciseDate();
        const nowStruct = now.toStruct();
        return [
          nowStruct.seconds,
          nowStruct.nanos
        ];
      }
      reset() {
      }
    };
    __name4(_SimpleClock, "SimpleClock");
    var SimpleClock = _SimpleClock;
    var API_NAME2 = "clock";
    var SIMPLE_CLOCK = new SimpleClock();
    var _getClock;
    var getClock_fn;
    var _ClockAPI = class _ClockAPI2 {
      constructor() {
        __privateAdd3(this, _getClock);
      }
      static getInstance() {
        if (!this._instance) {
          this._instance = new _ClockAPI2();
        }
        return this._instance;
      }
      setGlobalClock(clock22) {
        return registerGlobal(API_NAME2, clock22);
      }
      preciseNow() {
        return __privateMethod3(this, _getClock, getClock_fn).call(this).preciseNow();
      }
      reset() {
        __privateMethod3(this, _getClock, getClock_fn).call(this).reset();
      }
    };
    _getClock = /* @__PURE__ */ new WeakSet();
    getClock_fn = /* @__PURE__ */ __name4(function() {
      return getGlobal(API_NAME2) ?? SIMPLE_CLOCK;
    }, "#getClock");
    __name4(_ClockAPI, "ClockAPI");
    var ClockAPI = _ClockAPI;
    var clock2 = ClockAPI.getInstance();
    var OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT = 256;
    var OTEL_LOG_ATTRIBUTE_COUNT_LIMIT = 256;
    var OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT = 1028;
    var OTEL_LOG_ATTRIBUTE_VALUE_LENGTH_LIMIT = 1028;
    var OTEL_SPAN_EVENT_COUNT_LIMIT = 10;
    var OTEL_LINK_COUNT_LIMIT = 2;
    var OTEL_ATTRIBUTE_PER_LINK_COUNT_LIMIT = 10;
    var OTEL_ATTRIBUTE_PER_EVENT_COUNT_LIMIT = 10;
    var OFFLOAD_IO_PACKET_LENGTH_LIMIT = 128 * 1024;
    function imposeAttributeLimits(attributes) {
      const newAttributes = {};
      for (const [key, value] of Object.entries(attributes)) {
        if (calculateAttributeValueLength(value) > OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) {
          continue;
        }
        if (Object.keys(newAttributes).length >= OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) {
          break;
        }
        newAttributes[key] = value;
      }
      return newAttributes;
    }
    __name4(imposeAttributeLimits, "imposeAttributeLimits");
    function calculateAttributeValueLength(value) {
      if (value === void 0 || value === null) {
        return 0;
      }
      if (typeof value === "string") {
        return value.length;
      }
      if (typeof value === "number") {
        return 8;
      }
      if (typeof value === "boolean") {
        return 4;
      }
      if (Array.isArray(value)) {
        return value.reduce((acc, v) => acc + calculateAttributeValueLength(v), 0);
      }
      return 0;
    }
    __name4(calculateAttributeValueLength, "calculateAttributeValueLength");
    var _NoopTaskLogger = class _NoopTaskLogger {
      debug() {
      }
      log() {
      }
      info() {
      }
      warn() {
      }
      error() {
      }
      trace(name, fn) {
        return fn({});
      }
    };
    __name4(_NoopTaskLogger, "NoopTaskLogger");
    var NoopTaskLogger = _NoopTaskLogger;
    var API_NAME3 = "logger";
    var NOOP_TASK_LOGGER = new NoopTaskLogger();
    var _getTaskLogger;
    var getTaskLogger_fn;
    var _LoggerAPI = class _LoggerAPI2 {
      constructor() {
        __privateAdd3(this, _getTaskLogger);
      }
      static getInstance() {
        if (!this._instance) {
          this._instance = new _LoggerAPI2();
        }
        return this._instance;
      }
      disable() {
        unregisterGlobal(API_NAME3);
      }
      setGlobalTaskLogger(taskLogger) {
        return registerGlobal(API_NAME3, taskLogger);
      }
      debug(message, metadata) {
        __privateMethod3(this, _getTaskLogger, getTaskLogger_fn).call(this).debug(message, metadata);
      }
      log(message, metadata) {
        __privateMethod3(this, _getTaskLogger, getTaskLogger_fn).call(this).log(message, metadata);
      }
      info(message, metadata) {
        __privateMethod3(this, _getTaskLogger, getTaskLogger_fn).call(this).info(message, metadata);
      }
      warn(message, metadata) {
        __privateMethod3(this, _getTaskLogger, getTaskLogger_fn).call(this).warn(message, metadata);
      }
      error(message, metadata) {
        __privateMethod3(this, _getTaskLogger, getTaskLogger_fn).call(this).error(message, metadata);
      }
      trace(name, fn) {
        return __privateMethod3(this, _getTaskLogger, getTaskLogger_fn).call(this).trace(name, fn);
      }
    };
    _getTaskLogger = /* @__PURE__ */ new WeakSet();
    getTaskLogger_fn = /* @__PURE__ */ __name4(function() {
      return getGlobal(API_NAME3) ?? NOOP_TASK_LOGGER;
    }, "#getTaskLogger");
    __name4(_LoggerAPI, "LoggerAPI");
    var LoggerAPI = _LoggerAPI;
    var logger2 = LoggerAPI.getInstance();
    var _NoopRuntimeManager = class _NoopRuntimeManager {
      disable() {
      }
      waitForDuration(ms) {
        return Promise.resolve();
      }
      waitUntil(date) {
        return Promise.resolve();
      }
      waitForTask(params) {
        return Promise.resolve({
          ok: false,
          id: params.id,
          error: {
            type: "INTERNAL_ERROR",
            code: "CONFIGURED_INCORRECTLY"
          }
        });
      }
      waitForBatch(params) {
        return Promise.resolve({
          id: params.id,
          items: []
        });
      }
    };
    __name4(_NoopRuntimeManager, "NoopRuntimeManager");
    var NoopRuntimeManager = _NoopRuntimeManager;
    var _NoopUsageManager = class _NoopUsageManager {
      disable() {
      }
      start() {
        return {
          sample: () => ({
            cpuTime: 0,
            wallTime: 0
          })
        };
      }
      stop(measurement) {
        return measurement.sample();
      }
      pauseAsync(cb) {
        return cb();
      }
      sample() {
        return void 0;
      }
    };
    __name4(_NoopUsageManager, "NoopUsageManager");
    var NoopUsageManager = _NoopUsageManager;
    var API_NAME4 = "usage";
    var NOOP_USAGE_MANAGER = new NoopUsageManager();
    var _getUsageManager;
    var getUsageManager_fn;
    var _UsageAPI = class _UsageAPI2 {
      constructor() {
        __privateAdd3(this, _getUsageManager);
      }
      static getInstance() {
        if (!this._instance) {
          this._instance = new _UsageAPI2();
        }
        return this._instance;
      }
      setGlobalUsageManager(manager) {
        return registerGlobal(API_NAME4, manager);
      }
      disable() {
        __privateMethod3(this, _getUsageManager, getUsageManager_fn).call(this).disable();
        unregisterGlobal(API_NAME4);
      }
      start() {
        return __privateMethod3(this, _getUsageManager, getUsageManager_fn).call(this).start();
      }
      stop(measurement) {
        return __privateMethod3(this, _getUsageManager, getUsageManager_fn).call(this).stop(measurement);
      }
      pauseAsync(cb) {
        return __privateMethod3(this, _getUsageManager, getUsageManager_fn).call(this).pauseAsync(cb);
      }
      sample() {
        return __privateMethod3(this, _getUsageManager, getUsageManager_fn).call(this).sample();
      }
    };
    _getUsageManager = /* @__PURE__ */ new WeakSet();
    getUsageManager_fn = /* @__PURE__ */ __name4(function() {
      return getGlobal(API_NAME4) ?? NOOP_USAGE_MANAGER;
    }, "#getUsageManager");
    __name4(_UsageAPI, "UsageAPI");
    var UsageAPI = _UsageAPI;
    var usage2 = UsageAPI.getInstance();
    var API_NAME5 = "runtime";
    var NOOP_RUNTIME_MANAGER = new NoopRuntimeManager();
    var _getRuntimeManager;
    var getRuntimeManager_fn;
    var _RuntimeAPI = class _RuntimeAPI2 {
      constructor() {
        __privateAdd3(this, _getRuntimeManager);
      }
      static getInstance() {
        if (!this._instance) {
          this._instance = new _RuntimeAPI2();
        }
        return this._instance;
      }
      waitForDuration(ms) {
        return usage2.pauseAsync(() => __privateMethod3(this, _getRuntimeManager, getRuntimeManager_fn).call(this).waitForDuration(ms));
      }
      waitUntil(date) {
        return usage2.pauseAsync(() => __privateMethod3(this, _getRuntimeManager, getRuntimeManager_fn).call(this).waitUntil(date));
      }
      waitForTask(params) {
        return usage2.pauseAsync(() => __privateMethod3(this, _getRuntimeManager, getRuntimeManager_fn).call(this).waitForTask(params));
      }
      waitForBatch(params) {
        return usage2.pauseAsync(() => __privateMethod3(this, _getRuntimeManager, getRuntimeManager_fn).call(this).waitForBatch(params));
      }
      setGlobalRuntimeManager(runtimeManager) {
        return registerGlobal(API_NAME5, runtimeManager);
      }
      disable() {
        __privateMethod3(this, _getRuntimeManager, getRuntimeManager_fn).call(this).disable();
        unregisterGlobal(API_NAME5);
      }
    };
    _getRuntimeManager = /* @__PURE__ */ new WeakSet();
    getRuntimeManager_fn = /* @__PURE__ */ __name4(function() {
      return getGlobal(API_NAME5) ?? NOOP_RUNTIME_MANAGER;
    }, "#getRuntimeManager");
    __name4(_RuntimeAPI, "RuntimeAPI");
    var RuntimeAPI = _RuntimeAPI;
    var runtime2 = RuntimeAPI.getInstance();
    function getEnvVar2(name) {
      if (typeof process !== "undefined" && typeof process.env === "object" && process.env !== null) {
        return process.env[name];
      }
    }
    __name4(getEnvVar2, "getEnvVar");
    var API_NAME6 = "api-client";
    var _getConfig;
    var getConfig_fn;
    var _APIClientManagerAPI = class _APIClientManagerAPI2 {
      constructor() {
        __privateAdd3(this, _getConfig);
      }
      static getInstance() {
        if (!this._instance) {
          this._instance = new _APIClientManagerAPI2();
        }
        return this._instance;
      }
      disable() {
        unregisterGlobal(API_NAME6);
      }
      setGlobalAPIClientConfiguration(config2) {
        return registerGlobal(API_NAME6, config2);
      }
      get baseURL() {
        const store = __privateMethod3(this, _getConfig, getConfig_fn).call(this);
        return store?.baseURL ?? getEnvVar2("TRIGGER_API_URL") ?? "https://api.trigger.dev";
      }
      get accessToken() {
        const store = __privateMethod3(this, _getConfig, getConfig_fn).call(this);
        return store?.secretKey ?? getEnvVar2("TRIGGER_SECRET_KEY") ?? getEnvVar2("TRIGGER_ACCESS_TOKEN");
      }
      get client() {
        if (!this.baseURL || !this.accessToken) {
          return void 0;
        }
        return new ApiClient2(this.baseURL, this.accessToken);
      }
    };
    _getConfig = /* @__PURE__ */ new WeakSet();
    getConfig_fn = /* @__PURE__ */ __name4(function() {
      return getGlobal(API_NAME6);
    }, "#getConfig");
    __name4(_APIClientManagerAPI, "APIClientManagerAPI");
    var APIClientManagerAPI = _APIClientManagerAPI;
    var apiClientManager = APIClientManagerAPI.getInstance();
    var _NoopTaskCatalog = class _NoopTaskCatalog {
      registerTaskMetadata(task) {
      }
      registerTaskFileMetadata(id, metadata) {
      }
      updateTaskMetadata(id, updates) {
      }
      getAllTaskMetadata() {
        return [];
      }
      getTaskMetadata(id) {
        return void 0;
      }
      getTask(id) {
        return void 0;
      }
      taskExists(id) {
        return false;
      }
      disable() {
      }
    };
    __name4(_NoopTaskCatalog, "NoopTaskCatalog");
    var NoopTaskCatalog = _NoopTaskCatalog;
    var API_NAME7 = "task-catalog";
    var NOOP_TASK_CATALOG = new NoopTaskCatalog();
    var _getCatalog;
    var getCatalog_fn;
    var _TaskCatalogAPI = class _TaskCatalogAPI2 {
      constructor() {
        __privateAdd3(this, _getCatalog);
      }
      static getInstance() {
        if (!this._instance) {
          this._instance = new _TaskCatalogAPI2();
        }
        return this._instance;
      }
      setGlobalTaskCatalog(taskCatalog22) {
        return registerGlobal(API_NAME7, taskCatalog22);
      }
      disable() {
        unregisterGlobal(API_NAME7);
      }
      registerTaskMetadata(task) {
        __privateMethod3(this, _getCatalog, getCatalog_fn).call(this).registerTaskMetadata(task);
      }
      updateTaskMetadata(id, updates) {
        __privateMethod3(this, _getCatalog, getCatalog_fn).call(this).updateTaskMetadata(id, updates);
      }
      registerTaskFileMetadata(id, metadata) {
        __privateMethod3(this, _getCatalog, getCatalog_fn).call(this).registerTaskFileMetadata(id, metadata);
      }
      getAllTaskMetadata() {
        return __privateMethod3(this, _getCatalog, getCatalog_fn).call(this).getAllTaskMetadata();
      }
      getTaskMetadata(id) {
        return __privateMethod3(this, _getCatalog, getCatalog_fn).call(this).getTaskMetadata(id);
      }
      getTask(id) {
        return __privateMethod3(this, _getCatalog, getCatalog_fn).call(this).getTask(id);
      }
      taskExists(id) {
        return __privateMethod3(this, _getCatalog, getCatalog_fn).call(this).taskExists(id);
      }
    };
    _getCatalog = /* @__PURE__ */ new WeakSet();
    getCatalog_fn = /* @__PURE__ */ __name4(function() {
      return getGlobal(API_NAME7) ?? NOOP_TASK_CATALOG;
    }, "#getCatalog");
    __name4(_TaskCatalogAPI, "TaskCatalogAPI");
    var TaskCatalogAPI = _TaskCatalogAPI;
    var taskCatalog3 = TaskCatalogAPI.getInstance();
    function dateDifference(date1, date2) {
      return Math.abs(date1.getTime() - date2.getTime());
    }
    __name4(dateDifference, "dateDifference");
    function formatDuration(start, end, options) {
      if (!start || !end) {
        return "\u2013";
      }
      return formatDurationMilliseconds(dateDifference(start, end), options);
    }
    __name4(formatDuration, "formatDuration");
    function nanosecondsToMilliseconds(nanoseconds) {
      return nanoseconds / 1e6;
    }
    __name4(nanosecondsToMilliseconds, "nanosecondsToMilliseconds");
    function millisecondsToNanoseconds(milliseconds) {
      return milliseconds * 1e6;
    }
    __name4(millisecondsToNanoseconds, "millisecondsToNanoseconds");
    function formatDurationNanoseconds(nanoseconds, options) {
      return formatDurationMilliseconds(nanosecondsToMilliseconds(nanoseconds), options);
    }
    __name4(formatDurationNanoseconds, "formatDurationNanoseconds");
    var aboveOneSecondUnits = [
      "d",
      "h",
      "m",
      "s"
    ];
    var belowOneSecondUnits = [
      "ms"
    ];
    function formatDurationMilliseconds(milliseconds, options) {
      let duration = humanizeDuration__default.default(milliseconds, {
        units: options?.units ? options.units : milliseconds < 1e3 ? belowOneSecondUnits : aboveOneSecondUnits,
        maxDecimalPoints: options?.maxDecimalPoints ?? 1,
        largest: 2
      });
      if (!options) {
        return duration;
      }
      switch (options.style) {
        case "short":
          duration = duration.replace(" milliseconds", "ms");
          duration = duration.replace(" millisecond", "ms");
          duration = duration.replace(" seconds", "s");
          duration = duration.replace(" second", "s");
          duration = duration.replace(" minutes", "m");
          duration = duration.replace(" minute", "m");
          duration = duration.replace(" hours", "h");
          duration = duration.replace(" hour", "h");
          duration = duration.replace(" days", "d");
          duration = duration.replace(" day", "d");
          duration = duration.replace(" weeks", "w");
          duration = duration.replace(" week", "w");
          duration = duration.replace(" months", "mo");
          duration = duration.replace(" month", "mo");
          duration = duration.replace(" years", "y");
          duration = duration.replace(" year", "y");
      }
      return duration;
    }
    __name4(formatDurationMilliseconds, "formatDurationMilliseconds");
    function formatDurationInDays(milliseconds) {
      let duration = humanizeDuration__default.default(milliseconds, {
        maxDecimalPoints: 0,
        largest: 2,
        units: [
          "d"
        ]
      });
      return duration;
    }
    __name4(formatDurationInDays, "formatDurationInDays");
    var _TriggerTracer = class _TriggerTracer {
      constructor(_config) {
        this._config = _config;
      }
      get tracer() {
        if (!this._tracer) {
          if ("tracer" in this._config)
            return this._config.tracer;
          this._tracer = api.trace.getTracer(this._config.name, this._config.version);
        }
        return this._tracer;
      }
      get logger() {
        if (!this._logger) {
          if ("logger" in this._config)
            return this._config.logger;
          this._logger = apiLogs.logs.getLogger(this._config.name, this._config.version);
        }
        return this._logger;
      }
      extractContext(traceContext) {
        return api.propagation.extract(api.context.active(), traceContext ?? {});
      }
      startActiveSpan(name, fn, options, ctx) {
        const parentContext = ctx ?? api.context.active();
        const attributes = options?.attributes ?? {};
        return this.tracer.startActiveSpan(name, {
          ...options,
          attributes,
          startTime: clock2.preciseNow()
        }, parentContext, async (span) => {
          if (taskContext.ctx) {
            this.tracer.startSpan(name, {
              ...options,
              attributes: {
                ...attributes,
                [SemanticInternalAttributes.SPAN_PARTIAL]: true,
                [SemanticInternalAttributes.SPAN_ID]: span.spanContext().spanId
              }
            }, parentContext).end();
          }
          const usageMeasurement = usage2.start();
          try {
            return await fn(span);
          } catch (e) {
            if (typeof e === "string" || e instanceof Error) {
              span.recordException(e);
            }
            span.setStatus({
              code: api.SpanStatusCode.ERROR
            });
            throw e;
          } finally {
            if (taskContext.ctx) {
              const usageSample = usage2.stop(usageMeasurement);
              const machine = taskContext.ctx.machine;
              span.setAttributes({
                [SemanticInternalAttributes.USAGE_DURATION_MS]: usageSample.cpuTime,
                [SemanticInternalAttributes.USAGE_COST_IN_CENTS]: machine?.centsPerMs ? usageSample.cpuTime * machine.centsPerMs : 0
              });
            }
            span.end(clock2.preciseNow());
          }
        });
      }
      startSpan(name, options, ctx) {
        const parentContext = ctx ?? api.context.active();
        const attributes = options?.attributes ?? {};
        const span = this.tracer.startSpan(name, options, ctx);
        this.tracer.startSpan(name, {
          ...options,
          attributes: {
            ...attributes,
            [SemanticInternalAttributes.SPAN_PARTIAL]: true,
            [SemanticInternalAttributes.SPAN_ID]: span.spanContext().spanId
          }
        }, parentContext).end();
        return span;
      }
    };
    __name4(_TriggerTracer, "TriggerTracer");
    var TriggerTracer2 = _TriggerTracer;
    function eventFilterMatches2(payload, filter) {
      if (payload === void 0 || payload === null) {
        if (Object.entries(filter).length === 0) {
          return true;
        } else {
          return false;
        }
      }
      for (const [patternKey, patternValue] of Object.entries(filter)) {
        const payloadValue = payload[patternKey];
        if (Array.isArray(patternValue)) {
          if (patternValue.length === 0) {
            continue;
          }
          if (patternValue.every((item) => typeof item === "string")) {
            if (patternValue.includes(payloadValue)) {
              continue;
            }
            return false;
          }
          if (patternValue.every((item) => typeof item === "number")) {
            if (patternValue.includes(payloadValue)) {
              continue;
            }
            return false;
          }
          if (patternValue.every((item) => typeof item === "boolean")) {
            if (patternValue.includes(payloadValue)) {
              continue;
            }
            return false;
          }
          const objectArray = patternValue;
          if (!contentFiltersMatches2(payloadValue, objectArray)) {
            return false;
          }
          continue;
        } else if (typeof patternValue === "object") {
          if (Array.isArray(payloadValue)) {
            if (!payloadValue.some((item) => eventFilterMatches2(item, patternValue))) {
              return false;
            }
          } else {
            if (!eventFilterMatches2(payloadValue, patternValue)) {
              return false;
            }
          }
        }
      }
      return true;
    }
    __name4(eventFilterMatches2, "eventFilterMatches");
    function contentFiltersMatches2(actualValue, contentFilters) {
      for (const contentFilter of contentFilters) {
        if (typeof contentFilter === "object") {
          Object.entries(contentFilter)[0];
          if (!contentFilterMatches2(actualValue, contentFilter)) {
            return false;
          }
        }
      }
      return true;
    }
    __name4(contentFiltersMatches2, "contentFiltersMatches");
    function contentFilterMatches2(actualValue, contentFilter) {
      if ("$endsWith" in contentFilter) {
        if (typeof actualValue !== "string") {
          return false;
        }
        return actualValue.endsWith(contentFilter.$endsWith);
      }
      if ("$startsWith" in contentFilter) {
        if (typeof actualValue !== "string") {
          return false;
        }
        return actualValue.startsWith(contentFilter.$startsWith);
      }
      if ("$anythingBut" in contentFilter) {
        if (Array.isArray(contentFilter.$anythingBut)) {
          if (contentFilter.$anythingBut.includes(actualValue)) {
            return false;
          }
        }
        if (contentFilter.$anythingBut === actualValue) {
          return false;
        }
        return true;
      }
      if ("$exists" in contentFilter) {
        if (contentFilter.$exists) {
          return actualValue !== void 0;
        }
        return actualValue === void 0;
      }
      if ("$gt" in contentFilter) {
        if (typeof actualValue !== "number") {
          return false;
        }
        return actualValue > contentFilter.$gt;
      }
      if ("$lt" in contentFilter) {
        if (typeof actualValue !== "number") {
          return false;
        }
        return actualValue < contentFilter.$lt;
      }
      if ("$gte" in contentFilter) {
        if (typeof actualValue !== "number") {
          return false;
        }
        return actualValue >= contentFilter.$gte;
      }
      if ("$lte" in contentFilter) {
        if (typeof actualValue !== "number") {
          return false;
        }
        return actualValue <= contentFilter.$lte;
      }
      if ("$between" in contentFilter) {
        if (typeof actualValue !== "number") {
          return false;
        }
        return actualValue >= contentFilter.$between[0] && actualValue <= contentFilter.$between[1];
      }
      if ("$includes" in contentFilter) {
        if (Array.isArray(actualValue)) {
          return actualValue.includes(contentFilter.$includes);
        }
        return false;
      }
      if ("$ignoreCaseEquals" in contentFilter) {
        if (typeof actualValue !== "string") {
          return false;
        }
        return actualValue.localeCompare(contentFilter.$ignoreCaseEquals, void 0, {
          sensitivity: "accent"
        }) === 0;
      }
      if ("$isNull" in contentFilter) {
        if (contentFilter.$isNull) {
          return actualValue === null;
        }
        return actualValue !== null;
      }
      if ("$not" in contentFilter) {
        if (Array.isArray(actualValue)) {
          return !actualValue.includes(contentFilter.$not);
        } else if (typeof actualValue === "number" || typeof actualValue === "boolean" || typeof actualValue === "string") {
          return actualValue !== contentFilter.$not;
        }
        return false;
      }
      return true;
    }
    __name4(contentFilterMatches2, "contentFilterMatches");
    function omit2(obj, ...keys) {
      const result = {};
      for (const key in obj) {
        if (!keys.includes(key)) {
          result[key] = obj[key];
        }
      }
      return result;
    }
    __name4(omit2, "omit");
    function detectDependencyVersion(dependency) {
      return dependencies[dependency];
    }
    __name4(detectDependencyVersion, "detectDependencyVersion");
    async function parsePacket(value) {
      if (!value.data) {
        return void 0;
      }
      switch (value.dataType) {
        case "application/json":
          return JSON.parse(value.data);
        case "application/super+json":
          const { parse } = await loadSuperJSON();
          return parse(value.data);
        case "text/plain":
          return value.data;
        case "application/store":
          throw new Error(`Cannot parse an application/store packet (${value.data}). Needs to be imported first.`);
        default:
          return value.data;
      }
    }
    __name4(parsePacket, "parsePacket");
    async function stringifyIO(value) {
      if (value === void 0) {
        return {
          dataType: "application/json"
        };
      }
      if (typeof value === "string") {
        return {
          data: value,
          dataType: "text/plain"
        };
      }
      try {
        const { stringify } = await loadSuperJSON();
        const data = stringify(value);
        return {
          data,
          dataType: "application/super+json"
        };
      } catch {
        return {
          data: value,
          dataType: "application/json"
        };
      }
    }
    __name4(stringifyIO, "stringifyIO");
    async function conditionallyExportPacket(packet, pathPrefix, tracer2) {
      if (apiClientManager.client) {
        const { needsOffloading, size } = packetRequiresOffloading(packet);
        if (needsOffloading) {
          if (!tracer2) {
            return await exportPacket(packet, pathPrefix);
          } else {
            const result = await tracer2.startActiveSpan("store.uploadOutput", async (span) => {
              return await exportPacket(packet, pathPrefix);
            }, {
              attributes: {
                byteLength: size,
                [SemanticInternalAttributes.STYLE_ICON]: "cloud-upload"
              }
            });
            return result ?? packet;
          }
        }
      }
      return packet;
    }
    __name4(conditionallyExportPacket, "conditionallyExportPacket");
    function packetRequiresOffloading(packet, lengthLimit) {
      if (!packet.data) {
        return {
          needsOffloading: false,
          size: 0
        };
      }
      const byteSize = Buffer.byteLength(packet.data, "utf8");
      return {
        needsOffloading: byteSize >= (lengthLimit ?? OFFLOAD_IO_PACKET_LENGTH_LIMIT),
        size: byteSize
      };
    }
    __name4(packetRequiresOffloading, "packetRequiresOffloading");
    async function exportPacket(packet, pathPrefix) {
      const filename = `${pathPrefix}.${getPacketExtension(packet.dataType)}`;
      const presignedResponse = await apiClientManager.client.createUploadPayloadUrl(filename);
      const uploadResponse = await fetch(presignedResponse.presignedUrl, {
        method: "PUT",
        headers: {
          "Content-Type": packet.dataType
        },
        body: packet.data
      });
      if (!uploadResponse.ok) {
        throw new Error(`Failed to upload output to ${presignedResponse.presignedUrl}: ${uploadResponse.statusText}`);
      }
      return {
        data: filename,
        dataType: "application/store"
      };
    }
    __name4(exportPacket, "exportPacket");
    async function conditionallyImportPacket(packet, tracer2) {
      if (packet.dataType !== "application/store") {
        return packet;
      }
      if (!tracer2) {
        return await importPacket(packet);
      } else {
        const result = await tracer2.startActiveSpan("store.downloadPayload", async (span) => {
          return await importPacket(packet, span);
        }, {
          attributes: {
            [SemanticInternalAttributes.STYLE_ICON]: "cloud-download"
          }
        });
        return result ?? packet;
      }
    }
    __name4(conditionallyImportPacket, "conditionallyImportPacket");
    async function importPacket(packet, span) {
      if (!packet.data) {
        return packet;
      }
      if (!apiClientManager.client) {
        return packet;
      }
      const presignedResponse = await apiClientManager.client.getPayloadUrl(packet.data);
      const response = await fetch(presignedResponse.presignedUrl);
      if (!response.ok) {
        throw new Error(`Failed to import packet ${presignedResponse.presignedUrl}: ${response.statusText}`);
      }
      const data = await response.text();
      span?.setAttribute("size", Buffer.byteLength(data, "utf8"));
      return {
        data,
        dataType: response.headers.get("content-type") ?? "application/json"
      };
    }
    __name4(importPacket, "importPacket");
    async function createPacketAttributes(packet, dataKey, dataTypeKey) {
      if (!packet.data) {
        return;
      }
      switch (packet.dataType) {
        case "application/json":
          return {
            ...flattenAttributes(packet, dataKey),
            [dataTypeKey]: packet.dataType
          };
        case "application/super+json":
          const { parse } = await loadSuperJSON();
          if (typeof packet.data === "undefined" || packet.data === null) {
            return;
          }
          try {
            const parsed = parse(packet.data);
            const jsonified = JSON.parse(JSON.stringify(parsed, safeReplacer));
            const result = {
              ...flattenAttributes(jsonified, dataKey),
              [dataTypeKey]: "application/json"
            };
            return result;
          } catch (e) {
            return;
          }
        case "application/store":
          return {
            [dataKey]: packet.data,
            [dataTypeKey]: packet.dataType
          };
        case "text/plain":
          return {
            [dataKey]: packet.data,
            [dataTypeKey]: packet.dataType
          };
        default:
          return;
      }
    }
    __name4(createPacketAttributes, "createPacketAttributes");
    async function createPacketAttributesAsJson(data, dataType) {
      if (typeof data === "string" || typeof data === "number" || typeof data === "boolean" || data === null || data === void 0) {
        return data;
      }
      switch (dataType) {
        case "application/json":
          return imposeAttributeLimits(flattenAttributes(data, void 0));
        case "application/super+json":
          const { deserialize } = await loadSuperJSON();
          const deserialized = deserialize(data);
          const jsonify = safeJsonParse22(JSON.stringify(deserialized, safeReplacer));
          return imposeAttributeLimits(flattenAttributes(jsonify, void 0));
        case "application/store":
          return data;
        default:
          return {};
      }
    }
    __name4(createPacketAttributesAsJson, "createPacketAttributesAsJson");
    async function prettyPrintPacket(rawData, dataType) {
      if (rawData === void 0) {
        return "";
      }
      if (dataType === "application/super+json") {
        if (typeof rawData === "string") {
          rawData = safeJsonParse22(rawData);
        }
        const { deserialize } = await loadSuperJSON();
        return await prettyPrintPacket(deserialize(rawData), "application/json");
      }
      if (dataType === "application/json") {
        if (typeof rawData === "string") {
          rawData = safeJsonParse22(rawData);
        }
        return JSON.stringify(rawData, safeReplacer, 2);
      }
      if (typeof rawData === "string") {
        return rawData;
      }
      return JSON.stringify(rawData, safeReplacer, 2);
    }
    __name4(prettyPrintPacket, "prettyPrintPacket");
    function safeReplacer(key, value) {
      if (typeof value === "bigint") {
        return value.toString();
      }
      if (value instanceof RegExp) {
        return value.toString();
      }
      if (value instanceof Set) {
        return Array.from(value);
      }
      if (value instanceof Map) {
        const obj = {};
        value.forEach((v, k) => {
          obj[k] = v;
        });
        return obj;
      }
      return value;
    }
    __name4(safeReplacer, "safeReplacer");
    function getPacketExtension(outputType) {
      switch (outputType) {
        case "application/json":
          return "json";
        case "application/super+json":
          return "json";
        case "text/plain":
          return "txt";
        default:
          return "txt";
      }
    }
    __name4(getPacketExtension, "getPacketExtension");
    async function loadSuperJSON() {
      return await import("superjson");
    }
    __name4(loadSuperJSON, "loadSuperJSON");
    function safeJsonParse22(value) {
      try {
        return JSON.parse(value);
      } catch {
        return;
      }
    }
    __name4(safeJsonParse22, "safeJsonParse");
    exports2.AbortTaskRunError = AbortTaskRunError;
    exports2.AddTagsRequestBody = AddTagsRequestBody;
    exports2.ApiClient = ApiClient2;
    exports2.ApiConnectionError = ApiConnectionError;
    exports2.ApiError = ApiError;
    exports2.AttemptStatus = AttemptStatus;
    exports2.AuthenticationError = AuthenticationError;
    exports2.BackgroundWorkerClientMessages = BackgroundWorkerClientMessages;
    exports2.BackgroundWorkerMetadata = BackgroundWorkerMetadata;
    exports2.BackgroundWorkerProperties = BackgroundWorkerProperties;
    exports2.BackgroundWorkerServerMessages = BackgroundWorkerServerMessages;
    exports2.BadRequestError = BadRequestError;
    exports2.BatchTaskRunExecutionResult = BatchTaskRunExecutionResult;
    exports2.BatchTriggerTaskRequestBody = BatchTriggerTaskRequestBody;
    exports2.BatchTriggerTaskResponse = BatchTriggerTaskResponse;
    exports2.CanceledRunResponse = CanceledRunResponse;
    exports2.CancellationSpanEvent = CancellationSpanEvent;
    exports2.ClientToSharedQueueMessages = ClientToSharedQueueMessages;
    exports2.Config = Config;
    exports2.ConflictError = ConflictError;
    exports2.CoordinatorSocketData = CoordinatorSocketData;
    exports2.CoordinatorToPlatformMessages = CoordinatorToPlatformMessages;
    exports2.CoordinatorToProdWorkerMessages = CoordinatorToProdWorkerMessages;
    exports2.CreateAuthorizationCodeResponseSchema = CreateAuthorizationCodeResponseSchema;
    exports2.CreateBackgroundWorkerRequestBody = CreateBackgroundWorkerRequestBody;
    exports2.CreateBackgroundWorkerResponse = CreateBackgroundWorkerResponse;
    exports2.CreateEnvironmentVariableRequestBody = CreateEnvironmentVariableRequestBody;
    exports2.CreateScheduleOptions = CreateScheduleOptions;
    exports2.CreateUploadPayloadUrlResponseBody = CreateUploadPayloadUrlResponseBody;
    exports2.CursorPage = CursorPage;
    exports2.DeletedScheduleObject = DeletedScheduleObject;
    exports2.DeploymentErrorData = DeploymentErrorData;
    exports2.EnvironmentType = EnvironmentType;
    exports2.EnvironmentVariable = EnvironmentVariable;
    exports2.EnvironmentVariableResponseBody = EnvironmentVariableResponseBody;
    exports2.EnvironmentVariableValue = EnvironmentVariableValue;
    exports2.EnvironmentVariables = EnvironmentVariables;
    exports2.EventFilter = EventFilter;
    exports2.ExceptionEventProperties = ExceptionEventProperties;
    exports2.ExceptionSpanEvent = ExceptionSpanEvent;
    exports2.ExternalBuildData = ExternalBuildData;
    exports2.FetchRetryBackoffStrategy = FetchRetryBackoffStrategy;
    exports2.FetchRetryByStatusOptions = FetchRetryByStatusOptions;
    exports2.FetchRetryHeadersStrategy = FetchRetryHeadersStrategy;
    exports2.FetchRetryOptions = FetchRetryOptions;
    exports2.FetchRetryStrategy = FetchRetryStrategy;
    exports2.FetchTimeoutOptions = FetchTimeoutOptions;
    exports2.FixedWindowRateLimit = FixedWindowRateLimit;
    exports2.GetBatchResponseBody = GetBatchResponseBody;
    exports2.GetDeploymentResponseBody = GetDeploymentResponseBody;
    exports2.GetEnvironmentVariablesResponseBody = GetEnvironmentVariablesResponseBody;
    exports2.GetPersonalAccessTokenRequestSchema = GetPersonalAccessTokenRequestSchema;
    exports2.GetPersonalAccessTokenResponseSchema = GetPersonalAccessTokenResponseSchema;
    exports2.GetProjectEnvResponse = GetProjectEnvResponse;
    exports2.GetProjectResponseBody = GetProjectResponseBody;
    exports2.GetProjectsResponseBody = GetProjectsResponseBody;
    exports2.ImageDetailsMetadata = ImageDetailsMetadata;
    exports2.ImportEnvironmentVariablesRequestBody = ImportEnvironmentVariablesRequestBody;
    exports2.InitializeDeploymentRequestBody = InitializeDeploymentRequestBody;
    exports2.InitializeDeploymentResponseBody = InitializeDeploymentResponseBody;
    exports2.InternalServerError = InternalServerError;
    exports2.ListRunResponse = ListRunResponse;
    exports2.ListRunResponseItem = ListRunResponseItem;
    exports2.ListScheduleOptions = ListScheduleOptions;
    exports2.ListSchedulesResult = ListSchedulesResult;
    exports2.MachineConfig = MachineConfig;
    exports2.MachineCpu = MachineCpu;
    exports2.MachineMemory = MachineMemory;
    exports2.MachinePreset = MachinePreset;
    exports2.MachinePresetName = MachinePresetName;
    exports2.NULL_SENTINEL = NULL_SENTINEL;
    exports2.NotFoundError = NotFoundError;
    exports2.OFFLOAD_IO_PACKET_LENGTH_LIMIT = OFFLOAD_IO_PACKET_LENGTH_LIMIT;
    exports2.OTEL_ATTRIBUTE_PER_EVENT_COUNT_LIMIT = OTEL_ATTRIBUTE_PER_EVENT_COUNT_LIMIT;
    exports2.OTEL_ATTRIBUTE_PER_LINK_COUNT_LIMIT = OTEL_ATTRIBUTE_PER_LINK_COUNT_LIMIT;
    exports2.OTEL_LINK_COUNT_LIMIT = OTEL_LINK_COUNT_LIMIT;
    exports2.OTEL_LOG_ATTRIBUTE_COUNT_LIMIT = OTEL_LOG_ATTRIBUTE_COUNT_LIMIT;
    exports2.OTEL_LOG_ATTRIBUTE_VALUE_LENGTH_LIMIT = OTEL_LOG_ATTRIBUTE_VALUE_LENGTH_LIMIT;
    exports2.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT = OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT;
    exports2.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT = OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT;
    exports2.OTEL_SPAN_EVENT_COUNT_LIMIT = OTEL_SPAN_EVENT_COUNT_LIMIT;
    exports2.OffsetLimitPage = OffsetLimitPage;
    exports2.OtherSpanEvent = OtherSpanEvent;
    exports2.PRIMARY_VARIANT = PRIMARY_VARIANT;
    exports2.PermissionDeniedError = PermissionDeniedError;
    exports2.PlatformToCoordinatorMessages = PlatformToCoordinatorMessages;
    exports2.PlatformToProviderMessages = PlatformToProviderMessages;
    exports2.PostStartCauses = PostStartCauses;
    exports2.PreStopCauses = PreStopCauses;
    exports2.ProdChildToWorkerMessages = ProdChildToWorkerMessages;
    exports2.ProdTaskRunExecution = ProdTaskRunExecution;
    exports2.ProdTaskRunExecutionPayload = ProdTaskRunExecutionPayload;
    exports2.ProdWorkerSocketData = ProdWorkerSocketData;
    exports2.ProdWorkerToChildMessages = ProdWorkerToChildMessages;
    exports2.ProdWorkerToCoordinatorMessages = ProdWorkerToCoordinatorMessages;
    exports2.ProviderToPlatformMessages = ProviderToPlatformMessages;
    exports2.QueueOptions = QueueOptions;
    exports2.RateLimitError = RateLimitError;
    exports2.RateLimitOptions = RateLimitOptions;
    exports2.ReplayRunResponse = ReplayRunResponse;
    exports2.RescheduleRunRequestBody = RescheduleRunRequestBody;
    exports2.RetrieveRunResponse = RetrieveRunResponse;
    exports2.RetryOptions = RetryOptions;
    exports2.RunEnvironmentDetails = RunEnvironmentDetails;
    exports2.RunScheduleDetails = RunScheduleDetails;
    exports2.RunStatus = RunStatus;
    exports2.RunTags = RunTags;
    exports2.ScheduleGenerator = ScheduleGenerator;
    exports2.ScheduleMetadata = ScheduleMetadata;
    exports2.ScheduleObject = ScheduleObject;
    exports2.ScheduleType = ScheduleType;
    exports2.ScheduledTaskPayload = ScheduledTaskPayload;
    exports2.SemanticInternalAttributes = SemanticInternalAttributes;
    exports2.SerializedError = SerializedError;
    exports2.SharedQueueToClientMessages = SharedQueueToClientMessages;
    exports2.SlidingWindowRateLimit = SlidingWindowRateLimit;
    exports2.SpanEvent = SpanEvent;
    exports2.SpanEvents = SpanEvents;
    exports2.SpanMessagingEvent = SpanMessagingEvent;
    exports2.StartDeploymentIndexingRequestBody = StartDeploymentIndexingRequestBody;
    exports2.StartDeploymentIndexingResponseBody = StartDeploymentIndexingResponseBody;
    exports2.TaskEventStyle = TaskEventStyle;
    exports2.TaskFileMetadata = TaskFileMetadata;
    exports2.TaskMetadata = TaskMetadata;
    exports2.TaskMetadataFailedToParseData = TaskMetadataFailedToParseData;
    exports2.TaskMetadataWithFilePath = TaskMetadataWithFilePath;
    exports2.TaskResource = TaskResource;
    exports2.TaskRun = TaskRun;
    exports2.TaskRunBuiltInError = TaskRunBuiltInError;
    exports2.TaskRunContext = TaskRunContext;
    exports2.TaskRunCustomErrorObject = TaskRunCustomErrorObject;
    exports2.TaskRunError = TaskRunError;
    exports2.TaskRunErrorCodes = TaskRunErrorCodes2;
    exports2.TaskRunExecution = TaskRunExecution;
    exports2.TaskRunExecutionAttempt = TaskRunExecutionAttempt;
    exports2.TaskRunExecutionBatch = TaskRunExecutionBatch;
    exports2.TaskRunExecutionEnvironment = TaskRunExecutionEnvironment;
    exports2.TaskRunExecutionLazyAttemptPayload = TaskRunExecutionLazyAttemptPayload;
    exports2.TaskRunExecutionOrganization = TaskRunExecutionOrganization;
    exports2.TaskRunExecutionPayload = TaskRunExecutionPayload;
    exports2.TaskRunExecutionProject = TaskRunExecutionProject;
    exports2.TaskRunExecutionQueue = TaskRunExecutionQueue;
    exports2.TaskRunExecutionResult = TaskRunExecutionResult;
    exports2.TaskRunExecutionRetry = TaskRunExecutionRetry;
    exports2.TaskRunExecutionTask = TaskRunExecutionTask;
    exports2.TaskRunExecutionUsage = TaskRunExecutionUsage;
    exports2.TaskRunFailedExecutionResult = TaskRunFailedExecutionResult;
    exports2.TaskRunInternalError = TaskRunInternalError;
    exports2.TaskRunStringError = TaskRunStringError;
    exports2.TaskRunSuccessfulExecutionResult = TaskRunSuccessfulExecutionResult;
    exports2.TimezonesResult = TimezonesResult;
    exports2.TriggerTaskRequestBody = TriggerTaskRequestBody;
    exports2.TriggerTaskResponse = TriggerTaskResponse;
    exports2.TriggerTracer = TriggerTracer2;
    exports2.UncaughtExceptionMessage = UncaughtExceptionMessage;
    exports2.UnprocessableEntityError = UnprocessableEntityError;
    exports2.UpdateEnvironmentVariableRequestBody = UpdateEnvironmentVariableRequestBody;
    exports2.UpdateScheduleOptions = UpdateScheduleOptions;
    exports2.WaitReason = WaitReason;
    exports2.WhoAmIResponseSchema = WhoAmIResponseSchema;
    exports2.accessoryAttributes = accessoryAttributes;
    exports2.apiClientManager = apiClientManager;
    exports2.calculateNextRetryDelay = calculateNextRetryDelay;
    exports2.calculateResetAt = calculateResetAt22;
    exports2.childToWorkerMessages = childToWorkerMessages2;
    exports2.clientWebsocketMessages = clientWebsocketMessages;
    exports2.clock = clock2;
    exports2.conditionallyExportPacket = conditionallyExportPacket;
    exports2.conditionallyImportPacket = conditionallyImportPacket;
    exports2.correctErrorStackTrace = correctErrorStackTrace;
    exports2.createErrorTaskError = createErrorTaskError;
    exports2.createJsonErrorObject = createJsonErrorObject;
    exports2.createPacketAttributes = createPacketAttributes;
    exports2.createPacketAttributesAsJson = createPacketAttributesAsJson;
    exports2.defaultFetchRetryOptions = defaultFetchRetryOptions;
    exports2.defaultRetryOptions = defaultRetryOptions;
    exports2.detectDependencyVersion = detectDependencyVersion;
    exports2.eventFilterMatches = eventFilterMatches2;
    exports2.flattenAttributes = flattenAttributes;
    exports2.formatDuration = formatDuration;
    exports2.formatDurationInDays = formatDurationInDays;
    exports2.formatDurationMilliseconds = formatDurationMilliseconds;
    exports2.formatDurationNanoseconds = formatDurationNanoseconds;
    exports2.groupTaskMetadataIssuesByTask = groupTaskMetadataIssuesByTask;
    exports2.imposeAttributeLimits = imposeAttributeLimits;
    exports2.isCancellationSpanEvent = isCancellationSpanEvent;
    exports2.isExceptionSpanEvent = isExceptionSpanEvent;
    exports2.isRequestOptions = isRequestOptions;
    exports2.logger = logger2;
    exports2.mergeRequestOptions = mergeRequestOptions;
    exports2.millisecondsToNanoseconds = millisecondsToNanoseconds;
    exports2.nanosecondsToMilliseconds = nanosecondsToMilliseconds;
    exports2.omit = omit2;
    exports2.packetRequiresOffloading = packetRequiresOffloading;
    exports2.parseError = parseError;
    exports2.parsePacket = parsePacket;
    exports2.prettyPrintPacket = prettyPrintPacket;
    exports2.primitiveValueOrflattenedAttributes = primitiveValueOrflattenedAttributes;
    exports2.runtime = runtime2;
    exports2.sanitizeError = sanitizeError;
    exports2.serverWebsocketMessages = serverWebsocketMessages;
    exports2.stringPatternMatchers = stringPatternMatchers2;
    exports2.stringifyIO = stringifyIO;
    exports2.taskCatalog = taskCatalog3;
    exports2.taskContext = taskContext;
    exports2.unflattenAttributes = unflattenAttributes;
    exports2.usage = usage2;
    exports2.workerToChildMessages = workerToChildMessages2;
  }
});

// node_modules/@trigger.dev/core/dist/v3/workers/index.js
var require_workers = __commonJS({
  "node_modules/@trigger.dev/core/dist/v3/workers/index.js"(exports2) {
    "use strict";
    init_define_PROJECT_CONFIG();
    var api = require("@opentelemetry/api");
    var zod = require("zod");
    var apiLogs = require("@opentelemetry/api-logs");
    var exporterLogsOtlpHttp = require("@opentelemetry/exporter-logs-otlp-http");
    var exporterTraceOtlpHttp = require("@opentelemetry/exporter-trace-otlp-http");
    var instrumentation = require("@opentelemetry/instrumentation");
    var resources = require("@opentelemetry/resources");
    var sdkLogs = require("@opentelemetry/sdk-logs");
    var sdkTraceNode = require("@opentelemetry/sdk-trace-node");
    var semanticConventions = require("@opentelemetry/semantic-conventions");
    var zodValidationError = require("zod-validation-error");
    var preciseDate = require("@google-cloud/precise-date");
    var util = require("util");
    var promises = require("timers/promises");
    function _interopDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var util__default = /* @__PURE__ */ _interopDefault(util);
    var __defProp5 = Object.defineProperty;
    var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __name4 = (target, value) => __defProp5(target, "name", { value, configurable: true });
    var __publicField3 = (obj, key, value) => {
      __defNormalProp3(obj, typeof key !== "symbol" ? key + "" : key, value);
      return value;
    };
    var __accessCheck3 = (obj, member, msg) => {
      if (!member.has(obj))
        throw TypeError("Cannot " + msg);
    };
    var __privateGet3 = (obj, member, getter) => {
      __accessCheck3(obj, member, "read from private field");
      return getter ? getter.call(obj) : member.get(obj);
    };
    var __privateAdd3 = (obj, member, value) => {
      if (member.has(obj))
        throw TypeError("Cannot add the same private member more than once");
      member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    };
    var __privateMethod3 = (obj, member, method) => {
      __accessCheck3(obj, member, "access private method");
      return method;
    };
    function parseError(error) {
      if (error instanceof Error) {
        return {
          type: "BUILT_IN_ERROR",
          name: error.name,
          message: error.message,
          stackTrace: error.stack ?? ""
        };
      }
      if (typeof error === "string") {
        return {
          type: "STRING_ERROR",
          raw: error
        };
      }
      try {
        return {
          type: "CUSTOM_ERROR",
          raw: JSON.stringify(error)
        };
      } catch (e) {
        return {
          type: "CUSTOM_ERROR",
          raw: String(error)
        };
      }
    }
    __name4(parseError, "parseError");
    var SerializedError = zod.z.object({
      message: zod.z.string(),
      name: zod.z.string().optional(),
      stackTrace: zod.z.string().optional()
    });
    function sanitizeError(error) {
      switch (error.type) {
        case "BUILT_IN_ERROR": {
          return {
            type: "BUILT_IN_ERROR",
            message: error.message?.replace(/\0/g, ""),
            name: error.name?.replace(/\0/g, ""),
            stackTrace: error.stackTrace?.replace(/\0/g, "")
          };
        }
        case "STRING_ERROR": {
          return {
            type: "STRING_ERROR",
            raw: error.raw.replace(/\0/g, "")
          };
        }
        case "CUSTOM_ERROR": {
          return {
            type: "CUSTOM_ERROR",
            raw: error.raw.replace(/\0/g, "")
          };
        }
        case "INTERNAL_ERROR": {
          return {
            type: "INTERNAL_ERROR",
            code: error.code,
            message: error.message?.replace(/\0/g, ""),
            stackTrace: error.stackTrace?.replace(/\0/g, "")
          };
        }
      }
    }
    __name4(sanitizeError, "sanitizeError");
    var OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT = 256;
    var OTEL_LOG_ATTRIBUTE_COUNT_LIMIT = 256;
    var OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT = 1028;
    var OTEL_LOG_ATTRIBUTE_VALUE_LENGTH_LIMIT = 1028;
    var OTEL_SPAN_EVENT_COUNT_LIMIT = 10;
    var OTEL_LINK_COUNT_LIMIT = 2;
    var OTEL_ATTRIBUTE_PER_LINK_COUNT_LIMIT = 10;
    var OTEL_ATTRIBUTE_PER_EVENT_COUNT_LIMIT = 10;
    var OFFLOAD_IO_PACKET_LENGTH_LIMIT = 128 * 1024;
    var SemanticInternalAttributes = {
      ENVIRONMENT_ID: "ctx.environment.id",
      ENVIRONMENT_TYPE: "ctx.environment.type",
      ORGANIZATION_ID: "ctx.organization.id",
      ORGANIZATION_SLUG: "ctx.organization.slug",
      ORGANIZATION_NAME: "ctx.organization.name",
      PROJECT_ID: "ctx.project.id",
      PROJECT_REF: "ctx.project.ref",
      PROJECT_NAME: "ctx.project.title",
      PROJECT_DIR: "project.dir",
      ATTEMPT_ID: "ctx.attempt.id",
      ATTEMPT_NUMBER: "ctx.attempt.number",
      RUN_ID: "ctx.run.id",
      RUN_IS_TEST: "ctx.run.isTest",
      BATCH_ID: "ctx.batch.id",
      TASK_SLUG: "ctx.task.id",
      TASK_PATH: "ctx.task.filePath",
      TASK_EXPORT_NAME: "ctx.task.exportName",
      QUEUE_NAME: "ctx.queue.name",
      QUEUE_ID: "ctx.queue.id",
      MACHINE_PRESET_NAME: "ctx.machine.name",
      MACHINE_PRESET_CPU: "ctx.machine.cpu",
      MACHINE_PRESET_MEMORY: "ctx.machine.memory",
      MACHINE_PRESET_CENTS_PER_MS: "ctx.machine.centsPerMs",
      SPAN_PARTIAL: "$span.partial",
      SPAN_ID: "$span.span_id",
      OUTPUT: "$output",
      OUTPUT_TYPE: "$mime_type_output",
      STYLE: "$style",
      STYLE_ICON: "$style.icon",
      STYLE_VARIANT: "$style.variant",
      STYLE_ACCESSORY: "$style.accessory",
      METADATA: "$metadata",
      TRIGGER: "$trigger",
      PAYLOAD: "$payload",
      PAYLOAD_TYPE: "$mime_type_payload",
      SHOW: "$show",
      SHOW_ACTIONS: "$show.actions",
      WORKER_ID: "worker.id",
      WORKER_VERSION: "worker.version",
      CLI_VERSION: "cli.version",
      SDK_VERSION: "sdk.version",
      SDK_LANGUAGE: "sdk.language",
      RETRY_AT: "retry.at",
      RETRY_DELAY: "retry.delay",
      RETRY_COUNT: "retry.count",
      LINK_TITLE: "$link.title",
      IDEMPOTENCY_KEY: "ctx.run.idempotencyKey",
      USAGE_DURATION_MS: "$usage.durationMs",
      USAGE_COST_IN_CENTS: "$usage.costInCents",
      RATE_LIMIT_LIMIT: "response.rateLimit.limit",
      RATE_LIMIT_REMAINING: "response.rateLimit.remaining",
      RATE_LIMIT_RESET: "response.rateLimit.reset"
    };
    var NULL_SENTINEL = "$@null((";
    function flattenAttributes(obj, prefix) {
      const result = {};
      if (obj === void 0) {
        return result;
      }
      if (obj === null) {
        result[prefix || ""] = NULL_SENTINEL;
        return result;
      }
      if (typeof obj === "string") {
        result[prefix || ""] = obj;
        return result;
      }
      if (typeof obj === "number") {
        result[prefix || ""] = obj;
        return result;
      }
      if (typeof obj === "boolean") {
        result[prefix || ""] = obj;
        return result;
      }
      for (const [key, value] of Object.entries(obj)) {
        const newPrefix = `${prefix ? `${prefix}.` : ""}${Array.isArray(obj) ? `[${key}]` : key}`;
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            if (typeof value[i] === "object" && value[i] !== null) {
              Object.assign(result, flattenAttributes(value[i], `${newPrefix}.[${i}]`));
            } else {
              if (value[i] === null) {
                result[`${newPrefix}.[${i}]`] = NULL_SENTINEL;
              } else {
                result[`${newPrefix}.[${i}]`] = value[i];
              }
            }
          }
        } else if (isRecord(value)) {
          Object.assign(result, flattenAttributes(value, newPrefix));
        } else {
          if (typeof value === "number" || typeof value === "string" || typeof value === "boolean") {
            result[newPrefix] = value;
          } else if (value === null) {
            result[newPrefix] = NULL_SENTINEL;
          }
        }
      }
      return result;
    }
    __name4(flattenAttributes, "flattenAttributes");
    function isRecord(value) {
      return value !== null && typeof value === "object" && !Array.isArray(value);
    }
    __name4(isRecord, "isRecord");
    var _globalThis = typeof globalThis === "object" ? globalThis : global;
    var GLOBAL_TRIGGER_DOT_DEV_KEY = Symbol.for(`dev.trigger.ts.api`);
    var _global = _globalThis;
    function registerGlobal(type, instance, allowOverride = false) {
      const api2 = _global[GLOBAL_TRIGGER_DOT_DEV_KEY] = _global[GLOBAL_TRIGGER_DOT_DEV_KEY] ?? {};
      if (!allowOverride && api2[type]) {
        return false;
      }
      api2[type] = instance;
      return true;
    }
    __name4(registerGlobal, "registerGlobal");
    function getGlobal(type) {
      return _global[GLOBAL_TRIGGER_DOT_DEV_KEY]?.[type];
    }
    __name4(getGlobal, "getGlobal");
    function unregisterGlobal(type) {
      const api2 = _global[GLOBAL_TRIGGER_DOT_DEV_KEY];
      if (api2) {
        delete api2[type];
      }
    }
    __name4(unregisterGlobal, "unregisterGlobal");
    var API_NAME = "task-context";
    var _getTaskContext;
    var getTaskContext_fn;
    var _TaskContextAPI = class _TaskContextAPI2 {
      constructor() {
        __privateAdd3(this, _getTaskContext);
      }
      static getInstance() {
        if (!this._instance) {
          this._instance = new _TaskContextAPI2();
        }
        return this._instance;
      }
      get isInsideTask() {
        return __privateMethod3(this, _getTaskContext, getTaskContext_fn).call(this) !== void 0;
      }
      get ctx() {
        return __privateMethod3(this, _getTaskContext, getTaskContext_fn).call(this)?.ctx;
      }
      get worker() {
        return __privateMethod3(this, _getTaskContext, getTaskContext_fn).call(this)?.worker;
      }
      get attributes() {
        if (this.ctx) {
          return {
            ...this.contextAttributes,
            ...this.workerAttributes
          };
        }
        return {};
      }
      get workerAttributes() {
        if (this.worker) {
          return {
            [SemanticInternalAttributes.WORKER_ID]: this.worker.id,
            [SemanticInternalAttributes.WORKER_VERSION]: this.worker.version
          };
        }
        return {};
      }
      get contextAttributes() {
        if (this.ctx) {
          return {
            [SemanticInternalAttributes.ATTEMPT_ID]: this.ctx.attempt.id,
            [SemanticInternalAttributes.ATTEMPT_NUMBER]: this.ctx.attempt.number,
            [SemanticInternalAttributes.TASK_SLUG]: this.ctx.task.id,
            [SemanticInternalAttributes.TASK_PATH]: this.ctx.task.filePath,
            [SemanticInternalAttributes.TASK_EXPORT_NAME]: this.ctx.task.exportName,
            [SemanticInternalAttributes.QUEUE_NAME]: this.ctx.queue.name,
            [SemanticInternalAttributes.QUEUE_ID]: this.ctx.queue.id,
            [SemanticInternalAttributes.ENVIRONMENT_ID]: this.ctx.environment.id,
            [SemanticInternalAttributes.ENVIRONMENT_TYPE]: this.ctx.environment.type,
            [SemanticInternalAttributes.ORGANIZATION_ID]: this.ctx.organization.id,
            [SemanticInternalAttributes.PROJECT_ID]: this.ctx.project.id,
            [SemanticInternalAttributes.PROJECT_REF]: this.ctx.project.ref,
            [SemanticInternalAttributes.PROJECT_NAME]: this.ctx.project.name,
            [SemanticInternalAttributes.RUN_ID]: this.ctx.run.id,
            [SemanticInternalAttributes.RUN_IS_TEST]: this.ctx.run.isTest,
            [SemanticInternalAttributes.ORGANIZATION_SLUG]: this.ctx.organization.slug,
            [SemanticInternalAttributes.ORGANIZATION_NAME]: this.ctx.organization.name,
            [SemanticInternalAttributes.BATCH_ID]: this.ctx.batch?.id,
            [SemanticInternalAttributes.IDEMPOTENCY_KEY]: this.ctx.run.idempotencyKey,
            [SemanticInternalAttributes.MACHINE_PRESET_NAME]: this.ctx.machine?.name,
            [SemanticInternalAttributes.MACHINE_PRESET_CPU]: this.ctx.machine?.cpu,
            [SemanticInternalAttributes.MACHINE_PRESET_MEMORY]: this.ctx.machine?.memory,
            [SemanticInternalAttributes.MACHINE_PRESET_CENTS_PER_MS]: this.ctx.machine?.centsPerMs
          };
        }
        return {};
      }
      disable() {
        unregisterGlobal(API_NAME);
      }
      setGlobalTaskContext(taskContext2) {
        return registerGlobal(API_NAME, taskContext2);
      }
    };
    _getTaskContext = /* @__PURE__ */ new WeakSet();
    getTaskContext_fn = /* @__PURE__ */ __name4(function() {
      return getGlobal(API_NAME);
    }, "#getTaskContext");
    __name4(_TaskContextAPI, "TaskContextAPI");
    var TaskContextAPI = _TaskContextAPI;
    var taskContext = TaskContextAPI.getInstance();
    var _TaskContextSpanProcessor = class _TaskContextSpanProcessor {
      constructor(innerProcessor) {
        this._innerProcessor = innerProcessor;
      }
      // Called when a span starts
      onStart(span, parentContext) {
        if (taskContext.ctx) {
          span.setAttributes(flattenAttributes({
            [SemanticInternalAttributes.ATTEMPT_ID]: taskContext.ctx.attempt.id,
            [SemanticInternalAttributes.ATTEMPT_NUMBER]: taskContext.ctx.attempt.number
          }, SemanticInternalAttributes.METADATA));
        }
        this._innerProcessor.onStart(span, parentContext);
      }
      // Delegate the rest of the methods to the wrapped processor
      onEnd(span) {
        this._innerProcessor.onEnd(span);
      }
      shutdown() {
        return this._innerProcessor.shutdown();
      }
      forceFlush() {
        return this._innerProcessor.forceFlush();
      }
    };
    __name4(_TaskContextSpanProcessor, "TaskContextSpanProcessor");
    var TaskContextSpanProcessor = _TaskContextSpanProcessor;
    var _TaskContextLogProcessor = class _TaskContextLogProcessor {
      constructor(innerProcessor) {
        this._innerProcessor = innerProcessor;
      }
      forceFlush() {
        return this._innerProcessor.forceFlush();
      }
      onEmit(logRecord, context2) {
        if (taskContext.ctx) {
          logRecord.setAttributes(flattenAttributes({
            [SemanticInternalAttributes.ATTEMPT_ID]: taskContext.ctx.attempt.id,
            [SemanticInternalAttributes.ATTEMPT_NUMBER]: taskContext.ctx.attempt.number
          }, SemanticInternalAttributes.METADATA));
        }
        this._innerProcessor.onEmit(logRecord, context2);
      }
      shutdown() {
        return this._innerProcessor.shutdown();
      }
    };
    __name4(_TaskContextLogProcessor, "TaskContextLogProcessor");
    var TaskContextLogProcessor = _TaskContextLogProcessor;
    function getEnvVar2(name) {
      if (typeof process !== "undefined" && typeof process.env === "object" && process.env !== null) {
        return process.env[name];
      }
    }
    __name4(getEnvVar2, "getEnvVar");
    var version3 = "3.0.0-beta.56";
    var _a2;
    var AsyncResourceDetector = (_a2 = class {
      constructor() {
        __publicField3(this, "_resolved", false);
        this._promise = new Promise((resolver) => {
          this._resolver = resolver;
        });
      }
      detect(_config) {
        return new resources.Resource({}, this._promise);
      }
      resolveWithAttributes(attributes) {
        if (!this._resolver) {
          throw new Error("Resolver not available");
        }
        if (this._resolved) {
          return;
        }
        this._resolved = true;
        this._resolver(attributes);
      }
    }, __name4(_a2, "AsyncResourceDetector"), _a2);
    var _TracingSDK = class _TracingSDK {
      constructor(config2) {
        this.config = config2;
        this.asyncResourceDetector = new AsyncResourceDetector();
        setLogLevel(config2.diagLogLevel ?? "none");
        const envResourceAttributesSerialized = getEnvVar2("OTEL_RESOURCE_ATTRIBUTES");
        const envResourceAttributes = envResourceAttributesSerialized ? JSON.parse(envResourceAttributesSerialized) : {};
        const commonResources = resources.detectResourcesSync({
          detectors: [
            this.asyncResourceDetector,
            resources.processDetectorSync
          ]
        }).merge(new resources.Resource({
          [semanticConventions.SemanticResourceAttributes.CLOUD_PROVIDER]: "trigger.dev",
          [SemanticInternalAttributes.TRIGGER]: true,
          [SemanticInternalAttributes.CLI_VERSION]: version3
        })).merge(config2.resource ?? new resources.Resource({})).merge(new resources.Resource(envResourceAttributes));
        const traceProvider = new sdkTraceNode.NodeTracerProvider({
          forceFlushTimeoutMillis: config2.forceFlushTimeoutMillis,
          resource: commonResources,
          spanLimits: {
            attributeCountLimit: OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
            attributeValueLengthLimit: OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
            eventCountLimit: OTEL_SPAN_EVENT_COUNT_LIMIT,
            attributePerEventCountLimit: OTEL_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
            linkCountLimit: OTEL_LINK_COUNT_LIMIT,
            attributePerLinkCountLimit: OTEL_ATTRIBUTE_PER_LINK_COUNT_LIMIT
          }
        });
        const spanExporter = new exporterTraceOtlpHttp.OTLPTraceExporter({
          url: `${config2.url}/v1/traces`,
          timeoutMillis: config2.forceFlushTimeoutMillis
        });
        traceProvider.addSpanProcessor(new TaskContextSpanProcessor(getEnvVar2("OTEL_BATCH_PROCESSING_ENABLED") === "1" ? new sdkTraceNode.BatchSpanProcessor(spanExporter, {
          maxExportBatchSize: parseInt(getEnvVar2("OTEL_SPAN_MAX_EXPORT_BATCH_SIZE") ?? "64"),
          scheduledDelayMillis: parseInt(getEnvVar2("OTEL_SPAN_SCHEDULED_DELAY_MILLIS") ?? "200"),
          exportTimeoutMillis: parseInt(getEnvVar2("OTEL_SPAN_EXPORT_TIMEOUT_MILLIS") ?? "30000"),
          maxQueueSize: parseInt(getEnvVar2("OTEL_SPAN_MAX_QUEUE_SIZE") ?? "512")
        }) : new sdkTraceNode.SimpleSpanProcessor(spanExporter)));
        traceProvider.register();
        instrumentation.registerInstrumentations({
          instrumentations: config2.instrumentations ?? [],
          tracerProvider: traceProvider
        });
        const logExporter = new exporterLogsOtlpHttp.OTLPLogExporter({
          url: `${config2.url}/v1/logs`
        });
        const loggerProvider = new sdkLogs.LoggerProvider({
          resource: commonResources,
          logRecordLimits: {
            attributeCountLimit: OTEL_LOG_ATTRIBUTE_COUNT_LIMIT,
            attributeValueLengthLimit: OTEL_LOG_ATTRIBUTE_VALUE_LENGTH_LIMIT
          }
        });
        loggerProvider.addLogRecordProcessor(new TaskContextLogProcessor(getEnvVar2("OTEL_BATCH_PROCESSING_ENABLED") === "1" ? new sdkLogs.BatchLogRecordProcessor(logExporter, {
          maxExportBatchSize: parseInt(getEnvVar2("OTEL_LOG_MAX_EXPORT_BATCH_SIZE") ?? "64"),
          scheduledDelayMillis: parseInt(getEnvVar2("OTEL_LOG_SCHEDULED_DELAY_MILLIS") ?? "200"),
          exportTimeoutMillis: parseInt(getEnvVar2("OTEL_LOG_EXPORT_TIMEOUT_MILLIS") ?? "30000"),
          maxQueueSize: parseInt(getEnvVar2("OTEL_LOG_MAX_QUEUE_SIZE") ?? "512")
        }) : new sdkLogs.SimpleLogRecordProcessor(logExporter)));
        this._logProvider = loggerProvider;
        this._spanExporter = spanExporter;
        this._traceProvider = traceProvider;
        apiLogs.logs.setGlobalLoggerProvider(loggerProvider);
        this.getLogger = loggerProvider.getLogger.bind(loggerProvider);
        this.getTracer = traceProvider.getTracer.bind(traceProvider);
      }
      async flush() {
        await Promise.all([
          this._traceProvider.forceFlush(),
          this._logProvider.forceFlush()
        ]);
      }
      async shutdown() {
        await Promise.all([
          this._traceProvider.shutdown(),
          this._logProvider.shutdown()
        ]);
      }
    };
    __name4(_TracingSDK, "TracingSDK");
    var TracingSDK2 = _TracingSDK;
    function setLogLevel(level) {
      let diagLogLevel;
      switch (level) {
        case "none":
          diagLogLevel = api.DiagLogLevel.NONE;
          break;
        case "error":
          diagLogLevel = api.DiagLogLevel.ERROR;
          break;
        case "warn":
          diagLogLevel = api.DiagLogLevel.WARN;
          break;
        case "info":
          diagLogLevel = api.DiagLogLevel.INFO;
          break;
        case "debug":
          diagLogLevel = api.DiagLogLevel.DEBUG;
          break;
        case "verbose":
          diagLogLevel = api.DiagLogLevel.VERBOSE;
          break;
        case "all":
          diagLogLevel = api.DiagLogLevel.ALL;
          break;
        default:
          diagLogLevel = api.DiagLogLevel.NONE;
      }
      api.diag.setLogger(new api.DiagConsoleLogger(), diagLogLevel);
    }
    __name4(setLogLevel, "setLogLevel");
    function recordSpanException(span, error) {
      if (error instanceof Error) {
        span.recordException(sanitizeSpanError(error));
      } else if (typeof error === "string") {
        span.recordException(error.replace(/\0/g, ""));
      } else {
        span.recordException(JSON.stringify(error).replace(/\0/g, ""));
      }
      span.setStatus({
        code: api.SpanStatusCode.ERROR
      });
    }
    __name4(recordSpanException, "recordSpanException");
    function sanitizeSpanError(error) {
      const sanitizedError = new Error(error.message.replace(/\0/g, ""));
      sanitizedError.name = error.name.replace(/\0/g, "");
      sanitizedError.stack = error.stack?.replace(/\0/g, "");
      return sanitizedError;
    }
    __name4(sanitizeSpanError, "sanitizeSpanError");
    var MachineCpu = zod.z.union([
      zod.z.literal(0.25),
      zod.z.literal(0.5),
      zod.z.literal(1),
      zod.z.literal(2),
      zod.z.literal(4)
    ]);
    var MachineMemory = zod.z.union([
      zod.z.literal(0.25),
      zod.z.literal(0.5),
      zod.z.literal(1),
      zod.z.literal(2),
      zod.z.literal(4),
      zod.z.literal(8)
    ]);
    var MachinePresetName = zod.z.enum([
      "micro",
      "small-1x",
      "small-2x",
      "medium-1x",
      "medium-2x",
      "large-1x",
      "large-2x"
    ]);
    var MachineConfig = zod.z.object({
      cpu: MachineCpu.optional(),
      memory: MachineMemory.optional(),
      preset: MachinePresetName.optional()
    });
    var MachinePreset = zod.z.object({
      name: MachinePresetName,
      cpu: zod.z.number(),
      memory: zod.z.number(),
      centsPerMs: zod.z.number()
    });
    var TaskRunBuiltInError = zod.z.object({
      type: zod.z.literal("BUILT_IN_ERROR"),
      name: zod.z.string(),
      message: zod.z.string(),
      stackTrace: zod.z.string()
    });
    var TaskRunCustomErrorObject = zod.z.object({
      type: zod.z.literal("CUSTOM_ERROR"),
      raw: zod.z.string()
    });
    var TaskRunStringError = zod.z.object({
      type: zod.z.literal("STRING_ERROR"),
      raw: zod.z.string()
    });
    var TaskRunErrorCodes2 = {
      COULD_NOT_FIND_EXECUTOR: "COULD_NOT_FIND_EXECUTOR",
      COULD_NOT_FIND_TASK: "COULD_NOT_FIND_TASK",
      CONFIGURED_INCORRECTLY: "CONFIGURED_INCORRECTLY",
      TASK_ALREADY_RUNNING: "TASK_ALREADY_RUNNING",
      TASK_EXECUTION_FAILED: "TASK_EXECUTION_FAILED",
      TASK_EXECUTION_ABORTED: "TASK_EXECUTION_ABORTED",
      TASK_PROCESS_EXITED_WITH_NON_ZERO_CODE: "TASK_PROCESS_EXITED_WITH_NON_ZERO_CODE",
      TASK_PROCESS_SIGKILL_TIMEOUT: "TASK_PROCESS_SIGKILL_TIMEOUT",
      TASK_RUN_CANCELLED: "TASK_RUN_CANCELLED",
      TASK_OUTPUT_ERROR: "TASK_OUTPUT_ERROR",
      HANDLE_ERROR_ERROR: "HANDLE_ERROR_ERROR",
      GRACEFUL_EXIT_TIMEOUT: "GRACEFUL_EXIT_TIMEOUT",
      TASK_RUN_CRASHED: "TASK_RUN_CRASHED"
    };
    var TaskRunInternalError = zod.z.object({
      type: zod.z.literal("INTERNAL_ERROR"),
      code: zod.z.enum([
        "COULD_NOT_FIND_EXECUTOR",
        "COULD_NOT_FIND_TASK",
        "CONFIGURED_INCORRECTLY",
        "TASK_ALREADY_RUNNING",
        "TASK_EXECUTION_FAILED",
        "TASK_EXECUTION_ABORTED",
        "TASK_PROCESS_EXITED_WITH_NON_ZERO_CODE",
        "TASK_PROCESS_SIGKILL_TIMEOUT",
        "TASK_RUN_CANCELLED",
        "TASK_OUTPUT_ERROR",
        "HANDLE_ERROR_ERROR",
        "GRACEFUL_EXIT_TIMEOUT",
        "TASK_RUN_HEARTBEAT_TIMEOUT",
        "TASK_RUN_CRASHED"
      ]),
      message: zod.z.string().optional(),
      stackTrace: zod.z.string().optional()
    });
    var TaskRunError = zod.z.discriminatedUnion("type", [
      TaskRunBuiltInError,
      TaskRunCustomErrorObject,
      TaskRunStringError,
      TaskRunInternalError
    ]);
    var TaskRun = zod.z.object({
      id: zod.z.string(),
      payload: zod.z.string(),
      payloadType: zod.z.string(),
      context: zod.z.any(),
      tags: zod.z.array(zod.z.string()),
      isTest: zod.z.boolean().default(false),
      createdAt: zod.z.coerce.date(),
      startedAt: zod.z.coerce.date().default(() => /* @__PURE__ */ new Date()),
      idempotencyKey: zod.z.string().optional(),
      maxAttempts: zod.z.number().optional(),
      durationMs: zod.z.number().default(0),
      costInCents: zod.z.number().default(0),
      baseCostInCents: zod.z.number().default(0),
      version: zod.z.string().optional()
    });
    var TaskRunExecutionTask = zod.z.object({
      id: zod.z.string(),
      filePath: zod.z.string(),
      exportName: zod.z.string()
    });
    var TaskRunExecutionAttempt = zod.z.object({
      id: zod.z.string(),
      number: zod.z.number(),
      startedAt: zod.z.coerce.date(),
      backgroundWorkerId: zod.z.string(),
      backgroundWorkerTaskId: zod.z.string(),
      status: zod.z.string()
    });
    var TaskRunExecutionEnvironment = zod.z.object({
      id: zod.z.string(),
      slug: zod.z.string(),
      type: zod.z.enum([
        "PRODUCTION",
        "STAGING",
        "DEVELOPMENT",
        "PREVIEW"
      ])
    });
    var TaskRunExecutionOrganization = zod.z.object({
      id: zod.z.string(),
      slug: zod.z.string(),
      name: zod.z.string()
    });
    var TaskRunExecutionProject = zod.z.object({
      id: zod.z.string(),
      ref: zod.z.string(),
      slug: zod.z.string(),
      name: zod.z.string()
    });
    var TaskRunExecutionQueue = zod.z.object({
      id: zod.z.string(),
      name: zod.z.string()
    });
    var TaskRunExecutionBatch = zod.z.object({
      id: zod.z.string()
    });
    var TaskRunExecution = zod.z.object({
      task: TaskRunExecutionTask,
      attempt: TaskRunExecutionAttempt,
      run: TaskRun,
      queue: TaskRunExecutionQueue,
      environment: TaskRunExecutionEnvironment,
      organization: TaskRunExecutionOrganization,
      project: TaskRunExecutionProject,
      batch: TaskRunExecutionBatch.optional(),
      machine: MachinePreset.optional()
    });
    var TaskRunContext = zod.z.object({
      task: TaskRunExecutionTask,
      attempt: TaskRunExecutionAttempt.omit({
        backgroundWorkerId: true,
        backgroundWorkerTaskId: true
      }),
      run: TaskRun.omit({
        payload: true,
        payloadType: true
      }),
      queue: TaskRunExecutionQueue,
      environment: TaskRunExecutionEnvironment,
      organization: TaskRunExecutionOrganization,
      project: TaskRunExecutionProject,
      batch: TaskRunExecutionBatch.optional(),
      machine: MachinePreset.optional()
    });
    var TaskRunExecutionRetry = zod.z.object({
      timestamp: zod.z.number(),
      delay: zod.z.number(),
      error: zod.z.unknown().optional()
    });
    var TaskRunExecutionUsage = zod.z.object({
      durationMs: zod.z.number()
    });
    var TaskRunFailedExecutionResult = zod.z.object({
      ok: zod.z.literal(false),
      id: zod.z.string(),
      error: TaskRunError,
      retry: TaskRunExecutionRetry.optional(),
      skippedRetrying: zod.z.boolean().optional(),
      usage: TaskRunExecutionUsage.optional()
    });
    var TaskRunSuccessfulExecutionResult = zod.z.object({
      ok: zod.z.literal(true),
      id: zod.z.string(),
      output: zod.z.string().optional(),
      outputType: zod.z.string(),
      usage: TaskRunExecutionUsage.optional()
    });
    var TaskRunExecutionResult = zod.z.discriminatedUnion("ok", [
      TaskRunSuccessfulExecutionResult,
      TaskRunFailedExecutionResult
    ]);
    var BatchTaskRunExecutionResult = zod.z.object({
      id: zod.z.string(),
      items: TaskRunExecutionResult.array()
    });
    zod.z.enum([
      "PRODUCTION",
      "STAGING",
      "DEVELOPMENT",
      "PREVIEW"
    ]);
    zod.z.object({
      execution: TaskRunExecution,
      traceContext: zod.z.record(zod.z.unknown()),
      environment: zod.z.record(zod.z.string()).optional()
    });
    var ProdTaskRunExecution = TaskRunExecution.extend({
      worker: zod.z.object({
        id: zod.z.string(),
        contentHash: zod.z.string(),
        version: zod.z.string()
      }),
      machine: MachinePreset.default({
        name: "small-1x",
        cpu: 1,
        memory: 1,
        centsPerMs: 0
      })
    });
    zod.z.object({
      execution: ProdTaskRunExecution,
      traceContext: zod.z.record(zod.z.unknown()),
      environment: zod.z.record(zod.z.string()).optional()
    });
    var FixedWindowRateLimit = zod.z.object({
      type: zod.z.literal("fixed-window"),
      limit: zod.z.number(),
      window: zod.z.union([
        zod.z.object({
          seconds: zod.z.number()
        }),
        zod.z.object({
          minutes: zod.z.number()
        }),
        zod.z.object({
          hours: zod.z.number()
        })
      ])
    });
    var SlidingWindowRateLimit = zod.z.object({
      type: zod.z.literal("sliding-window"),
      limit: zod.z.number(),
      window: zod.z.union([
        zod.z.object({
          seconds: zod.z.number()
        }),
        zod.z.object({
          minutes: zod.z.number()
        }),
        zod.z.object({
          hours: zod.z.number()
        })
      ])
    });
    var RateLimitOptions = zod.z.discriminatedUnion("type", [
      FixedWindowRateLimit,
      SlidingWindowRateLimit
    ]);
    var RetryOptions = zod.z.object({
      /** The number of attempts before giving up */
      maxAttempts: zod.z.number().int().optional(),
      /** The exponential factor to use when calculating the next retry time.
      *
      * Each subsequent retry will be calculated as `previousTimeout * factor`
      */
      factor: zod.z.number().optional(),
      /** The minimum time to wait before retrying */
      minTimeoutInMs: zod.z.number().int().optional(),
      /** The maximum time to wait before retrying */
      maxTimeoutInMs: zod.z.number().int().optional(),
      /** Randomize the timeout between retries.
      *
      * This can be useful to prevent the thundering herd problem where all retries happen at the same time.
      */
      randomize: zod.z.boolean().optional()
    });
    var QueueOptions = zod.z.object({
      /** You can define a shared queue and then pass the name in to your task.
         * 
         * @example
         * 
         * ```ts
         * const myQueue = queue({
            name: "my-queue",
            concurrencyLimit: 1,
          });
      
          export const task1 = task({
            id: "task-1",
            queue: {
              name: "my-queue",
            },
            run: async (payload: { message: string }) => {
              // ...
            },
          });
      
          export const task2 = task({
            id: "task-2",
            queue: {
              name: "my-queue",
            },
            run: async (payload: { message: string }) => {
              // ...
            },
          });
         * ```
         */
      name: zod.z.string().optional(),
      /** An optional property that specifies the maximum number of concurrent run executions.
      *
      * If this property is omitted, the task can potentially use up the full concurrency of an environment. */
      concurrencyLimit: zod.z.number().int().min(0).max(1e3).optional(),
      /** @deprecated This feature is coming soon */
      rateLimit: RateLimitOptions.optional()
    });
    var ScheduleMetadata = zod.z.object({
      cron: zod.z.string(),
      timezone: zod.z.string()
    });
    zod.z.object({
      id: zod.z.string(),
      packageVersion: zod.z.string(),
      queue: QueueOptions.optional(),
      retry: RetryOptions.optional(),
      machine: MachineConfig.optional(),
      triggerSource: zod.z.string().optional(),
      schedule: ScheduleMetadata.optional()
    });
    zod.z.object({
      filePath: zod.z.string(),
      exportName: zod.z.string()
    });
    zod.z.object({
      id: zod.z.string(),
      packageVersion: zod.z.string(),
      queue: QueueOptions.optional(),
      retry: RetryOptions.optional(),
      machine: MachineConfig.optional(),
      triggerSource: zod.z.string().optional(),
      schedule: ScheduleMetadata.optional(),
      filePath: zod.z.string(),
      exportName: zod.z.string()
    });
    zod.z.enum([
      "index",
      "create",
      "restore"
    ]);
    zod.z.enum([
      "terminate"
    ]);
    var RegexSchema = zod.z.custom((val) => {
      try {
        return typeof val.test === "function";
      } catch {
        return false;
      }
    });
    zod.z.object({
      project: zod.z.string(),
      triggerDirectories: zod.z.string().array().optional(),
      triggerUrl: zod.z.string().optional(),
      projectDir: zod.z.string().optional(),
      tsconfigPath: zod.z.string().optional(),
      retries: zod.z.object({
        enabledInDev: zod.z.boolean().default(true),
        default: RetryOptions.optional()
      }).optional(),
      additionalPackages: zod.z.string().array().optional(),
      additionalFiles: zod.z.string().array().optional(),
      dependenciesToBundle: zod.z.array(zod.z.union([
        zod.z.string(),
        RegexSchema
      ])).optional(),
      logLevel: zod.z.string().optional(),
      enableConsoleLogging: zod.z.boolean().optional(),
      postInstall: zod.z.string().optional(),
      extraCACerts: zod.z.string().optional()
    });
    zod.z.enum([
      "WAIT_FOR_DURATION",
      "WAIT_FOR_TASK",
      "WAIT_FOR_BATCH"
    ]);
    zod.z.object({
      runId: zod.z.string(),
      attemptCount: zod.z.number().optional(),
      messageId: zod.z.string(),
      isTest: zod.z.boolean(),
      traceContext: zod.z.record(zod.z.unknown()),
      environment: zod.z.record(zod.z.string()).optional()
    });
    var TaskResource = zod.z.object({
      id: zod.z.string(),
      filePath: zod.z.string(),
      exportName: zod.z.string(),
      queue: QueueOptions.optional(),
      retry: RetryOptions.optional(),
      machine: MachineConfig.optional(),
      triggerSource: zod.z.string().optional(),
      schedule: ScheduleMetadata.optional()
    });
    var BackgroundWorkerMetadata = zod.z.object({
      packageVersion: zod.z.string(),
      contentHash: zod.z.string(),
      cliPackageVersion: zod.z.string().optional(),
      tasks: zod.z.array(TaskResource)
    });
    zod.z.object({
      contentHash: zod.z.string(),
      imageTag: zod.z.string()
    });
    zod.z.object({
      userId: zod.z.string(),
      email: zod.z.string().email(),
      dashboardUrl: zod.z.string()
    });
    var GetProjectResponseBody = zod.z.object({
      id: zod.z.string(),
      externalRef: zod.z.string(),
      name: zod.z.string(),
      slug: zod.z.string(),
      createdAt: zod.z.coerce.date(),
      organization: zod.z.object({
        id: zod.z.string(),
        title: zod.z.string(),
        slug: zod.z.string(),
        createdAt: zod.z.coerce.date()
      })
    });
    zod.z.array(GetProjectResponseBody);
    zod.z.object({
      apiKey: zod.z.string(),
      name: zod.z.string(),
      apiUrl: zod.z.string()
    });
    zod.z.object({
      localOnly: zod.z.boolean(),
      metadata: BackgroundWorkerMetadata,
      supportsLazyAttempts: zod.z.boolean().optional()
    });
    zod.z.object({
      id: zod.z.string(),
      version: zod.z.string(),
      contentHash: zod.z.string()
    });
    var RunTag = zod.z.string().max(64, "Tags must be less than 64 characters");
    var RunTags = zod.z.union([
      RunTag,
      RunTag.array()
    ]);
    var TriggerTaskRequestBody = zod.z.object({
      payload: zod.z.any(),
      context: zod.z.any(),
      options: zod.z.object({
        dependentAttempt: zod.z.string().optional(),
        dependentBatch: zod.z.string().optional(),
        lockToVersion: zod.z.string().optional(),
        queue: QueueOptions.optional(),
        concurrencyKey: zod.z.string().optional(),
        idempotencyKey: zod.z.string().optional(),
        test: zod.z.boolean().optional(),
        payloadType: zod.z.string().optional(),
        delay: zod.z.string().or(zod.z.coerce.date()).optional(),
        ttl: zod.z.string().or(zod.z.number().nonnegative().int()).optional(),
        tags: RunTags.optional(),
        maxAttempts: zod.z.number().int().optional()
      }).optional()
    });
    var TriggerTaskResponse = zod.z.object({
      id: zod.z.string()
    });
    zod.z.object({
      items: TriggerTaskRequestBody.array(),
      dependentAttempt: zod.z.string().optional()
    });
    var BatchTriggerTaskResponse = zod.z.object({
      batchId: zod.z.string(),
      runs: zod.z.string().array()
    });
    zod.z.object({
      id: zod.z.string(),
      items: zod.z.array(zod.z.object({
        id: zod.z.string(),
        taskRunId: zod.z.string(),
        status: zod.z.enum([
          "PENDING",
          "CANCELED",
          "COMPLETED",
          "FAILED"
        ])
      }))
    });
    zod.z.object({
      tags: RunTags
    });
    zod.z.object({
      delay: zod.z.string().or(zod.z.coerce.date())
    });
    zod.z.object({
      variables: zod.z.record(zod.z.string())
    });
    zod.z.object({
      imageReference: zod.z.string(),
      selfHosted: zod.z.boolean().optional()
    });
    zod.z.object({
      id: zod.z.string(),
      contentHash: zod.z.string()
    });
    var ExternalBuildData = zod.z.object({
      buildId: zod.z.string(),
      buildToken: zod.z.string(),
      projectId: zod.z.string()
    });
    zod.z.object({
      id: zod.z.string(),
      contentHash: zod.z.string(),
      shortCode: zod.z.string(),
      version: zod.z.string(),
      imageTag: zod.z.string(),
      externalBuildData: ExternalBuildData.optional().nullable(),
      registryHost: zod.z.string().optional()
    });
    zod.z.object({
      contentHash: zod.z.string(),
      userId: zod.z.string().optional()
    });
    var DeploymentErrorData = zod.z.object({
      name: zod.z.string(),
      message: zod.z.string(),
      stack: zod.z.string().optional(),
      stderr: zod.z.string().optional()
    });
    zod.z.object({
      id: zod.z.string(),
      status: zod.z.enum([
        "PENDING",
        "BUILDING",
        "DEPLOYING",
        "DEPLOYED",
        "FAILED",
        "CANCELED",
        "TIMED_OUT"
      ]),
      contentHash: zod.z.string(),
      shortCode: zod.z.string(),
      version: zod.z.string(),
      imageReference: zod.z.string().optional(),
      errorData: DeploymentErrorData.optional().nullable(),
      worker: zod.z.object({
        id: zod.z.string(),
        version: zod.z.string(),
        tasks: zod.z.array(zod.z.object({
          id: zod.z.string(),
          slug: zod.z.string(),
          filePath: zod.z.string(),
          exportName: zod.z.string()
        }))
      }).optional()
    });
    var CreateUploadPayloadUrlResponseBody = zod.z.object({
      presignedUrl: zod.z.string()
    });
    var ReplayRunResponse = zod.z.object({
      id: zod.z.string()
    });
    var CanceledRunResponse = zod.z.object({
      id: zod.z.string()
    });
    var ScheduleType = zod.z.union([
      zod.z.literal("DECLARATIVE"),
      zod.z.literal("IMPERATIVE")
    ]);
    zod.z.object({
      /** The schedule id associated with this run (you can have many schedules for the same task).
      You can use this to remove the schedule, update it, etc */
      scheduleId: zod.z.string(),
      /** The type of schedule – `"DECLARATIVE"` or `"IMPERATIVE"`.
      *
      * **DECLARATIVE** – defined inline on your `schedules.task` using the `cron` property. They can only be created, updated or deleted by modifying the `cron` property on your task.
      *
      * **IMPERATIVE** – created using the `schedules.create` functions or in the dashboard.
      */
      type: ScheduleType,
      /** When the task was scheduled to run.
      * Note this will be slightly different from `new Date()` because it takes a few ms to run the task.
      * 
      * This date is UTC. To output it as a string with a timezone you would do this: 
      * ```ts
      * const formatted = payload.timestamp.toLocaleString("en-US", {
           timeZone: payload.timezone,
       });
       ```  */
      timestamp: zod.z.date(),
      /** When the task was last run (it has been).
      This can be undefined if it's never been run. This date is UTC. */
      lastTimestamp: zod.z.date().optional(),
      /** You can optionally provide an external id when creating the schedule.
      Usually you would use a userId or some other unique identifier.
      This defaults to undefined if you didn't provide one. */
      externalId: zod.z.string().optional(),
      /** The IANA timezone the schedule is set to. The default is UTC.
      * You can see the full list of supported timezones here: https://cloud.trigger.dev/timezones
      */
      timezone: zod.z.string(),
      /** The next 5 dates this task is scheduled to run */
      upcoming: zod.z.array(zod.z.date())
    });
    var CreateScheduleOptions = zod.z.object({
      /** The id of the task you want to attach to. */
      task: zod.z.string(),
      /**  The schedule in CRON format.
         * 
         * ```txt
      *    *    *    *    *    *
      ┬    ┬    ┬    ┬    ┬
      │    │    │    │    |
      │    │    │    │    └ day of week (0 - 7, 1L - 7L) (0 or 7 is Sun)
      │    │    │    └───── month (1 - 12)
      │    │    └────────── day of month (1 - 31, L)
      │    └─────────────── hour (0 - 23)
      └──────────────────── minute (0 - 59)
         * ```
      
      "L" means the last. In the "day of week" field, 1L means the last Monday of the month. In the day of month field, L means the last day of the month.
      
         */
      cron: zod.z.string(),
      /** You can only create one schedule with this key. If you use it twice, the second call will update the schedule.
      *
      * This is required to prevent you from creating duplicate schedules. */
      deduplicationKey: zod.z.string(),
      /** Optionally, you can specify your own IDs (like a user ID) and then use it inside the run function of your task.
      *
      * This allows you to have per-user CRON tasks.
      */
      externalId: zod.z.string().optional(),
      /** Optionally, you can specify a timezone in the IANA format. If unset it will use UTC.
      * If specified then the CRON will be evaluated in that timezone and will respect daylight savings.
      *
      * If you set the CRON to `0 0 * * *` and the timezone to `America/New_York` then the task will run at midnight in New York time, no matter whether it's daylight savings or not.
      *
      * You can see the full list of supported timezones here: https://cloud.trigger.dev/timezones
      *
      * @example "America/New_York", "Europe/London", "Asia/Tokyo", "Africa/Cairo"
      *
      */
      timezone: zod.z.string().optional()
    });
    CreateScheduleOptions.omit({
      deduplicationKey: true
    });
    var ScheduleGenerator = zod.z.object({
      type: zod.z.literal("CRON"),
      expression: zod.z.string(),
      description: zod.z.string()
    });
    var ScheduleObject = zod.z.object({
      id: zod.z.string(),
      type: ScheduleType,
      task: zod.z.string(),
      active: zod.z.boolean(),
      deduplicationKey: zod.z.string().nullish(),
      externalId: zod.z.string().nullish(),
      generator: ScheduleGenerator,
      timezone: zod.z.string(),
      nextRun: zod.z.coerce.date().nullish(),
      environments: zod.z.array(zod.z.object({
        id: zod.z.string(),
        type: zod.z.string(),
        userName: zod.z.string().nullish()
      }))
    });
    var DeletedScheduleObject = zod.z.object({
      id: zod.z.string()
    });
    zod.z.object({
      data: zod.z.array(ScheduleObject),
      pagination: zod.z.object({
        currentPage: zod.z.number(),
        totalPages: zod.z.number(),
        count: zod.z.number()
      })
    });
    zod.z.object({
      page: zod.z.number().optional(),
      perPage: zod.z.number().optional()
    });
    zod.z.object({
      timezones: zod.z.array(zod.z.string())
    });
    var RunStatus = zod.z.enum([
      /// Task hasn't been deployed yet but is waiting to be executed
      "WAITING_FOR_DEPLOY",
      /// Task is waiting to be executed by a worker
      "QUEUED",
      /// Task is currently being executed by a worker
      "EXECUTING",
      /// Task has failed and is waiting to be retried
      "REATTEMPTING",
      /// Task has been paused by the system, and will be resumed by the system
      "FROZEN",
      /// Task has been completed successfully
      "COMPLETED",
      /// Task has been canceled by the user
      "CANCELED",
      /// Task has been completed with errors
      "FAILED",
      /// Task has crashed and won't be retried, most likely the worker ran out of resources, e.g. memory or storage
      "CRASHED",
      /// Task was interrupted during execution, mostly this happens in development environments
      "INTERRUPTED",
      /// Task has failed to complete, due to an error in the system
      "SYSTEM_FAILURE",
      /// Task has been scheduled to run at a specific time
      "DELAYED",
      /// Task has expired and won't be executed
      "EXPIRED"
    ]);
    var AttemptStatus = zod.z.enum([
      "PENDING",
      "EXECUTING",
      "PAUSED",
      "COMPLETED",
      "FAILED",
      "CANCELED"
    ]);
    var RunEnvironmentDetails = zod.z.object({
      id: zod.z.string(),
      name: zod.z.string(),
      user: zod.z.string().optional()
    });
    var RunScheduleDetails = zod.z.object({
      id: zod.z.string(),
      externalId: zod.z.string().optional(),
      deduplicationKey: zod.z.string().optional(),
      generator: ScheduleGenerator
    });
    var CommonRunFields = {
      id: zod.z.string(),
      status: RunStatus,
      taskIdentifier: zod.z.string(),
      idempotencyKey: zod.z.string().optional(),
      version: zod.z.string().optional(),
      isQueued: zod.z.boolean(),
      isExecuting: zod.z.boolean(),
      isCompleted: zod.z.boolean(),
      isSuccess: zod.z.boolean(),
      isFailed: zod.z.boolean(),
      isCancelled: zod.z.boolean(),
      isTest: zod.z.boolean(),
      createdAt: zod.z.coerce.date(),
      updatedAt: zod.z.coerce.date(),
      startedAt: zod.z.coerce.date().optional(),
      finishedAt: zod.z.coerce.date().optional(),
      delayedUntil: zod.z.coerce.date().optional(),
      ttl: zod.z.string().optional(),
      expiredAt: zod.z.coerce.date().optional(),
      tags: zod.z.string().array(),
      costInCents: zod.z.number(),
      baseCostInCents: zod.z.number(),
      durationMs: zod.z.number()
    };
    var RetrieveRunResponse = zod.z.object({
      ...CommonRunFields,
      payload: zod.z.any().optional(),
      payloadPresignedUrl: zod.z.string().optional(),
      output: zod.z.any().optional(),
      outputPresignedUrl: zod.z.string().optional(),
      schedule: RunScheduleDetails.optional(),
      attempts: zod.z.array(zod.z.object({
        id: zod.z.string(),
        status: AttemptStatus,
        createdAt: zod.z.coerce.date(),
        updatedAt: zod.z.coerce.date(),
        startedAt: zod.z.coerce.date().optional(),
        completedAt: zod.z.coerce.date().optional(),
        error: SerializedError.optional()
      }).optional())
    });
    var ListRunResponseItem = zod.z.object({
      ...CommonRunFields,
      env: RunEnvironmentDetails
    });
    zod.z.object({
      data: zod.z.array(ListRunResponseItem),
      pagination: zod.z.object({
        next: zod.z.string().optional(),
        previous: zod.z.string().optional()
      })
    });
    zod.z.object({
      name: zod.z.string(),
      value: zod.z.string()
    });
    zod.z.object({
      value: zod.z.string()
    });
    zod.z.object({
      variables: zod.z.record(zod.z.string()),
      override: zod.z.boolean().optional()
    });
    var EnvironmentVariableResponseBody = zod.z.object({
      success: zod.z.boolean()
    });
    var EnvironmentVariableValue = zod.z.object({
      value: zod.z.string()
    });
    var EnvironmentVariable = zod.z.object({
      name: zod.z.string(),
      value: zod.z.string()
    });
    var EnvironmentVariables = zod.z.array(EnvironmentVariable);
    var defaultRetryOptions = {
      maxAttempts: 3,
      factor: 2,
      minTimeoutInMs: 1e3,
      maxTimeoutInMs: 6e4,
      randomize: true
    };
    function calculateNextRetryDelay(options, attempt) {
      const opts = {
        ...defaultRetryOptions,
        ...options
      };
      if (attempt >= opts.maxAttempts) {
        return;
      }
      const { factor, minTimeoutInMs, maxTimeoutInMs, randomize } = opts;
      const random = randomize ? Math.random() + 1 : 1;
      const timeout = Math.min(maxTimeoutInMs, random * minTimeoutInMs * Math.pow(factor, attempt - 1));
      return Math.round(timeout);
    }
    __name4(calculateNextRetryDelay, "calculateNextRetryDelay");
    var _ApiError = class _ApiError2 extends Error {
      constructor(status, error, message, headers) {
        super(`${_ApiError2.makeMessage(status, error, message)}`);
        this.name = "TriggerApiError";
        this.status = status;
        this.headers = headers;
        const data = error;
        this.error = data;
        this.code = data?.["code"];
        this.param = data?.["param"];
        this.type = data?.["type"];
      }
      static makeMessage(status, error, message) {
        const msg = error?.message ? typeof error.message === "string" ? error.message : JSON.stringify(error.message) : error ? JSON.stringify(error) : message;
        if (status && msg) {
          return `${status} ${msg}`;
        }
        if (status) {
          return `${status} status code (no body)`;
        }
        if (msg) {
          return msg;
        }
        return "(no status code or body)";
      }
      static generate(status, errorResponse, message, headers) {
        if (!status) {
          return new ApiConnectionError({
            cause: castToError(errorResponse)
          });
        }
        const error = errorResponse?.["error"];
        if (status === 400) {
          return new BadRequestError(status, error, message, headers);
        }
        if (status === 401) {
          return new AuthenticationError(status, error, message, headers);
        }
        if (status === 403) {
          return new PermissionDeniedError(status, error, message, headers);
        }
        if (status === 404) {
          return new NotFoundError(status, error, message, headers);
        }
        if (status === 409) {
          return new ConflictError(status, error, message, headers);
        }
        if (status === 422) {
          return new UnprocessableEntityError(status, error, message, headers);
        }
        if (status === 429) {
          return new RateLimitError(status, error, message, headers);
        }
        if (status >= 500) {
          return new InternalServerError(status, error, message, headers);
        }
        return new _ApiError2(status, error, message, headers);
      }
    };
    __name4(_ApiError, "ApiError");
    var ApiError = _ApiError;
    var _ApiConnectionError = class _ApiConnectionError extends ApiError {
      constructor({ message, cause }) {
        super(void 0, void 0, message || "Connection error.", void 0);
        __publicField3(this, "status");
        if (cause)
          this.cause = cause;
      }
    };
    __name4(_ApiConnectionError, "ApiConnectionError");
    var ApiConnectionError = _ApiConnectionError;
    var _BadRequestError = class _BadRequestError extends ApiError {
      constructor() {
        super(...arguments);
        __publicField3(this, "status", 400);
      }
    };
    __name4(_BadRequestError, "BadRequestError");
    var BadRequestError = _BadRequestError;
    var _AuthenticationError = class _AuthenticationError extends ApiError {
      constructor() {
        super(...arguments);
        __publicField3(this, "status", 401);
      }
    };
    __name4(_AuthenticationError, "AuthenticationError");
    var AuthenticationError = _AuthenticationError;
    var _PermissionDeniedError = class _PermissionDeniedError extends ApiError {
      constructor() {
        super(...arguments);
        __publicField3(this, "status", 403);
      }
    };
    __name4(_PermissionDeniedError, "PermissionDeniedError");
    var PermissionDeniedError = _PermissionDeniedError;
    var _NotFoundError = class _NotFoundError extends ApiError {
      constructor() {
        super(...arguments);
        __publicField3(this, "status", 404);
      }
    };
    __name4(_NotFoundError, "NotFoundError");
    var NotFoundError = _NotFoundError;
    var _ConflictError = class _ConflictError extends ApiError {
      constructor() {
        super(...arguments);
        __publicField3(this, "status", 409);
      }
    };
    __name4(_ConflictError, "ConflictError");
    var ConflictError = _ConflictError;
    var _UnprocessableEntityError = class _UnprocessableEntityError extends ApiError {
      constructor() {
        super(...arguments);
        __publicField3(this, "status", 422);
      }
    };
    __name4(_UnprocessableEntityError, "UnprocessableEntityError");
    var UnprocessableEntityError = _UnprocessableEntityError;
    var _RateLimitError = class _RateLimitError extends ApiError {
      constructor() {
        super(...arguments);
        __publicField3(this, "status", 429);
      }
      get millisecondsUntilReset() {
        const resetAtUnixEpochMs = (this.headers ?? {})["x-ratelimit-reset"];
        if (typeof resetAtUnixEpochMs === "string") {
          const resetAtUnixEpoch = parseInt(resetAtUnixEpochMs, 10);
          if (isNaN(resetAtUnixEpoch)) {
            return;
          }
          return Math.max(resetAtUnixEpoch - Date.now() + Math.floor(Math.random() * 2e3), 0);
        }
      }
    };
    __name4(_RateLimitError, "RateLimitError");
    var RateLimitError = _RateLimitError;
    var _InternalServerError = class _InternalServerError extends ApiError {
    };
    __name4(_InternalServerError, "InternalServerError");
    var InternalServerError = _InternalServerError;
    function castToError(err) {
      if (err instanceof Error)
        return err;
      return new Error(err);
    }
    __name4(castToError, "castToError");
    function accessoryAttributes(accessory) {
      return flattenAttributes(accessory, SemanticInternalAttributes.STYLE_ACCESSORY);
    }
    __name4(accessoryAttributes, "accessoryAttributes");
    var _CursorPage = class _CursorPage {
      constructor(data, pagination, pageFetcher) {
        this.pageFetcher = pageFetcher;
        this.data = data;
        this.pagination = pagination;
      }
      getPaginatedItems() {
        return this.data ?? [];
      }
      hasNextPage() {
        return !!this.pagination.next;
      }
      hasPreviousPage() {
        return !!this.pagination.previous;
      }
      getNextPage() {
        if (!this.pagination.next) {
          throw new Error("No next page available");
        }
        return this.pageFetcher({
          after: this.pagination.next
        });
      }
      getPreviousPage() {
        if (!this.pagination.previous) {
          throw new Error("No previous page available");
        }
        return this.pageFetcher({
          before: this.pagination.previous
        });
      }
      async *iterPages() {
        let page = this;
        yield page;
        while (page.hasNextPage()) {
          page = await page.getNextPage();
          yield page;
        }
      }
      async *[Symbol.asyncIterator]() {
        for await (const page of this.iterPages()) {
          for (const item of page.getPaginatedItems()) {
            yield item;
          }
        }
      }
    };
    __name4(_CursorPage, "CursorPage");
    var CursorPage = _CursorPage;
    var _OffsetLimitPage = class _OffsetLimitPage {
      constructor(data, pagination, pageFetcher) {
        this.pageFetcher = pageFetcher;
        this.data = data;
        this.pagination = pagination;
      }
      getPaginatedItems() {
        return this.data ?? [];
      }
      hasNextPage() {
        return this.pagination.currentPage < this.pagination.totalPages;
      }
      hasPreviousPage() {
        return this.pagination.currentPage > 1;
      }
      getNextPage() {
        if (!this.hasNextPage()) {
          throw new Error("No next page available");
        }
        return this.pageFetcher({
          page: this.pagination.currentPage + 1
        });
      }
      getPreviousPage() {
        if (!this.hasPreviousPage()) {
          throw new Error("No previous page available");
        }
        return this.pageFetcher({
          page: this.pagination.currentPage - 1
        });
      }
      async *iterPages() {
        let page = this;
        yield page;
        while (page.hasNextPage()) {
          page = await page.getNextPage();
          yield page;
        }
      }
      async *[Symbol.asyncIterator]() {
        for await (const page of this.iterPages()) {
          for (const item of page.getPaginatedItems()) {
            yield item;
          }
        }
      }
    };
    __name4(_OffsetLimitPage, "OffsetLimitPage");
    var OffsetLimitPage = _OffsetLimitPage;
    var defaultRetryOptions2 = {
      maxAttempts: 3,
      factor: 2,
      minTimeoutInMs: 1e3,
      maxTimeoutInMs: 6e4,
      randomize: false
    };
    function zodfetch2(schema, url, requestInit, options) {
      return new ApiPromise(_doZodFetch(schema, url, requestInit, options));
    }
    __name4(zodfetch2, "zodfetch");
    function zodfetchCursorPage(schema, url, params, requestInit, options) {
      const query = new URLSearchParams(params.query);
      if (params.limit) {
        query.set("page[size]", String(params.limit));
      }
      if (params.after) {
        query.set("page[after]", params.after);
      }
      if (params.before) {
        query.set("page[before]", params.before);
      }
      const cursorPageSchema = zod.z.object({
        data: zod.z.array(schema),
        pagination: zod.z.object({
          next: zod.z.string().optional(),
          previous: zod.z.string().optional()
        })
      });
      const $url = new URL(url);
      $url.search = query.toString();
      const fetchResult = _doZodFetch(cursorPageSchema, $url.href, requestInit, options);
      return new CursorPagePromise(fetchResult, schema, url, params, requestInit, options);
    }
    __name4(zodfetchCursorPage, "zodfetchCursorPage");
    function zodfetchOffsetLimitPage(schema, url, params, requestInit, options) {
      const query = new URLSearchParams(params.query);
      if (params.limit) {
        query.set("perPage", String(params.limit));
      }
      if (params.page) {
        query.set("page", String(params.page));
      }
      const offsetLimitPageSchema = zod.z.object({
        data: zod.z.array(schema),
        pagination: zod.z.object({
          currentPage: zod.z.coerce.number(),
          totalPages: zod.z.coerce.number(),
          count: zod.z.coerce.number()
        })
      });
      const $url = new URL(url);
      $url.search = query.toString();
      const fetchResult = _doZodFetch(offsetLimitPageSchema, $url.href, requestInit, options);
      return new OffsetLimitPagePromise(fetchResult, schema, url, params, requestInit, options);
    }
    __name4(zodfetchOffsetLimitPage, "zodfetchOffsetLimitPage");
    async function traceZodFetch(params, callback) {
      if (!params.options?.tracer) {
        return callback();
      }
      const url = new URL(params.url);
      const method = params.requestInit?.method ?? "GET";
      const name = params.options.name ?? `${method} ${url.pathname}`;
      return await params.options.tracer.startActiveSpan(name, async (span) => {
        return await callback(span);
      }, {
        attributes: {
          [SemanticInternalAttributes.STYLE_ICON]: params.options?.icon ?? "api",
          ...params.options.attributes
        }
      });
    }
    __name4(traceZodFetch, "traceZodFetch");
    async function _doZodFetch(schema, url, requestInit, options) {
      const $requestInit = await requestInit;
      return traceZodFetch({
        url,
        requestInit: $requestInit,
        options
      }, async (span) => {
        const result = await _doZodFetchWithRetries(schema, url, $requestInit, options);
        if (options?.onResponseBody && span) {
          options.onResponseBody(result.data, span);
        }
        return result;
      });
    }
    __name4(_doZodFetch, "_doZodFetch");
    async function _doZodFetchWithRetries(schema, url, requestInit, options, attempt = 1) {
      try {
        const response = await fetch(url, requestInitWithCache2(requestInit));
        const responseHeaders = createResponseHeaders(response.headers);
        if (!response.ok) {
          const retryResult = shouldRetry(response, attempt, options?.retry);
          if (retryResult.retry) {
            await waitForRetry(url, attempt + 1, retryResult.delay, options, requestInit, response);
            return await _doZodFetchWithRetries(schema, url, requestInit, options, attempt + 1);
          } else {
            const errText = await response.text().catch((e) => castToError2(e).message);
            const errJSON = safeJsonParse2(errText);
            const errMessage = errJSON ? void 0 : errText;
            throw ApiError.generate(response.status, errJSON, errMessage, responseHeaders);
          }
        }
        const jsonBody = await response.json();
        const parsedResult = schema.safeParse(jsonBody);
        if (parsedResult.success) {
          return {
            data: parsedResult.data,
            response
          };
        }
        throw zodValidationError.fromZodError(parsedResult.error);
      } catch (error) {
        if (error instanceof ApiError) {
          throw error;
        }
        if (options?.retry) {
          const retry = {
            ...defaultRetryOptions2,
            ...options.retry
          };
          const delay = calculateNextRetryDelay(retry, attempt);
          if (delay) {
            await waitForRetry(url, attempt + 1, delay, options, requestInit);
            return await _doZodFetchWithRetries(schema, url, requestInit, options, attempt + 1);
          }
        }
        throw new ApiConnectionError({
          cause: castToError2(error)
        });
      }
    }
    __name4(_doZodFetchWithRetries, "_doZodFetchWithRetries");
    function castToError2(err) {
      if (err instanceof Error)
        return err;
      return new Error(err);
    }
    __name4(castToError2, "castToError");
    function shouldRetry(response, attempt, retryOptions) {
      function shouldRetryForOptions() {
        const retry = {
          ...defaultRetryOptions2,
          ...retryOptions
        };
        const delay = calculateNextRetryDelay(retry, attempt);
        if (delay) {
          return {
            retry: true,
            delay
          };
        } else {
          return {
            retry: false
          };
        }
      }
      __name4(shouldRetryForOptions, "shouldRetryForOptions");
      const shouldRetryHeader = response.headers.get("x-should-retry");
      if (shouldRetryHeader === "true")
        return shouldRetryForOptions();
      if (shouldRetryHeader === "false")
        return {
          retry: false
        };
      if (response.status === 408)
        return shouldRetryForOptions();
      if (response.status === 409)
        return shouldRetryForOptions();
      if (response.status === 429) {
        if (attempt >= (typeof retryOptions?.maxAttempts === "number" ? retryOptions?.maxAttempts : 3)) {
          return {
            retry: false
          };
        }
        const resetAtUnixEpochMs = response.headers.get("x-ratelimit-reset");
        if (resetAtUnixEpochMs) {
          const resetAtUnixEpoch = parseInt(resetAtUnixEpochMs, 10);
          const delay = resetAtUnixEpoch - Date.now() + Math.floor(Math.random() * 1e3);
          if (delay > 0) {
            return {
              retry: true,
              delay
            };
          }
        }
        return shouldRetryForOptions();
      }
      if (response.status >= 500)
        return shouldRetryForOptions();
      return {
        retry: false
      };
    }
    __name4(shouldRetry, "shouldRetry");
    function safeJsonParse2(text) {
      try {
        return JSON.parse(text);
      } catch (e) {
        return void 0;
      }
    }
    __name4(safeJsonParse2, "safeJsonParse");
    function createResponseHeaders(headers) {
      return new Proxy(Object.fromEntries(
        // @ts-ignore
        headers.entries()
      ), {
        get(target, name) {
          const key = name.toString();
          return target[key.toLowerCase()] || target[key];
        }
      });
    }
    __name4(createResponseHeaders, "createResponseHeaders");
    function requestInitWithCache2(requestInit) {
      try {
        const withCache = {
          ...requestInit,
          cache: "no-cache"
        };
        const _ = new Request("http://localhost", withCache);
        return withCache;
      } catch (error) {
        return requestInit ?? {};
      }
    }
    __name4(requestInitWithCache2, "requestInitWithCache");
    var _ApiPromise = class _ApiPromise extends Promise {
      constructor(responsePromise) {
        super((resolve) => {
          resolve(null);
        });
        this.responsePromise = responsePromise;
      }
      /**
      * Gets the raw `Response` instance instead of parsing the response
      * data.
      *
      * If you want to parse the response body but still get the `Response`
      * instance, you can use {@link withResponse()}.
      */
      asResponse() {
        return this.responsePromise.then((p) => p.response);
      }
      /**
      * Gets the parsed response data and the raw `Response` instance.
      *
      * If you just want to get the raw `Response` instance without parsing it,
      * you can use {@link asResponse()}.
      */
      async withResponse() {
        const [data, response] = await Promise.all([
          this.parse(),
          this.asResponse()
        ]);
        return {
          data,
          response
        };
      }
      parse() {
        return this.responsePromise.then((result) => result.data);
      }
      then(onfulfilled, onrejected) {
        return this.parse().then(onfulfilled, onrejected);
      }
      catch(onrejected) {
        return this.parse().catch(onrejected);
      }
      finally(onfinally) {
        return this.parse().finally(onfinally);
      }
    };
    __name4(_ApiPromise, "ApiPromise");
    var ApiPromise = _ApiPromise;
    var _fetchPage;
    var fetchPage_fn;
    var _CursorPagePromise = class _CursorPagePromise extends ApiPromise {
      constructor(result, schema, url, params, requestInit, options) {
        super(result.then((result2) => ({
          data: new CursorPage(result2.data.data, result2.data.pagination, __privateMethod3(this, _fetchPage, fetchPage_fn).bind(this)),
          response: result2.response
        })));
        __privateAdd3(this, _fetchPage);
        this.schema = schema;
        this.url = url;
        this.params = params;
        this.requestInit = requestInit;
        this.options = options;
      }
      /**
      * Allow auto-paginating iteration on an unawaited list call, eg:
      *
      *    for await (const item of client.items.list()) {
      *      console.log(item)
      *    }
      */
      async *[Symbol.asyncIterator]() {
        const page = await this;
        for await (const item of page) {
          yield item;
        }
      }
    };
    _fetchPage = /* @__PURE__ */ new WeakSet();
    fetchPage_fn = /* @__PURE__ */ __name4(function(params) {
      return zodfetchCursorPage(this.schema, this.url, {
        ...this.params,
        ...params
      }, this.requestInit, this.options);
    }, "#fetchPage");
    __name4(_CursorPagePromise, "CursorPagePromise");
    var CursorPagePromise = _CursorPagePromise;
    var _fetchPage2;
    var fetchPage_fn2;
    var _OffsetLimitPagePromise = class _OffsetLimitPagePromise extends ApiPromise {
      constructor(result, schema, url, params, requestInit, options) {
        super(result.then((result2) => ({
          data: new OffsetLimitPage(result2.data.data, result2.data.pagination, __privateMethod3(this, _fetchPage2, fetchPage_fn2).bind(this)),
          response: result2.response
        })));
        __privateAdd3(this, _fetchPage2);
        this.schema = schema;
        this.url = url;
        this.params = params;
        this.requestInit = requestInit;
        this.options = options;
      }
      /**
      * Allow auto-paginating iteration on an unawaited list call, eg:
      *
      *    for await (const item of client.items.list()) {
      *      console.log(item)
      *    }
      */
      async *[Symbol.asyncIterator]() {
        const page = await this;
        for await (const item of page) {
          yield item;
        }
      }
    };
    _fetchPage2 = /* @__PURE__ */ new WeakSet();
    fetchPage_fn2 = /* @__PURE__ */ __name4(function(params1) {
      return zodfetchOffsetLimitPage(this.schema, this.url, {
        ...this.params,
        ...params1
      }, this.requestInit, this.options);
    }, "#fetchPage");
    __name4(_OffsetLimitPagePromise, "OffsetLimitPagePromise");
    var OffsetLimitPagePromise = _OffsetLimitPagePromise;
    async function waitForRetry(url, attempt, delay, options, requestInit, response) {
      if (options?.tracer) {
        const method = requestInit?.method ?? "GET";
        return options.tracer.startActiveSpan(response ? `wait after ${response.status}` : `wait after error`, async (span) => {
          await new Promise((resolve) => setTimeout(resolve, delay));
        }, {
          attributes: {
            [SemanticInternalAttributes.STYLE_ICON]: "wait",
            ...accessoryAttributes({
              items: [
                {
                  text: `retrying ${options?.name ?? method.toUpperCase()} in ${delay}ms`,
                  variant: "normal"
                }
              ],
              style: "codepath"
            })
          }
        });
      }
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    __name4(waitForRetry, "waitForRetry");
    var DEFAULT_ZOD_FETCH_OPTIONS = {
      retry: {
        maxAttempts: 3,
        minTimeoutInMs: 1e3,
        maxTimeoutInMs: 3e4,
        factor: 2,
        randomize: false
      }
    };
    var _getHeaders;
    var getHeaders_fn;
    var _ApiClient3 = class _ApiClient {
      constructor(baseUrl, accessToken, requestOptions = {}) {
        __privateAdd3(this, _getHeaders);
        this.accessToken = accessToken;
        this.baseUrl = baseUrl.replace(/\/$/, "");
        this.defaultRequestOptions = mergeRequestOptions(DEFAULT_ZOD_FETCH_OPTIONS, requestOptions);
      }
      async getRunResult(runId, requestOptions) {
        try {
          return await zodfetch2(TaskRunExecutionResult, `${this.baseUrl}/api/v1/runs/${runId}/result`, {
            method: "GET",
            headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
          }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
        } catch (error) {
          if (error instanceof ApiError) {
            if (error.status === 404) {
              return void 0;
            }
          }
          throw error;
        }
      }
      async getBatchResults(batchId, requestOptions) {
        return await zodfetch2(BatchTaskRunExecutionResult, `${this.baseUrl}/api/v1/batches/${batchId}/results`, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      triggerTask(taskId, body, options, requestOptions) {
        const encodedTaskId = encodeURIComponent(taskId);
        return zodfetch2(TriggerTaskResponse, `${this.baseUrl}/api/v1/tasks/${encodedTaskId}/trigger`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, options?.spanParentAsLink ?? false),
          body: JSON.stringify(body)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      batchTriggerTask(taskId, body, options, requestOptions) {
        const encodedTaskId = encodeURIComponent(taskId);
        return zodfetch2(BatchTriggerTaskResponse, `${this.baseUrl}/api/v1/tasks/${encodedTaskId}/batch`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, options?.spanParentAsLink ?? false),
          body: JSON.stringify(body)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      createUploadPayloadUrl(filename, requestOptions) {
        return zodfetch2(CreateUploadPayloadUrlResponseBody, `${this.baseUrl}/api/v1/packets/${filename}`, {
          method: "PUT",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      getPayloadUrl(filename, requestOptions) {
        return zodfetch2(CreateUploadPayloadUrlResponseBody, `${this.baseUrl}/api/v1/packets/${filename}`, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      retrieveRun(runId, requestOptions) {
        return zodfetch2(RetrieveRunResponse, `${this.baseUrl}/api/v3/runs/${runId}`, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      listRuns(query, requestOptions) {
        const searchParams = createSearchQueryForListRuns(query);
        return zodfetchCursorPage(ListRunResponseItem, `${this.baseUrl}/api/v1/runs`, {
          query: searchParams,
          limit: query?.limit,
          after: query?.after,
          before: query?.before
        }, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      listProjectRuns(projectRef, query, requestOptions) {
        const searchParams = createSearchQueryForListRuns(query);
        if (query?.env) {
          searchParams.append("filter[env]", Array.isArray(query.env) ? query.env.join(",") : query.env);
        }
        return zodfetchCursorPage(ListRunResponseItem, `${this.baseUrl}/api/v1/projects/${projectRef}/runs`, {
          query: searchParams,
          limit: query?.limit,
          after: query?.after,
          before: query?.before
        }, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      replayRun(runId, requestOptions) {
        return zodfetch2(ReplayRunResponse, `${this.baseUrl}/api/v1/runs/${runId}/replay`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      cancelRun(runId, requestOptions) {
        return zodfetch2(CanceledRunResponse, `${this.baseUrl}/api/v2/runs/${runId}/cancel`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      rescheduleRun(runId, body, requestOptions) {
        return zodfetch2(RetrieveRunResponse, `${this.baseUrl}/api/v1/runs/${runId}/reschedule`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false),
          body: JSON.stringify(body)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      addTags(runId, body, requestOptions) {
        return zodfetch2(zod.z.object({
          message: zod.z.string()
        }), `${this.baseUrl}/api/v1/runs/${runId}/tags`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false),
          body: JSON.stringify(body)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      createSchedule(options, requestOptions) {
        return zodfetch2(ScheduleObject, `${this.baseUrl}/api/v1/schedules`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false),
          body: JSON.stringify(options)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      listSchedules(options, requestOptions) {
        const searchParams = new URLSearchParams();
        if (options?.page) {
          searchParams.append("page", options.page.toString());
        }
        if (options?.perPage) {
          searchParams.append("perPage", options.perPage.toString());
        }
        return zodfetchOffsetLimitPage(ScheduleObject, `${this.baseUrl}/api/v1/schedules`, {
          page: options?.page,
          limit: options?.perPage
        }, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      retrieveSchedule(scheduleId, requestOptions) {
        return zodfetch2(ScheduleObject, `${this.baseUrl}/api/v1/schedules/${scheduleId}`, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      updateSchedule(scheduleId, options, requestOptions) {
        return zodfetch2(ScheduleObject, `${this.baseUrl}/api/v1/schedules/${scheduleId}`, {
          method: "PUT",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false),
          body: JSON.stringify(options)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      deactivateSchedule(scheduleId, requestOptions) {
        return zodfetch2(ScheduleObject, `${this.baseUrl}/api/v1/schedules/${scheduleId}/deactivate`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      activateSchedule(scheduleId, requestOptions) {
        return zodfetch2(ScheduleObject, `${this.baseUrl}/api/v1/schedules/${scheduleId}/activate`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      deleteSchedule(scheduleId, requestOptions) {
        return zodfetch2(DeletedScheduleObject, `${this.baseUrl}/api/v1/schedules/${scheduleId}`, {
          method: "DELETE",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      listEnvVars(projectRef, slug, requestOptions) {
        return zodfetch2(EnvironmentVariables, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}`, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      importEnvVars(projectRef, slug, body, requestOptions) {
        return zodfetch2(EnvironmentVariableResponseBody, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}/import`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false),
          body: JSON.stringify(body)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      retrieveEnvVar(projectRef, slug, key, requestOptions) {
        return zodfetch2(EnvironmentVariableValue, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}/${key}`, {
          method: "GET",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      createEnvVar(projectRef, slug, body, requestOptions) {
        return zodfetch2(EnvironmentVariableResponseBody, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}`, {
          method: "POST",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false),
          body: JSON.stringify(body)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      updateEnvVar(projectRef, slug, key, body, requestOptions) {
        return zodfetch2(EnvironmentVariableResponseBody, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}/${key}`, {
          method: "PUT",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false),
          body: JSON.stringify(body)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
      deleteEnvVar(projectRef, slug, key, requestOptions) {
        return zodfetch2(EnvironmentVariableResponseBody, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}/${key}`, {
          method: "DELETE",
          headers: __privateMethod3(this, _getHeaders, getHeaders_fn).call(this, false)
        }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
      }
    };
    _getHeaders = /* @__PURE__ */ new WeakSet();
    getHeaders_fn = /* @__PURE__ */ __name4(function(spanParentAsLink) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
        "trigger-version": version3
      };
      if (taskContext.isInsideTask) {
        headers["x-trigger-worker"] = "true";
        api.propagation.inject(api.context.active(), headers);
        if (spanParentAsLink) {
          headers["x-trigger-span-parent-as-link"] = "1";
        }
      }
      return headers;
    }, "#getHeaders");
    __name4(_ApiClient3, "ApiClient");
    var ApiClient2 = _ApiClient3;
    function createSearchQueryForListRuns(query) {
      const searchParams = new URLSearchParams();
      if (query) {
        if (query.status) {
          searchParams.append("filter[status]", Array.isArray(query.status) ? query.status.join(",") : query.status);
        }
        if (query.taskIdentifier) {
          searchParams.append("filter[taskIdentifier]", Array.isArray(query.taskIdentifier) ? query.taskIdentifier.join(",") : query.taskIdentifier);
        }
        if (query.version) {
          searchParams.append("filter[version]", Array.isArray(query.version) ? query.version.join(",") : query.version);
        }
        if (query.bulkAction) {
          searchParams.append("filter[bulkAction]", query.bulkAction);
        }
        if (query.tag) {
          searchParams.append("filter[tag]", Array.isArray(query.tag) ? query.tag.join(",") : query.tag);
        }
        if (query.schedule) {
          searchParams.append("filter[schedule]", query.schedule);
        }
        if (typeof query.isTest === "boolean") {
          searchParams.append("filter[isTest]", String(query.isTest));
        }
        if (query.from) {
          searchParams.append("filter[createdAt][from]", query.from instanceof Date ? query.from.getTime().toString() : query.from.toString());
        }
        if (query.to) {
          searchParams.append("filter[createdAt][to]", query.to instanceof Date ? query.to.getTime().toString() : query.to.toString());
        }
        if (query.period) {
          searchParams.append("filter[createdAt][period]", query.period);
        }
      }
      return searchParams;
    }
    __name4(createSearchQueryForListRuns, "createSearchQueryForListRuns");
    function mergeRequestOptions(defaultOptions, options) {
      if (!options) {
        return defaultOptions;
      }
      return {
        ...defaultOptions,
        ...options,
        retry: {
          ...defaultOptions.retry,
          ...options.retry
        }
      };
    }
    __name4(mergeRequestOptions, "mergeRequestOptions");
    var API_NAME2 = "api-client";
    var _getConfig;
    var getConfig_fn;
    var _APIClientManagerAPI = class _APIClientManagerAPI2 {
      constructor() {
        __privateAdd3(this, _getConfig);
      }
      static getInstance() {
        if (!this._instance) {
          this._instance = new _APIClientManagerAPI2();
        }
        return this._instance;
      }
      disable() {
        unregisterGlobal(API_NAME2);
      }
      setGlobalAPIClientConfiguration(config2) {
        return registerGlobal(API_NAME2, config2);
      }
      get baseURL() {
        const store = __privateMethod3(this, _getConfig, getConfig_fn).call(this);
        return store?.baseURL ?? getEnvVar2("TRIGGER_API_URL") ?? "https://api.trigger.dev";
      }
      get accessToken() {
        const store = __privateMethod3(this, _getConfig, getConfig_fn).call(this);
        return store?.secretKey ?? getEnvVar2("TRIGGER_SECRET_KEY") ?? getEnvVar2("TRIGGER_ACCESS_TOKEN");
      }
      get client() {
        if (!this.baseURL || !this.accessToken) {
          return void 0;
        }
        return new ApiClient2(this.baseURL, this.accessToken);
      }
    };
    _getConfig = /* @__PURE__ */ new WeakSet();
    getConfig_fn = /* @__PURE__ */ __name4(function() {
      return getGlobal(API_NAME2);
    }, "#getConfig");
    __name4(_APIClientManagerAPI, "APIClientManagerAPI");
    var APIClientManagerAPI = _APIClientManagerAPI;
    var apiClientManager = APIClientManagerAPI.getInstance();
    async function parsePacket(value) {
      if (!value.data) {
        return void 0;
      }
      switch (value.dataType) {
        case "application/json":
          return JSON.parse(value.data);
        case "application/super+json":
          const { parse } = await loadSuperJSON();
          return parse(value.data);
        case "text/plain":
          return value.data;
        case "application/store":
          throw new Error(`Cannot parse an application/store packet (${value.data}). Needs to be imported first.`);
        default:
          return value.data;
      }
    }
    __name4(parsePacket, "parsePacket");
    async function stringifyIO(value) {
      if (value === void 0) {
        return {
          dataType: "application/json"
        };
      }
      if (typeof value === "string") {
        return {
          data: value,
          dataType: "text/plain"
        };
      }
      try {
        const { stringify } = await loadSuperJSON();
        const data = stringify(value);
        return {
          data,
          dataType: "application/super+json"
        };
      } catch {
        return {
          data: value,
          dataType: "application/json"
        };
      }
    }
    __name4(stringifyIO, "stringifyIO");
    async function conditionallyExportPacket(packet, pathPrefix, tracer2) {
      if (apiClientManager.client) {
        const { needsOffloading, size } = packetRequiresOffloading(packet);
        if (needsOffloading) {
          if (!tracer2) {
            return await exportPacket(packet, pathPrefix);
          } else {
            const result = await tracer2.startActiveSpan("store.uploadOutput", async (span) => {
              return await exportPacket(packet, pathPrefix);
            }, {
              attributes: {
                byteLength: size,
                [SemanticInternalAttributes.STYLE_ICON]: "cloud-upload"
              }
            });
            return result ?? packet;
          }
        }
      }
      return packet;
    }
    __name4(conditionallyExportPacket, "conditionallyExportPacket");
    function packetRequiresOffloading(packet, lengthLimit) {
      if (!packet.data) {
        return {
          needsOffloading: false,
          size: 0
        };
      }
      const byteSize = Buffer.byteLength(packet.data, "utf8");
      return {
        needsOffloading: byteSize >= (lengthLimit ?? OFFLOAD_IO_PACKET_LENGTH_LIMIT),
        size: byteSize
      };
    }
    __name4(packetRequiresOffloading, "packetRequiresOffloading");
    async function exportPacket(packet, pathPrefix) {
      const filename = `${pathPrefix}.${getPacketExtension(packet.dataType)}`;
      const presignedResponse = await apiClientManager.client.createUploadPayloadUrl(filename);
      const uploadResponse = await fetch(presignedResponse.presignedUrl, {
        method: "PUT",
        headers: {
          "Content-Type": packet.dataType
        },
        body: packet.data
      });
      if (!uploadResponse.ok) {
        throw new Error(`Failed to upload output to ${presignedResponse.presignedUrl}: ${uploadResponse.statusText}`);
      }
      return {
        data: filename,
        dataType: "application/store"
      };
    }
    __name4(exportPacket, "exportPacket");
    async function conditionallyImportPacket(packet, tracer2) {
      if (packet.dataType !== "application/store") {
        return packet;
      }
      if (!tracer2) {
        return await importPacket(packet);
      } else {
        const result = await tracer2.startActiveSpan("store.downloadPayload", async (span) => {
          return await importPacket(packet, span);
        }, {
          attributes: {
            [SemanticInternalAttributes.STYLE_ICON]: "cloud-download"
          }
        });
        return result ?? packet;
      }
    }
    __name4(conditionallyImportPacket, "conditionallyImportPacket");
    async function importPacket(packet, span) {
      if (!packet.data) {
        return packet;
      }
      if (!apiClientManager.client) {
        return packet;
      }
      const presignedResponse = await apiClientManager.client.getPayloadUrl(packet.data);
      const response = await fetch(presignedResponse.presignedUrl);
      if (!response.ok) {
        throw new Error(`Failed to import packet ${presignedResponse.presignedUrl}: ${response.statusText}`);
      }
      const data = await response.text();
      span?.setAttribute("size", Buffer.byteLength(data, "utf8"));
      return {
        data,
        dataType: response.headers.get("content-type") ?? "application/json"
      };
    }
    __name4(importPacket, "importPacket");
    async function createPacketAttributes(packet, dataKey, dataTypeKey) {
      if (!packet.data) {
        return;
      }
      switch (packet.dataType) {
        case "application/json":
          return {
            ...flattenAttributes(packet, dataKey),
            [dataTypeKey]: packet.dataType
          };
        case "application/super+json":
          const { parse } = await loadSuperJSON();
          if (typeof packet.data === "undefined" || packet.data === null) {
            return;
          }
          try {
            const parsed = parse(packet.data);
            const jsonified = JSON.parse(JSON.stringify(parsed, safeReplacer));
            const result = {
              ...flattenAttributes(jsonified, dataKey),
              [dataTypeKey]: "application/json"
            };
            return result;
          } catch (e) {
            return;
          }
        case "application/store":
          return {
            [dataKey]: packet.data,
            [dataTypeKey]: packet.dataType
          };
        case "text/plain":
          return {
            [dataKey]: packet.data,
            [dataTypeKey]: packet.dataType
          };
        default:
          return;
      }
    }
    __name4(createPacketAttributes, "createPacketAttributes");
    function safeReplacer(key, value) {
      if (typeof value === "bigint") {
        return value.toString();
      }
      if (value instanceof RegExp) {
        return value.toString();
      }
      if (value instanceof Set) {
        return Array.from(value);
      }
      if (value instanceof Map) {
        const obj = {};
        value.forEach((v, k) => {
          obj[k] = v;
        });
        return obj;
      }
      return value;
    }
    __name4(safeReplacer, "safeReplacer");
    function getPacketExtension(outputType) {
      switch (outputType) {
        case "application/json":
          return "json";
        case "application/super+json":
          return "json";
        case "text/plain":
          return "txt";
        default:
          return "txt";
      }
    }
    __name4(getPacketExtension, "getPacketExtension");
    async function loadSuperJSON() {
      return await import("superjson");
    }
    __name4(loadSuperJSON, "loadSuperJSON");
    var _callRun;
    var callRun_fn;
    var _callInitFunctions;
    var callInitFunctions_fn;
    var _callConfigInit;
    var callConfigInit_fn;
    var _callOnSuccessFunctions;
    var callOnSuccessFunctions_fn;
    var _callOnSuccessFunction;
    var callOnSuccessFunction_fn;
    var _callOnFailureFunctions;
    var callOnFailureFunctions_fn;
    var _callOnFailureFunction;
    var callOnFailureFunction_fn;
    var _callOnStartFunctions;
    var callOnStartFunctions_fn;
    var _callOnStartFunction;
    var callOnStartFunction_fn;
    var _callTaskCleanup;
    var callTaskCleanup_fn;
    var _handleError;
    var handleError_fn;
    var _TaskExecutor = class _TaskExecutor {
      constructor(task, options) {
        __privateAdd3(this, _callRun);
        __privateAdd3(this, _callInitFunctions);
        __privateAdd3(this, _callConfigInit);
        __privateAdd3(this, _callOnSuccessFunctions);
        __privateAdd3(this, _callOnSuccessFunction);
        __privateAdd3(this, _callOnFailureFunctions);
        __privateAdd3(this, _callOnFailureFunction);
        __privateAdd3(this, _callOnStartFunctions);
        __privateAdd3(this, _callOnStartFunction);
        __privateAdd3(this, _callTaskCleanup);
        __privateAdd3(this, _handleError);
        this.task = task;
        this._tracingSDK = options.tracingSDK;
        this._tracer = options.tracer;
        this._consoleInterceptor = options.consoleInterceptor;
        this._config = options.projectConfig;
        this._importedConfig = options.importedConfig;
        this._handleErrorFn = options.handleErrorFn;
      }
      async execute(execution, worker, traceContext, usage22) {
        const ctx = TaskRunContext.parse(execution);
        const attemptMessage = `Attempt ${execution.attempt.number}`;
        const originalPacket = {
          data: execution.run.payload,
          dataType: execution.run.payloadType
        };
        taskContext.setGlobalTaskContext({
          ctx,
          worker
        });
        this._tracingSDK.asyncResourceDetector.resolveWithAttributes({
          ...taskContext.attributes,
          [SemanticInternalAttributes.SDK_VERSION]: this.task.packageVersion,
          [SemanticInternalAttributes.SDK_LANGUAGE]: "typescript"
        });
        const result = await this._tracer.startActiveSpan(attemptMessage, async (span) => {
          return await this._consoleInterceptor.intercept(console, async () => {
            let parsedPayload;
            let initOutput;
            try {
              const payloadPacket = await conditionallyImportPacket(originalPacket, this._tracer);
              parsedPayload = await parsePacket(payloadPacket);
              if (execution.attempt.number === 1) {
                await __privateMethod3(this, _callOnStartFunctions, callOnStartFunctions_fn).call(this, parsedPayload, ctx);
              }
              initOutput = await __privateMethod3(this, _callInitFunctions, callInitFunctions_fn).call(this, parsedPayload, ctx);
              const output = await __privateMethod3(this, _callRun, callRun_fn).call(this, parsedPayload, ctx, initOutput);
              await __privateMethod3(this, _callOnSuccessFunctions, callOnSuccessFunctions_fn).call(this, parsedPayload, output, ctx, initOutput);
              try {
                const stringifiedOutput = await stringifyIO(output);
                const finalOutput = await conditionallyExportPacket(stringifiedOutput, `${execution.attempt.id}/output`, this._tracer);
                const attributes = await createPacketAttributes(finalOutput, SemanticInternalAttributes.OUTPUT, SemanticInternalAttributes.OUTPUT_TYPE);
                if (attributes) {
                  span.setAttributes(attributes);
                }
                return {
                  ok: true,
                  id: execution.run.id,
                  output: finalOutput.data,
                  outputType: finalOutput.dataType
                };
              } catch (stringifyError) {
                recordSpanException(span, stringifyError);
                return {
                  ok: false,
                  id: execution.run.id,
                  error: {
                    type: "INTERNAL_ERROR",
                    code: TaskRunErrorCodes2.TASK_OUTPUT_ERROR,
                    message: stringifyError instanceof Error ? stringifyError.message : typeof stringifyError === "string" ? stringifyError : void 0
                  }
                };
              }
            } catch (runError) {
              try {
                const handleErrorResult = await __privateMethod3(this, _handleError, handleError_fn).call(this, execution, runError, parsedPayload, ctx);
                recordSpanException(span, handleErrorResult.error ?? runError);
                if (handleErrorResult.status !== "retry") {
                  await __privateMethod3(this, _callOnFailureFunctions, callOnFailureFunctions_fn).call(this, parsedPayload, handleErrorResult.error ?? runError, ctx, initOutput);
                }
                return {
                  id: execution.run.id,
                  ok: false,
                  error: sanitizeError(handleErrorResult.error ? parseError(handleErrorResult.error) : parseError(runError)),
                  retry: handleErrorResult.status === "retry" ? handleErrorResult.retry : void 0,
                  skippedRetrying: handleErrorResult.status === "skipped"
                };
              } catch (handleErrorError) {
                recordSpanException(span, handleErrorError);
                return {
                  ok: false,
                  id: execution.run.id,
                  error: {
                    type: "INTERNAL_ERROR",
                    code: TaskRunErrorCodes2.HANDLE_ERROR_ERROR,
                    message: handleErrorError instanceof Error ? handleErrorError.message : typeof handleErrorError === "string" ? handleErrorError : void 0
                  }
                };
              }
            } finally {
              await __privateMethod3(this, _callTaskCleanup, callTaskCleanup_fn).call(this, parsedPayload, ctx, initOutput);
            }
          });
        }, {
          kind: api.SpanKind.CONSUMER,
          attributes: {
            [SemanticInternalAttributes.STYLE_ICON]: "attempt",
            ...accessoryAttributes({
              items: [
                {
                  text: ctx.task.filePath
                },
                {
                  text: `${ctx.task.exportName}.run()`
                }
              ],
              style: "codepath"
            })
          }
        }, this._tracer.extractContext(traceContext));
        return {
          result
        };
      }
    };
    _callRun = /* @__PURE__ */ new WeakSet();
    callRun_fn = /* @__PURE__ */ __name4(async function(payload, ctx, init) {
      const runFn = this.task.fns.run;
      const middlewareFn = this.task.fns.middleware;
      if (!runFn) {
        throw new Error("Task does not have a run function");
      }
      if (!middlewareFn) {
        return runFn(payload, {
          ctx,
          init
        });
      }
      return middlewareFn(payload, {
        ctx,
        next: async () => runFn(payload, {
          ctx,
          init
        })
      });
    }, "#callRun");
    _callInitFunctions = /* @__PURE__ */ new WeakSet();
    callInitFunctions_fn = /* @__PURE__ */ __name4(async function(payload1, ctx1) {
      await __privateMethod3(this, _callConfigInit, callConfigInit_fn).call(this, payload1, ctx1);
      const initFn = this.task.fns.init;
      if (!initFn) {
        return {};
      }
      return this._tracer.startActiveSpan("init", async (span) => {
        return await initFn(payload1, {
          ctx: ctx1
        });
      }, {
        attributes: {
          [SemanticInternalAttributes.STYLE_ICON]: "function"
        }
      });
    }, "#callInitFunctions");
    _callConfigInit = /* @__PURE__ */ new WeakSet();
    callConfigInit_fn = /* @__PURE__ */ __name4(async function(payload2, ctx2) {
      const initFn = this._importedConfig?.init;
      if (!initFn) {
        return {};
      }
      return this._tracer.startActiveSpan("config.init", async (span) => {
        return await initFn(payload2, {
          ctx: ctx2
        });
      }, {
        attributes: {
          [SemanticInternalAttributes.STYLE_ICON]: "function"
        }
      });
    }, "#callConfigInit");
    _callOnSuccessFunctions = /* @__PURE__ */ new WeakSet();
    callOnSuccessFunctions_fn = /* @__PURE__ */ __name4(async function(payload3, output, ctx3, initOutput) {
      await __privateMethod3(this, _callOnSuccessFunction, callOnSuccessFunction_fn).call(this, this.task.fns.onSuccess, "task.onSuccess", payload3, output, ctx3, initOutput);
      await __privateMethod3(this, _callOnSuccessFunction, callOnSuccessFunction_fn).call(this, this._importedConfig?.onSuccess, "config.onSuccess", payload3, output, ctx3, initOutput);
    }, "#callOnSuccessFunctions");
    _callOnSuccessFunction = /* @__PURE__ */ new WeakSet();
    callOnSuccessFunction_fn = /* @__PURE__ */ __name4(async function(onSuccessFn, name, payload4, output1, ctx4, initOutput1) {
      if (!onSuccessFn) {
        return;
      }
      try {
        await this._tracer.startActiveSpan(name, async (span) => {
          return await onSuccessFn(payload4, output1, {
            ctx: ctx4,
            init: initOutput1
          });
        }, {
          attributes: {
            [SemanticInternalAttributes.STYLE_ICON]: "function"
          }
        });
      } catch {
      }
    }, "#callOnSuccessFunction");
    _callOnFailureFunctions = /* @__PURE__ */ new WeakSet();
    callOnFailureFunctions_fn = /* @__PURE__ */ __name4(async function(payload5, error, ctx5, initOutput2) {
      await __privateMethod3(this, _callOnFailureFunction, callOnFailureFunction_fn).call(this, this.task.fns.onFailure, "task.onFailure", payload5, error, ctx5, initOutput2);
      await __privateMethod3(this, _callOnFailureFunction, callOnFailureFunction_fn).call(this, this._importedConfig?.onFailure, "config.onFailure", payload5, error, ctx5, initOutput2);
    }, "#callOnFailureFunctions");
    _callOnFailureFunction = /* @__PURE__ */ new WeakSet();
    callOnFailureFunction_fn = /* @__PURE__ */ __name4(async function(onFailureFn, name1, payload6, error1, ctx6, initOutput3) {
      if (!onFailureFn) {
        return;
      }
      try {
        return await this._tracer.startActiveSpan(name1, async (span) => {
          return await onFailureFn(payload6, error1, {
            ctx: ctx6,
            init: initOutput3
          });
        }, {
          attributes: {
            [SemanticInternalAttributes.STYLE_ICON]: "function"
          }
        });
      } catch (e) {
      }
    }, "#callOnFailureFunction");
    _callOnStartFunctions = /* @__PURE__ */ new WeakSet();
    callOnStartFunctions_fn = /* @__PURE__ */ __name4(async function(payload7, ctx7) {
      await __privateMethod3(this, _callOnStartFunction, callOnStartFunction_fn).call(this, this._importedConfig?.onStart, "config.onStart", payload7, ctx7, {});
      await __privateMethod3(this, _callOnStartFunction, callOnStartFunction_fn).call(this, this.task.fns.onStart, "task.onStart", payload7, ctx7, {});
    }, "#callOnStartFunctions");
    _callOnStartFunction = /* @__PURE__ */ new WeakSet();
    callOnStartFunction_fn = /* @__PURE__ */ __name4(async function(onStartFn, name2, payload8, ctx8, initOutput4) {
      if (!onStartFn) {
        return;
      }
      try {
        await this._tracer.startActiveSpan(name2, async (span) => {
          return await onStartFn(payload8, {
            ctx: ctx8
          });
        }, {
          attributes: {
            [SemanticInternalAttributes.STYLE_ICON]: "function"
          }
        });
      } catch {
      }
    }, "#callOnStartFunction");
    _callTaskCleanup = /* @__PURE__ */ new WeakSet();
    callTaskCleanup_fn = /* @__PURE__ */ __name4(async function(payload9, ctx9, init1) {
      const cleanupFn = this.task.fns.cleanup;
      if (!cleanupFn) {
        return;
      }
      return this._tracer.startActiveSpan("cleanup", async (span) => {
        return await cleanupFn(payload9, {
          ctx: ctx9,
          init: init1
        });
      });
    }, "#callTaskCleanup");
    _handleError = /* @__PURE__ */ new WeakSet();
    handleError_fn = /* @__PURE__ */ __name4(async function(execution, error2, payload10, ctx10) {
      const retriesConfig = this._importedConfig?.retries ?? this._config.retries;
      const retry = this.task.retry ?? retriesConfig?.default;
      if (!retry) {
        return {
          status: "noop"
        };
      }
      if (error2 instanceof Error && error2.name === "AbortTaskRunError") {
        return {
          status: "skipped"
        };
      }
      if (execution.run.maxAttempts) {
        retry.maxAttempts = Math.max(execution.run.maxAttempts, 1);
      }
      let delay = calculateNextRetryDelay(retry, execution.attempt.number);
      if (delay && error2 instanceof Error && error2.name === "TriggerApiError" && error2.status === 429) {
        const rateLimitError = error2;
        delay = rateLimitError.millisecondsUntilReset;
      }
      if (execution.environment.type === "DEVELOPMENT" && typeof retriesConfig?.enabledInDev === "boolean" && !retriesConfig.enabledInDev) {
        return {
          status: "skipped"
        };
      }
      return this._tracer.startActiveSpan("handleError()", async (span) => {
        const handleErrorResult = this.task.fns.handleError ? await this.task.fns.handleError(payload10, error2, {
          ctx: ctx10,
          retry,
          retryDelayInMs: delay,
          retryAt: delay ? new Date(Date.now() + delay) : void 0
        }) : this._importedConfig ? await this._handleErrorFn?.(payload10, error2, {
          ctx: ctx10,
          retry,
          retryDelayInMs: delay,
          retryAt: delay ? new Date(Date.now() + delay) : void 0
        }) : void 0;
        if (!handleErrorResult) {
          return typeof delay === "undefined" ? {
            status: "noop"
          } : {
            status: "retry",
            retry: {
              timestamp: Date.now() + delay,
              delay
            }
          };
        }
        if (handleErrorResult.skipRetrying) {
          return {
            status: "skipped",
            error: handleErrorResult.error
          };
        }
        if (typeof handleErrorResult.retryAt !== "undefined") {
          return {
            status: "retry",
            retry: {
              timestamp: handleErrorResult.retryAt.getTime(),
              delay: handleErrorResult.retryAt.getTime() - Date.now()
            },
            error: handleErrorResult.error
          };
        }
        if (typeof handleErrorResult.retryDelayInMs === "number") {
          return {
            status: "retry",
            retry: {
              timestamp: Date.now() + handleErrorResult.retryDelayInMs,
              delay: handleErrorResult.retryDelayInMs
            },
            error: handleErrorResult.error
          };
        }
        if (handleErrorResult.retry && typeof handleErrorResult.retry === "object") {
          const delay2 = calculateNextRetryDelay(handleErrorResult.retry, execution.attempt.number);
          return typeof delay2 === "undefined" ? {
            status: "noop",
            error: handleErrorResult.error
          } : {
            status: "retry",
            retry: {
              timestamp: Date.now() + delay2,
              delay: delay2
            },
            error: handleErrorResult.error
          };
        }
        return {
          status: "noop",
          error: handleErrorResult.error
        };
      }, {
        attributes: {
          [SemanticInternalAttributes.STYLE_ICON]: "exclamation-circle"
        }
      });
    }, "#handleError");
    __name4(_TaskExecutor, "TaskExecutor");
    var TaskExecutor2 = _TaskExecutor;
    var _originClockTime;
    var originClockTime_get;
    var _originPreciseDate;
    var originPreciseDate_get;
    var _PreciseWallClock = class _PreciseWallClock {
      constructor(options = {}) {
        __privateAdd3(this, _originClockTime);
        __privateAdd3(this, _originPreciseDate);
        this._origin = {
          clockTime: options.origin ?? process.hrtime(),
          preciseDate: options.now ?? new preciseDate.PreciseDate()
        };
      }
      preciseNow() {
        const elapsedHrTime = process.hrtime(__privateGet3(this, _originClockTime, originClockTime_get));
        const elapsedNanoseconds = BigInt(elapsedHrTime[0]) * BigInt(1e9) + BigInt(elapsedHrTime[1]);
        const preciseDate$1 = new preciseDate.PreciseDate(__privateGet3(this, _originPreciseDate, originPreciseDate_get).getFullTime() + elapsedNanoseconds);
        const dateStruct = preciseDate$1.toStruct();
        return [
          dateStruct.seconds,
          dateStruct.nanos
        ];
      }
      reset() {
        this._origin = {
          clockTime: process.hrtime(),
          preciseDate: new preciseDate.PreciseDate()
        };
      }
    };
    _originClockTime = /* @__PURE__ */ new WeakSet();
    originClockTime_get = /* @__PURE__ */ __name4(function() {
      return this._origin.clockTime;
    }, "#originClockTime");
    _originPreciseDate = /* @__PURE__ */ new WeakSet();
    originPreciseDate_get = /* @__PURE__ */ __name4(function() {
      return this._origin.preciseDate;
    }, "#originPreciseDate");
    __name4(_PreciseWallClock, "PreciseWallClock");
    var PreciseWallClock = _PreciseWallClock;
    function iconStringForSeverity(severityNumber) {
      switch (severityNumber) {
        case apiLogs.SeverityNumber.UNSPECIFIED:
          return void 0;
        case apiLogs.SeverityNumber.TRACE:
        case apiLogs.SeverityNumber.TRACE2:
        case apiLogs.SeverityNumber.TRACE3:
        case apiLogs.SeverityNumber.TRACE4:
          return "trace";
        case apiLogs.SeverityNumber.DEBUG:
        case apiLogs.SeverityNumber.DEBUG2:
        case apiLogs.SeverityNumber.DEBUG3:
        case apiLogs.SeverityNumber.DEBUG4:
          return "debug";
        case apiLogs.SeverityNumber.INFO:
        case apiLogs.SeverityNumber.INFO2:
        case apiLogs.SeverityNumber.INFO3:
        case apiLogs.SeverityNumber.INFO4:
          return "info";
        case apiLogs.SeverityNumber.WARN:
        case apiLogs.SeverityNumber.WARN2:
        case apiLogs.SeverityNumber.WARN3:
        case apiLogs.SeverityNumber.WARN4:
          return "warn";
        case apiLogs.SeverityNumber.ERROR:
        case apiLogs.SeverityNumber.ERROR2:
        case apiLogs.SeverityNumber.ERROR3:
        case apiLogs.SeverityNumber.ERROR4:
          return "error";
        case apiLogs.SeverityNumber.FATAL:
        case apiLogs.SeverityNumber.FATAL2:
        case apiLogs.SeverityNumber.FATAL3:
        case apiLogs.SeverityNumber.FATAL4:
          return "fatal";
      }
    }
    __name4(iconStringForSeverity, "iconStringForSeverity");
    var _SimpleClock = class _SimpleClock {
      preciseNow() {
        const now = new preciseDate.PreciseDate();
        const nowStruct = now.toStruct();
        return [
          nowStruct.seconds,
          nowStruct.nanos
        ];
      }
      reset() {
      }
    };
    __name4(_SimpleClock, "SimpleClock");
    var SimpleClock = _SimpleClock;
    var API_NAME3 = "clock";
    var SIMPLE_CLOCK = new SimpleClock();
    var _getClock;
    var getClock_fn;
    var _ClockAPI = class _ClockAPI2 {
      constructor() {
        __privateAdd3(this, _getClock);
      }
      static getInstance() {
        if (!this._instance) {
          this._instance = new _ClockAPI2();
        }
        return this._instance;
      }
      setGlobalClock(clock22) {
        return registerGlobal(API_NAME3, clock22);
      }
      preciseNow() {
        return __privateMethod3(this, _getClock, getClock_fn).call(this).preciseNow();
      }
      reset() {
        __privateMethod3(this, _getClock, getClock_fn).call(this).reset();
      }
    };
    _getClock = /* @__PURE__ */ new WeakSet();
    getClock_fn = /* @__PURE__ */ __name4(function() {
      return getGlobal(API_NAME3) ?? SIMPLE_CLOCK;
    }, "#getClock");
    __name4(_ClockAPI, "ClockAPI");
    var ClockAPI = _ClockAPI;
    var clock2 = ClockAPI.getInstance();
    var logLevels3 = [
      "none",
      "error",
      "warn",
      "info",
      "debug"
    ];
    var _emitLog;
    var emitLog_fn;
    var _getTimestampInHrTime;
    var getTimestampInHrTime_fn;
    var _OtelTaskLogger = class _OtelTaskLogger {
      constructor(_config) {
        __privateAdd3(this, _emitLog);
        __privateAdd3(this, _getTimestampInHrTime);
        this._config = _config;
        this._level = logLevels3.indexOf(_config.level);
      }
      debug(message, properties) {
        if (this._level < 4)
          return;
        __privateMethod3(this, _emitLog, emitLog_fn).call(this, message, __privateMethod3(this, _getTimestampInHrTime, getTimestampInHrTime_fn).call(this), "debug", apiLogs.SeverityNumber.DEBUG, properties);
      }
      log(message, properties) {
        if (this._level < 3)
          return;
        __privateMethod3(this, _emitLog, emitLog_fn).call(this, message, __privateMethod3(this, _getTimestampInHrTime, getTimestampInHrTime_fn).call(this), "log", apiLogs.SeverityNumber.INFO, properties);
      }
      info(message, properties) {
        if (this._level < 3)
          return;
        __privateMethod3(this, _emitLog, emitLog_fn).call(this, message, __privateMethod3(this, _getTimestampInHrTime, getTimestampInHrTime_fn).call(this), "info", apiLogs.SeverityNumber.INFO, properties);
      }
      warn(message, properties) {
        if (this._level < 2)
          return;
        __privateMethod3(this, _emitLog, emitLog_fn).call(this, message, __privateMethod3(this, _getTimestampInHrTime, getTimestampInHrTime_fn).call(this), "warn", apiLogs.SeverityNumber.WARN, properties);
      }
      error(message, properties) {
        if (this._level < 1)
          return;
        __privateMethod3(this, _emitLog, emitLog_fn).call(this, message, __privateMethod3(this, _getTimestampInHrTime, getTimestampInHrTime_fn).call(this), "error", apiLogs.SeverityNumber.ERROR, properties);
      }
      trace(name, fn, options) {
        return this._config.tracer.startActiveSpan(name, fn, options);
      }
    };
    _emitLog = /* @__PURE__ */ new WeakSet();
    emitLog_fn = /* @__PURE__ */ __name4(function(message, timestamp, severityText, severityNumber, properties) {
      let attributes = {
        ...flattenAttributes(safeJsonProcess(properties))
      };
      const icon = iconStringForSeverity(severityNumber);
      if (icon !== void 0) {
        attributes[SemanticInternalAttributes.STYLE_ICON] = icon;
      }
      this._config.logger.emit({
        severityNumber,
        severityText,
        body: message,
        attributes,
        timestamp
      });
    }, "#emitLog");
    _getTimestampInHrTime = /* @__PURE__ */ new WeakSet();
    getTimestampInHrTime_fn = /* @__PURE__ */ __name4(function() {
      return clock2.preciseNow();
    }, "#getTimestampInHrTime");
    __name4(_OtelTaskLogger, "OtelTaskLogger");
    var OtelTaskLogger2 = _OtelTaskLogger;
    function safeJsonProcess(value) {
      try {
        return JSON.parse(JSON.stringify(value, jsonErrorReplacer));
      } catch {
        return value;
      }
    }
    __name4(safeJsonProcess, "safeJsonProcess");
    function jsonErrorReplacer(key, value) {
      if (value instanceof Error) {
        return {
          name: value.name,
          message: value.message,
          stack: value.stack
        };
      }
      return value;
    }
    __name4(jsonErrorReplacer, "jsonErrorReplacer");
    var _handleLog;
    var handleLog_fn;
    var _getTimestampInHrTime2;
    var getTimestampInHrTime_fn2;
    var _getAttributes;
    var getAttributes_fn;
    var _ConsoleInterceptor = class _ConsoleInterceptor {
      constructor(logger2, sendToStdIO) {
        __privateAdd3(this, _handleLog);
        __privateAdd3(this, _getTimestampInHrTime2);
        __privateAdd3(this, _getAttributes);
        this.logger = logger2;
        this.sendToStdIO = sendToStdIO;
      }
      // Intercept the console and send logs to the OpenTelemetry logger
      // during the execution of the callback
      async intercept(console2, callback) {
        const originalConsole = {
          log: console2.log,
          info: console2.info,
          warn: console2.warn,
          error: console2.error,
          debug: console2.debug
        };
        console2.log = this.log.bind(this);
        console2.info = this.info.bind(this);
        console2.warn = this.warn.bind(this);
        console2.error = this.error.bind(this);
        console2.debug = this.debug.bind(this);
        try {
          return await callback();
        } finally {
          console2.log = originalConsole.log;
          console2.info = originalConsole.info;
          console2.warn = originalConsole.warn;
          console2.error = originalConsole.error;
          console2.debug = originalConsole.debug;
        }
      }
      debug(...args) {
        __privateMethod3(this, _handleLog, handleLog_fn).call(this, apiLogs.SeverityNumber.DEBUG, __privateMethod3(this, _getTimestampInHrTime2, getTimestampInHrTime_fn2).call(this), "Debug", ...args);
      }
      log(...args) {
        __privateMethod3(this, _handleLog, handleLog_fn).call(this, apiLogs.SeverityNumber.INFO, __privateMethod3(this, _getTimestampInHrTime2, getTimestampInHrTime_fn2).call(this), "Log", ...args);
      }
      info(...args) {
        __privateMethod3(this, _handleLog, handleLog_fn).call(this, apiLogs.SeverityNumber.INFO, __privateMethod3(this, _getTimestampInHrTime2, getTimestampInHrTime_fn2).call(this), "Info", ...args);
      }
      warn(...args) {
        __privateMethod3(this, _handleLog, handleLog_fn).call(this, apiLogs.SeverityNumber.WARN, __privateMethod3(this, _getTimestampInHrTime2, getTimestampInHrTime_fn2).call(this), "Warn", ...args);
      }
      error(...args) {
        __privateMethod3(this, _handleLog, handleLog_fn).call(this, apiLogs.SeverityNumber.ERROR, __privateMethod3(this, _getTimestampInHrTime2, getTimestampInHrTime_fn2).call(this), "Error", ...args);
      }
    };
    _handleLog = /* @__PURE__ */ new WeakSet();
    handleLog_fn = /* @__PURE__ */ __name4(function(severityNumber, timestamp, severityText, ...args) {
      const body = util__default.default.format(...args);
      if (this.sendToStdIO) {
        if (severityNumber === apiLogs.SeverityNumber.ERROR) {
          process.stderr.write(body);
        } else {
          process.stdout.write(body);
        }
      }
      const parsed = tryParseJSON(body);
      if (parsed.ok) {
        this.logger.emit({
          severityNumber,
          severityText,
          body: getLogMessage(parsed.value, severityText),
          attributes: {
            ...__privateMethod3(this, _getAttributes, getAttributes_fn).call(this, severityNumber),
            ...flattenAttributes(parsed.value)
          },
          timestamp
        });
        return;
      }
      this.logger.emit({
        severityNumber,
        severityText,
        body,
        attributes: __privateMethod3(this, _getAttributes, getAttributes_fn).call(this, severityNumber),
        timestamp
      });
    }, "#handleLog");
    _getTimestampInHrTime2 = /* @__PURE__ */ new WeakSet();
    getTimestampInHrTime_fn2 = /* @__PURE__ */ __name4(function() {
      return clock2.preciseNow();
    }, "#getTimestampInHrTime");
    _getAttributes = /* @__PURE__ */ new WeakSet();
    getAttributes_fn = /* @__PURE__ */ __name4(function(severityNumber1) {
      const icon = iconStringForSeverity(severityNumber1);
      let result = {};
      if (icon !== void 0) {
        result[SemanticInternalAttributes.STYLE_ICON] = icon;
      }
      return result;
    }, "#getAttributes");
    __name4(_ConsoleInterceptor, "ConsoleInterceptor");
    var ConsoleInterceptor2 = _ConsoleInterceptor;
    function getLogMessage(value, fallback) {
      if (typeof value["message"] === "string") {
        return value["message"];
      }
      if (typeof value["msg"] === "string") {
        return value["msg"];
      }
      if (typeof value["body"] === "string") {
        return value["body"];
      }
      if (typeof value["error"] === "string") {
        return value["error"];
      }
      return fallback;
    }
    __name4(getLogMessage, "getLogMessage");
    function tryParseJSON(value) {
      try {
        const parsed = JSON.parse(value);
        if (typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)) {
          return {
            ok: true,
            value: parsed
          };
        }
        return {
          ok: false,
          value
        };
      } catch (e) {
        return {
          ok: false,
          value
        };
      }
    }
    __name4(tryParseJSON, "tryParseJSON");
    var _StandardTaskCatalog = class _StandardTaskCatalog {
      constructor() {
        __publicField3(this, "_taskMetadata", /* @__PURE__ */ new Map());
        __publicField3(this, "_taskFunctions", /* @__PURE__ */ new Map());
        __publicField3(this, "_taskFileMetadata", /* @__PURE__ */ new Map());
      }
      registerTaskMetadata(task) {
        const { fns, ...metadata } = task;
        this._taskMetadata.set(task.id, metadata);
        this._taskFunctions.set(task.id, fns);
      }
      updateTaskMetadata(id, updates) {
        const existingMetadata = this._taskMetadata.get(id);
        if (existingMetadata) {
          this._taskMetadata.set(id, {
            ...existingMetadata,
            ...updates
          });
        }
        if (updates.fns) {
          const existingFunctions = this._taskFunctions.get(id);
          if (existingFunctions) {
            this._taskFunctions.set(id, {
              ...existingFunctions,
              ...updates.fns
            });
          }
        }
      }
      registerTaskFileMetadata(id, metadata) {
        this._taskFileMetadata.set(id, metadata);
      }
      // Return all the tasks, without the functions
      getAllTaskMetadata() {
        const result = [];
        for (const [id, metadata] of this._taskMetadata) {
          const fileMetadata = this._taskFileMetadata.get(id);
          if (!fileMetadata) {
            continue;
          }
          result.push({
            ...metadata,
            ...fileMetadata
          });
        }
        return result;
      }
      getTaskMetadata(id) {
        const metadata = this._taskMetadata.get(id);
        const fileMetadata = this._taskFileMetadata.get(id);
        if (!metadata || !fileMetadata) {
          return void 0;
        }
        return {
          ...metadata,
          ...fileMetadata
        };
      }
      getTask(id) {
        const metadata = this._taskMetadata.get(id);
        const fileMetadata = this._taskFileMetadata.get(id);
        const fns = this._taskFunctions.get(id);
        if (!metadata || !fns || !fileMetadata) {
          return void 0;
        }
        return {
          ...metadata,
          ...fileMetadata,
          fns
        };
      }
      taskExists(id) {
        return this._taskMetadata.has(id);
      }
      disable() {
      }
    };
    __name4(_StandardTaskCatalog, "StandardTaskCatalog");
    var StandardTaskCatalog2 = _StandardTaskCatalog;
    var _NoopUsageManager = class _NoopUsageManager {
      disable() {
      }
      start() {
        return {
          sample: () => ({
            cpuTime: 0,
            wallTime: 0
          })
        };
      }
      stop(measurement) {
        return measurement.sample();
      }
      pauseAsync(cb) {
        return cb();
      }
      sample() {
        return void 0;
      }
    };
    __name4(_NoopUsageManager, "NoopUsageManager");
    var NoopUsageManager = _NoopUsageManager;
    var API_NAME4 = "usage";
    var NOOP_USAGE_MANAGER = new NoopUsageManager();
    var _getUsageManager;
    var getUsageManager_fn;
    var _UsageAPI = class _UsageAPI2 {
      constructor() {
        __privateAdd3(this, _getUsageManager);
      }
      static getInstance() {
        if (!this._instance) {
          this._instance = new _UsageAPI2();
        }
        return this._instance;
      }
      setGlobalUsageManager(manager) {
        return registerGlobal(API_NAME4, manager);
      }
      disable() {
        __privateMethod3(this, _getUsageManager, getUsageManager_fn).call(this).disable();
        unregisterGlobal(API_NAME4);
      }
      start() {
        return __privateMethod3(this, _getUsageManager, getUsageManager_fn).call(this).start();
      }
      stop(measurement) {
        return __privateMethod3(this, _getUsageManager, getUsageManager_fn).call(this).stop(measurement);
      }
      pauseAsync(cb) {
        return __privateMethod3(this, _getUsageManager, getUsageManager_fn).call(this).pauseAsync(cb);
      }
      sample() {
        return __privateMethod3(this, _getUsageManager, getUsageManager_fn).call(this).sample();
      }
    };
    _getUsageManager = /* @__PURE__ */ new WeakSet();
    getUsageManager_fn = /* @__PURE__ */ __name4(function() {
      return getGlobal(API_NAME4) ?? NOOP_USAGE_MANAGER;
    }, "#getUsageManager");
    __name4(_UsageAPI, "UsageAPI");
    var UsageAPI = _UsageAPI;
    var usage2 = UsageAPI.getInstance();
    function calculateDurationInMs(start, end) {
      const [startSeconds, startNanoseconds] = start;
      const [endSeconds, endNanoseconds] = end;
      const seconds = endSeconds - startSeconds;
      const nanoseconds = endNanoseconds - startNanoseconds;
      return Math.floor(seconds * 1e3 + nanoseconds / 1e6);
    }
    __name4(calculateDurationInMs, "calculateDurationInMs");
    var _a22;
    var DevUsageMeasurement = (_a22 = class {
      constructor(id, startedAt = clock2.preciseNow()) {
        this.id = id;
        this.startedAt = startedAt;
        this._pauses = /* @__PURE__ */ new Map();
      }
      stop() {
        this._endedAt = clock2.preciseNow();
      }
      sample() {
        const endedAt = this._endedAt ?? clock2.preciseNow();
        const wallTime = this.startedAt ? calculateDurationInMs(this.startedAt, endedAt) : 0;
        if (wallTime === 0) {
          return {
            cpuTime: 0,
            wallTime: 0
          };
        }
        const totalPauses = Array.from(this._pauses.values()).reduce((total, pause) => {
          return total + calculateDurationInMs(pause.start, pause.end ?? endedAt);
        }, 0);
        const cpuTime = wallTime - totalPauses;
        return {
          wallTime,
          cpuTime
        };
      }
      registerPause(pauseId, start, end) {
        this._pauses.set(pauseId, {
          start,
          end
        });
      }
    }, __name4(_a22, "DevUsageMeasurement"), _a22);
    var _DevUsageManager = class _DevUsageManager {
      constructor() {
        __publicField3(this, "_currentMeasurements", /* @__PURE__ */ new Map());
        __publicField3(this, "_pauses", /* @__PURE__ */ new Map());
      }
      disable() {
      }
      sample() {
        return this._firstMeasurement?.sample();
      }
      start() {
        const id = generateRandomString();
        const measurement = new DevUsageMeasurement(id);
        if (!this._firstMeasurement) {
          this._firstMeasurement = measurement;
        }
        this._currentMeasurements.set(id, measurement);
        return measurement;
      }
      stop(measurement) {
        measurement.stop();
        const sample = measurement.sample();
        this._currentMeasurements.delete(measurement.id);
        return sample;
      }
      async pauseAsync(cb) {
        const pauseId = generateRandomString();
        const pauseStart = clock2.preciseNow();
        try {
          this._pauses.set(pauseId, {
            start: pauseStart
          });
          for (const measurement of this._currentMeasurements.values()) {
            measurement.registerPause(pauseId, pauseStart);
          }
          return await cb();
        } finally {
          const pauseEnd = clock2.preciseNow();
          this._pauses.set(pauseId, {
            start: pauseStart,
            end: pauseEnd
          });
          for (const measurement of this._currentMeasurements.values()) {
            measurement.registerPause(pauseId, pauseStart, pauseEnd);
          }
        }
      }
    };
    __name4(_DevUsageManager, "DevUsageManager");
    var DevUsageManager2 = _DevUsageManager;
    function generateRandomString() {
      let result = "";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (var i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    __name4(generateRandomString, "generateRandomString");
    var _UsageClient = class _UsageClient {
      constructor(url, jwt) {
        this.url = url;
        this.jwt = jwt;
      }
      async sendUsageEvent(event) {
        try {
          const response = await fetch(this.url, {
            method: "POST",
            body: JSON.stringify(event),
            headers: {
              "content-type": "application/json",
              "x-trigger-jwt": this.jwt,
              accept: "application/json",
              authorization: `Bearer ${apiClientManager.accessToken}`
            }
          });
          if (response.ok) {
            const renewedJwt = response.headers.get("x-trigger-jwt");
            if (renewedJwt) {
              this.jwt = renewedJwt;
            }
          }
        } catch (error) {
          console.error(`Failed to send usage event: ${error}`);
        }
      }
    };
    __name4(_UsageClient, "UsageClient");
    var UsageClient = _UsageClient;
    var _startReportingHeartbeat;
    var startReportingHeartbeat_fn;
    var _reportUsage;
    var reportUsage_fn;
    var _ProdUsageManager = class _ProdUsageManager {
      constructor(delegageUsageManager, options) {
        __privateAdd3(this, _startReportingHeartbeat);
        __privateAdd3(this, _reportUsage);
        this.delegageUsageManager = delegageUsageManager;
        this.options = options;
        if (this.options.url && this.options.jwt) {
          this._usageClient = new UsageClient(this.options.url, this.options.jwt);
        }
      }
      get isReportingEnabled() {
        return typeof this._usageClient !== "undefined";
      }
      disable() {
        this.delegageUsageManager.disable();
        this._abortController?.abort();
      }
      sample() {
        return this._measurement?.sample();
      }
      start() {
        if (!this.isReportingEnabled || !this.options.heartbeatIntervalMs) {
          return this.delegageUsageManager.start();
        }
        if (!this._measurement) {
          this._measurement = this.delegageUsageManager.start();
          __privateMethod3(this, _startReportingHeartbeat, startReportingHeartbeat_fn).call(this).catch(console.error);
          return this._measurement;
        }
        return this.delegageUsageManager.start();
      }
      stop(measurement) {
        return this.delegageUsageManager.stop(measurement);
      }
      async pauseAsync(cb) {
        return this.delegageUsageManager.pauseAsync(cb);
      }
      async flush() {
        return await __privateMethod3(this, _reportUsage, reportUsage_fn).call(this);
      }
    };
    _startReportingHeartbeat = /* @__PURE__ */ new WeakSet();
    startReportingHeartbeat_fn = /* @__PURE__ */ __name4(async function() {
      if (!this._measurement || !this.isReportingEnabled || !this.options.heartbeatIntervalMs) {
        return;
      }
      this._abortController = new AbortController();
      for await (const _ of promises.setInterval(this.options.heartbeatIntervalMs)) {
        if (this._abortController.signal.aborted) {
          break;
        }
        await __privateMethod3(this, _reportUsage, reportUsage_fn).call(this);
      }
    }, "#startReportingHeartbeat");
    _reportUsage = /* @__PURE__ */ new WeakSet();
    reportUsage_fn = /* @__PURE__ */ __name4(async function() {
      if (!this._measurement) {
        return;
      }
      if (!this.isReportingEnabled) {
        return;
      }
      const client2 = this._usageClient;
      if (!client2) {
        return;
      }
      const sample = this._measurement.sample();
      const cpuTimeSinceLastSample = this._lastSample ? sample.cpuTime - this._lastSample.cpuTime : sample.cpuTime;
      this._lastSample = sample;
      if (cpuTimeSinceLastSample <= 0) {
        return;
      }
      await client2.sendUsageEvent({
        durationMs: cpuTimeSinceLastSample
      });
    }, "#reportUsage");
    __name4(_ProdUsageManager, "ProdUsageManager");
    var ProdUsageManager = _ProdUsageManager;
    exports2.ConsoleInterceptor = ConsoleInterceptor2;
    exports2.DevUsageManager = DevUsageManager2;
    exports2.DurableClock = PreciseWallClock;
    exports2.OtelTaskLogger = OtelTaskLogger2;
    exports2.ProdUsageManager = ProdUsageManager;
    exports2.StandardTaskCatalog = StandardTaskCatalog2;
    exports2.TaskContextLogProcessor = TaskContextLogProcessor;
    exports2.TaskContextSpanProcessor = TaskContextSpanProcessor;
    exports2.TaskExecutor = TaskExecutor2;
    exports2.TracingSDK = TracingSDK2;
    exports2.getEnvVar = getEnvVar2;
    exports2.logLevels = logLevels3;
    exports2.recordSpanException = recordSpanException;
    exports2.usage = usage2;
  }
});

// node_modules/@trigger.dev/core/dist/v3/dev/index.js
var require_dev = __commonJS({
  "node_modules/@trigger.dev/core/dist/v3/dev/index.js"(exports2) {
    "use strict";
    init_define_PROJECT_CONFIG();
    var promises = require("timers/promises");
    var __defProp5 = Object.defineProperty;
    var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __name4 = (target, value) => __defProp5(target, "name", { value, configurable: true });
    var __publicField3 = (obj, key, value) => {
      __defNormalProp3(obj, typeof key !== "symbol" ? key + "" : key, value);
      return value;
    };
    async function unboundedTimeout(delay = 0, value, options) {
      const maxDelay = 2147483647;
      const fullTimeouts = Math.floor(delay / maxDelay);
      const remainingDelay = delay % maxDelay;
      let lastTimeoutResult = await promises.setTimeout(remainingDelay, value, options);
      for (let i = 0; i < fullTimeouts; i++) {
        lastTimeoutResult = await promises.setTimeout(maxDelay, value, options);
      }
      return lastTimeoutResult;
    }
    __name4(unboundedTimeout, "unboundedTimeout");
    var _DevRuntimeManager = class _DevRuntimeManager {
      constructor() {
        __publicField3(this, "_taskWaits", /* @__PURE__ */ new Map());
        __publicField3(this, "_batchWaits", /* @__PURE__ */ new Map());
        __publicField3(this, "_pendingCompletionNotifications", /* @__PURE__ */ new Map());
      }
      disable() {
      }
      async waitForDuration(ms) {
        await unboundedTimeout(ms);
      }
      async waitUntil(date) {
        return this.waitForDuration(date.getTime() - Date.now());
      }
      async waitForTask(params) {
        const pendingCompletion = this._pendingCompletionNotifications.get(params.id);
        if (pendingCompletion) {
          this._pendingCompletionNotifications.delete(params.id);
          return pendingCompletion;
        }
        const promise = new Promise((resolve) => {
          this._taskWaits.set(params.id, {
            resolve
          });
        });
        return await promise;
      }
      async waitForBatch(params) {
        if (!params.runs.length) {
          return Promise.resolve({
            id: params.id,
            items: []
          });
        }
        const promise = Promise.all(params.runs.map((runId) => {
          return new Promise((resolve, reject) => {
            const pendingCompletion = this._pendingCompletionNotifications.get(runId);
            if (pendingCompletion) {
              this._pendingCompletionNotifications.delete(runId);
              resolve(pendingCompletion);
              return;
            }
            this._taskWaits.set(runId, {
              resolve
            });
          });
        }));
        const results = await promise;
        return {
          id: params.id,
          items: results
        };
      }
      resumeTask(completion, runId) {
        const wait = this._taskWaits.get(runId);
        if (!wait) {
          this._pendingCompletionNotifications.set(runId, completion);
          return;
        }
        wait.resolve(completion);
        this._taskWaits.delete(runId);
      }
    };
    __name4(_DevRuntimeManager, "DevRuntimeManager");
    var DevRuntimeManager2 = _DevRuntimeManager;
    exports2.DevRuntimeManager = DevRuntimeManager2;
  }
});

// node_modules/@trigger.dev/core/dist/v3/zodMessageHandler.js
var require_zodMessageHandler = __commonJS({
  "node_modules/@trigger.dev/core/dist/v3/zodMessageHandler.js"(exports2) {
    "use strict";
    init_define_PROJECT_CONFIG();
    var zod = require("zod");
    var __defProp5 = Object.defineProperty;
    var __name4 = (target, value) => __defProp5(target, "name", { value, configurable: true });
    var __accessCheck3 = (obj, member, msg) => {
      if (!member.has(obj))
        throw TypeError("Cannot " + msg);
    };
    var __privateGet3 = (obj, member, getter) => {
      __accessCheck3(obj, member, "read from private field");
      return getter ? getter.call(obj) : member.get(obj);
    };
    var __privateAdd3 = (obj, member, value) => {
      if (member.has(obj))
        throw TypeError("Cannot add the same private member more than once");
      member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    };
    var __privateSet3 = (obj, member, value, setter) => {
      __accessCheck3(obj, member, "write to private field");
      setter ? setter.call(obj, value) : member.set(obj, value);
      return value;
    };
    var _ZodSchemaParsedError = class _ZodSchemaParsedError extends Error {
      constructor(error, payload) {
        super(error.message);
        this.error = error;
        this.payload = payload;
      }
    };
    __name4(_ZodSchemaParsedError, "ZodSchemaParsedError");
    var ZodSchemaParsedError2 = _ZodSchemaParsedError;
    var ZodMessageSchema = zod.z.object({
      version: zod.z.literal("v1").default("v1"),
      type: zod.z.string(),
      payload: zod.z.unknown()
    });
    var _schema;
    var _handlers;
    var _logger2;
    var _ZodMessageHandler = class _ZodMessageHandler {
      constructor(options) {
        __privateAdd3(this, _schema, void 0);
        __privateAdd3(this, _handlers, void 0);
        __privateAdd3(this, _logger2, void 0);
        __privateSet3(this, _schema, options.schema);
        __privateSet3(this, _handlers, options.messages);
        __privateSet3(this, _logger2, options.logger ?? console);
      }
      async handleMessage(message) {
        const parsedMessage = this.parseMessage(message);
        if (!parsedMessage.success) {
          __privateGet3(this, _logger2).error(parsedMessage.error, {
            message
          });
          return {
            success: false,
            error: parsedMessage.error
          };
        }
        if (!__privateGet3(this, _handlers)) {
          __privateGet3(this, _logger2).error("No handlers provided", {
            message
          });
          return {
            success: false,
            error: "No handlers provided"
          };
        }
        const handler2 = __privateGet3(this, _handlers)[parsedMessage.data.type];
        if (!handler2) {
          const error = `No handler for message type: ${String(parsedMessage.data.type)}`;
          __privateGet3(this, _logger2).error(error, {
            message
          });
          return {
            success: false,
            error
          };
        }
        const ack = await handler2(parsedMessage.data.payload);
        return {
          success: true,
          data: ack
        };
      }
      parseMessage(message) {
        const parsedMessage = ZodMessageSchema.safeParse(message);
        if (!parsedMessage.success) {
          return {
            success: false,
            error: `Failed to parse message: ${JSON.stringify(parsedMessage.error)}`
          };
        }
        const schema = __privateGet3(this, _schema)[parsedMessage.data.type];
        if (!schema) {
          return {
            success: false,
            error: `Unknown message type: ${parsedMessage.data.type}`
          };
        }
        const parsedPayload = schema.safeParse(parsedMessage.data.payload);
        if (!parsedPayload.success) {
          return {
            success: false,
            error: `Failed to parse message payload: ${JSON.stringify(parsedPayload.error)}`
          };
        }
        return {
          success: true,
          data: {
            type: parsedMessage.data.type,
            payload: parsedPayload.data
          }
        };
      }
      registerHandlers(emitter, logger2) {
        const log = logger2 ?? console;
        if (!__privateGet3(this, _handlers)) {
          log.info("No handlers provided");
          return;
        }
        for (const eventName of Object.keys(__privateGet3(this, _schema))) {
          emitter.on(eventName, async (message, callback) => {
            log.info(`handling ${eventName}`, {
              payload: message,
              hasCallback: !!callback
            });
            let ack;
            if ("payload" in message) {
              ack = await this.handleMessage({
                type: eventName,
                ...message
              });
            } else {
              const { version: version3, ...payload } = message;
              ack = await this.handleMessage({
                type: eventName,
                version: version3,
                payload
              });
            }
            if (callback && typeof callback === "function") {
              if (!ack.success) {
                log.error("Failed to handle message, skipping callback", {
                  message,
                  error: ack.error
                });
                return;
              }
              callback(ack.data);
            }
          });
        }
      }
    };
    _schema = /* @__PURE__ */ new WeakMap();
    _handlers = /* @__PURE__ */ new WeakMap();
    _logger2 = /* @__PURE__ */ new WeakMap();
    __name4(_ZodMessageHandler, "ZodMessageHandler");
    var ZodMessageHandler2 = _ZodMessageHandler;
    var _schema2;
    var _sender;
    var _ZodMessageSender = class _ZodMessageSender {
      constructor(options) {
        __privateAdd3(this, _schema2, void 0);
        __privateAdd3(this, _sender, void 0);
        __privateSet3(this, _schema2, options.schema);
        __privateSet3(this, _sender, options.sender);
      }
      async send(type, payload) {
        const schema = __privateGet3(this, _schema2)[type];
        if (!schema) {
          throw new Error(`Unknown message type: ${type}`);
        }
        const parsedPayload = schema.safeParse(payload);
        if (!parsedPayload.success) {
          throw new ZodSchemaParsedError2(parsedPayload.error, payload);
        }
        try {
          await __privateGet3(this, _sender).call(this, {
            type,
            payload,
            version: "v1"
          });
        } catch (error) {
          console.error("[ZodMessageSender] Failed to send message", error);
        }
      }
      async forwardMessage(message) {
        const parsedMessage = ZodMessageSchema.safeParse(message);
        if (!parsedMessage.success) {
          throw new Error(`Failed to parse message: ${JSON.stringify(parsedMessage.error)}`);
        }
        const schema = __privateGet3(this, _schema2)[parsedMessage.data.type];
        if (!schema) {
          throw new Error(`Unknown message type: ${parsedMessage.data.type}`);
        }
        const parsedPayload = schema.safeParse(parsedMessage.data.payload);
        if (!parsedPayload.success) {
          throw new Error(`Failed to parse message payload: ${JSON.stringify(parsedPayload.error)}`);
        }
        try {
          await __privateGet3(this, _sender).call(this, {
            type: parsedMessage.data.type,
            payload: parsedPayload.data,
            version: "v1"
          });
        } catch (error) {
          console.error("[ZodMessageSender] Failed to forward message", error);
        }
      }
    };
    _schema2 = /* @__PURE__ */ new WeakMap();
    _sender = /* @__PURE__ */ new WeakMap();
    __name4(_ZodMessageSender, "ZodMessageSender");
    var ZodMessageSender2 = _ZodMessageSender;
    exports2.ZodMessageHandler = ZodMessageHandler2;
    exports2.ZodMessageSchema = ZodMessageSchema;
    exports2.ZodMessageSender = ZodMessageSender2;
    exports2.ZodSchemaParsedError = ZodSchemaParsedError2;
  }
});

// __entryPoint.ts
init_define_PROJECT_CONFIG();
var import_v32 = __toESM(require_v3());
var import_workers2 = __toESM(require_workers());
var import_v33 = __toESM(require_v3());
var import_dev = __toESM(require_dev());
var import_zodMessageHandler2 = __toESM(require_zodMessageHandler());

// ../../../.npm/_npx/615bebf0b780b73f/node_modules/trigger.dev/dist/workers/dev/worker-setup.js
init_define_PROJECT_CONFIG();
var import_v3 = __toESM(require_v3(), 1);
var import_workers = __toESM(require_workers(), 1);
var import_zodMessageHandler = __toESM(require_zodMessageHandler(), 1);
var import_register = require("source-map-support/register.js");

// trigger.config.ts
init_define_PROJECT_CONFIG();
var config = {
  project: "proj_nswxjnjiwnxxnvstnrjf",
  logLevel: "log",
  retries: {
    enabledInDev: true,
    default: {
      maxAttempts: 3,
      minTimeoutInMs: 1e3,
      maxTimeoutInMs: 1e4,
      factor: 2,
      randomize: true
    }
  }
};

// ../../../.npm/_npx/615bebf0b780b73f/node_modules/trigger.dev/dist/workers/dev/worker-setup.js
var version = "3.0.0-beta.56";
var setupImportedConfig = config;
var tracingSDK = new import_workers.TracingSDK({
  url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT ?? "http://0.0.0.0:4318",
  instrumentations: setupImportedConfig?.instrumentations ?? [],
  diagLogLevel: process.env.OTEL_LOG_LEVEL ?? "none",
  forceFlushTimeoutMillis: 5e3
});
var otelTracer = tracingSDK.getTracer("trigger-dev-worker", version);
var otelLogger = tracingSDK.getLogger("trigger-dev-worker", version);
var sender = new import_zodMessageHandler.ZodMessageSender({
  schema: import_v3.childToWorkerMessages,
  sender: async (message) => {
    process.send?.(message);
  }
});
import_v3.taskCatalog.setGlobalTaskCatalog(new import_workers.StandardTaskCatalog());

// src/trigger/todoist.ts
var todoist_exports = {};
init_define_PROJECT_CONFIG();

// node_modules/@trigger.dev/sdk/dist/index.mjs
init_define_PROJECT_CONFIG();
var import_node_async_hooks = require("async_hooks");

// node_modules/@trigger.dev/core/dist/index.mjs
init_define_PROJECT_CONFIG();
var import_ulidx = require("ulidx");
var import_zod = require("zod");
var __defProp2 = Object.defineProperty;
var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
function addMissingVersionField(val) {
  if (val !== null && typeof val === "object" && !("version" in val)) {
    return {
      ...val,
      version: "1"
    };
  }
  return val;
}
__name(addMissingVersionField, "addMissingVersionField");
var ErrorWithStackSchema = import_zod.z.object({
  message: import_zod.z.string(),
  name: import_zod.z.string().optional(),
  stack: import_zod.z.string().optional()
});
var SchemaErrorSchema = import_zod.z.object({
  path: import_zod.z.array(import_zod.z.string()),
  message: import_zod.z.string()
});
var stringPatternMatchers = [
  import_zod.z.object({
    $endsWith: import_zod.z.string()
  }),
  import_zod.z.object({
    $startsWith: import_zod.z.string()
  }),
  import_zod.z.object({
    $ignoreCaseEquals: import_zod.z.string()
  })
];
var EventMatcherSchema = import_zod.z.union([
  /** Match against a string */
  import_zod.z.array(import_zod.z.string()),
  /** Match against a number */
  import_zod.z.array(import_zod.z.number()),
  /** Match against a boolean */
  import_zod.z.array(import_zod.z.boolean()),
  import_zod.z.array(import_zod.z.union([
    ...stringPatternMatchers,
    import_zod.z.object({
      $exists: import_zod.z.boolean()
    }),
    import_zod.z.object({
      $isNull: import_zod.z.boolean()
    }),
    import_zod.z.object({
      $anythingBut: import_zod.z.union([
        import_zod.z.string(),
        import_zod.z.number(),
        import_zod.z.boolean()
      ])
    }),
    import_zod.z.object({
      $anythingBut: import_zod.z.union([
        import_zod.z.array(import_zod.z.string()),
        import_zod.z.array(import_zod.z.number()),
        import_zod.z.array(import_zod.z.boolean())
      ])
    }),
    import_zod.z.object({
      $gt: import_zod.z.number()
    }),
    import_zod.z.object({
      $lt: import_zod.z.number()
    }),
    import_zod.z.object({
      $gte: import_zod.z.number()
    }),
    import_zod.z.object({
      $lte: import_zod.z.number()
    }),
    import_zod.z.object({
      $between: import_zod.z.tuple([
        import_zod.z.number(),
        import_zod.z.number()
      ])
    }),
    import_zod.z.object({
      $includes: import_zod.z.union([
        import_zod.z.string(),
        import_zod.z.number(),
        import_zod.z.boolean()
      ])
    }),
    import_zod.z.object({
      $not: import_zod.z.union([
        import_zod.z.string(),
        import_zod.z.number(),
        import_zod.z.boolean()
      ])
    })
  ]))
]);
var EventFilterSchema = import_zod.z.lazy(() => import_zod.z.record(import_zod.z.union([
  EventMatcherSchema,
  EventFilterSchema
])));
var EventRuleSchema = import_zod.z.object({
  event: import_zod.z.string().or(import_zod.z.array(import_zod.z.string())),
  source: import_zod.z.string(),
  payload: EventFilterSchema.optional(),
  context: EventFilterSchema.optional()
});
var ConnectionAuthSchema = import_zod.z.object({
  type: import_zod.z.enum([
    "oauth2",
    "apiKey"
  ]),
  accessToken: import_zod.z.string(),
  scopes: import_zod.z.array(import_zod.z.string()).optional(),
  additionalFields: import_zod.z.record(import_zod.z.string()).optional()
});
var IntegrationMetadataSchema = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.string(),
  instructions: import_zod.z.string().optional()
});
var IntegrationConfigSchema = import_zod.z.object({
  id: import_zod.z.string(),
  metadata: IntegrationMetadataSchema,
  authSource: import_zod.z.enum([
    "HOSTED",
    "LOCAL",
    "RESOLVER"
  ])
});
var LiteralSchema = import_zod.z.union([
  import_zod.z.string(),
  import_zod.z.number(),
  import_zod.z.boolean(),
  import_zod.z.null()
]);
var DeserializedJsonSchema = import_zod.z.lazy(() => import_zod.z.union([
  LiteralSchema,
  import_zod.z.array(DeserializedJsonSchema),
  import_zod.z.record(DeserializedJsonSchema)
]));
var SerializableSchema = import_zod.z.union([
  import_zod.z.string(),
  import_zod.z.number(),
  import_zod.z.boolean(),
  import_zod.z.null(),
  import_zod.z.date(),
  import_zod.z.undefined(),
  import_zod.z.symbol()
]);
var SerializableJsonSchema = import_zod.z.lazy(() => import_zod.z.union([
  SerializableSchema,
  import_zod.z.array(SerializableJsonSchema),
  import_zod.z.record(SerializableJsonSchema)
]));
var DisplayPropertySchema = import_zod.z.object({
  /** The label for the property */
  label: import_zod.z.string(),
  /** The value of the property */
  text: import_zod.z.string(),
  /** The URL to link to when the property is clicked */
  url: import_zod.z.string().optional(),
  /** The URL to a list of images to display next to the property */
  imageUrl: import_zod.z.array(import_zod.z.string()).optional()
});
var DisplayPropertiesSchema = import_zod.z.array(DisplayPropertySchema);
var StyleSchema = import_zod.z.object({
  /** The style, `normal` or `minimal` */
  style: import_zod.z.enum([
    "normal",
    "minimal"
  ]),
  /** A variant of the style. */
  variant: import_zod.z.string().optional()
});
var ScheduledPayloadSchema = import_zod.z.object({
  ts: import_zod.z.coerce.date(),
  lastTimestamp: import_zod.z.coerce.date().optional()
});
var IntervalOptionsSchema = import_zod.z.object({
  /** The number of seconds for the interval. Min = 20, Max = 2_592_000 (30 days) */
  seconds: import_zod.z.number().int().positive().min(20).max(2592e3)
});
var CronOptionsSchema = import_zod.z.object({
  /** A CRON expression that defines the schedule. A useful tool when writing CRON
  expressions is [crontab guru](https://crontab.guru). Note that the timezone
  used is UTC. */
  cron: import_zod.z.string()
});
var CronMetadataSchema = import_zod.z.object({
  type: import_zod.z.literal("cron"),
  options: CronOptionsSchema,
  /** An optional Account ID to associate with runs triggered by this interval */
  accountId: import_zod.z.string().optional(),
  metadata: import_zod.z.any()
});
var IntervalMetadataSchema = import_zod.z.object({
  /** An interval reoccurs at the specified number of seconds  */
  type: import_zod.z.literal("interval"),
  /** An object containing options about the interval. */
  options: IntervalOptionsSchema,
  /** An optional Account ID to associate with runs triggered by this interval */
  accountId: import_zod.z.string().optional(),
  /** Any additional metadata about the schedule. */
  metadata: import_zod.z.any()
});
var ScheduleMetadataSchema = import_zod.z.discriminatedUnion("type", [
  IntervalMetadataSchema,
  CronMetadataSchema
]);
var RegisterDynamicSchedulePayloadSchema = import_zod.z.object({
  id: import_zod.z.string(),
  jobs: import_zod.z.array(import_zod.z.object({
    id: import_zod.z.string(),
    version: import_zod.z.string()
  }))
});
var TaskStatusSchema = import_zod.z.enum([
  "PENDING",
  "WAITING",
  "RUNNING",
  "COMPLETED",
  "ERRORED",
  "CANCELED"
]);
var TaskSchema = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.string(),
  icon: import_zod.z.string().optional().nullable(),
  noop: import_zod.z.boolean(),
  startedAt: import_zod.z.coerce.date().optional().nullable(),
  completedAt: import_zod.z.coerce.date().optional().nullable(),
  delayUntil: import_zod.z.coerce.date().optional().nullable(),
  status: TaskStatusSchema,
  description: import_zod.z.string().optional().nullable(),
  properties: import_zod.z.array(DisplayPropertySchema).optional().nullable(),
  outputProperties: import_zod.z.array(DisplayPropertySchema).optional().nullable(),
  params: DeserializedJsonSchema.optional().nullable(),
  output: DeserializedJsonSchema.optional().nullable(),
  context: DeserializedJsonSchema.optional().nullable(),
  error: import_zod.z.string().optional().nullable(),
  parentId: import_zod.z.string().optional().nullable(),
  style: StyleSchema.optional().nullable(),
  operation: import_zod.z.string().optional().nullable(),
  callbackUrl: import_zod.z.string().optional().nullable(),
  childExecutionMode: import_zod.z.enum([
    "SEQUENTIAL",
    "PARALLEL"
  ]).optional().nullable()
});
var ServerTaskSchema = TaskSchema.extend({
  idempotencyKey: import_zod.z.string(),
  attempts: import_zod.z.number(),
  forceYield: import_zod.z.boolean().optional().nullable()
});
var CachedTaskSchema = import_zod.z.object({
  id: import_zod.z.string(),
  idempotencyKey: import_zod.z.string(),
  status: TaskStatusSchema,
  noop: import_zod.z.boolean().default(false),
  output: DeserializedJsonSchema.optional().nullable(),
  parentId: import_zod.z.string().optional().nullable()
});
var EventExampleSchema = import_zod.z.object({
  id: import_zod.z.string(),
  icon: import_zod.z.string().optional(),
  name: import_zod.z.string(),
  payload: import_zod.z.any()
});
var EventSpecificationSchema = import_zod.z.object({
  name: import_zod.z.string().or(import_zod.z.array(import_zod.z.string())),
  title: import_zod.z.string(),
  source: import_zod.z.string(),
  icon: import_zod.z.string(),
  filter: EventFilterSchema.optional(),
  properties: import_zod.z.array(DisplayPropertySchema).optional(),
  schema: import_zod.z.any().optional(),
  examples: import_zod.z.array(EventExampleSchema).optional()
});
var DynamicTriggerMetadataSchema = import_zod.z.object({
  type: import_zod.z.literal("dynamic"),
  id: import_zod.z.string()
});
var TriggerHelpSchema = import_zod.z.object({
  noRuns: import_zod.z.object({
    text: import_zod.z.string(),
    link: import_zod.z.string().optional()
  }).optional()
});
var StaticTriggerMetadataSchema = import_zod.z.object({
  type: import_zod.z.literal("static"),
  title: import_zod.z.union([
    import_zod.z.string(),
    import_zod.z.array(import_zod.z.string())
  ]),
  properties: import_zod.z.array(DisplayPropertySchema).optional(),
  rule: EventRuleSchema,
  link: import_zod.z.string().optional(),
  help: TriggerHelpSchema.optional()
});
var InvokeTriggerMetadataSchema = import_zod.z.object({
  type: import_zod.z.literal("invoke")
});
var ScheduledTriggerMetadataSchema = import_zod.z.object({
  type: import_zod.z.literal("scheduled"),
  schedule: ScheduleMetadataSchema
});
var TriggerMetadataSchema = import_zod.z.discriminatedUnion("type", [
  DynamicTriggerMetadataSchema,
  StaticTriggerMetadataSchema,
  ScheduledTriggerMetadataSchema,
  InvokeTriggerMetadataSchema
]);
var StatusUpdateStateSchema = import_zod.z.union([
  import_zod.z.literal("loading"),
  import_zod.z.literal("success"),
  import_zod.z.literal("failure")
]);
var StatusUpdateDataSchema = import_zod.z.record(SerializableJsonSchema);
var StatusUpdateSchema = import_zod.z.object({
  label: import_zod.z.string().optional(),
  state: StatusUpdateStateSchema.optional(),
  data: StatusUpdateDataSchema.optional()
});
var InitalStatusUpdateSchema = StatusUpdateSchema.required({
  label: true
});
var StatusHistorySchema = import_zod.z.array(StatusUpdateSchema);
var JobRunStatusRecordSchema = InitalStatusUpdateSchema.extend({
  key: import_zod.z.string(),
  history: StatusHistorySchema
});
var RunStatusSchema = import_zod.z.union([
  import_zod.z.literal("PENDING"),
  import_zod.z.literal("QUEUED"),
  import_zod.z.literal("WAITING_ON_CONNECTIONS"),
  import_zod.z.literal("PREPROCESSING"),
  import_zod.z.literal("STARTED"),
  import_zod.z.literal("SUCCESS"),
  import_zod.z.literal("FAILURE"),
  import_zod.z.literal("TIMED_OUT"),
  import_zod.z.literal("ABORTED"),
  import_zod.z.literal("CANCELED"),
  import_zod.z.literal("UNRESOLVED_AUTH"),
  import_zod.z.literal("INVALID_PAYLOAD"),
  import_zod.z.literal("EXECUTING"),
  import_zod.z.literal("WAITING_TO_CONTINUE"),
  import_zod.z.literal("WAITING_TO_EXECUTE")
]);
var RunTaskSchema = import_zod.z.object({
  /** The Task id */
  id: import_zod.z.string(),
  /** The key that you defined when creating the Task, the first param in any task. */
  displayKey: import_zod.z.string().nullable(),
  /** The Task status */
  status: TaskStatusSchema,
  /** The name of the Task */
  name: import_zod.z.string(),
  /** The icon of the Task, a string.
  * For integrations, this will be a lowercase name of the company.
  * Can be used with the [@trigger.dev/companyicons](https://www.npmjs.com/package/@trigger.dev/companyicons) package to display an svg. */
  icon: import_zod.z.string().nullable(),
  /** When the task started */
  startedAt: import_zod.z.coerce.date().nullable(),
  /** When the task completed */
  completedAt: import_zod.z.coerce.date().nullable()
});
var RunTaskWithSubtasksSchema = RunTaskSchema.extend({
  subtasks: import_zod.z.lazy(() => RunTaskWithSubtasksSchema.array()).optional()
});
var GetRunOptionsSchema = import_zod.z.object({
  /** Return subtasks, which appear in a `subtasks` array on a task. @default false */
  subtasks: import_zod.z.boolean().optional(),
  /** You can use this to get more tasks, if there are more than are returned in a single batch @default undefined */
  cursor: import_zod.z.string().optional(),
  /** How many tasks you want to return in one go, max 50. @default 20 */
  take: import_zod.z.number().optional()
});
GetRunOptionsSchema.extend({
  /** If `true`, it returns the `params` and `output` of all tasks. @default false */
  taskdetails: import_zod.z.boolean().optional()
});
var RunSchema = import_zod.z.object({
  /** The Run id */
  id: import_zod.z.string(),
  /** The Run status */
  status: RunStatusSchema,
  /** When the run started */
  startedAt: import_zod.z.coerce.date().nullable(),
  /** When the run was last updated */
  updatedAt: import_zod.z.coerce.date().nullable(),
  /** When the run was completed */
  completedAt: import_zod.z.coerce.date().nullable()
});
var GetRunSchema = RunSchema.extend({
  /** The output of the run */
  output: import_zod.z.any().optional(),
  /** The tasks from the run */
  tasks: import_zod.z.array(RunTaskWithSubtasksSchema),
  /** Any status updates that were published from the run */
  statuses: import_zod.z.array(JobRunStatusRecordSchema).default([]),
  /** If there are more tasks, you can use this to get them */
  nextCursor: import_zod.z.string().optional()
});
import_zod.z.object({
  /** You can use this to get more tasks, if there are more than are returned in a single batch @default undefined */
  cursor: import_zod.z.string().optional(),
  /** How many runs you want to return in one go, max 50. @default 20 */
  take: import_zod.z.number().optional()
});
var GetRunsSchema = import_zod.z.object({
  /** The runs from the query */
  runs: RunSchema.array(),
  /** If there are more runs, you can use this to get them */
  nextCursor: import_zod.z.string().optional()
});
var StringMatchSchema = import_zod.z.union([
  /** Match against a string */
  import_zod.z.array(import_zod.z.string()),
  import_zod.z.array(import_zod.z.union(stringPatternMatchers))
]);
var HTTPMethodUnionSchema = import_zod.z.union([
  import_zod.z.literal("GET"),
  import_zod.z.literal("POST"),
  import_zod.z.literal("PUT"),
  import_zod.z.literal("PATCH"),
  import_zod.z.literal("DELETE"),
  import_zod.z.literal("HEAD"),
  import_zod.z.literal("OPTIONS")
]);
var RequestFilterSchema = import_zod.z.object({
  /** An array of HTTP methods to match.
  * For example, `["GET", "POST"]` will match both `GET` and `POST` Requests. */
  method: import_zod.z.array(HTTPMethodUnionSchema).optional(),
  /** An object of header key/values to match. 
     * This uses the [EventFilter matching syntax](https://trigger.dev/docs/documentation/guides/event-filter).
  
      @example
    ```ts
    filter: {
      header: {
        "content-type": ["application/json"],
      },
    },
    ``` */
  headers: import_zod.z.record(StringMatchSchema).optional(),
  /** An object of query parameters to match. 
     * This uses the [EventFilter matching syntax](https://trigger.dev/docs/documentation/guides/event-filter).
  
    @example
    ```ts
    filter: {
      query: {
        "hub.mode": [{ $startsWith: "sub" }],
      },
    },
    ``` */
  query: import_zod.z.record(StringMatchSchema).optional(),
  /** An object of key/values to match.
  * This uses the [EventFilter matching syntax](https://trigger.dev/docs/documentation/guides/event-filter).
  */
  body: EventFilterSchema.optional()
});
var ResponseFilterSchema = RequestFilterSchema.omit({
  method: true,
  query: true
}).extend({
  status: import_zod.z.array(import_zod.z.number()).optional()
});
var UpdateTriggerSourceBodyV1Schema = import_zod.z.object({
  registeredEvents: import_zod.z.array(import_zod.z.string()),
  secret: import_zod.z.string().optional(),
  data: SerializableJsonSchema.optional()
});
var UpdateTriggerSourceBodyV2Schema = import_zod.z.object({
  secret: import_zod.z.string().optional(),
  data: SerializableJsonSchema.optional(),
  options: import_zod.z.object({
    event: import_zod.z.array(import_zod.z.string())
  }).and(import_zod.z.record(import_zod.z.string(), import_zod.z.array(import_zod.z.string())).optional())
});
var UpdateWebhookBodySchema = import_zod.z.discriminatedUnion("active", [
  import_zod.z.object({
    active: import_zod.z.literal(false)
  }),
  import_zod.z.object({
    active: import_zod.z.literal(true),
    config: import_zod.z.record(import_zod.z.string().array())
  })
]);
var RegisterHTTPTriggerSourceBodySchema = import_zod.z.object({
  type: import_zod.z.literal("HTTP"),
  url: import_zod.z.string().url()
});
var RegisterSMTPTriggerSourceBodySchema = import_zod.z.object({
  type: import_zod.z.literal("SMTP")
});
var RegisterSQSTriggerSourceBodySchema = import_zod.z.object({
  type: import_zod.z.literal("SQS")
});
var RegisterSourceChannelBodySchema = import_zod.z.discriminatedUnion("type", [
  RegisterHTTPTriggerSourceBodySchema,
  RegisterSMTPTriggerSourceBodySchema,
  RegisterSQSTriggerSourceBodySchema
]);
var REGISTER_WEBHOOK = "dev.trigger.webhook.register";
var RegisterWebhookSourceSchema = import_zod.z.object({
  key: import_zod.z.string(),
  params: import_zod.z.any(),
  config: import_zod.z.any(),
  active: import_zod.z.boolean(),
  secret: import_zod.z.string(),
  url: import_zod.z.string(),
  data: DeserializedJsonSchema.optional(),
  clientId: import_zod.z.string().optional()
});
var RegisterWebhookPayloadSchema = import_zod.z.object({
  active: import_zod.z.boolean(),
  params: import_zod.z.any().optional(),
  config: import_zod.z.object({
    current: import_zod.z.record(import_zod.z.string().array()),
    desired: import_zod.z.record(import_zod.z.string().array())
  }),
  // from HTTP Endpoint
  url: import_zod.z.string(),
  secret: import_zod.z.string()
});
var REGISTER_SOURCE_EVENT_V2 = "dev.trigger.source.register.v2";
var RegisterTriggerSourceSchema = import_zod.z.object({
  key: import_zod.z.string(),
  params: import_zod.z.any(),
  active: import_zod.z.boolean(),
  secret: import_zod.z.string(),
  data: DeserializedJsonSchema.optional(),
  channel: RegisterSourceChannelBodySchema,
  clientId: import_zod.z.string().optional()
});
import_zod.z.object({
  name: import_zod.z.string(),
  value: import_zod.z.string()
});
var RegisterSourceEventSchemaV1 = import_zod.z.object({
  /** The id of the source */
  id: import_zod.z.string(),
  source: RegisterTriggerSourceSchema,
  events: import_zod.z.array(import_zod.z.string()),
  missingEvents: import_zod.z.array(import_zod.z.string()),
  orphanedEvents: import_zod.z.array(import_zod.z.string()),
  dynamicTriggerId: import_zod.z.string().optional()
});
var RegisteredOptionsDiffSchema = import_zod.z.object({
  desired: import_zod.z.array(import_zod.z.string()),
  missing: import_zod.z.array(import_zod.z.string()),
  orphaned: import_zod.z.array(import_zod.z.string())
});
var RegisterSourceEventOptionsSchema = import_zod.z.object({
  event: RegisteredOptionsDiffSchema
}).and(import_zod.z.record(import_zod.z.string(), RegisteredOptionsDiffSchema));
var RegisterSourceEventSchemaV2 = import_zod.z.object({
  /** The id of the source */
  id: import_zod.z.string(),
  source: RegisterTriggerSourceSchema,
  options: RegisterSourceEventOptionsSchema,
  dynamicTriggerId: import_zod.z.string().optional()
});
var TriggerSourceSchema = import_zod.z.object({
  id: import_zod.z.string(),
  key: import_zod.z.string()
});
var HttpSourceResponseMetadataSchema = DeserializedJsonSchema;
var HandleTriggerSourceSchema = import_zod.z.object({
  key: import_zod.z.string(),
  secret: import_zod.z.string(),
  data: import_zod.z.any(),
  params: import_zod.z.any(),
  auth: ConnectionAuthSchema.optional(),
  metadata: HttpSourceResponseMetadataSchema.optional()
});
var HttpSourceRequestHeadersSchema = import_zod.z.object({
  "x-ts-key": import_zod.z.string(),
  "x-ts-dynamic-id": import_zod.z.string().optional(),
  "x-ts-secret": import_zod.z.string(),
  "x-ts-data": import_zod.z.string().transform((s) => JSON.parse(s)),
  "x-ts-params": import_zod.z.string().transform((s) => JSON.parse(s)),
  "x-ts-http-url": import_zod.z.string(),
  "x-ts-http-method": import_zod.z.string(),
  "x-ts-http-headers": import_zod.z.string().transform((s) => import_zod.z.record(import_zod.z.string()).parse(JSON.parse(s))),
  "x-ts-auth": import_zod.z.string().optional().transform((s) => {
    if (s === void 0)
      return;
    const json = JSON.parse(s);
    return ConnectionAuthSchema.parse(json);
  }),
  "x-ts-metadata": import_zod.z.string().optional().transform((s) => {
    if (s === void 0)
      return;
    const json = JSON.parse(s);
    return DeserializedJsonSchema.parse(json);
  })
});
var HttpEndpointRequestHeadersSchema = import_zod.z.object({
  "x-ts-key": import_zod.z.string(),
  "x-ts-http-url": import_zod.z.string(),
  "x-ts-http-method": import_zod.z.string(),
  "x-ts-http-headers": import_zod.z.string().transform((s) => import_zod.z.record(import_zod.z.string()).parse(JSON.parse(s)))
});
var WebhookSourceRequestHeadersSchema = import_zod.z.object({
  "x-ts-key": import_zod.z.string(),
  "x-ts-dynamic-id": import_zod.z.string().optional(),
  "x-ts-secret": import_zod.z.string(),
  "x-ts-params": import_zod.z.string().transform((s) => JSON.parse(s)),
  "x-ts-http-url": import_zod.z.string(),
  "x-ts-http-method": import_zod.z.string(),
  "x-ts-http-headers": import_zod.z.string().transform((s) => import_zod.z.record(import_zod.z.string()).parse(JSON.parse(s)))
});
var PongSuccessResponseSchema = import_zod.z.object({
  ok: import_zod.z.literal(true),
  triggerVersion: import_zod.z.string().optional(),
  triggerSdkVersion: import_zod.z.string().optional()
});
var PongErrorResponseSchema = import_zod.z.object({
  ok: import_zod.z.literal(false),
  error: import_zod.z.string(),
  triggerVersion: import_zod.z.string().optional(),
  triggerSdkVersion: import_zod.z.string().optional()
});
var PongResponseSchema = import_zod.z.discriminatedUnion("ok", [
  PongSuccessResponseSchema,
  PongErrorResponseSchema
]);
var ValidateSuccessResponseSchema = import_zod.z.object({
  ok: import_zod.z.literal(true),
  endpointId: import_zod.z.string(),
  triggerVersion: import_zod.z.string().optional()
});
var ValidateErrorResponseSchema = import_zod.z.object({
  ok: import_zod.z.literal(false),
  error: import_zod.z.string(),
  triggerVersion: import_zod.z.string().optional()
});
var ValidateResponseSchema = import_zod.z.discriminatedUnion("ok", [
  ValidateSuccessResponseSchema,
  ValidateErrorResponseSchema
]);
var QueueOptionsSchema = import_zod.z.object({
  name: import_zod.z.string(),
  maxConcurrent: import_zod.z.number().optional()
});
var ConcurrencyLimitOptionsSchema = import_zod.z.object({
  id: import_zod.z.string(),
  limit: import_zod.z.number()
});
var JobMetadataSchema = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.string(),
  version: import_zod.z.string(),
  event: EventSpecificationSchema,
  trigger: TriggerMetadataSchema,
  integrations: import_zod.z.record(IntegrationConfigSchema),
  internal: import_zod.z.boolean().default(false),
  enabled: import_zod.z.boolean(),
  startPosition: import_zod.z.enum([
    "initial",
    "latest"
  ]),
  preprocessRuns: import_zod.z.boolean(),
  concurrencyLimit: ConcurrencyLimitOptionsSchema.or(import_zod.z.number().int().positive()).optional()
});
var SourceMetadataV1Schema = import_zod.z.object({
  version: import_zod.z.literal("1"),
  channel: import_zod.z.enum([
    "HTTP",
    "SQS",
    "SMTP"
  ]),
  integration: IntegrationConfigSchema,
  key: import_zod.z.string(),
  params: import_zod.z.any(),
  events: import_zod.z.array(import_zod.z.string()),
  registerSourceJob: import_zod.z.object({
    id: import_zod.z.string(),
    version: import_zod.z.string()
  }).optional()
});
var SourceMetadataV2Schema = import_zod.z.object({
  version: import_zod.z.literal("2"),
  channel: import_zod.z.enum([
    "HTTP",
    "SQS",
    "SMTP"
  ]),
  integration: IntegrationConfigSchema,
  key: import_zod.z.string(),
  params: import_zod.z.any(),
  options: import_zod.z.record(import_zod.z.array(import_zod.z.string())),
  registerSourceJob: import_zod.z.object({
    id: import_zod.z.string(),
    version: import_zod.z.string()
  }).optional()
});
var SourceMetadataSchema = import_zod.z.preprocess(addMissingVersionField, import_zod.z.discriminatedUnion("version", [
  SourceMetadataV1Schema,
  SourceMetadataV2Schema
]));
var WebhookMetadataSchema = import_zod.z.object({
  key: import_zod.z.string(),
  params: import_zod.z.any(),
  config: import_zod.z.record(import_zod.z.array(import_zod.z.string())),
  integration: IntegrationConfigSchema,
  httpEndpoint: import_zod.z.object({
    id: import_zod.z.string()
  })
});
var WebhookContextMetadataSchema = import_zod.z.object({
  params: import_zod.z.any(),
  config: import_zod.z.record(import_zod.z.string().array()),
  secret: import_zod.z.string()
});
var DynamicTriggerEndpointMetadataSchema = import_zod.z.object({
  id: import_zod.z.string(),
  jobs: import_zod.z.array(JobMetadataSchema.pick({
    id: true,
    version: true
  })),
  registerSourceJob: import_zod.z.object({
    id: import_zod.z.string(),
    version: import_zod.z.string()
  }).optional()
});
var HttpEndpointMetadataSchema = import_zod.z.object({
  id: import_zod.z.string(),
  version: import_zod.z.string(),
  enabled: import_zod.z.boolean(),
  title: import_zod.z.string().optional(),
  icon: import_zod.z.string().optional(),
  properties: import_zod.z.array(DisplayPropertySchema).optional(),
  event: EventSpecificationSchema,
  immediateResponseFilter: RequestFilterSchema.optional(),
  skipTriggeringRuns: import_zod.z.boolean().optional(),
  source: import_zod.z.string()
});
var IndexEndpointResponseSchema = import_zod.z.object({
  jobs: import_zod.z.array(JobMetadataSchema),
  sources: import_zod.z.array(SourceMetadataSchema),
  webhooks: import_zod.z.array(WebhookMetadataSchema).optional(),
  dynamicTriggers: import_zod.z.array(DynamicTriggerEndpointMetadataSchema),
  dynamicSchedules: import_zod.z.array(RegisterDynamicSchedulePayloadSchema),
  httpEndpoints: import_zod.z.array(HttpEndpointMetadataSchema).optional()
});
var EndpointIndexErrorSchema = import_zod.z.object({
  message: import_zod.z.string(),
  raw: import_zod.z.any().optional()
});
var IndexEndpointStatsSchema = import_zod.z.object({
  jobs: import_zod.z.number(),
  sources: import_zod.z.number(),
  webhooks: import_zod.z.number().optional(),
  dynamicTriggers: import_zod.z.number(),
  dynamicSchedules: import_zod.z.number(),
  disabledJobs: import_zod.z.number().default(0),
  httpEndpoints: import_zod.z.number().default(0)
});
function parseEndpointIndexStats(stats) {
  if (stats === null || stats === void 0) {
    return;
  }
  return IndexEndpointStatsSchema.parse(stats);
}
__name(parseEndpointIndexStats, "parseEndpointIndexStats");
var GetEndpointIndexResponseSchema = import_zod.z.discriminatedUnion("status", [
  import_zod.z.object({
    status: import_zod.z.literal("PENDING"),
    updatedAt: import_zod.z.coerce.date()
  }),
  import_zod.z.object({
    status: import_zod.z.literal("STARTED"),
    updatedAt: import_zod.z.coerce.date()
  }),
  import_zod.z.object({
    status: import_zod.z.literal("SUCCESS"),
    stats: IndexEndpointStatsSchema,
    updatedAt: import_zod.z.coerce.date()
  }),
  import_zod.z.object({
    status: import_zod.z.literal("FAILURE"),
    error: EndpointIndexErrorSchema,
    updatedAt: import_zod.z.coerce.date()
  })
]);
var EndpointHeadersSchema = import_zod.z.object({
  "trigger-version": import_zod.z.string().optional(),
  "trigger-sdk-version": import_zod.z.string().optional()
});
var ExecuteJobRunMetadataSchema = import_zod.z.object({
  successSubscription: import_zod.z.boolean().optional(),
  failedSubscription: import_zod.z.boolean().optional()
});
var ExecuteJobHeadersSchema = EndpointHeadersSchema.extend({
  "x-trigger-run-metadata": import_zod.z.preprocess((val) => typeof val === "string" && JSON.parse(val), ExecuteJobRunMetadataSchema).optional()
});
var RawEventSchema = import_zod.z.object({
  /** The `name` property must exactly match any subscriptions you want to
    trigger. */
  name: import_zod.z.string(),
  /** The `payload` property will be sent to any matching Jobs and will appear
    as the `payload` param of the `run()` function. You can leave this
    parameter out if you just want to trigger a Job without any input data. */
  payload: import_zod.z.any(),
  /** The optional `context` property will be sent to any matching Jobs and will
    be passed through as the `context.event.context` param of the `run()`
    function. This is optional but can be useful if you want to pass through
    some additional context to the Job. */
  context: import_zod.z.any().optional(),
  /** The `id` property uniquely identify this particular event. If unset it
    will be set automatically using `ulid`. */
  id: import_zod.z.string().default(() => (0, import_ulidx.ulid)()),
  /** This is optional, it defaults to the current timestamp. Usually you would
    only set this if you have a timestamp that you wish to pass through, e.g.
    you receive a timestamp from a service and you want the same timestamp to
    be used in your Job. */
  timestamp: import_zod.z.coerce.date().optional(),
  /** This is optional, it defaults to "trigger.dev". It can be useful to set
    this as you can filter events using this in the `eventTrigger()`. */
  source: import_zod.z.string().optional(),
  /** This is optional, it defaults to "JSON". If your event is actually a request,
    with a url, headers, method and rawBody you can use "REQUEST" */
  payloadType: import_zod.z.union([
    import_zod.z.literal("JSON"),
    import_zod.z.literal("REQUEST")
  ]).optional()
});
var ApiEventLogSchema = import_zod.z.object({
  /** The `id` of the event that was sent.
  */
  id: import_zod.z.string(),
  /** The `name` of the event that was sent. */
  name: import_zod.z.string(),
  /** The `payload` of the event that was sent */
  payload: DeserializedJsonSchema,
  /** The `context` of the event that was sent. Is `undefined` if no context was
    set when sending the event. */
  context: DeserializedJsonSchema.optional().nullable(),
  /** The `timestamp` of the event that was sent */
  timestamp: import_zod.z.coerce.date(),
  /** The timestamp when the event will be delivered to any matching Jobs. Is
    `undefined` if `deliverAt` or `deliverAfter` wasn't set when sending the
    event. */
  deliverAt: import_zod.z.coerce.date().optional().nullable(),
  /** The timestamp when the event was delivered. Is `undefined` if `deliverAt`
    or `deliverAfter` were set when sending the event. */
  deliveredAt: import_zod.z.coerce.date().optional().nullable(),
  /** The timestamp when the event was cancelled. Is `undefined` if the event
  * wasn't cancelled. */
  cancelledAt: import_zod.z.coerce.date().optional().nullable()
});
var SendEventOptionsSchema = import_zod.z.object({
  /** An optional Date when you want the event to trigger Jobs. The event will
    be sent to the platform immediately but won't be acted upon until the
    specified time. */
  deliverAt: import_zod.z.coerce.date().optional(),
  /** An optional number of seconds you want to wait for the event to trigger
    any relevant Jobs. The event will be sent to the platform immediately but
    won't be delivered until after the elapsed number of seconds. */
  deliverAfter: import_zod.z.number().int().optional(),
  /** This optional param will be used by Trigger.dev Connect, which
    is coming soon. */
  accountId: import_zod.z.string().optional()
});
var SendEventBodySchema = import_zod.z.object({
  event: RawEventSchema,
  options: SendEventOptionsSchema.optional()
});
var SendBulkEventsBodySchema = import_zod.z.object({
  events: RawEventSchema.array(),
  options: SendEventOptionsSchema.optional()
});
var DeliverEventResponseSchema = import_zod.z.object({
  deliveredAt: import_zod.z.string().datetime()
});
var RuntimeEnvironmentTypeSchema = import_zod.z.enum([
  "PRODUCTION",
  "STAGING",
  "DEVELOPMENT",
  "PREVIEW"
]);
var RunSourceContextSchema = import_zod.z.object({
  id: import_zod.z.string(),
  metadata: import_zod.z.any()
});
var AutoYieldConfigSchema = import_zod.z.object({
  startTaskThreshold: import_zod.z.number(),
  beforeExecuteTaskThreshold: import_zod.z.number(),
  beforeCompleteTaskThreshold: import_zod.z.number(),
  afterCompleteTaskThreshold: import_zod.z.number()
});
var RunJobBodySchema = import_zod.z.object({
  event: ApiEventLogSchema,
  job: import_zod.z.object({
    id: import_zod.z.string(),
    version: import_zod.z.string()
  }),
  run: import_zod.z.object({
    id: import_zod.z.string(),
    isTest: import_zod.z.boolean(),
    isRetry: import_zod.z.boolean().default(false),
    startedAt: import_zod.z.coerce.date()
  }),
  environment: import_zod.z.object({
    id: import_zod.z.string(),
    slug: import_zod.z.string(),
    type: RuntimeEnvironmentTypeSchema
  }),
  organization: import_zod.z.object({
    id: import_zod.z.string(),
    title: import_zod.z.string(),
    slug: import_zod.z.string()
  }),
  project: import_zod.z.object({
    id: import_zod.z.string(),
    name: import_zod.z.string(),
    slug: import_zod.z.string()
  }).optional(),
  account: import_zod.z.object({
    id: import_zod.z.string(),
    metadata: import_zod.z.any()
  }).optional(),
  source: RunSourceContextSchema.optional(),
  tasks: import_zod.z.array(CachedTaskSchema).optional(),
  cachedTaskCursor: import_zod.z.string().optional(),
  noopTasksSet: import_zod.z.string().optional(),
  connections: import_zod.z.record(ConnectionAuthSchema).optional(),
  yieldedExecutions: import_zod.z.string().array().optional(),
  runChunkExecutionLimit: import_zod.z.number().optional(),
  autoYieldConfig: AutoYieldConfigSchema.optional()
});
var RunJobErrorSchema = import_zod.z.object({
  status: import_zod.z.literal("ERROR"),
  error: ErrorWithStackSchema,
  task: TaskSchema.optional()
});
var RunJobYieldExecutionErrorSchema = import_zod.z.object({
  status: import_zod.z.literal("YIELD_EXECUTION"),
  key: import_zod.z.string()
});
var AutoYieldMetadataSchema = import_zod.z.object({
  location: import_zod.z.string(),
  timeRemaining: import_zod.z.number(),
  timeElapsed: import_zod.z.number(),
  limit: import_zod.z.number().optional()
});
var RunJobAutoYieldExecutionErrorSchema = AutoYieldMetadataSchema.extend({
  status: import_zod.z.literal("AUTO_YIELD_EXECUTION")
});
var RunJobAutoYieldWithCompletedTaskExecutionErrorSchema = import_zod.z.object({
  status: import_zod.z.literal("AUTO_YIELD_EXECUTION_WITH_COMPLETED_TASK"),
  id: import_zod.z.string(),
  properties: import_zod.z.array(DisplayPropertySchema).optional(),
  output: import_zod.z.string().optional(),
  data: AutoYieldMetadataSchema
});
var RunJobAutoYieldRateLimitErrorSchema = import_zod.z.object({
  status: import_zod.z.literal("AUTO_YIELD_RATE_LIMIT"),
  reset: import_zod.z.coerce.number()
});
var RunJobInvalidPayloadErrorSchema = import_zod.z.object({
  status: import_zod.z.literal("INVALID_PAYLOAD"),
  errors: import_zod.z.array(SchemaErrorSchema)
});
var RunJobUnresolvedAuthErrorSchema = import_zod.z.object({
  status: import_zod.z.literal("UNRESOLVED_AUTH_ERROR"),
  issues: import_zod.z.record(import_zod.z.object({
    id: import_zod.z.string(),
    error: import_zod.z.string()
  }))
});
var RunJobResumeWithTaskSchema = import_zod.z.object({
  status: import_zod.z.literal("RESUME_WITH_TASK"),
  task: TaskSchema
});
var RunJobRetryWithTaskSchema = import_zod.z.object({
  status: import_zod.z.literal("RETRY_WITH_TASK"),
  task: TaskSchema,
  error: ErrorWithStackSchema,
  retryAt: import_zod.z.coerce.date()
});
var RunJobCanceledWithTaskSchema = import_zod.z.object({
  status: import_zod.z.literal("CANCELED"),
  task: TaskSchema
});
var RunJobSuccessSchema = import_zod.z.object({
  status: import_zod.z.literal("SUCCESS"),
  output: DeserializedJsonSchema.optional()
});
var RunJobErrorResponseSchema = import_zod.z.union([
  RunJobAutoYieldExecutionErrorSchema,
  RunJobAutoYieldWithCompletedTaskExecutionErrorSchema,
  RunJobYieldExecutionErrorSchema,
  RunJobAutoYieldRateLimitErrorSchema,
  RunJobErrorSchema,
  RunJobUnresolvedAuthErrorSchema,
  RunJobInvalidPayloadErrorSchema,
  RunJobResumeWithTaskSchema,
  RunJobRetryWithTaskSchema,
  RunJobCanceledWithTaskSchema
]);
var RunJobResumeWithParallelTaskSchema = import_zod.z.object({
  status: import_zod.z.literal("RESUME_WITH_PARALLEL_TASK"),
  task: TaskSchema,
  childErrors: import_zod.z.array(RunJobErrorResponseSchema)
});
var RunJobResponseSchema = import_zod.z.discriminatedUnion("status", [
  RunJobAutoYieldExecutionErrorSchema,
  RunJobAutoYieldWithCompletedTaskExecutionErrorSchema,
  RunJobYieldExecutionErrorSchema,
  RunJobAutoYieldRateLimitErrorSchema,
  RunJobErrorSchema,
  RunJobUnresolvedAuthErrorSchema,
  RunJobInvalidPayloadErrorSchema,
  RunJobResumeWithTaskSchema,
  RunJobResumeWithParallelTaskSchema,
  RunJobRetryWithTaskSchema,
  RunJobCanceledWithTaskSchema,
  RunJobSuccessSchema
]);
var PreprocessRunBodySchema = import_zod.z.object({
  event: ApiEventLogSchema,
  job: import_zod.z.object({
    id: import_zod.z.string(),
    version: import_zod.z.string()
  }),
  run: import_zod.z.object({
    id: import_zod.z.string(),
    isTest: import_zod.z.boolean()
  }),
  environment: import_zod.z.object({
    id: import_zod.z.string(),
    slug: import_zod.z.string(),
    type: RuntimeEnvironmentTypeSchema
  }),
  organization: import_zod.z.object({
    id: import_zod.z.string(),
    title: import_zod.z.string(),
    slug: import_zod.z.string()
  }),
  account: import_zod.z.object({
    id: import_zod.z.string(),
    metadata: import_zod.z.any()
  }).optional()
});
var PreprocessRunResponseSchema = import_zod.z.object({
  abort: import_zod.z.boolean(),
  properties: import_zod.z.array(DisplayPropertySchema).optional()
});
var CreateRunResponseOkSchema = import_zod.z.object({
  ok: import_zod.z.literal(true),
  data: import_zod.z.object({
    id: import_zod.z.string()
  })
});
var CreateRunResponseErrorSchema = import_zod.z.object({
  ok: import_zod.z.literal(false),
  error: import_zod.z.string()
});
var CreateRunResponseBodySchema = import_zod.z.discriminatedUnion("ok", [
  CreateRunResponseOkSchema,
  CreateRunResponseErrorSchema
]);
var RedactStringSchema = import_zod.z.object({
  __redactedString: import_zod.z.literal(true),
  strings: import_zod.z.array(import_zod.z.string()),
  interpolations: import_zod.z.array(import_zod.z.string())
});
var LogMessageSchema = import_zod.z.object({
  level: import_zod.z.enum([
    "DEBUG",
    "INFO",
    "WARN",
    "ERROR"
  ]),
  message: import_zod.z.string(),
  data: SerializableJsonSchema.optional()
});
var RedactSchema = import_zod.z.object({
  paths: import_zod.z.array(import_zod.z.string())
});
var RetryOptionsSchema = import_zod.z.object({
  /** The maximum number of times to retry the request. */
  limit: import_zod.z.number().optional(),
  /** The exponential factor to use when calculating the next retry time. */
  factor: import_zod.z.number().optional(),
  /** The minimum amount of time to wait before retrying the request. */
  minTimeoutInMs: import_zod.z.number().optional(),
  /** The maximum amount of time to wait before retrying the request. */
  maxTimeoutInMs: import_zod.z.number().optional(),
  /** Whether to randomize the retry time. */
  randomize: import_zod.z.boolean().optional()
});
var RunTaskOptionsSchema = import_zod.z.object({
  /** The name of the Task is required. This is displayed on the Task in the logs. */
  name: import_zod.z.string().optional(),
  /** The Task will wait and only start at the specified Date  */
  delayUntil: import_zod.z.coerce.date().optional(),
  /** Retry options */
  retry: RetryOptionsSchema.optional(),
  /** The icon for the Task, it will appear in the logs.
  *  You can use the name of a company in lowercase, e.g. "github".
  *  Or any icon name that [Tabler Icons](https://tabler-icons.io/) supports. */
  icon: import_zod.z.string().optional(),
  /** The key for the Task that you want to appear in the logs */
  displayKey: import_zod.z.string().optional(),
  /** A description of the Task */
  description: import_zod.z.string().optional(),
  /** Properties that are displayed in the logs */
  properties: import_zod.z.array(DisplayPropertySchema).optional(),
  /** The input params to the Task, will be displayed in the logs  */
  params: import_zod.z.any(),
  /** The style of the log entry. */
  style: StyleSchema.optional(),
  /** Allows you to expose a `task.callbackUrl` to use in your tasks. Enabling this feature will cause the task to return the data sent to the callbackUrl instead of the usual async callback result. */
  callback: import_zod.z.object({
    /** Causes the task to wait for and return the data of the first request sent to `task.callbackUrl`. */
    enabled: import_zod.z.boolean(),
    /** Time to wait for the first request to `task.callbackUrl`. Default: One hour. */
    timeoutInSeconds: import_zod.z.number()
  }).partial().optional(),
  /** Allows you to link the Integration connection in the logs. This is handled automatically in integrations.  */
  connectionKey: import_zod.z.string().optional(),
  /** An operation you want to perform on the Trigger.dev platform, current only "fetch", "fetch-response", and "fetch-poll" is supported. If you wish to `fetch` use [`io.backgroundFetch()`](https://trigger.dev/docs/sdk/io/backgroundfetch) instead. */
  operation: import_zod.z.enum([
    "fetch",
    "fetch-response",
    "fetch-poll"
  ]).optional(),
  /** A No Operation means that the code won't be executed. This is used internally to implement features like [io.wait()](https://trigger.dev/docs/sdk/io/wait).  */
  noop: import_zod.z.boolean().default(false),
  redact: RedactSchema.optional(),
  parallel: import_zod.z.boolean().optional()
});
var RunTaskBodyInputSchema = RunTaskOptionsSchema.extend({
  idempotencyKey: import_zod.z.string(),
  parentId: import_zod.z.string().optional()
});
var RunTaskBodyOutputSchema = RunTaskBodyInputSchema.extend({
  properties: import_zod.z.array(DisplayPropertySchema.partial()).optional(),
  params: DeserializedJsonSchema.optional().nullable(),
  callback: import_zod.z.object({
    enabled: import_zod.z.boolean(),
    timeoutInSeconds: import_zod.z.number().default(3600)
  }).optional()
});
var RunTaskResponseWithCachedTasksBodySchema = import_zod.z.object({
  task: ServerTaskSchema,
  cachedTasks: import_zod.z.object({
    tasks: import_zod.z.array(CachedTaskSchema),
    cursor: import_zod.z.string().optional()
  }).optional()
});
var CompleteTaskBodyInputSchema = RunTaskBodyInputSchema.pick({
  properties: true,
  description: true,
  params: true
}).extend({
  output: SerializableJsonSchema.optional().transform((v) => v ? DeserializedJsonSchema.parse(JSON.parse(JSON.stringify(v))) : {})
});
var CompleteTaskBodyV2InputSchema = RunTaskBodyInputSchema.pick({
  properties: true,
  description: true,
  params: true
}).extend({
  output: import_zod.z.string().optional()
});
var FailTaskBodyInputSchema = import_zod.z.object({
  error: ErrorWithStackSchema
});
var NormalizedRequestSchema = import_zod.z.object({
  headers: import_zod.z.record(import_zod.z.string()),
  method: import_zod.z.string(),
  query: import_zod.z.record(import_zod.z.string()),
  url: import_zod.z.string(),
  body: import_zod.z.any()
});
var NormalizedResponseSchema = import_zod.z.object({
  status: import_zod.z.number(),
  body: import_zod.z.any(),
  headers: import_zod.z.record(import_zod.z.string()).optional()
});
var HttpSourceResponseSchema = import_zod.z.object({
  response: NormalizedResponseSchema,
  events: import_zod.z.array(RawEventSchema),
  metadata: HttpSourceResponseMetadataSchema.optional()
});
var WebhookDeliveryResponseSchema = import_zod.z.object({
  response: NormalizedResponseSchema,
  verified: import_zod.z.boolean(),
  error: import_zod.z.string().optional()
});
var RegisterTriggerBodySchemaV1 = import_zod.z.object({
  rule: EventRuleSchema,
  source: SourceMetadataV1Schema
});
var RegisterTriggerBodySchemaV2 = import_zod.z.object({
  rule: EventRuleSchema,
  source: SourceMetadataV2Schema,
  accountId: import_zod.z.string().optional()
});
var InitializeTriggerBodySchema = import_zod.z.object({
  id: import_zod.z.string(),
  params: import_zod.z.any(),
  accountId: import_zod.z.string().optional(),
  metadata: import_zod.z.any().optional()
});
var RegisterCommonScheduleBodySchema = import_zod.z.object({
  /** A unique id for the schedule. This is used to identify and unregister the schedule later. */
  id: import_zod.z.string(),
  /** Any additional metadata about the schedule. */
  metadata: import_zod.z.any(),
  /** An optional Account ID to associate with runs triggered by this schedule */
  accountId: import_zod.z.string().optional()
});
var RegisterIntervalScheduleBodySchema = RegisterCommonScheduleBodySchema.merge(IntervalMetadataSchema);
var InitializeCronScheduleBodySchema = RegisterCommonScheduleBodySchema.merge(CronMetadataSchema);
var RegisterScheduleBodySchema = import_zod.z.discriminatedUnion("type", [
  RegisterIntervalScheduleBodySchema,
  InitializeCronScheduleBodySchema
]);
var RegisterScheduleResponseBodySchema = import_zod.z.object({
  id: import_zod.z.string(),
  schedule: ScheduleMetadataSchema,
  metadata: import_zod.z.any(),
  active: import_zod.z.boolean()
});
var CreateExternalConnectionBodySchema = import_zod.z.object({
  accessToken: import_zod.z.string(),
  type: import_zod.z.enum([
    "oauth2"
  ]),
  scopes: import_zod.z.array(import_zod.z.string()).optional(),
  metadata: import_zod.z.any()
});
var GetRunStatusesSchema = import_zod.z.object({
  run: import_zod.z.object({
    id: import_zod.z.string(),
    status: RunStatusSchema,
    output: import_zod.z.any().optional()
  }),
  statuses: import_zod.z.array(JobRunStatusRecordSchema)
});
var InvokeJobResponseSchema = import_zod.z.object({
  id: import_zod.z.string()
});
var InvokeJobRequestBodySchema = import_zod.z.object({
  payload: import_zod.z.any(),
  context: import_zod.z.any().optional(),
  options: import_zod.z.object({
    accountId: import_zod.z.string().optional(),
    callbackUrl: import_zod.z.string().optional()
  }).optional()
});
var InvokeOptionsSchema = import_zod.z.object({
  accountId: import_zod.z.string().optional(),
  idempotencyKey: import_zod.z.string().optional(),
  context: import_zod.z.any().optional(),
  callbackUrl: import_zod.z.string().optional()
});
var EphemeralEventDispatcherRequestBodySchema = import_zod.z.object({
  url: import_zod.z.string(),
  name: import_zod.z.string().or(import_zod.z.array(import_zod.z.string())),
  source: import_zod.z.string().optional(),
  filter: EventFilterSchema.optional(),
  contextFilter: EventFilterSchema.optional(),
  accountId: import_zod.z.string().optional(),
  timeoutInSeconds: import_zod.z.number().int().positive().min(10).max(60 * 60 * 24 * 365).default(3600)
});
var EphemeralEventDispatcherResponseBodySchema = import_zod.z.object({
  id: import_zod.z.string()
});
var KeyValueStoreResponseBodySchema = import_zod.z.discriminatedUnion("action", [
  import_zod.z.object({
    action: import_zod.z.literal("DELETE"),
    key: import_zod.z.string(),
    deleted: import_zod.z.boolean()
  }),
  import_zod.z.object({
    action: import_zod.z.literal("GET"),
    key: import_zod.z.string(),
    value: import_zod.z.string().optional()
  }),
  import_zod.z.object({
    action: import_zod.z.literal("HAS"),
    key: import_zod.z.string(),
    has: import_zod.z.boolean()
  }),
  import_zod.z.object({
    action: import_zod.z.literal("SET"),
    key: import_zod.z.string(),
    value: import_zod.z.string().optional()
  })
]);
var MISSING_CONNECTION_NOTIFICATION = "dev.trigger.notifications.missingConnection";
var MISSING_CONNECTION_RESOLVED_NOTIFICATION = "dev.trigger.notifications.missingConnectionResolved";
var CommonMissingConnectionNotificationPayloadSchema = import_zod.z.object({
  id: import_zod.z.string(),
  client: import_zod.z.object({
    id: import_zod.z.string(),
    title: import_zod.z.string(),
    scopes: import_zod.z.array(import_zod.z.string()),
    createdAt: import_zod.z.coerce.date(),
    updatedAt: import_zod.z.coerce.date()
  }),
  authorizationUrl: import_zod.z.string()
});
var MissingDeveloperConnectionNotificationPayloadSchema = CommonMissingConnectionNotificationPayloadSchema.extend({
  type: import_zod.z.literal("DEVELOPER")
});
var MissingExternalConnectionNotificationPayloadSchema = CommonMissingConnectionNotificationPayloadSchema.extend({
  type: import_zod.z.literal("EXTERNAL"),
  account: import_zod.z.object({
    id: import_zod.z.string(),
    metadata: import_zod.z.any()
  })
});
var MissingConnectionNotificationPayloadSchema = import_zod.z.discriminatedUnion("type", [
  MissingDeveloperConnectionNotificationPayloadSchema,
  MissingExternalConnectionNotificationPayloadSchema
]);
var CommonMissingConnectionNotificationResolvedPayloadSchema = import_zod.z.object({
  id: import_zod.z.string(),
  client: import_zod.z.object({
    id: import_zod.z.string(),
    title: import_zod.z.string(),
    scopes: import_zod.z.array(import_zod.z.string()),
    createdAt: import_zod.z.coerce.date(),
    updatedAt: import_zod.z.coerce.date(),
    integrationIdentifier: import_zod.z.string(),
    integrationAuthMethod: import_zod.z.string()
  }),
  expiresAt: import_zod.z.coerce.date()
});
var MissingDeveloperConnectionResolvedNotificationPayloadSchema = CommonMissingConnectionNotificationResolvedPayloadSchema.extend({
  type: import_zod.z.literal("DEVELOPER")
});
var MissingExternalConnectionResolvedNotificationPayloadSchema = CommonMissingConnectionNotificationResolvedPayloadSchema.extend({
  type: import_zod.z.literal("EXTERNAL"),
  account: import_zod.z.object({
    id: import_zod.z.string(),
    metadata: import_zod.z.any()
  })
});
var MissingConnectionResolvedNotificationPayloadSchema = import_zod.z.discriminatedUnion("type", [
  MissingDeveloperConnectionResolvedNotificationPayloadSchema,
  MissingExternalConnectionResolvedNotificationPayloadSchema
]);
var FetchRetryHeadersStrategySchema = import_zod.z.object({
  /** The `headers` strategy retries the request using info from the response headers. */
  strategy: import_zod.z.literal("headers"),
  /** The header to use to determine the maximum number of times to retry the request. */
  limitHeader: import_zod.z.string(),
  /** The header to use to determine the number of remaining retries. */
  remainingHeader: import_zod.z.string(),
  /** The header to use to determine the time when the number of remaining retries will be reset. */
  resetHeader: import_zod.z.string(),
  /** The event filter to use to determine if the request should be retried. */
  bodyFilter: EventFilterSchema.optional(),
  /** The format of the `resetHeader` value. */
  resetFormat: import_zod.z.enum([
    "unix_timestamp",
    "unix_timestamp_in_ms",
    "iso_8601",
    "iso_8601_duration_openai_variant"
  ]).default("unix_timestamp")
});
var FetchRetryBackoffStrategySchema = RetryOptionsSchema.extend({
  /** The `backoff` strategy retries the request with an exponential backoff. */
  strategy: import_zod.z.literal("backoff"),
  /** The event filter to use to determine if the request should be retried. */
  bodyFilter: EventFilterSchema.optional()
});
var FetchRetryStrategySchema = import_zod.z.discriminatedUnion("strategy", [
  FetchRetryHeadersStrategySchema,
  FetchRetryBackoffStrategySchema
]);
var FetchRequestInitSchema = import_zod.z.object({
  /** The HTTP method to use for the request. */
  method: import_zod.z.string().optional(),
  /** Any headers to send with the request. Note that you can use [redactString](https://trigger.dev/docs/sdk/redactString) to prevent sensitive information from being stored (e.g. in the logs), like API keys and tokens. */
  headers: import_zod.z.record(import_zod.z.union([
    import_zod.z.string(),
    RedactStringSchema
  ])).optional(),
  /** The body of the request. */
  body: import_zod.z.union([
    import_zod.z.string(),
    import_zod.z.instanceof(ArrayBuffer)
  ]).optional()
});
var FetchRetryOptionsSchema = import_zod.z.record(FetchRetryStrategySchema);
var FetchTimeoutOptionsSchema = import_zod.z.object({
  durationInMs: import_zod.z.number(),
  retry: RetryOptionsSchema.optional()
});
var FetchOperationSchema = import_zod.z.object({
  url: import_zod.z.string(),
  requestInit: FetchRequestInitSchema.optional(),
  retry: import_zod.z.record(FetchRetryStrategySchema).optional(),
  timeout: FetchTimeoutOptionsSchema.optional()
});
var FetchPollOperationSchema = import_zod.z.object({
  url: import_zod.z.string(),
  interval: import_zod.z.number().int().positive().min(10).max(600).default(10),
  timeout: import_zod.z.number().int().positive().min(30).max(3600).default(600),
  responseFilter: ResponseFilterSchema,
  requestInit: FetchRequestInitSchema.optional(),
  requestTimeout: FetchTimeoutOptionsSchema.optional()
});
var GetEventSchema = import_zod.z.object({
  /** The event id */
  id: import_zod.z.string(),
  /** The event name */
  name: import_zod.z.string(),
  /** When the event was created */
  createdAt: import_zod.z.coerce.date(),
  /** When the event was last updated */
  updatedAt: import_zod.z.coerce.date(),
  /** The runs that were triggered by the event */
  runs: import_zod.z.array(import_zod.z.object({
    /** The Run id */
    id: import_zod.z.string(),
    /** The Run status */
    status: RunStatusSchema,
    /** When the run started */
    startedAt: import_zod.z.coerce.date().optional().nullable(),
    /** When the run completed */
    completedAt: import_zod.z.coerce.date().optional().nullable()
  }))
});
var CancelRunsForEventSchema = import_zod.z.object({
  cancelledRunIds: import_zod.z.array(import_zod.z.string()),
  failedToCancelRunIds: import_zod.z.array(import_zod.z.string())
});
var RequestWithRawBodySchema = import_zod.z.object({
  url: import_zod.z.string(),
  method: import_zod.z.string(),
  headers: import_zod.z.record(import_zod.z.string()),
  rawBody: import_zod.z.string()
});
var CancelRunsForJobSchema = import_zod.z.object({
  cancelledRunIds: import_zod.z.array(import_zod.z.string()),
  failedToCancelRunIds: import_zod.z.array(import_zod.z.string())
});
function deepMergeFilters(...filters) {
  const result = {};
  for (const filter of filters) {
    for (const key in filter) {
      if (filter.hasOwnProperty(key)) {
        const filterValue = filter[key];
        const existingValue = result[key];
        if (existingValue && typeof existingValue === "object" && typeof filterValue === "object" && !Array.isArray(existingValue) && !Array.isArray(filterValue) && existingValue !== null && filterValue !== null) {
          result[key] = deepMergeFilters(existingValue, filterValue);
        } else {
          result[key] = filterValue;
        }
      }
    }
  }
  return result;
}
__name(deepMergeFilters, "deepMergeFilters");
function assertExhaustive(x) {
  throw new Error("Unexpected object: " + x);
}
__name(assertExhaustive, "assertExhaustive");
var DEFAULT_RETRY_OPTIONS = {
  limit: 5,
  factor: 1.8,
  minTimeoutInMs: 1e3,
  maxTimeoutInMs: 6e4,
  randomize: true
};
function calculateRetryAt(retryOptions, attempts) {
  const options = {
    ...DEFAULT_RETRY_OPTIONS,
    ...retryOptions
  };
  const retryCount = attempts + 1;
  if (retryCount >= options.limit) {
    return;
  }
  const random = options.randomize ? Math.random() + 1 : 1;
  let timeoutInMs = Math.round(random * Math.max(options.minTimeoutInMs, 1) * Math.pow(options.factor, Math.max(attempts - 1, 0)));
  timeoutInMs = Math.min(timeoutInMs, options.maxTimeoutInMs);
  return new Date(Date.now() + timeoutInMs);
}
__name(calculateRetryAt, "calculateRetryAt");
function calculateResetAt(resets, format, now = /* @__PURE__ */ new Date()) {
  if (!resets)
    return;
  switch (format) {
    case "iso_8601_duration_openai_variant": {
      return calculateISO8601DurationOpenAIVariantResetAt(resets, now);
    }
    case "iso_8601": {
      return calculateISO8601ResetAt(resets, now);
    }
    case "unix_timestamp": {
      return calculateUnixTimestampResetAt(resets, now);
    }
    case "unix_timestamp_in_ms": {
      return calculateUnixTimestampInMsResetAt(resets, now);
    }
  }
}
__name(calculateResetAt, "calculateResetAt");
function calculateUnixTimestampResetAt(resets, now = /* @__PURE__ */ new Date()) {
  if (!resets)
    return void 0;
  const resetAt = parseInt(resets, 10);
  if (isNaN(resetAt))
    return void 0;
  return new Date(resetAt * 1e3);
}
__name(calculateUnixTimestampResetAt, "calculateUnixTimestampResetAt");
function calculateUnixTimestampInMsResetAt(resets, now = /* @__PURE__ */ new Date()) {
  if (!resets)
    return void 0;
  const resetAt = parseInt(resets, 10);
  if (isNaN(resetAt))
    return void 0;
  return new Date(resetAt);
}
__name(calculateUnixTimestampInMsResetAt, "calculateUnixTimestampInMsResetAt");
function calculateISO8601ResetAt(resets, now = /* @__PURE__ */ new Date()) {
  if (!resets)
    return void 0;
  const resetAt = new Date(resets);
  if (isNaN(resetAt.getTime()))
    return void 0;
  return resetAt;
}
__name(calculateISO8601ResetAt, "calculateISO8601ResetAt");
function calculateISO8601DurationOpenAIVariantResetAt(resets, now = /* @__PURE__ */ new Date()) {
  if (!resets)
    return void 0;
  const pattern = /^(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:(\d+(?:\.\d+)?)s)?(?:(\d+)ms)?$/;
  const match = resets.match(pattern);
  if (!match)
    return void 0;
  const days = parseInt(match[1], 10) || 0;
  const hours = parseInt(match[2], 10) || 0;
  const minutes = parseInt(match[3], 10) || 0;
  const seconds = parseFloat(match[4]) || 0;
  const milliseconds = parseInt(match[5], 10) || 0;
  const resetAt = new Date(now);
  resetAt.setDate(resetAt.getDate() + days);
  resetAt.setHours(resetAt.getHours() + hours);
  resetAt.setMinutes(resetAt.getMinutes() + minutes);
  resetAt.setSeconds(resetAt.getSeconds() + Math.floor(seconds));
  resetAt.setMilliseconds(resetAt.getMilliseconds() + (seconds - Math.floor(seconds)) * 1e3 + milliseconds);
  return resetAt;
}
__name(calculateISO8601DurationOpenAIVariantResetAt, "calculateISO8601DurationOpenAIVariantResetAt");
var currentDate = {
  marker: "__CURRENT_DATE__",
  replace({ data: { now } }) {
    return now.toISOString();
  }
};
function urlWithSearchParams(url, params) {
  if (!params) {
    return url;
  }
  const urlObj = new URL(url);
  for (const [key, value] of Object.entries(params)) {
    if (value !== void 0) {
      urlObj.searchParams.append(key, String(value));
    }
  }
  return urlObj.toString();
}
__name(urlWithSearchParams, "urlWithSearchParams");
function eventFilterMatches(payload, filter) {
  if (payload === void 0 || payload === null) {
    if (Object.entries(filter).length === 0) {
      return true;
    } else {
      return false;
    }
  }
  for (const [patternKey, patternValue] of Object.entries(filter)) {
    const payloadValue = payload[patternKey];
    if (Array.isArray(patternValue)) {
      if (patternValue.length === 0) {
        continue;
      }
      if (patternValue.every((item) => typeof item === "string")) {
        if (patternValue.includes(payloadValue)) {
          continue;
        }
        return false;
      }
      if (patternValue.every((item) => typeof item === "number")) {
        if (patternValue.includes(payloadValue)) {
          continue;
        }
        return false;
      }
      if (patternValue.every((item) => typeof item === "boolean")) {
        if (patternValue.includes(payloadValue)) {
          continue;
        }
        return false;
      }
      const objectArray = patternValue;
      if (!contentFiltersMatches(payloadValue, objectArray)) {
        return false;
      }
      continue;
    } else if (typeof patternValue === "object") {
      if (Array.isArray(payloadValue)) {
        if (!payloadValue.some((item) => eventFilterMatches(item, patternValue))) {
          return false;
        }
      } else {
        if (!eventFilterMatches(payloadValue, patternValue)) {
          return false;
        }
      }
    }
  }
  return true;
}
__name(eventFilterMatches, "eventFilterMatches");
function contentFiltersMatches(actualValue, contentFilters) {
  for (const contentFilter of contentFilters) {
    if (typeof contentFilter === "object") {
      Object.entries(contentFilter)[0];
      if (!contentFilterMatches(actualValue, contentFilter)) {
        return false;
      }
    }
  }
  return true;
}
__name(contentFiltersMatches, "contentFiltersMatches");
function contentFilterMatches(actualValue, contentFilter) {
  if ("$endsWith" in contentFilter) {
    if (typeof actualValue !== "string") {
      return false;
    }
    return actualValue.endsWith(contentFilter.$endsWith);
  }
  if ("$startsWith" in contentFilter) {
    if (typeof actualValue !== "string") {
      return false;
    }
    return actualValue.startsWith(contentFilter.$startsWith);
  }
  if ("$anythingBut" in contentFilter) {
    if (Array.isArray(contentFilter.$anythingBut)) {
      if (contentFilter.$anythingBut.includes(actualValue)) {
        return false;
      }
    }
    if (contentFilter.$anythingBut === actualValue) {
      return false;
    }
    return true;
  }
  if ("$exists" in contentFilter) {
    if (contentFilter.$exists) {
      return actualValue !== void 0;
    }
    return actualValue === void 0;
  }
  if ("$gt" in contentFilter) {
    if (typeof actualValue !== "number") {
      return false;
    }
    return actualValue > contentFilter.$gt;
  }
  if ("$lt" in contentFilter) {
    if (typeof actualValue !== "number") {
      return false;
    }
    return actualValue < contentFilter.$lt;
  }
  if ("$gte" in contentFilter) {
    if (typeof actualValue !== "number") {
      return false;
    }
    return actualValue >= contentFilter.$gte;
  }
  if ("$lte" in contentFilter) {
    if (typeof actualValue !== "number") {
      return false;
    }
    return actualValue <= contentFilter.$lte;
  }
  if ("$between" in contentFilter) {
    if (typeof actualValue !== "number") {
      return false;
    }
    return actualValue >= contentFilter.$between[0] && actualValue <= contentFilter.$between[1];
  }
  if ("$includes" in contentFilter) {
    if (Array.isArray(actualValue)) {
      return actualValue.includes(contentFilter.$includes);
    }
    return false;
  }
  if ("$ignoreCaseEquals" in contentFilter) {
    if (typeof actualValue !== "string") {
      return false;
    }
    return actualValue.localeCompare(contentFilter.$ignoreCaseEquals, void 0, {
      sensitivity: "accent"
    }) === 0;
  }
  if ("$isNull" in contentFilter) {
    if (contentFilter.$isNull) {
      return actualValue === null;
    }
    return actualValue !== null;
  }
  if ("$not" in contentFilter) {
    if (Array.isArray(actualValue)) {
      return !actualValue.includes(contentFilter.$not);
    } else if (typeof actualValue === "number" || typeof actualValue === "boolean" || typeof actualValue === "string") {
      return actualValue !== contentFilter.$not;
    }
    return false;
  }
  return true;
}
__name(contentFilterMatches, "contentFilterMatches");
async function requestFilterMatches(request, filter) {
  const clonedRequest = request.clone();
  if (!requestMethodMatches(clonedRequest.method, filter.method)) {
    return false;
  }
  const headersObj = Object.fromEntries(clonedRequest.headers.entries());
  if (filter.headers && !eventFilterMatches(headersObj, filter.headers)) {
    return false;
  }
  const searchParams = new URL(clonedRequest.url).searchParams;
  const searchParamsObject = {};
  for (const [key, value] of searchParams.entries()) {
    searchParamsObject[key] = value;
  }
  if (filter.query && !eventFilterMatches(searchParamsObject, filter.query)) {
    return false;
  }
  try {
    const json = await clonedRequest.json();
    if (filter.body && !eventFilterMatches(json, filter.body)) {
      return false;
    }
  } catch (e) {
    if (filter.body) {
      return false;
    }
  }
  return true;
}
__name(requestFilterMatches, "requestFilterMatches");
async function responseFilterMatches(response, filter) {
  if (filter.headers && !eventFilterMatches(response.headers, filter.headers)) {
    return {
      match: false
    };
  }
  try {
    const json = await response.json();
    if (filter.body && !eventFilterMatches(json, filter.body)) {
      return {
        match: false,
        body: json
      };
    } else {
      return {
        match: true,
        body: json
      };
    }
  } catch (e) {
    if (filter.body) {
      return {
        match: false,
        body: void 0
      };
    }
  }
  return {
    match: true,
    body: void 0
  };
}
__name(responseFilterMatches, "responseFilterMatches");
function requestMethodMatches(method, filter) {
  if (!filter) {
    return true;
  }
  return filter.includes(method);
}
__name(requestMethodMatches, "requestMethodMatches");
var API_VERSIONS = {
  LAZY_LOADED_CACHED_TASKS: "2023-09-29",
  SERIALIZED_TASK_OUTPUT: "2023-11-01"
};
var PLATFORM_FEATURES = {
  yieldExecution: API_VERSIONS.LAZY_LOADED_CACHED_TASKS,
  lazyLoadedCachedTasks: API_VERSIONS.LAZY_LOADED_CACHED_TASKS
};
function supportsFeature(featureName, version3) {
  if (version3 === "unversioned" || version3 === "unknown") {
    return false;
  }
  const supportedVersion = PLATFORM_FEATURES[featureName];
  if (!supportedVersion) {
    return false;
  }
  return version3 >= supportedVersion;
}
__name(supportsFeature, "supportsFeature");

// node_modules/@trigger.dev/core-backend/dist/index.mjs
init_define_PROJECT_CONFIG();
var import_node_buffer = require("buffer");
var import_node_process = require("process");
var import_api = require("@opentelemetry/api");
var __defProp3 = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name2 = (target, value) => __defProp3(target, "name", { value, configurable: true });
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _BloomFilter = class _BloomFilter2 {
  constructor(size) {
    this.size = size;
    this.bitArray = new Uint8Array(Math.ceil(size / 8));
  }
  add(item) {
    const index = murmurHash3(item) % this.size;
    this.bitArray[Math.floor(index / 8)] |= 1 << index % 8;
  }
  test(item) {
    const index = murmurHash3(item) % this.size;
    return (this.bitArray[Math.floor(index / 8)] & 1 << index % 8) !== 0;
  }
  // Serialize to a Base64 string
  serialize() {
    return import_node_buffer.Buffer.from(this.bitArray).toString("base64");
  }
  // Deserialize from a Base64 string
  static deserialize(str, size) {
    const filter = new _BloomFilter2(size);
    filter.bitArray = Uint8Array.from(import_node_buffer.Buffer.from(str, "base64"));
    return filter;
  }
};
__name2(_BloomFilter, "BloomFilter");
__publicField(_BloomFilter, "NOOP_TASK_SET_SIZE", 32768);
var BloomFilter = _BloomFilter;
function murmurHash3(str, seed = 0) {
  let h1 = 3735928559 ^ seed, h2 = 1103547991 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 3432918353);
    h1 = h1 << 15 | h1 >>> 17;
    h1 = Math.imul(h1, 461845907);
    h2 = Math.imul(h2 ^ ch, 2246822507);
    h2 = h2 << 13 | h2 >>> 19;
    h2 = Math.imul(h2, 3266489909);
  }
  h1 ^= str.length;
  h2 ^= str.length;
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507);
  h1 = Math.imul(h1 ^ h1 >>> 13, 3266489909);
  h1 ^= h1 >>> 16;
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507);
  h2 = Math.imul(h2 ^ h2 >>> 13, 3266489909);
  h2 ^= h2 >>> 16;
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}
__name2(murmurHash3, "murmurHash3");
var logLevels = [
  "log",
  "error",
  "warn",
  "info",
  "debug"
];
var _name;
var _level;
var _filteredKeys;
var _jsonReplacer;
var _additionalFields;
var _structuredLog;
var structuredLog_fn;
var _Logger = class _Logger2 {
  constructor(name, level = "info", filteredKeys = [], jsonReplacer, additionalFields) {
    __privateAdd(this, _structuredLog);
    __privateAdd(this, _name, void 0);
    __privateAdd(this, _level, void 0);
    __privateAdd(this, _filteredKeys, []);
    __privateAdd(this, _jsonReplacer, void 0);
    __privateAdd(this, _additionalFields, void 0);
    __privateSet(this, _name, name);
    __privateSet(this, _level, logLevels.indexOf(import_node_process.env.TRIGGER_LOG_LEVEL ?? level));
    __privateSet(this, _filteredKeys, filteredKeys);
    __privateSet(this, _jsonReplacer, createReplacer(jsonReplacer));
    __privateSet(this, _additionalFields, additionalFields ?? (() => ({})));
  }
  child(fields) {
    return new _Logger2(__privateGet(this, _name), logLevels[__privateGet(this, _level)], __privateGet(this, _filteredKeys), __privateGet(this, _jsonReplacer), () => ({
      ...__privateGet(this, _additionalFields).call(this),
      ...fields
    }));
  }
  // Return a new Logger instance with the same name and a new log level
  // but filter out the keys from the log messages (at any level)
  filter(...keys) {
    return new _Logger2(__privateGet(this, _name), logLevels[__privateGet(this, _level)], keys, __privateGet(this, _jsonReplacer));
  }
  static satisfiesLogLevel(logLevel, setLevel) {
    return logLevels.indexOf(logLevel) <= logLevels.indexOf(setLevel);
  }
  log(message, ...args) {
    if (__privateGet(this, _level) < 0)
      return;
    __privateMethod(this, _structuredLog, structuredLog_fn).call(this, console.log, message, "log", ...args);
  }
  error(message, ...args) {
    if (__privateGet(this, _level) < 1)
      return;
    __privateMethod(this, _structuredLog, structuredLog_fn).call(this, console.error, message, "error", ...args);
  }
  warn(message, ...args) {
    if (__privateGet(this, _level) < 2)
      return;
    __privateMethod(this, _structuredLog, structuredLog_fn).call(this, console.warn, message, "warn", ...args);
  }
  info(message, ...args) {
    if (__privateGet(this, _level) < 3)
      return;
    __privateMethod(this, _structuredLog, structuredLog_fn).call(this, console.info, message, "info", ...args);
  }
  debug(message, ...args) {
    if (__privateGet(this, _level) < 4)
      return;
    __privateMethod(this, _structuredLog, structuredLog_fn).call(this, console.debug, message, "debug", ...args);
  }
};
_name = /* @__PURE__ */ new WeakMap();
_level = /* @__PURE__ */ new WeakMap();
_filteredKeys = /* @__PURE__ */ new WeakMap();
_jsonReplacer = /* @__PURE__ */ new WeakMap();
_additionalFields = /* @__PURE__ */ new WeakMap();
_structuredLog = /* @__PURE__ */ new WeakSet();
structuredLog_fn = /* @__PURE__ */ __name2(function(loggerFunction, message, level, ...args) {
  const currentSpan = import_api.trace.getSpan(import_api.context.active());
  const structuredLog = {
    ...structureArgs(safeJsonClone(args), __privateGet(this, _filteredKeys)),
    ...__privateGet(this, _additionalFields).call(this),
    timestamp: /* @__PURE__ */ new Date(),
    name: __privateGet(this, _name),
    message,
    level,
    traceId: currentSpan && currentSpan.isRecording() ? currentSpan?.spanContext().traceId : void 0,
    parentSpanId: currentSpan && currentSpan.isRecording() ? currentSpan?.spanContext().spanId : void 0
  };
  loggerFunction(JSON.stringify(structuredLog, __privateGet(this, _jsonReplacer)));
}, "#structuredLog");
__name2(_Logger, "Logger");
var Logger = _Logger;
function createReplacer(replacer) {
  return (key, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    if (replacer) {
      return replacer(key, value);
    }
    return value;
  };
}
__name2(createReplacer, "createReplacer");
function bigIntReplacer(_key, value) {
  if (typeof value === "bigint") {
    return value.toString();
  }
  return value;
}
__name2(bigIntReplacer, "bigIntReplacer");
function safeJsonClone(obj) {
  try {
    return JSON.parse(JSON.stringify(obj, bigIntReplacer));
  } catch (e) {
    return;
  }
}
__name2(safeJsonClone, "safeJsonClone");
function structureArgs(args, filteredKeys = []) {
  if (!args) {
    return;
  }
  if (args.length === 0) {
    return;
  }
  if (args.length === 1 && typeof args[0] === "object") {
    return filterKeys(JSON.parse(JSON.stringify(args[0], bigIntReplacer)), filteredKeys);
  }
  return args;
}
__name2(structureArgs, "structureArgs");
function filterKeys(obj, keys) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => filterKeys(item, keys));
  }
  const filteredObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (keys.includes(key)) {
      if (value) {
        filteredObj[key] = `[filtered ${prettyPrintBytes(value)}]`;
      } else {
        filteredObj[key] = value;
      }
      continue;
    }
    filteredObj[key] = filterKeys(value, keys);
  }
  return filteredObj;
}
__name2(filterKeys, "filterKeys");
function prettyPrintBytes(value) {
  if (import_node_process.env.NODE_ENV === "production") {
    return "skipped size";
  }
  const sizeInBytes = getSizeInBytes(value);
  if (sizeInBytes < 1024) {
    return `${sizeInBytes} bytes`;
  }
  if (sizeInBytes < 1024 * 1024) {
    return `${(sizeInBytes / 1024).toFixed(2)} KB`;
  }
  if (sizeInBytes < 1024 * 1024 * 1024) {
    return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
  }
  return `${(sizeInBytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}
__name2(prettyPrintBytes, "prettyPrintBytes");
function getSizeInBytes(value) {
  const jsonString = JSON.stringify(value);
  return import_node_buffer.Buffer.byteLength(jsonString, "utf8");
}
__name2(getSizeInBytes, "getSizeInBytes");

// node_modules/@trigger.dev/sdk/dist/index.mjs
var import_node_events = __toESM(require("events"), 1);
var import_node_process2 = require("process");
var import_zod2 = require("zod");
var import_node_crypto = __toESM(require("crypto"), 1);
var import_node_buffer2 = require("buffer");
var import_cronstrue = __toESM(require("cronstrue"), 1);
var __defProp4 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name3 = (target, value) => __defProp4(target, "name", { value, configurable: true });
var __publicField2 = (obj, key, value) => {
  __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet2 = (obj, member, getter) => {
  __accessCheck2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet2 = (obj, member, value, setter) => {
  __accessCheck2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod2 = (obj, member, method) => {
  __accessCheck2(obj, member, "access private method");
  return method;
};
var _TypedAsyncLocalStorage = class _TypedAsyncLocalStorage2 {
  constructor() {
    this.storage = new import_node_async_hooks.AsyncLocalStorage();
  }
  runWith(context2, fn) {
    return this.storage.run(context2, fn);
  }
  getStore() {
    return this.storage.getStore();
  }
};
__name3(_TypedAsyncLocalStorage, "TypedAsyncLocalStorage");
var TypedAsyncLocalStorage = _TypedAsyncLocalStorage;
var runLocalStorage = new TypedAsyncLocalStorage();
function slugifyId(input) {
  const replaceSpacesWithDash = input.toLowerCase().replace(/\s+/g, "-");
  const removeNonUrlSafeChars = replaceSpacesWithDash.replace(/[^a-zA-Z0-9-._~]/g, "");
  return removeNonUrlSafeChars;
}
__name3(slugifyId, "slugifyId");
var _validate;
var validate_fn;
var _Job = class _Job2 {
  constructor(options) {
    __privateAdd2(this, _validate);
    this.options = options;
    __privateMethod2(this, _validate, validate_fn).call(this);
  }
  /**
  * Attaches the job to a client. This is called automatically when you define a job using `client.defineJob()`.
  */
  attachToClient(client2) {
    client2.attach(this);
    return this;
  }
  get id() {
    return slugifyId(this.options.id);
  }
  get enabled() {
    return typeof this.options.enabled === "boolean" ? this.options.enabled : true;
  }
  get name() {
    return this.options.name;
  }
  get trigger() {
    return this.options.trigger;
  }
  get version() {
    return this.options.version;
  }
  get logLevel() {
    return this.options.logLevel;
  }
  get integrations() {
    return Object.keys(this.options.integrations ?? {}).reduce((acc, key) => {
      const integration = this.options.integrations[key];
      acc[key] = {
        id: integration.id,
        metadata: integration.metadata,
        authSource: integration.authSource
      };
      return acc;
    }, {});
  }
  toJSON() {
    const internal = this.options.__internal;
    return {
      id: this.id,
      name: this.name,
      version: this.version,
      event: this.trigger.event,
      trigger: this.trigger.toJSON(),
      integrations: this.integrations,
      startPosition: "latest",
      enabled: this.enabled,
      preprocessRuns: this.trigger.preprocessRuns,
      internal,
      concurrencyLimit: typeof this.options.concurrencyLimit === "number" ? this.options.concurrencyLimit : typeof this.options.concurrencyLimit === "object" ? {
        id: this.options.concurrencyLimit.id,
        limit: this.options.concurrencyLimit.limit
      } : void 0
    };
  }
  async invoke(param1, param2 = void 0, param3 = void 0) {
    const triggerClient = this.client;
    if (!triggerClient) {
      throw new Error("Cannot invoke a job that is not attached to a client. Make sure you attach the job to a client before invoking it.");
    }
    const runStore = runLocalStorage.getStore();
    if (typeof param1 === "string") {
      if (!runStore) {
        throw new Error("Cannot invoke a job from outside of a run when passing a cacheKey. Make sure you are running the job from within a run or use the invoke method without the cacheKey.");
      }
      const options = param3 ?? {};
      return await runStore.io.runTask(param1, async (task) => {
        const result = await triggerClient.invokeJob(this.id, param2, {
          idempotencyKey: task.idempotencyKey,
          ...options
        });
        task.outputProperties = [
          {
            label: "Run",
            text: result.id,
            url: `/orgs/${runStore.ctx.organization.slug}/projects/${runStore.ctx.project.slug}/jobs/${this.id}/runs/${result.id}/trigger`
          }
        ];
        return result;
      }, {
        name: `Manually Invoke '${this.name}'`,
        params: param2,
        properties: [
          {
            label: "Job",
            text: this.id,
            url: `/orgs/${runStore.ctx.organization.slug}/projects/${runStore.ctx.project.slug}/jobs/${this.id}`
          },
          {
            label: "Env",
            text: runStore.ctx.environment.slug
          }
        ]
      });
    }
    if (runStore) {
      throw new Error("Cannot invoke a job from within a run without a cacheKey.");
    }
    return await triggerClient.invokeJob(this.id, param1, param2);
  }
  async invokeAndWaitForCompletion(cacheKey, payload, timeoutInSeconds = 60 * 60, options = {}) {
    const triggerClient = this.client;
    if (!triggerClient) {
      throw new Error("Cannot invoke a job that is not attached to a client. Make sure you attach the job to a client before invoking it.");
    }
    const runStore = runLocalStorage.getStore();
    if (!runStore) {
      throw new Error("Cannot invoke a job from outside of a run using invokeAndWaitForCompletion. Make sure you are running the job from within a run or use the invoke method instead.");
    }
    const { io, ctx } = runStore;
    return await io.runTask(cacheKey, async (task) => {
      const parsedPayload = this.trigger.event.parseInvokePayload ? this.trigger.event.parseInvokePayload(payload) ? payload : void 0 : payload;
      const result = await triggerClient.invokeJob(this.id, parsedPayload, {
        idempotencyKey: task.idempotencyKey,
        callbackUrl: task.callbackUrl ?? void 0,
        ...options
      });
      task.outputProperties = [
        {
          label: "Run",
          text: result.id,
          url: `/orgs/${ctx.organization.slug}/projects/${ctx.project.slug}/jobs/${this.id}/runs/${result.id}/trigger`
        }
      ];
      return {};
    }, {
      name: `Manually Invoke '${this.name}' and wait for completion`,
      params: payload,
      properties: [
        {
          label: "Job",
          text: this.id,
          url: `/orgs/${ctx.organization.slug}/projects/${ctx.project.slug}/jobs/${this.id}`
        },
        {
          label: "Env",
          text: ctx.environment.slug
        }
      ],
      callback: {
        enabled: true,
        timeoutInSeconds
      }
    });
  }
  async batchInvokeAndWaitForCompletion(cacheKey, batch) {
    const runStore = runLocalStorage.getStore();
    if (!runStore) {
      throw new Error("Cannot invoke a job from outside of a run using batchInvokeAndWaitForCompletion.");
    }
    if (batch.length === 0) {
      return [];
    }
    if (batch.length > 25) {
      throw new Error(`Cannot batch invoke more than 25 items. You tried to batch invoke ${batch.length} items.`);
    }
    const { io, ctx } = runStore;
    const results = await io.parallel(cacheKey, batch, async (item, index) => {
      return await this.invokeAndWaitForCompletion(String(index), item.payload, item.timeoutInSeconds ?? 60 * 60, item.options);
    }, {
      name: `Batch Invoke '${this.name}'`,
      properties: [
        {
          label: "Job",
          text: this.id,
          url: `/orgs/${ctx.organization.slug}/projects/${ctx.project.slug}/jobs/${this.id}`
        },
        {
          label: "Env",
          text: ctx.environment.slug
        }
      ]
    });
    return results;
  }
};
_validate = /* @__PURE__ */ new WeakSet();
validate_fn = /* @__PURE__ */ __name3(function() {
  if (!this.version.match(/^(\d+)\.(\d+)\.(\d+)$/)) {
    throw new Error(`Invalid job version: "${this.version}". Job versions must be valid semver versions.`);
  }
}, "#validate");
__name3(_Job, "Job");
var Job = _Job;
var version2 = "3.0.0-beta.56";
var _ResumeWithTaskError = class _ResumeWithTaskError2 {
  constructor(task) {
    this.task = task;
  }
};
__name3(_ResumeWithTaskError, "ResumeWithTaskError");
var ResumeWithTaskError = _ResumeWithTaskError;
var _ResumeWithParallelTaskError = class _ResumeWithParallelTaskError2 {
  constructor(task, childErrors) {
    this.task = task;
    this.childErrors = childErrors;
  }
};
__name3(_ResumeWithParallelTaskError, "ResumeWithParallelTaskError");
var ResumeWithParallelTaskError = _ResumeWithParallelTaskError;
var _RetryWithTaskError = class _RetryWithTaskError2 {
  constructor(cause, task, retryAt) {
    this.cause = cause;
    this.task = task;
    this.retryAt = retryAt;
  }
};
__name3(_RetryWithTaskError, "RetryWithTaskError");
var RetryWithTaskError = _RetryWithTaskError;
var _CanceledWithTaskError = class _CanceledWithTaskError2 {
  constructor(task) {
    this.task = task;
  }
};
__name3(_CanceledWithTaskError, "CanceledWithTaskError");
var CanceledWithTaskError = _CanceledWithTaskError;
var _YieldExecutionError = class _YieldExecutionError2 {
  constructor(key) {
    this.key = key;
  }
};
__name3(_YieldExecutionError, "YieldExecutionError");
var YieldExecutionError = _YieldExecutionError;
var _AutoYieldExecutionError = class _AutoYieldExecutionError2 {
  constructor(location, timeRemaining, timeElapsed) {
    this.location = location;
    this.timeRemaining = timeRemaining;
    this.timeElapsed = timeElapsed;
  }
};
__name3(_AutoYieldExecutionError, "AutoYieldExecutionError");
var AutoYieldExecutionError = _AutoYieldExecutionError;
var _AutoYieldWithCompletedTaskExecutionError = class _AutoYieldWithCompletedTaskExecutionError2 {
  constructor(id, properties, data, output) {
    this.id = id;
    this.properties = properties;
    this.data = data;
    this.output = output;
  }
};
__name3(_AutoYieldWithCompletedTaskExecutionError, "AutoYieldWithCompletedTaskExecutionError");
var AutoYieldWithCompletedTaskExecutionError = _AutoYieldWithCompletedTaskExecutionError;
var _AutoYieldRateLimitError = class _AutoYieldRateLimitError2 {
  constructor(resetAtTimestamp) {
    this.resetAtTimestamp = resetAtTimestamp;
  }
};
__name3(_AutoYieldRateLimitError, "AutoYieldRateLimitError");
var AutoYieldRateLimitError = _AutoYieldRateLimitError;
var _ParsedPayloadSchemaError = class _ParsedPayloadSchemaError2 {
  constructor(schemaErrors) {
    this.schemaErrors = schemaErrors;
  }
};
__name3(_ParsedPayloadSchemaError, "ParsedPayloadSchemaError");
var ParsedPayloadSchemaError = _ParsedPayloadSchemaError;
function isTriggerError(err) {
  return err instanceof ResumeWithTaskError || err instanceof RetryWithTaskError || err instanceof CanceledWithTaskError || err instanceof YieldExecutionError || err instanceof AutoYieldExecutionError || err instanceof AutoYieldWithCompletedTaskExecutionError || err instanceof AutoYieldRateLimitError || err instanceof ResumeWithParallelTaskError;
}
__name3(isTriggerError, "isTriggerError");
var _ErrorWithTask = class _ErrorWithTask2 extends Error {
  constructor(cause, message) {
    super(message);
    this.cause = cause;
  }
};
__name3(_ErrorWithTask, "ErrorWithTask");
var ErrorWithTask = _ErrorWithTask;
var _TriggerStatus = class _TriggerStatus2 {
  constructor(id, io) {
    this.id = id;
    this.io = io;
  }
  async update(key, status) {
    const properties = [];
    if (status.label) {
      properties.push({
        label: "Label",
        text: status.label
      });
    }
    if (status.state) {
      properties.push({
        label: "State",
        text: status.state
      });
    }
    return await this.io.runTask(key, async (task) => {
      return await this.io.triggerClient.updateStatus(this.io.runId, this.id, status);
    }, {
      name: status.label ?? `Status update`,
      icon: "bell",
      params: {
        ...status
      },
      properties
    });
  }
};
__name3(_TriggerStatus, "TriggerStatus");
var TriggerStatus = _TriggerStatus;
var EventSpecificationExampleSchema = import_zod2.z.object({
  id: import_zod2.z.string(),
  name: import_zod2.z.string(),
  icon: import_zod2.z.string().optional(),
  payload: import_zod2.z.any()
});
function waitForEventSchema(schema) {
  return import_zod2.z.object({
    id: import_zod2.z.string(),
    name: import_zod2.z.string(),
    source: import_zod2.z.string(),
    payload: schema,
    timestamp: import_zod2.z.coerce.date(),
    context: import_zod2.z.any().optional(),
    accountId: import_zod2.z.string().optional()
  });
}
__name3(waitForEventSchema, "waitForEventSchema");
var _namespacedKey;
var namespacedKey_fn;
var _sharedProperties;
var sharedProperties_fn;
var _KeyValueStore = class _KeyValueStore2 {
  constructor(apiClient, type = null, namespace = "") {
    __privateAdd2(this, _namespacedKey);
    __privateAdd2(this, _sharedProperties);
    this.apiClient = apiClient;
    this.type = type;
    this.namespace = namespace;
  }
  async delete(param1, param2) {
    const runStore = runLocalStorage.getStore();
    if (!runStore) {
      if (typeof param1 !== "string") {
        throw new Error("Please use the store without a cacheKey when accessing from outside a run.");
      }
      return await this.apiClient.store.delete(__privateMethod2(this, _namespacedKey, namespacedKey_fn).call(this, param1));
    }
    const { io } = runStore;
    if (!param2) {
      throw new Error("Please provide a non-empty key when accessing the store from inside a run.");
    }
    return await io.runTask(param1, async (task) => {
      return await this.apiClient.store.delete(__privateMethod2(this, _namespacedKey, namespacedKey_fn).call(this, param2));
    }, {
      name: "Key-Value Store Delete",
      icon: "database-minus",
      params: {
        key: param2
      },
      properties: __privateMethod2(this, _sharedProperties, sharedProperties_fn).call(this, param2),
      style: {
        style: "minimal"
      }
    });
  }
  async get(param1, param2) {
    const runStore = runLocalStorage.getStore();
    if (!runStore) {
      if (typeof param1 !== "string") {
        throw new Error("Please use the store without a cacheKey when accessing from outside a run.");
      }
      return await this.apiClient.store.get(__privateMethod2(this, _namespacedKey, namespacedKey_fn).call(this, param1));
    }
    const { io } = runStore;
    if (!param2) {
      throw new Error("Please provide a non-empty key when accessing the store from inside a run.");
    }
    return await io.runTask(param1, async (task) => {
      return await this.apiClient.store.get(__privateMethod2(this, _namespacedKey, namespacedKey_fn).call(this, param2));
    }, {
      name: "Key-Value Store Get",
      icon: "database-export",
      params: {
        key: param2
      },
      properties: __privateMethod2(this, _sharedProperties, sharedProperties_fn).call(this, param2),
      style: {
        style: "minimal"
      }
    });
  }
  async has(param1, param2) {
    const runStore = runLocalStorage.getStore();
    if (!runStore) {
      if (typeof param1 !== "string") {
        throw new Error("Please use the store without a cacheKey when accessing from outside a run.");
      }
      return await this.apiClient.store.has(__privateMethod2(this, _namespacedKey, namespacedKey_fn).call(this, param1));
    }
    const { io } = runStore;
    if (!param2) {
      throw new Error("Please provide a non-empty key when accessing the store from inside a run.");
    }
    return await io.runTask(param1, async (task) => {
      return await this.apiClient.store.has(__privateMethod2(this, _namespacedKey, namespacedKey_fn).call(this, param2));
    }, {
      name: "Key-Value Store Has",
      icon: "database-search",
      params: {
        key: param2
      },
      properties: __privateMethod2(this, _sharedProperties, sharedProperties_fn).call(this, param2),
      style: {
        style: "minimal"
      }
    });
  }
  async set(param1, param2, param3) {
    const runStore = runLocalStorage.getStore();
    if (!runStore) {
      if (typeof param1 !== "string") {
        throw new Error("Please use the store without a cacheKey when accessing from outside a run.");
      }
      return await this.apiClient.store.set(__privateMethod2(this, _namespacedKey, namespacedKey_fn).call(this, param1), param2);
    }
    const { io } = runStore;
    if (!param2 || typeof param2 !== "string") {
      throw new Error("Please provide a non-empty key when accessing the store from inside a run.");
    }
    const value = param3;
    return await io.runTask(param1, async (task) => {
      return await this.apiClient.store.set(__privateMethod2(this, _namespacedKey, namespacedKey_fn).call(this, param2), value);
    }, {
      name: "Key-Value Store Set",
      icon: "database-plus",
      params: {
        key: param2,
        value
      },
      properties: [
        ...__privateMethod2(this, _sharedProperties, sharedProperties_fn).call(this, param2),
        ...typeof value !== "object" || value === null ? [
          {
            label: "value",
            text: String(value) ?? "undefined"
          }
        ] : []
      ],
      style: {
        style: "minimal"
      }
    });
  }
};
_namespacedKey = /* @__PURE__ */ new WeakSet();
namespacedKey_fn = /* @__PURE__ */ __name3(function(key) {
  const parts = [];
  if (this.type) {
    parts.push(this.type);
  }
  if (this.namespace) {
    parts.push(this.namespace);
  }
  parts.push(key);
  return parts.join(":");
}, "#namespacedKey");
_sharedProperties = /* @__PURE__ */ new WeakSet();
sharedProperties_fn = /* @__PURE__ */ __name3(function(key1) {
  return [
    {
      label: "namespace",
      text: this.type ?? "env"
    },
    {
      label: "key",
      text: key1
    }
  ];
}, "#sharedProperties");
__name3(_KeyValueStore, "KeyValueStore");
var KeyValueStore = _KeyValueStore;
var _JSONOutputSerializer = class _JSONOutputSerializer2 {
  serialize(value) {
    return JSON.stringify(value);
  }
  deserialize(value) {
    return value ? JSON.parse(value) : void 0;
  }
};
__name3(_JSONOutputSerializer, "JSONOutputSerializer");
var JSONOutputSerializer = _JSONOutputSerializer;
var _addToCachedTasks;
var addToCachedTasks_fn;
var _doRunTask;
var doRunTask_fn;
var _doCompleteTask;
var doCompleteTask_fn;
var _detectAutoYield;
var detectAutoYield_fn;
var _forceYield;
var forceYield_fn;
var _getTimeElapsed;
var getTimeElapsed_fn;
var _getRemainingTimeInMillis;
var getRemainingTimeInMillis_fn;
var _IO = class _IO2 {
  constructor(options) {
    __privateAdd2(this, _addToCachedTasks);
    __privateAdd2(this, _doRunTask);
    __privateAdd2(this, _doCompleteTask);
    __privateAdd2(this, _detectAutoYield);
    __privateAdd2(this, _forceYield);
    __privateAdd2(this, _getTimeElapsed);
    __privateAdd2(this, _getRemainingTimeInMillis);
    __publicField2(this, "_outputSerializer", new JSONOutputSerializer());
    __publicField2(this, "_visitedCacheKeys", /* @__PURE__ */ new Set());
    __publicField2(this, "brb", this.yield.bind(this));
    this._id = options.id;
    this._jobId = options.jobId;
    this._apiClient = options.apiClient;
    this._triggerClient = options.client;
    this._logger = options.logger ?? new Logger("trigger.dev", options.logLevel);
    this._cachedTasks = /* @__PURE__ */ new Map();
    this._jobLogger = options.jobLogger;
    this._jobLogLevel = options.jobLogLevel;
    this._timeOrigin = options.timeOrigin;
    this._executionTimeout = options.executionTimeout;
    this._envStore = new KeyValueStore(options.apiClient);
    this._jobStore = new KeyValueStore(options.apiClient, "job", options.jobId);
    this._runStore = new KeyValueStore(options.apiClient, "run", options.id);
    this._stats = {
      initialCachedTasks: 0,
      lazyLoadedCachedTasks: 0,
      executedTasks: 0,
      cachedTaskHits: 0,
      cachedTaskMisses: 0,
      noopCachedTaskHits: 0,
      noopCachedTaskMisses: 0
    };
    if (options.cachedTasks) {
      options.cachedTasks.forEach((task) => {
        this._cachedTasks.set(task.idempotencyKey, task);
      });
      this._stats.initialCachedTasks = options.cachedTasks.length;
    }
    this._taskStorage = new import_node_async_hooks.AsyncLocalStorage();
    this._context = options.context;
    this._yieldedExecutions = options.yieldedExecutions ?? [];
    if (options.noopTasksSet) {
      this._noopTasksBloomFilter = BloomFilter.deserialize(options.noopTasksSet, BloomFilter.NOOP_TASK_SET_SIZE);
    }
    this._cachedTasksCursor = options.cachedTasksCursor;
    this._serverVersion = options.serverVersion ?? "unversioned";
  }
  get stats() {
    return this._stats;
  }
  /** @internal */
  get runId() {
    return this._id;
  }
  /** @internal */
  get triggerClient() {
    return this._triggerClient;
  }
  /** Used to send log messages to the [Run log](https://trigger.dev/docs/documentation/guides/viewing-runs). */
  get logger() {
    return new IOLogger(async (level, message, data) => {
      let logLevel = "info";
      if (data instanceof Error) {
        data = {
          name: data.name,
          message: data.message,
          stack: data.stack
        };
      }
      if (Logger.satisfiesLogLevel(logLevel, this._jobLogLevel)) {
        await this.runTask([
          message,
          level
        ], async (task) => {
          switch (level) {
            case "LOG": {
              this._jobLogger?.log(message, data);
              logLevel = "log";
              break;
            }
            case "DEBUG": {
              this._jobLogger?.debug(message, data);
              logLevel = "debug";
              break;
            }
            case "INFO": {
              this._jobLogger?.info(message, data);
              logLevel = "info";
              break;
            }
            case "WARN": {
              this._jobLogger?.warn(message, data);
              logLevel = "warn";
              break;
            }
            case "ERROR": {
              this._jobLogger?.error(message, data);
              logLevel = "error";
              break;
            }
          }
        }, {
          name: "log",
          icon: "log",
          description: message,
          params: data,
          properties: [
            {
              label: "Level",
              text: level
            }
          ],
          style: {
            style: "minimal",
            variant: level.toLowerCase()
          },
          noop: true
        });
      }
    });
  }
  /** `io.random()` is identical to `Math.random()` when called without options but ensures your random numbers are not regenerated on resume or retry. It will return a pseudo-random floating-point number between optional `min` (default: 0, inclusive) and `max` (default: 1, exclusive). Can optionally `round` to the nearest integer.
  * @param cacheKey Should be a stable and unique key inside the `run()`. See [resumability](https://trigger.dev/docs/documentation/concepts/resumability) for more information.
  * @param min Sets the lower bound (inclusive). Can't be higher than `max`.
  * @param max Sets the upper bound (exclusive). Can't be lower than `min`.
  * @param round Controls rounding to the nearest integer. Any `max` integer will become inclusive when enabled. Rounding with floating-point bounds may cause unexpected skew and boundary inclusivity.
  */
  async random(cacheKey, { min = 0, max = 1, round = false } = {}) {
    return await this.runTask(cacheKey, async (task) => {
      if (min > max) {
        throw new Error(`Lower bound can't be higher than upper bound - min: ${min}, max: ${max}`);
      }
      if (min === max) {
        await this.logger.warn(`Lower and upper bounds are identical. The return value is not random and will always be: ${min}`);
      }
      const withinBounds = (max - min) * Math.random() + min;
      if (!round) {
        return withinBounds;
      }
      if (!Number.isInteger(min) || !Number.isInteger(max)) {
        await this.logger.warn("Rounding enabled with floating-point bounds. This may cause unexpected skew and boundary inclusivity.");
      }
      const rounded = Math.round(withinBounds);
      return rounded;
    }, {
      name: "random",
      icon: "dice-5-filled",
      params: {
        min,
        max,
        round
      },
      properties: [
        ...min === 0 ? [] : [
          {
            label: "min",
            text: String(min)
          }
        ],
        ...max === 1 ? [] : [
          {
            label: "max",
            text: String(max)
          }
        ],
        ...round === false ? [] : [
          {
            label: "round",
            text: String(round)
          }
        ]
      ],
      style: {
        style: "minimal"
      }
    });
  }
  /** `io.wait()` waits for the specified amount of time before continuing the Job. Delays work even if you're on a serverless platform with timeouts, or if your server goes down. They utilize [resumability](https://trigger.dev/docs/documentation/concepts/resumability) to ensure that the Run can be resumed after the delay.
  * @param cacheKey Should be a stable and unique key inside the `run()`. See [resumability](https://trigger.dev/docs/documentation/concepts/resumability) for more information.
  * @param seconds The number of seconds to wait. This can be very long, serverless timeouts are not an issue.
  */
  async wait(cacheKey, seconds) {
    return await this.runTask(cacheKey, async (task) => {
    }, {
      name: "wait",
      icon: "clock",
      params: {
        seconds
      },
      noop: true,
      delayUntil: new Date(Date.now() + seconds * 1e3),
      style: {
        style: "minimal"
      }
    });
  }
  async waitForEvent(cacheKey, event, options) {
    const timeoutInSeconds = options?.timeoutInSeconds ?? 60 * 60;
    return await this.runTask(cacheKey, async (task, io) => {
      if (!task.callbackUrl) {
        throw new Error("No callbackUrl found on task");
      }
      await this.triggerClient.createEphemeralEventDispatcher({
        url: task.callbackUrl,
        name: event.name,
        filter: event.filter,
        contextFilter: event.contextFilter,
        source: event.source,
        accountId: event.accountId,
        timeoutInSeconds
      });
      return {};
    }, {
      name: "Wait for Event",
      icon: "custom-event",
      params: {
        name: event.name,
        source: event.source,
        filter: event.filter,
        contextFilter: event.contextFilter,
        accountId: event.accountId
      },
      callback: {
        enabled: true,
        timeoutInSeconds
      },
      properties: [
        {
          label: "Event",
          text: event.name
        },
        {
          label: "Timeout",
          text: `${timeoutInSeconds}s`
        },
        ...event.source ? [
          {
            label: "Source",
            text: event.source
          }
        ] : [],
        ...event.accountId ? [
          {
            label: "Account ID",
            text: event.accountId
          }
        ] : []
      ],
      parseOutput: (output) => {
        return waitForEventSchema(event.schema ?? import_zod2.z.any()).parse(output);
      }
    });
  }
  /** `io.waitForRequest()` allows you to pause the execution of a run until the url provided in the callback is POSTed to.
  *  This is useful for integrating with external services that require a callback URL to be provided, or if you want to be able to wait until an action is performed somewhere else in your system.
  *  @param cacheKey Should be a stable and unique key inside the `run()`. See [resumability](https://trigger.dev/docs/documentation/concepts/resumability) for more information.
  *  @param callback A callback function that will provide the unique URL to POST to.
  *  @param options Options for the callback.
  *  @param options.timeoutInSeconds How long to wait for the request to be POSTed to the callback URL before timing out. Defaults to 1hr.
  *  @returns The POSTed request JSON body.
  *  @example
  * ```ts
   const result = await io.waitForRequest<{ message: string }>(
     "wait-for-request",
     async (url, task) => {
       // Save the URL somewhere so you can POST to it later
       // Or send it to an external service that will POST to it
     },
     { timeoutInSeconds: 60 } // wait 60 seconds
   );
   * ```
  */
  async waitForRequest(cacheKey, callback, options) {
    const timeoutInSeconds = options?.timeoutInSeconds ?? 60 * 60;
    return await this.runTask(cacheKey, async (task, io) => {
      if (!task.callbackUrl) {
        throw new Error("No callbackUrl found on task");
      }
      task.outputProperties = [
        {
          label: "Callback URL",
          text: task.callbackUrl
        }
      ];
      return callback(task.callbackUrl);
    }, {
      name: "Wait for Request",
      icon: "clock",
      callback: {
        enabled: true,
        timeoutInSeconds: options?.timeoutInSeconds
      },
      properties: [
        {
          label: "Timeout",
          text: `${timeoutInSeconds}s`
        }
      ]
    });
  }
  /** `io.createStatus()` allows you to set a status with associated data during the Run. Statuses can be used by your UI using the react package 
     * @param cacheKey Should be a stable and unique key inside the `run()`. See [resumability](https://trigger.dev/docs/documentation/concepts/resumability) for more information.
     * @param initialStatus The initial status you want this status to have. You can update it during the rub using the returned object.
     * @returns a TriggerStatus object that you can call `update()` on, to update the status.
     * @example 
     * ```ts
     * client.defineJob(
    //...
      run: async (payload, io, ctx) => {
        const generatingImages = await io.createStatus("generating-images", {
          label: "Generating Images",
          state: "loading",
          data: {
            progress: 0.1,
          },
        });
  
        //...do stuff
  
        await generatingImages.update("completed-generation", {
          label: "Generated images",
          state: "success",
          data: {
            progress: 1.0,
            urls: ["http://..."]
          },
        });
  
      //...
    });
     * ```
    */
  async createStatus(cacheKey, initialStatus) {
    const id = typeof cacheKey === "string" ? cacheKey : cacheKey.join("-");
    const status = new TriggerStatus(id, this);
    await status.update(cacheKey, initialStatus);
    return status;
  }
  /** `io.backgroundFetch()` fetches data from a URL that can take longer that the serverless timeout. The actual `fetch` request is performed on the Trigger.dev platform, and the response is sent back to you.
  * @param cacheKey Should be a stable and unique key inside the `run()`. See [resumability](https://trigger.dev/docs/documentation/concepts/resumability) for more information.
  * @param url The URL to fetch from.
  * @param requestInit The options for the request
  * @param retry The options for retrying the request if it fails
  * An object where the key is a status code pattern and the value is a retrying strategy.
  * Supported patterns are:
  * - Specific status codes: 429
  * - Ranges: 500-599
  * - Wildcards: 2xx, 3xx, 4xx, 5xx
  */
  async backgroundFetch(cacheKey, url, requestInit, options) {
    const urlObject = new URL(url);
    return await this.runTask(cacheKey, async (task) => {
      console.log("task context", task.context);
      return task.output;
    }, {
      name: `fetch ${urlObject.hostname}${urlObject.pathname}`,
      params: {
        url,
        requestInit,
        retry: options?.retry,
        timeout: options?.timeout
      },
      operation: "fetch",
      icon: "background",
      noop: false,
      properties: [
        {
          label: "url",
          text: url,
          url
        },
        {
          label: "method",
          text: requestInit?.method ?? "GET"
        },
        {
          label: "background",
          text: "true"
        },
        ...options?.timeout ? [
          {
            label: "timeout",
            text: `${options.timeout.durationInMs}ms`
          }
        ] : []
      ],
      retry: {
        limit: 0
      }
    });
  }
  /** `io.backgroundPoll()` will fetch data from a URL on an interval. The actual `fetch` requests are performed on the Trigger.dev server, so you don't have to worry about serverless function timeouts.
  * @param cacheKey Should be a stable and unique key inside the `run()`. See [resumability](https://trigger.dev/docs/documentation/concepts/resumability) for more information.
  * @param params The options for the background poll
  * @param params.url The URL to fetch from.
  * @param params.requestInit The options for the request, like headers and method
  * @param params.responseFilter An [EventFilter](https://trigger.dev/docs/documentation/guides/event-filter) that allows you to specify when to stop polling.
  * @param params.interval The interval in seconds to poll the URL in seconds. Defaults to 10 seconds which is the minimum.
  * @param params.timeout The timeout in seconds for each request in seconds. Defaults to 10 minutes. Minimum is 60 seconds and max is 1 hour
  * @param params.requestTimeout An optional object that allows you to timeout individual fetch requests
  * @param params.requestTimeout An optional object that allows you to timeout individual fetch requests
  * @param params.requestTimeout.durationInMs The duration in milliseconds to timeout the request
  * 
  * @example
  * ```ts
  * const result = await io.backgroundPoll<{ id: string; status: string; }>("poll", {
     url: `http://localhost:3030/api/v1/runs/${run.id}`,
     requestInit: {
       headers: {
         Accept: "application/json",
         Authorization: redactString`Bearer ${process.env["TRIGGER_API_KEY"]!}`,
       },
     },
     interval: 10,
     timeout: 600,
     responseFilter: {
       status: [200],
       body: {
         status: ["SUCCESS"],
       },
     },
   });
   * ```
  */
  async backgroundPoll(cacheKey, params) {
    const urlObject = new URL(params.url);
    return await this.runTask(cacheKey, async (task) => {
      return task.output;
    }, {
      name: `poll ${urlObject.hostname}${urlObject.pathname}`,
      params,
      operation: "fetch-poll",
      icon: "clock-bolt",
      noop: false,
      properties: [
        {
          label: "url",
          text: params.url
        },
        {
          label: "interval",
          text: `${params.interval}s`
        },
        {
          label: "timeout",
          text: `${params.timeout}s`
        }
      ],
      retry: {
        limit: 0
      }
    });
  }
  /** `io.backgroundFetchResponse()` fetches data from a URL that can take longer that the serverless timeout. The actual `fetch` request is performed on the Trigger.dev platform, and the response is sent back to you.
  * @param cacheKey Should be a stable and unique key inside the `run()`. See [resumability](https://trigger.dev/docs/documentation/concepts/resumability) for more information.
  * @param url The URL to fetch from.
  * @param requestInit The options for the request
  * @param retry The options for retrying the request if it fails
  * An object where the key is a status code pattern and the value is a retrying strategy.
  * Supported patterns are:
  * - Specific status codes: 429
  * - Ranges: 500-599
  * - Wildcards: 2xx, 3xx, 4xx, 5xx
  */
  async backgroundFetchResponse(cacheKey, url, requestInit, options) {
    const urlObject = new URL(url);
    return await this.runTask(cacheKey, async (task) => {
      return task.output;
    }, {
      name: `fetch response ${urlObject.hostname}${urlObject.pathname}`,
      params: {
        url,
        requestInit,
        retry: options?.retry,
        timeout: options?.timeout
      },
      operation: "fetch-response",
      icon: "background",
      noop: false,
      properties: [
        {
          label: "url",
          text: url,
          url
        },
        {
          label: "method",
          text: requestInit?.method ?? "GET"
        },
        {
          label: "background",
          text: "true"
        },
        ...options?.timeout ? [
          {
            label: "timeout",
            text: `${options.timeout.durationInMs}ms`
          }
        ] : []
      ],
      retry: {
        limit: 0
      }
    });
  }
  /** `io.sendEvent()` allows you to send an event from inside a Job run. The sent event will trigger any Jobs that are listening for that event (based on the name).
  * @param cacheKey Should be a stable and unique key inside the `run()`. See [resumability](https://trigger.dev/docs/documentation/concepts/resumability) for more information.
  * @param event The event to send. The event name must match the name of the event that your Jobs are listening for.
  * @param options Options for sending the event.
  */
  async sendEvent(cacheKey, event, options) {
    return await this.runTask(cacheKey, async (task) => {
      return await this._triggerClient.sendEvent(event, options);
    }, {
      name: "Send Event",
      params: {
        event,
        options
      },
      icon: "send",
      properties: [
        {
          label: "name",
          text: event.name
        },
        ...event?.id ? [
          {
            label: "ID",
            text: event.id
          }
        ] : [],
        ...sendEventOptionsProperties(options)
      ]
    });
  }
  /** `io.sendEvents()` allows you to send multiple events from inside a Job run. The sent events will trigger any Jobs that are listening for those events (based on the name).
  * @param cacheKey Should be a stable and unique key inside the `run()`. See [resumability](https://trigger.dev/docs/documentation/concepts/resumability) for more information.
  * @param event The events to send. The event names must match the names of the events that your Jobs are listening for.
  * @param options Options for sending the events.
  */
  async sendEvents(cacheKey, events, options) {
    return await this.runTask(cacheKey, async (task) => {
      return await this._triggerClient.sendEvents(events, options);
    }, {
      name: "Send Multiple Events",
      params: {
        events,
        options
      },
      icon: "send",
      properties: [
        {
          label: "Total Events",
          text: String(events.length)
        },
        ...sendEventOptionsProperties(options)
      ]
    });
  }
  async getEvent(cacheKey, id) {
    return await this.runTask(cacheKey, async (task) => {
      return await this._triggerClient.getEvent(id);
    }, {
      name: "getEvent",
      params: {
        id
      },
      properties: [
        {
          label: "id",
          text: id
        }
      ]
    });
  }
  /** `io.cancelEvent()` allows you to cancel an event that was previously sent with `io.sendEvent()`. This will prevent any Jobs from running that are listening for that event if the event was sent with a delay
  * @param cacheKey
  * @param eventId
  * @returns
  */
  async cancelEvent(cacheKey, eventId) {
    return await this.runTask(cacheKey, async (task) => {
      return await this._triggerClient.cancelEvent(eventId);
    }, {
      name: "cancelEvent",
      params: {
        eventId
      },
      properties: [
        {
          label: "id",
          text: eventId
        }
      ]
    });
  }
  async updateSource(cacheKey, options) {
    return this.runTask(cacheKey, async (task) => {
      return await this._apiClient.updateSource(this._triggerClient.id, options.key, options);
    }, {
      name: "Update Source",
      description: "Update Source",
      properties: [
        {
          label: "key",
          text: options.key
        }
      ],
      params: options,
      redact: {
        paths: [
          "secret"
        ]
      }
    });
  }
  async updateWebhook(cacheKey, options) {
    return this.runTask(cacheKey, async (task) => {
      return await this._apiClient.updateWebhook(options.key, options);
    }, {
      name: "Update Webhook Source",
      icon: "refresh",
      properties: [
        {
          label: "key",
          text: options.key
        }
      ],
      params: options
    });
  }
  /** `io.registerInterval()` allows you to register a [DynamicSchedule](https://trigger.dev/docs/sdk/dynamicschedule) that will trigger any jobs it's attached to on a regular interval.
  * @param cacheKey Should be a stable and unique key inside the `run()`. See [resumability](https://trigger.dev/docs/documentation/concepts/resumability) for more information.
  * @param dynamicSchedule The [DynamicSchedule](https://trigger.dev/docs/sdk/dynamicschedule) to register a new schedule on.
  * @param id A unique id for the interval. This is used to identify and unregister the interval later.
  * @param options The options for the interval.
  * @returns A promise that has information about the interval.
  * @deprecated Use `DynamicSchedule.register` instead.
  */
  async registerInterval(cacheKey, dynamicSchedule, id, options) {
    return await this.runTask(cacheKey, async (task) => {
      return dynamicSchedule.register(id, {
        type: "interval",
        options
      });
    }, {
      name: "register-interval",
      properties: [
        {
          label: "schedule",
          text: dynamicSchedule.id
        },
        {
          label: "id",
          text: id
        },
        {
          label: "seconds",
          text: options.seconds.toString()
        }
      ],
      params: options
    });
  }
  /** `io.unregisterInterval()` allows you to unregister a [DynamicSchedule](https://trigger.dev/docs/sdk/dynamicschedule) that was previously registered with `io.registerInterval()`.
  * @param cacheKey Should be a stable and unique key inside the `run()`. See [resumability](https://trigger.dev/docs/documentation/concepts/resumability) for more information.
  * @param dynamicSchedule The [DynamicSchedule](https://trigger.dev/docs/sdk/dynamicschedule) to unregister a schedule on.
  * @param id A unique id for the interval. This is used to identify and unregister the interval later.
  * @deprecated Use `DynamicSchedule.unregister` instead.
  */
  async unregisterInterval(cacheKey, dynamicSchedule, id) {
    return await this.runTask(cacheKey, async (task) => {
      return dynamicSchedule.unregister(id);
    }, {
      name: "unregister-interval",
      properties: [
        {
          label: "schedule",
          text: dynamicSchedule.id
        },
        {
          label: "id",
          text: id
        }
      ]
    });
  }
  /** `io.registerCron()` allows you to register a [DynamicSchedule](https://trigger.dev/docs/sdk/dynamicschedule) that will trigger any jobs it's attached to on a regular CRON schedule.
  * @param cacheKey Should be a stable and unique key inside the `run()`. See [resumability](https://trigger.dev/docs/documentation/concepts/resumability) for more information.
  * @param dynamicSchedule The [DynamicSchedule](https://trigger.dev/docs/sdk/dynamicschedule) to register a new schedule on.
  * @param id A unique id for the schedule. This is used to identify and unregister the schedule later.
  * @param options The options for the CRON schedule.
  * @deprecated Use `DynamicSchedule.register` instead.
  */
  async registerCron(cacheKey, dynamicSchedule, id, options) {
    return await this.runTask(cacheKey, async (task) => {
      return dynamicSchedule.register(id, {
        type: "cron",
        options
      });
    }, {
      name: "register-cron",
      properties: [
        {
          label: "schedule",
          text: dynamicSchedule.id
        },
        {
          label: "id",
          text: id
        },
        {
          label: "cron",
          text: options.cron
        }
      ],
      params: options
    });
  }
  /** `io.unregisterCron()` allows you to unregister a [DynamicSchedule](https://trigger.dev/docs/sdk/dynamicschedule) that was previously registered with `io.registerCron()`.
  * @param cacheKey Should be a stable and unique key inside the `run()`. See [resumability](https://trigger.dev/docs/documentation/concepts/resumability) for more information.
  * @param dynamicSchedule The [DynamicSchedule](https://trigger.dev/docs/sdk/dynamicschedule) to unregister a schedule on.
  * @param id A unique id for the interval. This is used to identify and unregister the interval later.
  * @deprecated Use `DynamicSchedule.unregister` instead.
  */
  async unregisterCron(cacheKey, dynamicSchedule, id) {
    return await this.runTask(cacheKey, async (task) => {
      return dynamicSchedule.unregister(id);
    }, {
      name: "unregister-cron",
      properties: [
        {
          label: "schedule",
          text: dynamicSchedule.id
        },
        {
          label: "id",
          text: id
        }
      ]
    });
  }
  /** `io.registerTrigger()` allows you to register a [DynamicTrigger](https://trigger.dev/docs/sdk/dynamictrigger) with the specified trigger params.
  * @param cacheKey Should be a stable and unique key inside the `run()`. See [resumability](https://trigger.dev/docs/documentation/concepts/resumability) for more information.
  * @param trigger The [DynamicTrigger](https://trigger.dev/docs/sdk/dynamictrigger) to register.
  * @param id A unique id for the trigger. This is used to identify and unregister the trigger later.
  * @param params The params for the trigger.
  * @deprecated Use `DynamicTrigger.register` instead.
  */
  async registerTrigger(cacheKey, trigger, id, params) {
    return await this.runTask(cacheKey, async (task) => {
      const registration = await this.runTask("register-source", async (subtask1) => {
        return trigger.register(id, params);
      }, {
        name: "register-source"
      });
      return {
        id: registration.id,
        key: registration.source.key
      };
    }, {
      name: "register-trigger",
      properties: [
        {
          label: "trigger",
          text: trigger.id
        },
        {
          label: "id",
          text: id
        }
      ],
      params
    });
  }
  async getAuth(cacheKey, clientId) {
    if (!clientId) {
      return;
    }
    return this.runTask(cacheKey, async (task) => {
      return await this._triggerClient.getAuth(clientId);
    }, {
      name: "get-auth"
    });
  }
  async parallel(cacheKey, items, callback, options) {
    const results = await this.runTask(cacheKey, async (task) => {
      const outcomes = await Promise.allSettled(items.map((item, index) => spaceOut(() => callback(item, index), index, 15)));
      if (outcomes.every((outcome) => outcome.status === "fulfilled")) {
        return outcomes.map((outcome) => outcome.value);
      }
      const nonInternalErrors = outcomes.filter((outcome) => outcome.status === "rejected" && !isTriggerError(outcome.reason)).map((outcome) => outcome);
      if (nonInternalErrors.length > 0) {
        throw nonInternalErrors[0].reason;
      }
      const internalErrors = outcomes.filter((outcome) => outcome.status === "rejected" && isTriggerError(outcome.reason)).map((outcome) => outcome).map((outcome) => outcome.reason);
      throw new ResumeWithParallelTaskError(task, internalErrors);
    }, {
      name: "parallel",
      parallel: true,
      ...options ?? {}
    });
    return results;
  }
  /** `io.runTask()` allows you to run a [Task](https://trigger.dev/docs/documentation/concepts/tasks) from inside a Job run. A Task is a resumable unit of a Run that can be retried, resumed and is logged. [Integrations](https://trigger.dev/docs/integrations) use Tasks internally to perform their actions.
  *
  * @param cacheKey Should be a stable and unique key inside the `run()`. See [resumability](https://trigger.dev/docs/documentation/concepts/resumability) for more information.
  * @param callback The callback that will be called when the Task is run. The callback receives the Task and the IO as parameters.
  * @param options The options of how you'd like to run and log the Task.
  * @param onError The callback that will be called when the Task fails. The callback receives the error, the Task and the IO as parameters. If you wish to retry then return an object with a `retryAt` property.
  * @returns A Promise that resolves with the returned value of the callback.
  */
  async runTask(cacheKey, callback, options, onError) {
    const parentId = this._taskStorage.getStore()?.taskId;
    if (parentId) {
      this._logger.debug("Using parent task", {
        parentId,
        cacheKey,
        options
      });
    }
    const isSubtaskNoop = options?.noop === true && parentId !== void 0;
    if (!isSubtaskNoop) {
      __privateMethod2(this, _detectAutoYield, detectAutoYield_fn).call(this, "start_task", 500);
    }
    const idempotencyKey = await generateIdempotencyKey([
      this._id,
      parentId ?? "",
      cacheKey
    ].flat());
    if (this._visitedCacheKeys.has(idempotencyKey)) {
      if (typeof cacheKey === "string") {
        throw new Error(`Task with cacheKey "${cacheKey}" has already been executed in this run. Each task must have a unique cacheKey.`);
      } else {
        throw new Error(`Task with cacheKey "${cacheKey.join("-")}" has already been executed in this run. Each task must have a unique cacheKey.`);
      }
    }
    this._visitedCacheKeys.add(idempotencyKey);
    const cachedTask = this._cachedTasks.get(idempotencyKey);
    if (cachedTask && cachedTask.status === "COMPLETED") {
      this._logger.debug("Using completed cached task", {
        idempotencyKey
      });
      this._stats.cachedTaskHits++;
      return options?.parseOutput ? options.parseOutput(cachedTask.output) : cachedTask.output;
    }
    if (options?.noop && this._noopTasksBloomFilter) {
      if (this._noopTasksBloomFilter.test(idempotencyKey)) {
        this._logger.debug("task idempotency key exists in noopTasksBloomFilter", {
          idempotencyKey
        });
        this._stats.noopCachedTaskHits++;
        return {};
      }
    }
    const runOptions = {
      ...options ?? {},
      parseOutput: void 0
    };
    const response = await __privateMethod2(this, _doRunTask, doRunTask_fn).call(this, {
      idempotencyKey,
      displayKey: typeof cacheKey === "string" ? cacheKey : void 0,
      noop: false,
      ...runOptions ?? {},
      parentId
    });
    if (!response) {
      __privateMethod2(this, _forceYield, forceYield_fn).call(this, "failed_task_run");
      throw new Error("Failed to run task");
    }
    const task = response.version === API_VERSIONS.LAZY_LOADED_CACHED_TASKS ? response.body.task : response.body;
    if (task.forceYield) {
      this._logger.debug("Forcing yield after run task", {
        idempotencyKey
      });
      __privateMethod2(this, _forceYield, forceYield_fn).call(this, "after_run_task");
    }
    if (response.version === API_VERSIONS.LAZY_LOADED_CACHED_TASKS) {
      this._cachedTasksCursor = response.body.cachedTasks?.cursor;
      for (const cachedTask2 of response.body.cachedTasks?.tasks ?? []) {
        if (!this._cachedTasks.has(cachedTask2.idempotencyKey)) {
          this._cachedTasks.set(cachedTask2.idempotencyKey, cachedTask2);
          this._logger.debug("Injecting lazy loaded task into task cache", {
            idempotencyKey: cachedTask2.idempotencyKey
          });
          this._stats.lazyLoadedCachedTasks++;
        }
      }
    }
    if (task.status === "CANCELED") {
      this._logger.debug("Task canceled", {
        idempotencyKey,
        task
      });
      throw new CanceledWithTaskError(task);
    }
    if (task.status === "COMPLETED") {
      if (task.noop) {
        this._logger.debug("Noop Task completed", {
          idempotencyKey
        });
        this._noopTasksBloomFilter?.add(task.idempotencyKey);
      } else {
        this._logger.debug("Cache miss", {
          idempotencyKey
        });
        this._stats.cachedTaskMisses++;
        __privateMethod2(this, _addToCachedTasks, addToCachedTasks_fn).call(this, task);
      }
      return options?.parseOutput ? options.parseOutput(task.output) : task.output;
    }
    if (task.status === "ERRORED") {
      this._logger.debug("Task errored", {
        idempotencyKey,
        task
      });
      throw new ErrorWithTask(task, task.error ?? task?.output ? JSON.stringify(task.output) : "Task errored");
    }
    __privateMethod2(this, _detectAutoYield, detectAutoYield_fn).call(this, "before_execute_task", 1500);
    const executeTask = /* @__PURE__ */ __name3(async () => {
      try {
        const result = await callback(task, this);
        if (task.status === "WAITING" && task.callbackUrl) {
          this._logger.debug("Waiting for remote callback", {
            idempotencyKey,
            task
          });
          return {};
        }
        const output = this._outputSerializer.serialize(result);
        this._logger.debug("Completing using output", {
          idempotencyKey,
          task
        });
        __privateMethod2(this, _detectAutoYield, detectAutoYield_fn).call(this, "before_complete_task", 500, task, output);
        const completedTask = await __privateMethod2(this, _doCompleteTask, doCompleteTask_fn).call(this, task.id, {
          output,
          properties: task.outputProperties ?? void 0
        });
        if (!completedTask) {
          __privateMethod2(this, _forceYield, forceYield_fn).call(this, "before_complete_task", task, output);
          throw new Error("Failed to complete task");
        }
        if (completedTask.forceYield) {
          this._logger.debug("Forcing yield after task completed", {
            idempotencyKey
          });
          __privateMethod2(this, _forceYield, forceYield_fn).call(this, "after_complete_task");
        }
        this._stats.executedTasks++;
        if (completedTask.status === "CANCELED") {
          throw new CanceledWithTaskError(completedTask);
        }
        __privateMethod2(this, _detectAutoYield, detectAutoYield_fn).call(this, "after_complete_task", 500);
        const deserializedOutput = this._outputSerializer.deserialize(output);
        return options?.parseOutput ? options.parseOutput(deserializedOutput) : deserializedOutput;
      } catch (error) {
        if (isTriggerError(error)) {
          throw error;
        }
        let skipRetrying = false;
        if (onError) {
          try {
            const onErrorResult = onError(error, task, this);
            if (onErrorResult) {
              if (onErrorResult instanceof Error) {
                error = onErrorResult;
              } else {
                skipRetrying = !!onErrorResult.skipRetrying;
                if (onErrorResult.retryAt && !skipRetrying) {
                  const parsedError2 = ErrorWithStackSchema.safeParse(onErrorResult.error);
                  throw new RetryWithTaskError(parsedError2.success ? parsedError2.data : {
                    message: "Unknown error"
                  }, task, onErrorResult.retryAt);
                }
              }
            }
          } catch (innerError) {
            if (isTriggerError(innerError)) {
              throw innerError;
            }
            error = innerError;
          }
        }
        if (error instanceof ErrorWithTask) {
          await this._apiClient.failTask(this._id, task.id, {
            error: error.cause.output
          });
          throw error;
        }
        const parsedError = ErrorWithStackSchema.safeParse(error);
        if (options?.retry && !skipRetrying) {
          const retryAt = calculateRetryAt(options.retry, task.attempts - 1);
          if (retryAt) {
            throw new RetryWithTaskError(parsedError.success ? parsedError.data : {
              message: "Unknown error"
            }, task, retryAt);
          }
        }
        if (parsedError.success) {
          await this._apiClient.failTask(this._id, task.id, {
            error: parsedError.data
          });
        } else {
          const message = typeof error === "string" ? error : JSON.stringify(error);
          await this._apiClient.failTask(this._id, task.id, {
            error: {
              name: "Unknown error",
              message
            }
          });
        }
        throw error;
      }
    }, "executeTask");
    if (task.status === "WAITING") {
      this._logger.debug("Task waiting", {
        idempotencyKey,
        task
      });
      if (task.callbackUrl) {
        await this._taskStorage.run({
          taskId: task.id
        }, executeTask);
      }
      throw new ResumeWithTaskError(task);
    }
    if (task.status === "RUNNING" && typeof task.operation === "string") {
      this._logger.debug("Task running operation", {
        idempotencyKey,
        task
      });
      throw new ResumeWithTaskError(task);
    }
    return this._taskStorage.run({
      taskId: task.id
    }, executeTask);
  }
  /**
  * `io.yield()` allows you to yield execution of the current run and resume it in a new function execution. Similar to `io.wait()` but does not create a task and resumes execution immediately.
  */
  yield(cacheKey) {
    if (!supportsFeature("yieldExecution", this._serverVersion)) {
      console.warn("[trigger.dev] io.yield() is not support by the version of the Trigger.dev server you are using, you will need to upgrade your self-hosted Trigger.dev instance.");
      return;
    }
    if (this._yieldedExecutions.includes(cacheKey)) {
      return;
    }
    throw new YieldExecutionError(cacheKey);
  }
  /** `io.try()` allows you to run Tasks and catch any errors that are thrown, it's similar to a normal `try/catch` block but works with [io.runTask()](https://trigger.dev/docs/sdk/io/runtask).
  * A regular `try/catch` block on its own won't work as expected with Tasks. Internally `runTask()` throws some special errors to control flow execution. This is necessary to deal with resumability, serverless timeouts, and retrying Tasks.
  * @param tryCallback The code you wish to run
  * @param catchCallback Thhis will be called if the Task fails. The callback receives the error
  * @returns A Promise that resolves with the returned value or the error
  */
  async try(tryCallback, catchCallback) {
    try {
      return await tryCallback();
    } catch (error) {
      if (isTriggerError(error)) {
        throw error;
      }
      return await catchCallback(error);
    }
  }
  get store() {
    return {
      env: this._envStore,
      job: this._jobStore,
      run: this._runStore
    };
  }
};
_addToCachedTasks = /* @__PURE__ */ new WeakSet();
addToCachedTasks_fn = /* @__PURE__ */ __name3(function(task) {
  this._cachedTasks.set(task.idempotencyKey, task);
}, "#addToCachedTasks");
_doRunTask = /* @__PURE__ */ new WeakSet();
doRunTask_fn = /* @__PURE__ */ __name3(async function(task1) {
  try {
    return await this._apiClient.runTask(this._id, task1, {
      cachedTasksCursor: this._cachedTasksCursor
    });
  } catch (error) {
    if (error instanceof AutoYieldRateLimitError) {
      this._logger.debug("AutoYieldRateLimitError", {
        error
      });
      throw error;
    }
    return;
  }
}, "#doRunTask");
_doCompleteTask = /* @__PURE__ */ new WeakSet();
doCompleteTask_fn = /* @__PURE__ */ __name3(async function(id, task2) {
  try {
    return await this._apiClient.completeTask(this._id, id, task2);
  } catch (error) {
    return;
  }
}, "#doCompleteTask");
_detectAutoYield = /* @__PURE__ */ new WeakSet();
detectAutoYield_fn = /* @__PURE__ */ __name3(function(location, threshold = 1500, task3, output) {
  const timeRemaining = __privateMethod2(this, _getRemainingTimeInMillis, getRemainingTimeInMillis_fn).call(this);
  if (timeRemaining && timeRemaining < threshold) {
    if (task3) {
      throw new AutoYieldWithCompletedTaskExecutionError(task3.id, task3.outputProperties ?? [], {
        location,
        timeRemaining,
        timeElapsed: __privateMethod2(this, _getTimeElapsed, getTimeElapsed_fn).call(this)
      }, output);
    } else {
      throw new AutoYieldExecutionError(location, timeRemaining, __privateMethod2(this, _getTimeElapsed, getTimeElapsed_fn).call(this));
    }
  }
}, "#detectAutoYield");
_forceYield = /* @__PURE__ */ new WeakSet();
forceYield_fn = /* @__PURE__ */ __name3(function(location1, task4, output1) {
  const timeRemaining = __privateMethod2(this, _getRemainingTimeInMillis, getRemainingTimeInMillis_fn).call(this);
  if (timeRemaining) {
    if (task4) {
      throw new AutoYieldWithCompletedTaskExecutionError(task4.id, task4.outputProperties ?? [], {
        location: location1,
        timeRemaining,
        timeElapsed: __privateMethod2(this, _getTimeElapsed, getTimeElapsed_fn).call(this)
      }, output1);
    } else {
      throw new AutoYieldExecutionError(location1, timeRemaining, __privateMethod2(this, _getTimeElapsed, getTimeElapsed_fn).call(this));
    }
  }
}, "#forceYield");
_getTimeElapsed = /* @__PURE__ */ new WeakSet();
getTimeElapsed_fn = /* @__PURE__ */ __name3(function() {
  return performance.now() - this._timeOrigin;
}, "#getTimeElapsed");
_getRemainingTimeInMillis = /* @__PURE__ */ new WeakSet();
getRemainingTimeInMillis_fn = /* @__PURE__ */ __name3(function() {
  if (this._executionTimeout) {
    return this._executionTimeout - (performance.now() - this._timeOrigin);
  }
  return void 0;
}, "#getRemainingTimeInMillis");
__name3(_IO, "IO");
var IO = _IO;
async function generateIdempotencyKey(keyMaterial) {
  const keys = keyMaterial.map((key2) => {
    if (typeof key2 === "string") {
      return key2;
    }
    return stableStringify(key2);
  });
  const key = keys.join(":");
  const hash = await import_node_crypto.webcrypto.subtle.digest("SHA-256", import_node_buffer2.Buffer.from(key));
  return import_node_buffer2.Buffer.from(hash).toString("hex");
}
__name3(generateIdempotencyKey, "generateIdempotencyKey");
function stableStringify(obj) {
  function sortKeys(obj2) {
    if (typeof obj2 !== "object" || obj2 === null) {
      return obj2;
    }
    if (Array.isArray(obj2)) {
      return obj2.map(sortKeys);
    }
    const sortedKeys = Object.keys(obj2).sort();
    const sortedObj2 = {};
    for (const key of sortedKeys) {
      sortedObj2[key] = sortKeys(obj2[key]);
    }
    return sortedObj2;
  }
  __name3(sortKeys, "sortKeys");
  const sortedObj = sortKeys(obj);
  return JSON.stringify(sortedObj);
}
__name3(stableStringify, "stableStringify");
var _IOLogger = class _IOLogger2 {
  constructor(callback) {
    this.callback = callback;
  }
  /** Log: essential messages */
  log(message, properties) {
    return this.callback("LOG", message, properties);
  }
  /** For debugging: the least important log level */
  debug(message, properties) {
    return this.callback("DEBUG", message, properties);
  }
  /** Info: the second least important log level */
  info(message, properties) {
    return this.callback("INFO", message, properties);
  }
  /** Warnings: the third most important log level  */
  warn(message, properties) {
    return this.callback("WARN", message, properties);
  }
  /** Error: The second most important log level */
  error(message, properties) {
    return this.callback("ERROR", message, properties);
  }
};
__name3(_IOLogger, "IOLogger");
var IOLogger = _IOLogger;
async function spaceOut(callback, index, delay) {
  await new Promise((resolve) => setTimeout(resolve, index * delay));
  return await callback();
}
__name3(spaceOut, "spaceOut");
function sendEventOptionsProperties(options) {
  return [
    ...options?.accountId ? [
      {
        label: "Account ID",
        text: options.accountId
      }
    ] : [],
    ...options?.deliverAfter ? [
      {
        label: "Deliver After",
        text: `${options.deliverAfter}s`
      }
    ] : [],
    ...options?.deliverAt ? [
      {
        label: "Deliver At",
        text: options.deliverAt.toISOString()
      }
    ] : []
  ];
}
__name3(sendEventOptionsProperties, "sendEventOptionsProperties");
var _serializer;
var _namespacedKey2;
var namespacedKey_fn2;
var _KeyValueStoreClient = class _KeyValueStoreClient2 {
  constructor(queryStore, type = null, namespace = "") {
    __privateAdd2(this, _namespacedKey2);
    __privateAdd2(this, _serializer, void 0);
    this.queryStore = queryStore;
    this.type = type;
    this.namespace = namespace;
    __privateSet2(this, _serializer, new JSONOutputSerializer());
  }
  async delete(key) {
    const result = await this.queryStore("DELETE", {
      key: __privateMethod2(this, _namespacedKey2, namespacedKey_fn2).call(this, key)
    });
    if (result.action !== "DELETE") {
      throw new Error(`Unexpected key-value store response: ${result.action}`);
    }
    return result.deleted;
  }
  async get(key) {
    const result = await this.queryStore("GET", {
      key: __privateMethod2(this, _namespacedKey2, namespacedKey_fn2).call(this, key)
    });
    if (result.action !== "GET") {
      throw new Error(`Unexpected key-value store response: ${result.action}`);
    }
    return __privateGet2(this, _serializer).deserialize(result.value);
  }
  async has(key) {
    const result = await this.queryStore("HAS", {
      key: __privateMethod2(this, _namespacedKey2, namespacedKey_fn2).call(this, key)
    });
    if (result.action !== "HAS") {
      throw new Error(`Unexpected key-value store response: ${result.action}`);
    }
    return result.has;
  }
  async set(key, value) {
    const result = await this.queryStore("SET", {
      key: __privateMethod2(this, _namespacedKey2, namespacedKey_fn2).call(this, key),
      value: __privateGet2(this, _serializer).serialize(value)
    });
    if (result.action !== "SET") {
      throw new Error(`Unexpected key-value store response: ${result.action}`);
    }
    return __privateGet2(this, _serializer).deserialize(result.value);
  }
};
_serializer = /* @__PURE__ */ new WeakMap();
_namespacedKey2 = /* @__PURE__ */ new WeakSet();
namespacedKey_fn2 = /* @__PURE__ */ __name3(function(key) {
  const parts = [];
  if (this.type) {
    parts.push(this.type);
  }
  if (this.namespace) {
    parts.push(this.namespace);
  }
  parts.push(key);
  return parts.join(":");
}, "#namespacedKey");
__name3(_KeyValueStoreClient, "KeyValueStoreClient");
var KeyValueStoreClient = _KeyValueStoreClient;
var _UnknownVersionError = class _UnknownVersionError2 extends Error {
  constructor(version22) {
    super(`Unknown version ${version22}`);
  }
};
__name3(_UnknownVersionError, "UnknownVersionError");
var UnknownVersionError = _UnknownVersionError;
var MAX_RETRIES = 8;
var EXPONENT_FACTOR = 2;
var MIN_DELAY_IN_MS = 80;
var MAX_DELAY_IN_MS = 2e3;
var JITTER_IN_MS = 50;
var _apiUrl;
var _options;
var _logger;
var _storeClient;
var _queryKeyValueStore;
var queryKeyValueStore_fn;
var _apiKey;
var apiKey_fn;
var _ApiClient = class _ApiClient2 {
  constructor(options) {
    __privateAdd2(this, _queryKeyValueStore);
    __privateAdd2(this, _apiKey);
    __privateAdd2(this, _apiUrl, void 0);
    __privateAdd2(this, _options, void 0);
    __privateAdd2(this, _logger, void 0);
    __privateAdd2(this, _storeClient, void 0);
    __privateSet2(this, _options, options);
    __privateSet2(this, _apiUrl, __privateGet2(this, _options).apiUrl ?? import_node_process2.env.TRIGGER_API_URL ?? "https://api.trigger.dev");
    __privateSet2(this, _logger, new Logger("trigger.dev", __privateGet2(this, _options).logLevel));
    __privateSet2(this, _storeClient, new KeyValueStoreClient(__privateMethod2(this, _queryKeyValueStore, queryKeyValueStore_fn).bind(this)));
  }
  async registerEndpoint(options) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("Registering endpoint", {
      url: options.url,
      name: options.name
    });
    const response = await fetch(`${__privateGet2(this, _apiUrl)}/api/v1/endpoints`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        url: options.url,
        name: options.name
      })
    });
    if (response.status >= 400 && response.status < 500) {
      const body = await response.json();
      throw new Error(body.error);
    }
    if (response.status !== 200) {
      throw new Error(`Failed to register entry point, got status code ${response.status}`);
    }
    return await response.json();
  }
  async runTask(runId, task, options = {}) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug(`[ApiClient] runTask ${task.displayKey}`);
    return await zodfetchWithVersions(__privateGet2(this, _logger), {
      [API_VERSIONS.LAZY_LOADED_CACHED_TASKS]: RunTaskResponseWithCachedTasksBodySchema
    }, ServerTaskSchema, `${__privateGet2(this, _apiUrl)}/api/v1/runs/${runId}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "Idempotency-Key": task.idempotencyKey,
        "X-Cached-Tasks-Cursor": options.cachedTasksCursor ?? "",
        "Trigger-Version": API_VERSIONS.LAZY_LOADED_CACHED_TASKS
      },
      body: JSON.stringify(task)
    });
  }
  async completeTask(runId, id, task) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("Complete Task", {
      task
    });
    return await zodfetch(ServerTaskSchema, `${__privateGet2(this, _apiUrl)}/api/v1/runs/${runId}/tasks/${id}/complete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "Trigger-Version": API_VERSIONS.SERIALIZED_TASK_OUTPUT
      },
      body: JSON.stringify(task)
    });
  }
  async failTask(runId, id, body) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("Fail Task", {
      id,
      runId,
      body
    });
    return await zodfetch(ServerTaskSchema, `${__privateGet2(this, _apiUrl)}/api/v1/runs/${runId}/tasks/${id}/fail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
    });
  }
  async sendEvent(event, options = {}) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("Sending event", {
      event
    });
    return await zodfetch(ApiEventLogSchema, `${__privateGet2(this, _apiUrl)}/api/v1/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        event,
        options
      })
    });
  }
  async sendEvents(events, options = {}) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("Sending multiple events", {
      events
    });
    return await zodfetch(ApiEventLogSchema.array(), `${__privateGet2(this, _apiUrl)}/api/v1/events/bulk`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        events,
        options
      })
    });
  }
  async cancelEvent(eventId) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("Cancelling event", {
      eventId
    });
    return await zodfetch(ApiEventLogSchema, `${__privateGet2(this, _apiUrl)}/api/v1/events/${eventId}/cancel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      }
    });
  }
  async cancelRunsForEvent(eventId) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("Cancelling runs for event", {
      eventId
    });
    return await zodfetch(CancelRunsForEventSchema, `${__privateGet2(this, _apiUrl)}/api/v1/events/${eventId}/cancel-runs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      }
    });
  }
  async updateStatus(runId, id, status) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("Update status", {
      id,
      status
    });
    return await zodfetch(JobRunStatusRecordSchema, `${__privateGet2(this, _apiUrl)}/api/v1/runs/${runId}/statuses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(status)
    });
  }
  async updateSource(client2, key, source) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("activating http source", {
      source
    });
    const response = await zodfetch(TriggerSourceSchema, `${__privateGet2(this, _apiUrl)}/api/v2/${client2}/sources/${key}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(source)
    });
    return response;
  }
  async updateWebhook(key, webhookData) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("activating webhook", {
      webhookData
    });
    const response = await zodfetch(TriggerSourceSchema, `${__privateGet2(this, _apiUrl)}/api/v1/webhooks/${key}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(webhookData)
    });
    return response;
  }
  async registerTrigger(client2, id, key, payload, idempotencyKey) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("registering trigger", {
      id,
      payload
    });
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    };
    if (idempotencyKey) {
      headers["Idempotency-Key"] = idempotencyKey;
    }
    const response = await zodfetch(RegisterSourceEventSchemaV2, `${__privateGet2(this, _apiUrl)}/api/v2/${client2}/triggers/${id}/registrations/${key}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(payload)
    });
    return response;
  }
  async registerSchedule(client2, id, key, payload) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("registering schedule", {
      id,
      payload
    });
    const response = await zodfetch(RegisterScheduleResponseBodySchema, `${__privateGet2(this, _apiUrl)}/api/v1/${client2}/schedules/${id}/registrations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        id: key,
        ...payload
      })
    });
    return response;
  }
  async unregisterSchedule(client2, id, key) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("unregistering schedule", {
      id
    });
    const response = await zodfetch(import_zod2.z.object({
      ok: import_zod2.z.boolean()
    }), `${__privateGet2(this, _apiUrl)}/api/v1/${client2}/schedules/${id}/registrations/${encodeURIComponent(key)}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      }
    });
    return response;
  }
  async getAuth(client2, id) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("getting auth", {
      id
    });
    const response = await zodfetch(ConnectionAuthSchema, `${__privateGet2(this, _apiUrl)}/api/v1/${client2}/auth/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`
      }
    }, {
      optional: true
    });
    return response;
  }
  async getEvent(eventId) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("Getting Event", {
      eventId
    });
    return await zodfetch(GetEventSchema, `${__privateGet2(this, _apiUrl)}/api/v2/events/${eventId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
  }
  async getRun(runId, options) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("Getting Run", {
      runId
    });
    return await zodfetch(GetRunSchema, urlWithSearchParams(`${__privateGet2(this, _apiUrl)}/api/v2/runs/${runId}`, options), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
  }
  async cancelRun(runId) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("Cancelling Run", {
      runId
    });
    return await zodfetch(GetRunSchema, `${__privateGet2(this, _apiUrl)}/api/v1/runs/${runId}/cancel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      }
    });
  }
  async getRunStatuses(runId) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("Getting Run statuses", {
      runId
    });
    return await zodfetch(GetRunStatusesSchema, `${__privateGet2(this, _apiUrl)}/api/v2/runs/${runId}/statuses`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
  }
  async getRuns(jobSlug, options) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("Getting Runs", {
      jobSlug
    });
    return await zodfetch(GetRunsSchema, urlWithSearchParams(`${__privateGet2(this, _apiUrl)}/api/v1/jobs/${jobSlug}/runs`, options), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
  }
  async invokeJob(jobId, payload, options = {}) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("Invoking Job", {
      jobId
    });
    const body = {
      payload,
      context: options.context ?? {},
      options: {
        accountId: options.accountId,
        callbackUrl: options.callbackUrl
      }
    };
    return await zodfetch(InvokeJobResponseSchema, `${__privateGet2(this, _apiUrl)}/api/v1/jobs/${jobId}/invoke`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        ...options.idempotencyKey ? {
          "Idempotency-Key": options.idempotencyKey
        } : {}
      },
      body: JSON.stringify(body)
    });
  }
  async cancelRunsForJob(jobId) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("Cancelling Runs for Job", {
      jobId
    });
    return await zodfetch(CancelRunsForJobSchema, `${__privateGet2(this, _apiUrl)}/api/v1/jobs/${jobId}/cancel-runs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      }
    });
  }
  async createEphemeralEventDispatcher(payload) {
    const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
    __privateGet2(this, _logger).debug("Creating ephemeral event dispatcher", {
      payload
    });
    const response = await zodfetch(EphemeralEventDispatcherResponseBodySchema, `${__privateGet2(this, _apiUrl)}/api/v1/event-dispatchers/ephemeral`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });
    return response;
  }
  get store() {
    return __privateGet2(this, _storeClient);
  }
};
_apiUrl = /* @__PURE__ */ new WeakMap();
_options = /* @__PURE__ */ new WeakMap();
_logger = /* @__PURE__ */ new WeakMap();
_storeClient = /* @__PURE__ */ new WeakMap();
_queryKeyValueStore = /* @__PURE__ */ new WeakSet();
queryKeyValueStore_fn = /* @__PURE__ */ __name3(async function(action, data) {
  const apiKey = await __privateMethod2(this, _apiKey, apiKey_fn).call(this);
  __privateGet2(this, _logger).debug("accessing key-value store", {
    action,
    data
  });
  const encodedKey = encodeURIComponent(data.key);
  const STORE_URL = `${__privateGet2(this, _apiUrl)}/api/v1/store/${encodedKey}`;
  const authHeader = {
    Authorization: `Bearer ${apiKey}`
  };
  let requestInit;
  switch (action) {
    case "DELETE": {
      requestInit = {
        method: "DELETE",
        headers: authHeader
      };
      break;
    }
    case "GET": {
      requestInit = {
        method: "GET",
        headers: authHeader
      };
      break;
    }
    case "HAS": {
      const headResponse = await fetchHead(STORE_URL, {
        headers: authHeader
      });
      return {
        action: "HAS",
        key: encodedKey,
        has: !!headResponse.ok
      };
    }
    case "SET": {
      const MAX_BODY_BYTE_LENGTH = 256 * 1024;
      if ((data.value?.length ?? 0) > MAX_BODY_BYTE_LENGTH) {
        throw new Error(`Max request body size exceeded: ${MAX_BODY_BYTE_LENGTH} bytes`);
      }
      requestInit = {
        method: "PUT",
        headers: {
          ...authHeader,
          "Content-Type": "text/plain"
        },
        body: data.value
      };
      break;
    }
    default: {
      assertExhaustive(action);
    }
  }
  const response = await zodfetch(KeyValueStoreResponseBodySchema, STORE_URL, requestInit);
  return response;
}, "#queryKeyValueStore");
_apiKey = /* @__PURE__ */ new WeakSet();
apiKey_fn = /* @__PURE__ */ __name3(async function() {
  const apiKey = getApiKey(__privateGet2(this, _options).apiKey);
  if (apiKey.status === "invalid") {
    throw new Error("Invalid API key");
  } else if (apiKey.status === "missing") {
    throw new Error("Missing API key");
  }
  return apiKey.apiKey;
}, "#apiKey");
__name3(_ApiClient, "ApiClient");
var ApiClient = _ApiClient;
function getApiKey(key) {
  const apiKey = key ?? import_node_process2.env.TRIGGER_API_KEY;
  if (!apiKey) {
    return {
      status: "missing"
    };
  }
  const isValid = apiKey.match(/^tr_[a-z]+_[a-zA-Z0-9]+$/);
  if (!isValid) {
    return {
      status: "invalid",
      apiKey
    };
  }
  return {
    status: "valid",
    apiKey
  };
}
__name3(getApiKey, "getApiKey");
async function zodfetchWithVersions(logger2, versionedSchemaMap, unversionedSchema, url, requestInit, options, retryCount = 0) {
  try {
    const fullRequestInit = requestInitWithCache(requestInit);
    const response = await fetch(url, fullRequestInit);
    logger2.debug(`[ApiClient] zodfetchWithVersions ${url} (attempt ${retryCount + 1})`, {
      url,
      retryCount,
      requestHeaders: fullRequestInit?.headers,
      responseHeaders: Object.fromEntries(response.headers.entries())
    });
    if ((!requestInit || requestInit.method === "GET") && response.status === 404 && options?.optional) {
      return;
    }
    if (response.status === 429) {
      const retryAfter = response.headers.get("x-ratelimit-reset");
      if (retryAfter) {
        throw new AutoYieldRateLimitError(parseInt(retryAfter));
      }
    }
    if (response.status >= 400 && response.status < 500) {
      const rawBody = await safeResponseText(response);
      const body = safeJsonParse(rawBody);
      logger2.error(`[ApiClient] zodfetchWithVersions failed with ${response.status}`, {
        url,
        retryCount,
        requestHeaders: fullRequestInit?.headers,
        responseHeaders: Object.fromEntries(response.headers.entries()),
        status: response.status,
        rawBody
      });
      if (body && body.error) {
        throw new Error(body.error);
      } else {
        throw new Error(rawBody);
      }
    }
    if (response.status >= 500 && retryCount < MAX_RETRIES) {
      const delay = exponentialBackoff(retryCount + 1);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return zodfetchWithVersions(logger2, versionedSchemaMap, unversionedSchema, url, requestInit, options, retryCount + 1);
    }
    if (response.status !== 200) {
      const rawBody = await safeResponseText(response);
      logger2.error(`[ApiClient] zodfetchWithVersions failed with ${response.status}`, {
        url,
        retryCount,
        requestHeaders: fullRequestInit?.headers,
        responseHeaders: Object.fromEntries(response.headers.entries()),
        status: response.status,
        rawBody
      });
      throw new Error(options?.errorMessage ?? `Failed to fetch ${url}, got status code ${response.status}`);
    }
    const jsonBody = await response.json();
    const version22 = response.headers.get("trigger-version");
    if (!version22) {
      return {
        version: "unversioned",
        body: unversionedSchema.parse(jsonBody)
      };
    }
    const versionedSchema = versionedSchemaMap[version22];
    if (!versionedSchema) {
      throw new UnknownVersionError(version22);
    }
    return {
      version: version22,
      body: versionedSchema.parse(jsonBody)
    };
  } catch (error) {
    if (error instanceof UnknownVersionError || error instanceof AutoYieldRateLimitError) {
      throw error;
    }
    logger2.error(`[ApiClient] zodfetchWithVersions failed with a connection error`, {
      url,
      retryCount,
      error
    });
    if (retryCount < MAX_RETRIES) {
      const delay = exponentialBackoff(retryCount + 1);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return zodfetchWithVersions(logger2, versionedSchemaMap, unversionedSchema, url, requestInit, options, retryCount + 1);
    }
    throw error;
  }
}
__name3(zodfetchWithVersions, "zodfetchWithVersions");
function requestInitWithCache(requestInit) {
  try {
    const withCache = {
      ...requestInit,
      cache: "no-cache"
    };
    const _ = new Request("http://localhost", withCache);
    return withCache;
  } catch (error) {
    return requestInit ?? {};
  }
}
__name3(requestInitWithCache, "requestInitWithCache");
async function fetchHead(url, requestInitWithoutMethod, retryCount = 0) {
  const requestInit = {
    ...requestInitWithoutMethod,
    method: "HEAD"
  };
  const response = await fetch(url, requestInitWithCache(requestInit));
  if (response.status >= 500 && retryCount < MAX_RETRIES) {
    const delay = exponentialBackoff(retryCount + 1);
    await new Promise((resolve) => setTimeout(resolve, delay));
    return fetchHead(url, requestInitWithoutMethod, retryCount + 1);
  }
  return response;
}
__name3(fetchHead, "fetchHead");
async function zodfetch(schema, url, requestInit, options, retryCount = 0) {
  try {
    const response = await fetch(url, requestInitWithCache(requestInit));
    if ((!requestInit || requestInit.method === "GET") && response.status === 404 && options?.optional) {
      return;
    }
    if (response.status === 429) {
      const retryAfter = response.headers.get("x-ratelimit-reset");
      if (retryAfter) {
        throw new AutoYieldRateLimitError(parseInt(retryAfter));
      }
    }
    if (response.status >= 400 && response.status < 500) {
      const body = await response.json();
      throw new Error(body.error);
    }
    if (response.status >= 500 && retryCount < MAX_RETRIES) {
      const delay = exponentialBackoff(retryCount + 1);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return zodfetch(schema, url, requestInit, options, retryCount + 1);
    }
    if (response.status !== 200) {
      throw new Error(options?.errorMessage ?? `Failed to fetch ${url}, got status code ${response.status}`);
    }
    const jsonBody = await response.json();
    return schema.parse(jsonBody);
  } catch (error) {
    if (error instanceof AutoYieldRateLimitError) {
      throw error;
    }
    if (retryCount < MAX_RETRIES) {
      const delay = exponentialBackoff(retryCount + 1);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return zodfetch(schema, url, requestInit, options, retryCount + 1);
    }
    throw error;
  }
}
__name3(zodfetch, "zodfetch");
function exponentialBackoff(retryCount) {
  const delay = Math.min(Math.pow(EXPONENT_FACTOR, retryCount) * MIN_DELAY_IN_MS, MAX_DELAY_IN_MS);
  const jitterValue = Math.random() * JITTER_IN_MS;
  return delay + jitterValue;
}
__name3(exponentialBackoff, "exponentialBackoff");
function safeJsonParse(rawBody) {
  try {
    return JSON.parse(rawBody);
  } catch (error) {
    return;
  }
}
__name3(safeJsonParse, "safeJsonParse");
async function safeResponseText(response) {
  try {
    return await response.text();
  } catch (error) {
    return "";
  }
}
__name3(safeResponseText, "safeResponseText");
var _ConcurrencyLimit = class _ConcurrencyLimit2 {
  constructor(options) {
    this.options = options;
  }
  get id() {
    return this.options.id;
  }
  get limit() {
    return this.options.limit;
  }
};
__name3(_ConcurrencyLimit, "ConcurrencyLimit");
var ConcurrencyLimit = _ConcurrencyLimit;
function formatSchemaErrors(errors) {
  return errors.map((error) => {
    const { path, message } = error;
    return {
      path: path.map(String),
      message
    };
  });
}
__name3(formatSchemaErrors, "formatSchemaErrors");
var _HttpEndpoint = class _HttpEndpoint2 {
  constructor(options) {
    this.options = options;
  }
  get id() {
    return this.options.id;
  }
  onRequest(options) {
    return new HttpTrigger({
      endpointId: this.id,
      event: this.options.event,
      filter: options?.filter,
      verify: this.options.verify
    });
  }
  // @internal
  async handleRequest(request) {
    if (!this.options.respondWith)
      return;
    return this.options.respondWith.handler(request, () => {
      const clonedRequest = request.clone();
      return this.options.verify(clonedRequest);
    });
  }
  toJSON() {
    return {
      id: this.id,
      icon: this.options.event.icon,
      version: "1",
      enabled: this.options.enabled ?? true,
      event: this.options.event,
      immediateResponseFilter: this.options.respondWith?.filter,
      skipTriggeringRuns: this.options.respondWith?.skipTriggeringRuns,
      source: this.options.event.source
    };
  }
};
__name3(_HttpEndpoint, "HttpEndpoint");
var HttpEndpoint = _HttpEndpoint;
var _a;
var HttpTrigger = (_a = class {
  constructor(options) {
    this.options = options;
  }
  toJSON() {
    return {
      type: "static",
      title: this.options.endpointId,
      properties: this.options.event.properties,
      rule: {
        event: `httpendpoint.${this.options.endpointId}`,
        payload: this.options.filter ?? {},
        source: this.options.event.source
      },
      link: `http-endpoints/${this.options.endpointId}`,
      help: {
        noRuns: {
          text: "To start triggering runs click here to setup your HTTP Endpoint with the external API service you want to receive webhooks from.",
          link: `http-endpoints/${this.options.endpointId}`
        }
      }
    };
  }
  get event() {
    return this.options.event;
  }
  attachToJob(triggerClient, job) {
  }
  get preprocessRuns() {
    return false;
  }
  async verifyPayload(payload) {
    const clonedRequest = payload.clone();
    return this.options.verify(clonedRequest);
  }
}, __name3(_a, "HttpTrigger"), _a);
function httpEndpoint(options) {
  const id = slugifyId(options.id);
  return new HttpEndpoint({
    id,
    enabled: options.enabled,
    respondWith: options.respondWith,
    verify: options.verify,
    event: {
      name: id,
      title: options.title ?? "HTTP Trigger",
      source: options.source,
      icon: options.icon ?? "webhook",
      properties: options.properties,
      examples: options.examples ? options.examples : [
        {
          id: "basic-request",
          name: "Basic Request",
          icon: "http-post",
          payload: {
            url: "https://cloud.trigger.dev",
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            rawBody: JSON.stringify({
              foo: "bar"
            })
          }
        }
      ],
      parsePayload: (rawPayload) => {
        const result = RequestWithRawBodySchema.safeParse(rawPayload);
        if (!result.success) {
          throw new ParsedPayloadSchemaError(formatSchemaErrors(result.error.issues));
        }
        return new Request(new URL(result.data.url), {
          method: result.data.method,
          headers: result.data.headers,
          body: result.data.rawBody
        });
      }
    }
  });
}
__name3(httpEndpoint, "httpEndpoint");
function createIOWithIntegrations(io, auths, integrations) {
  if (!integrations) {
    return io;
  }
  const connections = Object.entries(integrations).reduce((acc, [connectionKey, integration]) => {
    let auth = auths?.[connectionKey];
    acc[connectionKey] = {
      integration,
      auth
    };
    return acc;
  }, {});
  return new Proxy(io, {
    get(target, prop, receiver) {
      if (prop === "__io") {
        return io;
      }
      if (typeof prop === "string" && prop in connections) {
        const { integration, auth } = connections[prop];
        return integration.cloneForRun(io, prop, auth);
      }
      const value = Reflect.get(target, prop, receiver);
      return typeof value == "function" ? value.bind(target) : value;
    }
  });
}
__name3(createIOWithIntegrations, "createIOWithIntegrations");
var _client;
var _options2;
var _DynamicTrigger = class _DynamicTrigger2 {
  /** `DynamicTrigger` allows you to define a trigger that can be configured dynamically at runtime.
  * @param client The `TriggerClient` instance to use for registering the trigger.
  * @param options The options for the dynamic trigger.
  * */
  constructor(client2, options) {
    __privateAdd2(this, _client, void 0);
    __privateAdd2(this, _options2, void 0);
    __privateSet2(this, _client, client2);
    __privateSet2(this, _options2, options);
    this.source = options.source;
    client2.attachDynamicTrigger(this);
  }
  toJSON() {
    return {
      type: "dynamic",
      id: __privateGet2(this, _options2).id
    };
  }
  get id() {
    return __privateGet2(this, _options2).id;
  }
  get event() {
    return __privateGet2(this, _options2).event;
  }
  // @internal
  registeredTriggerForParams(params, options = {}) {
    const key = slugifyId(this.source.key(params));
    return {
      rule: {
        event: this.event.name,
        source: this.event.source,
        payload: deepMergeFilters(this.source.filter(params), this.event.filter ?? {}, options.filter ?? {})
      },
      source: {
        version: "2",
        key,
        channel: this.source.channel,
        params,
        //todo add other options here
        options: {
          event: typeof this.event.name === "string" ? [
            this.event.name
          ] : this.event.name
        },
        integration: {
          id: this.source.integration.id,
          metadata: this.source.integration.metadata,
          authSource: this.source.integration.authSource
        }
      },
      accountId: options.accountId
    };
  }
  /** Use this method to register a new configuration with the DynamicTrigger.
  * @param key The key for the configuration. This will be used to identify the configuration when it is triggered.
  * @param params The params for the configuration.
  * @param options Options for the configuration.
  * @param options.accountId The accountId to associate with the configuration.
  * @param options.filter The filter to use for the configuration.
  *
  */
  async register(key, params, options = {}) {
    const runStore = runLocalStorage.getStore();
    if (!runStore) {
      return __privateGet2(this, _client).registerTrigger(this.id, key, this.registeredTriggerForParams(params, options));
    }
    const { io } = runStore;
    return await io.runTask([
      key,
      "register"
    ], async (task) => {
      return __privateGet2(this, _client).registerTrigger(this.id, key, this.registeredTriggerForParams(params, options), task.idempotencyKey);
    }, {
      name: "Register Dynamic Trigger",
      properties: [
        {
          label: "Dynamic Trigger ID",
          text: this.id
        },
        {
          label: "ID",
          text: key
        }
      ],
      params
    });
  }
  attachToJob(triggerClient, job) {
    triggerClient.attachJobToDynamicTrigger(job, this);
  }
  get preprocessRuns() {
    return true;
  }
  async verifyPayload(payload) {
    return {
      success: true
    };
  }
};
_client = /* @__PURE__ */ new WeakMap();
_options2 = /* @__PURE__ */ new WeakMap();
__name3(_DynamicTrigger, "DynamicTrigger");
var DynamicTrigger = _DynamicTrigger;
var _options3;
var _EventTrigger = class _EventTrigger2 {
  constructor(options) {
    __privateAdd2(this, _options3, void 0);
    __privateSet2(this, _options3, options);
  }
  toJSON() {
    return {
      type: "static",
      title: __privateGet2(this, _options3).name ?? __privateGet2(this, _options3).event.title,
      rule: {
        event: __privateGet2(this, _options3).name ?? __privateGet2(this, _options3).event.name,
        source: __privateGet2(this, _options3).source ?? "trigger.dev",
        payload: deepMergeFilters(__privateGet2(this, _options3).filter ?? {}, __privateGet2(this, _options3).event.filter ?? {})
      }
    };
  }
  get event() {
    return __privateGet2(this, _options3).event;
  }
  attachToJob(triggerClient, job) {
  }
  get preprocessRuns() {
    return false;
  }
  async verifyPayload(payload) {
    if (__privateGet2(this, _options3).verify) {
      if (payload instanceof Request) {
        const clonedRequest = payload.clone();
        return __privateGet2(this, _options3).verify(clonedRequest);
      }
    }
    return {
      success: true
    };
  }
};
_options3 = /* @__PURE__ */ new WeakMap();
__name3(_EventTrigger, "EventTrigger");
var EventTrigger = _EventTrigger;
function eventTrigger(options) {
  return new EventTrigger({
    name: options.name,
    filter: options.filter,
    source: options.source,
    event: {
      name: options.name,
      title: "Event",
      source: options.source ?? "trigger.dev",
      icon: "custom-event",
      examples: options.examples,
      parsePayload: (rawPayload) => {
        if (options.schema) {
          const results = options.schema.safeParse(rawPayload);
          if (!results.success) {
            throw new ParsedPayloadSchemaError(formatSchemaErrors(results.error.issues));
          }
          return results.data;
        }
        return rawPayload;
      }
    }
  });
}
__name3(eventTrigger, "eventTrigger");
var examples = [
  {
    id: "now",
    name: "Now",
    icon: "clock",
    payload: {
      ts: currentDate.marker,
      lastTimestamp: currentDate.marker
    }
  }
];
var _IntervalTrigger = class _IntervalTrigger2 {
  constructor(options) {
    this.options = options;
  }
  get event() {
    return {
      name: "trigger.scheduled",
      title: "Schedule",
      source: "trigger.dev",
      icon: "schedule-interval",
      examples,
      parsePayload: ScheduledPayloadSchema.parse,
      properties: [
        {
          label: "Interval",
          text: `${this.options.seconds}s`
        }
      ]
    };
  }
  attachToJob(triggerClient, job) {
  }
  get preprocessRuns() {
    return false;
  }
  async verifyPayload(payload) {
    return {
      success: true
    };
  }
  toJSON() {
    return {
      type: "scheduled",
      schedule: {
        type: "interval",
        options: {
          seconds: this.options.seconds
        }
      }
    };
  }
};
__name3(_IntervalTrigger, "IntervalTrigger");
var IntervalTrigger = _IntervalTrigger;
function intervalTrigger(options) {
  return new IntervalTrigger(options);
}
__name3(intervalTrigger, "intervalTrigger");
var _CronTrigger = class _CronTrigger2 {
  constructor(options) {
    this.options = options;
  }
  get event() {
    const humanReadable = import_cronstrue.default.toString(this.options.cron, {
      throwExceptionOnParseError: false
    }).concat(" (UTC)");
    return {
      name: "trigger.scheduled",
      title: "Cron Schedule",
      source: "trigger.dev",
      icon: "schedule-cron",
      examples,
      parsePayload: ScheduledPayloadSchema.parse,
      properties: [
        {
          label: "cron",
          text: this.options.cron
        },
        {
          label: "Schedule",
          text: humanReadable
        }
      ]
    };
  }
  attachToJob(triggerClient, job) {
  }
  get preprocessRuns() {
    return false;
  }
  async verifyPayload(payload) {
    return {
      success: true
    };
  }
  toJSON() {
    return {
      type: "scheduled",
      schedule: {
        type: "cron",
        options: {
          cron: this.options.cron
        }
      }
    };
  }
};
__name3(_CronTrigger, "CronTrigger");
var CronTrigger = _CronTrigger;
function cronTrigger(options) {
  return new CronTrigger(options);
}
__name3(cronTrigger, "cronTrigger");
var _DynamicSchedule = class _DynamicSchedule2 {
  /**
  * @param client The `TriggerClient` instance to use for registering the trigger.
  * @param options The options for the schedule.
  */
  constructor(client2, options) {
    this.client = client2;
    this.options = options;
    client2.attachDynamicSchedule(this.options.id);
  }
  get id() {
    return this.options.id;
  }
  get event() {
    return {
      name: "trigger.scheduled",
      title: "Dynamic Schedule",
      source: "trigger.dev",
      icon: "schedule-dynamic",
      examples,
      parsePayload: ScheduledPayloadSchema.parse
    };
  }
  async register(key, metadata) {
    const runStore = runLocalStorage.getStore();
    if (!runStore) {
      return this.client.registerSchedule(this.id, key, metadata);
    }
    const { io } = runStore;
    return await io.runTask([
      key,
      "register"
    ], async (task) => {
      return this.client.registerSchedule(this.id, key, metadata);
    }, {
      name: "Register Schedule",
      icon: metadata.type === "cron" ? "schedule-cron" : "schedule-interval",
      properties: [
        {
          label: "Dynamic Schedule",
          text: this.id
        },
        {
          label: "Schedule ID",
          text: key
        }
      ],
      params: metadata
    });
  }
  async unregister(key) {
    const runStore = runLocalStorage.getStore();
    if (!runStore) {
      return this.client.unregisterSchedule(this.id, key);
    }
    const { io } = runStore;
    return await io.runTask([
      key,
      "unregister"
    ], async (task) => {
      return this.client.unregisterSchedule(this.id, key);
    }, {
      name: "Unregister Schedule",
      icon: "schedule",
      properties: [
        {
          label: "Dynamic Schedule",
          text: this.id
        },
        {
          label: "Schedule ID",
          text: key
        }
      ]
    });
  }
  attachToJob(triggerClient, job) {
    triggerClient.attachDynamicScheduleToJob(this.options.id, job);
  }
  get preprocessRuns() {
    return false;
  }
  async verifyPayload(payload) {
    return {
      success: true
    };
  }
  toJSON() {
    return {
      type: "dynamic",
      id: this.options.id
    };
  }
};
__name3(_DynamicSchedule, "DynamicSchedule");
var DynamicSchedule = _DynamicSchedule;
var registerWebhookEvent = /* @__PURE__ */ __name3((key) => ({
  name: `${REGISTER_WEBHOOK}.${key}`,
  title: "Register Webhook",
  source: "internal",
  icon: "webhook",
  parsePayload: RegisterWebhookPayloadSchema.parse
}), "registerWebhookEvent");
var registerSourceEvent = {
  name: REGISTER_SOURCE_EVENT_V2,
  title: "Register Source",
  source: "internal",
  icon: "register-source",
  parsePayload: RegisterSourceEventSchemaV2.parse
};
var _options4;
var _registeredJobs;
var _registeredSources;
var _registeredWebhooks;
var _registeredHttpSourceHandlers;
var _registeredWebhookSourceHandlers;
var _registeredDynamicTriggers;
var _jobMetadataByDynamicTriggers;
var _registeredSchedules;
var _registeredHttpEndpoints;
var _authResolvers;
var _envStore;
var _eventEmitter;
var _client2;
var _internalLogger;
var _preprocessRun;
var preprocessRun_fn;
var _executeJob;
var executeJob_fn;
var _convertErrorToExecutionResponse;
var convertErrorToExecutionResponse_fn;
var _createRunContext;
var createRunContext_fn;
var _createPreprocessRunContext;
var createPreprocessRunContext_fn;
var _handleHttpSourceRequest;
var handleHttpSourceRequest_fn;
var _handleHttpEndpointRequestForResponse;
var handleHttpEndpointRequestForResponse_fn;
var _handleWebhookRequest;
var handleWebhookRequest_fn;
var _resolveConnections;
var resolveConnections_fn;
var _resolveConnection;
var resolveConnection_fn;
var _buildJobsIndex;
var buildJobsIndex_fn;
var _buildJobIndex;
var buildJobIndex_fn;
var _buildJobIntegrations;
var buildJobIntegrations_fn;
var _buildJobIntegration;
var buildJobIntegration_fn;
var _logIOStats;
var logIOStats_fn;
var _standardResponseHeaders;
var standardResponseHeaders_fn;
var _serializeRunMetadata;
var serializeRunMetadata_fn;
var _deliverSuccessfulRunNotification;
var deliverSuccessfulRunNotification_fn;
var _deliverFailedRunNotification;
var deliverFailedRunNotification_fn;
var _TriggerClient = class _TriggerClient2 {
  constructor(options) {
    __privateAdd2(this, _preprocessRun);
    __privateAdd2(this, _executeJob);
    __privateAdd2(this, _convertErrorToExecutionResponse);
    __privateAdd2(this, _createRunContext);
    __privateAdd2(this, _createPreprocessRunContext);
    __privateAdd2(this, _handleHttpSourceRequest);
    __privateAdd2(this, _handleHttpEndpointRequestForResponse);
    __privateAdd2(this, _handleWebhookRequest);
    __privateAdd2(this, _resolveConnections);
    __privateAdd2(this, _resolveConnection);
    __privateAdd2(this, _buildJobsIndex);
    __privateAdd2(this, _buildJobIndex);
    __privateAdd2(this, _buildJobIntegrations);
    __privateAdd2(this, _buildJobIntegration);
    __privateAdd2(this, _logIOStats);
    __privateAdd2(this, _standardResponseHeaders);
    __privateAdd2(this, _serializeRunMetadata);
    __privateAdd2(this, _deliverSuccessfulRunNotification);
    __privateAdd2(this, _deliverFailedRunNotification);
    __privateAdd2(this, _options4, void 0);
    __privateAdd2(this, _registeredJobs, {});
    __privateAdd2(this, _registeredSources, {});
    __privateAdd2(this, _registeredWebhooks, {});
    __privateAdd2(this, _registeredHttpSourceHandlers, {});
    __privateAdd2(this, _registeredWebhookSourceHandlers, {});
    __privateAdd2(this, _registeredDynamicTriggers, {});
    __privateAdd2(this, _jobMetadataByDynamicTriggers, {});
    __privateAdd2(this, _registeredSchedules, {});
    __privateAdd2(this, _registeredHttpEndpoints, {});
    __privateAdd2(this, _authResolvers, {});
    __privateAdd2(this, _envStore, void 0);
    __privateAdd2(this, _eventEmitter, new import_node_events.default());
    __privateAdd2(this, _client2, void 0);
    __privateAdd2(this, _internalLogger, void 0);
    __publicField2(this, "on", __privateGet2(this, _eventEmitter).on.bind(__privateGet2(this, _eventEmitter)));
    this.id = options.id;
    __privateSet2(this, _options4, options);
    __privateSet2(this, _internalLogger, new Logger("trigger.dev", __privateGet2(this, _options4).verbose ? "debug" : "log", [
      "output",
      "noopTasksSet"
    ]));
    __privateSet2(this, _client2, new ApiClient({
      logLevel: __privateGet2(this, _options4).verbose ? "debug" : "log",
      ...__privateGet2(this, _options4)
    }));
    __privateSet2(this, _envStore, new KeyValueStore(__privateGet2(this, _client2)));
  }
  async handleRequest(request, timeOrigin = performance.now()) {
    __privateGet2(this, _internalLogger).debug("handling request", {
      url: request.url,
      headers: Object.fromEntries(request.headers.entries()),
      method: request.method
    });
    const apiKey = request.headers.get("x-trigger-api-key");
    const triggerVersion = request.headers.get("x-trigger-version");
    const authorization = this.authorized(apiKey);
    switch (authorization) {
      case "authorized": {
        break;
      }
      case "missing-client": {
        return {
          status: 401,
          body: {
            message: "Unauthorized: client missing apiKey"
          },
          headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
        };
      }
      case "missing-header": {
        return {
          status: 401,
          body: {
            message: "Unauthorized: missing x-trigger-api-key header"
          },
          headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
        };
      }
      case "unauthorized": {
        return {
          status: 401,
          body: {
            message: `Forbidden: client apiKey mismatch: Make sure you are using the correct API Key for your environment`
          },
          headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
        };
      }
    }
    if (request.method !== "POST") {
      return {
        status: 405,
        body: {
          message: "Method not allowed (only POST is allowed)"
        },
        headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
      };
    }
    const action = request.headers.get("x-trigger-action");
    if (!action) {
      return {
        status: 400,
        body: {
          message: "Missing x-trigger-action header"
        },
        headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
      };
    }
    switch (action) {
      case "PING": {
        const endpointId = request.headers.get("x-trigger-endpoint-id");
        if (!endpointId) {
          return {
            status: 200,
            body: {
              ok: false,
              error: "Missing endpoint ID"
            },
            headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
          };
        }
        if (this.id !== endpointId) {
          return {
            status: 200,
            body: {
              ok: false,
              error: `Endpoint ID mismatch error. Expected ${this.id}, got ${endpointId}`
            },
            headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
          };
        }
        return {
          status: 200,
          body: {
            ok: true
          },
          headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
        };
      }
      case "INDEX_ENDPOINT": {
        const body = {
          jobs: __privateMethod2(this, _buildJobsIndex, buildJobsIndex_fn).call(this),
          sources: Object.values(__privateGet2(this, _registeredSources)),
          webhooks: Object.values(__privateGet2(this, _registeredWebhooks)),
          dynamicTriggers: Object.values(__privateGet2(this, _registeredDynamicTriggers)).map((trigger) => ({
            id: trigger.id,
            jobs: __privateGet2(this, _jobMetadataByDynamicTriggers)[trigger.id] ?? [],
            registerSourceJob: {
              id: dynamicTriggerRegisterSourceJobId(trigger.id),
              version: trigger.source.version
            }
          })),
          dynamicSchedules: Object.entries(__privateGet2(this, _registeredSchedules)).map(([id, jobs]) => ({
            id,
            jobs
          })),
          httpEndpoints: Object.entries(__privateGet2(this, _registeredHttpEndpoints)).map(([id, endpoint]) => endpoint.toJSON())
        };
        return {
          status: 200,
          body,
          headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
        };
      }
      case "INITIALIZE_TRIGGER": {
        const json = await request.json();
        const body = InitializeTriggerBodySchema.safeParse(json);
        if (!body.success) {
          return {
            status: 400,
            body: {
              message: "Invalid trigger body"
            }
          };
        }
        const dynamicTrigger = __privateGet2(this, _registeredDynamicTriggers)[body.data.id];
        if (!dynamicTrigger) {
          return {
            status: 404,
            body: {
              message: "Dynamic trigger not found"
            }
          };
        }
        return {
          status: 200,
          body: dynamicTrigger.registeredTriggerForParams(body.data.params),
          headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
        };
      }
      case "EXECUTE_JOB": {
        const json = await request.json();
        const execution = RunJobBodySchema.safeParse(json);
        if (!execution.success) {
          return {
            status: 400,
            body: {
              message: "Invalid execution"
            }
          };
        }
        const job = __privateGet2(this, _registeredJobs)[execution.data.job.id];
        if (!job) {
          return {
            status: 404,
            body: {
              message: "Job not found"
            }
          };
        }
        const results = await __privateMethod2(this, _executeJob, executeJob_fn).call(this, execution.data, job, timeOrigin, triggerVersion);
        __privateGet2(this, _internalLogger).debug("executed job", {
          results,
          job: job.id,
          version: job.version,
          triggerVersion
        });
        const standardHeaders = __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin);
        standardHeaders["x-trigger-run-metadata"] = __privateMethod2(this, _serializeRunMetadata, serializeRunMetadata_fn).call(this, job);
        return {
          status: 200,
          body: results,
          headers: standardHeaders
        };
      }
      case "PREPROCESS_RUN": {
        const json = await request.json();
        const body = PreprocessRunBodySchema.safeParse(json);
        if (!body.success) {
          return {
            status: 400,
            body: {
              message: "Invalid body"
            }
          };
        }
        const job = __privateGet2(this, _registeredJobs)[body.data.job.id];
        if (!job) {
          return {
            status: 404,
            body: {
              message: "Job not found"
            }
          };
        }
        const results = await __privateMethod2(this, _preprocessRun, preprocessRun_fn).call(this, body.data, job);
        return {
          status: 200,
          body: {
            abort: results.abort,
            properties: results.properties
          },
          headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
        };
      }
      case "DELIVER_HTTP_SOURCE_REQUEST": {
        const headers = HttpSourceRequestHeadersSchema.safeParse(Object.fromEntries(request.headers.entries()));
        if (!headers.success) {
          return {
            status: 400,
            body: {
              message: "Invalid headers"
            }
          };
        }
        const sourceRequestNeedsBody = headers.data["x-ts-http-method"] !== "GET";
        const sourceRequestInit = {
          method: headers.data["x-ts-http-method"],
          headers: headers.data["x-ts-http-headers"],
          body: sourceRequestNeedsBody ? request.body : void 0
        };
        if (sourceRequestNeedsBody) {
          try {
            sourceRequestInit.duplex = "half";
          } catch (error) {
          }
        }
        const sourceRequest = new Request(headers.data["x-ts-http-url"], sourceRequestInit);
        const key = headers.data["x-ts-key"];
        const dynamicId = headers.data["x-ts-dynamic-id"];
        const secret = headers.data["x-ts-secret"];
        const params = headers.data["x-ts-params"];
        const data = headers.data["x-ts-data"];
        const auth = headers.data["x-ts-auth"];
        const inputMetadata = headers.data["x-ts-metadata"];
        const source = {
          key,
          dynamicId,
          secret,
          params,
          data,
          auth,
          metadata: inputMetadata
        };
        const { response, events, metadata } = await __privateMethod2(this, _handleHttpSourceRequest, handleHttpSourceRequest_fn).call(this, source, sourceRequest);
        return {
          status: 200,
          body: {
            events,
            response,
            metadata
          },
          headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
        };
      }
      case "DELIVER_HTTP_ENDPOINT_REQUEST_FOR_RESPONSE": {
        const headers = HttpEndpointRequestHeadersSchema.safeParse(Object.fromEntries(request.headers.entries()));
        if (!headers.success) {
          return {
            status: 400,
            body: {
              message: "Invalid headers"
            }
          };
        }
        const sourceRequestNeedsBody = headers.data["x-ts-http-method"] !== "GET";
        const sourceRequestInit = {
          method: headers.data["x-ts-http-method"],
          headers: headers.data["x-ts-http-headers"],
          body: sourceRequestNeedsBody ? request.body : void 0
        };
        if (sourceRequestNeedsBody) {
          try {
            sourceRequestInit.duplex = "half";
          } catch (error) {
          }
        }
        const sourceRequest = new Request(headers.data["x-ts-http-url"], sourceRequestInit);
        const key = headers.data["x-ts-key"];
        const { response } = await __privateMethod2(this, _handleHttpEndpointRequestForResponse, handleHttpEndpointRequestForResponse_fn).call(this, {
          key
        }, sourceRequest);
        return {
          status: 200,
          body: response,
          headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
        };
      }
      case "DELIVER_WEBHOOK_REQUEST": {
        const headers = WebhookSourceRequestHeadersSchema.safeParse(Object.fromEntries(request.headers.entries()));
        if (!headers.success) {
          return {
            status: 400,
            body: {
              message: "Invalid headers"
            }
          };
        }
        const sourceRequestNeedsBody = headers.data["x-ts-http-method"] !== "GET";
        const sourceRequestInit = {
          method: headers.data["x-ts-http-method"],
          headers: headers.data["x-ts-http-headers"],
          body: sourceRequestNeedsBody ? request.body : void 0
        };
        if (sourceRequestNeedsBody) {
          try {
            sourceRequestInit.duplex = "half";
          } catch (error2) {
          }
        }
        const webhookRequest = new Request(headers.data["x-ts-http-url"], sourceRequestInit);
        const key = headers.data["x-ts-key"];
        const secret = headers.data["x-ts-secret"];
        const params = headers.data["x-ts-params"];
        const ctx = {
          key,
          secret,
          params
        };
        const { response, verified, error } = await __privateMethod2(this, _handleWebhookRequest, handleWebhookRequest_fn).call(this, webhookRequest, ctx);
        return {
          status: 200,
          body: {
            response,
            verified,
            error
          },
          headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
        };
      }
      case "VALIDATE": {
        return {
          status: 200,
          body: {
            ok: true,
            endpointId: this.id
          },
          headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
        };
      }
      case "PROBE_EXECUTION_TIMEOUT": {
        const json = await request.json();
        const timeout = json?.timeout ?? 15 * 60 * 1e3;
        await new Promise((resolve) => setTimeout(resolve, timeout));
        return {
          status: 200,
          body: {
            ok: true
          },
          headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
        };
      }
      case "RUN_NOTIFICATION": {
        const rawJson = await request.json();
        const runNotification = rawJson;
        if (runNotification.ok) {
          await __privateMethod2(this, _deliverSuccessfulRunNotification, deliverSuccessfulRunNotification_fn).call(this, runNotification);
        } else {
          await __privateMethod2(this, _deliverFailedRunNotification, deliverFailedRunNotification_fn).call(this, runNotification);
        }
        return {
          status: 200,
          body: {
            ok: true
          },
          headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
        };
      }
    }
    return {
      status: 405,
      body: {
        message: "Method not allowed"
      },
      headers: __privateMethod2(this, _standardResponseHeaders, standardResponseHeaders_fn).call(this, timeOrigin)
    };
  }
  defineJob(options) {
    const existingRegisteredJob = __privateGet2(this, _registeredJobs)[options.id];
    if (existingRegisteredJob && options.__internal !== true) {
      console.warn(`[@trigger.dev/sdk] Warning: The Job "${existingRegisteredJob.id}" you're attempting to define has already been defined. Please assign a different ID to the job.`);
    }
    const job = new Job(options);
    this.attach(job);
    return job;
  }
  defineAuthResolver(integration, resolver) {
    __privateGet2(this, _authResolvers)[integration.id] = resolver;
    return this;
  }
  defineDynamicSchedule(options) {
    return new DynamicSchedule(this, options);
  }
  defineDynamicTrigger(options) {
    return new DynamicTrigger(this, options);
  }
  /**
  * An [HTTP endpoint](https://trigger.dev/docs/documentation/concepts/http-endpoints) allows you to create a [HTTP Trigger](https://trigger.dev/docs/documentation/concepts/triggers/http), which means you can trigger your Jobs from any webhooks.
  * @param options The Endpoint options
  * @returns An HTTP Endpoint, that can be used to create an HTTP Trigger.
  * @link https://trigger.dev/docs/documentation/concepts/http-endpoints
  */
  defineHttpEndpoint(options, suppressWarnings = false) {
    const existingHttpEndpoint = __privateGet2(this, _registeredHttpEndpoints)[options.id];
    if (!suppressWarnings && existingHttpEndpoint) {
      console.warn(`[@trigger.dev/sdk] Warning: The HttpEndpoint "${existingHttpEndpoint.id}" you're attempting to define has already been defined. Please assign a different ID to the HttpEndpoint.`);
    }
    const endpoint = httpEndpoint(options);
    __privateGet2(this, _registeredHttpEndpoints)[endpoint.id] = endpoint;
    return endpoint;
  }
  defineConcurrencyLimit(options) {
    return new ConcurrencyLimit(options);
  }
  attach(job) {
    __privateGet2(this, _registeredJobs)[job.id] = job;
    job.trigger.attachToJob(this, job);
    job.client = this;
  }
  attachDynamicTrigger(trigger) {
    __privateGet2(this, _registeredDynamicTriggers)[trigger.id] = trigger;
    this.defineJob({
      id: dynamicTriggerRegisterSourceJobId(trigger.id),
      name: `Register dynamic trigger ${trigger.id}`,
      version: trigger.source.version,
      trigger: new EventTrigger({
        event: registerSourceEvent,
        filter: {
          dynamicTriggerId: [
            trigger.id
          ]
        }
      }),
      integrations: {
        integration: trigger.source.integration
      },
      run: async (event, io, ctx) => {
        const updates = await trigger.source.register(event.source.params, event, io, ctx);
        if (!updates) {
          return;
        }
        return await io.updateSource("update-source", {
          key: event.source.key,
          ...updates
        });
      },
      __internal: true
    });
  }
  attachJobToDynamicTrigger(job, trigger) {
    const jobs = __privateGet2(this, _jobMetadataByDynamicTriggers)[trigger.id] ?? [];
    jobs.push({
      id: job.id,
      version: job.version
    });
    __privateGet2(this, _jobMetadataByDynamicTriggers)[trigger.id] = jobs;
  }
  attachSource(options) {
    __privateGet2(this, _registeredHttpSourceHandlers)[options.key] = async (s, r) => {
      return await options.source.handle(s, r, __privateGet2(this, _internalLogger));
    };
    let registeredSource = __privateGet2(this, _registeredSources)[options.key];
    if (!registeredSource) {
      registeredSource = {
        version: "2",
        channel: options.source.channel,
        key: options.key,
        params: options.params,
        options: {},
        integration: {
          id: options.source.integration.id,
          metadata: options.source.integration.metadata,
          authSource: options.source.integration.authSource
        },
        registerSourceJob: {
          id: options.key,
          version: options.source.version
        }
      };
    }
    const newOptions = deepMergeOptions({
      event: typeof options.event.name === "string" ? [
        options.event.name
      ] : options.event.name
    }, options.options ?? {});
    registeredSource.options = deepMergeOptions(registeredSource.options, newOptions);
    __privateGet2(this, _registeredSources)[options.key] = registeredSource;
    this.defineJob({
      id: options.key,
      name: options.key,
      version: options.source.version,
      trigger: new EventTrigger({
        event: registerSourceEvent,
        filter: {
          source: {
            key: [
              options.key
            ]
          }
        }
      }),
      integrations: {
        integration: options.source.integration
      },
      run: async (event, io, ctx) => {
        const updates = await options.source.register(options.params, event, io, ctx);
        if (!updates) {
          return;
        }
        return await io.updateSource("update-source", {
          key: options.key,
          ...updates
        });
      },
      __internal: true
    });
  }
  attachDynamicSchedule(key) {
    const jobs = __privateGet2(this, _registeredSchedules)[key] ?? [];
    __privateGet2(this, _registeredSchedules)[key] = jobs;
  }
  attachDynamicScheduleToJob(key, job) {
    const jobs = __privateGet2(this, _registeredSchedules)[key] ?? [];
    jobs.push({
      id: job.id,
      version: job.version
    });
    __privateGet2(this, _registeredSchedules)[key] = jobs;
  }
  attachWebhook(options) {
    const { source } = options;
    __privateGet2(this, _registeredWebhookSourceHandlers)[options.key] = {
      verify: source.verify.bind(source),
      generateEvents: source.generateEvents.bind(source)
    };
    let registeredWebhook = __privateGet2(this, _registeredWebhooks)[options.key];
    if (!registeredWebhook) {
      registeredWebhook = {
        key: options.key,
        params: options.params,
        config: options.config,
        integration: {
          id: source.integration.id,
          metadata: source.integration.metadata,
          authSource: source.integration.authSource
        },
        httpEndpoint: {
          id: options.key
        }
      };
    } else {
      registeredWebhook.config = deepMergeOptions(registeredWebhook.config, options.config);
    }
    __privateGet2(this, _registeredWebhooks)[options.key] = registeredWebhook;
    this.defineJob({
      id: `webhook.register.${options.key}`,
      name: `webhook.register.${options.key}`,
      version: source.version,
      trigger: new EventTrigger({
        event: registerWebhookEvent(options.key)
      }),
      integrations: {
        integration: source.integration
      },
      run: async (registerPayload, io, ctx) => {
        return await io.try(async () => {
          __privateGet2(this, _internalLogger).debug("[webhook.register] Start");
          const crudOptions = {
            io,
            // this is just a more strongly typed payload
            ctx: registerPayload
          };
          if (!registerPayload.active) {
            __privateGet2(this, _internalLogger).debug("[webhook.register] Not active, run create");
            await io.try(async () => {
              await source.crud.create(crudOptions);
            }, async (error) => {
              __privateGet2(this, _internalLogger).debug("[webhook.register] Error during create, re-trying with delete first", {
                error
              });
              await io.runTask("create-retry", async () => {
                await source.crud.delete(crudOptions);
                await source.crud.create(crudOptions);
              });
            });
            return await io.updateWebhook("update-webhook-success", {
              key: options.key,
              active: true,
              config: registerPayload.config.desired
            });
          }
          __privateGet2(this, _internalLogger).debug("[webhook.register] Already active, run update");
          if (source.crud.update) {
            await source.crud.update(crudOptions);
          } else {
            __privateGet2(this, _internalLogger).debug("[webhook.register] Run delete and create instead of update");
            await source.crud.delete(crudOptions);
            await source.crud.create(crudOptions);
          }
          return await io.updateWebhook("update-webhook-success", {
            key: options.key,
            active: true,
            config: registerPayload.config.desired
          });
        }, async (error) => {
          __privateGet2(this, _internalLogger).debug("[webhook.register] Error", {
            error
          });
          await io.updateWebhook("update-webhook-error", {
            key: options.key,
            active: false
          });
          throw error;
        });
      },
      __internal: true
    });
  }
  async registerTrigger(id, key, options, idempotencyKey) {
    return __privateGet2(this, _client2).registerTrigger(this.id, id, key, options, idempotencyKey);
  }
  async getAuth(id) {
    return __privateGet2(this, _client2).getAuth(this.id, id);
  }
  /** You can call this function from anywhere in your backend to send an event. The other way to send an event is by using [`io.sendEvent()`](https://trigger.dev/docs/sdk/io/sendevent) from inside a `run()` function.
  * @param event The event to send.
  * @param options Options for sending the event.
  * @returns A promise that resolves to the event details
  */
  async sendEvent(event, options) {
    return __privateGet2(this, _client2).sendEvent(event, options);
  }
  /** You can call this function from anywhere in your backend to send multiple events. The other way to send multiple events is by using [`io.sendEvents()`](https://trigger.dev/docs/sdk/io/sendevents) from inside a `run()` function.
  * @param events The events to send.
  * @param options Options for sending the events.
  * @returns A promise that resolves to an array of event details
  */
  async sendEvents(events, options) {
    return __privateGet2(this, _client2).sendEvents(events, options);
  }
  async cancelEvent(eventId) {
    return __privateGet2(this, _client2).cancelEvent(eventId);
  }
  async cancelRunsForEvent(eventId) {
    return __privateGet2(this, _client2).cancelRunsForEvent(eventId);
  }
  async updateStatus(runId, id, status) {
    return __privateGet2(this, _client2).updateStatus(runId, id, status);
  }
  async registerSchedule(id, key, schedule) {
    return __privateGet2(this, _client2).registerSchedule(this.id, id, key, schedule);
  }
  async unregisterSchedule(id, key) {
    return __privateGet2(this, _client2).unregisterSchedule(this.id, id, key);
  }
  async getEvent(eventId) {
    return __privateGet2(this, _client2).getEvent(eventId);
  }
  async getRun(runId, options) {
    return __privateGet2(this, _client2).getRun(runId, options);
  }
  async cancelRun(runId) {
    return __privateGet2(this, _client2).cancelRun(runId);
  }
  async getRuns(jobSlug, options) {
    return __privateGet2(this, _client2).getRuns(jobSlug, options);
  }
  async getRunStatuses(runId) {
    return __privateGet2(this, _client2).getRunStatuses(runId);
  }
  async invokeJob(jobId, payload, options) {
    return __privateGet2(this, _client2).invokeJob(jobId, payload, options);
  }
  async cancelRunsForJob(jobId) {
    return __privateGet2(this, _client2).cancelRunsForJob(jobId);
  }
  async createEphemeralEventDispatcher(payload) {
    return __privateGet2(this, _client2).createEphemeralEventDispatcher(payload);
  }
  get store() {
    return {
      env: __privateGet2(this, _envStore)
    };
  }
  authorized(apiKey) {
    if (typeof apiKey !== "string") {
      return "missing-header";
    }
    const localApiKey = __privateGet2(this, _options4).apiKey ?? import_node_process2.env.TRIGGER_API_KEY;
    if (!localApiKey) {
      return "missing-client";
    }
    return apiKey === localApiKey ? "authorized" : "unauthorized";
  }
  apiKey() {
    return __privateGet2(this, _options4).apiKey ?? import_node_process2.env.TRIGGER_API_KEY;
  }
};
_options4 = /* @__PURE__ */ new WeakMap();
_registeredJobs = /* @__PURE__ */ new WeakMap();
_registeredSources = /* @__PURE__ */ new WeakMap();
_registeredWebhooks = /* @__PURE__ */ new WeakMap();
_registeredHttpSourceHandlers = /* @__PURE__ */ new WeakMap();
_registeredWebhookSourceHandlers = /* @__PURE__ */ new WeakMap();
_registeredDynamicTriggers = /* @__PURE__ */ new WeakMap();
_jobMetadataByDynamicTriggers = /* @__PURE__ */ new WeakMap();
_registeredSchedules = /* @__PURE__ */ new WeakMap();
_registeredHttpEndpoints = /* @__PURE__ */ new WeakMap();
_authResolvers = /* @__PURE__ */ new WeakMap();
_envStore = /* @__PURE__ */ new WeakMap();
_eventEmitter = /* @__PURE__ */ new WeakMap();
_client2 = /* @__PURE__ */ new WeakMap();
_internalLogger = /* @__PURE__ */ new WeakMap();
_preprocessRun = /* @__PURE__ */ new WeakSet();
preprocessRun_fn = /* @__PURE__ */ __name3(async function(body, job) {
  __privateMethod2(this, _createPreprocessRunContext, createPreprocessRunContext_fn).call(this, body);
  const parsedPayload = job.trigger.event.parsePayload(body.event.payload ?? {});
  const properties = job.trigger.event.runProperties?.(parsedPayload) ?? [];
  return {
    abort: false,
    properties
  };
}, "#preprocessRun");
_executeJob = /* @__PURE__ */ new WeakSet();
executeJob_fn = /* @__PURE__ */ __name3(async function(body1, job1, timeOrigin, triggerVersion) {
  __privateGet2(this, _internalLogger).debug("executing job", {
    execution: body1,
    job: job1.id,
    version: job1.version,
    triggerVersion
  });
  const context2 = __privateMethod2(this, _createRunContext, createRunContext_fn).call(this, body1);
  const io = new IO({
    id: body1.run.id,
    jobId: job1.id,
    cachedTasks: body1.tasks,
    cachedTasksCursor: body1.cachedTaskCursor,
    yieldedExecutions: body1.yieldedExecutions ?? [],
    noopTasksSet: body1.noopTasksSet,
    apiClient: __privateGet2(this, _client2),
    logger: __privateGet2(this, _internalLogger),
    client: this,
    context: context2,
    jobLogLevel: job1.logLevel ?? __privateGet2(this, _options4).logLevel ?? "info",
    jobLogger: __privateGet2(this, _options4).ioLogLocalEnabled ? new Logger(job1.id, job1.logLevel ?? __privateGet2(this, _options4).logLevel ?? "info") : void 0,
    serverVersion: triggerVersion,
    timeOrigin,
    executionTimeout: body1.runChunkExecutionLimit
  });
  const resolvedConnections = await __privateMethod2(this, _resolveConnections, resolveConnections_fn).call(this, context2, job1.options.integrations, body1.connections);
  if (!resolvedConnections.ok) {
    return {
      status: "UNRESOLVED_AUTH_ERROR",
      issues: resolvedConnections.issues
    };
  }
  const ioWithConnections = createIOWithIntegrations(io, resolvedConnections.data, job1.options.integrations);
  try {
    const parsedPayload = job1.trigger.event.parsePayload(body1.event.payload ?? {});
    if (!context2.run.isTest) {
      const verified = await job1.trigger.verifyPayload(parsedPayload);
      if (!verified.success) {
        return {
          status: "ERROR",
          error: {
            message: `Payload verification failed. ${verified.reason}`
          }
        };
      }
    }
    const output = await runLocalStorage.runWith({
      io,
      ctx: context2
    }, () => {
      return job1.options.run(parsedPayload, ioWithConnections, context2);
    });
    if (__privateGet2(this, _options4).verbose) {
      __privateMethod2(this, _logIOStats, logIOStats_fn).call(this, io.stats);
    }
    return {
      status: "SUCCESS",
      output
    };
  } catch (error) {
    if (__privateGet2(this, _options4).verbose) {
      __privateMethod2(this, _logIOStats, logIOStats_fn).call(this, io.stats);
    }
    if (error instanceof ResumeWithParallelTaskError) {
      return {
        status: "RESUME_WITH_PARALLEL_TASK",
        task: error.task,
        childErrors: error.childErrors.map((childError) => {
          return __privateMethod2(this, _convertErrorToExecutionResponse, convertErrorToExecutionResponse_fn).call(this, childError, body1);
        })
      };
    }
    return __privateMethod2(this, _convertErrorToExecutionResponse, convertErrorToExecutionResponse_fn).call(this, error, body1);
  }
}, "#executeJob");
_convertErrorToExecutionResponse = /* @__PURE__ */ new WeakSet();
convertErrorToExecutionResponse_fn = /* @__PURE__ */ __name3(function(error, body2) {
  if (error instanceof AutoYieldExecutionError) {
    return {
      status: "AUTO_YIELD_EXECUTION",
      location: error.location,
      timeRemaining: error.timeRemaining,
      timeElapsed: error.timeElapsed,
      limit: body2.runChunkExecutionLimit
    };
  }
  if (error instanceof AutoYieldWithCompletedTaskExecutionError) {
    return {
      status: "AUTO_YIELD_EXECUTION_WITH_COMPLETED_TASK",
      id: error.id,
      properties: error.properties,
      output: error.output,
      data: {
        ...error.data,
        limit: body2.runChunkExecutionLimit
      }
    };
  }
  if (error instanceof AutoYieldRateLimitError) {
    return {
      status: "AUTO_YIELD_RATE_LIMIT",
      reset: error.resetAtTimestamp
    };
  }
  if (error instanceof YieldExecutionError) {
    return {
      status: "YIELD_EXECUTION",
      key: error.key
    };
  }
  if (error instanceof ParsedPayloadSchemaError) {
    return {
      status: "INVALID_PAYLOAD",
      errors: error.schemaErrors
    };
  }
  if (error instanceof ResumeWithTaskError) {
    return {
      status: "RESUME_WITH_TASK",
      task: error.task
    };
  }
  if (error instanceof RetryWithTaskError) {
    return {
      status: "RETRY_WITH_TASK",
      task: error.task,
      error: error.cause,
      retryAt: error.retryAt
    };
  }
  if (error instanceof CanceledWithTaskError) {
    return {
      status: "CANCELED",
      task: error.task
    };
  }
  if (error instanceof ErrorWithTask) {
    const errorWithStack2 = ErrorWithStackSchema.safeParse(error.cause.output);
    if (errorWithStack2.success) {
      return {
        status: "ERROR",
        error: errorWithStack2.data,
        task: error.cause
      };
    }
    return {
      status: "ERROR",
      error: {
        message: JSON.stringify(error.cause.output)
      },
      task: error.cause
    };
  }
  if (error instanceof RetryWithTaskError) {
    const errorWithStack2 = ErrorWithStackSchema.safeParse(error.cause);
    if (errorWithStack2.success) {
      return {
        status: "ERROR",
        error: errorWithStack2.data,
        task: error.task
      };
    }
    return {
      status: "ERROR",
      error: {
        message: "Unknown error"
      },
      task: error.task
    };
  }
  const errorWithStack = ErrorWithStackSchema.safeParse(error);
  if (errorWithStack.success) {
    return {
      status: "ERROR",
      error: errorWithStack.data
    };
  }
  const message = typeof error === "string" ? error : JSON.stringify(error);
  return {
    status: "ERROR",
    error: {
      name: "Unknown error",
      message
    }
  };
}, "#convertErrorToExecutionResponse");
_createRunContext = /* @__PURE__ */ new WeakSet();
createRunContext_fn = /* @__PURE__ */ __name3(function(execution) {
  const { event, organization, project, environment, job, run, source } = execution;
  return {
    event: {
      id: event.id,
      name: event.name,
      context: event.context,
      timestamp: event.timestamp
    },
    organization,
    project: project ?? {
      id: "unknown",
      name: "unknown",
      slug: "unknown"
    },
    environment,
    job,
    run,
    account: execution.account,
    source
  };
}, "#createRunContext");
_createPreprocessRunContext = /* @__PURE__ */ new WeakSet();
createPreprocessRunContext_fn = /* @__PURE__ */ __name3(function(body3) {
  const { event, organization, environment, job, run, account } = body3;
  return {
    event: {
      id: event.id,
      name: event.name,
      context: event.context,
      timestamp: event.timestamp
    },
    organization,
    environment,
    job,
    run,
    account
  };
}, "#createPreprocessRunContext");
_handleHttpSourceRequest = /* @__PURE__ */ new WeakSet();
handleHttpSourceRequest_fn = /* @__PURE__ */ __name3(async function(source, sourceRequest) {
  __privateGet2(this, _internalLogger).debug("Handling HTTP source request", {
    source
  });
  if (source.dynamicId) {
    const dynamicTrigger = __privateGet2(this, _registeredDynamicTriggers)[source.dynamicId];
    if (!dynamicTrigger) {
      __privateGet2(this, _internalLogger).debug("No dynamic trigger registered for HTTP source", {
        source
      });
      return {
        response: {
          status: 200,
          body: {
            ok: true
          }
        },
        events: []
      };
    }
    const results2 = await dynamicTrigger.source.handle(source, sourceRequest, __privateGet2(this, _internalLogger));
    if (!results2) {
      return {
        events: [],
        response: {
          status: 200,
          body: {
            ok: true
          }
        }
      };
    }
    return {
      events: results2.events,
      response: results2.response ?? {
        status: 200,
        body: {
          ok: true
        }
      },
      metadata: results2.metadata
    };
  }
  const handler2 = __privateGet2(this, _registeredHttpSourceHandlers)[source.key];
  if (!handler2) {
    __privateGet2(this, _internalLogger).debug("No handler registered for HTTP source", {
      source
    });
    return {
      response: {
        status: 200,
        body: {
          ok: true
        }
      },
      events: []
    };
  }
  const results = await handler2(source, sourceRequest);
  if (!results) {
    return {
      events: [],
      response: {
        status: 200,
        body: {
          ok: true
        }
      }
    };
  }
  return {
    events: results.events,
    response: results.response ?? {
      status: 200,
      body: {
        ok: true
      }
    },
    metadata: results.metadata
  };
}, "#handleHttpSourceRequest");
_handleHttpEndpointRequestForResponse = /* @__PURE__ */ new WeakSet();
handleHttpEndpointRequestForResponse_fn = /* @__PURE__ */ __name3(async function(data, sourceRequest1) {
  __privateGet2(this, _internalLogger).debug("Handling HTTP Endpoint request for response", {
    data
  });
  const httpEndpoint2 = __privateGet2(this, _registeredHttpEndpoints)[data.key];
  if (!httpEndpoint2) {
    __privateGet2(this, _internalLogger).debug("No handler registered for HTTP Endpoint", {
      data
    });
    return {
      response: {
        status: 200,
        body: {
          ok: true
        }
      }
    };
  }
  const handledResponse = await httpEndpoint2.handleRequest(sourceRequest1);
  if (!handledResponse) {
    __privateGet2(this, _internalLogger).debug("There's no HTTP Endpoint respondWith.handler()", {
      data
    });
    return {
      response: {
        status: 200,
        body: {
          ok: true
        }
      }
    };
  }
  let body;
  try {
    body = await handledResponse.text();
  } catch (error) {
    __privateGet2(this, _internalLogger).error(`Error reading httpEndpoint ${httpEndpoint2.id} respondWith.handler Response`, {
      error
    });
  }
  const response = {
    status: handledResponse.status,
    headers: handledResponse.headers ? Object.fromEntries(handledResponse.headers.entries()) : void 0,
    body
  };
  __privateGet2(this, _internalLogger).info(`httpEndpoint ${httpEndpoint2.id} respondWith.handler response`, {
    response
  });
  return {
    response
  };
}, "#handleHttpEndpointRequestForResponse");
_handleWebhookRequest = /* @__PURE__ */ new WeakSet();
handleWebhookRequest_fn = /* @__PURE__ */ __name3(async function(request, ctx) {
  __privateGet2(this, _internalLogger).debug("Handling webhook request", {
    ctx
  });
  const okResponse = {
    status: 200,
    body: {
      ok: true
    }
  };
  const handlers = __privateGet2(this, _registeredWebhookSourceHandlers)[ctx.key];
  if (!handlers) {
    __privateGet2(this, _internalLogger).debug("No handler registered for webhook", {
      ctx
    });
    return {
      response: okResponse,
      verified: false
    };
  }
  const { verify, generateEvents } = handlers;
  const verifyResult = await verify(request, this, ctx);
  if (!verifyResult.success) {
    return {
      response: okResponse,
      verified: false,
      error: verifyResult.reason
    };
  }
  await generateEvents(request, this, ctx);
  return {
    response: okResponse,
    verified: true
  };
}, "#handleWebhookRequest");
_resolveConnections = /* @__PURE__ */ new WeakSet();
resolveConnections_fn = /* @__PURE__ */ __name3(async function(ctx1, integrations, connections) {
  if (!integrations) {
    return {
      ok: true,
      data: {}
    };
  }
  const resolvedAuthResults = await Promise.all(Object.keys(integrations).map(async (key) => {
    const integration = integrations[key];
    const auth = (connections ?? {})[key];
    const result = await __privateMethod2(this, _resolveConnection, resolveConnection_fn).call(this, ctx1, integration, auth);
    if (result.ok) {
      return {
        ok: true,
        auth: result.auth,
        key
      };
    } else {
      return {
        ok: false,
        error: result.error,
        key
      };
    }
  }));
  const allResolved = resolvedAuthResults.every((result) => result.ok);
  if (allResolved) {
    return {
      ok: true,
      data: resolvedAuthResults.reduce((acc, result) => {
        acc[result.key] = result.auth;
        return acc;
      }, {})
    };
  } else {
    return {
      ok: false,
      issues: resolvedAuthResults.reduce((acc, result) => {
        if (result.ok) {
          return acc;
        }
        const integration = integrations[result.key];
        acc[result.key] = {
          id: integration.id,
          error: result.error
        };
        return acc;
      }, {})
    };
  }
}, "#resolveConnections");
_resolveConnection = /* @__PURE__ */ new WeakSet();
resolveConnection_fn = /* @__PURE__ */ __name3(async function(ctx2, integration, auth) {
  if (auth) {
    return {
      ok: true,
      auth
    };
  }
  const authResolver = __privateGet2(this, _authResolvers)[integration.id];
  if (!authResolver) {
    if (integration.authSource === "HOSTED") {
      return {
        ok: false,
        error: `Something went wrong: Integration ${integration.id} is missing auth credentials from Trigger.dev`
      };
    }
    return {
      ok: true,
      auth: void 0
    };
  }
  try {
    const resolvedAuth = await authResolver(ctx2, integration);
    if (!resolvedAuth) {
      return {
        ok: false,
        error: `Auth could not be resolved for ${integration.id}: auth resolver returned null or undefined`
      };
    }
    return {
      ok: true,
      auth: resolvedAuth.type === "apiKey" ? {
        type: "apiKey",
        accessToken: resolvedAuth.token,
        additionalFields: resolvedAuth.additionalFields
      } : {
        type: "oauth2",
        accessToken: resolvedAuth.token,
        additionalFields: resolvedAuth.additionalFields
      }
    };
  } catch (resolverError) {
    if (resolverError instanceof Error) {
      return {
        ok: false,
        error: `Auth could not be resolved for ${integration.id}: auth resolver threw. ${resolverError.name}: ${resolverError.message}`
      };
    } else if (typeof resolverError === "string") {
      return {
        ok: false,
        error: `Auth could not be resolved for ${integration.id}: auth resolver threw an error: ${resolverError}`
      };
    }
    return {
      ok: false,
      error: `Auth could not be resolved for ${integration.id}: auth resolver threw an unknown error: ${JSON.stringify(resolverError)}`
    };
  }
}, "#resolveConnection");
_buildJobsIndex = /* @__PURE__ */ new WeakSet();
buildJobsIndex_fn = /* @__PURE__ */ __name3(function() {
  return Object.values(__privateGet2(this, _registeredJobs)).map((job) => __privateMethod2(this, _buildJobIndex, buildJobIndex_fn).call(this, job));
}, "#buildJobsIndex");
_buildJobIndex = /* @__PURE__ */ new WeakSet();
buildJobIndex_fn = /* @__PURE__ */ __name3(function(job2) {
  const internal = job2.options.__internal;
  return {
    id: job2.id,
    name: job2.name,
    version: job2.version,
    event: job2.trigger.event,
    trigger: job2.trigger.toJSON(),
    integrations: __privateMethod2(this, _buildJobIntegrations, buildJobIntegrations_fn).call(this, job2),
    startPosition: "latest",
    enabled: job2.enabled,
    preprocessRuns: job2.trigger.preprocessRuns,
    internal,
    concurrencyLimit: typeof job2.options.concurrencyLimit === "number" ? job2.options.concurrencyLimit : typeof job2.options.concurrencyLimit === "object" ? {
      id: job2.options.concurrencyLimit.id,
      limit: job2.options.concurrencyLimit.limit
    } : void 0
  };
}, "#buildJobIndex");
_buildJobIntegrations = /* @__PURE__ */ new WeakSet();
buildJobIntegrations_fn = /* @__PURE__ */ __name3(function(job3) {
  return Object.keys(job3.options.integrations ?? {}).reduce((acc, key) => {
    const integration = job3.options.integrations[key];
    acc[key] = __privateMethod2(this, _buildJobIntegration, buildJobIntegration_fn).call(this, integration);
    return acc;
  }, {});
}, "#buildJobIntegrations");
_buildJobIntegration = /* @__PURE__ */ new WeakSet();
buildJobIntegration_fn = /* @__PURE__ */ __name3(function(integration1) {
  const authSource = __privateGet2(this, _authResolvers)[integration1.id] ? "RESOLVER" : integration1.authSource;
  return {
    id: integration1.id,
    metadata: integration1.metadata,
    authSource
  };
}, "#buildJobIntegration");
_logIOStats = /* @__PURE__ */ new WeakSet();
logIOStats_fn = /* @__PURE__ */ __name3(function(stats) {
  __privateGet2(this, _internalLogger).debug("IO stats", {
    stats
  });
}, "#logIOStats");
_standardResponseHeaders = /* @__PURE__ */ new WeakSet();
standardResponseHeaders_fn = /* @__PURE__ */ __name3(function(start) {
  return {
    "Trigger-Version": API_VERSIONS.LAZY_LOADED_CACHED_TASKS,
    "Trigger-SDK-Version": version2,
    "X-Trigger-Request-Timing": `dur=${performance.now() - start / 1e3}`
  };
}, "#standardResponseHeaders");
_serializeRunMetadata = /* @__PURE__ */ new WeakSet();
serializeRunMetadata_fn = /* @__PURE__ */ __name3(function(job4) {
  const metadata = {};
  if (__privateGet2(this, _eventEmitter).listenerCount("runSucceeeded") > 0 || typeof job4.options.onSuccess === "function") {
    metadata["successSubscription"] = true;
  }
  if (__privateGet2(this, _eventEmitter).listenerCount("runFailed") > 0 || typeof job4.options.onFailure === "function") {
    metadata["failedSubscription"] = true;
  }
  return JSON.stringify(metadata);
}, "#serializeRunMetadata");
_deliverSuccessfulRunNotification = /* @__PURE__ */ new WeakSet();
deliverSuccessfulRunNotification_fn = /* @__PURE__ */ __name3(async function(notification) {
  __privateGet2(this, _internalLogger).debug("delivering successful run notification", {
    notification
  });
  __privateGet2(this, _eventEmitter).emit("runSucceeeded", notification);
  const job = __privateGet2(this, _registeredJobs)[notification.job.id];
  if (!job) {
    return;
  }
  if (typeof job.options.onSuccess === "function") {
    await job.options.onSuccess(notification);
  }
}, "#deliverSuccessfulRunNotification");
_deliverFailedRunNotification = /* @__PURE__ */ new WeakSet();
deliverFailedRunNotification_fn = /* @__PURE__ */ __name3(async function(notification1) {
  __privateGet2(this, _internalLogger).debug("delivering failed run notification", {
    notification: notification1
  });
  __privateGet2(this, _eventEmitter).emit("runFailed", notification1);
  const job = __privateGet2(this, _registeredJobs)[notification1.job.id];
  if (!job) {
    return;
  }
  if (typeof job.options.onFailure === "function") {
    await job.options.onFailure(notification1);
  }
}, "#deliverFailedRunNotification");
__name3(_TriggerClient, "TriggerClient");
var TriggerClient = _TriggerClient;
function dynamicTriggerRegisterSourceJobId(id) {
  return `register-dynamic-trigger-${id}`;
}
__name3(dynamicTriggerRegisterSourceJobId, "dynamicTriggerRegisterSourceJobId");
function deepMergeOptions(obj1, obj2) {
  const mergedOptions = {
    ...obj1
  };
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (key in mergedOptions) {
        mergedOptions[key] = [
          ...mergedOptions[key],
          ...obj2[key]
        ];
      } else {
        mergedOptions[key] = obj2[key];
      }
    }
  }
  return mergedOptions;
}
__name3(deepMergeOptions, "deepMergeOptions");
var _ExternalSource = class _ExternalSource2 {
  constructor(channel, options) {
    this.options = options;
    this.channel = channel;
  }
  async handle(source, rawEvent, logger2) {
    return this.options.handler({
      source: {
        ...source,
        params: source.params
      },
      rawEvent
    }, logger2, this.options.integration);
  }
  filter(params, options) {
    return this.options.filter?.(params, options) ?? {};
  }
  properties(params) {
    return this.options.properties?.(params) ?? [];
  }
  async register(params, registerEvent, io, ctx) {
    const { result: event, ommited: source } = omit(registerEvent, "source");
    const { result: sourceWithoutChannel, ommited: channel } = omit(source, "channel");
    const { result: channelWithoutType } = omit(channel, "type");
    const updates = await this.options.register({
      ...event,
      source: {
        ...sourceWithoutChannel,
        ...channelWithoutType
      },
      params
    }, io, ctx);
    return updates;
  }
  key(params) {
    const parts = [
      this.options.id,
      this.channel
    ];
    parts.push(this.options.key(params));
    parts.push(this.integration.id);
    return parts.join("-");
  }
  get integration() {
    return this.options.integration;
  }
  get integrationConfig() {
    return {
      id: this.integration.id,
      metadata: this.integration.metadata
    };
  }
  get id() {
    return this.options.id;
  }
  get version() {
    return this.options.version;
  }
};
__name3(_ExternalSource, "ExternalSource");
var _ExternalSourceTrigger = class _ExternalSourceTrigger2 {
  constructor(options) {
    this.options = options;
  }
  get event() {
    return this.options.event;
  }
  toJSON() {
    return {
      type: "static",
      title: "External Source",
      rule: {
        event: this.event.name,
        payload: deepMergeFilters(this.options.source.filter(this.options.params, this.options.options), this.event.filter ?? {}, this.options.params.filter ?? {}),
        source: this.event.source
      },
      properties: this.options.source.properties(this.options.params)
    };
  }
  attachToJob(triggerClient, job) {
    triggerClient.attachSource({
      key: slugifyId(this.options.source.key(this.options.params)),
      source: this.options.source,
      event: this.options.event,
      params: this.options.params,
      options: this.options.options
    });
  }
  get preprocessRuns() {
    return true;
  }
  async verifyPayload(payload) {
    return {
      success: true
    };
  }
};
__name3(_ExternalSourceTrigger, "ExternalSourceTrigger");
function omit(obj, key) {
  const result = {};
  for (const k of Object.keys(obj)) {
    if (k === key)
      continue;
    result[k] = obj[k];
  }
  return {
    result,
    ommited: obj[key]
  };
}
__name3(omit, "omit");
function missingConnectionNotification(integrations) {
  return new MissingConnectionNotification({
    integrations
  });
}
__name3(missingConnectionNotification, "missingConnectionNotification");
function missingConnectionResolvedNotification(integrations) {
  return new MissingConnectionResolvedNotification({
    integrations
  });
}
__name3(missingConnectionResolvedNotification, "missingConnectionResolvedNotification");
var _MissingConnectionNotification = class _MissingConnectionNotification2 {
  constructor(options) {
    this.options = options;
  }
  get event() {
    return {
      name: MISSING_CONNECTION_NOTIFICATION,
      title: "Missing Connection Notification",
      source: "trigger.dev",
      icon: "connection-alert",
      parsePayload: MissingConnectionNotificationPayloadSchema.parse,
      properties: [
        {
          label: "Integrations",
          text: this.options.integrations.map((i) => i.id).join(", ")
        }
      ]
    };
  }
  attachToJob(triggerClient, job) {
  }
  get preprocessRuns() {
    return false;
  }
  async verifyPayload(payload) {
    return {
      success: true
    };
  }
  toJSON() {
    return {
      type: "static",
      title: this.event.title,
      rule: {
        event: this.event.name,
        source: "trigger.dev",
        payload: {
          client: {
            id: this.options.integrations.map((i) => i.id)
          }
        }
      }
    };
  }
};
__name3(_MissingConnectionNotification, "MissingConnectionNotification");
var MissingConnectionNotification = _MissingConnectionNotification;
var _MissingConnectionResolvedNotification = class _MissingConnectionResolvedNotification2 {
  constructor(options) {
    this.options = options;
  }
  get event() {
    return {
      name: MISSING_CONNECTION_RESOLVED_NOTIFICATION,
      title: "Missing Connection Resolved Notification",
      source: "trigger.dev",
      icon: "connection-alert",
      parsePayload: MissingConnectionResolvedNotificationPayloadSchema.parse,
      properties: [
        {
          label: "Integrations",
          text: this.options.integrations.map((i) => i.id).join(", ")
        }
      ]
    };
  }
  attachToJob(triggerClient, job) {
  }
  get preprocessRuns() {
    return false;
  }
  async verifyPayload(payload) {
    return {
      success: true
    };
  }
  toJSON() {
    return {
      type: "static",
      title: this.event.title,
      rule: {
        event: this.event.name,
        source: "trigger.dev",
        payload: {
          client: {
            id: this.options.integrations.map((i) => i.id)
          }
        }
      }
    };
  }
};
__name3(_MissingConnectionResolvedNotification, "MissingConnectionResolvedNotification");
var MissingConnectionResolvedNotification = _MissingConnectionResolvedNotification;
var _options5;
var _InvokeTrigger = class _InvokeTrigger2 {
  constructor(options) {
    __privateAdd2(this, _options5, void 0);
    __privateSet2(this, _options5, options);
  }
  toJSON() {
    return {
      type: "invoke"
    };
  }
  get event() {
    return {
      name: "invoke",
      title: "Manual Invoke",
      source: "trigger.dev",
      examples: __privateGet2(this, _options5).examples ?? [],
      icon: "trigger",
      parsePayload: (rawPayload) => {
        if (__privateGet2(this, _options5).schema) {
          const results = __privateGet2(this, _options5).schema.safeParse(rawPayload);
          if (!results.success) {
            throw new ParsedPayloadSchemaError(formatSchemaErrors(results.error.issues));
          }
          return results.data;
        }
        return rawPayload;
      },
      parseInvokePayload: (rawPayload) => {
        if (__privateGet2(this, _options5).schema) {
          const results = __privateGet2(this, _options5).schema.safeParse(rawPayload);
          if (!results.success) {
            throw new ParsedPayloadSchemaError(formatSchemaErrors(results.error.issues));
          }
          return results.data;
        }
        return rawPayload;
      }
    };
  }
  attachToJob(triggerClient, job) {
  }
  get preprocessRuns() {
    return false;
  }
  async verifyPayload() {
    return {
      success: true
    };
  }
};
_options5 = /* @__PURE__ */ new WeakMap();
__name3(_InvokeTrigger, "InvokeTrigger");
var InvokeTrigger = _InvokeTrigger;
function invokeTrigger(options) {
  return new InvokeTrigger(options ?? {});
}
__name3(invokeTrigger, "invokeTrigger");
var _shortHash;
var shortHash_fn;
var _WebhookSource = class _WebhookSource2 {
  constructor(options) {
    __privateAdd2(this, _shortHash);
    this.options = options;
  }
  async generateEvents(request, client2, ctx) {
    return this.options.generateEvents({
      request,
      client: client2,
      ctx
    });
  }
  filter(params, config2) {
    return this.options.filter?.(params, config2) ?? {};
  }
  properties(params) {
    return this.options.properties?.(params) ?? [];
  }
  get crud() {
    return this.options.crud;
  }
  async register(params, registerEvent, io, ctx) {
    if (!this.options.register) {
      return;
    }
    const updates = await this.options.register({
      ...registerEvent,
      params
    }, io, ctx);
    return updates;
  }
  async verify(request, client2, ctx) {
    if (this.options.verify) {
      const clonedRequest = request.clone();
      return this.options.verify({
        request: clonedRequest,
        client: client2,
        ctx
      });
    }
    return {
      success: true
    };
  }
  key(params) {
    const parts = [
      "webhook"
    ];
    parts.push(this.options.key(params));
    parts.push(this.integration.id);
    return `${this.options.id}-${__privateMethod2(this, _shortHash, shortHash_fn).call(this, parts.join(""))}`;
  }
  get integration() {
    return this.options.integration;
  }
  get integrationConfig() {
    return {
      id: this.integration.id,
      metadata: this.integration.metadata
    };
  }
  get id() {
    return this.options.id;
  }
  get version() {
    return this.options.version;
  }
};
_shortHash = /* @__PURE__ */ new WeakSet();
shortHash_fn = /* @__PURE__ */ __name3(function(str) {
  const hash = (0, import_node_crypto.createHash)("sha1").update(str).digest("hex");
  return hash.slice(0, 7);
}, "#shortHash");
__name3(_WebhookSource, "WebhookSource");
var _WebhookTrigger = class _WebhookTrigger2 {
  constructor(options) {
    this.options = options;
  }
  get event() {
    return this.options.event;
  }
  get source() {
    return this.options.source;
  }
  get key() {
    return slugifyId(this.options.source.key(this.options.params));
  }
  toJSON() {
    return {
      type: "static",
      title: "Webhook",
      rule: {
        event: this.event.name,
        payload: deepMergeFilters(this.options.source.filter(this.options.params, this.options.config), this.event.filter ?? {}),
        source: this.event.source
      },
      properties: this.options.source.properties(this.options.params),
      link: `http-endpoints/${this.key}`
    };
  }
  filter(eventFilter) {
    const { event, ...optionsWithoutEvent } = this.options;
    const { filter, ...eventWithoutFilter } = event;
    return new _WebhookTrigger2({
      ...optionsWithoutEvent,
      event: {
        ...eventWithoutFilter,
        filter: deepMergeFilters(filter ?? {}, eventFilter)
      }
    });
  }
  attachToJob(triggerClient, job) {
    triggerClient.defineHttpEndpoint({
      id: this.key,
      source: "trigger.dev",
      icon: this.event.icon,
      verify: async () => ({
        success: true
      })
    }, true);
    triggerClient.attachWebhook({
      key: this.key,
      source: this.options.source,
      event: this.options.event,
      params: this.options.params,
      config: this.options.config
    });
  }
  get preprocessRuns() {
    return true;
  }
  async verifyPayload(payload) {
    return {
      success: true
    };
  }
};
__name3(_WebhookTrigger, "WebhookTrigger");
async function verifyRequestSignature({ request, headerName, headerEncoding = "hex", secret, algorithm }) {
  if (!secret) {
    return {
      success: false,
      reason: "Missing secret \u2013 you've probably not set an environment variable."
    };
  }
  const headerValue = request.headers.get(headerName);
  if (!headerValue) {
    return {
      success: false,
      reason: "Missing header"
    };
  }
  switch (algorithm) {
    case "sha256":
      const success = verifyHmacSha256(headerValue, headerEncoding, secret, await request.text());
      if (success) {
        return {
          success
        };
      } else {
        return {
          success: false,
          reason: "Failed sha256 verification"
        };
      }
    default:
      throw new Error(`Unsupported algorithm: ${algorithm}`);
  }
}
__name3(verifyRequestSignature, "verifyRequestSignature");
function verifyHmacSha256(headerValue, headerEncoding, secret, body) {
  const bodyDigest = import_node_crypto.default.createHmac("sha256", secret).update(body).digest(headerEncoding);
  const signature = headerValue?.replace("hmac-sha256=", "").replace("sha256=", "") ?? "";
  return signature === bodyDigest;
}
__name3(verifyHmacSha256, "verifyHmacSha256");
function redactString(strings, ...interpolations) {
  return {
    __redactedString: true,
    strings: strings.raw,
    interpolations
  };
}
__name3(redactString, "redactString");

// src/trigger/todoist.ts
var import_axios = __toESM(require("axios"));
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config();
var TODOIST_API_TOKEN = process.env.TODOIST_API_TOKEN;
var client = new TriggerClient({
  id: "todoist-integration"
});
client.defineJob({
  id: "todoist-task-handler",
  trigger: client.webhooks.onReceive("todoist-task-webhook"),
  // Corrected webhook setup
  run: async (payload) => {
    const { action, taskName, taskId } = payload.data;
    if (action === "add") {
      await addTaskToTodoist(taskName);
    } else if (action === "complete") {
      await completeTodoistTask(taskId);
    } else {
      console.log("Unknown action");
    }
  }
});
var addTaskToTodoist = async (taskName) => {
  try {
    const response = await import_axios.default.post(
      "https://api.todoist.com/rest/v2/tasks",
      { content: taskName },
      { headers: { Authorization: `Bearer ${TODOIST_API_TOKEN}` } }
    );
    console.log("Task added successfully:", response.data);
  } catch (error) {
    console.error("Error adding task to Todoist:", error);
  }
};
var completeTodoistTask = async (taskId) => {
  try {
    await import_axios.default.post(
      `https://api.todoist.com/rest/v2/tasks/${taskId}/close`,
      {},
      { headers: { Authorization: `Bearer ${TODOIST_API_TOKEN}` } }
    );
    console.log("Task completed successfully:", taskId);
  } catch (error) {
    console.error("Error completing task in Todoist:", error);
  }
};

// __entryPoint.ts
var importedConfig = config;
var handleError2 = void 0;
var durableClock = new import_workers2.DurableClock();
import_v32.clock.setGlobalClock(durableClock);
import_workers2.usage.setGlobalUsageManager(new import_workers2.DevUsageManager());
var tracer = new import_v33.TriggerTracer({ tracer: otelTracer, logger: otelLogger });
var consoleInterceptor = new import_workers2.ConsoleInterceptor(
  otelLogger,
  typeof define_PROJECT_CONFIG_default.enableConsoleLogging === "boolean" ? define_PROJECT_CONFIG_default.enableConsoleLogging : true
);
var devRuntimeManager = new import_dev.DevRuntimeManager();
import_v33.runtime.setGlobalRuntimeManager(devRuntimeManager);
var triggerLogLevel = (0, import_workers2.getEnvVar)("TRIGGER_LOG_LEVEL");
var configLogLevel = triggerLogLevel ? triggerLogLevel : importedConfig ? importedConfig.logLevel : define_PROJECT_CONFIG_default.logLevel;
var otelTaskLogger = new import_workers2.OtelTaskLogger({
  logger: otelLogger,
  tracer,
  level: import_workers2.logLevels.includes(configLogLevel) ? configLogLevel : "info"
});
import_v33.logger.setGlobalTaskLogger(otelTaskLogger);
var TaskFileImports = {};
var TaskFiles = {};
TaskFileImports["src_trigger_todoist"] = todoist_exports;
TaskFiles["src_trigger_todoist"] = { "triggerDir": "/Users/leonelribeiro/Documents/GitHub/TodoistIntegration/src/trigger", "importPath": "src/trigger/todoist.ts", "importName": "src_trigger_todoist", "filePath": "src/trigger/todoist.ts" };
(() => {
  for (const [importName, taskFile] of Object.entries(TaskFiles)) {
    const fileImports = TaskFileImports[importName];
    for (const [exportName, task] of Object.entries(fileImports ?? {})) {
      if (typeof task === "object" && task !== null && "id" in task && typeof task.id === "string") {
        if (import_v32.taskCatalog.taskExists(task.id)) {
          import_v32.taskCatalog.registerTaskFileMetadata(task.id, {
            exportName,
            filePath: taskFile.filePath
          });
        }
      }
    }
  }
})();
var _execution;
var _isRunning = false;
var handler = new import_zodMessageHandler2.ZodMessageHandler({
  schema: import_v33.workerToChildMessages,
  messages: {
    EXECUTE_TASK_RUN: async ({ execution, traceContext, metadata }) => {
      if (_isRunning) {
        console.error("Worker is already running a task");
        await sender.send("TASK_RUN_COMPLETED", {
          execution,
          result: {
            ok: false,
            id: execution.run.id,
            error: {
              type: "INTERNAL_ERROR",
              code: import_v33.TaskRunErrorCodes.TASK_ALREADY_RUNNING
            },
            usage: {
              durationMs: 0
            }
          }
        });
        return;
      }
      process.title = `trigger-dev-worker: ${execution.task.id} ${execution.run.id}`;
      const task = import_v32.taskCatalog.getTask(execution.task.id);
      if (!task) {
        console.error(`Could not find task ${execution.task.id}`);
        await sender.send("TASK_RUN_COMPLETED", {
          execution,
          result: {
            ok: false,
            id: execution.run.id,
            error: {
              type: "INTERNAL_ERROR",
              code: import_v33.TaskRunErrorCodes.COULD_NOT_FIND_EXECUTOR
            },
            usage: {
              durationMs: 0
            }
          }
        });
        return;
      }
      const executor = new import_workers2.TaskExecutor(task, {
        tracer,
        tracingSDK,
        consoleInterceptor,
        projectConfig: define_PROJECT_CONFIG_default,
        importedConfig,
        handleErrorFn: handleError2
      });
      try {
        _execution = execution;
        _isRunning = true;
        const measurement = import_workers2.usage.start();
        const { result } = await executor.execute(execution, metadata, traceContext, measurement);
        const usageSample = import_workers2.usage.stop(measurement);
        return sender.send("TASK_RUN_COMPLETED", {
          execution,
          result: {
            ...result,
            usage: {
              durationMs: usageSample.cpuTime
            }
          }
        });
      } finally {
        _execution = void 0;
        _isRunning = false;
      }
    },
    TASK_RUN_COMPLETED_NOTIFICATION: async (payload) => {
      switch (payload.version) {
        case "v1": {
          devRuntimeManager.resumeTask(payload.completion, payload.execution.run.id);
          break;
        }
        case "v2": {
          devRuntimeManager.resumeTask(payload.completion, payload.completion.id);
          break;
        }
      }
    },
    CLEANUP: async ({ flush, kill }) => {
      if (kill) {
        await tracingSDK.flush();
        await sender.send("READY_TO_DISPOSE", void 0);
      } else {
        if (flush) {
          await tracingSDK.flush();
        }
      }
    }
  }
});
process.on("message", async (msg) => {
  await handler.handleMessage(msg);
});
var TASK_METADATA = import_v32.taskCatalog.getAllTaskMetadata();
sender.send("TASKS_READY", { tasks: TASK_METADATA }).catch((err) => {
  if (err instanceof import_zodMessageHandler2.ZodSchemaParsedError) {
    sender.send("TASKS_FAILED_TO_PARSE", { zodIssues: err.error.issues, tasks: TASK_METADATA });
  } else {
    console.error("Failed to send TASKS_READY message", err);
  }
});
process.title = "trigger-dev-worker";
async function asyncHeartbeat(initialDelayInSeconds = 30, intervalInSeconds = 30) {
  async function _doHeartbeat() {
    while (true) {
      if (_isRunning && _execution) {
        try {
          await sender.send("TASK_HEARTBEAT", { id: _execution.attempt.id });
        } catch (err) {
          console.error("Failed to send HEARTBEAT message", err);
        }
      }
      await new Promise((resolve) => setTimeout(resolve, 1e3 * intervalInSeconds));
    }
  }
  await new Promise((resolve) => setTimeout(resolve, 1e3 * initialDelayInSeconds));
  return _doHeartbeat();
}
asyncHeartbeat().catch((err) => {
  console.error("Failed to start asyncHeartbeat", err);
});

//# sourceMappingURL=2bb4384ecfc5081298036ea597acf2b3.js.map