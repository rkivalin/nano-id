declare module "nano-id" {
    function nanoId(length?: number | null): string;

    namespace nanoId {
        function verify(nanoId?: string | null): boolean;
    }

    export = nanoId;
}