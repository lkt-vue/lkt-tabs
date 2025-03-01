declare namespace _default {
    let plugins: import("vite").Plugin<import("@vitejs/plugin-vue").Api>[];
    namespace resolve {
        let alias: {
            '@': string;
            '@test': string;
        };
    }
    namespace build {
        export namespace lib {
            let entry: string;
            let name: string;
            function fileName(format: any): string;
        }
        export { outDir };
        export let minify: boolean;
        export namespace rollupOptions {
            let external: string[];
            namespace output {
                let globals: {
                    vue: string;
                    "lkt-tools": string;
                    "lkt-events": string;
                    "lkt-session": string;
                };
                let sourcemapExcludeSources: boolean;
            }
        }
    }
    namespace test {
        namespace coverage {
            let reporter: string[];
        }
        function resolveSnapshotPath(testPath: any, snapExtension: any): string;
    }
}
export default _default;
declare const outDir: string;
