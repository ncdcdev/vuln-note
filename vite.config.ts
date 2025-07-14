import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const isDev = mode === "development";

    return {
        base: process.env.BASE_PATH || "/",
        html: {
            cspNonce: isDev ? "vite-dev" : undefined,
        },
        plugins: [
            react(),
            tailwindcss(),
            {
                name: "conditional-csp",
                transformIndexHtml(html, ctx) {
                    // デモのためinsecure.htmlには何もしない
                    if (ctx.path === "/insecure.html") {
                        return html;
                    }

                    const cspBase = [
                        //
                        "default-src 'self';",
                        "img-src *;",
                    ].join(" ");

                    const cspMeta = isDev
                        ? `<meta http-equiv="Content-Security-Policy" content="${cspBase} 'nonce-vite-dev';">`
                        : `<meta http-equiv="Content-Security-Policy" content="${cspBase}">`;

                    return html.replace("<head>", `<head>\n${cspMeta}`);
                },
            },
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        build: {
            rollupOptions: {
                input: {
                    insecure: path.resolve(__dirname, "insecure.html"),
                    secure: path.resolve(__dirname, "secure.html"),
                },
            },
        },
    };
});
