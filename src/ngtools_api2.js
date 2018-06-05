/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtools_api2", ["require", "exports", "typescript", "@angular/compiler-cli/src/perform_compile", "@angular/compiler-cli/src/transformers/compiler_host", "@angular/compiler-cli/src/transformers/program"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts = require("typescript");
    var perform_compile_1 = require("@angular/compiler-cli/src/perform_compile");
    var compiler_host_1 = require("@angular/compiler-cli/src/transformers/compiler_host");
    var program_1 = require("@angular/compiler-cli/src/transformers/program");
    var EmitFlags;
    (function (EmitFlags) {
        EmitFlags[EmitFlags["DTS"] = 1] = "DTS";
        EmitFlags[EmitFlags["JS"] = 2] = "JS";
        EmitFlags[EmitFlags["Metadata"] = 4] = "Metadata";
        EmitFlags[EmitFlags["I18nBundle"] = 8] = "I18nBundle";
        EmitFlags[EmitFlags["Codegen"] = 16] = "Codegen";
        EmitFlags[EmitFlags["Default"] = 19] = "Default";
        EmitFlags[EmitFlags["All"] = 31] = "All";
    })(EmitFlags = exports.EmitFlags || (exports.EmitFlags = {}));
    // Wrapper for createProgram.
    function createProgram(_a) {
        var rootNames = _a.rootNames, options = _a.options, host = _a.host, oldProgram = _a.oldProgram;
        return program_1.createProgram({ rootNames: rootNames, options: options, host: host, oldProgram: oldProgram });
    }
    exports.createProgram = createProgram;
    // Wrapper for createCompilerHost.
    function createCompilerHost(_a) {
        var options = _a.options, _b = _a.tsHost, tsHost = _b === void 0 ? ts.createCompilerHost(options, true) : _b;
        return compiler_host_1.createCompilerHost({ options: options, tsHost: tsHost });
    }
    exports.createCompilerHost = createCompilerHost;
    function formatDiagnostics(diags) {
        return perform_compile_1.formatDiagnostics(diags);
    }
    exports.formatDiagnostics = formatDiagnostics;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd0b29sc19hcGkyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3Rvb2xzX2FwaTIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFrQkgsK0JBQWlDO0lBRWpDLDZFQUE2RTtJQUU3RSxzRkFBc0Y7SUFDdEYsMEVBQTBFO0lBNEMxRSxJQUFZLFNBU1g7SUFURCxXQUFZLFNBQVM7UUFDbkIsdUNBQVksQ0FBQTtRQUNaLHFDQUFXLENBQUE7UUFDWCxpREFBaUIsQ0FBQTtRQUNqQixxREFBbUIsQ0FBQTtRQUNuQixnREFBZ0IsQ0FBQTtRQUVoQixnREFBNEIsQ0FBQTtRQUM1Qix3Q0FBZ0QsQ0FBQTtJQUNsRCxDQUFDLEVBVFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFTcEI7SUErQ0QsNkJBQTZCO0lBQzdCLHVCQUNJLEVBQzZGO1lBRDVGLHdCQUFTLEVBQUUsb0JBQU8sRUFBRSxjQUFJLEVBQUUsMEJBQVU7UUFHdkMsT0FBTyx1QkFBaUIsQ0FBQyxFQUFDLFNBQVMsV0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLFVBQVUsRUFBRSxVQUFpQixFQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBTEQsc0NBS0M7SUFFRCxrQ0FBa0M7SUFDbEMsNEJBQ0ksRUFDd0Q7WUFEdkQsb0JBQU8sRUFBRSxjQUE2QyxFQUE3QyxrRUFBNkM7UUFFekQsT0FBTyxrQ0FBa0IsQ0FBQyxFQUFDLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBSkQsZ0RBSUM7SUFJRCwyQkFBa0MsS0FBa0I7UUFDbEQsT0FBTyxtQ0FBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRkQsOENBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogVGhpcyBpcyBhIHByaXZhdGUgQVBJIGZvciBAbmd0b29scy93ZWJwYWNrLiBUaGlzIEFQSSBzaG91bGQgYmUgc3RhYmxlIGZvciBORyA1LlxuICpcbiAqIEl0IGNvbnRhaW5zIGNvcGllcyBvZiB0aGUgaW50ZXJmYWNlcyBuZWVkZWQgYW5kIHdyYXBwZXIgZnVuY3Rpb25zIHRvIGVuc3VyZSB0aGF0XG4gKiB0aGV5IGFyZSBub3QgYnJva2VuIGFjY2lkZW50YWxseS5cbiAqXG4gKiBPbmNlIHRoZSBuZ2MgYXBpIGlzIHB1YmxpYyBhbmQgc3RhYmxlLCB0aGlzIGNhbiBiZSByZW1vdmVkLlxuICovXG5cbi8qKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQ2hhbmdlcyB0byB0aGlzIGZpbGUgbmVlZCB0byBiZSBhcHByb3ZlZCBieSB0aGUgQW5ndWxhciBDTEkgdGVhbS4gKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICovXG5cbmltcG9ydCB7UGFyc2VTb3VyY2VTcGFufSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtmb3JtYXREaWFnbm9zdGljcyBhcyBmb3JtYXREaWFnbm9zdGljc09yaWd9IGZyb20gJy4vcGVyZm9ybV9jb21waWxlJztcbmltcG9ydCB7UHJvZ3JhbSBhcyBQcm9ncmFtT3JpZ30gZnJvbSAnLi90cmFuc2Zvcm1lcnMvYXBpJztcbmltcG9ydCB7Y3JlYXRlQ29tcGlsZXJIb3N0IGFzIGNyZWF0ZUNvbXBpbGVyT3JpZ30gZnJvbSAnLi90cmFuc2Zvcm1lcnMvY29tcGlsZXJfaG9zdCc7XG5pbXBvcnQge2NyZWF0ZVByb2dyYW0gYXMgY3JlYXRlUHJvZ3JhbU9yaWd9IGZyb20gJy4vdHJhbnNmb3JtZXJzL3Byb2dyYW0nO1xuXG5cbi8vIEludGVyZmFjZXMgZnJvbSAuL3RyYW5zZm9ybWVycy9hcGk7XG5leHBvcnQgaW50ZXJmYWNlIERpYWdub3N0aWMge1xuICBtZXNzYWdlVGV4dDogc3RyaW5nO1xuICBzcGFuPzogUGFyc2VTb3VyY2VTcGFuO1xuICBjYXRlZ29yeTogdHMuRGlhZ25vc3RpY0NhdGVnb3J5O1xuICBjb2RlOiBudW1iZXI7XG4gIHNvdXJjZTogJ2FuZ3VsYXInO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBpbGVyT3B0aW9ucyBleHRlbmRzIHRzLkNvbXBpbGVyT3B0aW9ucyB7XG4gIGJhc2VQYXRoPzogc3RyaW5nO1xuICBza2lwTWV0YWRhdGFFbWl0PzogYm9vbGVhbjtcbiAgc3RyaWN0TWV0YWRhdGFFbWl0PzogYm9vbGVhbjtcbiAgc2tpcFRlbXBsYXRlQ29kZWdlbj86IGJvb2xlYW47XG4gIGZsYXRNb2R1bGVPdXRGaWxlPzogc3RyaW5nO1xuICBmbGF0TW9kdWxlSWQ/OiBzdHJpbmc7XG4gIGdlbmVyYXRlQ29kZUZvckxpYnJhcmllcz86IGJvb2xlYW47XG4gIGFubm90YXRlRm9yQ2xvc3VyZUNvbXBpbGVyPzogYm9vbGVhbjtcbiAgYW5ub3RhdGlvbnNBcz86ICdkZWNvcmF0b3JzJ3wnc3RhdGljIGZpZWxkcyc7XG4gIHRyYWNlPzogYm9vbGVhbjtcbiAgZGlzYWJsZUV4cHJlc3Npb25Mb3dlcmluZz86IGJvb2xlYW47XG4gIGkxOG5PdXRMb2NhbGU/OiBzdHJpbmc7XG4gIGkxOG5PdXRGb3JtYXQ/OiBzdHJpbmc7XG4gIGkxOG5PdXRGaWxlPzogc3RyaW5nO1xuICBpMThuSW5Gb3JtYXQ/OiBzdHJpbmc7XG4gIGkxOG5JbkxvY2FsZT86IHN0cmluZztcbiAgaTE4bkluRmlsZT86IHN0cmluZztcbiAgaTE4bkluTWlzc2luZ1RyYW5zbGF0aW9ucz86ICdlcnJvcid8J3dhcm5pbmcnfCdpZ25vcmUnO1xuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzPzogYm9vbGVhbjtcbiAgZGlzYWJsZVR5cGVTY3JpcHRWZXJzaW9uQ2hlY2s/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBpbGVySG9zdCBleHRlbmRzIHRzLkNvbXBpbGVySG9zdCB7XG4gIG1vZHVsZU5hbWVUb0ZpbGVOYW1lPyhtb2R1bGVOYW1lOiBzdHJpbmcsIGNvbnRhaW5pbmdGaWxlPzogc3RyaW5nKTogc3RyaW5nfG51bGw7XG4gIGZpbGVOYW1lVG9Nb2R1bGVOYW1lPyhpbXBvcnRlZEZpbGVQYXRoOiBzdHJpbmcsIGNvbnRhaW5pbmdGaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nO1xuICByZXNvdXJjZU5hbWVUb0ZpbGVOYW1lPyhyZXNvdXJjZU5hbWU6IHN0cmluZywgY29udGFpbmluZ0ZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmd8bnVsbDtcbiAgdG9TdW1tYXJ5RmlsZU5hbWU/KGZpbGVOYW1lOiBzdHJpbmcsIHJlZmVycmluZ1NyY0ZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG4gIGZyb21TdW1tYXJ5RmlsZU5hbWU/KGZpbGVOYW1lOiBzdHJpbmcsIHJlZmVycmluZ0xpYkZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG4gIHJlYWRSZXNvdXJjZT8oZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPnxzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIEVtaXRGbGFncyB7XG4gIERUUyA9IDEgPDwgMCxcbiAgSlMgPSAxIDw8IDEsXG4gIE1ldGFkYXRhID0gMSA8PCAyLFxuICBJMThuQnVuZGxlID0gMSA8PCAzLFxuICBDb2RlZ2VuID0gMSA8PCA0LFxuXG4gIERlZmF1bHQgPSBEVFMgfCBKUyB8IENvZGVnZW4sXG4gIEFsbCA9IERUUyB8IEpTIHwgTWV0YWRhdGEgfCBJMThuQnVuZGxlIHwgQ29kZWdlbixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21UcmFuc2Zvcm1lcnMge1xuICBiZWZvcmVUcz86IHRzLlRyYW5zZm9ybWVyRmFjdG9yeTx0cy5Tb3VyY2VGaWxlPltdO1xuICBhZnRlclRzPzogdHMuVHJhbnNmb3JtZXJGYWN0b3J5PHRzLlNvdXJjZUZpbGU+W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHNFbWl0QXJndW1lbnRzIHtcbiAgcHJvZ3JhbTogdHMuUHJvZ3JhbTtcbiAgaG9zdDogQ29tcGlsZXJIb3N0O1xuICBvcHRpb25zOiBDb21waWxlck9wdGlvbnM7XG4gIHRhcmdldFNvdXJjZUZpbGU/OiB0cy5Tb3VyY2VGaWxlO1xuICB3cml0ZUZpbGU/OiB0cy5Xcml0ZUZpbGVDYWxsYmFjaztcbiAgY2FuY2VsbGF0aW9uVG9rZW4/OiB0cy5DYW5jZWxsYXRpb25Ub2tlbjtcbiAgZW1pdE9ubHlEdHNGaWxlcz86IGJvb2xlYW47XG4gIGN1c3RvbVRyYW5zZm9ybWVycz86IHRzLkN1c3RvbVRyYW5zZm9ybWVycztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUc0VtaXRDYWxsYmFjayB7IChhcmdzOiBUc0VtaXRBcmd1bWVudHMpOiB0cy5FbWl0UmVzdWx0OyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF6eVJvdXRlIHtcbiAgbW9kdWxlOiB7bmFtZTogc3RyaW5nLCBmaWxlUGF0aDogc3RyaW5nfTtcbiAgcm91dGU6IHN0cmluZztcbiAgcmVmZXJlbmNlZE1vZHVsZToge25hbWU6IHN0cmluZywgZmlsZVBhdGg6IHN0cmluZ307XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3JhbSB7XG4gIGdldFRzUHJvZ3JhbSgpOiB0cy5Qcm9ncmFtO1xuICBnZXRUc09wdGlvbkRpYWdub3N0aWNzKGNhbmNlbGxhdGlvblRva2VuPzogdHMuQ2FuY2VsbGF0aW9uVG9rZW4pOiBSZWFkb25seUFycmF5PHRzLkRpYWdub3N0aWM+O1xuICBnZXROZ09wdGlvbkRpYWdub3N0aWNzKGNhbmNlbGxhdGlvblRva2VuPzogdHMuQ2FuY2VsbGF0aW9uVG9rZW4pOiBSZWFkb25seUFycmF5PERpYWdub3N0aWM+O1xuICBnZXRUc1N5bnRhY3RpY0RpYWdub3N0aWNzKHNvdXJjZUZpbGU/OiB0cy5Tb3VyY2VGaWxlLCBjYW5jZWxsYXRpb25Ub2tlbj86IHRzLkNhbmNlbGxhdGlvblRva2VuKTpcbiAgICAgIFJlYWRvbmx5QXJyYXk8dHMuRGlhZ25vc3RpYz47XG4gIGdldE5nU3RydWN0dXJhbERpYWdub3N0aWNzKGNhbmNlbGxhdGlvblRva2VuPzogdHMuQ2FuY2VsbGF0aW9uVG9rZW4pOiBSZWFkb25seUFycmF5PERpYWdub3N0aWM+O1xuICBnZXRUc1NlbWFudGljRGlhZ25vc3RpY3Moc291cmNlRmlsZT86IHRzLlNvdXJjZUZpbGUsIGNhbmNlbGxhdGlvblRva2VuPzogdHMuQ2FuY2VsbGF0aW9uVG9rZW4pOlxuICAgICAgUmVhZG9ubHlBcnJheTx0cy5EaWFnbm9zdGljPjtcbiAgZ2V0TmdTZW1hbnRpY0RpYWdub3N0aWNzKGZpbGVOYW1lPzogc3RyaW5nLCBjYW5jZWxsYXRpb25Ub2tlbj86IHRzLkNhbmNlbGxhdGlvblRva2VuKTpcbiAgICAgIFJlYWRvbmx5QXJyYXk8RGlhZ25vc3RpYz47XG4gIGxvYWROZ1N0cnVjdHVyZUFzeW5jKCk6IFByb21pc2U8dm9pZD47XG4gIGxpc3RMYXp5Um91dGVzKGVudHJ5Um91dGU/OiBzdHJpbmcpOiBMYXp5Um91dGVbXTtcbiAgZW1pdCh7ZW1pdEZsYWdzLCBjYW5jZWxsYXRpb25Ub2tlbiwgY3VzdG9tVHJhbnNmb3JtZXJzLCBlbWl0Q2FsbGJhY2t9OiB7XG4gICAgZW1pdEZsYWdzPzogRW1pdEZsYWdzLFxuICAgIGNhbmNlbGxhdGlvblRva2VuPzogdHMuQ2FuY2VsbGF0aW9uVG9rZW4sXG4gICAgY3VzdG9tVHJhbnNmb3JtZXJzPzogQ3VzdG9tVHJhbnNmb3JtZXJzLFxuICAgIGVtaXRDYWxsYmFjaz86IFRzRW1pdENhbGxiYWNrXG4gIH0pOiB0cy5FbWl0UmVzdWx0O1xufVxuXG4vLyBXcmFwcGVyIGZvciBjcmVhdGVQcm9ncmFtLlxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0oXG4gICAge3Jvb3ROYW1lcywgb3B0aW9ucywgaG9zdCwgb2xkUHJvZ3JhbX06XG4gICAgICAgIHtyb290TmFtZXM6IHN0cmluZ1tdLCBvcHRpb25zOiBDb21waWxlck9wdGlvbnMsIGhvc3Q6IENvbXBpbGVySG9zdCwgb2xkUHJvZ3JhbT86IFByb2dyYW19KTpcbiAgICBQcm9ncmFtIHtcbiAgcmV0dXJuIGNyZWF0ZVByb2dyYW1PcmlnKHtyb290TmFtZXMsIG9wdGlvbnMsIGhvc3QsIG9sZFByb2dyYW06IG9sZFByb2dyYW0gYXMgYW55fSk7XG59XG5cbi8vIFdyYXBwZXIgZm9yIGNyZWF0ZUNvbXBpbGVySG9zdC5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb21waWxlckhvc3QoXG4gICAge29wdGlvbnMsIHRzSG9zdCA9IHRzLmNyZWF0ZUNvbXBpbGVySG9zdChvcHRpb25zLCB0cnVlKX06XG4gICAgICAgIHtvcHRpb25zOiBDb21waWxlck9wdGlvbnMsIHRzSG9zdD86IHRzLkNvbXBpbGVySG9zdH0pOiBDb21waWxlckhvc3Qge1xuICByZXR1cm4gY3JlYXRlQ29tcGlsZXJPcmlnKHtvcHRpb25zLCB0c0hvc3R9KTtcbn1cblxuLy8gV3JhcHBlciBmb3IgZm9ybWF0RGlhZ25vc3RpY3MuXG5leHBvcnQgdHlwZSBEaWFnbm9zdGljcyA9IFJlYWRvbmx5QXJyYXk8dHMuRGlhZ25vc3RpY3xEaWFnbm9zdGljPjtcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREaWFnbm9zdGljcyhkaWFnczogRGlhZ25vc3RpY3MpOiBzdHJpbmcge1xuICByZXR1cm4gZm9ybWF0RGlhZ25vc3RpY3NPcmlnKGRpYWdzKTtcbn1cbiJdfQ==