/**
 * House of Agile i18n System
 * Client-side translation loader with SEO optimization
 */

class I18n {
  constructor() {
    this.currentLang = 'en';
    this.translations = {};
    this.defaultLang = 'en';
    this.supportedLangs = ['en', 'de', 'fr'];
  }

  /**
   * Initialize i18n system
   * @param {string} translationFile - Path to translation JSON file
   */
  async init(translationFile) {
    // Detect language from URL or localStorage
    this.currentLang = this.detectLanguage();
    
    // Load translations
    try {
      await this.loadTranslations(translationFile);
      this.applyTranslations();
      this.updateLanguageSwitcher();
    } catch (error) {
      console.warn('Translation loading failed, using default content:', error);
      // Fallback to English (HTML content already in page)
      this.currentLang = 'en';
    }
  }

  /**
   * Detect language from URL parameter or localStorage
   */
  detectLanguage() {
    // Check URL parameter (?lang=de)
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && this.supportedLangs.includes(urlLang)) {
      localStorage.setItem('hoaLang', urlLang);
      return urlLang;
    }

    // Check localStorage
    const storedLang = localStorage.getItem('hoaLang');
    if (storedLang && this.supportedLangs.includes(storedLang)) {
      return storedLang;
    }

    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (this.supportedLangs.includes(browserLang)) {
      return browserLang;
    }

    return this.defaultLang;
  }

  /**
   * Load translation file
   */
  async loadTranslations(translationFile) {
    // If English, we can skip loading (content already in HTML)
    if (this.currentLang === 'en') {
      return;
    }

    const langFile = translationFile.replace('/en/', `/${this.currentLang}/`);
    const response = await fetch(langFile);
    
    if (!response.ok) {
      throw new Error(`Translation file not found: ${langFile}`);
    }
    
    this.translations = await response.json();
  }

  /**
   * Apply translations to page
   */
  applyTranslations() {
    // If English, no need to replace content
    if (this.currentLang === 'en' || !this.translations.content) {
      return;
    }

    // Replace content with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getNestedValue(this.translations.content, key);
      
      if (translation) {
        element.textContent = translation;
      }
    });

    // Replace HTML content with data-i18n-html attributes
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const key = element.getAttribute('data-i18n-html');
      const translation = this.getNestedValue(this.translations.content, key);
      
      if (translation) {
        element.innerHTML = translation;
      }
    });

    // Update meta tags for SEO
    this.updateMetaTags();
  }

  /**
   * Get nested value from object using dot notation
   */
  getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  /**
   * Update meta tags for SEO
   */
  updateMetaTags() {
    if (!this.translations.meta) return;

    const meta = this.translations.meta;
    
    // Update title
    if (meta.title) {
      document.title = meta.title;
    }

    // Update meta description
    if (meta.description) {
      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) descMeta.setAttribute('content', meta.description);
    }

    // Update OG tags
    if (meta.ogTitle) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', meta.ogTitle);
    }

    if (meta.ogDescription) {
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', meta.ogDescription);
    }

    // Update html lang attribute
    document.documentElement.setAttribute('lang', this.currentLang);
  }

  /**
   * Update language switcher UI
   */
  updateLanguageSwitcher() {
    const currentPath = window.location.pathname;
    const currentPage = this.getCurrentPageName();

    this.supportedLangs.forEach(lang => {
      const button = document.querySelector(`[data-lang="${lang}"]`);
      if (!button) return;

      if (lang === this.currentLang) {
        // Current language - show as active
        button.classList.remove('bg-hoa-100', 'hover:bg-hoa-200');
        button.classList.add('bg-hoa-200', 'text-hoa-900');
        button.style.cursor = 'default';
        button.onclick = null;
      } else {
        // Other languages - show as clickable
        button.classList.remove('bg-hoa-200', 'text-hoa-900');
        button.classList.add('bg-hoa-100', 'hover:bg-hoa-200', 'text-hoa-800', 'transition-colors');
        button.style.cursor = 'pointer';
        button.onclick = (e) => {
          e.preventDefault();
          this.switchLanguage(lang);
        };
      }
    });
  }

  /**
   * Get current page name for translation file path
   */
  getCurrentPageName() {
    const path = window.location.pathname;
    if (path === '/' || path === '/index.html') {
      return 'home';
    }
    const match = path.match(/\/services\/(.+)\.html/);
    return match ? match[1] : 'home';
  }

  /**
   * Switch language
   */
  async switchLanguage(lang) {
    if (!this.supportedLangs.includes(lang)) return;
    
    localStorage.setItem('hoaLang', lang);
    
    // Reload page with lang parameter
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.location.href = url.toString();
  }

  /**
   * Get current language
   */
  getCurrentLanguage() {
    return this.currentLang;
  }
}

// Export for use in pages
window.I18n = I18n;
