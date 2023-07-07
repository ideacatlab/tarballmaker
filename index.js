(() => {
    var t = {
        7351: function (t, e, s) {
            "use strict";
            var i =
                (this && this.__createBinding) ||
                (Object.create
                    ? function (t, e, s, i) {
                          if (i === undefined) i = s;
                          Object.defineProperty(t, i, {
                              enumerable: true,
                              get: function () {
                                  return e[s];
                              },
                          });
                      }
                    : function (t, e, s, i) {
                          if (i === undefined) i = s;
                          t[i] = e[s];
                      });
            var r =
                (this && this.__setModuleDefault) ||
                (Object.create
                    ? function (t, e) {
                          Object.defineProperty(t, "default", {
                              enumerable: true,
                              value: e,
                          });
                      }
                    : function (t, e) {
                          t["default"] = e;
                      });
            var n =
                (this && this.__importStar) ||
                function (t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (t != null)
                        for (var s in t)
                            if (
                                s !== "default" &&
                                Object.hasOwnProperty.call(t, s)
                            )
                                i(e, t, s);
                    r(e, t);
                    return e;
                };
            Object.defineProperty(e, "__esModule", { value: true });
            e.issue = e.issueCommand = void 0;
            const o = n(s(2037));
            const h = s(5278);
            function issueCommand(t, e, s) {
                const i = new Command(t, e, s);
                process.stdout.write(i.toString() + o.EOL);
            }
            e.issueCommand = issueCommand;
            function issue(t, e = "") {
                issueCommand(t, {}, e);
            }
            e.issue = issue;
            const a = "::";
            class Command {
                constructor(t, e, s) {
                    if (!t) {
                        t = "missing.command";
                    }
                    this.command = t;
                    this.properties = e;
                    this.message = s;
                }
                toString() {
                    let t = a + this.command;
                    if (
                        this.properties &&
                        Object.keys(this.properties).length > 0
                    ) {
                        t += " ";
                        let e = true;
                        for (const s in this.properties) {
                            if (this.properties.hasOwnProperty(s)) {
                                const i = this.properties[s];
                                if (i) {
                                    if (e) {
                                        e = false;
                                    } else {
                                        t += ",";
                                    }
                                    t += `${s}=${escapeProperty(i)}`;
                                }
                            }
                        }
                    }
                    t += `${a}${escapeData(this.message)}`;
                    return t;
                }
            }
            function escapeData(t) {
                return h
                    .toCommandValue(t)
                    .replace(/%/g, "%25")
                    .replace(/\r/g, "%0D")
                    .replace(/\n/g, "%0A");
            }
            function escapeProperty(t) {
                return h
                    .toCommandValue(t)
                    .replace(/%/g, "%25")
                    .replace(/\r/g, "%0D")
                    .replace(/\n/g, "%0A")
                    .replace(/:/g, "%3A")
                    .replace(/,/g, "%2C");
            }
        },
        2186: function (t, e, s) {
            "use strict";
            var i =
                (this && this.__createBinding) ||
                (Object.create
                    ? function (t, e, s, i) {
                          if (i === undefined) i = s;
                          Object.defineProperty(t, i, {
                              enumerable: true,
                              get: function () {
                                  return e[s];
                              },
                          });
                      }
                    : function (t, e, s, i) {
                          if (i === undefined) i = s;
                          t[i] = e[s];
                      });
            var r =
                (this && this.__setModuleDefault) ||
                (Object.create
                    ? function (t, e) {
                          Object.defineProperty(t, "default", {
                              enumerable: true,
                              value: e,
                          });
                      }
                    : function (t, e) {
                          t["default"] = e;
                      });
            var n =
                (this && this.__importStar) ||
                function (t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (t != null)
                        for (var s in t)
                            if (
                                s !== "default" &&
                                Object.hasOwnProperty.call(t, s)
                            )
                                i(e, t, s);
                    r(e, t);
                    return e;
                };
            var o =
                (this && this.__awaiter) ||
                function (t, e, s, i) {
                    function adopt(t) {
                        return t instanceof s
                            ? t
                            : new s(function (e) {
                                  e(t);
                              });
                    }
                    return new (s || (s = Promise))(function (s, r) {
                        function fulfilled(t) {
                            try {
                                step(i.next(t));
                            } catch (t) {
                                r(t);
                            }
                        }
                        function rejected(t) {
                            try {
                                step(i["throw"](t));
                            } catch (t) {
                                r(t);
                            }
                        }
                        function step(t) {
                            t.done
                                ? s(t.value)
                                : adopt(t.value).then(fulfilled, rejected);
                        }
                        step((i = i.apply(t, e || [])).next());
                    });
                };
            Object.defineProperty(e, "__esModule", { value: true });
            e.getIDToken =
                e.getState =
                e.saveState =
                e.group =
                e.endGroup =
                e.startGroup =
                e.info =
                e.notice =
                e.warning =
                e.error =
                e.debug =
                e.isDebug =
                e.setFailed =
                e.setCommandEcho =
                e.setOutput =
                e.getBooleanInput =
                e.getMultilineInput =
                e.getInput =
                e.addPath =
                e.setSecret =
                e.exportVariable =
                e.ExitCode =
                    void 0;
            const h = s(7351);
            const a = s(717);
            const l = s(5278);
            const c = n(s(2037));
            const u = n(s(1017));
            const f = s(8041);
            var d;
            (function (t) {
                t[(t["Success"] = 0)] = "Success";
                t[(t["Failure"] = 1)] = "Failure";
            })((d = e.ExitCode || (e.ExitCode = {})));
            function exportVariable(t, e) {
                const s = l.toCommandValue(e);
                process.env[t] = s;
                const i = process.env["GITHUB_ENV"] || "";
                if (i) {
                    return a.issueFileCommand(
                        "ENV",
                        a.prepareKeyValueMessage(t, e)
                    );
                }
                h.issueCommand("set-env", { name: t }, s);
            }
            e.exportVariable = exportVariable;
            function setSecret(t) {
                h.issueCommand("add-mask", {}, t);
            }
            e.setSecret = setSecret;
            function addPath(t) {
                const e = process.env["GITHUB_PATH"] || "";
                if (e) {
                    a.issueFileCommand("PATH", t);
                } else {
                    h.issueCommand("add-path", {}, t);
                }
                process.env[
                    "PATH"
                ] = `${t}${u.delimiter}${process.env["PATH"]}`;
            }
            e.addPath = addPath;
            function getInput(t, e) {
                const s =
                    process.env[
                        `INPUT_${t.replace(/ /g, "_").toUpperCase()}`
                    ] || "";
                if (e && e.required && !s) {
                    throw new Error(`Input required and not supplied: ${t}`);
                }
                if (e && e.trimWhitespace === false) {
                    return s;
                }
                return s.trim();
            }
            e.getInput = getInput;
            function getMultilineInput(t, e) {
                const s = getInput(t, e)
                    .split("\n")
                    .filter((t) => t !== "");
                if (e && e.trimWhitespace === false) {
                    return s;
                }
                return s.map((t) => t.trim());
            }
            e.getMultilineInput = getMultilineInput;
            function getBooleanInput(t, e) {
                const s = ["true", "True", "TRUE"];
                const i = ["false", "False", "FALSE"];
                const r = getInput(t, e);
                if (s.includes(r)) return true;
                if (i.includes(r)) return false;
                throw new TypeError(
                    `Input does not meet YAML 1.2 "Core Schema" specification: ${t}\n` +
                        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``
                );
            }
            e.getBooleanInput = getBooleanInput;
            function setOutput(t, e) {
                const s = process.env["GITHUB_OUTPUT"] || "";
                if (s) {
                    return a.issueFileCommand(
                        "OUTPUT",
                        a.prepareKeyValueMessage(t, e)
                    );
                }
                process.stdout.write(c.EOL);
                h.issueCommand("set-output", { name: t }, l.toCommandValue(e));
            }
            e.setOutput = setOutput;
            function setCommandEcho(t) {
                h.issue("echo", t ? "on" : "off");
            }
            e.setCommandEcho = setCommandEcho;
            function setFailed(t) {
                process.exitCode = d.Failure;
                error(t);
            }
            e.setFailed = setFailed;
            function isDebug() {
                return process.env["RUNNER_DEBUG"] === "1";
            }
            e.isDebug = isDebug;
            function debug(t) {
                h.issueCommand("debug", {}, t);
            }
            e.debug = debug;
            function error(t, e = {}) {
                h.issueCommand(
                    "error",
                    l.toCommandProperties(e),
                    t instanceof Error ? t.toString() : t
                );
            }
            e.error = error;
            function warning(t, e = {}) {
                h.issueCommand(
                    "warning",
                    l.toCommandProperties(e),
                    t instanceof Error ? t.toString() : t
                );
            }
            e.warning = warning;
            function notice(t, e = {}) {
                h.issueCommand(
                    "notice",
                    l.toCommandProperties(e),
                    t instanceof Error ? t.toString() : t
                );
            }
            e.notice = notice;
            function info(t) {
                process.stdout.write(t + c.EOL);
            }
            e.info = info;
            function startGroup(t) {
                h.issue("group", t);
            }
            e.startGroup = startGroup;
            function endGroup() {
                h.issue("endgroup");
            }
            e.endGroup = endGroup;
            function group(t, e) {
                return o(this, void 0, void 0, function* () {
                    startGroup(t);
                    let s;
                    try {
                        s = yield e();
                    } finally {
                        endGroup();
                    }
                    return s;
                });
            }
            e.group = group;
            function saveState(t, e) {
                const s = process.env["GITHUB_STATE"] || "";
                if (s) {
                    return a.issueFileCommand(
                        "STATE",
                        a.prepareKeyValueMessage(t, e)
                    );
                }
                h.issueCommand("save-state", { name: t }, l.toCommandValue(e));
            }
            e.saveState = saveState;
            function getState(t) {
                return process.env[`STATE_${t}`] || "";
            }
            e.getState = getState;
            function getIDToken(t) {
                return o(this, void 0, void 0, function* () {
                    return yield f.OidcClient.getIDToken(t);
                });
            }
            e.getIDToken = getIDToken;
            var p = s(1327);
            Object.defineProperty(e, "summary", {
                enumerable: true,
                get: function () {
                    return p.summary;
                },
            });
            var m = s(1327);
            Object.defineProperty(e, "markdownSummary", {
                enumerable: true,
                get: function () {
                    return m.markdownSummary;
                },
            });
            var y = s(2981);
            Object.defineProperty(e, "toPosixPath", {
                enumerable: true,
                get: function () {
                    return y.toPosixPath;
                },
            });
            Object.defineProperty(e, "toWin32Path", {
                enumerable: true,
                get: function () {
                    return y.toWin32Path;
                },
            });
            Object.defineProperty(e, "toPlatformPath", {
                enumerable: true,
                get: function () {
                    return y.toPlatformPath;
                },
            });
        },
        717: function (t, e, s) {
            "use strict";
            var i =
                (this && this.__createBinding) ||
                (Object.create
                    ? function (t, e, s, i) {
                          if (i === undefined) i = s;
                          Object.defineProperty(t, i, {
                              enumerable: true,
                              get: function () {
                                  return e[s];
                              },
                          });
                      }
                    : function (t, e, s, i) {
                          if (i === undefined) i = s;
                          t[i] = e[s];
                      });
            var r =
                (this && this.__setModuleDefault) ||
                (Object.create
                    ? function (t, e) {
                          Object.defineProperty(t, "default", {
                              enumerable: true,
                              value: e,
                          });
                      }
                    : function (t, e) {
                          t["default"] = e;
                      });
            var n =
                (this && this.__importStar) ||
                function (t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (t != null)
                        for (var s in t)
                            if (
                                s !== "default" &&
                                Object.hasOwnProperty.call(t, s)
                            )
                                i(e, t, s);
                    r(e, t);
                    return e;
                };
            Object.defineProperty(e, "__esModule", { value: true });
            e.prepareKeyValueMessage = e.issueFileCommand = void 0;
            const o = n(s(7147));
            const h = n(s(2037));
            const a = s(5840);
            const l = s(5278);
            function issueFileCommand(t, e) {
                const s = process.env[`GITHUB_${t}`];
                if (!s) {
                    throw new Error(
                        `Unable to find environment variable for file command ${t}`
                    );
                }
                if (!o.existsSync(s)) {
                    throw new Error(`Missing file at path: ${s}`);
                }
                o.appendFileSync(s, `${l.toCommandValue(e)}${h.EOL}`, {
                    encoding: "utf8",
                });
            }
            e.issueFileCommand = issueFileCommand;
            function prepareKeyValueMessage(t, e) {
                const s = `ghadelimiter_${a.v4()}`;
                const i = l.toCommandValue(e);
                if (t.includes(s)) {
                    throw new Error(
                        `Unexpected input: name should not contain the delimiter "${s}"`
                    );
                }
                if (i.includes(s)) {
                    throw new Error(
                        `Unexpected input: value should not contain the delimiter "${s}"`
                    );
                }
                return `${t}<<${s}${h.EOL}${i}${h.EOL}${s}`;
            }
            e.prepareKeyValueMessage = prepareKeyValueMessage;
        },
        8041: function (t, e, s) {
            "use strict";
            var i =
                (this && this.__awaiter) ||
                function (t, e, s, i) {
                    function adopt(t) {
                        return t instanceof s
                            ? t
                            : new s(function (e) {
                                  e(t);
                              });
                    }
                    return new (s || (s = Promise))(function (s, r) {
                        function fulfilled(t) {
                            try {
                                step(i.next(t));
                            } catch (t) {
                                r(t);
                            }
                        }
                        function rejected(t) {
                            try {
                                step(i["throw"](t));
                            } catch (t) {
                                r(t);
                            }
                        }
                        function step(t) {
                            t.done
                                ? s(t.value)
                                : adopt(t.value).then(fulfilled, rejected);
                        }
                        step((i = i.apply(t, e || [])).next());
                    });
                };
            Object.defineProperty(e, "__esModule", { value: true });
            e.OidcClient = void 0;
            const r = s(6255);
            const n = s(5526);
            const o = s(2186);
            class OidcClient {
                static createHttpClient(t = true, e = 10) {
                    const s = { allowRetries: t, maxRetries: e };
                    return new r.HttpClient(
                        "actions/oidc-client",
                        [
                            new n.BearerCredentialHandler(
                                OidcClient.getRequestToken()
                            ),
                        ],
                        s
                    );
                }
                static getRequestToken() {
                    const t = process.env["ACTIONS_ID_TOKEN_REQUEST_TOKEN"];
                    if (!t) {
                        throw new Error(
                            "Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable"
                        );
                    }
                    return t;
                }
                static getIDTokenUrl() {
                    const t = process.env["ACTIONS_ID_TOKEN_REQUEST_URL"];
                    if (!t) {
                        throw new Error(
                            "Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable"
                        );
                    }
                    return t;
                }
                static getCall(t) {
                    var e;
                    return i(this, void 0, void 0, function* () {
                        const s = OidcClient.createHttpClient();
                        const i = yield s.getJson(t).catch((t) => {
                            throw new Error(
                                `Failed to get ID Token. \n \n        Error Code : ${t.statusCode}\n \n        Error Message: ${t.result.message}`
                            );
                        });
                        const r =
                            (e = i.result) === null || e === void 0
                                ? void 0
                                : e.value;
                        if (!r) {
                            throw new Error(
                                "Response json body do not have ID Token field"
                            );
                        }
                        return r;
                    });
                }
                static getIDToken(t) {
                    return i(this, void 0, void 0, function* () {
                        try {
                            let e = OidcClient.getIDTokenUrl();
                            if (t) {
                                const s = encodeURIComponent(t);
                                e = `${e}&audience=${s}`;
                            }
                            o.debug(`ID token url is ${e}`);
                            const s = yield OidcClient.getCall(e);
                            o.setSecret(s);
                            return s;
                        } catch (t) {
                            throw new Error(`Error message: ${t.message}`);
                        }
                    });
                }
            }
            e.OidcClient = OidcClient;
        },
        2981: function (t, e, s) {
            "use strict";
            var i =
                (this && this.__createBinding) ||
                (Object.create
                    ? function (t, e, s, i) {
                          if (i === undefined) i = s;
                          Object.defineProperty(t, i, {
                              enumerable: true,
                              get: function () {
                                  return e[s];
                              },
                          });
                      }
                    : function (t, e, s, i) {
                          if (i === undefined) i = s;
                          t[i] = e[s];
                      });
            var r =
                (this && this.__setModuleDefault) ||
                (Object.create
                    ? function (t, e) {
                          Object.defineProperty(t, "default", {
                              enumerable: true,
                              value: e,
                          });
                      }
                    : function (t, e) {
                          t["default"] = e;
                      });
            var n =
                (this && this.__importStar) ||
                function (t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (t != null)
                        for (var s in t)
                            if (
                                s !== "default" &&
                                Object.hasOwnProperty.call(t, s)
                            )
                                i(e, t, s);
                    r(e, t);
                    return e;
                };
            Object.defineProperty(e, "__esModule", { value: true });
            e.toPlatformPath = e.toWin32Path = e.toPosixPath = void 0;
            const o = n(s(1017));
            function toPosixPath(t) {
                return t.replace(/[\\]/g, "/");
            }
            e.toPosixPath = toPosixPath;
            function toWin32Path(t) {
                return t.replace(/[/]/g, "\\");
            }
            e.toWin32Path = toWin32Path;
            function toPlatformPath(t) {
                return t.replace(/[/\\]/g, o.sep);
            }
            e.toPlatformPath = toPlatformPath;
        },
        1327: function (t, e, s) {
            "use strict";
            var i =
                (this && this.__awaiter) ||
                function (t, e, s, i) {
                    function adopt(t) {
                        return t instanceof s
                            ? t
                            : new s(function (e) {
                                  e(t);
                              });
                    }
                    return new (s || (s = Promise))(function (s, r) {
                        function fulfilled(t) {
                            try {
                                step(i.next(t));
                            } catch (t) {
                                r(t);
                            }
                        }
                        function rejected(t) {
                            try {
                                step(i["throw"](t));
                            } catch (t) {
                                r(t);
                            }
                        }
                        function step(t) {
                            t.done
                                ? s(t.value)
                                : adopt(t.value).then(fulfilled, rejected);
                        }
                        step((i = i.apply(t, e || [])).next());
                    });
                };
            Object.defineProperty(e, "__esModule", { value: true });
            e.summary =
                e.markdownSummary =
                e.SUMMARY_DOCS_URL =
                e.SUMMARY_ENV_VAR =
                    void 0;
            const r = s(2037);
            const n = s(7147);
            const { access: o, appendFile: h, writeFile: a } = n.promises;
            e.SUMMARY_ENV_VAR = "GITHUB_STEP_SUMMARY";
            e.SUMMARY_DOCS_URL =
                "https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";
            class Summary {
                constructor() {
                    this._buffer = "";
                }
                filePath() {
                    return i(this, void 0, void 0, function* () {
                        if (this._filePath) {
                            return this._filePath;
                        }
                        const t = process.env[e.SUMMARY_ENV_VAR];
                        if (!t) {
                            throw new Error(
                                `Unable to find environment variable for $${e.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`
                            );
                        }
                        try {
                            yield o(t, n.constants.R_OK | n.constants.W_OK);
                        } catch (e) {
                            throw new Error(
                                `Unable to access summary file: '${t}'. Check if the file has correct read/write permissions.`
                            );
                        }
                        this._filePath = t;
                        return this._filePath;
                    });
                }
                wrap(t, e, s = {}) {
                    const i = Object.entries(s)
                        .map(([t, e]) => ` ${t}="${e}"`)
                        .join("");
                    if (!e) {
                        return `<${t}${i}>`;
                    }
                    return `<${t}${i}>${e}</${t}>`;
                }
                write(t) {
                    return i(this, void 0, void 0, function* () {
                        const e = !!(t === null || t === void 0
                            ? void 0
                            : t.overwrite);
                        const s = yield this.filePath();
                        const i = e ? a : h;
                        yield i(s, this._buffer, { encoding: "utf8" });
                        return this.emptyBuffer();
                    });
                }
                clear() {
                    return i(this, void 0, void 0, function* () {
                        return this.emptyBuffer().write({ overwrite: true });
                    });
                }
                stringify() {
                    return this._buffer;
                }
                isEmptyBuffer() {
                    return this._buffer.length === 0;
                }
                emptyBuffer() {
                    this._buffer = "";
                    return this;
                }
                addRaw(t, e = false) {
                    this._buffer += t;
                    return e ? this.addEOL() : this;
                }
                addEOL() {
                    return this.addRaw(r.EOL);
                }
                addCodeBlock(t, e) {
                    const s = Object.assign({}, e && { lang: e });
                    const i = this.wrap("pre", this.wrap("code", t), s);
                    return this.addRaw(i).addEOL();
                }
                addList(t, e = false) {
                    const s = e ? "ol" : "ul";
                    const i = t.map((t) => this.wrap("li", t)).join("");
                    const r = this.wrap(s, i);
                    return this.addRaw(r).addEOL();
                }
                addTable(t) {
                    const e = t
                        .map((t) => {
                            const e = t
                                .map((t) => {
                                    if (typeof t === "string") {
                                        return this.wrap("td", t);
                                    }
                                    const {
                                        header: e,
                                        data: s,
                                        colspan: i,
                                        rowspan: r,
                                    } = t;
                                    const n = e ? "th" : "td";
                                    const o = Object.assign(
                                        Object.assign({}, i && { colspan: i }),
                                        r && { rowspan: r }
                                    );
                                    return this.wrap(n, s, o);
                                })
                                .join("");
                            return this.wrap("tr", e);
                        })
                        .join("");
                    const s = this.wrap("table", e);
                    return this.addRaw(s).addEOL();
                }
                addDetails(t, e) {
                    const s = this.wrap("details", this.wrap("summary", t) + e);
                    return this.addRaw(s).addEOL();
                }
                addImage(t, e, s) {
                    const { width: i, height: r } = s || {};
                    const n = Object.assign(
                        Object.assign({}, i && { width: i }),
                        r && { height: r }
                    );
                    const o = this.wrap(
                        "img",
                        null,
                        Object.assign({ src: t, alt: e }, n)
                    );
                    return this.addRaw(o).addEOL();
                }
                addHeading(t, e) {
                    const s = `h${e}`;
                    const i = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(s)
                        ? s
                        : "h1";
                    const r = this.wrap(i, t);
                    return this.addRaw(r).addEOL();
                }
                addSeparator() {
                    const t = this.wrap("hr", null);
                    return this.addRaw(t).addEOL();
                }
                addBreak() {
                    const t = this.wrap("br", null);
                    return this.addRaw(t).addEOL();
                }
                addQuote(t, e) {
                    const s = Object.assign({}, e && { cite: e });
                    const i = this.wrap("blockquote", t, s);
                    return this.addRaw(i).addEOL();
                }
                addLink(t, e) {
                    const s = this.wrap("a", t, { href: e });
                    return this.addRaw(s).addEOL();
                }
            }
            const l = new Summary();
            e.markdownSummary = l;
            e.summary = l;
        },
        5278: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            e.toCommandProperties = e.toCommandValue = void 0;
            function toCommandValue(t) {
                if (t === null || t === undefined) {
                    return "";
                } else if (typeof t === "string" || t instanceof String) {
                    return t;
                }
                return JSON.stringify(t);
            }
            e.toCommandValue = toCommandValue;
            function toCommandProperties(t) {
                if (!Object.keys(t).length) {
                    return {};
                }
                return {
                    title: t.title,
                    file: t.file,
                    line: t.startLine,
                    endLine: t.endLine,
                    col: t.startColumn,
                    endColumn: t.endColumn,
                };
            }
            e.toCommandProperties = toCommandProperties;
        },
        5526: function (t, e) {
            "use strict";
            var s =
                (this && this.__awaiter) ||
                function (t, e, s, i) {
                    function adopt(t) {
                        return t instanceof s
                            ? t
                            : new s(function (e) {
                                  e(t);
                              });
                    }
                    return new (s || (s = Promise))(function (s, r) {
                        function fulfilled(t) {
                            try {
                                step(i.next(t));
                            } catch (t) {
                                r(t);
                            }
                        }
                        function rejected(t) {
                            try {
                                step(i["throw"](t));
                            } catch (t) {
                                r(t);
                            }
                        }
                        function step(t) {
                            t.done
                                ? s(t.value)
                                : adopt(t.value).then(fulfilled, rejected);
                        }
                        step((i = i.apply(t, e || [])).next());
                    });
                };
            Object.defineProperty(e, "__esModule", { value: true });
            e.PersonalAccessTokenCredentialHandler =
                e.BearerCredentialHandler =
                e.BasicCredentialHandler =
                    void 0;
            class BasicCredentialHandler {
                constructor(t, e) {
                    this.username = t;
                    this.password = e;
                }
                prepareRequest(t) {
                    if (!t.headers) {
                        throw Error("The request has no headers");
                    }
                    t.headers["Authorization"] = `Basic ${Buffer.from(
                        `${this.username}:${this.password}`
                    ).toString("base64")}`;
                }
                canHandleAuthentication() {
                    return false;
                }
                handleAuthentication() {
                    return s(this, void 0, void 0, function* () {
                        throw new Error("not implemented");
                    });
                }
            }
            e.BasicCredentialHandler = BasicCredentialHandler;
            class BearerCredentialHandler {
                constructor(t) {
                    this.token = t;
                }
                prepareRequest(t) {
                    if (!t.headers) {
                        throw Error("The request has no headers");
                    }
                    t.headers["Authorization"] = `Bearer ${this.token}`;
                }
                canHandleAuthentication() {
                    return false;
                }
                handleAuthentication() {
                    return s(this, void 0, void 0, function* () {
                        throw new Error("not implemented");
                    });
                }
            }
            e.BearerCredentialHandler = BearerCredentialHandler;
            class PersonalAccessTokenCredentialHandler {
                constructor(t) {
                    this.token = t;
                }
                prepareRequest(t) {
                    if (!t.headers) {
                        throw Error("The request has no headers");
                    }
                    t.headers["Authorization"] = `Basic ${Buffer.from(
                        `PAT:${this.token}`
                    ).toString("base64")}`;
                }
                canHandleAuthentication() {
                    return false;
                }
                handleAuthentication() {
                    return s(this, void 0, void 0, function* () {
                        throw new Error("not implemented");
                    });
                }
            }
            e.PersonalAccessTokenCredentialHandler =
                PersonalAccessTokenCredentialHandler;
        },
        6255: function (t, e, s) {
            "use strict";
            var i =
                (this && this.__createBinding) ||
                (Object.create
                    ? function (t, e, s, i) {
                          if (i === undefined) i = s;
                          Object.defineProperty(t, i, {
                              enumerable: true,
                              get: function () {
                                  return e[s];
                              },
                          });
                      }
                    : function (t, e, s, i) {
                          if (i === undefined) i = s;
                          t[i] = e[s];
                      });
            var r =
                (this && this.__setModuleDefault) ||
                (Object.create
                    ? function (t, e) {
                          Object.defineProperty(t, "default", {
                              enumerable: true,
                              value: e,
                          });
                      }
                    : function (t, e) {
                          t["default"] = e;
                      });
            var n =
                (this && this.__importStar) ||
                function (t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (t != null)
                        for (var s in t)
                            if (
                                s !== "default" &&
                                Object.hasOwnProperty.call(t, s)
                            )
                                i(e, t, s);
                    r(e, t);
                    return e;
                };
            var o =
                (this && this.__awaiter) ||
                function (t, e, s, i) {
                    function adopt(t) {
                        return t instanceof s
                            ? t
                            : new s(function (e) {
                                  e(t);
                              });
                    }
                    return new (s || (s = Promise))(function (s, r) {
                        function fulfilled(t) {
                            try {
                                step(i.next(t));
                            } catch (t) {
                                r(t);
                            }
                        }
                        function rejected(t) {
                            try {
                                step(i["throw"](t));
                            } catch (t) {
                                r(t);
                            }
                        }
                        function step(t) {
                            t.done
                                ? s(t.value)
                                : adopt(t.value).then(fulfilled, rejected);
                        }
                        step((i = i.apply(t, e || [])).next());
                    });
                };
            Object.defineProperty(e, "__esModule", { value: true });
            e.HttpClient =
                e.isHttps =
                e.HttpClientResponse =
                e.HttpClientError =
                e.getProxyUrl =
                e.MediaTypes =
                e.Headers =
                e.HttpCodes =
                    void 0;
            const h = n(s(3685));
            const a = n(s(5687));
            const l = n(s(9835));
            const c = n(s(4294));
            var u;
            (function (t) {
                t[(t["OK"] = 200)] = "OK";
                t[(t["MultipleChoices"] = 300)] = "MultipleChoices";
                t[(t["MovedPermanently"] = 301)] = "MovedPermanently";
                t[(t["ResourceMoved"] = 302)] = "ResourceMoved";
                t[(t["SeeOther"] = 303)] = "SeeOther";
                t[(t["NotModified"] = 304)] = "NotModified";
                t[(t["UseProxy"] = 305)] = "UseProxy";
                t[(t["SwitchProxy"] = 306)] = "SwitchProxy";
                t[(t["TemporaryRedirect"] = 307)] = "TemporaryRedirect";
                t[(t["PermanentRedirect"] = 308)] = "PermanentRedirect";
                t[(t["BadRequest"] = 400)] = "BadRequest";
                t[(t["Unauthorized"] = 401)] = "Unauthorized";
                t[(t["PaymentRequired"] = 402)] = "PaymentRequired";
                t[(t["Forbidden"] = 403)] = "Forbidden";
                t[(t["NotFound"] = 404)] = "NotFound";
                t[(t["MethodNotAllowed"] = 405)] = "MethodNotAllowed";
                t[(t["NotAcceptable"] = 406)] = "NotAcceptable";
                t[(t["ProxyAuthenticationRequired"] = 407)] =
                    "ProxyAuthenticationRequired";
                t[(t["RequestTimeout"] = 408)] = "RequestTimeout";
                t[(t["Conflict"] = 409)] = "Conflict";
                t[(t["Gone"] = 410)] = "Gone";
                t[(t["TooManyRequests"] = 429)] = "TooManyRequests";
                t[(t["InternalServerError"] = 500)] = "InternalServerError";
                t[(t["NotImplemented"] = 501)] = "NotImplemented";
                t[(t["BadGateway"] = 502)] = "BadGateway";
                t[(t["ServiceUnavailable"] = 503)] = "ServiceUnavailable";
                t[(t["GatewayTimeout"] = 504)] = "GatewayTimeout";
            })((u = e.HttpCodes || (e.HttpCodes = {})));
            var f;
            (function (t) {
                t["Accept"] = "accept";
                t["ContentType"] = "content-type";
            })((f = e.Headers || (e.Headers = {})));
            var d;
            (function (t) {
                t["ApplicationJson"] = "application/json";
            })((d = e.MediaTypes || (e.MediaTypes = {})));
            function getProxyUrl(t) {
                const e = l.getProxyUrl(new URL(t));
                return e ? e.href : "";
            }
            e.getProxyUrl = getProxyUrl;
            const p = [
                u.MovedPermanently,
                u.ResourceMoved,
                u.SeeOther,
                u.TemporaryRedirect,
                u.PermanentRedirect,
            ];
            const m = [u.BadGateway, u.ServiceUnavailable, u.GatewayTimeout];
            const y = ["OPTIONS", "GET", "DELETE", "HEAD"];
            const b = 10;
            const g = 5;
            class HttpClientError extends Error {
                constructor(t, e) {
                    super(t);
                    this.name = "HttpClientError";
                    this.statusCode = e;
                    Object.setPrototypeOf(this, HttpClientError.prototype);
                }
            }
            e.HttpClientError = HttpClientError;
            class HttpClientResponse {
                constructor(t) {
                    this.message = t;
                }
                readBody() {
                    return o(this, void 0, void 0, function* () {
                        return new Promise((t) =>
                            o(this, void 0, void 0, function* () {
                                let e = Buffer.alloc(0);
                                this.message.on("data", (t) => {
                                    e = Buffer.concat([e, t]);
                                });
                                this.message.on("end", () => {
                                    t(e.toString());
                                });
                            })
                        );
                    });
                }
            }
            e.HttpClientResponse = HttpClientResponse;
            function isHttps(t) {
                const e = new URL(t);
                return e.protocol === "https:";
            }
            e.isHttps = isHttps;
            class HttpClient {
                constructor(t, e, s) {
                    this._ignoreSslError = false;
                    this._allowRedirects = true;
                    this._allowRedirectDowngrade = false;
                    this._maxRedirects = 50;
                    this._allowRetries = false;
                    this._maxRetries = 1;
                    this._keepAlive = false;
                    this._disposed = false;
                    this.userAgent = t;
                    this.handlers = e || [];
                    this.requestOptions = s;
                    if (s) {
                        if (s.ignoreSslError != null) {
                            this._ignoreSslError = s.ignoreSslError;
                        }
                        this._socketTimeout = s.socketTimeout;
                        if (s.allowRedirects != null) {
                            this._allowRedirects = s.allowRedirects;
                        }
                        if (s.allowRedirectDowngrade != null) {
                            this._allowRedirectDowngrade =
                                s.allowRedirectDowngrade;
                        }
                        if (s.maxRedirects != null) {
                            this._maxRedirects = Math.max(s.maxRedirects, 0);
                        }
                        if (s.keepAlive != null) {
                            this._keepAlive = s.keepAlive;
                        }
                        if (s.allowRetries != null) {
                            this._allowRetries = s.allowRetries;
                        }
                        if (s.maxRetries != null) {
                            this._maxRetries = s.maxRetries;
                        }
                    }
                }
                options(t, e) {
                    return o(this, void 0, void 0, function* () {
                        return this.request("OPTIONS", t, null, e || {});
                    });
                }
                get(t, e) {
                    return o(this, void 0, void 0, function* () {
                        return this.request("GET", t, null, e || {});
                    });
                }
                del(t, e) {
                    return o(this, void 0, void 0, function* () {
                        return this.request("DELETE", t, null, e || {});
                    });
                }
                post(t, e, s) {
                    return o(this, void 0, void 0, function* () {
                        return this.request("POST", t, e, s || {});
                    });
                }
                patch(t, e, s) {
                    return o(this, void 0, void 0, function* () {
                        return this.request("PATCH", t, e, s || {});
                    });
                }
                put(t, e, s) {
                    return o(this, void 0, void 0, function* () {
                        return this.request("PUT", t, e, s || {});
                    });
                }
                head(t, e) {
                    return o(this, void 0, void 0, function* () {
                        return this.request("HEAD", t, null, e || {});
                    });
                }
                sendStream(t, e, s, i) {
                    return o(this, void 0, void 0, function* () {
                        return this.request(t, e, s, i);
                    });
                }
                getJson(t, e = {}) {
                    return o(this, void 0, void 0, function* () {
                        e[f.Accept] = this._getExistingOrDefaultHeader(
                            e,
                            f.Accept,
                            d.ApplicationJson
                        );
                        const s = yield this.get(t, e);
                        return this._processResponse(s, this.requestOptions);
                    });
                }
                postJson(t, e, s = {}) {
                    return o(this, void 0, void 0, function* () {
                        const i = JSON.stringify(e, null, 2);
                        s[f.Accept] = this._getExistingOrDefaultHeader(
                            s,
                            f.Accept,
                            d.ApplicationJson
                        );
                        s[f.ContentType] = this._getExistingOrDefaultHeader(
                            s,
                            f.ContentType,
                            d.ApplicationJson
                        );
                        const r = yield this.post(t, i, s);
                        return this._processResponse(r, this.requestOptions);
                    });
                }
                putJson(t, e, s = {}) {
                    return o(this, void 0, void 0, function* () {
                        const i = JSON.stringify(e, null, 2);
                        s[f.Accept] = this._getExistingOrDefaultHeader(
                            s,
                            f.Accept,
                            d.ApplicationJson
                        );
                        s[f.ContentType] = this._getExistingOrDefaultHeader(
                            s,
                            f.ContentType,
                            d.ApplicationJson
                        );
                        const r = yield this.put(t, i, s);
                        return this._processResponse(r, this.requestOptions);
                    });
                }
                patchJson(t, e, s = {}) {
                    return o(this, void 0, void 0, function* () {
                        const i = JSON.stringify(e, null, 2);
                        s[f.Accept] = this._getExistingOrDefaultHeader(
                            s,
                            f.Accept,
                            d.ApplicationJson
                        );
                        s[f.ContentType] = this._getExistingOrDefaultHeader(
                            s,
                            f.ContentType,
                            d.ApplicationJson
                        );
                        const r = yield this.patch(t, i, s);
                        return this._processResponse(r, this.requestOptions);
                    });
                }
                request(t, e, s, i) {
                    return o(this, void 0, void 0, function* () {
                        if (this._disposed) {
                            throw new Error(
                                "Client has already been disposed."
                            );
                        }
                        const r = new URL(e);
                        let n = this._prepareRequest(t, r, i);
                        const o =
                            this._allowRetries && y.includes(t)
                                ? this._maxRetries + 1
                                : 1;
                        let h = 0;
                        let a;
                        do {
                            a = yield this.requestRaw(n, s);
                            if (
                                a &&
                                a.message &&
                                a.message.statusCode === u.Unauthorized
                            ) {
                                let t;
                                for (const e of this.handlers) {
                                    if (e.canHandleAuthentication(a)) {
                                        t = e;
                                        break;
                                    }
                                }
                                if (t) {
                                    return t.handleAuthentication(this, n, s);
                                } else {
                                    return a;
                                }
                            }
                            let e = this._maxRedirects;
                            while (
                                a.message.statusCode &&
                                p.includes(a.message.statusCode) &&
                                this._allowRedirects &&
                                e > 0
                            ) {
                                const o = a.message.headers["location"];
                                if (!o) {
                                    break;
                                }
                                const h = new URL(o);
                                if (
                                    r.protocol === "https:" &&
                                    r.protocol !== h.protocol &&
                                    !this._allowRedirectDowngrade
                                ) {
                                    throw new Error(
                                        "Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true."
                                    );
                                }
                                yield a.readBody();
                                if (h.hostname !== r.hostname) {
                                    for (const t in i) {
                                        if (
                                            t.toLowerCase() === "authorization"
                                        ) {
                                            delete i[t];
                                        }
                                    }
                                }
                                n = this._prepareRequest(t, h, i);
                                a = yield this.requestRaw(n, s);
                                e--;
                            }
                            if (
                                !a.message.statusCode ||
                                !m.includes(a.message.statusCode)
                            ) {
                                return a;
                            }
                            h += 1;
                            if (h < o) {
                                yield a.readBody();
                                yield this._performExponentialBackoff(h);
                            }
                        } while (h < o);
                        return a;
                    });
                }
                dispose() {
                    if (this._agent) {
                        this._agent.destroy();
                    }
                    this._disposed = true;
                }
                requestRaw(t, e) {
                    return o(this, void 0, void 0, function* () {
                        return new Promise((s, i) => {
                            function callbackForResult(t, e) {
                                if (t) {
                                    i(t);
                                } else if (!e) {
                                    i(new Error("Unknown error"));
                                } else {
                                    s(e);
                                }
                            }
                            this.requestRawWithCallback(
                                t,
                                e,
                                callbackForResult
                            );
                        });
                    });
                }
                requestRawWithCallback(t, e, s) {
                    if (typeof e === "string") {
                        if (!t.options.headers) {
                            t.options.headers = {};
                        }
                        t.options.headers["Content-Length"] = Buffer.byteLength(
                            e,
                            "utf8"
                        );
                    }
                    let i = false;
                    function handleResult(t, e) {
                        if (!i) {
                            i = true;
                            s(t, e);
                        }
                    }
                    const r = t.httpModule.request(t.options, (t) => {
                        const e = new HttpClientResponse(t);
                        handleResult(undefined, e);
                    });
                    let n;
                    r.on("socket", (t) => {
                        n = t;
                    });
                    r.setTimeout(this._socketTimeout || 3 * 6e4, () => {
                        if (n) {
                            n.end();
                        }
                        handleResult(
                            new Error(`Request timeout: ${t.options.path}`)
                        );
                    });
                    r.on("error", function (t) {
                        handleResult(t);
                    });
                    if (e && typeof e === "string") {
                        r.write(e, "utf8");
                    }
                    if (e && typeof e !== "string") {
                        e.on("close", function () {
                            r.end();
                        });
                        e.pipe(r);
                    } else {
                        r.end();
                    }
                }
                getAgent(t) {
                    const e = new URL(t);
                    return this._getAgent(e);
                }
                _prepareRequest(t, e, s) {
                    const i = {};
                    i.parsedUrl = e;
                    const r = i.parsedUrl.protocol === "https:";
                    i.httpModule = r ? a : h;
                    const n = r ? 443 : 80;
                    i.options = {};
                    i.options.host = i.parsedUrl.hostname;
                    i.options.port = i.parsedUrl.port
                        ? parseInt(i.parsedUrl.port)
                        : n;
                    i.options.path =
                        (i.parsedUrl.pathname || "") +
                        (i.parsedUrl.search || "");
                    i.options.method = t;
                    i.options.headers = this._mergeHeaders(s);
                    if (this.userAgent != null) {
                        i.options.headers["user-agent"] = this.userAgent;
                    }
                    i.options.agent = this._getAgent(i.parsedUrl);
                    if (this.handlers) {
                        for (const t of this.handlers) {
                            t.prepareRequest(i.options);
                        }
                    }
                    return i;
                }
                _mergeHeaders(t) {
                    if (this.requestOptions && this.requestOptions.headers) {
                        return Object.assign(
                            {},
                            lowercaseKeys(this.requestOptions.headers),
                            lowercaseKeys(t || {})
                        );
                    }
                    return lowercaseKeys(t || {});
                }
                _getExistingOrDefaultHeader(t, e, s) {
                    let i;
                    if (this.requestOptions && this.requestOptions.headers) {
                        i = lowercaseKeys(this.requestOptions.headers)[e];
                    }
                    return t[e] || i || s;
                }
                _getAgent(t) {
                    let e;
                    const s = l.getProxyUrl(t);
                    const i = s && s.hostname;
                    if (this._keepAlive && i) {
                        e = this._proxyAgent;
                    }
                    if (this._keepAlive && !i) {
                        e = this._agent;
                    }
                    if (e) {
                        return e;
                    }
                    const r = t.protocol === "https:";
                    let n = 100;
                    if (this.requestOptions) {
                        n =
                            this.requestOptions.maxSockets ||
                            h.globalAgent.maxSockets;
                    }
                    if (s && s.hostname) {
                        const t = {
                            maxSockets: n,
                            keepAlive: this._keepAlive,
                            proxy: Object.assign(
                                Object.assign(
                                    {},
                                    (s.username || s.password) && {
                                        proxyAuth: `${s.username}:${s.password}`,
                                    }
                                ),
                                { host: s.hostname, port: s.port }
                            ),
                        };
                        let i;
                        const o = s.protocol === "https:";
                        if (r) {
                            i = o ? c.httpsOverHttps : c.httpsOverHttp;
                        } else {
                            i = o ? c.httpOverHttps : c.httpOverHttp;
                        }
                        e = i(t);
                        this._proxyAgent = e;
                    }
                    if (this._keepAlive && !e) {
                        const t = { keepAlive: this._keepAlive, maxSockets: n };
                        e = r ? new a.Agent(t) : new h.Agent(t);
                        this._agent = e;
                    }
                    if (!e) {
                        e = r ? a.globalAgent : h.globalAgent;
                    }
                    if (r && this._ignoreSslError) {
                        e.options = Object.assign(e.options || {}, {
                            rejectUnauthorized: false,
                        });
                    }
                    return e;
                }
                _performExponentialBackoff(t) {
                    return o(this, void 0, void 0, function* () {
                        t = Math.min(b, t);
                        const e = g * Math.pow(2, t);
                        return new Promise((t) => setTimeout(() => t(), e));
                    });
                }
                _processResponse(t, e) {
                    return o(this, void 0, void 0, function* () {
                        return new Promise((s, i) =>
                            o(this, void 0, void 0, function* () {
                                const r = t.message.statusCode || 0;
                                const n = {
                                    statusCode: r,
                                    result: null,
                                    headers: {},
                                };
                                if (r === u.NotFound) {
                                    s(n);
                                }
                                function dateTimeDeserializer(t, e) {
                                    if (typeof e === "string") {
                                        const t = new Date(e);
                                        if (!isNaN(t.valueOf())) {
                                            return t;
                                        }
                                    }
                                    return e;
                                }
                                let o;
                                let h;
                                try {
                                    h = yield t.readBody();
                                    if (h && h.length > 0) {
                                        if (e && e.deserializeDates) {
                                            o = JSON.parse(
                                                h,
                                                dateTimeDeserializer
                                            );
                                        } else {
                                            o = JSON.parse(h);
                                        }
                                        n.result = o;
                                    }
                                    n.headers = t.message.headers;
                                } catch (t) {}
                                if (r > 299) {
                                    let t;
                                    if (o && o.message) {
                                        t = o.message;
                                    } else if (h && h.length > 0) {
                                        t = h;
                                    } else {
                                        t = `Failed request: (${r})`;
                                    }
                                    const e = new HttpClientError(t, r);
                                    e.result = n.result;
                                    i(e);
                                } else {
                                    s(n);
                                }
                            })
                        );
                    });
                }
            }
            e.HttpClient = HttpClient;
            const lowercaseKeys = (t) =>
                Object.keys(t).reduce(
                    (e, s) => ((e[s.toLowerCase()] = t[s]), e),
                    {}
                );
        },
        9835: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            e.checkBypass = e.getProxyUrl = void 0;
            function getProxyUrl(t) {
                const e = t.protocol === "https:";
                if (checkBypass(t)) {
                    return undefined;
                }
                const s = (() => {
                    if (e) {
                        return (
                            process.env["https_proxy"] ||
                            process.env["HTTPS_PROXY"]
                        );
                    } else {
                        return (
                            process.env["http_proxy"] ||
                            process.env["HTTP_PROXY"]
                        );
                    }
                })();
                if (s) {
                    return new URL(s);
                } else {
                    return undefined;
                }
            }
            e.getProxyUrl = getProxyUrl;
            function checkBypass(t) {
                if (!t.hostname) {
                    return false;
                }
                const e = t.hostname;
                if (isLoopbackAddress(e)) {
                    return true;
                }
                const s =
                    process.env["no_proxy"] || process.env["NO_PROXY"] || "";
                if (!s) {
                    return false;
                }
                let i;
                if (t.port) {
                    i = Number(t.port);
                } else if (t.protocol === "http:") {
                    i = 80;
                } else if (t.protocol === "https:") {
                    i = 443;
                }
                const r = [t.hostname.toUpperCase()];
                if (typeof i === "number") {
                    r.push(`${r[0]}:${i}`);
                }
                for (const t of s
                    .split(",")
                    .map((t) => t.trim().toUpperCase())
                    .filter((t) => t)) {
                    if (
                        t === "*" ||
                        r.some(
                            (e) =>
                                e === t ||
                                e.endsWith(`.${t}`) ||
                                (t.startsWith(".") && e.endsWith(`${t}`))
                        )
                    ) {
                        return true;
                    }
                }
                return false;
            }
            e.checkBypass = checkBypass;
            function isLoopbackAddress(t) {
                const e = t.toLowerCase();
                return (
                    e === "localhost" ||
                    e.startsWith("127.") ||
                    e.startsWith("[::1]") ||
                    e.startsWith("[0:0:0:0:0:0:0:1]")
                );
            }
        },
        9051: (t, e, s) => {
            "use strict";
            const i = s(7147);
            const r = s(1017);
            const n = i.lchown ? "lchown" : "chown";
            const o = i.lchownSync ? "lchownSync" : "chownSync";
            const h =
                i.lchown &&
                !process.version.match(/v1[1-9]+\./) &&
                !process.version.match(/v10\.[6-9]/);
            const lchownSync = (t, e, s) => {
                try {
                    return i[o](t, e, s);
                } catch (t) {
                    if (t.code !== "ENOENT") throw t;
                }
            };
            const chownSync = (t, e, s) => {
                try {
                    return i.chownSync(t, e, s);
                } catch (t) {
                    if (t.code !== "ENOENT") throw t;
                }
            };
            const a = h
                ? (t, e, s, r) => (n) => {
                      if (!n || n.code !== "EISDIR") r(n);
                      else i.chown(t, e, s, r);
                  }
                : (t, e, s, i) => i;
            const l = h
                ? (t, e, s) => {
                      try {
                          return lchownSync(t, e, s);
                      } catch (i) {
                          if (i.code !== "EISDIR") throw i;
                          chownSync(t, e, s);
                      }
                  }
                : (t, e, s) => lchownSync(t, e, s);
            const c = process.version;
            let readdir = (t, e, s) => i.readdir(t, e, s);
            let readdirSync = (t, e) => i.readdirSync(t, e);
            if (/^v4\./.test(c)) readdir = (t, e, s) => i.readdir(t, s);
            const chown = (t, e, s, r) => {
                i[n](
                    t,
                    e,
                    s,
                    a(t, e, s, (t) => {
                        r(t && t.code !== "ENOENT" ? t : null);
                    })
                );
            };
            const chownrKid = (t, e, s, n, o) => {
                if (typeof e === "string")
                    return i.lstat(r.resolve(t, e), (i, r) => {
                        if (i) return o(i.code !== "ENOENT" ? i : null);
                        r.name = e;
                        chownrKid(t, r, s, n, o);
                    });
                if (e.isDirectory()) {
                    chownr(r.resolve(t, e.name), s, n, (i) => {
                        if (i) return o(i);
                        const h = r.resolve(t, e.name);
                        chown(h, s, n, o);
                    });
                } else {
                    const i = r.resolve(t, e.name);
                    chown(i, s, n, o);
                }
            };
            const chownr = (t, e, s, i) => {
                readdir(t, { withFileTypes: true }, (r, n) => {
                    if (r) {
                        if (r.code === "ENOENT") return i();
                        else if (r.code !== "ENOTDIR" && r.code !== "ENOTSUP")
                            return i(r);
                    }
                    if (r || !n.length) return chown(t, e, s, i);
                    let o = n.length;
                    let h = null;
                    const then = (r) => {
                        if (h) return;
                        if (r) return i((h = r));
                        if (--o === 0) return chown(t, e, s, i);
                    };
                    n.forEach((i) => chownrKid(t, i, e, s, then));
                });
            };
            const chownrKidSync = (t, e, s, n) => {
                if (typeof e === "string") {
                    try {
                        const s = i.lstatSync(r.resolve(t, e));
                        s.name = e;
                        e = s;
                    } catch (t) {
                        if (t.code === "ENOENT") return;
                        else throw t;
                    }
                }
                if (e.isDirectory()) chownrSync(r.resolve(t, e.name), s, n);
                l(r.resolve(t, e.name), s, n);
            };
            const chownrSync = (t, e, s) => {
                let i;
                try {
                    i = readdirSync(t, { withFileTypes: true });
                } catch (i) {
                    if (i.code === "ENOENT") return;
                    else if (i.code === "ENOTDIR" || i.code === "ENOTSUP")
                        return l(t, e, s);
                    else throw i;
                }
                if (i && i.length) i.forEach((i) => chownrKidSync(t, i, e, s));
                return l(t, e, s);
            };
            t.exports = chownr;
            chownr.sync = chownrSync;
        },
        968: (t, e, s) => {
            "use strict";
            const { Minipass: i } = s(1077);
            const r = s(2361).EventEmitter;
            const n = s(7147);
            const o = n.writev;
            const h = Symbol("_autoClose");
            const a = Symbol("_close");
            const l = Symbol("_ended");
            const c = Symbol("_fd");
            const u = Symbol("_finished");
            const f = Symbol("_flags");
            const d = Symbol("_flush");
            const p = Symbol("_handleChunk");
            const m = Symbol("_makeBuf");
            const y = Symbol("_mode");
            const b = Symbol("_needDrain");
            const g = Symbol("_onerror");
            const w = Symbol("_onopen");
            const _ = Symbol("_onread");
            const E = Symbol("_onwrite");
            const S = Symbol("_open");
            const v = Symbol("_path");
            const R = Symbol("_pos");
            const O = Symbol("_queue");
            const T = Symbol("_read");
            const k = Symbol("_readSize");
            const x = Symbol("_reading");
            const A = Symbol("_remain");
            const P = Symbol("_size");
            const C = Symbol("_write");
            const L = Symbol("_writing");
            const D = Symbol("_defaultFlag");
            const M = Symbol("_errored");
            class ReadStream extends i {
                constructor(t, e) {
                    e = e || {};
                    super(e);
                    this.readable = true;
                    this.writable = false;
                    if (typeof t !== "string") {
                        throw new TypeError("path must be a string");
                    }
                    this[M] = false;
                    this[c] = typeof e.fd === "number" ? e.fd : null;
                    this[v] = t;
                    this[k] = e.readSize || 16 * 1024 * 1024;
                    this[x] = false;
                    this[P] = typeof e.size === "number" ? e.size : Infinity;
                    this[A] = this[P];
                    this[h] =
                        typeof e.autoClose === "boolean" ? e.autoClose : true;
                    if (typeof this[c] === "number") {
                        this[T]();
                    } else {
                        this[S]();
                    }
                }
                get fd() {
                    return this[c];
                }
                get path() {
                    return this[v];
                }
                write() {
                    throw new TypeError("this is a readable stream");
                }
                end() {
                    throw new TypeError("this is a readable stream");
                }
                [S]() {
                    n.open(this[v], "r", (t, e) => this[w](t, e));
                }
                [w](t, e) {
                    if (t) {
                        this[g](t);
                    } else {
                        this[c] = e;
                        this.emit("open", e);
                        this[T]();
                    }
                }
                [m]() {
                    return Buffer.allocUnsafe(Math.min(this[k], this[A]));
                }
                [T]() {
                    if (!this[x]) {
                        this[x] = true;
                        const t = this[m]();
                        if (t.length === 0) {
                            return process.nextTick(() => this[_](null, 0, t));
                        }
                        n.read(this[c], t, 0, t.length, null, (t, e, s) =>
                            this[_](t, e, s)
                        );
                    }
                }
                [_](t, e, s) {
                    this[x] = false;
                    if (t) {
                        this[g](t);
                    } else if (this[p](e, s)) {
                        this[T]();
                    }
                }
                [a]() {
                    if (this[h] && typeof this[c] === "number") {
                        const t = this[c];
                        this[c] = null;
                        n.close(t, (t) =>
                            t ? this.emit("error", t) : this.emit("close")
                        );
                    }
                }
                [g](t) {
                    this[x] = true;
                    this[a]();
                    this.emit("error", t);
                }
                [p](t, e) {
                    let s = false;
                    this[A] -= t;
                    if (t > 0) {
                        s = super.write(t < e.length ? e.slice(0, t) : e);
                    }
                    if (t === 0 || this[A] <= 0) {
                        s = false;
                        this[a]();
                        super.end();
                    }
                    return s;
                }
                emit(t, e) {
                    switch (t) {
                        case "prefinish":
                        case "finish":
                            break;
                        case "drain":
                            if (typeof this[c] === "number") {
                                this[T]();
                            }
                            break;
                        case "error":
                            if (this[M]) {
                                return;
                            }
                            this[M] = true;
                            return super.emit(t, e);
                        default:
                            return super.emit(t, e);
                    }
                }
            }
            class ReadStreamSync extends ReadStream {
                [S]() {
                    let t = true;
                    try {
                        this[w](null, n.openSync(this[v], "r"));
                        t = false;
                    } finally {
                        if (t) {
                            this[a]();
                        }
                    }
                }
                [T]() {
                    let t = true;
                    try {
                        if (!this[x]) {
                            this[x] = true;
                            do {
                                const t = this[m]();
                                const e =
                                    t.length === 0
                                        ? 0
                                        : n.readSync(
                                              this[c],
                                              t,
                                              0,
                                              t.length,
                                              null
                                          );
                                if (!this[p](e, t)) {
                                    break;
                                }
                            } while (true);
                            this[x] = false;
                        }
                        t = false;
                    } finally {
                        if (t) {
                            this[a]();
                        }
                    }
                }
                [a]() {
                    if (this[h] && typeof this[c] === "number") {
                        const t = this[c];
                        this[c] = null;
                        n.closeSync(t);
                        this.emit("close");
                    }
                }
            }
            class WriteStream extends r {
                constructor(t, e) {
                    e = e || {};
                    super(e);
                    this.readable = false;
                    this.writable = true;
                    this[M] = false;
                    this[L] = false;
                    this[l] = false;
                    this[b] = false;
                    this[O] = [];
                    this[v] = t;
                    this[c] = typeof e.fd === "number" ? e.fd : null;
                    this[y] = e.mode === undefined ? 438 : e.mode;
                    this[R] = typeof e.start === "number" ? e.start : null;
                    this[h] =
                        typeof e.autoClose === "boolean" ? e.autoClose : true;
                    const s = this[R] !== null ? "r+" : "w";
                    this[D] = e.flags === undefined;
                    this[f] = this[D] ? s : e.flags;
                    if (this[c] === null) {
                        this[S]();
                    }
                }
                emit(t, e) {
                    if (t === "error") {
                        if (this[M]) {
                            return;
                        }
                        this[M] = true;
                    }
                    return super.emit(t, e);
                }
                get fd() {
                    return this[c];
                }
                get path() {
                    return this[v];
                }
                [g](t) {
                    this[a]();
                    this[L] = true;
                    this.emit("error", t);
                }
                [S]() {
                    n.open(this[v], this[f], this[y], (t, e) => this[w](t, e));
                }
                [w](t, e) {
                    if (
                        this[D] &&
                        this[f] === "r+" &&
                        t &&
                        t.code === "ENOENT"
                    ) {
                        this[f] = "w";
                        this[S]();
                    } else if (t) {
                        this[g](t);
                    } else {
                        this[c] = e;
                        this.emit("open", e);
                        if (!this[L]) {
                            this[d]();
                        }
                    }
                }
                end(t, e) {
                    if (t) {
                        this.write(t, e);
                    }
                    this[l] = true;
                    if (
                        !this[L] &&
                        !this[O].length &&
                        typeof this[c] === "number"
                    ) {
                        this[E](null, 0);
                    }
                    return this;
                }
                write(t, e) {
                    if (typeof t === "string") {
                        t = Buffer.from(t, e);
                    }
                    if (this[l]) {
                        this.emit("error", new Error("write() after end()"));
                        return false;
                    }
                    if (this[c] === null || this[L] || this[O].length) {
                        this[O].push(t);
                        this[b] = true;
                        return false;
                    }
                    this[L] = true;
                    this[C](t);
                    return true;
                }
                [C](t) {
                    n.write(this[c], t, 0, t.length, this[R], (t, e) =>
                        this[E](t, e)
                    );
                }
                [E](t, e) {
                    if (t) {
                        this[g](t);
                    } else {
                        if (this[R] !== null) {
                            this[R] += e;
                        }
                        if (this[O].length) {
                            this[d]();
                        } else {
                            this[L] = false;
                            if (this[l] && !this[u]) {
                                this[u] = true;
                                this[a]();
                                this.emit("finish");
                            } else if (this[b]) {
                                this[b] = false;
                                this.emit("drain");
                            }
                        }
                    }
                }
                [d]() {
                    if (this[O].length === 0) {
                        if (this[l]) {
                            this[E](null, 0);
                        }
                    } else if (this[O].length === 1) {
                        this[C](this[O].pop());
                    } else {
                        const t = this[O];
                        this[O] = [];
                        o(this[c], t, this[R], (t, e) => this[E](t, e));
                    }
                }
                [a]() {
                    if (this[h] && typeof this[c] === "number") {
                        const t = this[c];
                        this[c] = null;
                        n.close(t, (t) =>
                            t ? this.emit("error", t) : this.emit("close")
                        );
                    }
                }
            }
            class WriteStreamSync extends WriteStream {
                [S]() {
                    let t;
                    if (this[D] && this[f] === "r+") {
                        try {
                            t = n.openSync(this[v], this[f], this[y]);
                        } catch (t) {
                            if (t.code === "ENOENT") {
                                this[f] = "w";
                                return this[S]();
                            } else {
                                throw t;
                            }
                        }
                    } else {
                        t = n.openSync(this[v], this[f], this[y]);
                    }
                    this[w](null, t);
                }
                [a]() {
                    if (this[h] && typeof this[c] === "number") {
                        const t = this[c];
                        this[c] = null;
                        n.closeSync(t);
                        this.emit("close");
                    }
                }
                [C](t) {
                    let e = true;
                    try {
                        this[E](
                            null,
                            n.writeSync(this[c], t, 0, t.length, this[R])
                        );
                        e = false;
                    } finally {
                        if (e) {
                            try {
                                this[a]();
                            } catch {}
                        }
                    }
                }
            }
            e.ReadStream = ReadStream;
            e.ReadStreamSync = ReadStreamSync;
            e.WriteStream = WriteStream;
            e.WriteStreamSync = WriteStreamSync;
        },
        1077: (t, e, s) => {
            "use strict";
            const i =
                typeof process === "object" && process
                    ? process
                    : { stdout: null, stderr: null };
            const r = s(2361);
            const n = s(2781);
            const o = s(1576);
            const h = o.StringDecoder;
            const a = Symbol("EOF");
            const l = Symbol("maybeEmitEnd");
            const c = Symbol("emittedEnd");
            const u = Symbol("emittingEnd");
            const f = Symbol("emittedError");
            const d = Symbol("closed");
            const p = Symbol("read");
            const m = Symbol("flush");
            const y = Symbol("flushChunk");
            const b = Symbol("encoding");
            const g = Symbol("decoder");
            const w = Symbol("flowing");
            const _ = Symbol("paused");
            const E = Symbol("resume");
            const S = Symbol("buffer");
            const v = Symbol("pipes");
            const R = Symbol("bufferLength");
            const O = Symbol("bufferPush");
            const T = Symbol("bufferShift");
            const k = Symbol("objectMode");
            const x = Symbol("destroyed");
            const A = Symbol("error");
            const P = Symbol("emitData");
            const C = Symbol("emitEnd");
            const L = Symbol("emitEnd2");
            const D = Symbol("async");
            const M = Symbol("abort");
            const I = Symbol("aborted");
            const N = Symbol("signal");
            const defer = (t) => Promise.resolve().then(t);
            const B = global._MP_NO_ITERATOR_SYMBOLS_ !== "1";
            const U =
                (B && Symbol.asyncIterator) ||
                Symbol("asyncIterator not implemented");
            const F =
                (B && Symbol.iterator) || Symbol("iterator not implemented");
            const isEndish = (t) =>
                t === "end" || t === "finish" || t === "prefinish";
            const isArrayBuffer = (t) =>
                t instanceof ArrayBuffer ||
                (typeof t === "object" &&
                    t.constructor &&
                    t.constructor.name === "ArrayBuffer" &&
                    t.byteLength >= 0);
            const isArrayBufferView = (t) =>
                !Buffer.isBuffer(t) && ArrayBuffer.isView(t);
            class Pipe {
                constructor(t, e, s) {
                    this.src = t;
                    this.dest = e;
                    this.opts = s;
                    this.ondrain = () => t[E]();
                    e.on("drain", this.ondrain);
                }
                unpipe() {
                    this.dest.removeListener("drain", this.ondrain);
                }
                proxyErrors() {}
                end() {
                    this.unpipe();
                    if (this.opts.end) this.dest.end();
                }
            }
            class PipeProxyErrors extends Pipe {
                unpipe() {
                    this.src.removeListener("error", this.proxyErrors);
                    super.unpipe();
                }
                constructor(t, e, s) {
                    super(t, e, s);
                    this.proxyErrors = (t) => e.emit("error", t);
                    t.on("error", this.proxyErrors);
                }
            }
            class Minipass extends n {
                constructor(t) {
                    super();
                    this[w] = false;
                    this[_] = false;
                    this[v] = [];
                    this[S] = [];
                    this[k] = (t && t.objectMode) || false;
                    if (this[k]) this[b] = null;
                    else this[b] = (t && t.encoding) || null;
                    if (this[b] === "buffer") this[b] = null;
                    this[D] = (t && !!t.async) || false;
                    this[g] = this[b] ? new h(this[b]) : null;
                    this[a] = false;
                    this[c] = false;
                    this[u] = false;
                    this[d] = false;
                    this[f] = null;
                    this.writable = true;
                    this.readable = true;
                    this[R] = 0;
                    this[x] = false;
                    if (t && t.debugExposeBuffer === true) {
                        Object.defineProperty(this, "buffer", {
                            get: () => this[S],
                        });
                    }
                    if (t && t.debugExposePipes === true) {
                        Object.defineProperty(this, "pipes", {
                            get: () => this[v],
                        });
                    }
                    this[N] = t && t.signal;
                    this[I] = false;
                    if (this[N]) {
                        this[N].addEventListener("abort", () => this[M]());
                        if (this[N].aborted) {
                            this[M]();
                        }
                    }
                }
                get bufferLength() {
                    return this[R];
                }
                get encoding() {
                    return this[b];
                }
                set encoding(t) {
                    if (this[k])
                        throw new Error("cannot set encoding in objectMode");
                    if (
                        this[b] &&
                        t !== this[b] &&
                        ((this[g] && this[g].lastNeed) || this[R])
                    )
                        throw new Error("cannot change encoding");
                    if (this[b] !== t) {
                        this[g] = t ? new h(t) : null;
                        if (this[S].length)
                            this[S] = this[S].map((t) => this[g].write(t));
                    }
                    this[b] = t;
                }
                setEncoding(t) {
                    this.encoding = t;
                }
                get objectMode() {
                    return this[k];
                }
                set objectMode(t) {
                    this[k] = this[k] || !!t;
                }
                get ["async"]() {
                    return this[D];
                }
                set ["async"](t) {
                    this[D] = this[D] || !!t;
                }
                [M]() {
                    this[I] = true;
                    this.emit("abort", this[N].reason);
                    this.destroy(this[N].reason);
                }
                get aborted() {
                    return this[I];
                }
                set aborted(t) {}
                write(t, e, s) {
                    if (this[I]) return false;
                    if (this[a]) throw new Error("write after end");
                    if (this[x]) {
                        this.emit(
                            "error",
                            Object.assign(
                                new Error(
                                    "Cannot call write after a stream was destroyed"
                                ),
                                { code: "ERR_STREAM_DESTROYED" }
                            )
                        );
                        return true;
                    }
                    if (typeof e === "function") (s = e), (e = "utf8");
                    if (!e) e = "utf8";
                    const i = this[D] ? defer : (t) => t();
                    if (!this[k] && !Buffer.isBuffer(t)) {
                        if (isArrayBufferView(t))
                            t = Buffer.from(
                                t.buffer,
                                t.byteOffset,
                                t.byteLength
                            );
                        else if (isArrayBuffer(t)) t = Buffer.from(t);
                        else if (typeof t !== "string") this.objectMode = true;
                    }
                    if (this[k]) {
                        if (this.flowing && this[R] !== 0) this[m](true);
                        if (this.flowing) this.emit("data", t);
                        else this[O](t);
                        if (this[R] !== 0) this.emit("readable");
                        if (s) i(s);
                        return this.flowing;
                    }
                    if (!t.length) {
                        if (this[R] !== 0) this.emit("readable");
                        if (s) i(s);
                        return this.flowing;
                    }
                    if (
                        typeof t === "string" &&
                        !(e === this[b] && !this[g].lastNeed)
                    ) {
                        t = Buffer.from(t, e);
                    }
                    if (Buffer.isBuffer(t) && this[b]) t = this[g].write(t);
                    if (this.flowing && this[R] !== 0) this[m](true);
                    if (this.flowing) this.emit("data", t);
                    else this[O](t);
                    if (this[R] !== 0) this.emit("readable");
                    if (s) i(s);
                    return this.flowing;
                }
                read(t) {
                    if (this[x]) return null;
                    if (this[R] === 0 || t === 0 || t > this[R]) {
                        this[l]();
                        return null;
                    }
                    if (this[k]) t = null;
                    if (this[S].length > 1 && !this[k]) {
                        if (this.encoding) this[S] = [this[S].join("")];
                        else this[S] = [Buffer.concat(this[S], this[R])];
                    }
                    const e = this[p](t || null, this[S][0]);
                    this[l]();
                    return e;
                }
                [p](t, e) {
                    if (t === e.length || t === null) this[T]();
                    else {
                        this[S][0] = e.slice(t);
                        e = e.slice(0, t);
                        this[R] -= t;
                    }
                    this.emit("data", e);
                    if (!this[S].length && !this[a]) this.emit("drain");
                    return e;
                }
                end(t, e, s) {
                    if (typeof t === "function") (s = t), (t = null);
                    if (typeof e === "function") (s = e), (e = "utf8");
                    if (t) this.write(t, e);
                    if (s) this.once("end", s);
                    this[a] = true;
                    this.writable = false;
                    if (this.flowing || !this[_]) this[l]();
                    return this;
                }
                [E]() {
                    if (this[x]) return;
                    this[_] = false;
                    this[w] = true;
                    this.emit("resume");
                    if (this[S].length) this[m]();
                    else if (this[a]) this[l]();
                    else this.emit("drain");
                }
                resume() {
                    return this[E]();
                }
                pause() {
                    this[w] = false;
                    this[_] = true;
                }
                get destroyed() {
                    return this[x];
                }
                get flowing() {
                    return this[w];
                }
                get paused() {
                    return this[_];
                }
                [O](t) {
                    if (this[k]) this[R] += 1;
                    else this[R] += t.length;
                    this[S].push(t);
                }
                [T]() {
                    if (this[k]) this[R] -= 1;
                    else this[R] -= this[S][0].length;
                    return this[S].shift();
                }
                [m](t) {
                    do {} while (this[y](this[T]()) && this[S].length);
                    if (!t && !this[S].length && !this[a]) this.emit("drain");
                }
                [y](t) {
                    this.emit("data", t);
                    return this.flowing;
                }
                pipe(t, e) {
                    if (this[x]) return;
                    const s = this[c];
                    e = e || {};
                    if (t === i.stdout || t === i.stderr) e.end = false;
                    else e.end = e.end !== false;
                    e.proxyErrors = !!e.proxyErrors;
                    if (s) {
                        if (e.end) t.end();
                    } else {
                        this[v].push(
                            !e.proxyErrors
                                ? new Pipe(this, t, e)
                                : new PipeProxyErrors(this, t, e)
                        );
                        if (this[D]) defer(() => this[E]());
                        else this[E]();
                    }
                    return t;
                }
                unpipe(t) {
                    const e = this[v].find((e) => e.dest === t);
                    if (e) {
                        this[v].splice(this[v].indexOf(e), 1);
                        e.unpipe();
                    }
                }
                addListener(t, e) {
                    return this.on(t, e);
                }
                on(t, e) {
                    const s = super.on(t, e);
                    if (t === "data" && !this[v].length && !this.flowing)
                        this[E]();
                    else if (t === "readable" && this[R] !== 0)
                        super.emit("readable");
                    else if (isEndish(t) && this[c]) {
                        super.emit(t);
                        this.removeAllListeners(t);
                    } else if (t === "error" && this[f]) {
                        if (this[D]) defer(() => e.call(this, this[f]));
                        else e.call(this, this[f]);
                    }
                    return s;
                }
                get emittedEnd() {
                    return this[c];
                }
                [l]() {
                    if (
                        !this[u] &&
                        !this[c] &&
                        !this[x] &&
                        this[S].length === 0 &&
                        this[a]
                    ) {
                        this[u] = true;
                        this.emit("end");
                        this.emit("prefinish");
                        this.emit("finish");
                        if (this[d]) this.emit("close");
                        this[u] = false;
                    }
                }
                emit(t, e, ...s) {
                    if (t !== "error" && t !== "close" && t !== x && this[x])
                        return;
                    else if (t === "data") {
                        return !this[k] && !e
                            ? false
                            : this[D]
                            ? defer(() => this[P](e))
                            : this[P](e);
                    } else if (t === "end") {
                        return this[C]();
                    } else if (t === "close") {
                        this[d] = true;
                        if (!this[c] && !this[x]) return;
                        const t = super.emit("close");
                        this.removeAllListeners("close");
                        return t;
                    } else if (t === "error") {
                        this[f] = e;
                        super.emit(A, e);
                        const t =
                            !this[N] || this.listeners("error").length
                                ? super.emit("error", e)
                                : false;
                        this[l]();
                        return t;
                    } else if (t === "resume") {
                        const t = super.emit("resume");
                        this[l]();
                        return t;
                    } else if (t === "finish" || t === "prefinish") {
                        const e = super.emit(t);
                        this.removeAllListeners(t);
                        return e;
                    }
                    const i = super.emit(t, e, ...s);
                    this[l]();
                    return i;
                }
                [P](t) {
                    for (const e of this[v]) {
                        if (e.dest.write(t) === false) this.pause();
                    }
                    const e = super.emit("data", t);
                    this[l]();
                    return e;
                }
                [C]() {
                    if (this[c]) return;
                    this[c] = true;
                    this.readable = false;
                    if (this[D]) defer(() => this[L]());
                    else this[L]();
                }
                [L]() {
                    if (this[g]) {
                        const t = this[g].end();
                        if (t) {
                            for (const e of this[v]) {
                                e.dest.write(t);
                            }
                            super.emit("data", t);
                        }
                    }
                    for (const t of this[v]) {
                        t.end();
                    }
                    const t = super.emit("end");
                    this.removeAllListeners("end");
                    return t;
                }
                collect() {
                    const t = [];
                    if (!this[k]) t.dataLength = 0;
                    const e = this.promise();
                    this.on("data", (e) => {
                        t.push(e);
                        if (!this[k]) t.dataLength += e.length;
                    });
                    return e.then(() => t);
                }
                concat() {
                    return this[k]
                        ? Promise.reject(
                              new Error("cannot concat in objectMode")
                          )
                        : this.collect().then((t) =>
                              this[k]
                                  ? Promise.reject(
                                        new Error("cannot concat in objectMode")
                                    )
                                  : this[b]
                                  ? t.join("")
                                  : Buffer.concat(t, t.dataLength)
                          );
                }
                promise() {
                    return new Promise((t, e) => {
                        this.on(x, () => e(new Error("stream destroyed")));
                        this.on("error", (t) => e(t));
                        this.on("end", () => t());
                    });
                }
                [U]() {
                    let t = false;
                    const stop = () => {
                        this.pause();
                        t = true;
                        return Promise.resolve({ done: true });
                    };
                    const next = () => {
                        if (t) return stop();
                        const e = this.read();
                        if (e !== null)
                            return Promise.resolve({ done: false, value: e });
                        if (this[a]) return stop();
                        let s = null;
                        let i = null;
                        const onerr = (t) => {
                            this.removeListener("data", ondata);
                            this.removeListener("end", onend);
                            this.removeListener(x, ondestroy);
                            stop();
                            i(t);
                        };
                        const ondata = (t) => {
                            this.removeListener("error", onerr);
                            this.removeListener("end", onend);
                            this.removeListener(x, ondestroy);
                            this.pause();
                            s({ value: t, done: !!this[a] });
                        };
                        const onend = () => {
                            this.removeListener("error", onerr);
                            this.removeListener("data", ondata);
                            this.removeListener(x, ondestroy);
                            stop();
                            s({ done: true });
                        };
                        const ondestroy = () =>
                            onerr(new Error("stream destroyed"));
                        return new Promise((t, e) => {
                            i = e;
                            s = t;
                            this.once(x, ondestroy);
                            this.once("error", onerr);
                            this.once("end", onend);
                            this.once("data", ondata);
                        });
                    };
                    return {
                        next: next,
                        throw: stop,
                        return: stop,
                        [U]() {
                            return this;
                        },
                    };
                }
                [F]() {
                    let t = false;
                    const stop = () => {
                        this.pause();
                        this.removeListener(A, stop);
                        this.removeListener(x, stop);
                        this.removeListener("end", stop);
                        t = true;
                        return { done: true };
                    };
                    const next = () => {
                        if (t) return stop();
                        const e = this.read();
                        return e === null ? stop() : { value: e };
                    };
                    this.once("end", stop);
                    this.once(A, stop);
                    this.once(x, stop);
                    return {
                        next: next,
                        throw: stop,
                        return: stop,
                        [F]() {
                            return this;
                        },
                    };
                }
                destroy(t) {
                    if (this[x]) {
                        if (t) this.emit("error", t);
                        else this.emit(x);
                        return this;
                    }
                    this[x] = true;
                    this[S].length = 0;
                    this[R] = 0;
                    if (typeof this.close === "function" && !this[d])
                        this.close();
                    if (t) this.emit("error", t);
                    else this.emit(x);
                    return this;
                }
                static isStream(t) {
                    return (
                        !!t &&
                        (t instanceof Minipass ||
                            t instanceof n ||
                            (t instanceof r &&
                                (typeof t.pipe === "function" ||
                                    (typeof t.write === "function" &&
                                        typeof t.end === "function"))))
                    );
                }
            }
            e.Minipass = Minipass;
        },
        6769: (t, e, s) => {
            const i = s(9796).constants || { ZLIB_VERNUM: 4736 };
            t.exports = Object.freeze(
                Object.assign(
                    Object.create(null),
                    {
                        Z_NO_FLUSH: 0,
                        Z_PARTIAL_FLUSH: 1,
                        Z_SYNC_FLUSH: 2,
                        Z_FULL_FLUSH: 3,
                        Z_FINISH: 4,
                        Z_BLOCK: 5,
                        Z_OK: 0,
                        Z_STREAM_END: 1,
                        Z_NEED_DICT: 2,
                        Z_ERRNO: -1,
                        Z_STREAM_ERROR: -2,
                        Z_DATA_ERROR: -3,
                        Z_MEM_ERROR: -4,
                        Z_BUF_ERROR: -5,
                        Z_VERSION_ERROR: -6,
                        Z_NO_COMPRESSION: 0,
                        Z_BEST_SPEED: 1,
                        Z_BEST_COMPRESSION: 9,
                        Z_DEFAULT_COMPRESSION: -1,
                        Z_FILTERED: 1,
                        Z_HUFFMAN_ONLY: 2,
                        Z_RLE: 3,
                        Z_FIXED: 4,
                        Z_DEFAULT_STRATEGY: 0,
                        DEFLATE: 1,
                        INFLATE: 2,
                        GZIP: 3,
                        GUNZIP: 4,
                        DEFLATERAW: 5,
                        INFLATERAW: 6,
                        UNZIP: 7,
                        BROTLI_DECODE: 8,
                        BROTLI_ENCODE: 9,
                        Z_MIN_WINDOWBITS: 8,
                        Z_MAX_WINDOWBITS: 15,
                        Z_DEFAULT_WINDOWBITS: 15,
                        Z_MIN_CHUNK: 64,
                        Z_MAX_CHUNK: Infinity,
                        Z_DEFAULT_CHUNK: 16384,
                        Z_MIN_MEMLEVEL: 1,
                        Z_MAX_MEMLEVEL: 9,
                        Z_DEFAULT_MEMLEVEL: 8,
                        Z_MIN_LEVEL: -1,
                        Z_MAX_LEVEL: 9,
                        Z_DEFAULT_LEVEL: -1,
                        BROTLI_OPERATION_PROCESS: 0,
                        BROTLI_OPERATION_FLUSH: 1,
                        BROTLI_OPERATION_FINISH: 2,
                        BROTLI_OPERATION_EMIT_METADATA: 3,
                        BROTLI_MODE_GENERIC: 0,
                        BROTLI_MODE_TEXT: 1,
                        BROTLI_MODE_FONT: 2,
                        BROTLI_DEFAULT_MODE: 0,
                        BROTLI_MIN_QUALITY: 0,
                        BROTLI_MAX_QUALITY: 11,
                        BROTLI_DEFAULT_QUALITY: 11,
                        BROTLI_MIN_WINDOW_BITS: 10,
                        BROTLI_MAX_WINDOW_BITS: 24,
                        BROTLI_LARGE_MAX_WINDOW_BITS: 30,
                        BROTLI_DEFAULT_WINDOW: 22,
                        BROTLI_MIN_INPUT_BLOCK_BITS: 16,
                        BROTLI_MAX_INPUT_BLOCK_BITS: 24,
                        BROTLI_PARAM_MODE: 0,
                        BROTLI_PARAM_QUALITY: 1,
                        BROTLI_PARAM_LGWIN: 2,
                        BROTLI_PARAM_LGBLOCK: 3,
                        BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
                        BROTLI_PARAM_SIZE_HINT: 5,
                        BROTLI_PARAM_LARGE_WINDOW: 6,
                        BROTLI_PARAM_NPOSTFIX: 7,
                        BROTLI_PARAM_NDIRECT: 8,
                        BROTLI_DECODER_RESULT_ERROR: 0,
                        BROTLI_DECODER_RESULT_SUCCESS: 1,
                        BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
                        BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
                        BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
                        BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
                        BROTLI_DECODER_NO_ERROR: 0,
                        BROTLI_DECODER_SUCCESS: 1,
                        BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
                        BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
                        BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
                        BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
                        BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
                        BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
                        BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
                        BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
                        BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
                        BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
                        BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
                        BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
                        BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
                        BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
                        BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
                        BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
                        BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
                        BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
                        BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
                        BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
                        BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
                        BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
                        BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
                        BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
                        BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
                        BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
                        BROTLI_DECODER_ERROR_UNREACHABLE: -31,
                    },
                    i
                )
            );
        },
        3486: (t, e, s) => {
            "use strict";
            const i = s(9491);
            const r = s(4300).Buffer;
            const n = s(9796);
            const o = (e.constants = s(6769));
            const h = s(7557);
            const a = r.concat;
            const l = Symbol("_superWrite");
            class ZlibError extends Error {
                constructor(t) {
                    super("zlib: " + t.message);
                    this.code = t.code;
                    this.errno = t.errno;
                    if (!this.code) this.code = "ZLIB_ERROR";
                    this.message = "zlib: " + t.message;
                    Error.captureStackTrace(this, this.constructor);
                }
                get name() {
                    return "ZlibError";
                }
            }
            const c = Symbol("opts");
            const u = Symbol("flushFlag");
            const f = Symbol("finishFlushFlag");
            const d = Symbol("fullFlushFlag");
            const p = Symbol("handle");
            const m = Symbol("onError");
            const y = Symbol("sawError");
            const b = Symbol("level");
            const g = Symbol("strategy");
            const w = Symbol("ended");
            const _ = Symbol("_defaultFullFlush");
            class ZlibBase extends h {
                constructor(t, e) {
                    if (!t || typeof t !== "object")
                        throw new TypeError(
                            "invalid options for ZlibBase constructor"
                        );
                    super(t);
                    this[y] = false;
                    this[w] = false;
                    this[c] = t;
                    this[u] = t.flush;
                    this[f] = t.finishFlush;
                    try {
                        this[p] = new n[e](t);
                    } catch (t) {
                        throw new ZlibError(t);
                    }
                    this[m] = (t) => {
                        if (this[y]) return;
                        this[y] = true;
                        this.close();
                        this.emit("error", t);
                    };
                    this[p].on("error", (t) => this[m](new ZlibError(t)));
                    this.once("end", () => this.close);
                }
                close() {
                    if (this[p]) {
                        this[p].close();
                        this[p] = null;
                        this.emit("close");
                    }
                }
                reset() {
                    if (!this[y]) {
                        i(this[p], "zlib binding closed");
                        return this[p].reset();
                    }
                }
                flush(t) {
                    if (this.ended) return;
                    if (typeof t !== "number") t = this[d];
                    this.write(Object.assign(r.alloc(0), { [u]: t }));
                }
                end(t, e, s) {
                    if (t) this.write(t, e);
                    this.flush(this[f]);
                    this[w] = true;
                    return super.end(null, null, s);
                }
                get ended() {
                    return this[w];
                }
                write(t, e, s) {
                    if (typeof e === "function") (s = e), (e = "utf8");
                    if (typeof t === "string") t = r.from(t, e);
                    if (this[y]) return;
                    i(this[p], "zlib binding closed");
                    const n = this[p]._handle;
                    const o = n.close;
                    n.close = () => {};
                    const h = this[p].close;
                    this[p].close = () => {};
                    r.concat = (t) => t;
                    let c;
                    try {
                        const e = typeof t[u] === "number" ? t[u] : this[u];
                        c = this[p]._processChunk(t, e);
                        r.concat = a;
                    } catch (t) {
                        r.concat = a;
                        this[m](new ZlibError(t));
                    } finally {
                        if (this[p]) {
                            this[p]._handle = n;
                            n.close = o;
                            this[p].close = h;
                            this[p].removeAllListeners("error");
                        }
                    }
                    if (this[p])
                        this[p].on("error", (t) => this[m](new ZlibError(t)));
                    let f;
                    if (c) {
                        if (Array.isArray(c) && c.length > 0) {
                            f = this[l](r.from(c[0]));
                            for (let t = 1; t < c.length; t++) {
                                f = this[l](c[t]);
                            }
                        } else {
                            f = this[l](r.from(c));
                        }
                    }
                    if (s) s();
                    return f;
                }
                [l](t) {
                    return super.write(t);
                }
            }
            class Zlib extends ZlibBase {
                constructor(t, e) {
                    t = t || {};
                    t.flush = t.flush || o.Z_NO_FLUSH;
                    t.finishFlush = t.finishFlush || o.Z_FINISH;
                    super(t, e);
                    this[d] = o.Z_FULL_FLUSH;
                    this[b] = t.level;
                    this[g] = t.strategy;
                }
                params(t, e) {
                    if (this[y]) return;
                    if (!this[p])
                        throw new Error(
                            "cannot switch params when binding is closed"
                        );
                    if (!this[p].params)
                        throw new Error("not supported in this implementation");
                    if (this[b] !== t || this[g] !== e) {
                        this.flush(o.Z_SYNC_FLUSH);
                        i(this[p], "zlib binding closed");
                        const s = this[p].flush;
                        this[p].flush = (t, e) => {
                            this.flush(t);
                            e();
                        };
                        try {
                            this[p].params(t, e);
                        } finally {
                            this[p].flush = s;
                        }
                        if (this[p]) {
                            this[b] = t;
                            this[g] = e;
                        }
                    }
                }
            }
            class Deflate extends Zlib {
                constructor(t) {
                    super(t, "Deflate");
                }
            }
            class Inflate extends Zlib {
                constructor(t) {
                    super(t, "Inflate");
                }
            }
            const E = Symbol("_portable");
            class Gzip extends Zlib {
                constructor(t) {
                    super(t, "Gzip");
                    this[E] = t && !!t.portable;
                }
                [l](t) {
                    if (!this[E]) return super[l](t);
                    this[E] = false;
                    t[9] = 255;
                    return super[l](t);
                }
            }
            class Gunzip extends Zlib {
                constructor(t) {
                    super(t, "Gunzip");
                }
            }
            class DeflateRaw extends Zlib {
                constructor(t) {
                    super(t, "DeflateRaw");
                }
            }
            class InflateRaw extends Zlib {
                constructor(t) {
                    super(t, "InflateRaw");
                }
            }
            class Unzip extends Zlib {
                constructor(t) {
                    super(t, "Unzip");
                }
            }
            class Brotli extends ZlibBase {
                constructor(t, e) {
                    t = t || {};
                    t.flush = t.flush || o.BROTLI_OPERATION_PROCESS;
                    t.finishFlush = t.finishFlush || o.BROTLI_OPERATION_FINISH;
                    super(t, e);
                    this[d] = o.BROTLI_OPERATION_FLUSH;
                }
            }
            class BrotliCompress extends Brotli {
                constructor(t) {
                    super(t, "BrotliCompress");
                }
            }
            class BrotliDecompress extends Brotli {
                constructor(t) {
                    super(t, "BrotliDecompress");
                }
            }
            e.Deflate = Deflate;
            e.Inflate = Inflate;
            e.Gzip = Gzip;
            e.Gunzip = Gunzip;
            e.DeflateRaw = DeflateRaw;
            e.InflateRaw = InflateRaw;
            e.Unzip = Unzip;
            if (typeof n.BrotliCompress === "function") {
                e.BrotliCompress = BrotliCompress;
                e.BrotliDecompress = BrotliDecompress;
            } else {
                e.BrotliCompress = e.BrotliDecompress = class {
                    constructor() {
                        throw new Error(
                            "Brotli is not supported in this version of Node.js"
                        );
                    }
                };
            }
        },
        7557: (t, e, s) => {
            "use strict";
            const i =
                typeof process === "object" && process
                    ? process
                    : { stdout: null, stderr: null };
            const r = s(2361);
            const n = s(2781);
            const o = s(1576).StringDecoder;
            const h = Symbol("EOF");
            const a = Symbol("maybeEmitEnd");
            const l = Symbol("emittedEnd");
            const c = Symbol("emittingEnd");
            const u = Symbol("emittedError");
            const f = Symbol("closed");
            const d = Symbol("read");
            const p = Symbol("flush");
            const m = Symbol("flushChunk");
            const y = Symbol("encoding");
            const b = Symbol("decoder");
            const g = Symbol("flowing");
            const w = Symbol("paused");
            const _ = Symbol("resume");
            const E = Symbol("bufferLength");
            const S = Symbol("bufferPush");
            const v = Symbol("bufferShift");
            const R = Symbol("objectMode");
            const O = Symbol("destroyed");
            const T = Symbol("emitData");
            const k = Symbol("emitEnd");
            const x = Symbol("emitEnd2");
            const A = Symbol("async");
            const defer = (t) => Promise.resolve().then(t);
            const P = global._MP_NO_ITERATOR_SYMBOLS_ !== "1";
            const C =
                (P && Symbol.asyncIterator) ||
                Symbol("asyncIterator not implemented");
            const L =
                (P && Symbol.iterator) || Symbol("iterator not implemented");
            const isEndish = (t) =>
                t === "end" || t === "finish" || t === "prefinish";
            const isArrayBuffer = (t) =>
                t instanceof ArrayBuffer ||
                (typeof t === "object" &&
                    t.constructor &&
                    t.constructor.name === "ArrayBuffer" &&
                    t.byteLength >= 0);
            const isArrayBufferView = (t) =>
                !Buffer.isBuffer(t) && ArrayBuffer.isView(t);
            class Pipe {
                constructor(t, e, s) {
                    this.src = t;
                    this.dest = e;
                    this.opts = s;
                    this.ondrain = () => t[_]();
                    e.on("drain", this.ondrain);
                }
                unpipe() {
                    this.dest.removeListener("drain", this.ondrain);
                }
                proxyErrors() {}
                end() {
                    this.unpipe();
                    if (this.opts.end) this.dest.end();
                }
            }
            class PipeProxyErrors extends Pipe {
                unpipe() {
                    this.src.removeListener("error", this.proxyErrors);
                    super.unpipe();
                }
                constructor(t, e, s) {
                    super(t, e, s);
                    this.proxyErrors = (t) => e.emit("error", t);
                    t.on("error", this.proxyErrors);
                }
            }
            t.exports = class Minipass extends n {
                constructor(t) {
                    super();
                    this[g] = false;
                    this[w] = false;
                    this.pipes = [];
                    this.buffer = [];
                    this[R] = (t && t.objectMode) || false;
                    if (this[R]) this[y] = null;
                    else this[y] = (t && t.encoding) || null;
                    if (this[y] === "buffer") this[y] = null;
                    this[A] = (t && !!t.async) || false;
                    this[b] = this[y] ? new o(this[y]) : null;
                    this[h] = false;
                    this[l] = false;
                    this[c] = false;
                    this[f] = false;
                    this[u] = null;
                    this.writable = true;
                    this.readable = true;
                    this[E] = 0;
                    this[O] = false;
                }
                get bufferLength() {
                    return this[E];
                }
                get encoding() {
                    return this[y];
                }
                set encoding(t) {
                    if (this[R])
                        throw new Error("cannot set encoding in objectMode");
                    if (
                        this[y] &&
                        t !== this[y] &&
                        ((this[b] && this[b].lastNeed) || this[E])
                    )
                        throw new Error("cannot change encoding");
                    if (this[y] !== t) {
                        this[b] = t ? new o(t) : null;
                        if (this.buffer.length)
                            this.buffer = this.buffer.map((t) =>
                                this[b].write(t)
                            );
                    }
                    this[y] = t;
                }
                setEncoding(t) {
                    this.encoding = t;
                }
                get objectMode() {
                    return this[R];
                }
                set objectMode(t) {
                    this[R] = this[R] || !!t;
                }
                get ["async"]() {
                    return this[A];
                }
                set ["async"](t) {
                    this[A] = this[A] || !!t;
                }
                write(t, e, s) {
                    if (this[h]) throw new Error("write after end");
                    if (this[O]) {
                        this.emit(
                            "error",
                            Object.assign(
                                new Error(
                                    "Cannot call write after a stream was destroyed"
                                ),
                                { code: "ERR_STREAM_DESTROYED" }
                            )
                        );
                        return true;
                    }
                    if (typeof e === "function") (s = e), (e = "utf8");
                    if (!e) e = "utf8";
                    const i = this[A] ? defer : (t) => t();
                    if (!this[R] && !Buffer.isBuffer(t)) {
                        if (isArrayBufferView(t))
                            t = Buffer.from(
                                t.buffer,
                                t.byteOffset,
                                t.byteLength
                            );
                        else if (isArrayBuffer(t)) t = Buffer.from(t);
                        else if (typeof t !== "string") this.objectMode = true;
                    }
                    if (this[R]) {
                        if (this.flowing && this[E] !== 0) this[p](true);
                        if (this.flowing) this.emit("data", t);
                        else this[S](t);
                        if (this[E] !== 0) this.emit("readable");
                        if (s) i(s);
                        return this.flowing;
                    }
                    if (!t.length) {
                        if (this[E] !== 0) this.emit("readable");
                        if (s) i(s);
                        return this.flowing;
                    }
                    if (
                        typeof t === "string" &&
                        !(e === this[y] && !this[b].lastNeed)
                    ) {
                        t = Buffer.from(t, e);
                    }
                    if (Buffer.isBuffer(t) && this[y]) t = this[b].write(t);
                    if (this.flowing && this[E] !== 0) this[p](true);
                    if (this.flowing) this.emit("data", t);
                    else this[S](t);
                    if (this[E] !== 0) this.emit("readable");
                    if (s) i(s);
                    return this.flowing;
                }
                read(t) {
                    if (this[O]) return null;
                    if (this[E] === 0 || t === 0 || t > this[E]) {
                        this[a]();
                        return null;
                    }
                    if (this[R]) t = null;
                    if (this.buffer.length > 1 && !this[R]) {
                        if (this.encoding) this.buffer = [this.buffer.join("")];
                        else
                            this.buffer = [Buffer.concat(this.buffer, this[E])];
                    }
                    const e = this[d](t || null, this.buffer[0]);
                    this[a]();
                    return e;
                }
                [d](t, e) {
                    if (t === e.length || t === null) this[v]();
                    else {
                        this.buffer[0] = e.slice(t);
                        e = e.slice(0, t);
                        this[E] -= t;
                    }
                    this.emit("data", e);
                    if (!this.buffer.length && !this[h]) this.emit("drain");
                    return e;
                }
                end(t, e, s) {
                    if (typeof t === "function") (s = t), (t = null);
                    if (typeof e === "function") (s = e), (e = "utf8");
                    if (t) this.write(t, e);
                    if (s) this.once("end", s);
                    this[h] = true;
                    this.writable = false;
                    if (this.flowing || !this[w]) this[a]();
                    return this;
                }
                [_]() {
                    if (this[O]) return;
                    this[w] = false;
                    this[g] = true;
                    this.emit("resume");
                    if (this.buffer.length) this[p]();
                    else if (this[h]) this[a]();
                    else this.emit("drain");
                }
                resume() {
                    return this[_]();
                }
                pause() {
                    this[g] = false;
                    this[w] = true;
                }
                get destroyed() {
                    return this[O];
                }
                get flowing() {
                    return this[g];
                }
                get paused() {
                    return this[w];
                }
                [S](t) {
                    if (this[R]) this[E] += 1;
                    else this[E] += t.length;
                    this.buffer.push(t);
                }
                [v]() {
                    if (this.buffer.length) {
                        if (this[R]) this[E] -= 1;
                        else this[E] -= this.buffer[0].length;
                    }
                    return this.buffer.shift();
                }
                [p](t) {
                    do {} while (this[m](this[v]()));
                    if (!t && !this.buffer.length && !this[h])
                        this.emit("drain");
                }
                [m](t) {
                    return t ? (this.emit("data", t), this.flowing) : false;
                }
                pipe(t, e) {
                    if (this[O]) return;
                    const s = this[l];
                    e = e || {};
                    if (t === i.stdout || t === i.stderr) e.end = false;
                    else e.end = e.end !== false;
                    e.proxyErrors = !!e.proxyErrors;
                    if (s) {
                        if (e.end) t.end();
                    } else {
                        this.pipes.push(
                            !e.proxyErrors
                                ? new Pipe(this, t, e)
                                : new PipeProxyErrors(this, t, e)
                        );
                        if (this[A]) defer(() => this[_]());
                        else this[_]();
                    }
                    return t;
                }
                unpipe(t) {
                    const e = this.pipes.find((e) => e.dest === t);
                    if (e) {
                        this.pipes.splice(this.pipes.indexOf(e), 1);
                        e.unpipe();
                    }
                }
                addListener(t, e) {
                    return this.on(t, e);
                }
                on(t, e) {
                    const s = super.on(t, e);
                    if (t === "data" && !this.pipes.length && !this.flowing)
                        this[_]();
                    else if (t === "readable" && this[E] !== 0)
                        super.emit("readable");
                    else if (isEndish(t) && this[l]) {
                        super.emit(t);
                        this.removeAllListeners(t);
                    } else if (t === "error" && this[u]) {
                        if (this[A]) defer(() => e.call(this, this[u]));
                        else e.call(this, this[u]);
                    }
                    return s;
                }
                get emittedEnd() {
                    return this[l];
                }
                [a]() {
                    if (
                        !this[c] &&
                        !this[l] &&
                        !this[O] &&
                        this.buffer.length === 0 &&
                        this[h]
                    ) {
                        this[c] = true;
                        this.emit("end");
                        this.emit("prefinish");
                        this.emit("finish");
                        if (this[f]) this.emit("close");
                        this[c] = false;
                    }
                }
                emit(t, e, ...s) {
                    if (t !== "error" && t !== "close" && t !== O && this[O])
                        return;
                    else if (t === "data") {
                        return !e
                            ? false
                            : this[A]
                            ? defer(() => this[T](e))
                            : this[T](e);
                    } else if (t === "end") {
                        return this[k]();
                    } else if (t === "close") {
                        this[f] = true;
                        if (!this[l] && !this[O]) return;
                        const t = super.emit("close");
                        this.removeAllListeners("close");
                        return t;
                    } else if (t === "error") {
                        this[u] = e;
                        const t = super.emit("error", e);
                        this[a]();
                        return t;
                    } else if (t === "resume") {
                        const t = super.emit("resume");
                        this[a]();
                        return t;
                    } else if (t === "finish" || t === "prefinish") {
                        const e = super.emit(t);
                        this.removeAllListeners(t);
                        return e;
                    }
                    const i = super.emit(t, e, ...s);
                    this[a]();
                    return i;
                }
                [T](t) {
                    for (const e of this.pipes) {
                        if (e.dest.write(t) === false) this.pause();
                    }
                    const e = super.emit("data", t);
                    this[a]();
                    return e;
                }
                [k]() {
                    if (this[l]) return;
                    this[l] = true;
                    this.readable = false;
                    if (this[A]) defer(() => this[x]());
                    else this[x]();
                }
                [x]() {
                    if (this[b]) {
                        const t = this[b].end();
                        if (t) {
                            for (const e of this.pipes) {
                                e.dest.write(t);
                            }
                            super.emit("data", t);
                        }
                    }
                    for (const t of this.pipes) {
                        t.end();
                    }
                    const t = super.emit("end");
                    this.removeAllListeners("end");
                    return t;
                }
                collect() {
                    const t = [];
                    if (!this[R]) t.dataLength = 0;
                    const e = this.promise();
                    this.on("data", (e) => {
                        t.push(e);
                        if (!this[R]) t.dataLength += e.length;
                    });
                    return e.then(() => t);
                }
                concat() {
                    return this[R]
                        ? Promise.reject(
                              new Error("cannot concat in objectMode")
                          )
                        : this.collect().then((t) =>
                              this[R]
                                  ? Promise.reject(
                                        new Error("cannot concat in objectMode")
                                    )
                                  : this[y]
                                  ? t.join("")
                                  : Buffer.concat(t, t.dataLength)
                          );
                }
                promise() {
                    return new Promise((t, e) => {
                        this.on(O, () => e(new Error("stream destroyed")));
                        this.on("error", (t) => e(t));
                        this.on("end", () => t());
                    });
                }
                [C]() {
                    const next = () => {
                        const t = this.read();
                        if (t !== null)
                            return Promise.resolve({ done: false, value: t });
                        if (this[h]) return Promise.resolve({ done: true });
                        let e = null;
                        let s = null;
                        const onerr = (t) => {
                            this.removeListener("data", ondata);
                            this.removeListener("end", onend);
                            s(t);
                        };
                        const ondata = (t) => {
                            this.removeListener("error", onerr);
                            this.removeListener("end", onend);
                            this.pause();
                            e({ value: t, done: !!this[h] });
                        };
                        const onend = () => {
                            this.removeListener("error", onerr);
                            this.removeListener("data", ondata);
                            e({ done: true });
                        };
                        const ondestroy = () =>
                            onerr(new Error("stream destroyed"));
                        return new Promise((t, i) => {
                            s = i;
                            e = t;
                            this.once(O, ondestroy);
                            this.once("error", onerr);
                            this.once("end", onend);
                            this.once("data", ondata);
                        });
                    };
                    return { next: next };
                }
                [L]() {
                    const next = () => {
                        const t = this.read();
                        const e = t === null;
                        return { value: t, done: e };
                    };
                    return { next: next };
                }
                destroy(t) {
                    if (this[O]) {
                        if (t) this.emit("error", t);
                        else this.emit(O);
                        return this;
                    }
                    this[O] = true;
                    this.buffer.length = 0;
                    this[E] = 0;
                    if (typeof this.close === "function" && !this[f])
                        this.close();
                    if (t) this.emit("error", t);
                    else this.emit(O);
                    return this;
                }
                static isStream(t) {
                    return (
                        !!t &&
                        (t instanceof Minipass ||
                            t instanceof n ||
                            (t instanceof r &&
                                (typeof t.pipe === "function" ||
                                    (typeof t.write === "function" &&
                                        typeof t.end === "function"))))
                    );
                }
            };
        },
        6186: (t, e, s) => {
            const i = s(2853);
            const r = s(2930);
            const { mkdirpNative: n, mkdirpNativeSync: o } = s(4983);
            const { mkdirpManual: h, mkdirpManualSync: a } = s(356);
            const { useNative: l, useNativeSync: c } = s(4518);
            const mkdirp = (t, e) => {
                t = r(t);
                e = i(e);
                return l(e) ? n(t, e) : h(t, e);
            };
            const mkdirpSync = (t, e) => {
                t = r(t);
                e = i(e);
                return c(e) ? o(t, e) : a(t, e);
            };
            mkdirp.sync = mkdirpSync;
            mkdirp.native = (t, e) => n(r(t), i(e));
            mkdirp.manual = (t, e) => h(r(t), i(e));
            mkdirp.nativeSync = (t, e) => o(r(t), i(e));
            mkdirp.manualSync = (t, e) => a(r(t), i(e));
            t.exports = mkdirp;
        },
        4992: (t, e, s) => {
            const { dirname: i } = s(1017);
            const findMade = (t, e, s = undefined) => {
                if (s === e) return Promise.resolve();
                return t.statAsync(e).then(
                    (t) => (t.isDirectory() ? s : undefined),
                    (s) =>
                        s.code === "ENOENT" ? findMade(t, i(e), e) : undefined
                );
            };
            const findMadeSync = (t, e, s = undefined) => {
                if (s === e) return undefined;
                try {
                    return t.statSync(e).isDirectory() ? s : undefined;
                } catch (s) {
                    return s.code === "ENOENT"
                        ? findMadeSync(t, i(e), e)
                        : undefined;
                }
            };
            t.exports = { findMade: findMade, findMadeSync: findMadeSync };
        },
        356: (t, e, s) => {
            const { dirname: i } = s(1017);
            const mkdirpManual = (t, e, s) => {
                e.recursive = false;
                const r = i(t);
                if (r === t) {
                    return e.mkdirAsync(t, e).catch((t) => {
                        if (t.code !== "EISDIR") throw t;
                    });
                }
                return e.mkdirAsync(t, e).then(
                    () => s || t,
                    (i) => {
                        if (i.code === "ENOENT")
                            return mkdirpManual(r, e).then((s) =>
                                mkdirpManual(t, e, s)
                            );
                        if (i.code !== "EEXIST" && i.code !== "EROFS") throw i;
                        return e.statAsync(t).then(
                            (t) => {
                                if (t.isDirectory()) return s;
                                else throw i;
                            },
                            () => {
                                throw i;
                            }
                        );
                    }
                );
            };
            const mkdirpManualSync = (t, e, s) => {
                const r = i(t);
                e.recursive = false;
                if (r === t) {
                    try {
                        return e.mkdirSync(t, e);
                    } catch (t) {
                        if (t.code !== "EISDIR") throw t;
                        else return;
                    }
                }
                try {
                    e.mkdirSync(t, e);
                    return s || t;
                } catch (i) {
                    if (i.code === "ENOENT")
                        return mkdirpManualSync(
                            t,
                            e,
                            mkdirpManualSync(r, e, s)
                        );
                    if (i.code !== "EEXIST" && i.code !== "EROFS") throw i;
                    try {
                        if (!e.statSync(t).isDirectory()) throw i;
                    } catch (t) {
                        throw i;
                    }
                }
            };
            t.exports = {
                mkdirpManual: mkdirpManual,
                mkdirpManualSync: mkdirpManualSync,
            };
        },
        4983: (t, e, s) => {
            const { dirname: i } = s(1017);
            const { findMade: r, findMadeSync: n } = s(4992);
            const { mkdirpManual: o, mkdirpManualSync: h } = s(356);
            const mkdirpNative = (t, e) => {
                e.recursive = true;
                const s = i(t);
                if (s === t) return e.mkdirAsync(t, e);
                return r(e, t).then((s) =>
                    e
                        .mkdirAsync(t, e)
                        .then(() => s)
                        .catch((s) => {
                            if (s.code === "ENOENT") return o(t, e);
                            else throw s;
                        })
                );
            };
            const mkdirpNativeSync = (t, e) => {
                e.recursive = true;
                const s = i(t);
                if (s === t) return e.mkdirSync(t, e);
                const r = n(e, t);
                try {
                    e.mkdirSync(t, e);
                    return r;
                } catch (s) {
                    if (s.code === "ENOENT") return h(t, e);
                    else throw s;
                }
            };
            t.exports = {
                mkdirpNative: mkdirpNative,
                mkdirpNativeSync: mkdirpNativeSync,
            };
        },
        2853: (t, e, s) => {
            const { promisify: i } = s(3837);
            const r = s(7147);
            const optsArg = (t) => {
                if (!t) t = { mode: 511, fs: r };
                else if (typeof t === "object") t = { mode: 511, fs: r, ...t };
                else if (typeof t === "number") t = { mode: t, fs: r };
                else if (typeof t === "string")
                    t = { mode: parseInt(t, 8), fs: r };
                else throw new TypeError("invalid options argument");
                t.mkdir = t.mkdir || t.fs.mkdir || r.mkdir;
                t.mkdirAsync = i(t.mkdir);
                t.stat = t.stat || t.fs.stat || r.stat;
                t.statAsync = i(t.stat);
                t.statSync = t.statSync || t.fs.statSync || r.statSync;
                t.mkdirSync = t.mkdirSync || t.fs.mkdirSync || r.mkdirSync;
                return t;
            };
            t.exports = optsArg;
        },
        2930: (t, e, s) => {
            const i =
                process.env.__TESTING_MKDIRP_PLATFORM__ || process.platform;
            const { resolve: r, parse: n } = s(1017);
            const pathArg = (t) => {
                if (/\0/.test(t)) {
                    throw Object.assign(
                        new TypeError(
                            "path must be a string without null bytes"
                        ),
                        { path: t, code: "ERR_INVALID_ARG_VALUE" }
                    );
                }
                t = r(t);
                if (i === "win32") {
                    const e = /[*|"<>?:]/;
                    const { root: s } = n(t);
                    if (e.test(t.substr(s.length))) {
                        throw Object.assign(
                            new Error("Illegal characters in path."),
                            { path: t, code: "EINVAL" }
                        );
                    }
                }
                return t;
            };
            t.exports = pathArg;
        },
        4518: (t, e, s) => {
            const i = s(7147);
            const r =
                process.env.__TESTING_MKDIRP_NODE_VERSION__ || process.version;
            const n = r.replace(/^v/, "").split(".");
            const o = +n[0] > 10 || (+n[0] === 10 && +n[1] >= 12);
            const h = !o ? () => false : (t) => t.mkdir === i.mkdir;
            const a = !o ? () => false : (t) => t.mkdirSync === i.mkdirSync;
            t.exports = { useNative: h, useNativeSync: a };
        },
        4674: (t, e, s) => {
            "use strict";
            e.c = e.create = s(4016);
            e.r = e.replace = s(5923);
            e.t = e.list = s(1525);
            e.u = e.update = s(407);
            e.x = e.extract = s(5317);
            e.Pack = s(7900);
            e.Unpack = s(7628);
            e.Parse = s(8917);
            e.ReadEntry = s(8116);
            e.WriteEntry = s(5450);
            e.Header = s(6043);
            e.Pax = s(7996);
            e.types = s(4173);
        },
        4016: (t, e, s) => {
            "use strict";
            const i = s(5213);
            const r = s(7900);
            const n = s(6179);
            const o = s(1525);
            const h = s(1017);
            t.exports = (t, e, s) => {
                if (typeof e === "function") {
                    s = e;
                }
                if (Array.isArray(t)) {
                    (e = t), (t = {});
                }
                if (!e || !Array.isArray(e) || !e.length) {
                    throw new TypeError("no files or directories specified");
                }
                e = Array.from(e);
                const r = i(t);
                if (r.sync && typeof s === "function") {
                    throw new TypeError(
                        "callback not supported for sync tar functions"
                    );
                }
                if (!r.file && typeof s === "function") {
                    throw new TypeError(
                        "callback only supported with file option"
                    );
                }
                return r.file && r.sync
                    ? createFileSync(r, e)
                    : r.file
                    ? createFile(r, e, s)
                    : r.sync
                    ? createSync(r, e)
                    : create(r, e);
            };
            const createFileSync = (t, e) => {
                const s = new r.Sync(t);
                const i = new n.WriteStreamSync(t.file, {
                    mode: t.mode || 438,
                });
                s.pipe(i);
                addFilesSync(s, e);
            };
            const createFile = (t, e, s) => {
                const i = new r(t);
                const o = new n.WriteStream(t.file, { mode: t.mode || 438 });
                i.pipe(o);
                const h = new Promise((t, e) => {
                    o.on("error", e);
                    o.on("close", t);
                    i.on("error", e);
                });
                addFilesAsync(i, e);
                return s ? h.then(s, s) : h;
            };
            const addFilesSync = (t, e) => {
                e.forEach((e) => {
                    if (e.charAt(0) === "@") {
                        o({
                            file: h.resolve(t.cwd, e.slice(1)),
                            sync: true,
                            noResume: true,
                            onentry: (e) => t.add(e),
                        });
                    } else {
                        t.add(e);
                    }
                });
                t.end();
            };
            const addFilesAsync = (t, e) => {
                while (e.length) {
                    const s = e.shift();
                    if (s.charAt(0) === "@") {
                        return o({
                            file: h.resolve(t.cwd, s.slice(1)),
                            noResume: true,
                            onentry: (e) => t.add(e),
                        }).then((s) => addFilesAsync(t, e));
                    } else {
                        t.add(s);
                    }
                }
                t.end();
            };
            const createSync = (t, e) => {
                const s = new r.Sync(t);
                addFilesSync(s, e);
                return s;
            };
            const create = (t, e) => {
                const s = new r(t);
                addFilesAsync(s, e);
                return s;
            };
        },
        5317: (t, e, s) => {
            "use strict";
            const i = s(5213);
            const r = s(7628);
            const n = s(7147);
            const o = s(6179);
            const h = s(1017);
            const a = s(8886);
            t.exports = (t, e, s) => {
                if (typeof t === "function") {
                    (s = t), (e = null), (t = {});
                } else if (Array.isArray(t)) {
                    (e = t), (t = {});
                }
                if (typeof e === "function") {
                    (s = e), (e = null);
                }
                if (!e) {
                    e = [];
                } else {
                    e = Array.from(e);
                }
                const r = i(t);
                if (r.sync && typeof s === "function") {
                    throw new TypeError(
                        "callback not supported for sync tar functions"
                    );
                }
                if (!r.file && typeof s === "function") {
                    throw new TypeError(
                        "callback only supported with file option"
                    );
                }
                if (e.length) {
                    filesFilter(r, e);
                }
                return r.file && r.sync
                    ? extractFileSync(r)
                    : r.file
                    ? extractFile(r, s)
                    : r.sync
                    ? extractSync(r)
                    : extract(r);
            };
            const filesFilter = (t, e) => {
                const s = new Map(e.map((t) => [a(t), true]));
                const i = t.filter;
                const mapHas = (t, e) => {
                    const i = e || h.parse(t).root || ".";
                    const r =
                        t === i
                            ? false
                            : s.has(t)
                            ? s.get(t)
                            : mapHas(h.dirname(t), i);
                    s.set(t, r);
                    return r;
                };
                t.filter = i
                    ? (t, e) => i(t, e) && mapHas(a(t))
                    : (t) => mapHas(a(t));
            };
            const extractFileSync = (t) => {
                const e = new r.Sync(t);
                const s = t.file;
                const i = n.statSync(s);
                const h = t.maxReadSize || 16 * 1024 * 1024;
                const a = new o.ReadStreamSync(s, {
                    readSize: h,
                    size: i.size,
                });
                a.pipe(e);
            };
            const extractFile = (t, e) => {
                const s = new r(t);
                const i = t.maxReadSize || 16 * 1024 * 1024;
                const h = t.file;
                const a = new Promise((t, e) => {
                    s.on("error", e);
                    s.on("close", t);
                    n.stat(h, (t, r) => {
                        if (t) {
                            e(t);
                        } else {
                            const t = new o.ReadStream(h, {
                                readSize: i,
                                size: r.size,
                            });
                            t.on("error", e);
                            t.pipe(s);
                        }
                    });
                });
                return e ? a.then(e, e) : a;
            };
            const extractSync = (t) => new r.Sync(t);
            const extract = (t) => new r(t);
        },
        1172: (t, e, s) => {
            const i = process.env.__FAKE_PLATFORM__ || process.platform;
            const r = i === "win32";
            const n = global.__FAKE_TESTING_FS__ || s(7147);
            const {
                O_CREAT: o,
                O_TRUNC: h,
                O_WRONLY: a,
                UV_FS_O_FILEMAP: l = 0,
            } = n.constants;
            const c = r && !!l;
            const u = 512 * 1024;
            const f = l | h | o | a;
            t.exports = !c ? () => "w" : (t) => (t < u ? f : "w");
        },
        6043: (t, e, s) => {
            "use strict";
            const i = s(4173);
            const r = s(1017).posix;
            const n = s(2370);
            const o = Symbol("slurp");
            const h = Symbol("type");
            class Header {
                constructor(t, e, s, i) {
                    this.cksumValid = false;
                    this.needPax = false;
                    this.nullBlock = false;
                    this.block = null;
                    this.path = null;
                    this.mode = null;
                    this.uid = null;
                    this.gid = null;
                    this.size = null;
                    this.mtime = null;
                    this.cksum = null;
                    this[h] = "0";
                    this.linkpath = null;
                    this.uname = null;
                    this.gname = null;
                    this.devmaj = 0;
                    this.devmin = 0;
                    this.atime = null;
                    this.ctime = null;
                    if (Buffer.isBuffer(t)) {
                        this.decode(t, e || 0, s, i);
                    } else if (t) {
                        this.set(t);
                    }
                }
                decode(t, e, s, i) {
                    if (!e) {
                        e = 0;
                    }
                    if (!t || !(t.length >= e + 512)) {
                        throw new Error("need 512 bytes for header");
                    }
                    this.path = decString(t, e, 100);
                    this.mode = decNumber(t, e + 100, 8);
                    this.uid = decNumber(t, e + 108, 8);
                    this.gid = decNumber(t, e + 116, 8);
                    this.size = decNumber(t, e + 124, 12);
                    this.mtime = decDate(t, e + 136, 12);
                    this.cksum = decNumber(t, e + 148, 12);
                    this[o](s);
                    this[o](i, true);
                    this[h] = decString(t, e + 156, 1);
                    if (this[h] === "") {
                        this[h] = "0";
                    }
                    if (this[h] === "0" && this.path.slice(-1) === "/") {
                        this[h] = "5";
                    }
                    if (this[h] === "5") {
                        this.size = 0;
                    }
                    this.linkpath = decString(t, e + 157, 100);
                    if (
                        t.slice(e + 257, e + 265).toString() === "ustar\x0000"
                    ) {
                        this.uname = decString(t, e + 265, 32);
                        this.gname = decString(t, e + 297, 32);
                        this.devmaj = decNumber(t, e + 329, 8);
                        this.devmin = decNumber(t, e + 337, 8);
                        if (t[e + 475] !== 0) {
                            const s = decString(t, e + 345, 155);
                            this.path = s + "/" + this.path;
                        } else {
                            const s = decString(t, e + 345, 130);
                            if (s) {
                                this.path = s + "/" + this.path;
                            }
                            this.atime = decDate(t, e + 476, 12);
                            this.ctime = decDate(t, e + 488, 12);
                        }
                    }
                    let r = 8 * 32;
                    for (let s = e; s < e + 148; s++) {
                        r += t[s];
                    }
                    for (let s = e + 156; s < e + 512; s++) {
                        r += t[s];
                    }
                    this.cksumValid = r === this.cksum;
                    if (this.cksum === null && r === 8 * 32) {
                        this.nullBlock = true;
                    }
                }
                [o](t, e) {
                    for (const s in t) {
                        if (
                            t[s] !== null &&
                            t[s] !== undefined &&
                            !(e && s === "path")
                        ) {
                            this[s] = t[s];
                        }
                    }
                }
                encode(t, e) {
                    if (!t) {
                        t = this.block = Buffer.alloc(512);
                        e = 0;
                    }
                    if (!e) {
                        e = 0;
                    }
                    if (!(t.length >= e + 512)) {
                        throw new Error("need 512 bytes for header");
                    }
                    const s = this.ctime || this.atime ? 130 : 155;
                    const i = splitPrefix(this.path || "", s);
                    const r = i[0];
                    const n = i[1];
                    this.needPax = i[2];
                    this.needPax = encString(t, e, 100, r) || this.needPax;
                    this.needPax =
                        encNumber(t, e + 100, 8, this.mode) || this.needPax;
                    this.needPax =
                        encNumber(t, e + 108, 8, this.uid) || this.needPax;
                    this.needPax =
                        encNumber(t, e + 116, 8, this.gid) || this.needPax;
                    this.needPax =
                        encNumber(t, e + 124, 12, this.size) || this.needPax;
                    this.needPax =
                        encDate(t, e + 136, 12, this.mtime) || this.needPax;
                    t[e + 156] = this[h].charCodeAt(0);
                    this.needPax =
                        encString(t, e + 157, 100, this.linkpath) ||
                        this.needPax;
                    t.write("ustar\x0000", e + 257, 8);
                    this.needPax =
                        encString(t, e + 265, 32, this.uname) || this.needPax;
                    this.needPax =
                        encString(t, e + 297, 32, this.gname) || this.needPax;
                    this.needPax =
                        encNumber(t, e + 329, 8, this.devmaj) || this.needPax;
                    this.needPax =
                        encNumber(t, e + 337, 8, this.devmin) || this.needPax;
                    this.needPax = encString(t, e + 345, s, n) || this.needPax;
                    if (t[e + 475] !== 0) {
                        this.needPax =
                            encString(t, e + 345, 155, n) || this.needPax;
                    } else {
                        this.needPax =
                            encString(t, e + 345, 130, n) || this.needPax;
                        this.needPax =
                            encDate(t, e + 476, 12, this.atime) || this.needPax;
                        this.needPax =
                            encDate(t, e + 488, 12, this.ctime) || this.needPax;
                    }
                    let o = 8 * 32;
                    for (let s = e; s < e + 148; s++) {
                        o += t[s];
                    }
                    for (let s = e + 156; s < e + 512; s++) {
                        o += t[s];
                    }
                    this.cksum = o;
                    encNumber(t, e + 148, 8, this.cksum);
                    this.cksumValid = true;
                    return this.needPax;
                }
                set(t) {
                    for (const e in t) {
                        if (t[e] !== null && t[e] !== undefined) {
                            this[e] = t[e];
                        }
                    }
                }
                get type() {
                    return i.name.get(this[h]) || this[h];
                }
                get typeKey() {
                    return this[h];
                }
                set type(t) {
                    if (i.code.has(t)) {
                        this[h] = i.code.get(t);
                    } else {
                        this[h] = t;
                    }
                }
            }
            const splitPrefix = (t, e) => {
                const s = 100;
                let i = t;
                let n = "";
                let o;
                const h = r.parse(t).root || ".";
                if (Buffer.byteLength(i) < s) {
                    o = [i, n, false];
                } else {
                    n = r.dirname(i);
                    i = r.basename(i);
                    do {
                        if (
                            Buffer.byteLength(i) <= s &&
                            Buffer.byteLength(n) <= e
                        ) {
                            o = [i, n, false];
                        } else if (
                            Buffer.byteLength(i) > s &&
                            Buffer.byteLength(n) <= e
                        ) {
                            o = [i.slice(0, s - 1), n, true];
                        } else {
                            i = r.join(r.basename(n), i);
                            n = r.dirname(n);
                        }
                    } while (n !== h && !o);
                    if (!o) {
                        o = [t.slice(0, s - 1), "", true];
                    }
                }
                return o;
            };
            const decString = (t, e, s) =>
                t
                    .slice(e, e + s)
                    .toString("utf8")
                    .replace(/\0.*/, "");
            const decDate = (t, e, s) => numToDate(decNumber(t, e, s));
            const numToDate = (t) => (t === null ? null : new Date(t * 1e3));
            const decNumber = (t, e, s) =>
                t[e] & 128
                    ? n.parse(t.slice(e, e + s))
                    : decSmallNumber(t, e, s);
            const nanNull = (t) => (isNaN(t) ? null : t);
            const decSmallNumber = (t, e, s) =>
                nanNull(
                    parseInt(
                        t
                            .slice(e, e + s)
                            .toString("utf8")
                            .replace(/\0.*$/, "")
                            .trim(),
                        8
                    )
                );
            const a = { 12: 8589934591, 8: 2097151 };
            const encNumber = (t, e, s, i) =>
                i === null
                    ? false
                    : i > a[s] || i < 0
                    ? (n.encode(i, t.slice(e, e + s)), true)
                    : (encSmallNumber(t, e, s, i), false);
            const encSmallNumber = (t, e, s, i) =>
                t.write(octalString(i, s), e, s, "ascii");
            const octalString = (t, e) =>
                padOctal(Math.floor(t).toString(8), e);
            const padOctal = (t, e) =>
                (t.length === e - 1
                    ? t
                    : new Array(e - t.length - 1).join("0") + t + " ") + "\0";
            const encDate = (t, e, s, i) =>
                i === null ? false : encNumber(t, e, s, i.getTime() / 1e3);
            const l = new Array(156).join("\0");
            const encString = (t, e, s, i) =>
                i === null
                    ? false
                    : (t.write(i + l, e, s, "utf8"),
                      i.length !== Buffer.byteLength(i) || i.length > s);
            t.exports = Header;
        },
        5213: (t) => {
            "use strict";
            const e = new Map([
                ["C", "cwd"],
                ["f", "file"],
                ["z", "gzip"],
                ["P", "preservePaths"],
                ["U", "unlink"],
                ["strip-components", "strip"],
                ["stripComponents", "strip"],
                ["keep-newer", "newer"],
                ["keepNewer", "newer"],
                ["keep-newer-files", "newer"],
                ["keepNewerFiles", "newer"],
                ["k", "keep"],
                ["keep-existing", "keep"],
                ["keepExisting", "keep"],
                ["m", "noMtime"],
                ["no-mtime", "noMtime"],
                ["p", "preserveOwner"],
                ["L", "follow"],
                ["h", "follow"],
            ]);
            t.exports = (t) =>
                t
                    ? Object.keys(t)
                          .map((s) => [e.has(s) ? e.get(s) : s, t[s]])
                          .reduce(
                              (t, e) => ((t[e[0]] = e[1]), t),
                              Object.create(null)
                          )
                    : {};
        },
        2370: (t) => {
            "use strict";
            const encode = (t, e) => {
                if (!Number.isSafeInteger(t)) {
                    throw Error(
                        "cannot encode number outside of javascript safe integer range"
                    );
                } else if (t < 0) {
                    encodeNegative(t, e);
                } else {
                    encodePositive(t, e);
                }
                return e;
            };
            const encodePositive = (t, e) => {
                e[0] = 128;
                for (var s = e.length; s > 1; s--) {
                    e[s - 1] = t & 255;
                    t = Math.floor(t / 256);
                }
            };
            const encodeNegative = (t, e) => {
                e[0] = 255;
                var s = false;
                t = t * -1;
                for (var i = e.length; i > 1; i--) {
                    var r = t & 255;
                    t = Math.floor(t / 256);
                    if (s) {
                        e[i - 1] = onesComp(r);
                    } else if (r === 0) {
                        e[i - 1] = 0;
                    } else {
                        s = true;
                        e[i - 1] = twosComp(r);
                    }
                }
            };
            const parse = (t) => {
                const e = t[0];
                const s =
                    e === 128
                        ? pos(t.slice(1, t.length))
                        : e === 255
                        ? twos(t)
                        : null;
                if (s === null) {
                    throw Error("invalid base256 encoding");
                }
                if (!Number.isSafeInteger(s)) {
                    throw Error(
                        "parsed number outside of javascript safe integer range"
                    );
                }
                return s;
            };
            const twos = (t) => {
                var e = t.length;
                var s = 0;
                var i = false;
                for (var r = e - 1; r > -1; r--) {
                    var n = t[r];
                    var o;
                    if (i) {
                        o = onesComp(n);
                    } else if (n === 0) {
                        o = n;
                    } else {
                        i = true;
                        o = twosComp(n);
                    }
                    if (o !== 0) {
                        s -= o * Math.pow(256, e - r - 1);
                    }
                }
                return s;
            };
            const pos = (t) => {
                var e = t.length;
                var s = 0;
                for (var i = e - 1; i > -1; i--) {
                    var r = t[i];
                    if (r !== 0) {
                        s += r * Math.pow(256, e - i - 1);
                    }
                }
                return s;
            };
            const onesComp = (t) => (255 ^ t) & 255;
            const twosComp = (t) => ((255 ^ t) + 1) & 255;
            t.exports = { encode: encode, parse: parse };
        },
        1525: (t, e, s) => {
            "use strict";
            const i = s(5213);
            const r = s(8917);
            const n = s(7147);
            const o = s(6179);
            const h = s(1017);
            const a = s(8886);
            t.exports = (t, e, s) => {
                if (typeof t === "function") {
                    (s = t), (e = null), (t = {});
                } else if (Array.isArray(t)) {
                    (e = t), (t = {});
                }
                if (typeof e === "function") {
                    (s = e), (e = null);
                }
                if (!e) {
                    e = [];
                } else {
                    e = Array.from(e);
                }
                const r = i(t);
                if (r.sync && typeof s === "function") {
                    throw new TypeError(
                        "callback not supported for sync tar functions"
                    );
                }
                if (!r.file && typeof s === "function") {
                    throw new TypeError(
                        "callback only supported with file option"
                    );
                }
                if (e.length) {
                    filesFilter(r, e);
                }
                if (!r.noResume) {
                    onentryFunction(r);
                }
                return r.file && r.sync
                    ? listFileSync(r)
                    : r.file
                    ? listFile(r, s)
                    : list(r);
            };
            const onentryFunction = (t) => {
                const e = t.onentry;
                t.onentry = e
                    ? (t) => {
                          e(t);
                          t.resume();
                      }
                    : (t) => t.resume();
            };
            const filesFilter = (t, e) => {
                const s = new Map(e.map((t) => [a(t), true]));
                const i = t.filter;
                const mapHas = (t, e) => {
                    const i = e || h.parse(t).root || ".";
                    const r =
                        t === i
                            ? false
                            : s.has(t)
                            ? s.get(t)
                            : mapHas(h.dirname(t), i);
                    s.set(t, r);
                    return r;
                };
                t.filter = i
                    ? (t, e) => i(t, e) && mapHas(a(t))
                    : (t) => mapHas(a(t));
            };
            const listFileSync = (t) => {
                const e = list(t);
                const s = t.file;
                let i = true;
                let r;
                try {
                    const o = n.statSync(s);
                    const h = t.maxReadSize || 16 * 1024 * 1024;
                    if (o.size < h) {
                        e.end(n.readFileSync(s));
                    } else {
                        let t = 0;
                        const i = Buffer.allocUnsafe(h);
                        r = n.openSync(s, "r");
                        while (t < o.size) {
                            const s = n.readSync(r, i, 0, h, t);
                            t += s;
                            e.write(i.slice(0, s));
                        }
                        e.end();
                    }
                    i = false;
                } finally {
                    if (i && r) {
                        try {
                            n.closeSync(r);
                        } catch (t) {}
                    }
                }
            };
            const listFile = (t, e) => {
                const s = new r(t);
                const i = t.maxReadSize || 16 * 1024 * 1024;
                const h = t.file;
                const a = new Promise((t, e) => {
                    s.on("error", e);
                    s.on("end", t);
                    n.stat(h, (t, r) => {
                        if (t) {
                            e(t);
                        } else {
                            const t = new o.ReadStream(h, {
                                readSize: i,
                                size: r.size,
                            });
                            t.on("error", e);
                            t.pipe(s);
                        }
                    });
                });
                return e ? a.then(e, e) : a;
            };
            const list = (t) => new r(t);
        },
        9624: (t, e, s) => {
            "use strict";
            const i = s(6186);
            const r = s(7147);
            const n = s(1017);
            const o = s(9051);
            const h = s(6843);
            class SymlinkError extends Error {
                constructor(t, e) {
                    super("Cannot extract through symbolic link");
                    this.path = e;
                    this.symlink = t;
                }
                get name() {
                    return "SylinkError";
                }
            }
            class CwdError extends Error {
                constructor(t, e) {
                    super(e + ": Cannot cd into '" + t + "'");
                    this.path = t;
                    this.code = e;
                }
                get name() {
                    return "CwdError";
                }
            }
            const cGet = (t, e) => t.get(h(e));
            const cSet = (t, e, s) => t.set(h(e), s);
            const checkCwd = (t, e) => {
                r.stat(t, (s, i) => {
                    if (s || !i.isDirectory()) {
                        s = new CwdError(t, (s && s.code) || "ENOTDIR");
                    }
                    e(s);
                });
            };
            t.exports = (t, e, s) => {
                t = h(t);
                const a = e.umask;
                const l = e.mode | 448;
                const c = (l & a) !== 0;
                const u = e.uid;
                const f = e.gid;
                const d =
                    typeof u === "number" &&
                    typeof f === "number" &&
                    (u !== e.processUid || f !== e.processGid);
                const p = e.preserve;
                const m = e.unlink;
                const y = e.cache;
                const b = h(e.cwd);
                const done = (e, i) => {
                    if (e) {
                        s(e);
                    } else {
                        cSet(y, t, true);
                        if (i && d) {
                            o(i, u, f, (t) => done(t));
                        } else if (c) {
                            r.chmod(t, l, s);
                        } else {
                            s();
                        }
                    }
                };
                if (y && cGet(y, t) === true) {
                    return done();
                }
                if (t === b) {
                    return checkCwd(t, done);
                }
                if (p) {
                    return i(t, { mode: l }).then((t) => done(null, t), done);
                }
                const g = h(n.relative(b, t));
                const w = g.split("/");
                mkdir_(b, w, l, y, m, b, null, done);
            };
            const mkdir_ = (t, e, s, i, o, a, l, c) => {
                if (!e.length) {
                    return c(null, l);
                }
                const u = e.shift();
                const f = h(n.resolve(t + "/" + u));
                if (cGet(i, f)) {
                    return mkdir_(f, e, s, i, o, a, l, c);
                }
                r.mkdir(f, s, onmkdir(f, e, s, i, o, a, l, c));
            };
            const onmkdir = (t, e, s, i, n, o, a, l) => (c) => {
                if (c) {
                    r.lstat(t, (u, f) => {
                        if (u) {
                            u.path = u.path && h(u.path);
                            l(u);
                        } else if (f.isDirectory()) {
                            mkdir_(t, e, s, i, n, o, a, l);
                        } else if (n) {
                            r.unlink(t, (h) => {
                                if (h) {
                                    return l(h);
                                }
                                r.mkdir(t, s, onmkdir(t, e, s, i, n, o, a, l));
                            });
                        } else if (f.isSymbolicLink()) {
                            return l(
                                new SymlinkError(t, t + "/" + e.join("/"))
                            );
                        } else {
                            l(c);
                        }
                    });
                } else {
                    a = a || t;
                    mkdir_(t, e, s, i, n, o, a, l);
                }
            };
            const checkCwdSync = (t) => {
                let e = false;
                let s = "ENOTDIR";
                try {
                    e = r.statSync(t).isDirectory();
                } catch (t) {
                    s = t.code;
                } finally {
                    if (!e) {
                        throw new CwdError(t, s);
                    }
                }
            };
            t.exports.sync = (t, e) => {
                t = h(t);
                const s = e.umask;
                const a = e.mode | 448;
                const l = (a & s) !== 0;
                const c = e.uid;
                const u = e.gid;
                const f =
                    typeof c === "number" &&
                    typeof u === "number" &&
                    (c !== e.processUid || u !== e.processGid);
                const d = e.preserve;
                const p = e.unlink;
                const m = e.cache;
                const y = h(e.cwd);
                const done = (e) => {
                    cSet(m, t, true);
                    if (e && f) {
                        o.sync(e, c, u);
                    }
                    if (l) {
                        r.chmodSync(t, a);
                    }
                };
                if (m && cGet(m, t) === true) {
                    return done();
                }
                if (t === y) {
                    checkCwdSync(y);
                    return done();
                }
                if (d) {
                    return done(i.sync(t, a));
                }
                const b = h(n.relative(y, t));
                const g = b.split("/");
                let w = null;
                for (
                    let t = g.shift(), e = y;
                    t && (e += "/" + t);
                    t = g.shift()
                ) {
                    e = h(n.resolve(e));
                    if (cGet(m, e)) {
                        continue;
                    }
                    try {
                        r.mkdirSync(e, a);
                        w = w || e;
                        cSet(m, e, true);
                    } catch (t) {
                        const s = r.lstatSync(e);
                        if (s.isDirectory()) {
                            cSet(m, e, true);
                            continue;
                        } else if (p) {
                            r.unlinkSync(e);
                            r.mkdirSync(e, a);
                            w = w || e;
                            cSet(m, e, true);
                            continue;
                        } else if (s.isSymbolicLink()) {
                            return new SymlinkError(e, e + "/" + g.join("/"));
                        }
                    }
                }
                return done(w);
            };
        },
        8371: (t) => {
            "use strict";
            t.exports = (t, e, s) => {
                t &= 4095;
                if (s) {
                    t = (t | 384) & ~18;
                }
                if (e) {
                    if (t & 256) {
                        t |= 64;
                    }
                    if (t & 32) {
                        t |= 8;
                    }
                    if (t & 4) {
                        t |= 1;
                    }
                }
                return t;
            };
        },
        7118: (t) => {
            const e = Object.create(null);
            const { hasOwnProperty: s } = Object.prototype;
            t.exports = (t) => {
                if (!s.call(e, t)) {
                    e[t] = t.normalize("NFD");
                }
                return e[t];
            };
        },
        6843: (t) => {
            const e = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform;
            t.exports =
                e !== "win32" ? (t) => t : (t) => t && t.replace(/\\/g, "/");
        },
        7900: (t, e, s) => {
            "use strict";
            class PackJob {
                constructor(t, e) {
                    this.path = t || "./";
                    this.absolute = e;
                    this.entry = null;
                    this.stat = null;
                    this.readdir = null;
                    this.pending = false;
                    this.ignore = false;
                    this.piped = false;
                }
            }
            const { Minipass: i } = s(1077);
            const r = s(3486);
            const n = s(8116);
            const o = s(5450);
            const h = o.Sync;
            const a = o.Tar;
            const l = s(665);
            const c = Buffer.alloc(1024);
            const u = Symbol("onStat");
            const f = Symbol("ended");
            const d = Symbol("queue");
            const p = Symbol("current");
            const m = Symbol("process");
            const y = Symbol("processing");
            const b = Symbol("processJob");
            const g = Symbol("jobs");
            const w = Symbol("jobDone");
            const _ = Symbol("addFSEntry");
            const E = Symbol("addTarEntry");
            const S = Symbol("stat");
            const v = Symbol("readdir");
            const R = Symbol("onreaddir");
            const O = Symbol("pipe");
            const T = Symbol("entry");
            const k = Symbol("entryOpt");
            const x = Symbol("writeEntryClass");
            const A = Symbol("write");
            const P = Symbol("ondrain");
            const C = s(7147);
            const L = s(1017);
            const D = s(5899);
            const M = s(6843);
            const I = D(
                class Pack extends i {
                    constructor(t) {
                        super(t);
                        t = t || Object.create(null);
                        this.opt = t;
                        this.file = t.file || "";
                        this.cwd = t.cwd || process.cwd();
                        this.maxReadSize = t.maxReadSize;
                        this.preservePaths = !!t.preservePaths;
                        this.strict = !!t.strict;
                        this.noPax = !!t.noPax;
                        this.prefix = M(t.prefix || "");
                        this.linkCache = t.linkCache || new Map();
                        this.statCache = t.statCache || new Map();
                        this.readdirCache = t.readdirCache || new Map();
                        this[x] = o;
                        if (typeof t.onwarn === "function") {
                            this.on("warn", t.onwarn);
                        }
                        this.portable = !!t.portable;
                        this.zip = null;
                        if (t.gzip) {
                            if (typeof t.gzip !== "object") {
                                t.gzip = {};
                            }
                            if (this.portable) {
                                t.gzip.portable = true;
                            }
                            this.zip = new r.Gzip(t.gzip);
                            this.zip.on("data", (t) => super.write(t));
                            this.zip.on("end", (t) => super.end());
                            this.zip.on("drain", (t) => this[P]());
                            this.on("resume", (t) => this.zip.resume());
                        } else {
                            this.on("drain", this[P]);
                        }
                        this.noDirRecurse = !!t.noDirRecurse;
                        this.follow = !!t.follow;
                        this.noMtime = !!t.noMtime;
                        this.mtime = t.mtime || null;
                        this.filter =
                            typeof t.filter === "function"
                                ? t.filter
                                : (t) => true;
                        this[d] = new l();
                        this[g] = 0;
                        this.jobs = +t.jobs || 4;
                        this[y] = false;
                        this[f] = false;
                    }
                    [A](t) {
                        return super.write(t);
                    }
                    add(t) {
                        this.write(t);
                        return this;
                    }
                    end(t) {
                        if (t) {
                            this.write(t);
                        }
                        this[f] = true;
                        this[m]();
                        return this;
                    }
                    write(t) {
                        if (this[f]) {
                            throw new Error("write after end");
                        }
                        if (t instanceof n) {
                            this[E](t);
                        } else {
                            this[_](t);
                        }
                        return this.flowing;
                    }
                    [E](t) {
                        const e = M(L.resolve(this.cwd, t.path));
                        if (!this.filter(t.path, t)) {
                            t.resume();
                        } else {
                            const s = new PackJob(t.path, e, false);
                            s.entry = new a(t, this[k](s));
                            s.entry.on("end", (t) => this[w](s));
                            this[g] += 1;
                            this[d].push(s);
                        }
                        this[m]();
                    }
                    [_](t) {
                        const e = M(L.resolve(this.cwd, t));
                        this[d].push(new PackJob(t, e));
                        this[m]();
                    }
                    [S](t) {
                        t.pending = true;
                        this[g] += 1;
                        const e = this.follow ? "stat" : "lstat";
                        C[e](t.absolute, (e, s) => {
                            t.pending = false;
                            this[g] -= 1;
                            if (e) {
                                this.emit("error", e);
                            } else {
                                this[u](t, s);
                            }
                        });
                    }
                    [u](t, e) {
                        this.statCache.set(t.absolute, e);
                        t.stat = e;
                        if (!this.filter(t.path, e)) {
                            t.ignore = true;
                        }
                        this[m]();
                    }
                    [v](t) {
                        t.pending = true;
                        this[g] += 1;
                        C.readdir(t.absolute, (e, s) => {
                            t.pending = false;
                            this[g] -= 1;
                            if (e) {
                                return this.emit("error", e);
                            }
                            this[R](t, s);
                        });
                    }
                    [R](t, e) {
                        this.readdirCache.set(t.absolute, e);
                        t.readdir = e;
                        this[m]();
                    }
                    [m]() {
                        if (this[y]) {
                            return;
                        }
                        this[y] = true;
                        for (
                            let t = this[d].head;
                            t !== null && this[g] < this.jobs;
                            t = t.next
                        ) {
                            this[b](t.value);
                            if (t.value.ignore) {
                                const e = t.next;
                                this[d].removeNode(t);
                                t.next = e;
                            }
                        }
                        this[y] = false;
                        if (this[f] && !this[d].length && this[g] === 0) {
                            if (this.zip) {
                                this.zip.end(c);
                            } else {
                                super.write(c);
                                super.end();
                            }
                        }
                    }
                    get [p]() {
                        return this[d] && this[d].head && this[d].head.value;
                    }
                    [w](t) {
                        this[d].shift();
                        this[g] -= 1;
                        this[m]();
                    }
                    [b](t) {
                        if (t.pending) {
                            return;
                        }
                        if (t.entry) {
                            if (t === this[p] && !t.piped) {
                                this[O](t);
                            }
                            return;
                        }
                        if (!t.stat) {
                            if (this.statCache.has(t.absolute)) {
                                this[u](t, this.statCache.get(t.absolute));
                            } else {
                                this[S](t);
                            }
                        }
                        if (!t.stat) {
                            return;
                        }
                        if (t.ignore) {
                            return;
                        }
                        if (
                            !this.noDirRecurse &&
                            t.stat.isDirectory() &&
                            !t.readdir
                        ) {
                            if (this.readdirCache.has(t.absolute)) {
                                this[R](t, this.readdirCache.get(t.absolute));
                            } else {
                                this[v](t);
                            }
                            if (!t.readdir) {
                                return;
                            }
                        }
                        t.entry = this[T](t);
                        if (!t.entry) {
                            t.ignore = true;
                            return;
                        }
                        if (t === this[p] && !t.piped) {
                            this[O](t);
                        }
                    }
                    [k](t) {
                        return {
                            onwarn: (t, e, s) => this.warn(t, e, s),
                            noPax: this.noPax,
                            cwd: this.cwd,
                            absolute: t.absolute,
                            preservePaths: this.preservePaths,
                            maxReadSize: this.maxReadSize,
                            strict: this.strict,
                            portable: this.portable,
                            linkCache: this.linkCache,
                            statCache: this.statCache,
                            noMtime: this.noMtime,
                            mtime: this.mtime,
                            prefix: this.prefix,
                        };
                    }
                    [T](t) {
                        this[g] += 1;
                        try {
                            return new this[x](t.path, this[k](t))
                                .on("end", () => this[w](t))
                                .on("error", (t) => this.emit("error", t));
                        } catch (t) {
                            this.emit("error", t);
                        }
                    }
                    [P]() {
                        if (this[p] && this[p].entry) {
                            this[p].entry.resume();
                        }
                    }
                    [O](t) {
                        t.piped = true;
                        if (t.readdir) {
                            t.readdir.forEach((e) => {
                                const s = t.path;
                                const i =
                                    s === "./" ? "" : s.replace(/\/*$/, "/");
                                this[_](i + e);
                            });
                        }
                        const e = t.entry;
                        const s = this.zip;
                        if (s) {
                            e.on("data", (t) => {
                                if (!s.write(t)) {
                                    e.pause();
                                }
                            });
                        } else {
                            e.on("data", (t) => {
                                if (!super.write(t)) {
                                    e.pause();
                                }
                            });
                        }
                    }
                    pause() {
                        if (this.zip) {
                            this.zip.pause();
                        }
                        return super.pause();
                    }
                }
            );
            class PackSync extends I {
                constructor(t) {
                    super(t);
                    this[x] = h;
                }
                pause() {}
                resume() {}
                [S](t) {
                    const e = this.follow ? "statSync" : "lstatSync";
                    this[u](t, C[e](t.absolute));
                }
                [v](t, e) {
                    this[R](t, C.readdirSync(t.absolute));
                }
                [O](t) {
                    const e = t.entry;
                    const s = this.zip;
                    if (t.readdir) {
                        t.readdir.forEach((e) => {
                            const s = t.path;
                            const i = s === "./" ? "" : s.replace(/\/*$/, "/");
                            this[_](i + e);
                        });
                    }
                    if (s) {
                        e.on("data", (t) => {
                            s.write(t);
                        });
                    } else {
                        e.on("data", (t) => {
                            super[A](t);
                        });
                    }
                }
            }
            I.Sync = PackSync;
            t.exports = I;
        },
        8917: (t, e, s) => {
            "use strict";
            const i = s(5899);
            const r = s(6043);
            const n = s(2361);
            const o = s(665);
            const h = 1024 * 1024;
            const a = s(8116);
            const l = s(7996);
            const c = s(3486);
            const { nextTick: u } = s(7282);
            const f = Buffer.from([31, 139]);
            const d = Symbol("state");
            const p = Symbol("writeEntry");
            const m = Symbol("readEntry");
            const y = Symbol("nextEntry");
            const b = Symbol("processEntry");
            const g = Symbol("extendedHeader");
            const w = Symbol("globalExtendedHeader");
            const _ = Symbol("meta");
            const E = Symbol("emitMeta");
            const S = Symbol("buffer");
            const v = Symbol("queue");
            const R = Symbol("ended");
            const O = Symbol("emittedEnd");
            const T = Symbol("emit");
            const k = Symbol("unzip");
            const x = Symbol("consumeChunk");
            const A = Symbol("consumeChunkSub");
            const P = Symbol("consumeBody");
            const C = Symbol("consumeMeta");
            const L = Symbol("consumeHeader");
            const D = Symbol("consuming");
            const M = Symbol("bufferConcat");
            const I = Symbol("maybeEnd");
            const N = Symbol("writing");
            const B = Symbol("aborted");
            const U = Symbol("onDone");
            const F = Symbol("sawValidEntry");
            const j = Symbol("sawNullBlock");
            const q = Symbol("sawEOF");
            const H = Symbol("closeStream");
            const noop = (t) => true;
            t.exports = i(
                class Parser extends n {
                    constructor(t) {
                        t = t || {};
                        super(t);
                        this.file = t.file || "";
                        this[F] = null;
                        this.on(U, (t) => {
                            if (this[d] === "begin" || this[F] === false) {
                                this.warn(
                                    "TAR_BAD_ARCHIVE",
                                    "Unrecognized archive format"
                                );
                            }
                        });
                        if (t.ondone) {
                            this.on(U, t.ondone);
                        } else {
                            this.on(U, (t) => {
                                this.emit("prefinish");
                                this.emit("finish");
                                this.emit("end");
                            });
                        }
                        this.strict = !!t.strict;
                        this.maxMetaEntrySize = t.maxMetaEntrySize || h;
                        this.filter =
                            typeof t.filter === "function" ? t.filter : noop;
                        this.writable = true;
                        this.readable = false;
                        this[v] = new o();
                        this[S] = null;
                        this[m] = null;
                        this[p] = null;
                        this[d] = "begin";
                        this[_] = "";
                        this[g] = null;
                        this[w] = null;
                        this[R] = false;
                        this[k] = null;
                        this[B] = false;
                        this[j] = false;
                        this[q] = false;
                        this.on("end", () => this[H]());
                        if (typeof t.onwarn === "function") {
                            this.on("warn", t.onwarn);
                        }
                        if (typeof t.onentry === "function") {
                            this.on("entry", t.onentry);
                        }
                    }
                    [L](t, e) {
                        if (this[F] === null) {
                            this[F] = false;
                        }
                        let s;
                        try {
                            s = new r(t, e, this[g], this[w]);
                        } catch (t) {
                            return this.warn("TAR_ENTRY_INVALID", t);
                        }
                        if (s.nullBlock) {
                            if (this[j]) {
                                this[q] = true;
                                if (this[d] === "begin") {
                                    this[d] = "header";
                                }
                                this[T]("eof");
                            } else {
                                this[j] = true;
                                this[T]("nullBlock");
                            }
                        } else {
                            this[j] = false;
                            if (!s.cksumValid) {
                                this.warn(
                                    "TAR_ENTRY_INVALID",
                                    "checksum failure",
                                    { header: s }
                                );
                            } else if (!s.path) {
                                this.warn(
                                    "TAR_ENTRY_INVALID",
                                    "path is required",
                                    { header: s }
                                );
                            } else {
                                const t = s.type;
                                if (
                                    /^(Symbolic)?Link$/.test(t) &&
                                    !s.linkpath
                                ) {
                                    this.warn(
                                        "TAR_ENTRY_INVALID",
                                        "linkpath required",
                                        { header: s }
                                    );
                                } else if (
                                    !/^(Symbolic)?Link$/.test(t) &&
                                    s.linkpath
                                ) {
                                    this.warn(
                                        "TAR_ENTRY_INVALID",
                                        "linkpath forbidden",
                                        { header: s }
                                    );
                                } else {
                                    const t = (this[p] = new a(
                                        s,
                                        this[g],
                                        this[w]
                                    ));
                                    if (!this[F]) {
                                        if (t.remain) {
                                            const onend = () => {
                                                if (!t.invalid) {
                                                    this[F] = true;
                                                }
                                            };
                                            t.on("end", onend);
                                        } else {
                                            this[F] = true;
                                        }
                                    }
                                    if (t.meta) {
                                        if (t.size > this.maxMetaEntrySize) {
                                            t.ignore = true;
                                            this[T]("ignoredEntry", t);
                                            this[d] = "ignore";
                                            t.resume();
                                        } else if (t.size > 0) {
                                            this[_] = "";
                                            t.on("data", (t) => (this[_] += t));
                                            this[d] = "meta";
                                        }
                                    } else {
                                        this[g] = null;
                                        t.ignore =
                                            t.ignore || !this.filter(t.path, t);
                                        if (t.ignore) {
                                            this[T]("ignoredEntry", t);
                                            this[d] = t.remain
                                                ? "ignore"
                                                : "header";
                                            t.resume();
                                        } else {
                                            if (t.remain) {
                                                this[d] = "body";
                                            } else {
                                                this[d] = "header";
                                                t.end();
                                            }
                                            if (!this[m]) {
                                                this[v].push(t);
                                                this[y]();
                                            } else {
                                                this[v].push(t);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    [H]() {
                        u(() => this.emit("close"));
                    }
                    [b](t) {
                        let e = true;
                        if (!t) {
                            this[m] = null;
                            e = false;
                        } else if (Array.isArray(t)) {
                            this.emit.apply(this, t);
                        } else {
                            this[m] = t;
                            this.emit("entry", t);
                            if (!t.emittedEnd) {
                                t.on("end", (t) => this[y]());
                                e = false;
                            }
                        }
                        return e;
                    }
                    [y]() {
                        do {} while (this[b](this[v].shift()));
                        if (!this[v].length) {
                            const t = this[m];
                            const e = !t || t.flowing || t.size === t.remain;
                            if (e) {
                                if (!this[N]) {
                                    this.emit("drain");
                                }
                            } else {
                                t.once("drain", (t) => this.emit("drain"));
                            }
                        }
                    }
                    [P](t, e) {
                        const s = this[p];
                        const i = s.blockRemain;
                        const r =
                            i >= t.length && e === 0 ? t : t.slice(e, e + i);
                        s.write(r);
                        if (!s.blockRemain) {
                            this[d] = "header";
                            this[p] = null;
                            s.end();
                        }
                        return r.length;
                    }
                    [C](t, e) {
                        const s = this[p];
                        const i = this[P](t, e);
                        if (!this[p]) {
                            this[E](s);
                        }
                        return i;
                    }
                    [T](t, e, s) {
                        if (!this[v].length && !this[m]) {
                            this.emit(t, e, s);
                        } else {
                            this[v].push([t, e, s]);
                        }
                    }
                    [E](t) {
                        this[T]("meta", this[_]);
                        switch (t.type) {
                            case "ExtendedHeader":
                            case "OldExtendedHeader":
                                this[g] = l.parse(this[_], this[g], false);
                                break;
                            case "GlobalExtendedHeader":
                                this[w] = l.parse(this[_], this[w], true);
                                break;
                            case "NextFileHasLongPath":
                            case "OldGnuLongPath":
                                this[g] = this[g] || Object.create(null);
                                this[g].path = this[_].replace(/\0.*/, "");
                                break;
                            case "NextFileHasLongLinkpath":
                                this[g] = this[g] || Object.create(null);
                                this[g].linkpath = this[_].replace(/\0.*/, "");
                                break;
                            default:
                                throw new Error("unknown meta: " + t.type);
                        }
                    }
                    abort(t) {
                        this[B] = true;
                        this.emit("abort", t);
                        this.warn("TAR_ABORT", t, { recoverable: false });
                    }
                    write(t) {
                        if (this[B]) {
                            return;
                        }
                        if (this[k] === null && t) {
                            if (this[S]) {
                                t = Buffer.concat([this[S], t]);
                                this[S] = null;
                            }
                            if (t.length < f.length) {
                                this[S] = t;
                                return true;
                            }
                            for (
                                let e = 0;
                                this[k] === null && e < f.length;
                                e++
                            ) {
                                if (t[e] !== f[e]) {
                                    this[k] = false;
                                }
                            }
                            if (this[k] === null) {
                                const e = this[R];
                                this[R] = false;
                                this[k] = new c.Unzip();
                                this[k].on("data", (t) => this[x](t));
                                this[k].on("error", (t) => this.abort(t));
                                this[k].on("end", (t) => {
                                    this[R] = true;
                                    this[x]();
                                });
                                this[N] = true;
                                const s = this[k][e ? "end" : "write"](t);
                                this[N] = false;
                                return s;
                            }
                        }
                        this[N] = true;
                        if (this[k]) {
                            this[k].write(t);
                        } else {
                            this[x](t);
                        }
                        this[N] = false;
                        const e = this[v].length
                            ? false
                            : this[m]
                            ? this[m].flowing
                            : true;
                        if (!e && !this[v].length) {
                            this[m].once("drain", (t) => this.emit("drain"));
                        }
                        return e;
                    }
                    [M](t) {
                        if (t && !this[B]) {
                            this[S] = this[S] ? Buffer.concat([this[S], t]) : t;
                        }
                    }
                    [I]() {
                        if (this[R] && !this[O] && !this[B] && !this[D]) {
                            this[O] = true;
                            const t = this[p];
                            if (t && t.blockRemain) {
                                const e = this[S] ? this[S].length : 0;
                                this.warn(
                                    "TAR_BAD_ARCHIVE",
                                    `Truncated input (needed ${t.blockRemain} more bytes, only ${e} available)`,
                                    { entry: t }
                                );
                                if (this[S]) {
                                    t.write(this[S]);
                                }
                                t.end();
                            }
                            this[T](U);
                        }
                    }
                    [x](t) {
                        if (this[D]) {
                            this[M](t);
                        } else if (!t && !this[S]) {
                            this[I]();
                        } else {
                            this[D] = true;
                            if (this[S]) {
                                this[M](t);
                                const e = this[S];
                                this[S] = null;
                                this[A](e);
                            } else {
                                this[A](t);
                            }
                            while (
                                this[S] &&
                                this[S].length >= 512 &&
                                !this[B] &&
                                !this[q]
                            ) {
                                const t = this[S];
                                this[S] = null;
                                this[A](t);
                            }
                            this[D] = false;
                        }
                        if (!this[S] || this[R]) {
                            this[I]();
                        }
                    }
                    [A](t) {
                        let e = 0;
                        const s = t.length;
                        while (e + 512 <= s && !this[B] && !this[q]) {
                            switch (this[d]) {
                                case "begin":
                                case "header":
                                    this[L](t, e);
                                    e += 512;
                                    break;
                                case "ignore":
                                case "body":
                                    e += this[P](t, e);
                                    break;
                                case "meta":
                                    e += this[C](t, e);
                                    break;
                                default:
                                    throw new Error(
                                        "invalid state: " + this[d]
                                    );
                            }
                        }
                        if (e < s) {
                            if (this[S]) {
                                this[S] = Buffer.concat([t.slice(e), this[S]]);
                            } else {
                                this[S] = t.slice(e);
                            }
                        }
                    }
                    end(t) {
                        if (!this[B]) {
                            if (this[k]) {
                                this[k].end(t);
                            } else {
                                this[R] = true;
                                this.write(t);
                            }
                        }
                    }
                }
            );
        },
        9587: (t, e, s) => {
            const i = s(9491);
            const r = s(7118);
            const n = s(8886);
            const { join: o } = s(1017);
            const h = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform;
            const a = h === "win32";
            t.exports = () => {
                const t = new Map();
                const e = new Map();
                const getDirs = (t) => {
                    const e = t
                        .split("/")
                        .slice(0, -1)
                        .reduce((t, e) => {
                            if (t.length) {
                                e = o(t[t.length - 1], e);
                            }
                            t.push(e || "/");
                            return t;
                        }, []);
                    return e;
                };
                const s = new Set();
                const getQueues = (s) => {
                    const i = e.get(s);
                    if (!i) {
                        throw new Error(
                            "function does not have any path reservations"
                        );
                    }
                    return {
                        paths: i.paths.map((e) => t.get(e)),
                        dirs: [...i.dirs].map((e) => t.get(e)),
                    };
                };
                const check = (t) => {
                    const { paths: e, dirs: s } = getQueues(t);
                    return (
                        e.every((e) => e[0] === t) &&
                        s.every((e) => e[0] instanceof Set && e[0].has(t))
                    );
                };
                const run = (t) => {
                    if (s.has(t) || !check(t)) {
                        return false;
                    }
                    s.add(t);
                    t(() => clear(t));
                    return true;
                };
                const clear = (r) => {
                    if (!s.has(r)) {
                        return false;
                    }
                    const { paths: n, dirs: o } = e.get(r);
                    const h = new Set();
                    n.forEach((e) => {
                        const s = t.get(e);
                        i.equal(s[0], r);
                        if (s.length === 1) {
                            t.delete(e);
                        } else {
                            s.shift();
                            if (typeof s[0] === "function") {
                                h.add(s[0]);
                            } else {
                                s[0].forEach((t) => h.add(t));
                            }
                        }
                    });
                    o.forEach((e) => {
                        const s = t.get(e);
                        i(s[0] instanceof Set);
                        if (s[0].size === 1 && s.length === 1) {
                            t.delete(e);
                        } else if (s[0].size === 1) {
                            s.shift();
                            h.add(s[0]);
                        } else {
                            s[0].delete(r);
                        }
                    });
                    s.delete(r);
                    h.forEach((t) => run(t));
                    return true;
                };
                const reserve = (s, i) => {
                    s = a
                        ? ["win32 parallelization disabled"]
                        : s.map((t) => n(o(r(t))).toLowerCase());
                    const h = new Set(
                        s.map((t) => getDirs(t)).reduce((t, e) => t.concat(e))
                    );
                    e.set(i, { dirs: h, paths: s });
                    s.forEach((e) => {
                        const s = t.get(e);
                        if (!s) {
                            t.set(e, [i]);
                        } else {
                            s.push(i);
                        }
                    });
                    h.forEach((e) => {
                        const s = t.get(e);
                        if (!s) {
                            t.set(e, [new Set([i])]);
                        } else if (s[s.length - 1] instanceof Set) {
                            s[s.length - 1].add(i);
                        } else {
                            s.push(new Set([i]));
                        }
                    });
                    return run(i);
                };
                return { check: check, reserve: reserve };
            };
        },
        7996: (t, e, s) => {
            "use strict";
            const i = s(6043);
            const r = s(1017);
            class Pax {
                constructor(t, e) {
                    this.atime = t.atime || null;
                    this.charset = t.charset || null;
                    this.comment = t.comment || null;
                    this.ctime = t.ctime || null;
                    this.gid = t.gid || null;
                    this.gname = t.gname || null;
                    this.linkpath = t.linkpath || null;
                    this.mtime = t.mtime || null;
                    this.path = t.path || null;
                    this.size = t.size || null;
                    this.uid = t.uid || null;
                    this.uname = t.uname || null;
                    this.dev = t.dev || null;
                    this.ino = t.ino || null;
                    this.nlink = t.nlink || null;
                    this.global = e || false;
                }
                encode() {
                    const t = this.encodeBody();
                    if (t === "") {
                        return null;
                    }
                    const e = Buffer.byteLength(t);
                    const s = 512 * Math.ceil(1 + e / 512);
                    const n = Buffer.allocUnsafe(s);
                    for (let t = 0; t < 512; t++) {
                        n[t] = 0;
                    }
                    new i({
                        path: ("PaxHeader/" + r.basename(this.path)).slice(
                            0,
                            99
                        ),
                        mode: this.mode || 420,
                        uid: this.uid || null,
                        gid: this.gid || null,
                        size: e,
                        mtime: this.mtime || null,
                        type: this.global
                            ? "GlobalExtendedHeader"
                            : "ExtendedHeader",
                        linkpath: "",
                        uname: this.uname || "",
                        gname: this.gname || "",
                        devmaj: 0,
                        devmin: 0,
                        atime: this.atime || null,
                        ctime: this.ctime || null,
                    }).encode(n);
                    n.write(t, 512, e, "utf8");
                    for (let t = e + 512; t < n.length; t++) {
                        n[t] = 0;
                    }
                    return n;
                }
                encodeBody() {
                    return (
                        this.encodeField("path") +
                        this.encodeField("ctime") +
                        this.encodeField("atime") +
                        this.encodeField("dev") +
                        this.encodeField("ino") +
                        this.encodeField("nlink") +
                        this.encodeField("charset") +
                        this.encodeField("comment") +
                        this.encodeField("gid") +
                        this.encodeField("gname") +
                        this.encodeField("linkpath") +
                        this.encodeField("mtime") +
                        this.encodeField("size") +
                        this.encodeField("uid") +
                        this.encodeField("uname")
                    );
                }
                encodeField(t) {
                    if (this[t] === null || this[t] === undefined) {
                        return "";
                    }
                    const e =
                        this[t] instanceof Date
                            ? this[t].getTime() / 1e3
                            : this[t];
                    const s =
                        " " +
                        (t === "dev" || t === "ino" || t === "nlink"
                            ? "SCHILY."
                            : "") +
                        t +
                        "=" +
                        e +
                        "\n";
                    const i = Buffer.byteLength(s);
                    let r = Math.floor(Math.log(i) / Math.log(10)) + 1;
                    if (i + r >= Math.pow(10, r)) {
                        r += 1;
                    }
                    const n = r + i;
                    return n + s;
                }
            }
            Pax.parse = (t, e, s) => new Pax(merge(parseKV(t), e), s);
            const merge = (t, e) =>
                e ? Object.keys(t).reduce((e, s) => ((e[s] = t[s]), e), e) : t;
            const parseKV = (t) =>
                t
                    .replace(/\n$/, "")
                    .split("\n")
                    .reduce(parseKVLine, Object.create(null));
            const parseKVLine = (t, e) => {
                const s = parseInt(e, 10);
                if (s !== Buffer.byteLength(e) + 1) {
                    return t;
                }
                e = e.slice((s + " ").length);
                const i = e.split("=");
                const r = i.shift().replace(/^SCHILY\.(dev|ino|nlink)/, "$1");
                if (!r) {
                    return t;
                }
                const n = i.join("=");
                t[r] = /^([A-Z]+\.)?([mac]|birth|creation)time$/.test(r)
                    ? new Date(n * 1e3)
                    : /^[0-9]+$/.test(n)
                    ? +n
                    : n;
                return t;
            };
            t.exports = Pax;
        },
        8116: (t, e, s) => {
            "use strict";
            const { Minipass: i } = s(1077);
            const r = s(6843);
            const n = Symbol("slurp");
            t.exports = class ReadEntry extends i {
                constructor(t, e, s) {
                    super();
                    this.pause();
                    this.extended = e;
                    this.globalExtended = s;
                    this.header = t;
                    this.startBlockSize = 512 * Math.ceil(t.size / 512);
                    this.blockRemain = this.startBlockSize;
                    this.remain = t.size;
                    this.type = t.type;
                    this.meta = false;
                    this.ignore = false;
                    switch (this.type) {
                        case "File":
                        case "OldFile":
                        case "Link":
                        case "SymbolicLink":
                        case "CharacterDevice":
                        case "BlockDevice":
                        case "Directory":
                        case "FIFO":
                        case "ContiguousFile":
                        case "GNUDumpDir":
                            break;
                        case "NextFileHasLongLinkpath":
                        case "NextFileHasLongPath":
                        case "OldGnuLongPath":
                        case "GlobalExtendedHeader":
                        case "ExtendedHeader":
                        case "OldExtendedHeader":
                            this.meta = true;
                            break;
                        default:
                            this.ignore = true;
                    }
                    this.path = r(t.path);
                    this.mode = t.mode;
                    if (this.mode) {
                        this.mode = this.mode & 4095;
                    }
                    this.uid = t.uid;
                    this.gid = t.gid;
                    this.uname = t.uname;
                    this.gname = t.gname;
                    this.size = t.size;
                    this.mtime = t.mtime;
                    this.atime = t.atime;
                    this.ctime = t.ctime;
                    this.linkpath = r(t.linkpath);
                    this.uname = t.uname;
                    this.gname = t.gname;
                    if (e) {
                        this[n](e);
                    }
                    if (s) {
                        this[n](s, true);
                    }
                }
                write(t) {
                    const e = t.length;
                    if (e > this.blockRemain) {
                        throw new Error(
                            "writing more to entry than is appropriate"
                        );
                    }
                    const s = this.remain;
                    const i = this.blockRemain;
                    this.remain = Math.max(0, s - e);
                    this.blockRemain = Math.max(0, i - e);
                    if (this.ignore) {
                        return true;
                    }
                    if (s >= e) {
                        return super.write(t);
                    }
                    return super.write(t.slice(0, s));
                }
                [n](t, e) {
                    for (const s in t) {
                        if (
                            t[s] !== null &&
                            t[s] !== undefined &&
                            !(e && s === "path")
                        ) {
                            this[s] =
                                s === "path" || s === "linkpath"
                                    ? r(t[s])
                                    : t[s];
                        }
                    }
                }
            };
        },
        5923: (t, e, s) => {
            "use strict";
            const i = s(5213);
            const r = s(7900);
            const n = s(7147);
            const o = s(6179);
            const h = s(1525);
            const a = s(1017);
            const l = s(6043);
            t.exports = (t, e, s) => {
                const r = i(t);
                if (!r.file) {
                    throw new TypeError("file is required");
                }
                if (r.gzip) {
                    throw new TypeError("cannot append to compressed archives");
                }
                if (!e || !Array.isArray(e) || !e.length) {
                    throw new TypeError("no files or directories specified");
                }
                e = Array.from(e);
                return r.sync ? replaceSync(r, e) : replace(r, e, s);
            };
            const replaceSync = (t, e) => {
                const s = new r.Sync(t);
                let i = true;
                let o;
                let h;
                try {
                    try {
                        o = n.openSync(t.file, "r+");
                    } catch (e) {
                        if (e.code === "ENOENT") {
                            o = n.openSync(t.file, "w+");
                        } else {
                            throw e;
                        }
                    }
                    const r = n.fstatSync(o);
                    const a = Buffer.alloc(512);
                    t: for (h = 0; h < r.size; h += 512) {
                        for (let t = 0, e = 0; t < 512; t += e) {
                            e = n.readSync(o, a, t, a.length - t, h + t);
                            if (h === 0 && a[0] === 31 && a[1] === 139) {
                                throw new Error(
                                    "cannot append to compressed archives"
                                );
                            }
                            if (!e) {
                                break t;
                            }
                        }
                        const e = new l(a);
                        if (!e.cksumValid) {
                            break;
                        }
                        const s = 512 * Math.ceil(e.size / 512);
                        if (h + s + 512 > r.size) {
                            break;
                        }
                        h += s;
                        if (t.mtimeCache) {
                            t.mtimeCache.set(e.path, e.mtime);
                        }
                    }
                    i = false;
                    streamSync(t, s, h, o, e);
                } finally {
                    if (i) {
                        try {
                            n.closeSync(o);
                        } catch (t) {}
                    }
                }
            };
            const streamSync = (t, e, s, i, r) => {
                const n = new o.WriteStreamSync(t.file, { fd: i, start: s });
                e.pipe(n);
                addFilesSync(e, r);
            };
            const replace = (t, e, s) => {
                e = Array.from(e);
                const i = new r(t);
                const getPos = (e, s, i) => {
                    const cb = (t, s) => {
                        if (t) {
                            n.close(e, (e) => i(t));
                        } else {
                            i(null, s);
                        }
                    };
                    let r = 0;
                    if (s === 0) {
                        return cb(null, 0);
                    }
                    let o = 0;
                    const h = Buffer.alloc(512);
                    const onread = (i, a) => {
                        if (i) {
                            return cb(i);
                        }
                        o += a;
                        if (o < 512 && a) {
                            return n.read(e, h, o, h.length - o, r + o, onread);
                        }
                        if (r === 0 && h[0] === 31 && h[1] === 139) {
                            return cb(
                                new Error(
                                    "cannot append to compressed archives"
                                )
                            );
                        }
                        if (o < 512) {
                            return cb(null, r);
                        }
                        const c = new l(h);
                        if (!c.cksumValid) {
                            return cb(null, r);
                        }
                        const u = 512 * Math.ceil(c.size / 512);
                        if (r + u + 512 > s) {
                            return cb(null, r);
                        }
                        r += u + 512;
                        if (r >= s) {
                            return cb(null, r);
                        }
                        if (t.mtimeCache) {
                            t.mtimeCache.set(c.path, c.mtime);
                        }
                        o = 0;
                        n.read(e, h, 0, 512, r, onread);
                    };
                    n.read(e, h, 0, 512, r, onread);
                };
                const h = new Promise((s, r) => {
                    i.on("error", r);
                    let h = "r+";
                    const onopen = (a, l) => {
                        if (a && a.code === "ENOENT" && h === "r+") {
                            h = "w+";
                            return n.open(t.file, h, onopen);
                        }
                        if (a) {
                            return r(a);
                        }
                        n.fstat(l, (h, a) => {
                            if (h) {
                                return n.close(l, () => r(h));
                            }
                            getPos(l, a.size, (n, h) => {
                                if (n) {
                                    return r(n);
                                }
                                const a = new o.WriteStream(t.file, {
                                    fd: l,
                                    start: h,
                                });
                                i.pipe(a);
                                a.on("error", r);
                                a.on("close", s);
                                addFilesAsync(i, e);
                            });
                        });
                    };
                    n.open(t.file, h, onopen);
                });
                return s ? h.then(s, s) : h;
            };
            const addFilesSync = (t, e) => {
                e.forEach((e) => {
                    if (e.charAt(0) === "@") {
                        h({
                            file: a.resolve(t.cwd, e.slice(1)),
                            sync: true,
                            noResume: true,
                            onentry: (e) => t.add(e),
                        });
                    } else {
                        t.add(e);
                    }
                });
                t.end();
            };
            const addFilesAsync = (t, e) => {
                while (e.length) {
                    const s = e.shift();
                    if (s.charAt(0) === "@") {
                        return h({
                            file: a.resolve(t.cwd, s.slice(1)),
                            noResume: true,
                            onentry: (e) => t.add(e),
                        }).then((s) => addFilesAsync(t, e));
                    } else {
                        t.add(s);
                    }
                }
                t.end();
            };
        },
        7111: (t, e, s) => {
            const { isAbsolute: i, parse: r } = s(1017).win32;
            t.exports = (t) => {
                let e = "";
                let s = r(t);
                while (i(t) || s.root) {
                    const i =
                        t.charAt(0) === "/" && t.slice(0, 4) !== "//?/"
                            ? "/"
                            : s.root;
                    t = t.slice(i.length);
                    e += i;
                    s = r(t);
                }
                return [e, t];
            };
        },
        8886: (t) => {
            t.exports = (t) => {
                let e = t.length - 1;
                let s = -1;
                while (e > -1 && t.charAt(e) === "/") {
                    s = e;
                    e--;
                }
                return s === -1 ? t : t.slice(0, s);
            };
        },
        4173: (t, e) => {
            "use strict";
            e.name = new Map([
                ["0", "File"],
                ["", "OldFile"],
                ["1", "Link"],
                ["2", "SymbolicLink"],
                ["3", "CharacterDevice"],
                ["4", "BlockDevice"],
                ["5", "Directory"],
                ["6", "FIFO"],
                ["7", "ContiguousFile"],
                ["g", "GlobalExtendedHeader"],
                ["x", "ExtendedHeader"],
                ["A", "SolarisACL"],
                ["D", "GNUDumpDir"],
                ["I", "Inode"],
                ["K", "NextFileHasLongLinkpath"],
                ["L", "NextFileHasLongPath"],
                ["M", "ContinuationFile"],
                ["N", "OldGnuLongPath"],
                ["S", "SparseFile"],
                ["V", "TapeVolumeHeader"],
                ["X", "OldExtendedHeader"],
            ]);
            e.code = new Map(Array.from(e.name).map((t) => [t[1], t[0]]));
        },
        7628: (t, e, s) => {
            "use strict";
            const i = s(9491);
            const r = s(8917);
            const n = s(7147);
            const o = s(6179);
            const h = s(1017);
            const a = s(9624);
            const l = s(4808);
            const c = s(9587);
            const u = s(7111);
            const f = s(6843);
            const d = s(8886);
            const p = s(7118);
            const m = Symbol("onEntry");
            const y = Symbol("checkFs");
            const b = Symbol("checkFs2");
            const g = Symbol("pruneCache");
            const w = Symbol("isReusable");
            const _ = Symbol("makeFs");
            const E = Symbol("file");
            const S = Symbol("directory");
            const v = Symbol("link");
            const R = Symbol("symlink");
            const O = Symbol("hardlink");
            const T = Symbol("unsupported");
            const k = Symbol("checkPath");
            const x = Symbol("mkdir");
            const A = Symbol("onError");
            const P = Symbol("pending");
            const C = Symbol("pend");
            const L = Symbol("unpend");
            const D = Symbol("ended");
            const M = Symbol("maybeClose");
            const I = Symbol("skip");
            const N = Symbol("doChown");
            const B = Symbol("uid");
            const U = Symbol("gid");
            const F = Symbol("checkedCwd");
            const j = s(6113);
            const q = s(1172);
            const H = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform;
            const z = H === "win32";
            const unlinkFile = (t, e) => {
                if (!z) {
                    return n.unlink(t, e);
                }
                const s = t + ".DELETE." + j.randomBytes(16).toString("hex");
                n.rename(t, s, (t) => {
                    if (t) {
                        return e(t);
                    }
                    n.unlink(s, e);
                });
            };
            const unlinkFileSync = (t) => {
                if (!z) {
                    return n.unlinkSync(t);
                }
                const e = t + ".DELETE." + j.randomBytes(16).toString("hex");
                n.renameSync(t, e);
                n.unlinkSync(e);
            };
            const uint32 = (t, e, s) =>
                t === t >>> 0 ? t : e === e >>> 0 ? e : s;
            const cacheKeyNormalize = (t) => d(f(p(t))).toLowerCase();
            const pruneCache = (t, e) => {
                e = cacheKeyNormalize(e);
                for (const s of t.keys()) {
                    const i = cacheKeyNormalize(s);
                    if (i === e || i.indexOf(e + "/") === 0) {
                        t.delete(s);
                    }
                }
            };
            const dropCache = (t) => {
                for (const e of t.keys()) {
                    t.delete(e);
                }
            };
            class Unpack extends r {
                constructor(t) {
                    if (!t) {
                        t = {};
                    }
                    t.ondone = (t) => {
                        this[D] = true;
                        this[M]();
                    };
                    super(t);
                    this[F] = false;
                    this.reservations = c();
                    this.transform =
                        typeof t.transform === "function" ? t.transform : null;
                    this.writable = true;
                    this.readable = false;
                    this[P] = 0;
                    this[D] = false;
                    this.dirCache = t.dirCache || new Map();
                    if (
                        typeof t.uid === "number" ||
                        typeof t.gid === "number"
                    ) {
                        if (
                            typeof t.uid !== "number" ||
                            typeof t.gid !== "number"
                        ) {
                            throw new TypeError(
                                "cannot set owner without number uid and gid"
                            );
                        }
                        if (t.preserveOwner) {
                            throw new TypeError(
                                "cannot preserve owner in archive and also set owner explicitly"
                            );
                        }
                        this.uid = t.uid;
                        this.gid = t.gid;
                        this.setOwner = true;
                    } else {
                        this.uid = null;
                        this.gid = null;
                        this.setOwner = false;
                    }
                    if (
                        t.preserveOwner === undefined &&
                        typeof t.uid !== "number"
                    ) {
                        this.preserveOwner =
                            process.getuid && process.getuid() === 0;
                    } else {
                        this.preserveOwner = !!t.preserveOwner;
                    }
                    this.processUid =
                        (this.preserveOwner || this.setOwner) && process.getuid
                            ? process.getuid()
                            : null;
                    this.processGid =
                        (this.preserveOwner || this.setOwner) && process.getgid
                            ? process.getgid()
                            : null;
                    this.forceChown = t.forceChown === true;
                    this.win32 = !!t.win32 || z;
                    this.newer = !!t.newer;
                    this.keep = !!t.keep;
                    this.noMtime = !!t.noMtime;
                    this.preservePaths = !!t.preservePaths;
                    this.unlink = !!t.unlink;
                    this.cwd = f(h.resolve(t.cwd || process.cwd()));
                    this.strip = +t.strip || 0;
                    this.processUmask = t.noChmod ? 0 : process.umask();
                    this.umask =
                        typeof t.umask === "number"
                            ? t.umask
                            : this.processUmask;
                    this.dmode = t.dmode || 511 & ~this.umask;
                    this.fmode = t.fmode || 438 & ~this.umask;
                    this.on("entry", (t) => this[m](t));
                }
                warn(t, e, s = {}) {
                    if (t === "TAR_BAD_ARCHIVE" || t === "TAR_ABORT") {
                        s.recoverable = false;
                    }
                    return super.warn(t, e, s);
                }
                [M]() {
                    if (this[D] && this[P] === 0) {
                        this.emit("prefinish");
                        this.emit("finish");
                        this.emit("end");
                    }
                }
                [k](t) {
                    if (this.strip) {
                        const e = f(t.path).split("/");
                        if (e.length < this.strip) {
                            return false;
                        }
                        t.path = e.slice(this.strip).join("/");
                        if (t.type === "Link") {
                            const e = f(t.linkpath).split("/");
                            if (e.length >= this.strip) {
                                t.linkpath = e.slice(this.strip).join("/");
                            } else {
                                return false;
                            }
                        }
                    }
                    if (!this.preservePaths) {
                        const e = f(t.path);
                        const s = e.split("/");
                        if (
                            s.includes("..") ||
                            (z && /^[a-z]:\.\.$/i.test(s[0]))
                        ) {
                            this.warn("TAR_ENTRY_ERROR", `path contains '..'`, {
                                entry: t,
                                path: e,
                            });
                            return false;
                        }
                        const [i, r] = u(e);
                        if (i) {
                            t.path = r;
                            this.warn(
                                "TAR_ENTRY_INFO",
                                `stripping ${i} from absolute path`,
                                { entry: t, path: e }
                            );
                        }
                    }
                    if (h.isAbsolute(t.path)) {
                        t.absolute = f(h.resolve(t.path));
                    } else {
                        t.absolute = f(h.resolve(this.cwd, t.path));
                    }
                    if (
                        !this.preservePaths &&
                        t.absolute.indexOf(this.cwd + "/") !== 0 &&
                        t.absolute !== this.cwd
                    ) {
                        this.warn(
                            "TAR_ENTRY_ERROR",
                            "path escaped extraction target",
                            {
                                entry: t,
                                path: f(t.path),
                                resolvedPath: t.absolute,
                                cwd: this.cwd,
                            }
                        );
                        return false;
                    }
                    if (
                        t.absolute === this.cwd &&
                        t.type !== "Directory" &&
                        t.type !== "GNUDumpDir"
                    ) {
                        return false;
                    }
                    if (this.win32) {
                        const { root: e } = h.win32.parse(t.absolute);
                        t.absolute = e + l.encode(t.absolute.slice(e.length));
                        const { root: s } = h.win32.parse(t.path);
                        t.path = s + l.encode(t.path.slice(s.length));
                    }
                    return true;
                }
                [m](t) {
                    if (!this[k](t)) {
                        return t.resume();
                    }
                    i.equal(typeof t.absolute, "string");
                    switch (t.type) {
                        case "Directory":
                        case "GNUDumpDir":
                            if (t.mode) {
                                t.mode = t.mode | 448;
                            }
                        case "File":
                        case "OldFile":
                        case "ContiguousFile":
                        case "Link":
                        case "SymbolicLink":
                            return this[y](t);
                        case "CharacterDevice":
                        case "BlockDevice":
                        case "FIFO":
                        default:
                            return this[T](t);
                    }
                }
                [A](t, e) {
                    if (t.name === "CwdError") {
                        this.emit("error", t);
                    } else {
                        this.warn("TAR_ENTRY_ERROR", t, { entry: e });
                        this[L]();
                        e.resume();
                    }
                }
                [x](t, e, s) {
                    a(
                        f(t),
                        {
                            uid: this.uid,
                            gid: this.gid,
                            processUid: this.processUid,
                            processGid: this.processGid,
                            umask: this.processUmask,
                            preserve: this.preservePaths,
                            unlink: this.unlink,
                            cache: this.dirCache,
                            cwd: this.cwd,
                            mode: e,
                            noChmod: this.noChmod,
                        },
                        s
                    );
                }
                [N](t) {
                    return (
                        this.forceChown ||
                        (this.preserveOwner &&
                            ((typeof t.uid === "number" &&
                                t.uid !== this.processUid) ||
                                (typeof t.gid === "number" &&
                                    t.gid !== this.processGid))) ||
                        (typeof this.uid === "number" &&
                            this.uid !== this.processUid) ||
                        (typeof this.gid === "number" &&
                            this.gid !== this.processGid)
                    );
                }
                [B](t) {
                    return uint32(this.uid, t.uid, this.processUid);
                }
                [U](t) {
                    return uint32(this.gid, t.gid, this.processGid);
                }
                [E](t, e) {
                    const s = t.mode & 4095 || this.fmode;
                    const i = new o.WriteStream(t.absolute, {
                        flags: q(t.size),
                        mode: s,
                        autoClose: false,
                    });
                    i.on("error", (s) => {
                        if (i.fd) {
                            n.close(i.fd, () => {});
                        }
                        i.write = () => true;
                        this[A](s, t);
                        e();
                    });
                    let r = 1;
                    const done = (s) => {
                        if (s) {
                            if (i.fd) {
                                n.close(i.fd, () => {});
                            }
                            this[A](s, t);
                            e();
                            return;
                        }
                        if (--r === 0) {
                            n.close(i.fd, (s) => {
                                if (s) {
                                    this[A](s, t);
                                } else {
                                    this[L]();
                                }
                                e();
                            });
                        }
                    };
                    i.on("finish", (e) => {
                        const s = t.absolute;
                        const o = i.fd;
                        if (t.mtime && !this.noMtime) {
                            r++;
                            const e = t.atime || new Date();
                            const i = t.mtime;
                            n.futimes(o, e, i, (t) =>
                                t
                                    ? n.utimes(s, e, i, (e) => done(e && t))
                                    : done()
                            );
                        }
                        if (this[N](t)) {
                            r++;
                            const e = this[B](t);
                            const i = this[U](t);
                            n.fchown(o, e, i, (t) =>
                                t
                                    ? n.chown(s, e, i, (e) => done(e && t))
                                    : done()
                            );
                        }
                        done();
                    });
                    const h = this.transform ? this.transform(t) || t : t;
                    if (h !== t) {
                        h.on("error", (s) => {
                            this[A](s, t);
                            e();
                        });
                        t.pipe(h);
                    }
                    h.pipe(i);
                }
                [S](t, e) {
                    const s = t.mode & 4095 || this.dmode;
                    this[x](t.absolute, s, (s) => {
                        if (s) {
                            this[A](s, t);
                            e();
                            return;
                        }
                        let i = 1;
                        const done = (s) => {
                            if (--i === 0) {
                                e();
                                this[L]();
                                t.resume();
                            }
                        };
                        if (t.mtime && !this.noMtime) {
                            i++;
                            n.utimes(
                                t.absolute,
                                t.atime || new Date(),
                                t.mtime,
                                done
                            );
                        }
                        if (this[N](t)) {
                            i++;
                            n.chown(t.absolute, this[B](t), this[U](t), done);
                        }
                        done();
                    });
                }
                [T](t) {
                    t.unsupported = true;
                    this.warn(
                        "TAR_ENTRY_UNSUPPORTED",
                        `unsupported entry type: ${t.type}`,
                        { entry: t }
                    );
                    t.resume();
                }
                [R](t, e) {
                    this[v](t, t.linkpath, "symlink", e);
                }
                [O](t, e) {
                    const s = f(h.resolve(this.cwd, t.linkpath));
                    this[v](t, s, "link", e);
                }
                [C]() {
                    this[P]++;
                }
                [L]() {
                    this[P]--;
                    this[M]();
                }
                [I](t) {
                    this[L]();
                    t.resume();
                }
                [w](t, e) {
                    return (
                        t.type === "File" &&
                        !this.unlink &&
                        e.isFile() &&
                        e.nlink <= 1 &&
                        !z
                    );
                }
                [y](t) {
                    this[C]();
                    const e = [t.path];
                    if (t.linkpath) {
                        e.push(t.linkpath);
                    }
                    this.reservations.reserve(e, (e) => this[b](t, e));
                }
                [g](t) {
                    if (t.type === "SymbolicLink") {
                        dropCache(this.dirCache);
                    } else if (t.type !== "Directory") {
                        pruneCache(this.dirCache, t.absolute);
                    }
                }
                [b](t, e) {
                    this[g](t);
                    const done = (s) => {
                        this[g](t);
                        e(s);
                    };
                    const checkCwd = () => {
                        this[x](this.cwd, this.dmode, (e) => {
                            if (e) {
                                this[A](e, t);
                                done();
                                return;
                            }
                            this[F] = true;
                            start();
                        });
                    };
                    const start = () => {
                        if (t.absolute !== this.cwd) {
                            const e = f(h.dirname(t.absolute));
                            if (e !== this.cwd) {
                                return this[x](e, this.dmode, (e) => {
                                    if (e) {
                                        this[A](e, t);
                                        done();
                                        return;
                                    }
                                    afterMakeParent();
                                });
                            }
                        }
                        afterMakeParent();
                    };
                    const afterMakeParent = () => {
                        n.lstat(t.absolute, (e, s) => {
                            if (
                                s &&
                                (this.keep || (this.newer && s.mtime > t.mtime))
                            ) {
                                this[I](t);
                                done();
                                return;
                            }
                            if (e || this[w](t, s)) {
                                return this[_](null, t, done);
                            }
                            if (s.isDirectory()) {
                                if (t.type === "Directory") {
                                    const e =
                                        !this.noChmod &&
                                        t.mode &&
                                        (s.mode & 4095) !== t.mode;
                                    const afterChmod = (e) =>
                                        this[_](e, t, done);
                                    if (!e) {
                                        return afterChmod();
                                    }
                                    return n.chmod(
                                        t.absolute,
                                        t.mode,
                                        afterChmod
                                    );
                                }
                                if (t.absolute !== this.cwd) {
                                    return n.rmdir(t.absolute, (e) =>
                                        this[_](e, t, done)
                                    );
                                }
                            }
                            if (t.absolute === this.cwd) {
                                return this[_](null, t, done);
                            }
                            unlinkFile(t.absolute, (e) => this[_](e, t, done));
                        });
                    };
                    if (this[F]) {
                        start();
                    } else {
                        checkCwd();
                    }
                }
                [_](t, e, s) {
                    if (t) {
                        this[A](t, e);
                        s();
                        return;
                    }
                    switch (e.type) {
                        case "File":
                        case "OldFile":
                        case "ContiguousFile":
                            return this[E](e, s);
                        case "Link":
                            return this[O](e, s);
                        case "SymbolicLink":
                            return this[R](e, s);
                        case "Directory":
                        case "GNUDumpDir":
                            return this[S](e, s);
                    }
                }
                [v](t, e, s, i) {
                    n[s](e, t.absolute, (e) => {
                        if (e) {
                            this[A](e, t);
                        } else {
                            this[L]();
                            t.resume();
                        }
                        i();
                    });
                }
            }
            const callSync = (t) => {
                try {
                    return [null, t()];
                } catch (t) {
                    return [t, null];
                }
            };
            class UnpackSync extends Unpack {
                [_](t, e) {
                    return super[_](t, e, () => {});
                }
                [y](t) {
                    this[g](t);
                    if (!this[F]) {
                        const e = this[x](this.cwd, this.dmode);
                        if (e) {
                            return this[A](e, t);
                        }
                        this[F] = true;
                    }
                    if (t.absolute !== this.cwd) {
                        const e = f(h.dirname(t.absolute));
                        if (e !== this.cwd) {
                            const s = this[x](e, this.dmode);
                            if (s) {
                                return this[A](s, t);
                            }
                        }
                    }
                    const [e, s] = callSync(() => n.lstatSync(t.absolute));
                    if (s && (this.keep || (this.newer && s.mtime > t.mtime))) {
                        return this[I](t);
                    }
                    if (e || this[w](t, s)) {
                        return this[_](null, t);
                    }
                    if (s.isDirectory()) {
                        if (t.type === "Directory") {
                            const e =
                                !this.noChmod &&
                                t.mode &&
                                (s.mode & 4095) !== t.mode;
                            const [i] = e
                                ? callSync(() => {
                                      n.chmodSync(t.absolute, t.mode);
                                  })
                                : [];
                            return this[_](i, t);
                        }
                        const [e] = callSync(() => n.rmdirSync(t.absolute));
                        this[_](e, t);
                    }
                    const [i] =
                        t.absolute === this.cwd
                            ? []
                            : callSync(() => unlinkFileSync(t.absolute));
                    this[_](i, t);
                }
                [E](t, e) {
                    const s = t.mode & 4095 || this.fmode;
                    const oner = (s) => {
                        let r;
                        try {
                            n.closeSync(i);
                        } catch (t) {
                            r = t;
                        }
                        if (s || r) {
                            this[A](s || r, t);
                        }
                        e();
                    };
                    let i;
                    try {
                        i = n.openSync(t.absolute, q(t.size), s);
                    } catch (t) {
                        return oner(t);
                    }
                    const r = this.transform ? this.transform(t) || t : t;
                    if (r !== t) {
                        r.on("error", (e) => this[A](e, t));
                        t.pipe(r);
                    }
                    r.on("data", (t) => {
                        try {
                            n.writeSync(i, t, 0, t.length);
                        } catch (t) {
                            oner(t);
                        }
                    });
                    r.on("end", (e) => {
                        let s = null;
                        if (t.mtime && !this.noMtime) {
                            const e = t.atime || new Date();
                            const r = t.mtime;
                            try {
                                n.futimesSync(i, e, r);
                            } catch (i) {
                                try {
                                    n.utimesSync(t.absolute, e, r);
                                } catch (t) {
                                    s = i;
                                }
                            }
                        }
                        if (this[N](t)) {
                            const e = this[B](t);
                            const r = this[U](t);
                            try {
                                n.fchownSync(i, e, r);
                            } catch (i) {
                                try {
                                    n.chownSync(t.absolute, e, r);
                                } catch (t) {
                                    s = s || i;
                                }
                            }
                        }
                        oner(s);
                    });
                }
                [S](t, e) {
                    const s = t.mode & 4095 || this.dmode;
                    const i = this[x](t.absolute, s);
                    if (i) {
                        this[A](i, t);
                        e();
                        return;
                    }
                    if (t.mtime && !this.noMtime) {
                        try {
                            n.utimesSync(
                                t.absolute,
                                t.atime || new Date(),
                                t.mtime
                            );
                        } catch (i) {}
                    }
                    if (this[N](t)) {
                        try {
                            n.chownSync(t.absolute, this[B](t), this[U](t));
                        } catch (i) {}
                    }
                    e();
                    t.resume();
                }
                [x](t, e) {
                    try {
                        return a.sync(f(t), {
                            uid: this.uid,
                            gid: this.gid,
                            processUid: this.processUid,
                            processGid: this.processGid,
                            umask: this.processUmask,
                            preserve: this.preservePaths,
                            unlink: this.unlink,
                            cache: this.dirCache,
                            cwd: this.cwd,
                            mode: e,
                        });
                    } catch (t) {
                        return t;
                    }
                }
                [v](t, e, s, i) {
                    try {
                        n[s + "Sync"](e, t.absolute);
                        i();
                        t.resume();
                    } catch (e) {
                        return this[A](e, t);
                    }
                }
            }
            Unpack.Sync = UnpackSync;
            t.exports = Unpack;
        },
        407: (t, e, s) => {
            "use strict";
            const i = s(5213);
            const r = s(5923);
            t.exports = (t, e, s) => {
                const n = i(t);
                if (!n.file) {
                    throw new TypeError("file is required");
                }
                if (n.gzip) {
                    throw new TypeError("cannot append to compressed archives");
                }
                if (!e || !Array.isArray(e) || !e.length) {
                    throw new TypeError("no files or directories specified");
                }
                e = Array.from(e);
                mtimeFilter(n);
                return r(n, e, s);
            };
            const mtimeFilter = (t) => {
                const e = t.filter;
                if (!t.mtimeCache) {
                    t.mtimeCache = new Map();
                }
                t.filter = e
                    ? (s, i) => e(s, i) && !(t.mtimeCache.get(s) > i.mtime)
                    : (e, s) => !(t.mtimeCache.get(e) > s.mtime);
            };
        },
        5899: (t) => {
            "use strict";
            t.exports = (t) =>
                class extends t {
                    warn(t, e, s = {}) {
                        if (this.file) {
                            s.file = this.file;
                        }
                        if (this.cwd) {
                            s.cwd = this.cwd;
                        }
                        s.code = (e instanceof Error && e.code) || t;
                        s.tarCode = t;
                        if (!this.strict && s.recoverable !== false) {
                            if (e instanceof Error) {
                                s = Object.assign(e, s);
                                e = e.message;
                            }
                            this.emit("warn", s.tarCode, e, s);
                        } else if (e instanceof Error) {
                            this.emit("error", Object.assign(e, s));
                        } else {
                            this.emit(
                                "error",
                                Object.assign(new Error(`${t}: ${e}`), s)
                            );
                        }
                    }
                };
        },
        4808: (t) => {
            "use strict";
            const e = ["|", "<", ">", "?", ":"];
            const s = e.map((t) =>
                String.fromCharCode(61440 + t.charCodeAt(0))
            );
            const i = new Map(e.map((t, e) => [t, s[e]]));
            const r = new Map(s.map((t, s) => [t, e[s]]));
            t.exports = {
                encode: (t) => e.reduce((t, e) => t.split(e).join(i.get(e)), t),
                decode: (t) => s.reduce((t, e) => t.split(e).join(r.get(e)), t),
            };
        },
        5450: (t, e, s) => {
            "use strict";
            const { Minipass: i } = s(1077);
            const r = s(7996);
            const n = s(6043);
            const o = s(7147);
            const h = s(1017);
            const a = s(6843);
            const l = s(8886);
            const prefixPath = (t, e) => {
                if (!e) {
                    return a(t);
                }
                t = a(t).replace(/^\.(\/|$)/, "");
                return l(e) + "/" + t;
            };
            const c = 16 * 1024 * 1024;
            const u = Symbol("process");
            const f = Symbol("file");
            const d = Symbol("directory");
            const p = Symbol("symlink");
            const m = Symbol("hardlink");
            const y = Symbol("header");
            const b = Symbol("read");
            const g = Symbol("lstat");
            const w = Symbol("onlstat");
            const _ = Symbol("onread");
            const E = Symbol("onreadlink");
            const S = Symbol("openfile");
            const v = Symbol("onopenfile");
            const R = Symbol("close");
            const O = Symbol("mode");
            const T = Symbol("awaitDrain");
            const k = Symbol("ondrain");
            const x = Symbol("prefix");
            const A = Symbol("hadError");
            const P = s(5899);
            const C = s(4808);
            const L = s(7111);
            const D = s(8371);
            const M = P(
                class WriteEntry extends i {
                    constructor(t, e) {
                        e = e || {};
                        super(e);
                        if (typeof t !== "string") {
                            throw new TypeError("path is required");
                        }
                        this.path = a(t);
                        this.portable = !!e.portable;
                        this.myuid = (process.getuid && process.getuid()) || 0;
                        this.myuser = process.env.USER || "";
                        this.maxReadSize = e.maxReadSize || c;
                        this.linkCache = e.linkCache || new Map();
                        this.statCache = e.statCache || new Map();
                        this.preservePaths = !!e.preservePaths;
                        this.cwd = a(e.cwd || process.cwd());
                        this.strict = !!e.strict;
                        this.noPax = !!e.noPax;
                        this.noMtime = !!e.noMtime;
                        this.mtime = e.mtime || null;
                        this.prefix = e.prefix ? a(e.prefix) : null;
                        this.fd = null;
                        this.blockLen = null;
                        this.blockRemain = null;
                        this.buf = null;
                        this.offset = null;
                        this.length = null;
                        this.pos = null;
                        this.remain = null;
                        if (typeof e.onwarn === "function") {
                            this.on("warn", e.onwarn);
                        }
                        let s = false;
                        if (!this.preservePaths) {
                            const [t, e] = L(this.path);
                            if (t) {
                                this.path = e;
                                s = t;
                            }
                        }
                        this.win32 = !!e.win32 || process.platform === "win32";
                        if (this.win32) {
                            this.path = C.decode(this.path.replace(/\\/g, "/"));
                            t = t.replace(/\\/g, "/");
                        }
                        this.absolute = a(e.absolute || h.resolve(this.cwd, t));
                        if (this.path === "") {
                            this.path = "./";
                        }
                        if (s) {
                            this.warn(
                                "TAR_ENTRY_INFO",
                                `stripping ${s} from absolute path`,
                                { entry: this, path: s + this.path }
                            );
                        }
                        if (this.statCache.has(this.absolute)) {
                            this[w](this.statCache.get(this.absolute));
                        } else {
                            this[g]();
                        }
                    }
                    emit(t, ...e) {
                        if (t === "error") {
                            this[A] = true;
                        }
                        return super.emit(t, ...e);
                    }
                    [g]() {
                        o.lstat(this.absolute, (t, e) => {
                            if (t) {
                                return this.emit("error", t);
                            }
                            this[w](e);
                        });
                    }
                    [w](t) {
                        this.statCache.set(this.absolute, t);
                        this.stat = t;
                        if (!t.isFile()) {
                            t.size = 0;
                        }
                        this.type = getType(t);
                        this.emit("stat", t);
                        this[u]();
                    }
                    [u]() {
                        switch (this.type) {
                            case "File":
                                return this[f]();
                            case "Directory":
                                return this[d]();
                            case "SymbolicLink":
                                return this[p]();
                            default:
                                return this.end();
                        }
                    }
                    [O](t) {
                        return D(t, this.type === "Directory", this.portable);
                    }
                    [x](t) {
                        return prefixPath(t, this.prefix);
                    }
                    [y]() {
                        if (this.type === "Directory" && this.portable) {
                            this.noMtime = true;
                        }
                        this.header = new n({
                            path: this[x](this.path),
                            linkpath:
                                this.type === "Link"
                                    ? this[x](this.linkpath)
                                    : this.linkpath,
                            mode: this[O](this.stat.mode),
                            uid: this.portable ? null : this.stat.uid,
                            gid: this.portable ? null : this.stat.gid,
                            size: this.stat.size,
                            mtime: this.noMtime
                                ? null
                                : this.mtime || this.stat.mtime,
                            type: this.type,
                            uname: this.portable
                                ? null
                                : this.stat.uid === this.myuid
                                ? this.myuser
                                : "",
                            atime: this.portable ? null : this.stat.atime,
                            ctime: this.portable ? null : this.stat.ctime,
                        });
                        if (this.header.encode() && !this.noPax) {
                            super.write(
                                new r({
                                    atime: this.portable
                                        ? null
                                        : this.header.atime,
                                    ctime: this.portable
                                        ? null
                                        : this.header.ctime,
                                    gid: this.portable ? null : this.header.gid,
                                    mtime: this.noMtime
                                        ? null
                                        : this.mtime || this.header.mtime,
                                    path: this[x](this.path),
                                    linkpath:
                                        this.type === "Link"
                                            ? this[x](this.linkpath)
                                            : this.linkpath,
                                    size: this.header.size,
                                    uid: this.portable ? null : this.header.uid,
                                    uname: this.portable
                                        ? null
                                        : this.header.uname,
                                    dev: this.portable ? null : this.stat.dev,
                                    ino: this.portable ? null : this.stat.ino,
                                    nlink: this.portable
                                        ? null
                                        : this.stat.nlink,
                                }).encode()
                            );
                        }
                        super.write(this.header.block);
                    }
                    [d]() {
                        if (this.path.slice(-1) !== "/") {
                            this.path += "/";
                        }
                        this.stat.size = 0;
                        this[y]();
                        this.end();
                    }
                    [p]() {
                        o.readlink(this.absolute, (t, e) => {
                            if (t) {
                                return this.emit("error", t);
                            }
                            this[E](e);
                        });
                    }
                    [E](t) {
                        this.linkpath = a(t);
                        this[y]();
                        this.end();
                    }
                    [m](t) {
                        this.type = "Link";
                        this.linkpath = a(h.relative(this.cwd, t));
                        this.stat.size = 0;
                        this[y]();
                        this.end();
                    }
                    [f]() {
                        if (this.stat.nlink > 1) {
                            const t = this.stat.dev + ":" + this.stat.ino;
                            if (this.linkCache.has(t)) {
                                const e = this.linkCache.get(t);
                                if (e.indexOf(this.cwd) === 0) {
                                    return this[m](e);
                                }
                            }
                            this.linkCache.set(t, this.absolute);
                        }
                        this[y]();
                        if (this.stat.size === 0) {
                            return this.end();
                        }
                        this[S]();
                    }
                    [S]() {
                        o.open(this.absolute, "r", (t, e) => {
                            if (t) {
                                return this.emit("error", t);
                            }
                            this[v](e);
                        });
                    }
                    [v](t) {
                        this.fd = t;
                        if (this[A]) {
                            return this[R]();
                        }
                        this.blockLen = 512 * Math.ceil(this.stat.size / 512);
                        this.blockRemain = this.blockLen;
                        const e = Math.min(this.blockLen, this.maxReadSize);
                        this.buf = Buffer.allocUnsafe(e);
                        this.offset = 0;
                        this.pos = 0;
                        this.remain = this.stat.size;
                        this.length = this.buf.length;
                        this[b]();
                    }
                    [b]() {
                        const {
                            fd: t,
                            buf: e,
                            offset: s,
                            length: i,
                            pos: r,
                        } = this;
                        o.read(t, e, s, i, r, (t, e) => {
                            if (t) {
                                return this[R](() => this.emit("error", t));
                            }
                            this[_](e);
                        });
                    }
                    [R](t) {
                        o.close(this.fd, t);
                    }
                    [_](t) {
                        if (t <= 0 && this.remain > 0) {
                            const t = new Error("encountered unexpected EOF");
                            t.path = this.absolute;
                            t.syscall = "read";
                            t.code = "EOF";
                            return this[R](() => this.emit("error", t));
                        }
                        if (t > this.remain) {
                            const t = new Error(
                                "did not encounter expected EOF"
                            );
                            t.path = this.absolute;
                            t.syscall = "read";
                            t.code = "EOF";
                            return this[R](() => this.emit("error", t));
                        }
                        if (t === this.remain) {
                            for (
                                let e = t;
                                e < this.length && t < this.blockRemain;
                                e++
                            ) {
                                this.buf[e + this.offset] = 0;
                                t++;
                                this.remain++;
                            }
                        }
                        const e =
                            this.offset === 0 && t === this.buf.length
                                ? this.buf
                                : this.buf.slice(this.offset, this.offset + t);
                        const s = this.write(e);
                        if (!s) {
                            this[T](() => this[k]());
                        } else {
                            this[k]();
                        }
                    }
                    [T](t) {
                        this.once("drain", t);
                    }
                    write(t) {
                        if (this.blockRemain < t.length) {
                            const t = new Error(
                                "writing more data than expected"
                            );
                            t.path = this.absolute;
                            return this.emit("error", t);
                        }
                        this.remain -= t.length;
                        this.blockRemain -= t.length;
                        this.pos += t.length;
                        this.offset += t.length;
                        return super.write(t);
                    }
                    [k]() {
                        if (!this.remain) {
                            if (this.blockRemain) {
                                super.write(Buffer.alloc(this.blockRemain));
                            }
                            return this[R]((t) =>
                                t ? this.emit("error", t) : this.end()
                            );
                        }
                        if (this.offset >= this.length) {
                            this.buf = Buffer.allocUnsafe(
                                Math.min(this.blockRemain, this.buf.length)
                            );
                            this.offset = 0;
                        }
                        this.length = this.buf.length - this.offset;
                        this[b]();
                    }
                }
            );
            class WriteEntrySync extends M {
                [g]() {
                    this[w](o.lstatSync(this.absolute));
                }
                [p]() {
                    this[E](o.readlinkSync(this.absolute));
                }
                [S]() {
                    this[v](o.openSync(this.absolute, "r"));
                }
                [b]() {
                    let t = true;
                    try {
                        const {
                            fd: e,
                            buf: s,
                            offset: i,
                            length: r,
                            pos: n,
                        } = this;
                        const h = o.readSync(e, s, i, r, n);
                        this[_](h);
                        t = false;
                    } finally {
                        if (t) {
                            try {
                                this[R](() => {});
                            } catch (t) {}
                        }
                    }
                }
                [T](t) {
                    t();
                }
                [R](t) {
                    o.closeSync(this.fd);
                    t();
                }
            }
            const I = P(
                class WriteEntryTar extends i {
                    constructor(t, e) {
                        e = e || {};
                        super(e);
                        this.preservePaths = !!e.preservePaths;
                        this.portable = !!e.portable;
                        this.strict = !!e.strict;
                        this.noPax = !!e.noPax;
                        this.noMtime = !!e.noMtime;
                        this.readEntry = t;
                        this.type = t.type;
                        if (this.type === "Directory" && this.portable) {
                            this.noMtime = true;
                        }
                        this.prefix = e.prefix || null;
                        this.path = a(t.path);
                        this.mode = this[O](t.mode);
                        this.uid = this.portable ? null : t.uid;
                        this.gid = this.portable ? null : t.gid;
                        this.uname = this.portable ? null : t.uname;
                        this.gname = this.portable ? null : t.gname;
                        this.size = t.size;
                        this.mtime = this.noMtime ? null : e.mtime || t.mtime;
                        this.atime = this.portable ? null : t.atime;
                        this.ctime = this.portable ? null : t.ctime;
                        this.linkpath = a(t.linkpath);
                        if (typeof e.onwarn === "function") {
                            this.on("warn", e.onwarn);
                        }
                        let s = false;
                        if (!this.preservePaths) {
                            const [t, e] = L(this.path);
                            if (t) {
                                this.path = e;
                                s = t;
                            }
                        }
                        this.remain = t.size;
                        this.blockRemain = t.startBlockSize;
                        this.header = new n({
                            path: this[x](this.path),
                            linkpath:
                                this.type === "Link"
                                    ? this[x](this.linkpath)
                                    : this.linkpath,
                            mode: this.mode,
                            uid: this.portable ? null : this.uid,
                            gid: this.portable ? null : this.gid,
                            size: this.size,
                            mtime: this.noMtime ? null : this.mtime,
                            type: this.type,
                            uname: this.portable ? null : this.uname,
                            atime: this.portable ? null : this.atime,
                            ctime: this.portable ? null : this.ctime,
                        });
                        if (s) {
                            this.warn(
                                "TAR_ENTRY_INFO",
                                `stripping ${s} from absolute path`,
                                { entry: this, path: s + this.path }
                            );
                        }
                        if (this.header.encode() && !this.noPax) {
                            super.write(
                                new r({
                                    atime: this.portable ? null : this.atime,
                                    ctime: this.portable ? null : this.ctime,
                                    gid: this.portable ? null : this.gid,
                                    mtime: this.noMtime ? null : this.mtime,
                                    path: this[x](this.path),
                                    linkpath:
                                        this.type === "Link"
                                            ? this[x](this.linkpath)
                                            : this.linkpath,
                                    size: this.size,
                                    uid: this.portable ? null : this.uid,
                                    uname: this.portable ? null : this.uname,
                                    dev: this.portable
                                        ? null
                                        : this.readEntry.dev,
                                    ino: this.portable
                                        ? null
                                        : this.readEntry.ino,
                                    nlink: this.portable
                                        ? null
                                        : this.readEntry.nlink,
                                }).encode()
                            );
                        }
                        super.write(this.header.block);
                        t.pipe(this);
                    }
                    [x](t) {
                        return prefixPath(t, this.prefix);
                    }
                    [O](t) {
                        return D(t, this.type === "Directory", this.portable);
                    }
                    write(t) {
                        const e = t.length;
                        if (e > this.blockRemain) {
                            throw new Error(
                                "writing more to entry than is appropriate"
                            );
                        }
                        this.blockRemain -= e;
                        return super.write(t);
                    }
                    end() {
                        if (this.blockRemain) {
                            super.write(Buffer.alloc(this.blockRemain));
                        }
                        return super.end();
                    }
                }
            );
            M.Sync = WriteEntrySync;
            M.Tar = I;
            const getType = (t) =>
                t.isFile()
                    ? "File"
                    : t.isDirectory()
                    ? "Directory"
                    : t.isSymbolicLink()
                    ? "SymbolicLink"
                    : "Unsupported";
            t.exports = M;
        },
        6179: (t, e, s) => {
            "use strict";
            const i = s(9177);
            const r = s(2361).EventEmitter;
            const n = s(7147);
            let o = n.writev;
            if (!o) {
                const t = process.binding("fs");
                const e = t.FSReqWrap || t.FSReqCallback;
                o = (s, i, r, n) => {
                    const done = (t, e) => n(t, e, i);
                    const o = new e();
                    o.oncomplete = done;
                    t.writeBuffers(s, i, r, o);
                };
            }
            const h = Symbol("_autoClose");
            const a = Symbol("_close");
            const l = Symbol("_ended");
            const c = Symbol("_fd");
            const u = Symbol("_finished");
            const f = Symbol("_flags");
            const d = Symbol("_flush");
            const p = Symbol("_handleChunk");
            const m = Symbol("_makeBuf");
            const y = Symbol("_mode");
            const b = Symbol("_needDrain");
            const g = Symbol("_onerror");
            const w = Symbol("_onopen");
            const _ = Symbol("_onread");
            const E = Symbol("_onwrite");
            const S = Symbol("_open");
            const v = Symbol("_path");
            const R = Symbol("_pos");
            const O = Symbol("_queue");
            const T = Symbol("_read");
            const k = Symbol("_readSize");
            const x = Symbol("_reading");
            const A = Symbol("_remain");
            const P = Symbol("_size");
            const C = Symbol("_write");
            const L = Symbol("_writing");
            const D = Symbol("_defaultFlag");
            const M = Symbol("_errored");
            class ReadStream extends i {
                constructor(t, e) {
                    e = e || {};
                    super(e);
                    this.readable = true;
                    this.writable = false;
                    if (typeof t !== "string")
                        throw new TypeError("path must be a string");
                    this[M] = false;
                    this[c] = typeof e.fd === "number" ? e.fd : null;
                    this[v] = t;
                    this[k] = e.readSize || 16 * 1024 * 1024;
                    this[x] = false;
                    this[P] = typeof e.size === "number" ? e.size : Infinity;
                    this[A] = this[P];
                    this[h] =
                        typeof e.autoClose === "boolean" ? e.autoClose : true;
                    if (typeof this[c] === "number") this[T]();
                    else this[S]();
                }
                get fd() {
                    return this[c];
                }
                get path() {
                    return this[v];
                }
                write() {
                    throw new TypeError("this is a readable stream");
                }
                end() {
                    throw new TypeError("this is a readable stream");
                }
                [S]() {
                    n.open(this[v], "r", (t, e) => this[w](t, e));
                }
                [w](t, e) {
                    if (t) this[g](t);
                    else {
                        this[c] = e;
                        this.emit("open", e);
                        this[T]();
                    }
                }
                [m]() {
                    return Buffer.allocUnsafe(Math.min(this[k], this[A]));
                }
                [T]() {
                    if (!this[x]) {
                        this[x] = true;
                        const t = this[m]();
                        if (t.length === 0)
                            return process.nextTick(() => this[_](null, 0, t));
                        n.read(this[c], t, 0, t.length, null, (t, e, s) =>
                            this[_](t, e, s)
                        );
                    }
                }
                [_](t, e, s) {
                    this[x] = false;
                    if (t) this[g](t);
                    else if (this[p](e, s)) this[T]();
                }
                [a]() {
                    if (this[h] && typeof this[c] === "number") {
                        const t = this[c];
                        this[c] = null;
                        n.close(t, (t) =>
                            t ? this.emit("error", t) : this.emit("close")
                        );
                    }
                }
                [g](t) {
                    this[x] = true;
                    this[a]();
                    this.emit("error", t);
                }
                [p](t, e) {
                    let s = false;
                    this[A] -= t;
                    if (t > 0)
                        s = super.write(t < e.length ? e.slice(0, t) : e);
                    if (t === 0 || this[A] <= 0) {
                        s = false;
                        this[a]();
                        super.end();
                    }
                    return s;
                }
                emit(t, e) {
                    switch (t) {
                        case "prefinish":
                        case "finish":
                            break;
                        case "drain":
                            if (typeof this[c] === "number") this[T]();
                            break;
                        case "error":
                            if (this[M]) return;
                            this[M] = true;
                            return super.emit(t, e);
                        default:
                            return super.emit(t, e);
                    }
                }
            }
            class ReadStreamSync extends ReadStream {
                [S]() {
                    let t = true;
                    try {
                        this[w](null, n.openSync(this[v], "r"));
                        t = false;
                    } finally {
                        if (t) this[a]();
                    }
                }
                [T]() {
                    let t = true;
                    try {
                        if (!this[x]) {
                            this[x] = true;
                            do {
                                const t = this[m]();
                                const e =
                                    t.length === 0
                                        ? 0
                                        : n.readSync(
                                              this[c],
                                              t,
                                              0,
                                              t.length,
                                              null
                                          );
                                if (!this[p](e, t)) break;
                            } while (true);
                            this[x] = false;
                        }
                        t = false;
                    } finally {
                        if (t) this[a]();
                    }
                }
                [a]() {
                    if (this[h] && typeof this[c] === "number") {
                        const t = this[c];
                        this[c] = null;
                        n.closeSync(t);
                        this.emit("close");
                    }
                }
            }
            class WriteStream extends r {
                constructor(t, e) {
                    e = e || {};
                    super(e);
                    this.readable = false;
                    this.writable = true;
                    this[M] = false;
                    this[L] = false;
                    this[l] = false;
                    this[b] = false;
                    this[O] = [];
                    this[v] = t;
                    this[c] = typeof e.fd === "number" ? e.fd : null;
                    this[y] = e.mode === undefined ? 438 : e.mode;
                    this[R] = typeof e.start === "number" ? e.start : null;
                    this[h] =
                        typeof e.autoClose === "boolean" ? e.autoClose : true;
                    const s = this[R] !== null ? "r+" : "w";
                    this[D] = e.flags === undefined;
                    this[f] = this[D] ? s : e.flags;
                    if (this[c] === null) this[S]();
                }
                emit(t, e) {
                    if (t === "error") {
                        if (this[M]) return;
                        this[M] = true;
                    }
                    return super.emit(t, e);
                }
                get fd() {
                    return this[c];
                }
                get path() {
                    return this[v];
                }
                [g](t) {
                    this[a]();
                    this[L] = true;
                    this.emit("error", t);
                }
                [S]() {
                    n.open(this[v], this[f], this[y], (t, e) => this[w](t, e));
                }
                [w](t, e) {
                    if (
                        this[D] &&
                        this[f] === "r+" &&
                        t &&
                        t.code === "ENOENT"
                    ) {
                        this[f] = "w";
                        this[S]();
                    } else if (t) this[g](t);
                    else {
                        this[c] = e;
                        this.emit("open", e);
                        this[d]();
                    }
                }
                end(t, e) {
                    if (t) this.write(t, e);
                    this[l] = true;
                    if (
                        !this[L] &&
                        !this[O].length &&
                        typeof this[c] === "number"
                    )
                        this[E](null, 0);
                    return this;
                }
                write(t, e) {
                    if (typeof t === "string") t = Buffer.from(t, e);
                    if (this[l]) {
                        this.emit("error", new Error("write() after end()"));
                        return false;
                    }
                    if (this[c] === null || this[L] || this[O].length) {
                        this[O].push(t);
                        this[b] = true;
                        return false;
                    }
                    this[L] = true;
                    this[C](t);
                    return true;
                }
                [C](t) {
                    n.write(this[c], t, 0, t.length, this[R], (t, e) =>
                        this[E](t, e)
                    );
                }
                [E](t, e) {
                    if (t) this[g](t);
                    else {
                        if (this[R] !== null) this[R] += e;
                        if (this[O].length) this[d]();
                        else {
                            this[L] = false;
                            if (this[l] && !this[u]) {
                                this[u] = true;
                                this[a]();
                                this.emit("finish");
                            } else if (this[b]) {
                                this[b] = false;
                                this.emit("drain");
                            }
                        }
                    }
                }
                [d]() {
                    if (this[O].length === 0) {
                        if (this[l]) this[E](null, 0);
                    } else if (this[O].length === 1) this[C](this[O].pop());
                    else {
                        const t = this[O];
                        this[O] = [];
                        o(this[c], t, this[R], (t, e) => this[E](t, e));
                    }
                }
                [a]() {
                    if (this[h] && typeof this[c] === "number") {
                        const t = this[c];
                        this[c] = null;
                        n.close(t, (t) =>
                            t ? this.emit("error", t) : this.emit("close")
                        );
                    }
                }
            }
            class WriteStreamSync extends WriteStream {
                [S]() {
                    let t;
                    if (this[D] && this[f] === "r+") {
                        try {
                            t = n.openSync(this[v], this[f], this[y]);
                        } catch (t) {
                            if (t.code === "ENOENT") {
                                this[f] = "w";
                                return this[S]();
                            } else throw t;
                        }
                    } else t = n.openSync(this[v], this[f], this[y]);
                    this[w](null, t);
                }
                [a]() {
                    if (this[h] && typeof this[c] === "number") {
                        const t = this[c];
                        this[c] = null;
                        n.closeSync(t);
                        this.emit("close");
                    }
                }
                [C](t) {
                    let e = true;
                    try {
                        this[E](
                            null,
                            n.writeSync(this[c], t, 0, t.length, this[R])
                        );
                        e = false;
                    } finally {
                        if (e)
                            try {
                                this[a]();
                            } catch (t) {}
                    }
                }
            }
            e.ReadStream = ReadStream;
            e.ReadStreamSync = ReadStreamSync;
            e.WriteStream = WriteStream;
            e.WriteStreamSync = WriteStreamSync;
        },
        9177: (t, e, s) => {
            "use strict";
            const i =
                typeof process === "object" && process
                    ? process
                    : { stdout: null, stderr: null };
            const r = s(2361);
            const n = s(2781);
            const o = s(1576).StringDecoder;
            const h = Symbol("EOF");
            const a = Symbol("maybeEmitEnd");
            const l = Symbol("emittedEnd");
            const c = Symbol("emittingEnd");
            const u = Symbol("emittedError");
            const f = Symbol("closed");
            const d = Symbol("read");
            const p = Symbol("flush");
            const m = Symbol("flushChunk");
            const y = Symbol("encoding");
            const b = Symbol("decoder");
            const g = Symbol("flowing");
            const w = Symbol("paused");
            const _ = Symbol("resume");
            const E = Symbol("bufferLength");
            const S = Symbol("bufferPush");
            const v = Symbol("bufferShift");
            const R = Symbol("objectMode");
            const O = Symbol("destroyed");
            const T = Symbol("emitData");
            const k = Symbol("emitEnd");
            const x = Symbol("emitEnd2");
            const A = Symbol("async");
            const defer = (t) => Promise.resolve().then(t);
            const P = global._MP_NO_ITERATOR_SYMBOLS_ !== "1";
            const C =
                (P && Symbol.asyncIterator) ||
                Symbol("asyncIterator not implemented");
            const L =
                (P && Symbol.iterator) || Symbol("iterator not implemented");
            const isEndish = (t) =>
                t === "end" || t === "finish" || t === "prefinish";
            const isArrayBuffer = (t) =>
                t instanceof ArrayBuffer ||
                (typeof t === "object" &&
                    t.constructor &&
                    t.constructor.name === "ArrayBuffer" &&
                    t.byteLength >= 0);
            const isArrayBufferView = (t) =>
                !Buffer.isBuffer(t) && ArrayBuffer.isView(t);
            class Pipe {
                constructor(t, e, s) {
                    this.src = t;
                    this.dest = e;
                    this.opts = s;
                    this.ondrain = () => t[_]();
                    e.on("drain", this.ondrain);
                }
                unpipe() {
                    this.dest.removeListener("drain", this.ondrain);
                }
                proxyErrors() {}
                end() {
                    this.unpipe();
                    if (this.opts.end) this.dest.end();
                }
            }
            class PipeProxyErrors extends Pipe {
                unpipe() {
                    this.src.removeListener("error", this.proxyErrors);
                    super.unpipe();
                }
                constructor(t, e, s) {
                    super(t, e, s);
                    this.proxyErrors = (t) => e.emit("error", t);
                    t.on("error", this.proxyErrors);
                }
            }
            t.exports = class Minipass extends n {
                constructor(t) {
                    super();
                    this[g] = false;
                    this[w] = false;
                    this.pipes = [];
                    this.buffer = [];
                    this[R] = (t && t.objectMode) || false;
                    if (this[R]) this[y] = null;
                    else this[y] = (t && t.encoding) || null;
                    if (this[y] === "buffer") this[y] = null;
                    this[A] = (t && !!t.async) || false;
                    this[b] = this[y] ? new o(this[y]) : null;
                    this[h] = false;
                    this[l] = false;
                    this[c] = false;
                    this[f] = false;
                    this[u] = null;
                    this.writable = true;
                    this.readable = true;
                    this[E] = 0;
                    this[O] = false;
                }
                get bufferLength() {
                    return this[E];
                }
                get encoding() {
                    return this[y];
                }
                set encoding(t) {
                    if (this[R])
                        throw new Error("cannot set encoding in objectMode");
                    if (
                        this[y] &&
                        t !== this[y] &&
                        ((this[b] && this[b].lastNeed) || this[E])
                    )
                        throw new Error("cannot change encoding");
                    if (this[y] !== t) {
                        this[b] = t ? new o(t) : null;
                        if (this.buffer.length)
                            this.buffer = this.buffer.map((t) =>
                                this[b].write(t)
                            );
                    }
                    this[y] = t;
                }
                setEncoding(t) {
                    this.encoding = t;
                }
                get objectMode() {
                    return this[R];
                }
                set objectMode(t) {
                    this[R] = this[R] || !!t;
                }
                get ["async"]() {
                    return this[A];
                }
                set ["async"](t) {
                    this[A] = this[A] || !!t;
                }
                write(t, e, s) {
                    if (this[h]) throw new Error("write after end");
                    if (this[O]) {
                        this.emit(
                            "error",
                            Object.assign(
                                new Error(
                                    "Cannot call write after a stream was destroyed"
                                ),
                                { code: "ERR_STREAM_DESTROYED" }
                            )
                        );
                        return true;
                    }
                    if (typeof e === "function") (s = e), (e = "utf8");
                    if (!e) e = "utf8";
                    const i = this[A] ? defer : (t) => t();
                    if (!this[R] && !Buffer.isBuffer(t)) {
                        if (isArrayBufferView(t))
                            t = Buffer.from(
                                t.buffer,
                                t.byteOffset,
                                t.byteLength
                            );
                        else if (isArrayBuffer(t)) t = Buffer.from(t);
                        else if (typeof t !== "string") this.objectMode = true;
                    }
                    if (this[R]) {
                        if (this.flowing && this[E] !== 0) this[p](true);
                        if (this.flowing) this.emit("data", t);
                        else this[S](t);
                        if (this[E] !== 0) this.emit("readable");
                        if (s) i(s);
                        return this.flowing;
                    }
                    if (!t.length) {
                        if (this[E] !== 0) this.emit("readable");
                        if (s) i(s);
                        return this.flowing;
                    }
                    if (
                        typeof t === "string" &&
                        !(e === this[y] && !this[b].lastNeed)
                    ) {
                        t = Buffer.from(t, e);
                    }
                    if (Buffer.isBuffer(t) && this[y]) t = this[b].write(t);
                    if (this.flowing && this[E] !== 0) this[p](true);
                    if (this.flowing) this.emit("data", t);
                    else this[S](t);
                    if (this[E] !== 0) this.emit("readable");
                    if (s) i(s);
                    return this.flowing;
                }
                read(t) {
                    if (this[O]) return null;
                    if (this[E] === 0 || t === 0 || t > this[E]) {
                        this[a]();
                        return null;
                    }
                    if (this[R]) t = null;
                    if (this.buffer.length > 1 && !this[R]) {
                        if (this.encoding) this.buffer = [this.buffer.join("")];
                        else
                            this.buffer = [Buffer.concat(this.buffer, this[E])];
                    }
                    const e = this[d](t || null, this.buffer[0]);
                    this[a]();
                    return e;
                }
                [d](t, e) {
                    if (t === e.length || t === null) this[v]();
                    else {
                        this.buffer[0] = e.slice(t);
                        e = e.slice(0, t);
                        this[E] -= t;
                    }
                    this.emit("data", e);
                    if (!this.buffer.length && !this[h]) this.emit("drain");
                    return e;
                }
                end(t, e, s) {
                    if (typeof t === "function") (s = t), (t = null);
                    if (typeof e === "function") (s = e), (e = "utf8");
                    if (t) this.write(t, e);
                    if (s) this.once("end", s);
                    this[h] = true;
                    this.writable = false;
                    if (this.flowing || !this[w]) this[a]();
                    return this;
                }
                [_]() {
                    if (this[O]) return;
                    this[w] = false;
                    this[g] = true;
                    this.emit("resume");
                    if (this.buffer.length) this[p]();
                    else if (this[h]) this[a]();
                    else this.emit("drain");
                }
                resume() {
                    return this[_]();
                }
                pause() {
                    this[g] = false;
                    this[w] = true;
                }
                get destroyed() {
                    return this[O];
                }
                get flowing() {
                    return this[g];
                }
                get paused() {
                    return this[w];
                }
                [S](t) {
                    if (this[R]) this[E] += 1;
                    else this[E] += t.length;
                    this.buffer.push(t);
                }
                [v]() {
                    if (this.buffer.length) {
                        if (this[R]) this[E] -= 1;
                        else this[E] -= this.buffer[0].length;
                    }
                    return this.buffer.shift();
                }
                [p](t) {
                    do {} while (this[m](this[v]()));
                    if (!t && !this.buffer.length && !this[h])
                        this.emit("drain");
                }
                [m](t) {
                    return t ? (this.emit("data", t), this.flowing) : false;
                }
                pipe(t, e) {
                    if (this[O]) return;
                    const s = this[l];
                    e = e || {};
                    if (t === i.stdout || t === i.stderr) e.end = false;
                    else e.end = e.end !== false;
                    e.proxyErrors = !!e.proxyErrors;
                    if (s) {
                        if (e.end) t.end();
                    } else {
                        this.pipes.push(
                            !e.proxyErrors
                                ? new Pipe(this, t, e)
                                : new PipeProxyErrors(this, t, e)
                        );
                        if (this[A]) defer(() => this[_]());
                        else this[_]();
                    }
                    return t;
                }
                unpipe(t) {
                    const e = this.pipes.find((e) => e.dest === t);
                    if (e) {
                        this.pipes.splice(this.pipes.indexOf(e), 1);
                        e.unpipe();
                    }
                }
                addListener(t, e) {
                    return this.on(t, e);
                }
                on(t, e) {
                    const s = super.on(t, e);
                    if (t === "data" && !this.pipes.length && !this.flowing)
                        this[_]();
                    else if (t === "readable" && this[E] !== 0)
                        super.emit("readable");
                    else if (isEndish(t) && this[l]) {
                        super.emit(t);
                        this.removeAllListeners(t);
                    } else if (t === "error" && this[u]) {
                        if (this[A]) defer(() => e.call(this, this[u]));
                        else e.call(this, this[u]);
                    }
                    return s;
                }
                get emittedEnd() {
                    return this[l];
                }
                [a]() {
                    if (
                        !this[c] &&
                        !this[l] &&
                        !this[O] &&
                        this.buffer.length === 0 &&
                        this[h]
                    ) {
                        this[c] = true;
                        this.emit("end");
                        this.emit("prefinish");
                        this.emit("finish");
                        if (this[f]) this.emit("close");
                        this[c] = false;
                    }
                }
                emit(t, e, ...s) {
                    if (t !== "error" && t !== "close" && t !== O && this[O])
                        return;
                    else if (t === "data") {
                        return !e
                            ? false
                            : this[A]
                            ? defer(() => this[T](e))
                            : this[T](e);
                    } else if (t === "end") {
                        return this[k]();
                    } else if (t === "close") {
                        this[f] = true;
                        if (!this[l] && !this[O]) return;
                        const t = super.emit("close");
                        this.removeAllListeners("close");
                        return t;
                    } else if (t === "error") {
                        this[u] = e;
                        const t = super.emit("error", e);
                        this[a]();
                        return t;
                    } else if (t === "resume") {
                        const t = super.emit("resume");
                        this[a]();
                        return t;
                    } else if (t === "finish" || t === "prefinish") {
                        const e = super.emit(t);
                        this.removeAllListeners(t);
                        return e;
                    }
                    const i = super.emit(t, e, ...s);
                    this[a]();
                    return i;
                }
                [T](t) {
                    for (const e of this.pipes) {
                        if (e.dest.write(t) === false) this.pause();
                    }
                    const e = super.emit("data", t);
                    this[a]();
                    return e;
                }
                [k]() {
                    if (this[l]) return;
                    this[l] = true;
                    this.readable = false;
                    if (this[A]) defer(() => this[x]());
                    else this[x]();
                }
                [x]() {
                    if (this[b]) {
                        const t = this[b].end();
                        if (t) {
                            for (const e of this.pipes) {
                                e.dest.write(t);
                            }
                            super.emit("data", t);
                        }
                    }
                    for (const t of this.pipes) {
                        t.end();
                    }
                    const t = super.emit("end");
                    this.removeAllListeners("end");
                    return t;
                }
                collect() {
                    const t = [];
                    if (!this[R]) t.dataLength = 0;
                    const e = this.promise();
                    this.on("data", (e) => {
                        t.push(e);
                        if (!this[R]) t.dataLength += e.length;
                    });
                    return e.then(() => t);
                }
                concat() {
                    return this[R]
                        ? Promise.reject(
                              new Error("cannot concat in objectMode")
                          )
                        : this.collect().then((t) =>
                              this[R]
                                  ? Promise.reject(
                                        new Error("cannot concat in objectMode")
                                    )
                                  : this[y]
                                  ? t.join("")
                                  : Buffer.concat(t, t.dataLength)
                          );
                }
                promise() {
                    return new Promise((t, e) => {
                        this.on(O, () => e(new Error("stream destroyed")));
                        this.on("error", (t) => e(t));
                        this.on("end", () => t());
                    });
                }
                [C]() {
                    const next = () => {
                        const t = this.read();
                        if (t !== null)
                            return Promise.resolve({ done: false, value: t });
                        if (this[h]) return Promise.resolve({ done: true });
                        let e = null;
                        let s = null;
                        const onerr = (t) => {
                            this.removeListener("data", ondata);
                            this.removeListener("end", onend);
                            s(t);
                        };
                        const ondata = (t) => {
                            this.removeListener("error", onerr);
                            this.removeListener("end", onend);
                            this.pause();
                            e({ value: t, done: !!this[h] });
                        };
                        const onend = () => {
                            this.removeListener("error", onerr);
                            this.removeListener("data", ondata);
                            e({ done: true });
                        };
                        const ondestroy = () =>
                            onerr(new Error("stream destroyed"));
                        return new Promise((t, i) => {
                            s = i;
                            e = t;
                            this.once(O, ondestroy);
                            this.once("error", onerr);
                            this.once("end", onend);
                            this.once("data", ondata);
                        });
                    };
                    return { next: next };
                }
                [L]() {
                    const next = () => {
                        const t = this.read();
                        const e = t === null;
                        return { value: t, done: e };
                    };
                    return { next: next };
                }
                destroy(t) {
                    if (this[O]) {
                        if (t) this.emit("error", t);
                        else this.emit(O);
                        return this;
                    }
                    this[O] = true;
                    this.buffer.length = 0;
                    this[E] = 0;
                    if (typeof this.close === "function" && !this[f])
                        this.close();
                    if (t) this.emit("error", t);
                    else this.emit(O);
                    return this;
                }
                static isStream(t) {
                    return (
                        !!t &&
                        (t instanceof Minipass ||
                            t instanceof n ||
                            (t instanceof r &&
                                (typeof t.pipe === "function" ||
                                    (typeof t.write === "function" &&
                                        typeof t.end === "function"))))
                    );
                }
            };
        },
        4294: (t, e, s) => {
            t.exports = s(4219);
        },
        4219: (t, e, s) => {
            "use strict";
            var i = s(1808);
            var r = s(4404);
            var n = s(3685);
            var o = s(5687);
            var h = s(2361);
            var a = s(9491);
            var l = s(3837);
            e.httpOverHttp = httpOverHttp;
            e.httpsOverHttp = httpsOverHttp;
            e.httpOverHttps = httpOverHttps;
            e.httpsOverHttps = httpsOverHttps;
            function httpOverHttp(t) {
                var e = new TunnelingAgent(t);
                e.request = n.request;
                return e;
            }
            function httpsOverHttp(t) {
                var e = new TunnelingAgent(t);
                e.request = n.request;
                e.createSocket = createSecureSocket;
                e.defaultPort = 443;
                return e;
            }
            function httpOverHttps(t) {
                var e = new TunnelingAgent(t);
                e.request = o.request;
                return e;
            }
            function httpsOverHttps(t) {
                var e = new TunnelingAgent(t);
                e.request = o.request;
                e.createSocket = createSecureSocket;
                e.defaultPort = 443;
                return e;
            }
            function TunnelingAgent(t) {
                var e = this;
                e.options = t || {};
                e.proxyOptions = e.options.proxy || {};
                e.maxSockets =
                    e.options.maxSockets || n.Agent.defaultMaxSockets;
                e.requests = [];
                e.sockets = [];
                e.on("free", function onFree(t, s, i, r) {
                    var n = toOptions(s, i, r);
                    for (var o = 0, h = e.requests.length; o < h; ++o) {
                        var a = e.requests[o];
                        if (a.host === n.host && a.port === n.port) {
                            e.requests.splice(o, 1);
                            a.request.onSocket(t);
                            return;
                        }
                    }
                    t.destroy();
                    e.removeSocket(t);
                });
            }
            l.inherits(TunnelingAgent, h.EventEmitter);
            TunnelingAgent.prototype.addRequest = function addRequest(
                t,
                e,
                s,
                i
            ) {
                var r = this;
                var n = mergeOptions(
                    { request: t },
                    r.options,
                    toOptions(e, s, i)
                );
                if (r.sockets.length >= this.maxSockets) {
                    r.requests.push(n);
                    return;
                }
                r.createSocket(n, function (e) {
                    e.on("free", onFree);
                    e.on("close", onCloseOrRemove);
                    e.on("agentRemove", onCloseOrRemove);
                    t.onSocket(e);
                    function onFree() {
                        r.emit("free", e, n);
                    }
                    function onCloseOrRemove(t) {
                        r.removeSocket(e);
                        e.removeListener("free", onFree);
                        e.removeListener("close", onCloseOrRemove);
                        e.removeListener("agentRemove", onCloseOrRemove);
                    }
                });
            };
            TunnelingAgent.prototype.createSocket = function createSocket(
                t,
                e
            ) {
                var s = this;
                var i = {};
                s.sockets.push(i);
                var r = mergeOptions({}, s.proxyOptions, {
                    method: "CONNECT",
                    path: t.host + ":" + t.port,
                    agent: false,
                    headers: { host: t.host + ":" + t.port },
                });
                if (t.localAddress) {
                    r.localAddress = t.localAddress;
                }
                if (r.proxyAuth) {
                    r.headers = r.headers || {};
                    r.headers["Proxy-Authorization"] =
                        "Basic " + new Buffer(r.proxyAuth).toString("base64");
                }
                c("making CONNECT request");
                var n = s.request(r);
                n.useChunkedEncodingByDefault = false;
                n.once("response", onResponse);
                n.once("upgrade", onUpgrade);
                n.once("connect", onConnect);
                n.once("error", onError);
                n.end();
                function onResponse(t) {
                    t.upgrade = true;
                }
                function onUpgrade(t, e, s) {
                    process.nextTick(function () {
                        onConnect(t, e, s);
                    });
                }
                function onConnect(r, o, h) {
                    n.removeAllListeners();
                    o.removeAllListeners();
                    if (r.statusCode !== 200) {
                        c(
                            "tunneling socket could not be established, statusCode=%d",
                            r.statusCode
                        );
                        o.destroy();
                        var a = new Error(
                            "tunneling socket could not be established, " +
                                "statusCode=" +
                                r.statusCode
                        );
                        a.code = "ECONNRESET";
                        t.request.emit("error", a);
                        s.removeSocket(i);
                        return;
                    }
                    if (h.length > 0) {
                        c("got illegal response body from proxy");
                        o.destroy();
                        var a = new Error(
                            "got illegal response body from proxy"
                        );
                        a.code = "ECONNRESET";
                        t.request.emit("error", a);
                        s.removeSocket(i);
                        return;
                    }
                    c("tunneling connection has established");
                    s.sockets[s.sockets.indexOf(i)] = o;
                    return e(o);
                }
                function onError(e) {
                    n.removeAllListeners();
                    c(
                        "tunneling socket could not be established, cause=%s\n",
                        e.message,
                        e.stack
                    );
                    var r = new Error(
                        "tunneling socket could not be established, " +
                            "cause=" +
                            e.message
                    );
                    r.code = "ECONNRESET";
                    t.request.emit("error", r);
                    s.removeSocket(i);
                }
            };
            TunnelingAgent.prototype.removeSocket = function removeSocket(t) {
                var e = this.sockets.indexOf(t);
                if (e === -1) {
                    return;
                }
                this.sockets.splice(e, 1);
                var s = this.requests.shift();
                if (s) {
                    this.createSocket(s, function (t) {
                        s.request.onSocket(t);
                    });
                }
            };
            function createSecureSocket(t, e) {
                var s = this;
                TunnelingAgent.prototype.createSocket.call(s, t, function (i) {
                    var n = t.request.getHeader("host");
                    var o = mergeOptions({}, s.options, {
                        socket: i,
                        servername: n ? n.replace(/:.*$/, "") : t.host,
                    });
                    var h = r.connect(0, o);
                    s.sockets[s.sockets.indexOf(i)] = h;
                    e(h);
                });
            }
            function toOptions(t, e, s) {
                if (typeof t === "string") {
                    return { host: t, port: e, localAddress: s };
                }
                return t;
            }
            function mergeOptions(t) {
                for (var e = 1, s = arguments.length; e < s; ++e) {
                    var i = arguments[e];
                    if (typeof i === "object") {
                        var r = Object.keys(i);
                        for (var n = 0, o = r.length; n < o; ++n) {
                            var h = r[n];
                            if (i[h] !== undefined) {
                                t[h] = i[h];
                            }
                        }
                    }
                }
                return t;
            }
            var c;
            if (
                process.env.NODE_DEBUG &&
                /\btunnel\b/.test(process.env.NODE_DEBUG)
            ) {
                c = function () {
                    var t = Array.prototype.slice.call(arguments);
                    if (typeof t[0] === "string") {
                        t[0] = "TUNNEL: " + t[0];
                    } else {
                        t.unshift("TUNNEL:");
                    }
                    console.error.apply(console, t);
                };
            } else {
                c = function () {};
            }
            e.debug = c;
        },
        5840: (t, e, s) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            Object.defineProperty(e, "v1", {
                enumerable: true,
                get: function () {
                    return i.default;
                },
            });
            Object.defineProperty(e, "v3", {
                enumerable: true,
                get: function () {
                    return r.default;
                },
            });
            Object.defineProperty(e, "v4", {
                enumerable: true,
                get: function () {
                    return n.default;
                },
            });
            Object.defineProperty(e, "v5", {
                enumerable: true,
                get: function () {
                    return o.default;
                },
            });
            Object.defineProperty(e, "NIL", {
                enumerable: true,
                get: function () {
                    return h.default;
                },
            });
            Object.defineProperty(e, "version", {
                enumerable: true,
                get: function () {
                    return a.default;
                },
            });
            Object.defineProperty(e, "validate", {
                enumerable: true,
                get: function () {
                    return l.default;
                },
            });
            Object.defineProperty(e, "stringify", {
                enumerable: true,
                get: function () {
                    return c.default;
                },
            });
            Object.defineProperty(e, "parse", {
                enumerable: true,
                get: function () {
                    return u.default;
                },
            });
            var i = _interopRequireDefault(s(8628));
            var r = _interopRequireDefault(s(6409));
            var n = _interopRequireDefault(s(5122));
            var o = _interopRequireDefault(s(9120));
            var h = _interopRequireDefault(s(5332));
            var a = _interopRequireDefault(s(1595));
            var l = _interopRequireDefault(s(6900));
            var c = _interopRequireDefault(s(8950));
            var u = _interopRequireDefault(s(2746));
            function _interopRequireDefault(t) {
                return t && t.__esModule ? t : { default: t };
            }
        },
        4569: (t, e, s) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            e["default"] = void 0;
            var i = _interopRequireDefault(s(6113));
            function _interopRequireDefault(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function md5(t) {
                if (Array.isArray(t)) {
                    t = Buffer.from(t);
                } else if (typeof t === "string") {
                    t = Buffer.from(t, "utf8");
                }
                return i.default.createHash("md5").update(t).digest();
            }
            var r = md5;
            e["default"] = r;
        },
        5332: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            e["default"] = void 0;
            var s = "00000000-0000-0000-0000-000000000000";
            e["default"] = s;
        },
        2746: (t, e, s) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            e["default"] = void 0;
            var i = _interopRequireDefault(s(6900));
            function _interopRequireDefault(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function parse(t) {
                if (!(0, i.default)(t)) {
                    throw TypeError("Invalid UUID");
                }
                let e;
                const s = new Uint8Array(16);
                s[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24;
                s[1] = (e >>> 16) & 255;
                s[2] = (e >>> 8) & 255;
                s[3] = e & 255;
                s[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8;
                s[5] = e & 255;
                s[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8;
                s[7] = e & 255;
                s[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8;
                s[9] = e & 255;
                s[10] =
                    ((e = parseInt(t.slice(24, 36), 16)) / 1099511627776) & 255;
                s[11] = (e / 4294967296) & 255;
                s[12] = (e >>> 24) & 255;
                s[13] = (e >>> 16) & 255;
                s[14] = (e >>> 8) & 255;
                s[15] = e & 255;
                return s;
            }
            var r = parse;
            e["default"] = r;
        },
        814: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            e["default"] = void 0;
            var s =
                /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
            e["default"] = s;
        },
        807: (t, e, s) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            e["default"] = rng;
            var i = _interopRequireDefault(s(6113));
            function _interopRequireDefault(t) {
                return t && t.__esModule ? t : { default: t };
            }
            const r = new Uint8Array(256);
            let n = r.length;
            function rng() {
                if (n > r.length - 16) {
                    i.default.randomFillSync(r);
                    n = 0;
                }
                return r.slice(n, (n += 16));
            }
        },
        5274: (t, e, s) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            e["default"] = void 0;
            var i = _interopRequireDefault(s(6113));
            function _interopRequireDefault(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function sha1(t) {
                if (Array.isArray(t)) {
                    t = Buffer.from(t);
                } else if (typeof t === "string") {
                    t = Buffer.from(t, "utf8");
                }
                return i.default.createHash("sha1").update(t).digest();
            }
            var r = sha1;
            e["default"] = r;
        },
        8950: (t, e, s) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            e["default"] = void 0;
            var i = _interopRequireDefault(s(6900));
            function _interopRequireDefault(t) {
                return t && t.__esModule ? t : { default: t };
            }
            const r = [];
            for (let t = 0; t < 256; ++t) {
                r.push((t + 256).toString(16).substr(1));
            }
            function stringify(t, e = 0) {
                const s = (
                    r[t[e + 0]] +
                    r[t[e + 1]] +
                    r[t[e + 2]] +
                    r[t[e + 3]] +
                    "-" +
                    r[t[e + 4]] +
                    r[t[e + 5]] +
                    "-" +
                    r[t[e + 6]] +
                    r[t[e + 7]] +
                    "-" +
                    r[t[e + 8]] +
                    r[t[e + 9]] +
                    "-" +
                    r[t[e + 10]] +
                    r[t[e + 11]] +
                    r[t[e + 12]] +
                    r[t[e + 13]] +
                    r[t[e + 14]] +
                    r[t[e + 15]]
                ).toLowerCase();
                if (!(0, i.default)(s)) {
                    throw TypeError("Stringified UUID is invalid");
                }
                return s;
            }
            var n = stringify;
            e["default"] = n;
        },
        8628: (t, e, s) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            e["default"] = void 0;
            var i = _interopRequireDefault(s(807));
            var r = _interopRequireDefault(s(8950));
            function _interopRequireDefault(t) {
                return t && t.__esModule ? t : { default: t };
            }
            let n;
            let o;
            let h = 0;
            let a = 0;
            function v1(t, e, s) {
                let l = (e && s) || 0;
                const c = e || new Array(16);
                t = t || {};
                let u = t.node || n;
                let f = t.clockseq !== undefined ? t.clockseq : o;
                if (u == null || f == null) {
                    const e = t.random || (t.rng || i.default)();
                    if (u == null) {
                        u = n = [e[0] | 1, e[1], e[2], e[3], e[4], e[5]];
                    }
                    if (f == null) {
                        f = o = ((e[6] << 8) | e[7]) & 16383;
                    }
                }
                let d = t.msecs !== undefined ? t.msecs : Date.now();
                let p = t.nsecs !== undefined ? t.nsecs : a + 1;
                const m = d - h + (p - a) / 1e4;
                if (m < 0 && t.clockseq === undefined) {
                    f = (f + 1) & 16383;
                }
                if ((m < 0 || d > h) && t.nsecs === undefined) {
                    p = 0;
                }
                if (p >= 1e4) {
                    throw new Error(
                        "uuid.v1(): Can't create more than 10M uuids/sec"
                    );
                }
                h = d;
                a = p;
                o = f;
                d += 122192928e5;
                const y = ((d & 268435455) * 1e4 + p) % 4294967296;
                c[l++] = (y >>> 24) & 255;
                c[l++] = (y >>> 16) & 255;
                c[l++] = (y >>> 8) & 255;
                c[l++] = y & 255;
                const b = ((d / 4294967296) * 1e4) & 268435455;
                c[l++] = (b >>> 8) & 255;
                c[l++] = b & 255;
                c[l++] = ((b >>> 24) & 15) | 16;
                c[l++] = (b >>> 16) & 255;
                c[l++] = (f >>> 8) | 128;
                c[l++] = f & 255;
                for (let t = 0; t < 6; ++t) {
                    c[l + t] = u[t];
                }
                return e || (0, r.default)(c);
            }
            var l = v1;
            e["default"] = l;
        },
        6409: (t, e, s) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            e["default"] = void 0;
            var i = _interopRequireDefault(s(5998));
            var r = _interopRequireDefault(s(4569));
            function _interopRequireDefault(t) {
                return t && t.__esModule ? t : { default: t };
            }
            const n = (0, i.default)("v3", 48, r.default);
            var o = n;
            e["default"] = o;
        },
        5998: (t, e, s) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            e["default"] = _default;
            e.URL = e.DNS = void 0;
            var i = _interopRequireDefault(s(8950));
            var r = _interopRequireDefault(s(2746));
            function _interopRequireDefault(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function stringToBytes(t) {
                t = unescape(encodeURIComponent(t));
                const e = [];
                for (let s = 0; s < t.length; ++s) {
                    e.push(t.charCodeAt(s));
                }
                return e;
            }
            const n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
            e.DNS = n;
            const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
            e.URL = o;
            function _default(t, e, s) {
                function generateUUID(t, n, o, h) {
                    if (typeof t === "string") {
                        t = stringToBytes(t);
                    }
                    if (typeof n === "string") {
                        n = (0, r.default)(n);
                    }
                    if (n.length !== 16) {
                        throw TypeError(
                            "Namespace must be array-like (16 iterable integer values, 0-255)"
                        );
                    }
                    let a = new Uint8Array(16 + t.length);
                    a.set(n);
                    a.set(t, n.length);
                    a = s(a);
                    a[6] = (a[6] & 15) | e;
                    a[8] = (a[8] & 63) | 128;
                    if (o) {
                        h = h || 0;
                        for (let t = 0; t < 16; ++t) {
                            o[h + t] = a[t];
                        }
                        return o;
                    }
                    return (0, i.default)(a);
                }
                try {
                    generateUUID.name = t;
                } catch (t) {}
                generateUUID.DNS = n;
                generateUUID.URL = o;
                return generateUUID;
            }
        },
        5122: (t, e, s) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            e["default"] = void 0;
            var i = _interopRequireDefault(s(807));
            var r = _interopRequireDefault(s(8950));
            function _interopRequireDefault(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function v4(t, e, s) {
                t = t || {};
                const n = t.random || (t.rng || i.default)();
                n[6] = (n[6] & 15) | 64;
                n[8] = (n[8] & 63) | 128;
                if (e) {
                    s = s || 0;
                    for (let t = 0; t < 16; ++t) {
                        e[s + t] = n[t];
                    }
                    return e;
                }
                return (0, r.default)(n);
            }
            var n = v4;
            e["default"] = n;
        },
        9120: (t, e, s) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            e["default"] = void 0;
            var i = _interopRequireDefault(s(5998));
            var r = _interopRequireDefault(s(5274));
            function _interopRequireDefault(t) {
                return t && t.__esModule ? t : { default: t };
            }
            const n = (0, i.default)("v5", 80, r.default);
            var o = n;
            e["default"] = o;
        },
        6900: (t, e, s) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            e["default"] = void 0;
            var i = _interopRequireDefault(s(814));
            function _interopRequireDefault(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function validate(t) {
                return typeof t === "string" && i.default.test(t);
            }
            var r = validate;
            e["default"] = r;
        },
        1595: (t, e, s) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: true });
            e["default"] = void 0;
            var i = _interopRequireDefault(s(6900));
            function _interopRequireDefault(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function version(t) {
                if (!(0, i.default)(t)) {
                    throw TypeError("Invalid UUID");
                }
                return parseInt(t.substr(14, 1), 16);
            }
            var r = version;
            e["default"] = r;
        },
        4091: (t) => {
            "use strict";
            t.exports = function (t) {
                t.prototype[Symbol.iterator] = function* () {
                    for (let t = this.head; t; t = t.next) {
                        yield t.value;
                    }
                };
            };
        },
        665: (t, e, s) => {
            "use strict";
            t.exports = Yallist;
            Yallist.Node = Node;
            Yallist.create = Yallist;
            function Yallist(t) {
                var e = this;
                if (!(e instanceof Yallist)) {
                    e = new Yallist();
                }
                e.tail = null;
                e.head = null;
                e.length = 0;
                if (t && typeof t.forEach === "function") {
                    t.forEach(function (t) {
                        e.push(t);
                    });
                } else if (arguments.length > 0) {
                    for (var s = 0, i = arguments.length; s < i; s++) {
                        e.push(arguments[s]);
                    }
                }
                return e;
            }
            Yallist.prototype.removeNode = function (t) {
                if (t.list !== this) {
                    throw new Error(
                        "removing node which does not belong to this list"
                    );
                }
                var e = t.next;
                var s = t.prev;
                if (e) {
                    e.prev = s;
                }
                if (s) {
                    s.next = e;
                }
                if (t === this.head) {
                    this.head = e;
                }
                if (t === this.tail) {
                    this.tail = s;
                }
                t.list.length--;
                t.next = null;
                t.prev = null;
                t.list = null;
                return e;
            };
            Yallist.prototype.unshiftNode = function (t) {
                if (t === this.head) {
                    return;
                }
                if (t.list) {
                    t.list.removeNode(t);
                }
                var e = this.head;
                t.list = this;
                t.next = e;
                if (e) {
                    e.prev = t;
                }
                this.head = t;
                if (!this.tail) {
                    this.tail = t;
                }
                this.length++;
            };
            Yallist.prototype.pushNode = function (t) {
                if (t === this.tail) {
                    return;
                }
                if (t.list) {
                    t.list.removeNode(t);
                }
                var e = this.tail;
                t.list = this;
                t.prev = e;
                if (e) {
                    e.next = t;
                }
                this.tail = t;
                if (!this.head) {
                    this.head = t;
                }
                this.length++;
            };
            Yallist.prototype.push = function () {
                for (var t = 0, e = arguments.length; t < e; t++) {
                    push(this, arguments[t]);
                }
                return this.length;
            };
            Yallist.prototype.unshift = function () {
                for (var t = 0, e = arguments.length; t < e; t++) {
                    unshift(this, arguments[t]);
                }
                return this.length;
            };
            Yallist.prototype.pop = function () {
                if (!this.tail) {
                    return undefined;
                }
                var t = this.tail.value;
                this.tail = this.tail.prev;
                if (this.tail) {
                    this.tail.next = null;
                } else {
                    this.head = null;
                }
                this.length--;
                return t;
            };
            Yallist.prototype.shift = function () {
                if (!this.head) {
                    return undefined;
                }
                var t = this.head.value;
                this.head = this.head.next;
                if (this.head) {
                    this.head.prev = null;
                } else {
                    this.tail = null;
                }
                this.length--;
                return t;
            };
            Yallist.prototype.forEach = function (t, e) {
                e = e || this;
                for (var s = this.head, i = 0; s !== null; i++) {
                    t.call(e, s.value, i, this);
                    s = s.next;
                }
            };
            Yallist.prototype.forEachReverse = function (t, e) {
                e = e || this;
                for (var s = this.tail, i = this.length - 1; s !== null; i--) {
                    t.call(e, s.value, i, this);
                    s = s.prev;
                }
            };
            Yallist.prototype.get = function (t) {
                for (var e = 0, s = this.head; s !== null && e < t; e++) {
                    s = s.next;
                }
                if (e === t && s !== null) {
                    return s.value;
                }
            };
            Yallist.prototype.getReverse = function (t) {
                for (var e = 0, s = this.tail; s !== null && e < t; e++) {
                    s = s.prev;
                }
                if (e === t && s !== null) {
                    return s.value;
                }
            };
            Yallist.prototype.map = function (t, e) {
                e = e || this;
                var s = new Yallist();
                for (var i = this.head; i !== null; ) {
                    s.push(t.call(e, i.value, this));
                    i = i.next;
                }
                return s;
            };
            Yallist.prototype.mapReverse = function (t, e) {
                e = e || this;
                var s = new Yallist();
                for (var i = this.tail; i !== null; ) {
                    s.push(t.call(e, i.value, this));
                    i = i.prev;
                }
                return s;
            };
            Yallist.prototype.reduce = function (t, e) {
                var s;
                var i = this.head;
                if (arguments.length > 1) {
                    s = e;
                } else if (this.head) {
                    i = this.head.next;
                    s = this.head.value;
                } else {
                    throw new TypeError(
                        "Reduce of empty list with no initial value"
                    );
                }
                for (var r = 0; i !== null; r++) {
                    s = t(s, i.value, r);
                    i = i.next;
                }
                return s;
            };
            Yallist.prototype.reduceReverse = function (t, e) {
                var s;
                var i = this.tail;
                if (arguments.length > 1) {
                    s = e;
                } else if (this.tail) {
                    i = this.tail.prev;
                    s = this.tail.value;
                } else {
                    throw new TypeError(
                        "Reduce of empty list with no initial value"
                    );
                }
                for (var r = this.length - 1; i !== null; r--) {
                    s = t(s, i.value, r);
                    i = i.prev;
                }
                return s;
            };
            Yallist.prototype.toArray = function () {
                var t = new Array(this.length);
                for (var e = 0, s = this.head; s !== null; e++) {
                    t[e] = s.value;
                    s = s.next;
                }
                return t;
            };
            Yallist.prototype.toArrayReverse = function () {
                var t = new Array(this.length);
                for (var e = 0, s = this.tail; s !== null; e++) {
                    t[e] = s.value;
                    s = s.prev;
                }
                return t;
            };
            Yallist.prototype.slice = function (t, e) {
                e = e || this.length;
                if (e < 0) {
                    e += this.length;
                }
                t = t || 0;
                if (t < 0) {
                    t += this.length;
                }
                var s = new Yallist();
                if (e < t || e < 0) {
                    return s;
                }
                if (t < 0) {
                    t = 0;
                }
                if (e > this.length) {
                    e = this.length;
                }
                for (var i = 0, r = this.head; r !== null && i < t; i++) {
                    r = r.next;
                }
                for (; r !== null && i < e; i++, r = r.next) {
                    s.push(r.value);
                }
                return s;
            };
            Yallist.prototype.sliceReverse = function (t, e) {
                e = e || this.length;
                if (e < 0) {
                    e += this.length;
                }
                t = t || 0;
                if (t < 0) {
                    t += this.length;
                }
                var s = new Yallist();
                if (e < t || e < 0) {
                    return s;
                }
                if (t < 0) {
                    t = 0;
                }
                if (e > this.length) {
                    e = this.length;
                }
                for (
                    var i = this.length, r = this.tail;
                    r !== null && i > e;
                    i--
                ) {
                    r = r.prev;
                }
                for (; r !== null && i > t; i--, r = r.prev) {
                    s.push(r.value);
                }
                return s;
            };
            Yallist.prototype.splice = function (t, e, ...s) {
                if (t > this.length) {
                    t = this.length - 1;
                }
                if (t < 0) {
                    t = this.length + t;
                }
                for (var i = 0, r = this.head; r !== null && i < t; i++) {
                    r = r.next;
                }
                var n = [];
                for (var i = 0; r && i < e; i++) {
                    n.push(r.value);
                    r = this.removeNode(r);
                }
                if (r === null) {
                    r = this.tail;
                }
                if (r !== this.head && r !== this.tail) {
                    r = r.prev;
                }
                for (var i = 0; i < s.length; i++) {
                    r = insert(this, r, s[i]);
                }
                return n;
            };
            Yallist.prototype.reverse = function () {
                var t = this.head;
                var e = this.tail;
                for (var s = t; s !== null; s = s.prev) {
                    var i = s.prev;
                    s.prev = s.next;
                    s.next = i;
                }
                this.head = e;
                this.tail = t;
                return this;
            };
            function insert(t, e, s) {
                var i =
                    e === t.head
                        ? new Node(s, null, e, t)
                        : new Node(s, e, e.next, t);
                if (i.next === null) {
                    t.tail = i;
                }
                if (i.prev === null) {
                    t.head = i;
                }
                t.length++;
                return i;
            }
            function push(t, e) {
                t.tail = new Node(e, t.tail, null, t);
                if (!t.head) {
                    t.head = t.tail;
                }
                t.length++;
            }
            function unshift(t, e) {
                t.head = new Node(e, null, t.head, t);
                if (!t.tail) {
                    t.tail = t.head;
                }
                t.length++;
            }
            function Node(t, e, s, i) {
                if (!(this instanceof Node)) {
                    return new Node(t, e, s, i);
                }
                this.list = i;
                this.value = t;
                if (e) {
                    e.next = this;
                    this.prev = e;
                } else {
                    this.prev = null;
                }
                if (s) {
                    s.prev = this;
                    this.next = s;
                } else {
                    this.next = null;
                }
            }
            try {
                s(4091)(Yallist);
            } catch (t) {}
        },
        9491: (t) => {
            "use strict";
            t.exports = require("assert");
        },
        4300: (t) => {
            "use strict";
            t.exports = require("buffer");
        },
        6113: (t) => {
            "use strict";
            t.exports = require("crypto");
        },
        2361: (t) => {
            "use strict";
            t.exports = require("events");
        },
        7147: (t) => {
            "use strict";
            t.exports = require("fs");
        },
        3685: (t) => {
            "use strict";
            t.exports = require("http");
        },
        5687: (t) => {
            "use strict";
            t.exports = require("https");
        },
        1808: (t) => {
            "use strict";
            t.exports = require("net");
        },
        2037: (t) => {
            "use strict";
            t.exports = require("os");
        },
        1017: (t) => {
            "use strict";
            t.exports = require("path");
        },
        7282: (t) => {
            "use strict";
            t.exports = require("process");
        },
        2781: (t) => {
            "use strict";
            t.exports = require("stream");
        },
        1576: (t) => {
            "use strict";
            t.exports = require("string_decoder");
        },
        4404: (t) => {
            "use strict";
            t.exports = require("tls");
        },
        3837: (t) => {
            "use strict";
            t.exports = require("util");
        },
        9796: (t) => {
            "use strict";
            t.exports = require("zlib");
        },
    };
    var e = {};
    function __nccwpck_require__(s) {
        var i = e[s];
        if (i !== undefined) {
            return i.exports;
        }
        var r = (e[s] = { exports: {} });
        var n = true;
        try {
            t[s].call(r.exports, r, r.exports, __nccwpck_require__);
            n = false;
        } finally {
            if (n) delete e[s];
        }
        return r.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined")
        __nccwpck_require__.ab = __dirname + "/";
    var s = {};
    (() => {
        const t = __nccwpck_require__(2186);
        const e = __nccwpck_require__(4674);
        const s = __nccwpck_require__(968);
        try {
            const i = t.getInput("cwd");
            const r = t.getInput("command", { required: true });
            const n = t
                .getInput("files", { required: true })
                .split("\n")
                .filter((t) => t !== "");
            const o = t.getInput("outPath");
            const h = Array.isArray(n) ? n : [n];
            switch (r) {
                case "c": {
                    if (!o) throw new Error("Please specify an out path");
                    e.c({ cwd: i, gzip: true, sync: true }, h).pipe(
                        s.createWriteStream(o)
                    );
                    break;
                }
                case "x": {
                    if (n.length !== 1)
                        throw new Error("Only one file can be extracted");
                    e.x({ C: i, sync: true, file: n[0] });
                    break;
                }
                default:
                    throw new Error(`Unsupported command: ${r}`);
            }
            t.setOutput("done", true);
        } catch (e) {
            t.setFailed(e.message);
        }
    })();
    module.exports = s;
})();
