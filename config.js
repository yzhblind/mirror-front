module.exports = {
  documentSources: {
    mirrors: {
      folder: '/:lang/:segment+',
      path: '/:lang?/docs/:segment+',
      template: `./src/templates/mirror-doc.tsx`
    }
  },
  defaultLanguage: 'zh',
  apiBaseUrl: 'https://mirrors.zju.edu.cn/api'
};
