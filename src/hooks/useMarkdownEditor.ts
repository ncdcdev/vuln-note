import LZString from "lz-string";
import { marked } from "marked";
import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";

marked.setOptions({
    breaks: true,
    gfm: true,
});

export type EditorMode = "edit" | "view";

export const useMarkdownEditor = () => {
    const [content, setContent] = useQueryState("c", {
        defaultValue: "",
        parse: (value) => {
            try {
                return LZString.decompressFromEncodedURIComponent(value) || "";
            } catch {
                return "";
            }
        },
        serialize: (value) => LZString.compressToEncodedURIComponent(value),
    });

    const [mode, setMode] = useQueryState<EditorMode>("mode", {
        defaultValue: "edit",
        parse: (value) => (value === "view" ? "view" : "edit"),
    });

    const [renderedHtml, setRenderedHtml] = useState("");

    useEffect(() => {
        if (mode === "view") {
            const html = marked.parse(content) as string;
            setRenderedHtml(html);
        }
    }, [content, mode]);

    return {
        content,
        setContent,
        mode,
        setMode,
        renderedHtml,
    };
};
