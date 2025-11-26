# House of Agile Translation System

This directory contains translation files for the House of Agile website.

## Directory Structure

```
translations/
├── i18n.js           # Translation loader library
├── en/               # English translations (source)
│   └── services/
│       └── *.json
├── de/               # German translations
│   └── services/
│       └── *.json
└── fr/               # French translations
    └── services/
        └── *.json
```

## Translation Workflow with DeepL

### 1. Export for Translation
```bash
# Copy English file to translate
cp translations/en/services/devops-cloud-infrastructure.json \
   translations/devops-cloud-infrastructure-to-translate.json
```

### 2. Translate with DeepL
1. Go to https://www.deepl.com/translator
2. Upload the JSON file OR copy the content values
3. Translate from English to German (or French)
4. Download/copy the translated content

### 3. Import Translated File
```bash
# Save translated content to appropriate directory
# Save to translations/de/services/devops-cloud-infrastructure.json (for German)
# Save to translations/fr/services/devops-cloud-infrastructure.json (for French)
```

## File Format

Each translation file contains:

```json
{
  "meta": {
    "title": "Page title for SEO",
    "description": "Meta description",
    "ogTitle": "Open Graph title",
    "ogDescription": "Open Graph description"
  },
  "content": {
    "key": "Translated text",
    "nested": {
      "key": "More translated text"
    }
  }
}
```

## Tips for DeepL Translation

1. **Maintain JSON structure** - Only translate the VALUES, not the KEYS
2. **Keep HTML tags** - If there's HTML in values, keep the tags intact
3. **Preserve placeholders** - Keep any `{{variable}}` placeholders
4. **Context matters** - DeepL works better with full context, so translate whole files
5. **Review technical terms** - Check that Docker, Kubernetes, etc. are handled correctly

## Testing Translations

1. Save your translation file to the correct directory
2. Open the page with `?lang=de` or `?lang=fr` parameter
3. Check that all content is translated correctly
4. Verify meta tags are updated for SEO

## Languages

- `en` - English (source language)
- `de` - German (Deutsch)
- `fr` - French (Français)
