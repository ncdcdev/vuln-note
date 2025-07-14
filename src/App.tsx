import { MarkdownEditor } from "./components/MarkdownEditor";
import { MarkdownPreview } from "./components/MarkdownPreview";
import { Button } from "./components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { useMarkdownEditor } from "./hooks/useMarkdownEditor";

const markdownSample = `
# Vuln Note Demo

[![Design in MS Paint](https://forthebadge.com/images/badges/designed-in-ms-paint.svg)](https://forthebadge.com)

---

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~
`.trim();

const xssSample = `<img src="x" onerror="alert('XSS!')" alt="細工されたimgタグ" />`;

function App() {
    const { content, setContent, mode, setMode, renderedHtml } =
        useMarkdownEditor();

    return (
        <div className="min-h-screen p-4 sm:p-6 md:p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
                    Vuln Note (XSS Demo)
                </h1>

                <Tabs
                    value={mode}
                    onValueChange={(value) => setMode(value as "edit" | "view")}
                >
                    <div className="flex flex-row flex-wrap items-center justify-between gap-2">
                        <TabsList className="w-fit [&>button]:min-w-[4ic] [&>button]:flex-none">
                            <TabsTrigger value="edit">編集</TabsTrigger>
                            <TabsTrigger value="view">閲覧</TabsTrigger>
                        </TabsList>
                        <div className="flex flex-row gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setContent(markdownSample)}
                            >
                                Markdownサンプル
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setContent(xssSample)}
                            >
                                XSSサンプル
                            </Button>
                        </div>
                    </div>

                    <TabsContent value="edit">
                        <MarkdownEditor value={content} onChange={setContent} />
                    </TabsContent>

                    <TabsContent value="view">
                        <MarkdownPreview html={renderedHtml} />
                    </TabsContent>
                </Tabs>

                <div className="mt-4 text-sm text-gray-600">
                    URLを共有してノートを共有できます。
                </div>
            </div>
        </div>
    );
}

export default App;
