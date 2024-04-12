type LanguageMap = {
  [language: string]: RegExp;
};

export function detectLanguage(codeSnippet: string): string {
  const languageMap: LanguageMap = {
    typescript:
      /import\s+React|\(<\w+[^>]*>\)|\{[^}]*\}|\(([^)]*)\)\s*=>|interface|type|let|const|function|=>|class|className=/g,
    javascript: /function|const|let|var|=>|import|export|class|module/g,
    python: /import|def|class|:\s|\sreturn\s/g,
    php: /<\?php|\?>|echo|function|$|use\s/g,
    ruby: /def|class|end|module|require/g,
    cpp: /#include|using|int\s+main|std::|cout|cin|namespace/g,
    go: /package|import|func|type|defer|fmt\./g,
    swift: /import|func|let|var|class|struct|extension/g,
    kotlin: /import|fun|val|var|class|object|package/g,
    css: /([^{]+\{[^}]+\})/g,
    sass_scss: /([a-zA-Z0-9]+(\s*:\s*|\s*@\w+|\s*&|\s*\/\*|\s*\/\/))/g,
    html: /<!DOCTYPE html|<\w+[^>]*>|<\s*\/>|\bclass\s*/gi,
    java: /class|public|private|protected|static|import|package|new|throw|try|catch|finally|super|this\b/g,
    csharp:
      /\bclass|new|using|namespace|public|private|protected|static|void|int|string|bool|float|double|decimal|var|const|if|else|for|while|switch|case|default|try|catch|finally|return|Console\./g, // C# için yeni RegExp
  };

  if (codeSnippet.match(/<!DOCTYPE html>/)) {
    return "html";
  }

  for (const [language, regex] of Object.entries(languageMap)) {
    if (regex.test(codeSnippet)) {
      return language;
    }
  }

  return "Unknown";
}
