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
        define("@angular/compiler-cli/src/ngtsc/transform/src/api", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy90cmFuc2Zvcm0vc3JjL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RXhwcmVzc2lvbiwgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7RGVjb3JhdG9yfSBmcm9tICcuLi8uLi9tZXRhZGF0YSc7XG5cbi8qKlxuICogUHJvdmlkZXMgdGhlIGludGVyZmFjZSBiZXR3ZWVuIGEgZGVjb3JhdG9yIGNvbXBpbGVyIGZyb20gQGFuZ3VsYXIvY29tcGlsZXIgYW5kIHRoZSBUeXBlc2NyaXB0XG4gKiBjb21waWxlci90cmFuc2Zvcm0uXG4gKlxuICogVGhlIGRlY29yYXRvciBjb21waWxlcnMgaW4gQGFuZ3VsYXIvY29tcGlsZXIgZG8gbm90IGRlcGVuZCBvbiBUeXBlc2NyaXB0LiBUaGUgYWRhcHRlciBpc1xuICogcmVzcG9uc2libGUgZm9yIGV4dHJhY3RpbmcgdGhlIGluZm9ybWF0aW9uIHJlcXVpcmVkIHRvIHBlcmZvcm0gY29tcGlsYXRpb24gZnJvbSB0aGUgZGVjb3JhdG9yc1xuICogYW5kIFR5cGVzY3JpcHQgc291cmNlLCBpbnZva2luZyB0aGUgZGVjb3JhdG9yIGNvbXBpbGVyLCBhbmQgcmV0dXJuaW5nIHRoZSByZXN1bHQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGlsZXJBZGFwdGVyPEE+IHtcbiAgLyoqXG4gICAqIFNjYW4gYSBzZXQgb2YgcmVmbGVjdGVkIGRlY29yYXRvcnMgYW5kIGRldGVybWluZSBpZiB0aGlzIGFkYXB0ZXIgaXMgcmVzcG9uc2libGUgZm9yIGNvbXBpbGF0aW9uXG4gICAqIG9mIG9uZSBvZiB0aGVtLlxuICAgKi9cbiAgZGV0ZWN0KGRlY29yYXRvcjogRGVjb3JhdG9yW10pOiBEZWNvcmF0b3J8dW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGFuYWx5c2lzIG9uIHRoZSBkZWNvcmF0b3IvY2xhc3MgY29tYmluYXRpb24sIHByb2R1Y2luZyBpbnN0cnVjdGlvbnMgZm9yIGNvbXBpbGF0aW9uXG4gICAqIGlmIHN1Y2Nlc3NmdWwsIG9yIGFuIGFycmF5IG9mIGRpYWdub3N0aWMgbWVzc2FnZXMgaWYgdGhlIGFuYWx5c2lzIGZhaWxzIG9yIHRoZSBkZWNvcmF0b3JcbiAgICogaXNuJ3QgdmFsaWQuXG4gICAqL1xuICBhbmFseXplKG5vZGU6IHRzLkNsYXNzRGVjbGFyYXRpb24sIGRlY29yYXRvcjogRGVjb3JhdG9yKTogQW5hbHlzaXNPdXRwdXQ8QT47XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgZGVzY3JpcHRpb24gb2YgdGhlIGZpZWxkIHdoaWNoIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgY2xhc3MsIGluY2x1ZGluZyBhbnlcbiAgICogaW5pdGlhbGl6YXRpb24gY29kZSB0byBiZSBnZW5lcmF0ZWQuXG4gICAqL1xuICBjb21waWxlKG5vZGU6IHRzLkNsYXNzRGVjbGFyYXRpb24sIGFuYWx5c2lzOiBBKTogQWRkU3RhdGljRmllbGRJbnN0cnVjdGlvbjtcbn1cblxuLyoqXG4gKiBUaGUgb3V0cHV0IG9mIGFuIGFuYWx5c2lzIG9wZXJhdGlvbiwgY29uc2lzdGluZyBvZiBwb3NzaWJseSBhbiBhcmJpdHJhcnkgYW5hbHlzaXMgb2JqZWN0ICh1c2VkIGFzXG4gKiB0aGUgaW5wdXQgdG8gY29kZSBnZW5lcmF0aW9uKSBhbmQgcG90ZW50aWFsbHkgZGlhZ25vc3RpY3MgaWYgdGhlcmUgd2VyZSBlcnJvcnMgdW5jb3ZlcmVkIGR1cmluZ1xuICogYW5hbHlzaXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQW5hbHlzaXNPdXRwdXQ8QT4ge1xuICBhbmFseXNpcz86IEE7XG4gIGRpYWdub3N0aWNzPzogdHMuRGlhZ25vc3RpY1tdO1xufVxuXG4vKipcbiAqIEEgZGVzY3JpcHRpb24gb2YgdGhlIHN0YXRpYyBmaWVsZCB0byBhZGQgdG8gYSBjbGFzcywgaW5jbHVkaW5nIGFuIGluaXRpYWxpemF0aW9uIGV4cHJlc3Npb25cbiAqIGFuZCBhIHR5cGUgZm9yIHRoZSAuZC50cyBmaWxlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFkZFN0YXRpY0ZpZWxkSW5zdHJ1Y3Rpb24ge1xuICBmaWVsZDogc3RyaW5nO1xuICBpbml0aWFsaXplcjogRXhwcmVzc2lvbjtcbiAgdHlwZTogVHlwZTtcbn1cbiJdfQ==