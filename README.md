# Vuln Note

意図的にXSS脆弱性を含むMarkdownエディタのデモアプリケーションです

## 特徴

- Markdownの編集・表示機能
- URLパラメータによるコンテンツ共有

## XSSデモの例

以下のようなMarkdownを表示しようとすると、XSSが実行されます

```markdown
<img src="x" onerror="alert('Hello World!')">
```

## ライセンス

MIT License
