export function detectLanguage(fileExtension: string): string {
    const languageMap: { [key: string]: string } = {
        'js': 'javascript',
        'jsx': 'javascript',
        'ts': 'typescript',
        'tsx': 'typescript',
        'py': 'python',
        'java': 'java',
        'rb': 'ruby',
        'php': 'php',
        'html': 'html',
        'css': 'css',
        'scss': 'scss',
        'sass': 'sass',
        'swift': 'swift',
        'c': 'c',
        'cpp': 'c++',
        'cs': 'c#',
        'go': 'go',
        'rs': 'rust',
        'kt': 'kotlin',
        'r': 'R',
        'scala': 'scala',
        'sql': 'SQL',
        'yaml': 'yaml',
        'json': 'json',
    };

    const extension = fileExtension?.toLowerCase();

    if (languageMap.hasOwnProperty(extension)) {
        return languageMap[extension];
    } else {
        return 'Language not found';
    }
}