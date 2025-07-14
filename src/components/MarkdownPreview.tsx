interface MarkdownPreviewProps {
    html: string;
}

export const MarkdownPreview = ({ html }: MarkdownPreviewProps) => {
    return (
        <div
            className="prose prose-sm sm:prose-base max-w-none p-4 border rounded-md min-h-[16rem] sm:min-h-[20rem] md:min-h-[24rem] overflow-auto"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};
