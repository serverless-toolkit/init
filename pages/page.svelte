<script context="module" lang="ts">
    import { Request, Response } from "@serverless-toolkit/cli";

    export const title = "Example Page";
    export let data = {};

    export async function get(
        request: Request,
        response: Response
    ): Promise<void> {
        data = request.queryStringParameters || {};
    }

    export async function post(
        request: Request,
        response: Response
    ): Promise<void> {
        data = request.body || {};
    }
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<pre>
    <code>  
    {JSON.stringify(data, null, 4)}
    </code>
</pre>

<style>
</style>
