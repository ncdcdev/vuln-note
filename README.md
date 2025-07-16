# Vuln Note

意図的にXSS脆弱性を含むMarkdownエディタのデモアプリケーションです

## 特徴

- Markdownの編集・表示機能
- URLパラメータによるコンテンツ共有

## XSSデモの例

insecure.htmlにて、以下のようなMarkdownを表示しようとすると、XSSが実行されます

```markdown
<img src="x" onerror="alert('Hello World!')">
```

[デモ (insecure.html)](https://ncdcdev.github.io/vuln-note/insecure.html?c=DwSwtg5gBAzgTgYwLwCIAeKoHsB2BTOOLOVAQwBsCAXACgHIANAZSYEI6BKTCq1QBl9Ap7qBVBkAxDIH0GcBED9DIAaGTAHoAfEA&mode=view)

secure.htmlではCSPが設定されているので実行されないはずです

[デモ (sercure.html)](https://ncdcdev.github.io/vuln-note/secure.html?c=DwSwtg5gBAzgTgYwLwCIAeKoHsB2BTOOLOVAQwBsCAXACgHIANAZSYEI6BKTCq1QBl9Ap7qBVBkAxDIH0GcBED9DIAaGTAHoAfEA&mode=view)

## ライセンス

MIT License
