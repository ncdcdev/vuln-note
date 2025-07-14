import { Textarea } from "./ui/textarea";

interface MarkdownEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const MarkdownEditor = ({
    value,
    onChange,
    placeholder,
}: MarkdownEditorProps) => {
    return (
        <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder || "Markdownを入力してください..."}
            className="w-full h-64 sm:h-80 md:h-96 font-mono text-sm sm:text-base"
        />
    );
};
